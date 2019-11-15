<?php
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];
 
$EmailTo = "hiwomoc@itmailr.com";
$Subject = "Нова заявка з сайту";
 
// prepare email body text
$Body .= "Ім'я: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
 
$Body .= "Номер: ";
$Body .= $phone;
$Body .= "\n";
 
$Body .= "Повідомлення: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "Від:".$email);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>