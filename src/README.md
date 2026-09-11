# Portfolio Website

A modern, cyberpunk-inspired portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Vibrant cyberpunk color scheme with cyan and magenta accents
- 📱 Fully responsive design
- 🌊 Smooth scrolling navigation with active section highlighting
- 💼 Sections for education, experience, projects, and skills
- 📧 Contact information with links to email, LinkedIn, and GitHub

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── components/          # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ui/             # UI component library
├── styles/
│   └── globals.css     # Global styles and Tailwind config
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.html          # HTML entry point

## Customization

### Update Content

Edit the component files in the `/components` directory to update your:
- Personal information
- Education and experience
- Projects
- Skills
- Contact details

### Change Colors

The color scheme is defined in `/styles/globals.css`. You can modify the CSS custom properties to change the theme.

### Add Profile Photo

Replace the placeholder image URL in `components/Hero.tsx` with your own profile photo.

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library

## License

MIT
