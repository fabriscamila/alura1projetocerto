/**
 * Alterna o estado do cartão entre a frente e o verso.
 * @param {HTMLElement} card - O elemento do cartão que foi clicado.
 */
function flipCard(card) {
    // A função toggle adiciona a classe se ela não existir, 
    // ou remove se ela já estiver presente no elemento.
    card.classList.toggle('is-flipped');
}