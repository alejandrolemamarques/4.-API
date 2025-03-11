"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Array to store all reported jokes and their ratings
const reportJokes = [];
/**
 * Fetches a random dad joke from the icanhazdadjoke API
 * @returns Promise containing the joke data
 */
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                Accept: 'application/json',
                'User-Agent': 'joke-generator (https://github.com/alejandrolemamarques/4.-API.git)',
            },
        });
        const data = yield response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching joke:', error);
    }
});
/**
 * Displays a new joke on the page and handles the UI state for report buttons
 * - Fetches and displays a new joke
 * - Resets all report button states
 * - If joke was previously rated, shows the previous rating
 */
const displayNewJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Fetch and display new joke
        const joke = yield getJoke();
        const jokeElement = document.getElementById('joke');
        if (!jokeElement) {
            throw new Error('Joke element not found');
        }
        jokeElement.textContent = joke.joke;
        console.log(joke);
        // Reset all report buttons to unselected state
        const reportButtons = document.querySelectorAll('.report-button');
        reportButtons.forEach((button) => {
            button.classList.remove('selected');
        });
        // If this joke was previously rated, highlight the corresponding button
        if (checkIfJokeAlreadyReported(joke.joke)) {
            const score = (_a = reportJokes.find((report) => report.joke === joke.joke)) === null || _a === void 0 ? void 0 : _a.score;
            const reportButton = document.getElementById(`report-button-${score}`);
            if (reportButton) {
                reportButton.classList.add('selected');
            }
        }
    }
    catch (error) {
        console.error('Error displaying joke:', error);
    }
});
/**
 * Checks if a joke has been previously reported
 * @param joke - The joke text to check
 * @returns boolean indicating if the joke exists in reportJokes array
 */
const checkIfJokeAlreadyReported = (joke) => {
    return reportJokes.some((report) => report.joke === joke);
};
/**
 * Handles the joke rating process
 * @param score - Rating value (1, 2, or 3)
 *
 * This function:
 * 1. Validates the presence of necessary DOM elements
 * 2. Handles both new ratings and updates to existing ratings
 * 3. Updates the UI to reflect the current rating
 * 4. Stores the rating in the reportJokes array
 */
const reportJoke = (score) => {
    // Validate joke element exists and has content
    const jokeElement = document.getElementById('joke');
    if (!jokeElement) {
        console.warn('No joke element found');
        return;
    }
    if (!jokeElement.textContent) {
        console.warn('No joke element text content found');
        return;
    }
    // Validate report button exists
    const reportButton = document.getElementById(`report-button-${score}`);
    if (!reportButton) {
        console.warn('No report button found');
        return;
    }
    const jokeText = jokeElement.textContent;
    // Check if this joke has been rated before
    const storedReport = reportJokes.find((report) => report.joke === jokeText);
    if (storedReport === undefined) {
        // Case: New rating - add to reportJokes array
        reportJokes.push({
            joke: jokeText,
            score,
            date: new Date().toISOString(),
        });
    }
    else {
        // Case: Update existing rating
        if (storedReport.score !== score) {
            // Remove highlight from previous rating button
            const previousReportButton = document.getElementById(`report-button-${storedReport.score}`);
            if (previousReportButton) {
                previousReportButton.classList.remove('selected');
            }
            // Update the stored rating
            storedReport.score = score;
            storedReport.date = new Date().toISOString();
        }
    }
    // Highlight the selected rating button
    reportButton.classList.add('selected');
    // Log updated ratings array
    console.log(reportJokes);
};
// Initialize the application by displaying the first joke when the page loads
displayNewJoke();
// Set up all event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up rating button listeners
    [1, 2, 3].forEach((score) => {
        const button = document.getElementById(`report-button-${score}`);
        if (button) {
            button.addEventListener('click', () => reportJoke(score));
        }
    });
    // Set up new joke button listener
    const jokeButton = document.getElementById('joke-button');
    if (jokeButton) {
        jokeButton.addEventListener('click', displayNewJoke);
    }
});
//# sourceMappingURL=index.js.map