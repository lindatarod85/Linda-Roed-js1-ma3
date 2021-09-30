const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=1216fa234844449d975f0293484fe024";

const resultContainer = document.querySelector(".result-container");

async function getGames() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const games = results.results;

    resultContainer.innerHTML = "";

    for (i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += `<p class="name">Name: ${games[i].name}</p> <p>Rating: ${games[i].rating}</p> <p>Number of tags: ${games[i].tags.length}</p>`;
    }
  } catch (error) {
    resultContainer.innerHTML = "An error has occured";
  }
}
getGames();
