// Supabase client initialization
let supabase;
try {
    supabase = window.supabase.createClient(
        window.SUPABASE_CONFIG.url,
        window.SUPABASE_CONFIG.anonKey
    );
} catch (e) {
    console.error('Supabase initialization error:', e);
}

// Global functions for onclick handlers
window.togglePassword = function(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;

    if (input.type === 'password') {
        input.type = 'text';
        button.textContent = '🙈';
    } else {
        input.type = 'password';
        button.textContent = '👁️';
    }
};

function checkPasswordStrength(password) {
    const strengthElement = document.getElementById('passwordStrength');
    let strength = 0;
    let message = '';

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (password.length === 0) {
        strengthElement.textContent = '';
    } else if (password.length < 8) {
        message = '❌ En az 8 karakter gerekli';
        strengthElement.className = 'password-strength strength-weak';
    } else if (strength < 3) {
        message = '⚠️ Zayıf şifre (kabul edilir)';
        strengthElement.className = 'password-strength strength-weak';
    } else if (strength < 4) {
        message = '⚠️ Orta güçlükte şifre';
        strengthElement.className = 'password-strength strength-medium';
    } else {
        message = '✅ Güçlü şifre';
        strengthElement.className = 'password-strength strength-strong';
    }

    strengthElement.textContent = message;
}

function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const matchElement = document.getElementById('passwordMatch');

    if (confirmPassword.length === 0) {
        matchElement.textContent = '';
        return false;
    }

    if (password === confirmPassword) {
        matchElement.textContent = '✅ Şifreler eşleşiyor';
        matchElement.className = 'password-match match-success';
        return true;
    } else {
        matchElement.textContent = '❌ Şifreler eşleşmiyor';
        matchElement.className = 'password-match match-error';
        return false;
    }
}


function updateSubmitButton() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const submitButton = document.getElementById('submitButton');

    // Check password strength (for display only)
    checkPasswordStrength(password);
    const isPasswordMatch = checkPasswordMatch();

    // Allow submission if password is 8+ characters and passwords match
    const isPasswordLongEnough = password.length >= 8;
    submitButton.disabled = !(isPasswordLongEnough && isPasswordMatch);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    
    if (passwordInput) {
        passwordInput.addEventListener('input', updateSubmitButton);
    }
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', updateSubmitButton);
    }

    // Toggle password buttons
    document.querySelectorAll('.toggle-password').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const input = this.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                this.textContent = '🙈';
            } else {
                input.type = 'password';
                this.textContent = '👁️';
            }
        });
    });

    // Form submission
    const resetForm = document.getElementById('resetForm');
    if (resetForm) {
        resetForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const submitButton = document.getElementById('submitButton');
        const buttonText = submitButton.querySelector('.button-text');
        const buttonLoading = submitButton.querySelector('.button-loading');
        const successMessage = document.getElementById('successMessage');
        const errorMessage = document.getElementById('errorMessage');
        const errorText = document.getElementById('errorText');

        // Show loading state
        buttonText.style.display = 'none';
        buttonLoading.style.display = 'inline';
        submitButton.disabled = true;

        try {
            // Get the access token from URL (try both hash and search params)
            const hashParams = new URLSearchParams(window.location.hash.substring(1));
            const searchParams = new URLSearchParams(window.location.search);

            const accessToken = hashParams.get('access_token') || searchParams.get('access_token');
            const refreshToken = hashParams.get('refresh_token') || searchParams.get('refresh_token');

            if (!accessToken) {
                throw new Error('Geçersiz veya süresi dolmuş bağlantı');
            }

            const password = document.getElementById('password').value;

            // Verify the password reset token
            const { data: verifyData, error: verifyError } = await supabase.auth.verifyOtp({
                token_hash: accessToken,
                type: 'recovery'
            });

            if (verifyError) {
                let userFriendlyMessage = 'Şifre sıfırlama bağlantısı geçersiz.';
                
                if (verifyError.message.includes('expired') || verifyError.message.includes('invalid')) {
                    userFriendlyMessage = 'Şifre sıfırlama bağlantısının süresi dolmuş veya geçersiz. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
                } else if (verifyError.message.includes('already_used')) {
                    userFriendlyMessage = 'Bu şifre sıfırlama bağlantısı daha önce kullanılmış. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
                } else if (verifyError.message.includes('not_found')) {
                    userFriendlyMessage = 'Şifre sıfırlama bağlantısı bulunamadı. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
                }
                
                throw new Error(userFriendlyMessage);
            }

            // Update the user's password
            const { data: updateData, error: updateError } = await supabase.auth.updateUser({
                password: password
            });

            if (updateError) {
                let userFriendlyMessage = 'Şifre güncellenirken bir sorun yaşandı.';
                
                if (updateError.message.includes('weak_password')) {
                    userFriendlyMessage = 'Şifre çok zayıf. Lütfen daha güçlü bir şifre seçin.';
                } else if (updateError.message.includes('same_password')) {
                    userFriendlyMessage = 'Yeni şifre mevcut şifrenizle aynı olamaz. Lütfen farklı bir şifre seçin.';
                } else if (updateError.message.includes('session')) {
                    userFriendlyMessage = 'Oturum süresi dolmuş. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
                }
                
                throw new Error(userFriendlyMessage);
            }

            // Show success message
            document.querySelector('.reset-form').style.display = 'none';
            document.querySelector('.help-section').style.display = 'none';
            successMessage.style.display = 'block';

            // Clear the URL hash for security
            window.history.replaceState(null, null, window.location.pathname);
            
            // Clear form data for security
            document.getElementById('password').value = '';
            document.getElementById('confirmPassword').value = '';

        } catch (error) {
            errorText.textContent = error.message || 'Şifre güncellenirken beklenmeyen bir sorun yaşandı. Lütfen tekrar deneyin.';
            errorMessage.style.display = 'block';

            // Reset button state
            buttonText.style.display = 'inline';
            buttonLoading.style.display = 'none';
            submitButton.disabled = false;
        }
    });
    }
});

// Prevent back button after successful reset
window.addEventListener('pageshow', function(event) {
    if (event.persisted && document.getElementById('successMessage').style.display === 'block') {
        window.location.reload();
    }
});

// Check if we have the necessary tokens on page load
window.addEventListener('load', function () {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const searchParams = new URLSearchParams(window.location.search);

    let accessToken = hashParams.get('access_token') || searchParams.get('access_token');
    let error = hashParams.get('error') || searchParams.get('error');
    let errorDescription = hashParams.get('error_description') || searchParams.get('error_description');

    // Check for errors first
    if (error) {
        let errorMessage = 'Bir hata oluştu.';

        if (error === 'access_denied') {
            if (errorDescription && errorDescription.includes('expired')) {
                errorMessage = 'Şifre sıfırlama bağlantısının süresi dolmuş. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
            } else {
                errorMessage = 'Erişim reddedildi. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
            }
        }

        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorText').textContent = errorMessage;
        document.querySelector('.reset-form').style.display = 'none';
        document.querySelector('.help-section').style.display = 'none';
        return;
    }

    // Check if this is a password recovery request
    if (!accessToken) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorText').textContent = 'Geçersiz şifre sıfırlama bağlantısı. Lütfen yeni bir şifre sıfırlama talebinde bulunun.';
        document.querySelector('.reset-form').style.display = 'none';
        document.querySelector('.help-section').style.display = 'none';
    }
});
