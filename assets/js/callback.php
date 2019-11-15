<?php

$phone_m = $_POST["phone_m"];
 
$EmailTo = "hiwomoc@itmailr.com";
$Subject = "Нове повідомлення з сайту ";
 
// prepare email body text

$Body .= "Номер телефону: ";
$Body .= $phone_m;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body);
 
// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>