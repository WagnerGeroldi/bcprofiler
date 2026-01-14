function redirectToWhatsApp(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Recupera os valores dos campos
    var nome = document.getElementById("nome").value;
    var whats = document.getElementById("whats").value;
    var atendimento = document.getElementById("atendimento").value;
    var texto = document.getElementById("texto").value;
    
    // Seu número de telefone no formato internacional (ex: 55 DDD Número, sem + ou 00)
    var numeroTelefone = "5554996366433"; // Substitua pelo seu número

    // Formata a mensagem com os dados coletados. Use %0a para quebra de linha.
    var textoMensagem = "Olá, meu nome é: " + nome +  
                        " Meu Whats para contato é : " + whats +
                        " Gostaria de atendimento para : " + atendimento +
                        " Mensagem: " + texto;
                        
    // Codifica a mensagem para URL, garantindo que caracteres especiais sejam tratados corretamente
    var mensagemCodificada = encodeURIComponent(textoMensagem);

    // Cria o link da API do WhatsApp
    var urlWhatsapp = "https://wa.me/" + numeroTelefone + "?text=" + mensagemCodificada;

    // Abre o WhatsApp em uma nova janela ou aba
    window.open(urlWhatsapp, '_blank').focus();
    
    return false; // Previne qualquer outro comportamento padrão do formulário
}
