document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('pokemon-detail');

    const loadingElem = document.createElement('p');
    loadingElem.textContent = 'Carregando...';
    detailContainer.appendChild(loadingElem);
  
    // Obtém o parâmetro "pokemon" da URL
    const urlParams = new URLSearchParams(window.location.search);
    const pokemon = urlParams.get('pokemon');
  
    if (!pokemon) {
        detailContainer.innerHTML = "<p>Pokémon não encontrado.</p>";
        return;
    }

    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    // Chama a API para obter os dados do Pokémon
    fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados do Pokémon");
        }
        return response.json();
    })
    .then(data => {
        // Remove o indicador de carregamento
        detailContainer.innerHTML = '';
  
        // Cria o elemento para exibir o nome do Pokémon
        const nameElem = document.createElement('h1');

        detailContainer.appendChild(nameElem);
  
        // Cria a imagem do Pokémon utilizando o sprite da arte oficial, se disponível
        const imgElem = document.createElement('img');
        const imgUrl = data.sprites.other["official-artwork"].front_default || data.sprites.front_default;
        imgElem.src = imgUrl;
        imgElem.alt = pokemon;
        detailContainer.appendChild(imgElem);
  
        // Cria uma div para exibir informações adicionais
        const infoElem = document.createElement('div');
        infoElem.innerHTML = `
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Altura:</strong> ${(data.height / 10).toFixed(2)} m</p>
            <p><strong>Peso:</strong> ${(data.weight / 10).toFixed(2)} kg</p>
            <p><strong>Tipo(s):</strong> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
            <p><strong>Habilidade(s):</strong> ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
        `;
        detailContainer.appendChild(infoElem);
    })
    .catch(error => {
            console.error(error);
            detailContainer.innerHTML = "<p>Erro ao carregar os dados do Pokémon.</p>";
    });
});
  