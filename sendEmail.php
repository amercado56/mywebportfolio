<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$subject = $_REQUEST['subject'];
$message = $_REQUEST['Message'];

{
    mail("mercado.audisg@gmail.com", $subject, $message,  "From: $name <$email>");
    echo "<script type= 'text/javascript'>alert('Thank You! Your message was sent successfully!');
    window.history.go(-1);</script>";
}
?>
