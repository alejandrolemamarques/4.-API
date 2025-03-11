const joke = document.getElementById('joke');

const getJoke = async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
        'User-Agent':
          'joke-generator (https://github.com/alejandrolemamarques/4.-API.git)',
      },
    });

    const data = await response.json();

    if (joke) {
      joke.textContent = data.joke;
      console.log(data);
    }
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
};

// Get the first joke when the page loads
getJoke();
