<?php

if(isset($_POST['submit'])) {

	$name = $_POST['firstname'];
	$surname = $_POST['surname'];
	$email= $_POST['email'];
	$subject= $_POST['reason'];
	$message = $_POST['subject'];

	$mailTo = "tenos200@hotmail.com";
	$headers = "From: ".$email;
	$txt = "You have received an e-mail from your website.\n\n".$name."\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.php?mailsend");

}
?>
