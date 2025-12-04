# Ashutosh Sonel - Portfolio Website

A modern, minimalistic, and fully responsive portfolio website built with Next.js 16, React, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalistic interface with smooth animations
- **Dark/Light Mode**: Automatic theme switching with manual toggle
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Performance**: Fast loading with Next.js App Router and image optimization
- **Contact Form**: Functional contact form with validation
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Type-Safe**: Built with proper TypeScript patterns

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: React 19
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Animations**: Custom CSS animations with Intersection Observer
- **UI Components**: Custom component library with ShadCN-inspired design

## Project Structure

```
ashutosh_portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API endpoint
│   ├── layout.js                 # Root layout with metadata
│   ├── page.js                   # Home page with all sections
│   ├── not-found.js              # Custom 404 page
│   └── globals.css               # Global styles and design system
├── components/
│   ├── animations/
│   │   └── FadeIn.jsx            # Scroll animation wrapper
│   ├── layout/
│   │   ├── ThemeProvider.jsx    # Theme context provider
│   │   ├── ThemeToggle.jsx      # Dark/light mode toggle
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── Footer.jsx           # Footer component
│   ├── sections/
│   │   ├── HeroSection.jsx      # Landing section
│   │   ├── AboutSection.jsx     # About me section
│   │   ├── SkillsSection.jsx    # Skills showcase
│   │   ├── ExperienceSection.jsx # Work experience timeline
│   │   ├── ProjectsSection.jsx  # Projects showcase
│   │   ├── EducationSection.jsx # Education history
│   │   └── ContactSection.jsx   # Contact form
│   └── ui/
│       ├── Button.jsx           # Button component
│       ├── Card.jsx             # Card components
│       ├── Badge.jsx            # Badge component
│       ├── Input.jsx            # Input component
│       ├── Textarea.jsx         # Textarea component
│       └── SectionContainer.jsx # Section wrapper
├── lib/
│   ├── data/
│   │   ├── personal.js          # Personal information
│   │   ├── skills.js            # Skills data
│   │   ├── experience.js        # Work experience data
│   │   ├── projects.js          # Projects data
│   │   └── education.js         # Education data
│   ├── hooks/
│   │   └── useIntersectionObserver.js
│   ├── validations/
│   │   └── contactSchema.js     # Contact form validation
│   └── utils.js                 # Utility functions
└── public/
    ├── images/
    │   ├── profile.jpg          # Your profile photo (ADD THIS)
    │   └── projects/            # Project screenshots (ADD THESE)
    └── Resume.pdf               # Your resume PDF (ADD THIS)
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   - Add your profile photo as `/public/images/profile.jpg`
   - Add project screenshots to `/public/images/projects/`
   - See `/public/images/PLACEHOLDER_INSTRUCTIONS.md` for details

3. **Add your resume:**
   - Place your resume PDF as `/public/Resume.pdf`
   - See `/public/RESUME_PLACEHOLDER.md` for details

4. **Customize your data:**
   Edit the files in `/lib/data/` to add your information:
   - `personal.js` - Update name, contact info, social links
   - `skills.js` - Add/modify your skills
   - `experience.js` - Update work experience
   - `projects.js` - Add your projects
   - `education.js` - Update education history

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization Guide

### 1. Personal Information

Edit `/lib/data/personal.js`:
- Update name, email, phone
- Change professional title and tagline
- Add your social media URLs
- Update current status and availability

### 2. Projects

Edit `/lib/data/projects.js`:
- Add/remove/edit projects
- Update project descriptions, technologies, and links
- Add project screenshots to `/public/images/projects/`

### 3. Experience

Edit `/lib/data/experience.js`:
- Update work experience entries
- Add responsibilities and achievements
- Update technologies used

### 4. Skills

Edit `/lib/data/skills.js`:
- Add/remove skills
- Organize by categories
- Update skill levels

### 5. Education

Edit `/lib/data/education.js`:
- Update educational background
- Add coursework and achievements

### 6. Theme Colors

Edit `/app/globals.css`:
- Customize color variables for light/dark themes
- Adjust the oklch color values in `:root` and `.dark`

### 7. SEO

Edit `/app/layout.js`:
- Update metadata (title, description, keywords)
- Add your website URL
- Update Open Graph and Twitter Card information

## Contact Form Setup

The contact form currently logs submissions to the console. To enable email notifications:

1. **Using a service like Resend, SendGrid, or Nodemailer:**
   - Install the email service package
   - Add API keys to environment variables
   - Update `/app/api/contact/route.js` to send emails

2. **Example with environment variables:**
   ```bash
   # .env.local
   EMAIL_SERVICE_API_KEY=your_api_key
   CONTACT_EMAIL=your@email.com
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables (if using email service)
4. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Sections Overview

1. **Hero**: Landing section with name, title, and call-to-action buttons
2. **About**: Professional bio with stats and contact information
3. **Skills**: Organized showcase of technical skills
4. **Experience**: Timeline of work experience with details
5. **Projects**: Filterable project showcase with modal details
6. **Education**: Academic background and achievements
7. **Contact**: Contact form with validation and information cards

## Features Breakdown

### Theme Switching
- Automatic detection of system preference
- Manual toggle in navbar
- Persists across sessions

### Animations
- Scroll-triggered fade-in animations
- Smooth page navigation
- Hover effects on interactive elements

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile
- Optimized layouts for all screen sizes

### Performance
- Server Components by default
- Client Components only where needed
- Optimized images with next/image
- Fast page loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Limitations

1. Images are placeholders - you need to add your own
2. Resume PDF needs to be added
3. Contact form logs to console - needs email service integration
4. Social links are placeholders - update with your actual URLs

## Troubleshooting

### Images not showing
- Check that images are in the correct directory
- Verify filenames match exactly (case-sensitive)
- Ensure images are in supported formats (JPG, PNG)

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript/syntax errors in your code
- Clear `.next` folder and rebuild

### Theme not switching
- Check browser console for JavaScript errors
- Verify ThemeProvider is wrapping the app
- Clear browser cache and localStorage

## Contributing

This is a personal portfolio website, but feel free to:
- Report bugs
- Suggest improvements
- Use as a template for your own portfolio

## License

This project is open source and available for personal use.

## Contact

Ashutosh Sonel
- Email: ashutoshsonel@gmail.com
- Phone: +91 9950669922
- Location: IIT Jodhpur, Rajasthan, India

---

Built with Next.js 16, React 19, and Tailwind CSS v4
