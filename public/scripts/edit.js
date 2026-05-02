


function editPost(botao) {
        // 'botao' é o 'this' que você passou no HTML
        // Subimos até a div pai 'inline_post_top' e buscamos o h3
        const titulo = botao.parentElement.querySelector('h3').innerText.trim();
        
        console.log("Editando o post:", titulo);
        window.location.href = '/edit-page/' + encodeURIComponent(titulo);
        
    }

async function removePost(botao) {
    //pegar o titulo do post para sabe quem deletar
    const divpai = botao.parentElement;
    const titulo = divpai.querySelector("h3").innerText.trim()    
    
    if (confirm('Deseja realmente excluir o post:  ' +  titulo)) {
        try {
            //2. avisa ao servidor para deletar da lista
            const resposta = await fetch('/delete-post/' + encodeURIComponent(titulo), {
                method: "DELETE"
            });

            if (resposta.ok) {
                //3. remove o elemento visualmente da pagina sem precisa atualiza
                botao.parentElement.parentElement.remove();
            } else {
                botao.parentElement.parentElement.remove();
            }
        } catch (erro) {
            console.log("erro ao deletar: ", erro);
        }
    }
    
} 