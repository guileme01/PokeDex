const cardsData = [
    {
        "card_name": "Bulbasaur",
        "pokemon": "Bulbasaur",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000010_00_FUSHIGIDANE_C.webp",
        "alt": "Bulbasaur",
        "quantidade": 0
    },
    {
        "card_name": "Ivysaur",
        "pokemon": "Ivysaur",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000020_00_FUSHIGISOU_U.webp",
        "alt": "Ivysaur",
        "quantidade": 0
    },
    {
        "card_name": "Venusaur",
        "pokemon": "Venusaur",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000030_00_FUSHIGIBANA_R.webp",
        "alt": "Venusaur",
        "quantidade": 0
    },
    {
        "card_name": "Venusaur EX",
        "pokemon": "Venusaur",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000040_00_FUSHIGIBANAex_RR.webp",
        "alt": "Venusaur EX",
        "quantidade": 0
    },
    {
        "card_name": "Caterpie",
        "pokemon": "Caterpie",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000050_00_CATERPIE_C.webp",
        "alt": "Caterpie",
        "quantidade": 0
    },
    {
        "card_name": "Metapod",
        "pokemon": "Metapod",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000060_00_TRANSEL_C.webp",
        "alt": "Metapod",
        "quantidade": 0
    },
    {
        "card_name": "Butterfree",
        "pokemon": "Butterfree",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000070_00_BUTTERFREE_R.webp",
        "alt": "Butterfree",
        "quantidade": 0
    },
    {
        "card_name": "Weedle",
        "pokemon": "Weedle",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000080_00_BEEDLE_C.webp",
        "alt": "Weedle",
        "quantidade": 0
    },
    {
        "card_name": "Kakuna",
        "pokemon": "Kakuna",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000090_00_COCOON_C.webp",
        "alt": "Kakuna",
        "quantidade": 0
    },
    {
        "card_name": "Beedrill",
        "pokemon": "Beedrill",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000100_00_SPEAR_R.webp",
        "alt": "Beedrill",
        "quantidade": 0
    },
    {
        "card_name": "Oddish",
        "pokemon": "Oddish",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000110_00_NAZONOKUSA_C.webp",
        "alt": "Oddish",
        "quantidade": 0
    },
    {
        "card_name": "Gloom",
        "pokemon": "Gloom",
        "src": "https://assets.pokemon-zone.com/game-assets/CardPreviews/cPK_10_000120_00_KUSAIHANA_U.webp",
        "alt": "Gloom",
        "quantidade": 0
    }
];

const cardsContainer = document.getElementById("cards-container")

function renderCards() {
    // Limpa o container para evitar duplicações
    cardsContainer.innerHTML = "";
    cardsData.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("main__section__card");

        // Cria a imagem
        const img = document.createElement("img");
        img.src = card.src;
        img.alt = card.alt;

        // Adiciona o event listener para redirecionar ao clicar na imagem
        img.addEventListener("click", () => {
            // Redireciona para a página de detalhes passando o nome do Pokémon na URL
            window.location.href = `detalhes.html?pokemon=${encodeURIComponent(card.pokemon)}`;
        });

        cardDiv.appendChild(img);

        const info = document.createElement("div");
        info.classList.add("main__section__card__info")

        // Exibe o nome do Pokémon
        const name = document.createElement("h3");
        name.textContent = card.card_name;
        cardDiv.appendChild(name);

        const btnMenos = document.createElement("button");
        btnMenos.textContent = "-";
        btnMenos.classList.add("main__section__card__info__btn")

        btnMenos.addEventListener("click", () => {
            if(cardsData[index].quantidade > 0) {
              cardsData[index].quantidade--;
              quantidadeDisplay.textContent = `${cardsData[index].quantidade}`;
            }
        });

        const quantidadeDisplay = document.createElement("p");
        quantidadeDisplay.textContent = `${card.quantidade}`;

        const btnMais = document.createElement("button");
        btnMais.textContent = "+";
        btnMais.classList.add("main__section__card__info__btn")

        btnMais.addEventListener("click", () => {
          cardsData[index].quantidade++;
          quantidadeDisplay.textContent = `${cardsData[index].quantidade}`;
        });

        info.appendChild(btnMenos);
        info.appendChild(quantidadeDisplay);
        info.appendChild(btnMais);

        cardDiv.appendChild(info);
        cardsContainer.appendChild(cardDiv);
    });
}

renderCards();