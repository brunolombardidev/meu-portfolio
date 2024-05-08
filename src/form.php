<?php
// Definindo uma variável para armazenar a mensagem de status do envio
$status = "";

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera os valores dos campos do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $whatsapp = isset($_POST['whatsapp']) ? $_POST['whatsapp'] : 'Não';
    $mensagem = $_POST['mensagem'];
    
    // Validação dos campos (opcional)
    if (empty($nome) || empty($email) || empty($mensagem)) {
        $status = "Por favor, preencha todos os campos obrigatórios.";
    } else {
        // Destinatário do e-mail
        $destinatario = "email@brunolombardi.dev.br";
        
        // Assunto do e-mail
        $assunto = "Novo contato de $nome";
        
        // Conteúdo do e-mail
        $conteudo = "Nome: $nome\n";
        $conteudo .= "E-mail: $email\n";
        $conteudo .= "Telefone: $telefone\n";
        $conteudo .= "WhatsApp: $whatsapp\n";
        $conteudo .= "Mensagem:\n$mensagem\n";
        
        // Cabeçalhos do e-mail
        $headers = "From: $nome <$email>";
        
        // Envia o e-mail
        if (mail($destinatario, $assunto, $conteudo, $headers)) {
            $status = "E-mail enviado com sucesso!";
            // Redireciona de volta para a página anterior (index.html)
            header("Location: ../index.html");
            exit(); // Termina o script para evitar qualquer saída adicional
        } else {
            $status = "Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
        }
    }
}
?>