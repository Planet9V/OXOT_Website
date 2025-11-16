# OXOT Website - Deployment Guide

## Overview

This guide covers deploying the OXOT.nl website to various hosting platforms. The application is a React + Vite single-page application (SPA) that can be deployed to any static hosting service.

## Pre-Deployment Checklist

### Code Quality
- [ ] All features tested locally
- [ ] No console errors in browser
- [ ] All routes working correctly
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] Lighthouse scores >90 in all categories
- [ ] No broken links
- [ ] All images optimized

### Content Review
- [ ] All 7 articles reviewed for accuracy
- [ ] Citations verified
- [ ] No typos or grammatical errors
- [ ] Legal/compliance review if needed
- [ ] Content ownership verified

### Configuration
- [ ] Environment variables configured (if any)
- [ ] API endpoints updated for production
- [ ] Analytics configured (if using)
- [ ] SEO metadata complete
- [ ] Sitemap generated

## Build Process

### Create Production Build

```bash
# Navigate to project directory
cd oxot-website

# Install dependencies (if not already done)
npm install

# Create production build
npm run build

# Preview production build locally (optional)
npm run preview
```

### Build Output

The build creates a `dist/` directory containing:
```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # JavaScript bundle
│   ├── index-[hash].css    # CSS bundle
│   └── [other-assets]      # Images, fonts, etc.
└── [other-files]
```

**Build Characteristics**:
- Optimized and minified JavaScript
- CSS purged of unused styles
- Images compressed
- Code-split for faster loading
- Cache-friendly hashed filenames

## Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: Zero-config, automatic deployments, global CDN, free tier
**Best For**: Quick deployment, automatic preview deployments

#### Setup Steps

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   cd oxot-website
   vercel
   # Follow prompts
   ```

3. **Or Deploy via GitHub Integration**
   - Push code to GitHub
   - Connect repository at https://vercel.com
   - Auto-deploys on every push
   - Branch deploys for PRs

4. **Configuration**
   ```json
   // vercel.json (optional, at project root)
   {
     "buildCommand": "cd oxot-website && npm run build",
     "outputDirectory": "oxot-website/dist",
     "framework": "vite"
   }
   ```

5. **Custom Domain**
   - Add domain in Vercel dashboard
   - Update DNS records as instructed
   - SSL automatically provisioned

### Option 2: Netlify

**Pros**: Generous free tier, form handling, split testing
**Best For**: Teams wanting more features, A/B testing

#### Setup Steps

1. **Deploy via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   cd oxot-website
   npm run build
   netlify deploy --dir=dist
   ```

2. **Or Deploy via Git Integration**
   - Connect repository at https://netlify.com
   - Build settings:
     - Build command: `cd oxot-website && npm run build`
     - Publish directory: `oxot-website/dist`

3. **Configuration**
   ```toml
   # netlify.toml (at project root)
   [build]
     base = "oxot-website/"
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

4. **Custom Domain**
   - Add domain in Netlify dashboard
   - Configure DNS
   - SSL auto-provisioned

### Option 3: GitHub Pages

**Pros**: Free, simple, integrated with GitHub
**Best For**: Open source projects, documentation sites

#### Setup Steps

1. **Install gh-pages**
   ```bash
   cd oxot-website
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/OXOT_Website"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub**
   - Go to repository Settings → Pages
   - Source: gh-pages branch
   - Custom domain (optional)

5. **Note**: Routing requires special handling
   ```javascript
   // In vite.config.js, add:
   base: process.env.NODE_ENV === 'production' ? '/OXOT_Website/' : '/'
   ```

### Option 4: AWS S3 + CloudFront

**Pros**: Highly scalable, enterprise-grade, full control
**Best For**: Large enterprises, specific AWS requirements

#### Setup Steps

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://oxot-website
   aws s3 website s3://oxot-website/ --index-document index.html
   ```

2. **Upload Build**
   ```bash
   cd oxot-website
   npm run build
   aws s3 sync dist/ s3://oxot-website --delete
   ```

3. **Create CloudFront Distribution**
   - Origin: S3 bucket
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Compress Objects: Yes
   - Default Root Object: index.html

4. **Error Pages Configuration**
   - Error Code: 404
   - Response Page Path: /index.html
   - Response Code: 200
   - (Enables client-side routing)

5. **Automation Script**
   ```bash
   #!/bin/bash
   # deploy.sh
   npm run build
   aws s3 sync dist/ s3://oxot-website --delete
   aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
   ```

### Option 5: DigitalOcean App Platform

**Pros**: Simple, affordable, good performance
**Best For**: Small to medium projects

#### Setup Steps

1. **Connect Repository**
   - Create app at https://cloud.digitalocean.com/apps
   - Connect GitHub repository

2. **Configure Build**
   - Build Command: `cd oxot-website && npm run build`
   - Output Directory: `oxot-website/dist`
   - Run Command: (leave empty for static site)

3. **Deploy**
   - Auto-deploys on git push
   - Custom domain configurable

### Option 6: Self-Hosted (VPS/Dedicated Server)

**Pros**: Full control, can run additional services
**Best For**: Organizations with existing infrastructure

#### Setup Steps (Nginx Example)

1. **Build Application**
   ```bash
   npm run build
   scp -r dist/ user@your-server:/var/www/oxot
   ```

2. **Configure Nginx**
   ```nginx
   # /etc/nginx/sites-available/oxot
   server {
       listen 80;
       server_name oxot.nl www.oxot.nl;
       root /var/www/oxot;
       index index.html;

       # Handle client-side routing
       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location /assets/ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Gzip compression
       gzip on;
       gzip_vary on;
       gzip_types text/plain text/css text/xml text/javascript
                  application/x-javascript application/xml+rss
                  application/javascript application/json;
   }
   ```

3. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d oxot.nl -d www.oxot.nl
   ```

4. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

## Environment-Specific Configuration

### Production Environment Variables

If using environment variables, create `.env.production`:

```bash
# .env.production
VITE_API_URL=https://api.oxot.nl
VITE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_ENV=production
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Build Optimization

#### Vite Configuration

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,        // Disable in production
    minify: 'terser',        // Better minification
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
```

## DNS Configuration

### A Records (Static IP)
```
Type: A
Name: @
Value: Your-Server-IP
TTL: 3600
```

### CNAME Records (CDN/Platform)
```
Type: CNAME
Name: www
Value: your-app.vercel.app
TTL: 3600
```

### Example (Vercel)
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## SSL/TLS Configuration

### Automatic (Vercel, Netlify, etc.)
- SSL automatically provisioned
- Certificates auto-renewed
- No configuration needed

### Manual (Self-Hosted)
```bash
# Using Let's Encrypt
sudo certbot certonly --nginx -d oxot.nl -d www.oxot.nl

# Auto-renewal
sudo certbot renew --dry-run
```

## Performance Optimization

### Compression

Most platforms enable this by default. For self-hosted:

```nginx
# Enable Gzip in Nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_comp_level 6;
gzip_types text/plain text/css text/xml text/javascript
           application/x-javascript application/xml+rss
           application/javascript application/json;
```

### Caching Headers

```nginx
# Cache static assets
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-store, no-cache, must-revalidate";
}
```

### CDN Configuration

For global performance, use CDN:
- **Cloudflare**: Free tier, easy setup
- **Amazon CloudFront**: AWS integrated
- **Fastly**: Enterprise option

## Monitoring & Analytics

### Google Analytics

```html
<!-- In index.html <head> -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Error Monitoring

Consider using:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **DataDog**: Application monitoring

### Uptime Monitoring

- **UptimeRobot**: Free uptime monitoring
- **Pingdom**: Comprehensive monitoring
- **StatusCake**: Multiple check locations

## Rollback Strategy

### Vercel/Netlify
- Instant rollback to previous deployment in dashboard
- Git revert and automatic redeploy

### Manual Rollback
```bash
# Keep previous builds
dist-v1/
dist-v2/
dist-current/ -> symlink

# Rollback
rm dist-current
ln -s dist-v1 dist-current
```

## Continuous Deployment

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: cd oxot-website && npm ci

      - name: Build
        run: cd oxot-website && npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          working-directory: ./oxot-website
```

## Security Best Practices

### Headers Configuration

```nginx
# Security headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

### HTTPS Enforcement

```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name oxot.nl www.oxot.nl;
    return 301 https://$server_name$request_uri;
}
```

## Troubleshooting

### Blank Page After Deploy

**Issue**: Page loads but shows blank screen

**Solutions**:
1. Check browser console for errors
2. Verify base path in vite.config.js
3. Check that all routes have fallback to index.html
4. Clear browser cache

### 404 on Refresh

**Issue**: Routes work initially but 404 on page refresh

**Solution**: Configure server to serve index.html for all routes

**Vercel**:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**Netlify**:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Slow Initial Load

**Solutions**:
1. Check bundle size: `npm run build -- --mode production`
2. Enable code splitting
3. Optimize images
4. Enable CDN
5. Review and remove unused dependencies

### Assets Not Loading

**Issue**: CSS/JS/images not loading

**Solutions**:
1. Check base URL configuration
2. Verify asset paths are relative
3. Check CORS headers (if applicable)
4. Verify build output structure

## Post-Deployment

### Testing Checklist

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Articles page displays all articles
- [ ] Individual article pages load
- [ ] Simulations hub works
- [ ] AEON page displays correctly
- [ ] Agent Red page displays correctly
- [ ] Responsive on mobile/tablet
- [ ] No console errors
- [ ] Analytics tracking (if configured)
- [ ] Forms work (if applicable)
- [ ] Contact information correct

### Performance Check

```bash
# Run Lighthouse audit
npm install -g lighthouse
lighthouse https://oxot.nl --view
```

**Target Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Maintenance

### Regular Tasks

**Weekly**:
- Monitor uptime/performance
- Check error logs
- Review analytics

**Monthly**:
- Dependency updates: `npm outdated`
- Security audit: `npm audit`
- Content review

**Quarterly**:
- Full security review
- Performance optimization
- Content refresh/updates

### Update Process

```bash
# Update dependencies
npm update

# Check for security issues
npm audit fix

# Test locally
npm run dev

# Build and test
npm run build
npm run preview

# Deploy
[Your deployment command]
```

## Support

For deployment issues:
1. Check platform documentation
2. Review error logs
3. Test locally first
4. Check DNS propagation (https://dnschecker.org)
5. Contact platform support if needed

## Conclusion

The OXOT website is ready for deployment to any modern hosting platform. Choose the option that best fits your needs, budget, and technical requirements. Vercel and Netlify offer the easiest setup, while AWS S3 + CloudFront provides enterprise-grade scalability.

---

**Version**: 1.0.0
**Last Updated**: January 2025
**Platform**: React 18 + Vite 5
