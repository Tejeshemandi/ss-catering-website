# SS Catering Services & Event Management

Standalone React + Vite source for the Visakhapatnam catering website. This package can be opened in VS Code and published as a static site with GitHub Pages.

## Run it in VS Code

1. Extract the ZIP and open the `ss-catering-website` folder (the folder containing `package.json`) in VS Code.
2. Install Node.js 22.12 or later (Node 20.19+ also works). Check with `node -v`. A `.nvmrc` is included for nvm users.
3. Open **Terminal → New Terminal** in VS Code and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed in the terminal.

To make a production build locally:

```bash
npm run build
npm run preview
```

The static production files are created in `dist/`.

## Publish it with GitHub Pages

The ZIP includes `.github/workflows/deploy.yml`. It builds the site and deploys it to GitHub Pages whenever you push to the `main` branch.

1. Create a new GitHub repository.
2. Upload the **contents** of this folder to the repository root (so `package.json` and `.github/` are at the top level), or use Git from the VS Code terminal:

   ```bash
   git init
   git add .
   git commit -m "Add SS Catering website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

   Replace the repository URL with your own GitHub repository URL.

3. In GitHub, open **Settings → Pages** and set the build source to **GitHub Actions**.
4. Open the **Actions** tab and wait for “Build and deploy static website” to finish. GitHub Pages will show the public site URL under **Settings → Pages**.

The workflow automatically sets the correct base path for both a project repository and a `username.github.io` repository.

## Booking form note

The website links to the existing Google Form. That form currently asks visitors to sign in, so public bookings will remain blocked until its owner changes the Google Forms response-access settings to allow anyone with the link to respond without signing in.

## Troubleshooting

- **`npm install` fails with `ENOTFOUND package-firewall.replit.internal`** – the old `package-lock.json` pointed at a private mirror. This version of the lockfile uses `https://registry.npmjs.org/`. If you still see the error, delete `node_modules` and run `npm install` again.
- **`EBADENGINE` / Vite will not start** – upgrade Node.js to 22.12+ (or 20.19+).
- **Menu images missing after deploy** – menu posters now live in `src/assets/menu/` and are imported in `src/App.tsx`, so Vite adds the correct GitHub Pages base path and a content hash to each file name. To change a poster, replace the file with the same name (or add a new import) and push to `main`. Check the **Actions** tab: if the build is red, the site was not updated.
