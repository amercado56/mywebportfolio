<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$message = $_REQUEST['Message'];

{
    mail("mercado.audisg@gmail.com", "WT MSG", $message, "From: $name <$email>");
    echo "<script type= 'text/javascript'>alert('your message sent');
    window.history.go(-1);</script>";
}
?>