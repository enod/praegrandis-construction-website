# Praegrandis Construction Website

A professional, elegant construction company website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Minimalistic yet elegant design showcasing construction excellence
- **Project Stories**: Comprehensive storytelling framework for showcasing construction projects
- **Trust Indicators**: Professional credentials, certifications, and client testimonials
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance**: Optimized for fast loading and excellent user experience
- **SEO Ready**: Structured for search engine optimization

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CMS Ready**: Prepared for Notion CMS integration

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd website
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

### Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── projects/         # Project pages
├── components/            # Reusable components
│   └── ProjectStory.tsx  # Project story template
├── lib/                  # Utilities and integrations
│   └── notion.ts        # Notion CMS integration (ready)
├── plan/                 # Project documentation
├── public/              # Static assets
└── .github/workflows/   # GitHub Actions for deployment
```

## Content Management

The website is prepared for Notion CMS integration with:
- Complete TypeScript interfaces for project data
- Sample project stories with full storytelling framework
- Database schema documentation
- Ready-to-use API integration structure

## Customization

### Brand Colors
- Primary Yellow: `#F5C842`
- Primary Green: `#2E7D32`

### Key Sections
- Hero with trust indicators
- Featured project stories
- Client testimonials
- Company credentials
- Detailed services
- Contact information

## License

Private project for Praegrandis Construction.

## Contact

For questions about this website, contact the development team.

---

🚀 **Live Website**: [praegrandis-construction-website](https://enod.github.io/praegrandis-construction-website/)