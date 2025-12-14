# Personal Website - Deployment Guide

This guide will help you deploy your personal website to Cloudflare Pages with your custom domain `haydenhuan.com`.

## 🚀 Quick Start

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Go to Cloudflare Dashboard**:
   - Visit [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages**
   - Click **Create application** → **Pages** → **Connect to Git**

3. **Configure your project**:
   - **Project name**: `haydenhuan-com`
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `cd frontend && npm install && npm run build`
   - **Build output directory**: `frontend/dist`

4. **Set up custom domain**:
   - After deployment, go to **Custom domains**
   - Add `haydenhuan.com` and `www.haydenhuan.com`
   - Cloudflare will automatically configure DNS

### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
cd frontend
npm run build
wrangler pages deploy dist --project-name=haydenhuan-com
```

## 📁 Project Structure

```
personal-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedPosts.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── Footer.tsx
│   │   ├── data/
│   │   │   └── posts.ts
│   │   ├── types/
│   │   │   └── blog.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   │   ├── _headers         # Security headers
│   │   └── _redirects       # SPA routing
│   ├── dist/                # Build output
│   └── package.json
├── wrangler.toml            # Cloudflare config
└── README.md
```

## 🛠️ Development

```bash
# Install dependencies
cd frontend
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔒 Security Features

The deployment includes:
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **HTTPS**: Automatic SSL/TLS encryption
- **Asset Caching**: Optimized caching for static assets
- **SPA Routing**: Proper fallback for client-side routing

## 🌐 Custom Domain Configuration

Your domain `haydenhuan.com` will be configured with:
- **Root domain**: `haydenhuan.com` → Your site
- **WWW subdomain**: `www.haydenhuan.com` → Redirects to root
- **SSL/TLS**: Full (strict) encryption mode
- **Always HTTPS**: Automatic HTTPS redirects

## 📊 Automatic Deployments

Cloudflare Pages automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request gets a unique preview URL

## 🐛 Troubleshooting

### Build fails
- Ensure all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard
- Test build locally: `npm run build`

### Custom domain not working
- Verify DNS records in Cloudflare DNS settings
- Wait for DNS propagation (usually 5-10 minutes)
- Check SSL/TLS settings are correct

### Assets not loading
- Verify build output directory is `frontend/dist`
- Check browser console for errors
- Ensure all asset paths are relative

## 📝 Useful Commands

```bash
# Test production build locally
npm run build && npm run preview

# Check for TypeScript errors
npm run build

# Lint code
npm run lint
```

## 🔗 Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 📧 Support

For issues or questions, check the Cloudflare Pages documentation or open an issue in your repository.

---

Built with ❤️ using React, TypeScript, Tailwind CSS, and Framer Motion
