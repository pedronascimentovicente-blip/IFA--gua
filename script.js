// Seleciona todas as barras de navegação do site
const navBars = document.querySelectorAll('.nav-bar');

navBars.forEach(bar => {
    bar.addEventListener('click', function(event) {
        // Impede o redirecionamento padrão do link para podermos ver o aviso rodando
        event.preventDefault(); 
        
        // Pega as informações contidas nos atributos personalizados criados no HTML
        const destinoInformativo = this.getAttribute('data-destino');
        const linkDestinoReal = this.getAttribute('href');
        
        // Exibe um alerta útil para o cidadão indicando o carregamento da ferramenta
        alert(`Encaminhando você para o nosso painel público:\n👉 ${destinoInformativo}`);
        
        // Quando você tiver as subpáginas reais prontas, remova o "event.preventDefault()" lá de cima 
        // ou descomente a linha abaixo para fazer o redirecionamento imediato do navegador:
        // window.location.href = linkDestinoReal;
    });
});
