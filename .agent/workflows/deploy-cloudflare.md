---
description: Deploy to Cloudflare Pages with custom domain
---

# Deploy Personal Website to Cloudflare Pages

This workflow will guide you through deploying your personal website to Cloudflare Pages and configuring it to use your custom domain `haydenhuan.com`.

## Prerequisites
- Cloudflare account with access to `haydenhuan.com` domain
- Git repository (GitHub, GitLab, or Bitbucket)

## Step 1: Prepare Your Project

Ensure your project builds successfully:

```bash
cd /home/hayden/Documents/personal-website/frontend
npm install
npm run build
```

The build output will be in the `dist` directory.

## Step 2: Push Your Code to Git Repository

If you haven't already, push your code to a Git repository:

```bash
cd /home/hayden/Documents/personal-website
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

## Step 3: Create Cloudflare Pages Project

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Connect to Git**
4. Authorize Cloudflare to access your Git repository
5. Select your repository: `personal-website`
6. Configure build settings:
   - **Project name**: `haydenhuan-com` (or your preferred name)
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Build output directory**: `frontend/dist`
   - **Root directory**: `/` (leave empty or set to root)
7. Click **Save and Deploy**

## Step 4: Configure Custom Domain

Once your site is deployed:

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `haydenhuan.com`
4. Cloudflare will automatically configure the DNS records since your domain is already on Cloudflare
5. Also add `www.haydenhuan.com` as a custom domain (optional but recommended)
6. Wait for DNS propagation (usually a few minutes)

## Step 5: Configure Environment Variables (if needed)

If your app requires environment variables:

1. Go to **Settings** → **Environment variables**
2. Add any necessary variables for production

## Step 6: Enable HTTPS and Security Settings

1. In your Cloudflare dashboard, go to **SSL/TLS**
2. Ensure SSL/TLS encryption mode is set to **Full** or **Full (strict)**
3. Enable **Always Use HTTPS** under SSL/TLS → Edge Certificates
4. Enable **Automatic HTTPS Rewrites**

## Step 7: Verify Deployment

1. Visit `https://haydenhuan.com` to see your live site
2. Check that all assets load correctly
3. Test navigation and functionality

## Automatic Deployments

Cloudflare Pages will automatically deploy:
- **Production**: Every push to your `main` branch
- **Preview**: Every pull request will get a unique preview URL

## Troubleshooting

### Build fails
- Check build logs in Cloudflare Pages dashboard
- Ensure `package.json` and dependencies are correct
- Verify build command works locally

### Custom domain not working
- Check DNS records in Cloudflare DNS settings
- Wait for DNS propagation (can take up to 24 hours, usually minutes)
- Ensure SSL/TLS is properly configured

### Assets not loading
- Check that build output directory is correct (`frontend/dist`)
- Verify all asset paths are relative, not absolute
- Check browser console for errors

## Useful Commands

Test build locally:
```bash
cd /home/hayden/Documents/personal-website/frontend
npm run build
npm run preview
```

This will serve your production build locally at `http://localhost:4173`
