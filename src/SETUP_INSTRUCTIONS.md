# Setup Instructions for VSCode

Follow these steps to run your portfolio website locally in VSCode:

## Step 1: Prerequisites

Make sure you have installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **VSCode** - [Download here](https://code.visualstudio.com/)

To check if Node.js is installed, open a terminal and run:
```bash
node --version
npm --version
```

## Step 2: Get Your Files

1. Download all the project files from Figma Make
2. Create a new folder on your computer (e.g., `my-portfolio`)
3. Place all the downloaded files into this folder

## Step 3: Open in VSCode

1. Open VSCode
2. Go to `File > Open Folder...`
3. Select your project folder (`my-portfolio`)

## Step 4: Install Dependencies

1. Open the integrated terminal in VSCode:
   - Mac: `Ctrl + `` ` or `View > Terminal`
   - Windows/Linux: `` Ctrl + ` `` or `View > Terminal`

2. In the terminal, run:
```bash
npm install
```

This will install all the required packages. It may take a few minutes.

## Step 5: Start the Development Server

Once installation is complete, run:
```bash
npm run dev
```

You should see output like:
```
  VITE v6.0.1  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Step 6: View Your Website

1. Hold `Ctrl` (or `Cmd` on Mac) and click the URL `http://localhost:5173/`
2. Your portfolio will open in your default browser!

## Step 7: Make Changes

- Edit any `.tsx` file in VSCode
- Save the file (`Ctrl+S` or `Cmd+S`)
- The browser will automatically reload with your changes! 🎉

## Useful Commands

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Stop the server**: Press `Ctrl+C` in the terminal

## Common Issues

### Port 5173 is already in use
If you see this error, either:
- Close other Vite projects running
- Or Vite will automatically use a different port (like 5174)

### Module not found errors
Try deleting `node_modules` folder and running `npm install` again.

### TypeScript errors
Make sure all `.tsx` files are saved properly. VSCode's TypeScript server sometimes needs a restart:
- Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
- Type "TypeScript: Restart TS Server"
- Press Enter

## Recommended VSCode Extensions

For the best development experience, install these extensions:
1. **ES7+ React/Redux/React-Native snippets** - Code snippets for React
2. **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
3. **Prettier - Code formatter** - Code formatting
4. **ESLint** - Code linting

## Next Steps

Now you can:
- ✏️ Edit your content in the component files
- 🎨 Customize colors in `styles/globals.css`
- 🖼️ Replace the profile photo in `components/Hero.tsx`
- 📦 Build and deploy your site when ready

Happy coding! 🚀
