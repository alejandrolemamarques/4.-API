# 3. Testing Project

## 📄 Description

This project demonstrates the implementation of unit testing practices using Jest. It includes a collection of functions for movie data manipulation and analysis, with comprehensive test coverage to ensure functionality.

## 💻 Technologies Used

- Jest
- JavaScript
- Node.js

## 📋 Requirements

- Node.js (v14 or higher)
- NPM (v6 or higher)
- Git

## 📦 Dev Dependencies

```json
{
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
```

These testing packages will be automatically installed when you run `npm install`.

## 🛠️ Installation

1. Clone this repository:

   ```sh
   git clone https://github.com/alejandrolemamarques/3.-Entrega-testing.git
   ```

2. Navigate to the project directory:

   ```sh
   cd 3.-Entrega-testing
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

## ▶️ Running Tests

### Unit Tests

```sh
npm run test
```

Running the tests will generate a `test-results.html` file with a detailed, user-friendly visualization of all test results. This includes:

- Test suite summaries
- Individual test results with timing
- Pass/fail status for each test
- Detailed test descriptions

### Watch Mode

```sh
npm run test:watch
```

## 🧪 Project Features

The project includes the following functions, each with its corresponding test suite:

1. `getAllDirectors`: Extract all directors from movie collection
2. `getMoviesFromDirector`: Filter movies by director
3. `moviesAverageOfDirector`: Calculate average score of a director's movies
4. `orderAlphabetically`: Sort movies by title
5. `orderByYear`: Sort movies by year and title
6. `moviesAverageByCategory`: Calculate average score by movie genre
7. `hoursToMinutes`: Convert movie durations to minutes
8. `bestFilmOfYear`: Find the highest-rated movie of a given year

## 📁 Project Structure

```
project-root/
├── src/
│   ├── films.js      # Main functions implementation
│   └── data.js       # Movie data
├── tests/
│   └── films.spec.js # Test suites
├── package.json
└── README.md
```

## 🎯 Testing Approach

Each function is tested for:

1. **Function Declaration**

   - Verify function exists
   - Check return type

2. **Input Handling**

   - Test with valid inputs
   - Verify array manipulation
   - Check edge cases

3. **Output Validation**
   - Verify correct calculations
   - Check sorting and filtering
   - Validate data transformations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Write tests for new features
4. Ensure all tests pass
5. Commit your changes:
   ```sh
   git commit -m "Add: description of changes"
   ```
6. Push to your branch:
   ```sh
   git push origin feature/your-feature-name
   ```
7. Create a Pull Request
