# Finance-CRUD-React

A modern desktop application frontend built with React, Vite, Electron, and Tailwind CSS. Provides a responsive UI for managing companies (empresas) and items through REST API integration.

## Project Structure

```
react-core/
├── src/
│   ├── components/
│   │   ├── Footer.jsx       # Footer component
│   │   ├── ModalForm.jsx    # Reusable modal form component
│   │   ├── NavBar.jsx       # Navigation bar component
│   │   └── TableList.jsx    # Data table display component
│   ├── assets/              # Images, icons, and static files
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── postcss.config.js        # PostCSS configuration for Tailwind
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.js         # ESLint configuration
├── main.cjs                 # Electron main process entry
├── preloader.cjs            # Electron preload script
└── package.json
```

## Features

- **Fast Development**: Vite with Hot Module Replacement (HMR)
- **Desktop Application**: Electron integration for cross-platform desktop app
- **Responsive UI**: Tailwind CSS for modern, responsive design
- **Component-Based**: Reusable React components
- **Form Management**: Modal forms for CRUD operations
- **Data Tables**: Organized data display with sorting and filtering capabilities
- **Navigation**: Multi-page navigation with NavBar

## Installation

```bash
npm install
```

## Development

### Start Development Server

```bash
npm run dev
```

This starts the Vite development server with HMR enabled at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally to test before deployment.

## Components

### NavBar.jsx
Navigation bar component for application header and menu navigation.

### TableList.jsx
Displays data in a table format with support for:
- Displaying empresa or item data
- View, edit, and delete operations
- Pagination (if implemented)

### ModalForm.jsx
Reusable modal component for:
- Creating new records
- Editing existing records
- Form validation and submission

### Footer.jsx
Footer component for application footer content.

## Configuration

### Vite Configuration (`vite.config.js`)
Configures the development server, build output, and React plugin.

### Tailwind CSS (`tailwind.config.js`)
Customize Tailwind theme, colors, and utilities here.

### ESLint (`eslint.config.js`)
Code quality rules and linting configuration.

## Environment Variables

Create a `.env` file in the react-core directory:

```
VITE_API_BASE_URL=http://localhost:3000/api
```

Access in your components using `import.meta.env.VITE_API_BASE_URL`.

## Build Output

The production build generates:
- `dist/index.html` - Main HTML file
- `dist/assets/` - Bundled JavaScript and CSS
- Optimized and minified assets

## Electron Integration

### Main Process (`main.cjs`)
Handles window creation and Electron app lifecycle.

### Preload Script (`preloader.cjs`)
Provides secure communication between main and renderer processes.

## Development Best Practices

1. **Component Organization**: Keep components focused and reusable
2. **State Management**: Use React hooks for state management
3. **Styling**: Use Tailwind CSS utility classes for consistent styling
4. **API Calls**: Abstract API calls into separate modules or hooks
5. **Error Handling**: Implement proper error handling for API requests

## Tailwind CSS

Tailwind CSS is pre-configured for rapid UI development. Use utility classes directly in JSX:

```jsx
<button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Click me
</button>
```

## Performance Optimization

- **Code Splitting**: Vite automatically splits code at build time
- **Lazy Loading**: Use React.lazy() for route-based code splitting
- **Image Optimization**: Optimize images before adding to assets
- **Bundle Analysis**: Monitor bundle size with Vite plugins

## Browser Support

Works with all modern browsers supporting ES2020+.

## Debugging

1. Use React Developer Tools browser extension
2. Check console for Vite debug information
3. Use the browser's Developer Tools for inspection
4. Add `debugger` statements in code for breakpoints

## Building for Electron

The application is designed to run within Electron. Build and run the desktop app according to Electron's build process.

## Dependencies

Key packages:
- **react**: UI library
- **vite**: Build tool and dev server
- **tailwindcss**: Utility-first CSS framework
- **electron**: Desktop application framework

See `package.json` for complete dependency list.

## Troubleshooting

- **Port already in use**: Change the dev server port in `vite.config.js`
- **Tailwind styles not loading**: Ensure `index.css` imports Tailwind directives
- **HMR not working**: Check browser console for connection errors
- **Build fails**: Clear `node_modules` and `dist/` then reinstall

## License

This project is open source.
