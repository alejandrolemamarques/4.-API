# Random Joke Generator

## 📄 Description

This project is a modern web application that generates random jokes from multiple APIs. Users can rate jokes, and the app also displays current weather information for Barcelona. The project is built with TypeScript and uses modern web development practices.

## 🌟 Features

- Generate random jokes from multiple sources (DadJoke API and JokeAPI)
- Rate jokes with a 3-level scoring system
- View current weather in Barcelona
- Fun confetti animation for highly rated jokes
- Responsive design with a clean, modern interface

## 💻 Technologies Used

- TypeScript
- SCSS
- HTML5
- Fetch API
- Weather API
- Modern JavaScript (ES6+)
- Module bundling

## 📋 Requirements

- Node.js (v14 or higher)
- NPM (v6 or higher)
- A modern web browser

## 📦 Dependencies

```json
{
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@tsconfig/recommended": "^1.0.8",
    "eslint": "^9.22.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.3",
    "globals": "^16.0.0",
    "nodemon": "^3.1.9",
    "prettier": "3.5.3",
    "sass": "^1.85.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.8.2",
    "typescript-eslint": "^8.26.1"
  }
}
```

## 🛠️ Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/yourusername/random-joke-generator.git
   ```

2. Navigate to the project directory:

   ```sh
   cd random-joke-generator
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Create a config.ts file based on the template:

   ```sh
   cp src/config.template.ts src/config.ts
   ```

5. Add your Weather API key to the config.ts file

## ▶️ Running the Project

### Development Mode

```sh
npm run dev
```

This will start the development server with hot reloading.

### Build for Production

```sh
npm run build
```

This compiles TypeScript into JavaScript in the dist directory.

### Serve the Built Version

```sh
npm start
```

## 🧰 Project Structure

```
project-root/
├── src/
│   ├── index.ts         # Main application logic
│   ├── weatherAPI.ts    # Weather API integration
│   ├── style.scss       # Styling with SCSS
│   ├── config.ts        # Configuration (API keys)
│   └── config.template.ts # Template for configuration
├── dist/                # Compiled JavaScript files
├── node_modules/        # Dependencies
├── index.html           # Main HTML page
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## 🔍 Code Overview

### Joke Management

The application fetches jokes from two different APIs:

- DadJoke API: For classic dad jokes
- JokeAPI: For various categories of jokes

Users can rate jokes on a 3-point scale:

- 👎 (Not funny)
- 👍 (Funny)
- 🎉 (Hilarious - triggers confetti animation)

### Weather Display

The app shows current weather conditions for Barcelona, including:

- Temperature in Celsius
- Weather condition (sunny, cloudy, etc.)
- Condition icon
- Location name

## 🧪 Linting

The project uses ESLint and Prettier for code quality and formatting:

```sh
# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add: description of changes"
   ```
4. Push to your branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request