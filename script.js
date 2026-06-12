// Lista de dicas sobre sustentabilidade no agronegócio
const dicasSustentaveis = [
    "Rotação de Culturas: Alternar as espécies plantadas ajuda a recuperar os nutrientes do solo naturalmente.",
    "Agricultura de Precisão: O uso de drones reduz o desperdício de água e a aplicação desnecessária de insumos.",
    "Plantio Direto: Manter a palha da colheita anterior protege a terra contra a erosão provocada pela chuva.",
    "Bioinsumos: Utilizar inimigos naturais para combater pragas diminui a dependência de defensivos químicos.",
    "ILPF: Integrar árvores ao pasto oferece sombra para o gado, melhora o solo e captura mais carbono do ar.",
    "Manejo de Água: Sistemas de gotejamento levam a água direto para a raiz da planta, economizando até 50% de recurso hidráulico."
];

// Selecionando os elementos do HTML
const botaoDica = document.getElementById('btn-dica');
const textoDica = document.getElementById('texto-dica');

// Função que escolhe uma dica aleatória e exibe na tela
botaoDica.addEventListener('click', function() {
    // Sorteia um índice da nossa lista (de 0 até o tamanho máximo do array)
    const indiceAleatorio = Math.floor(Math.random() * dicasSustentaveis.length);
    
    // Atualiza o texto do parágrafo no HTML
    textoDica.textContent = dicasSustentaveis[indiceAleatorio];
});