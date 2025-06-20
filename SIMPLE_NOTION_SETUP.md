# Simple Notion Setup Guide

## 🎯 Quick Setup (5 minutes)

### 1. Create Your Notion Database
In Notion, create a new database with these **8 simple fields**:

| Field Name | Type | Purpose |
|------------|------|---------|
| **Title** | Title | Project name |
| **Location** | Text | Where (e.g., "Bondi Beach, NSW") |
| **Type** | Select | Choose: Residential, Commercial, Renovation, Extension |
| **Story** | Text | 2-3 sentences about the project |
| **Hero Image** | Files | Main project photo |
| **Gallery Images** | Files | 4-6 project photos |
| **Video URL** | URL | YouTube/Vimeo link (optional) |
| **Featured** | Checkbox | Show on homepage? |

That's it! Much simpler than before. 

### 2. Add Your First Project
Example entry:
```
Title: Bondi Beach House Transformation
Location: Bondi Beach, NSW
Type: Renovation
Story: Complete transformation of a 1960s beach house into a modern sustainable family home. The project doubled the living space while preserving the coastal character and achieving heritage approval.
Hero Image: [Upload main photo]
Gallery Images: [Upload 4-6 photos]
Video URL: (optional)
Featured: ✓
```

### 3. Connect to Website
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations)
2. Create integration named "Praegrandis Website"
3. Copy the token
4. Share your database with the integration
5. Add to `.env.local`:
```
NOTION_TOKEN=your_token_here
NOTION_DATABASE_ID=your_database_id_here
```

## 📸 Working with Images

### From Dropbox to Notion:
1. Download images from your Dropbox project folders
2. In Notion, click on the image fields
3. Upload multiple images at once
4. That's it!

### Image Tips:
- **Hero Image**: Best wide shot of the completed project
- **Gallery**: Mix of before/after, details, and wide shots
- **Size**: Notion handles resizing automatically

## 🎬 Adding Videos
- Just paste YouTube or Vimeo links in the Video URL field
- The website automatically embeds them

## ✅ Benefits of Simplified Approach
- **Quick to update** - Add a project in 2 minutes
- **Visual focus** - Let images tell the story
- **Less writing** - Just 2-3 sentences needed
- **Easy management** - Only 8 fields to worry about

## 🚀 Testing Your Content
```bash
npm run dev
```
Visit `http://localhost:3000` to see your projects live!

Your simplified Notion CMS is ready to use!