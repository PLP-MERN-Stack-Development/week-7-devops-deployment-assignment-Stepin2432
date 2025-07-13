# Frontend Deployment Instructions

This document outlines the steps required to deploy the frontend of the MERN stack application to a static hosting service.

## Prerequisites

1. Ensure that the frontend application is fully developed and tested locally.
2. Create an account on a static hosting service such as Vercel, Netlify, or GitHub Pages.

## Deployment Steps

### Step 1: Build the Application

Run the following command in the frontend directory to create a production build of the React application:

```bash
npm run build
```

This command will generate a `dist` or `build` folder containing the optimized static files.

### Step 2: Choose a Hosting Service

Select one of the following hosting services for deployment:

- **Vercel**
- **Netlify**
- **GitHub Pages**

### Step 3: Deploy to Vercel

1. Sign in to your Vercel account.
2. Click on "New Project" and import your GitHub repository.
3. Vercel will automatically detect the framework and set the build settings.
4. Click "Deploy" to start the deployment process.

### Step 4: Deploy to Netlify

1. Sign in to your Netlify account.
2. Click on "New site from Git" and connect your GitHub repository.
3. Set the build command to `npm run build` and the publish directory to `build`.
4. Click "Deploy site" to initiate the deployment.

### Step 5: Deploy to GitHub Pages

1. Ensure that your `package.json` file has the homepage field set to your GitHub Pages URL:

```json
"homepage": "https://<username>.github.io/<repository-name>"
```

2. Run the following command to deploy:

```bash
npm run deploy
```

### Step 6: Configure Environment Variables

If your application requires environment variables, make sure to configure them in your hosting service's settings.

### Step 7: Set Up a Custom Domain (Optional)

If you want to use a custom domain, follow the instructions provided by your hosting service to configure it.

### Step 8: Enable HTTPS

Ensure that HTTPS is enabled for your deployed application. Most hosting services provide automatic HTTPS configuration.

## Conclusion

Your frontend application should now be successfully deployed and accessible on the internet. Make sure to test the deployed application to verify that everything is functioning as expected.