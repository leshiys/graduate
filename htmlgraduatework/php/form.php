<?php
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['mail'];

$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'graduate-work@mail.ru';
$mail->Password = 'hvbgs5i87hte8%^&^';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('graduate-work@mail.ru');
$mail->addAddress('leshiys@inbox.ru');

$mail->isHTML(true);

$mail->Subject = 'Заявка с сайта';
$mail->Body    = "
<html>
  <head>$subject</head>
  <body>
    <p>Заявка от $name </p>
    <p>перезвонить на ноиер $phone </p>
    <p>или написать на почту $email </p>
  </body>
</html>
";

if(!$mail->send()) {
    echo 'send Error';
} else {
    echo 'send Finished';
}

?>