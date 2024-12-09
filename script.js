let products = { 
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};

for (let i of products.data) {
  // Criar o cartão
  let card = document.createElement("div");
  // O cartão deve ter uma categoria e ficar oculto inicialmente
  card.classList.add("card", i.category, "hide");
  // Div da imagem
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Tag de imagem
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Nome do produto
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // Preço
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Parâmetro passado a partir do botão (parâmetro igual à categoria)
function filterProduct(value) {
  // Código dos botões
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // Verificar se o valor é igual ao texto do botão
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Selecionar todos os cartões
  let elements = document.querySelectorAll(".card");
  // Percorrer todos os cartões
  elements.forEach((element) => {
    // Mostrar todos os cartões ao clicar no botão "all"
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // Verificar se o elemento contém a classe da categoria
      if (element.classList.contains(value)) {
        // Mostrar o elemento com base na categoria
        element.classList.remove("hide");
      } else {
        // Ocultar outros elementos
        element.classList.add("hide");
      }
    }
  });
}

// Clique no botão de busca
document.getElementById("search").addEventListener("click", () => {
  // Inicializações
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // Percorrer todos os elementos
  elements.forEach((element, index) => {
    // Verificar se o texto inclui o valor da busca
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // Mostrar o cartão correspondente
      cards[index].classList.remove("hide");
    } else {
      // Ocultar os outros
      cards[index].classList.add("hide");
    }
  });
});

// Exibir todos os produtos inicialmente
window.onload = () => {
  filterProduct("all");
};
