<?php

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $whatsapp = isset($_POST['whatsapp']) ? $_POST['whatsapp'] : 'Não';
    $mensagem = $_POST['mensagem'];

    $para = "email@brunolombardi.dev.br";
    $assunto = "Contato DEV.Br de $nome";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Telefone: ".$telefone."\n"."É whatsapp: ".$whatsapp."\n"."Mensagem: ".$mensagem."\n";

    $cabeca = "From: email@brunolombardi.dev.br"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }

?>