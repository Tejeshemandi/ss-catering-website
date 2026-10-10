# SS Catering Services & Event Management

Standalone React + Vite source for the Visakhapatnam catering website. This package can be opened in VS Code and published as a static site with GitHub Pages.

## Run it in VS Code

1. Extract the ZIP and open the `ss-catering-website` folder (the folder containing `package.json`) in VS Code.
2. Install Node.js 22.12 or later.
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
