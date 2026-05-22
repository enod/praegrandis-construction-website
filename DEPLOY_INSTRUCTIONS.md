# Deployment Instructions for GitHub Pages

## 🚀 Before You Deploy

### 1. Add GitHub Secrets and Variables
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- **NOTION_TOKEN**: Your Notion integration token
- **NOTION_DATABASE_ID**: Your Notion database ID

Add this repository variable, or a secret if you prefer keeping everything in the same place:
- **NEXT_PUBLIC_FORMSPREE_ENDPOINT**: Your Formspree endpoint, `https://formspree.io/f/xredqdvw`

⚠️ **Important**: Without the Notion secrets, your website will show sample data instead of your Notion content.

### 2. Verify Your Setup
- ✅ Notion integration is working locally
- ✅ Build completes without errors
- ✅ GitHub Actions workflow is updated (already done)

## 📤 Deploy to GitHub Pages

### Option 1: Push to GitHub (Automatic Deploy)
```bash
# Add all changes
git add .

# Commit with message
git commit -m "Add Notion CMS integration with simplified schema"

# Push to GitHub (this triggers automatic deployment)
git push origin main
```

### Option 2: Manual Deploy (if needed)
1. Go to Actions tab in your GitHub repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select main branch
5. Click "Run workflow"

## 🔍 Monitor Deployment

1. **Check GitHub Actions**:
   - Go to Actions tab
   - Watch the "Deploy to GitHub Pages" workflow
   - Should take 2-3 minutes

2. **Verify Deployment**:
   - Visit: https://enod.github.io/praegrandis-construction-website/
   - Check that your Notion content appears
   - Test project story pages

## 🐛 Troubleshooting

### If Notion Content Doesn't Appear:
1. Check GitHub Actions logs for errors
2. Verify secrets are set correctly in GitHub
3. Content will fall back to sample data if Notion fails

### If Build Fails:
1. Check the error in GitHub Actions
2. Most common issue: Missing environment variables
3. Verify NOTION_TOKEN and NOTION_DATABASE_ID are set

### If Contact Form Submissions Do Not Arrive:
1. Create or open your form in Formspree
2. Confirm the destination email has been verified
3. Copy the form endpoint into `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4. Re-run the GitHub Pages deploy workflow

## ✅ Post-Deploy Checklist
- [ ] Homepage loads with your featured project
- [ ] Projects page shows your Notion content
- [ ] Individual project story pages work
- [ ] Images display correctly
- [ ] Contact form sends to your Formspree inbox/email
- [ ] Mobile responsive design works

## 🔄 Future Updates
Whenever you update content in Notion:
1. Run `npm run sync:notion-assets` locally if you want to preview optimized local images.
2. For production, GitHub Actions should run `npm run build:with-assets` so it can fetch Notion content and generate optimized images before publishing to GitHub Pages.
3. If only Notion content changed, manually trigger the GitHub Pages workflow so it rebuilds with the latest content.

## 🖼️ Optimized Notion Images

Notion file URLs are temporary signed URLs and the uploaded originals can be several MB each. The site now supports a build-time image sync:

```bash
npm run sync:notion-assets
```

This downloads image files from the Notion database, converts them to compressed WebP files, and writes them to `public/notion-assets/` with a manifest. The generated folder is gitignored so large image files do not get committed; GitHub Actions should generate it during the deployment build.

For GitHub Pages, add these repository secrets and variables under **Settings → Secrets and variables → Actions**:

- `NOTION_TOKEN`
- `NOTION_DATABASE_ID`
- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` as a repository variable or secret

Then use this build command in the GitHub Pages workflow:

```bash
npm run build:with-assets
```

Your website is production-ready! 🎉
