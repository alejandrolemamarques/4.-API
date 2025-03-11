// Interface defining the structure of a joke report
// Each report contains the joke text, a score (1, 2, or 3), and a timestamp
interface JokeReport {
  joke: string;
  score: 1 | 2 | 3;
  date: string; // ISO format e.g. "2024-01-23T14:56:23.744Z"
}

// Define interfaces for API responses
interface DadJokeResponse {
  id: string;
  joke: string;
  status: number;
}

interface JokeAPIResponse {
  type: 'single' | 'twopart';
  joke?: string;
  setup?: string;
  delivery?: string;
  id: number;
  error?: boolean;
}

// Unified joke data structure
interface JokeData {
  joke: string;
}

// Array to store all reported jokes and their ratings
const reportJokes: JokeReport[] = [];

/**
 * Fetches a random dad joke from either icanhazdadjoke or jokeapi
 * @returns Promise containing the joke data or null if there's an error
 */
const getJoke = async (): Promise<JokeData | null> => {
  try {
    if (Math.random() < 0.5) {
      // Fetch from icanhazdadjoke API
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          Accept: 'application/json',
          'User-Agent':
            'joke-generator (https://github.com/alejandrolemamarques/4.-API.git)',
        },
      });
      const data = (await response.json()) as DadJokeResponse;
      console.log('icanhazdadjoke');
      return { joke: data.joke };
    } else {
      // Fetch from jokeapi
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
      const data = (await response.json()) as JokeAPIResponse;
      console.log('jokeapi');

      if (data.type === 'single' && data.joke) {
        return { joke: data.joke };
      } else if (data.type === 'twopart' && data.setup && data.delivery) {
        return {
          joke: `${data.setup}\n${data.delivery}`,
        };
      }

      throw new Error('Unexpected joke format from JokeAPI');
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
    return null;
  }
};

/**
 * Displays a new joke on the page and handles the UI state for report buttons
 * - Fetches and displays a new joke
 * - Resets all report button states
 * - If joke was previously rated, shows the previous rating
 */
const displayNewJoke = async () => {
  try {
    // Fetch and display new joke
    const joke = await getJoke();
    const jokeElement = document.getElementById('joke');
    if (!jokeElement) {
      throw new Error('Joke element not found');
    }

    if (!joke) {
      jokeElement.textContent = 'Failed to fetch a joke. Please try again.';
      return;
    }

    jokeElement.textContent = joke.joke;
    console.log(joke);

    // Reset all report buttons to unselected state
    const reportButtons =
      document.querySelectorAll<HTMLElement>('.report-button');
    reportButtons.forEach((button) => {
      button.classList.remove('selected');
    });

    // If this joke was previously rated, highlight the corresponding button
    if (checkIfJokeAlreadyReported(joke.joke)) {
      const score = reportJokes.find(
        (report) => report.joke === joke.joke,
      )?.score;
      const reportButton = document.getElementById(`report-button-${score}`);
      if (reportButton) {
        reportButton.classList.add('selected');
      }
    }
  } catch (error) {
    console.error('Error displaying joke:', error);
  }
};

/**
 * Checks if a joke has been previously reported
 * @param joke - The joke text to check
 * @returns boolean indicating if the joke exists in reportJokes array
 */
const checkIfJokeAlreadyReported = (joke: string) => {
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
const reportJoke = (score: 1 | 2 | 3) => {
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
  } else {
    // Case: Update existing rating
    if (storedReport.score !== score) {
      // Remove highlight from previous rating button
      const previousReportButton = document.getElementById(
        `report-button-${storedReport.score}`,
      );
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
      button.addEventListener('click', () => reportJoke(score as 1 | 2 | 3));
    }
  });

  // Set up new joke button listener
  const jokeButton = document.getElementById('joke-button');
  if (jokeButton) {
    jokeButton.addEventListener('click', displayNewJoke);
  }
});
