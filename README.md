# Express API Project

## Description
This is a simple Express.js API that returns user details, including an email, current date and time, and a GitHub profile link when accessed via the root route (`/`).

## Features
- Uses **Express.js** as the web framework
- Handles **CORS** for cross-origin resource sharing
- Returns a JSON response with:
  - Email address
  - Current server date and time
  - GitHub profile link

## Setup Instructions
### Prerequisites
Ensure you have **Node.js** installed on your machine.

### Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project folder:
   ```sh
   cd <project-folder>
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server
Start the server with the following command:
```sh
node server.js
```
Or if using **nodemon** for auto-reloading:
```sh
npx nodemon server.js
```

The server will start at `http://localhost:3000/`.

### API Endpoint
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api` | Returns user data (email, current date/time, GitHub link) |

## Issues
If you encounter any issues, ensure you have **CORS** properly installed and imported correctly:
```sh
npm install cors
```
Modify the import statement in `server.js`:
```js
const cors = require("cors");
```

## Contact
For more information, visit my GitHub profile: [NwekeFavour](https://github.com/NwekeFavour)

## Hire Me
Looking for a **Node.js Developer**? Check out my profile at [hng.tech](https://hng.tech/hire/nodejs-developers).

