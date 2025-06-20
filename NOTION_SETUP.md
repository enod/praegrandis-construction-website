# Notion CMS Integration Setup Guide

## Overview
Your Praegrandis Construction website is now integrated with Notion CMS for dynamic project storytelling. This allows you to manage project content directly from Notion and have it automatically appear on your website.

## Notion Setup Steps

### 1. Create Notion Database
1. Go to [Notion.so](https://notion.so)
2. Create a new page
3. Add a database (Table view)
4. Name it "Praegrandis Construction Projects"

### 2. Configure Database Properties
Copy this structure exactly into your Notion database:

#### Basic Properties
- `Title` - Title field (default)
- `Location` - Text field
- `Type` - Select field with options: `Residential`, `Commercial`, `Renovation`, `Extension`
- `Status` - Select field with options: `Completed`, `In Progress`, `Planned`
- `Timeline` - Text field
- `Budget` - Text field
- `Client` - Text field
- `Completed Date` - Date field
- `Description` - Text field

#### Story Properties (Your Storytelling Framework)
- `Vision` - Text field
- `Challenge` - Text field
- `Solution` - Text field
- `Process` - Text field (use line breaks to separate phases)
- `Transformation` - Text field
- `Impact` - Text field

#### Media Properties
- `Hero Image` - Files & media field
- `Before Images` - Files & media field
- `Process Images` - Files & media field
- `After Images` - Files & media field
- `Video URL` - URL field

#### Details Properties
- `Materials` - Multi-select field
- `Team Members` - Multi-select field
- `Features` - Multi-select field
- `Tags` - Multi-select field

#### Testimonial Properties
- `Testimonial Text` - Text field
- `Testimonial Author` - Text field
- `Testimonial Role` - Text field
- `Testimonial Rating` - Number field

#### Meta Properties
- `Awards` - Multi-select field
- `Featured` - Checkbox field
- `Slug` - Text field (for URL, e.g., "bondi-beach-house")
- `Meta Description` - Text field
- `Published Date` - Date field

### 3. Create Notion Integration
1. Go to [notion.so/my-integrations](https://notion.so/my-integrations)
2. Click "Create new integration"
3. Name it "Praegrandis Website"
4. Select your workspace
5. Copy the "Internal Integration Token"

### 4. Share Database with Integration
1. In your database, click "Share" button (top right)
2. Click "Invite"
3. Search for "Praegrandis Website" (your integration)
4. Give it "Can edit" permissions
5. Click "Invite"

### 5. Get Database ID
1. Open your database in Notion
2. Copy the URL from your browser
3. The database ID is the long string after the last slash and before the `?`
4. Example URL: `https://notion.so/your-workspace/Database-Name-12345678123456781234567812345678?v=...`
5. Database ID: `12345678123456781234567812345678`

## Local Development Setup

### 1. Environment Configuration
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your credentials:
   ```
   NOTION_TOKEN=your_integration_token_here
   NOTION_DATABASE_ID=your_database_id_here
   ```

### 2. Install Dependencies
```bash
npm install
```

### 3. Test Connection
```bash
npm run test:notion
```

This will verify your Notion integration is working correctly.

## Content Management Workflow

### Adding New Projects
1. Open your Notion database
2. Create a new row
3. Fill in all the project details
4. Upload images to the media fields
5. Set `Status` to "Completed" and `Featured` to true for homepage
6. Set `Published Date` to today
7. Your project will automatically appear on the website!

### Project Images from Dropbox
1. Save images from your Dropbox projects to your computer
2. Upload them to the appropriate Notion fields:
   - `Hero Image` - Main project image
   - `Before Images` - Pre-construction images
   - `Process Images` - Construction progress images
   - `After Images` - Completed project images

### Story Framework
Follow your established storytelling structure:
1. **Vision** - Client's dream and requirements
2. **Challenge** - Obstacles and considerations
3. **Solution** - Your approach and methodology
4. **Process** - Step-by-step execution (separate phases with line breaks)
5. **Transformation** - Before and after results
6. **Impact** - Client satisfaction and outcomes

## Sample Project Entry
Here's how to structure your first project:

```
Title: Bondi Beach House Transformation
Location: Bondi Beach, NSW
Type: Renovation
Status: Completed
Timeline: 8 months
Budget: $850K - $1.2M
Client: Chen Family
Completed Date: March 2024
Description: Complete transformation of a 1960s beach house into a modern sustainable family home with spectacular ocean views.

Vision: The Chen family dreamed of transforming their dated 1960s beach house into a modern family home that would honor the coastal setting while providing contemporary comfort and functionality.

Challenge: The project presented multiple complex challenges: heritage constraints that limited external modifications, severe coastal exposure requiring specialized weatherproofing solutions, strict council requirements for beachfront properties...

(Continue with Solution, Process, Transformation, Impact)
```

## Troubleshooting

### Common Issues
1. **"Connection failed"** - Check your integration token and database ID
2. **"No projects showing"** - Make sure Status is set to "Completed"
3. **"Images not loading"** - Ensure images are uploaded to Notion, not just linked
4. **"Database not found"** - Verify the database is shared with your integration

### Testing
- Use `npm run test:notion` to verify connection
- Check browser console for error messages
- Ensure all required fields are filled in Notion

## Features
- ✅ Dynamic project loading from Notion
- ✅ Automatic fallback to sample data if Notion unavailable
- ✅ Full project storytelling framework
- ✅ Image gallery support
- ✅ Client testimonials
- ✅ Project filtering and search
- ✅ SEO-optimized URLs

Your website will automatically update when you add or modify projects in Notion!