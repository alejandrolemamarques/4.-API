# Node.js and TypeScript Project Setup Guide

This guide will help you set up a Node.js project with TypeScript support and essential development tools.

## Initial Project Setup

**Why:** Initializing a Node.js project creates a package.json file that tracks your project dependencies, scripts, and metadata. This is the foundation of any Node.js project and enables npm to manage your project effectively.

```bash
# Initialize a new Node.js project and create package.json
npm init -y
```

## Project Structure

**Why:** A well-organized directory structure makes your project more maintainable and follows industry standards. Separating source code from compiled output keeps your project clean and easier to navigate.

Create the basic directory structure:

```bash
# Create basic project directory structure and files
mkdir dist  # Directory for compiled JavaScript files
mkdir src   # Directory for TypeScript source files and other source files
```

## TypeScript Configuration

**Why:** TypeScript adds static typing to JavaScript, helping catch errors during development rather than at runtime. It improves code quality, enables better tooling, and makes your codebase more maintainable, especially for larger projects.

Install TypeScript and create configuration:

```bash
# Install TypeScript as a development dependency
npm install -D typescript

# Create TypeScript configuration file (tsconfig.json)
npx tsc --init

# Install recommended tsconfig
npm install -D @tsconfig/recommended
```

Configure tsconfig.json:

**Why:** These specific TypeScript settings optimize your development workflow. The rootDir and outDir settings separate source from compiled code, while sourceMap enables better debugging by mapping compiled JavaScript back to the original TypeScript.

```json
{
  "extends": "@tsconfig/recommended/tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "sourceMap": true
  },
  "exclude": ["node_modules"]
}
```

> **Note:** Make sure in VSCode, TypeScript validation is enabled by accessing:  
> File > Settings > (search "typescript validation") > toggle on the "Enable/Disable" check

## Development Tools

**Why:** These tools streamline the development process, making it faster and more efficient to write, test, and debug code.

Install helpful development tools:

```bash
# Install nodemon for automatic server restart during development
# Why: Automatically restarts your server when files change, eliminating manual restarts
npm install -D nodemon

# Install ts-node to run TypeScript files directly
# Why: Allows you to run TypeScript code without a separate compilation step
npm install -D ts-node
```

### Code Quality Tools

**Why:** Maintaining code quality and consistency is crucial for collaborative projects. These tools enforce standards automatically, reducing errors and making code reviews more productive.

```bash
# Install ESlint package for linting (a step-by-step process will start)
# Why: ESLint checks your code for common errors and enforces coding standards
npm init @eslint/config@latest

# Install Prettier package for code formatting
# Why: Prettier automatically formats your code to ensure consistent style
npm install -D --save-exact prettier

# Install ESlint plugin and config for Prettier integration
# Why: These packages make ESLint and Prettier work together without conflicts
npm install -D eslint-plugin-prettier eslint-config-prettier
```

Add to eslint.config.mjs:

**Why:** This configuration integrates Prettier with ESLint, allowing Prettier to handle code formatting while ESLint handles code quality rules.

```js
import prettierPlugin from 'eslint-plugin-prettier/recommended';
```

and inside the rules array, add:

```js
prettierPlugin,
  {
    rules: {
      'prettier/prettier': 'warn',
    },
  };
```

**Important:** Install also VSCode Prettier Extension and ESLint Extension for better development experience, getting squiggly lines and linting errors directly in the editor.

### VS Code Configuration

**Why:** These settings automate formatting and linting fixes, ensuring your code is consistently formatted without manual effort, each time you save the file. This improves code quality and saves time.

Create VS Code workspace settings to format on save:

```bash
# Create .vscode directory on root
mkdir .vscode

# Create settings.json file
touch .vscode/settings.json
```

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  }
}
```

Create .prettierrc file:

**Why:** A dedicated Prettier configuration file allows you to customize formatting rules according to your team's preferences.

```bash
# Create .prettierrc file
touch .prettierrc
```

Configure .prettierrc file as you like, for example:

```json
{
  "singleQuote": true         // This will enforce using single quotes for strings
}
```

### Additional Tools (Optional)

**Why:** Depending on your project needs, these tools extend your capabilities for specific use cases.

```bash
# Install Sass for CSS preprocessing if needed for frontend projects
# Why: Sass enhances CSS with variables, nesting, and other features that make styling more maintainable
npm install -D sass
```

## Scripts Configuration

**Why:** Adding npm scripts creates shortcuts for common development tasks, standardizes commands across the team, and documents the intended workflow for your project.

Add these useful scripts to package.json:

```json
"scripts": {
    "start": "node dist/index.js",     // Runs the compiled application in production
    "build": "tsc",                    // Compiles TypeScript to JavaScript
    "dev": "nodemon --exec ts-node src/index.ts",  // Runs with auto-reload for development
    "lint": "eslint src/**/*.ts",      // Checks code for quality issues
    "lint:fix": "eslint src/**/*.ts --fix"  // Automatically fixes linting issues when possible
}
```

## Development

**Why:** Using the dev script enables you to see changes instantly without manual compilation steps, accelerating your development process.

Start the development server with:

```bash
npm run dev
```

## Project Setup Explanation

This setup guide has walked you through creating a professional Node.js project with TypeScript support. Here's what we've accomplished:

1. **Project Initialization**: Created a basic Node.js project with package.json
2. **Project Structure**: Set up a clean directory structure with separate source and build folders
3. **TypeScript Integration**: Added TypeScript with proper configuration for modern development
4. **Development Experience**: Configured tools to enhance the development workflow:
   - **nodemon**: Automatically restarts the server when code changes are detected
   - **ts-node**: Runs TypeScript code without requiring a separate compilation step
   - **ESLint**: Enforces code quality standards and catches potential issues
   - **Prettier**: Ensures consistent code formatting across the project
5. **Editor Configuration**: Set up VS Code settings for an optimal development experience
6. **Convenient Scripts**: Added npm scripts for common development tasks

This foundation provides a robust starting point for both backend and frontend TypeScript projects, with the right tools for maintaining code quality and developer productivity.

## Benefits of This Setup

By following this guide, you've created an environment with several important advantages:

1. **Error Prevention**: TypeScript and ESLint catch errors before they reach production
2. **Consistency**: Prettier and ESLint ensure all team members write code in a consistent style
3. **Efficiency**: Development tools like nodemon and ts-node speed up the development cycle
4. **Scalability**: The project structure and configuration support growth as your application expands
5. **Maintainability**: Clear separation of concerns and automated quality checks make long-term maintenance easier
6. **Onboarding**: New developers can quickly understand the project structure and start contributing
