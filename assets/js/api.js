let currentPage = 1;

async function fetchCharacters() {
  const url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayCharacters(data.results);
    currentPage++;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}

function displayCharacters(characters) {
    const container = document.getElementById("characters");
    characters.forEach((character) => {
      const characterElement = document.createElement("div");
      characterElement.className = "character";
      characterElement.innerHTML = `
              <img src="${character.image}" alt="${character.name}">
              <h3>${character.name}</h3>
              <p>Species: ${character.species}</p>
              <p>Status: ${character.status}</p>
              <p>Origin: ${character.origin.name}</p>
              <p>Location: ${character.location.name}</p>
              <p>Episodes: ${character.episode.length}</p>
              <p>Created: ${character.created}</p>
              <p>Gender: ${character.gender}</p>
              <p>Number: ${character.id}</p>
          `;
      container.appendChild(characterElement);
    });
  }

document.getElementById("loadMore").addEventListener("click", fetchCharacters);

fetchCharacters();