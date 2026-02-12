# Backend - Electron-CRUD

Node.js/Express REST API for the Electron-CRUD application. Provides endpoints for managing companies (empresas) and items with a clean, modular architecture.

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── empresaController.js   # Empresa business logic handlers
│   │   └── itemController.js      # Item business logic handlers
│   ├── routes/
│   │   ├── empresaRoute.js        # Empresa API routes
│   │   └── itemRoute.js           # Item API routes
│   ├── services/
│   │   ├── empresaService.js      # Empresa service layer
│   │   └── itemService.js         # Item service layer
│   ├── db.js                       # Database configuration
│   └── index.js                    # Server entry point
└── package.json
```

## Architecture

The backend follows a layered architecture pattern:

- **Routes**: Define HTTP endpoints and request validation
- **Controllers**: Handle incoming requests and coordinate business logic
- **Services**: Contain business logic and data operations
- **Database**: Database connection and configuration

## Installation

```bash
npm install
```

## Running the Server

```bash
# Development mode
npm start

# Or manually start
node src/index.js
```

The server will run on `http://localhost:3000` (or the configured port).

## API Endpoints

### Empresas (Companies)

- `GET /api/empresa` - Get all companies
- `GET /api/empresa/:id` - Get a specific company
- `POST /api/empresa` - Create a new company
- `PUT /api/empresa/:id` - Update a company
- `DELETE /api/empresa/:id` - Delete a company

### Items

- `GET /api/item` - Get all items
- `GET /api/item/:id` - Get a specific item
- `POST /api/item` - Create a new item
- `PUT /api/item/:id` - Update an item
- `DELETE /api/item/:id` - Delete an item

## Database

The backend connects to a database via `src/db.js`. Update the database configuration in this file to match your database setup (PostgreSQL, MongoDB, MySQL, etc.).

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```
PORT=3000
NODE_ENV=development
DATABASE_URL=your_database_url
```

## Development

### Adding a New Resource

1. Create a service file: `src/services/[resourceName]Service.js`
2. Create a controller file: `src/controllers/[resourceName]Controller.js`
3. Create a route file: `src/routes/[resourceName]Route.js`
4. Import and use the routes in `src/index.js`

### Code Style

The project uses standard JavaScript conventions. Consider adding ESLint for code quality:

```bash
npm install --save-dev eslint
npx eslint --init
```

## Testing

To add tests, install a testing framework:

```bash
npm install --save-dev jest
```

Then create test files in a `__tests__` or `tests` directory.

## Debugging

Enable detailed logging by setting the environment variable:

```bash
DEBUG=* npm start
```

## Performance Considerations

- Use database indexing on frequently queried fields
- Implement pagination for large result sets
- Add caching strategies for frequently accessed data
- Monitor memory usage and optimize queries

## Deployment

When deploying to production:

1. Set `NODE_ENV=production`
2. Use a process manager like PM2
3. Set up a reverse proxy (nginx)
4. Enable CORS for frontend communication
5. Use environment variables for sensitive configuration

## Dependencies

Check `package.json` for all dependencies. Common packages include:
- **express**: Web framework
- **dotenv**: Environment variable management
- **cors**: Cross-Origin Resource Sharing
- **body-parser**: Request body parsing

## Troubleshooting

- **Connection refused**: Check if the server is running and listening on the correct port
- **CORS errors**: Verify CORS configuration in the Express app
- **Database connection failed**: Check database URL and credentials in `.env`

## License

This project is open source.