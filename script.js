document.addEventListener("DOMContentLoaded", () => {
    const botoesSaibaMais = document.querySelectorAll(".btn-saiba-mais");
    const loadingScreen = document.getElementById("loading-screen");

    botoesSaibaMais.forEach(botao => {
        botao.addEventListener("click", function(e) {
            e.preventDefault(); // Previne comportamento padrão
            
            const paginaDestino = this.getAttribute("data-target");

            // Mostra a tela de carregamento
            loadingScreen.classList.remove("hidden");

            // Simula um tempo de carregamento de API/Dados para ser persuasivo (1.5 segundos)
            setTimeout(() => {
                // Redireciona o usuário para a página com os dados
                // window.location.href = paginaDestino; 
                
                /* NOTA: Como você precisa criar as páginas de destino (problemas.html, etc),
                   estou usando um alerta apenas para testar a lógica se o arquivo não existir.
                   Descomente a linha acima e remova o alert e o classList.add abaixo em produção. */
                
                alert(`Redirecionando para a página detalhada: ${paginaDestino}`);
                loadingScreen.classList.add("hidden"); 

            }, 1500);
        });
    });
});