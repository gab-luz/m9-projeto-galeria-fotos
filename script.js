let x = window.matchMedia("(max-width: 768px)");

$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        let enderecoDaNovaImagem = $('#enderecoDaNovaImagem').val();
        const novoItem = $('<li style="display: none;"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        if (x.matches) { // se for resolução menor que 768px:
            $(`
            <div class="overlay-imagem-link">
                <a class="visualizar" href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    <i class="fa fa-eye visualizar"></i>
                </a>
            </div>
            `).appendTo(novoItem);
        } else { // se for resolução maior que 768px:
            $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
            `).appendTo(novoItem);
        }
        
        novoItem.appendTo('ul');
        novoItem.fadeIn(1000);
        $('#enderecoDaNovaImagem').val("");
    })

})

