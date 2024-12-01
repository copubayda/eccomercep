const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}
// Sélection des éléments du DOM
const cartTable = document.querySelector("#cart table tbody");
const updateTotals = () => {
    let total = 0;
    cartTable.querySelectorAll("tr").forEach((row) => {
        const price = parseFloat(row.querySelector("td:nth-child(4)").textContent.replace('$', ''));
        const quantity = parseInt(row.querySelector("input[type='number']").value);
        const subtotal = price * quantity;
        row.querySelector("td:nth-child(6)").textContent = `$ ${subtotal.toFixed(2)}`;
        total += subtotal;
    });
    console.log(`Total: $${total.toFixed(2)}`); // Vous pouvez afficher cela quelque part dans la page
};

// Suppression d'un article
cartTable.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-times-circle")) {
        const row = e.target.closest("tr");
        row.remove();
        updateTotals();
    }
});

// Mise à jour des sous-totaux lorsque la quantité change
cartTable.addEventListener("input", (e) => {
    if (e.target.type === "number") {
        updateTotals();
    }
});

// Calcul initial des totaux
updateTotals();
// Sélection de l'image principale du produit
const mainImg = document.getElementById('MainImg');

// Éventuelles images supplémentaires (non présentes dans le HTML actuel, mais au cas où vous les ajoutez)
const smallImgs = document.querySelectorAll('.small-img'); // Utilisez cette classe si vous ajoutez des miniatures

// Changer l'image principale lors du clic sur une miniature
if (smallImgs) {
    smallImgs.forEach((img) => {
        img.addEventListener('click', () => {
            mainImg.src = img.src;
        });
    });
}

// Fonction pour ajouter au panier
const cartButton = document.querySelector('.single-pro-details .normal');
const quantityInput = document.querySelector('.single-pro-details input[type="number"]');

cartButton.addEventListener('click', () => {
    const productName = document.querySelector('.single-pro-details h4').textContent;
    const productPrice = document.querySelector('.single-pro-details h2').textContent;
    const quantity = parseInt(quantityInput.value);
    const subtotal = (parseFloat(productPrice.replace('$', '')) * quantity).toFixed(2);

    alert(`Added to Cart:\n${productName}\nQuantity: ${quantity}\nSubtotal: $${subtotal}`);
    // Vous pouvez étendre cela pour réellement ajouter au panier ou sauvegarder dans localStorage
});

// Défilement vers la section des produits vedettes
const featuredSection = document.getElementById('product1');
const scrollToFeaturedButton = document.createElement('button');
scrollToFeaturedButton.textContent = 'View Featured Products';

document.body.appendChild(scrollToFeaturedButton);

scrollToFeaturedButton.addEventListener('click', () => {
    featuredSection.scrollIntoView({ behavior: 'smooth' });
});
