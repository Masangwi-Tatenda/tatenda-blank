
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
  - `contexts/` - React contexts for state management
  - `lib/` - Utility functions and libraries
  - `pages/` - Page components for each route
  - `hooks/` - Custom React hooks

## Sanity CMS Integration

This project is integrated with Sanity.io for content management. To set up the Sanity connection:

1. Create a Sanity project at [sanity.io](https://www.sanity.io/)
2. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_SANITY_PROJECT_ID=your_project_id
   VITE_SANITY_DATASET=production
   VITE_SANITY_TOKEN=your_token_if_needed_for_write_access
   ```
3. The Sanity schema should match the type definitions in `src/lib/sanity.ts`

### Content Types

The website is set up to handle the following content types from Sanity:

- **Hero Slides**: Homepage carousel slides
- **Events**: Church events and gatherings
- **Blog Posts**: News and articles
- **Church Documents**: Downloadable PDFs and documents

### Adding Content from Sanity

1. Go to your Sanity Studio (typically at `https://your-project-name.sanity.studio`)
2. Create content using the defined schemas
3. The website will automatically fetch and display the content

## Responsive Design

The website is fully responsive and optimized for all device sizes:

- Mobile-first approach with progressive enhancement
- Responsive utility classes in the CSS
- Adaptive components that adjust to screen size
- Media query breakpoints for different device sizes

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build will be created in the `dist/` directory, which can be deployed to any static hosting service.

## Google Maps Integration

The Google Maps component requires an API key. To set it up:

1. Add your Google Maps API key to the `.env` file: `GOOGLE_MAPS_API_KEY=your_api_key_here`
2. Restart the development server
