# Quitify privacy pages

`content/quitify-policy.json` is the shared Turkish, English and German source for the policy and deletion pages. Keep claims aligned with shipped app versions and the Play Console Data Safety declaration.

Regenerate the website:

```sh
python3 scripts/build-quitify-pages.py
```

Also regenerate Quitify's offline copies when updating the Android app:

```sh
python3 scripts/build-quitify-pages.py --app-assets /path/to/Quitify/app/src/main/assets
```

The app opens `quitify-privacy-policy.html?lang=…` online and uses its bundled copy if the main page cannot be loaded. The deletion page supports email requests; it does not automatically delete Firebase data.

## Handling deletion requests

Use the existing Quitify support address `swankydata9@gmail.com`. Verify ownership without requesting passwords, sign-in codes or complete backup files. The published target is 30 days after verification.

For full account deletion, prevent further writes from the account and remove the Firebase Authentication account, the user's `Users/{uid}` Firestore document, and any legacy `Backups/{uid}` Firebase Storage objects if they still exist. Do not delete a user's Google account. For backup-only deletion, preserve Authentication and remove the user's backup records, including legacy records. Ask the user to sign out or disable backups so that the app does not recreate them.

Keep only minimal correspondence needed to document the request or meet applicable legal requirements, not a copy of the app profile or backup. Confirm completion to the requester using the established support process. Device files, third-party file-provider copies and Android system backups must be managed by the user separately.

## Migration from Quitify-Requirements

The new canonical URLs are:

- `https://muhammedmustafageldi.github.io/App-Pages/quitify-privacy-policy.html`
- `https://muhammedmustafageldi.github.io/App-Pages/quitify-delete-account.html`

Keep the old repository available until Play Console has published the replacement links. The policy describes the old Storage-backed versions and the Firestore-backed 1.8.0 version so that the migration does not omit existing users.
