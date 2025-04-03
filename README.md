
# Musha WeBetania Parish Website

This is the official website for Musha WeBetania Roman Catholic Parish.

## Editing in VS Code

This project is built with React, TypeScript, and Tailwind CSS. To edit it in VS Code:

1. Clone the repository to your local machine
2. Install the dependencies with `npm install` or `yarn install`
3. Run the development server with `npm run dev` or `yarn dev`
4. Open the project in VS Code to edit the files

### Project Structure

- `src/` - Contains all the source code
  - `components/` - Reusable UI components
    - `common/` - General-purpose components
    - `home/` - Components specific to the homepage
    - `layout/` - Layout components (Navbar, Footer)
    - `ui/` - Basic UI components from shadcn/ui
  - `pages/` - Page components for each route
  - `hooks/` - Custom React hooks
  - `lib/` - Utility functions and libraries

### Customizing the Hero Section

The hero section uses a carousel of background images defined in `src/components/home/Hero.tsx`. To change the images:

1. Open `src/components/home/Hero.tsx`
2. Update the `heroImages` array with new image URLs, titles, and subtitles
3. Make sure to use high-quality images that work well with the overlay

### Google Maps Integration

The Google Maps component requires an API key. To set it up:

1. Create a `.env` file in the root directory
2. Add your Google Maps API key: `GOOGLE_MAPS_API_KEY=your_api_key_here`
3. Restart the development server

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build will be created in the `dist/` directory, which can be deployed to any static hosting service.
