<?php
$field_name = $_POST['cf_name'];
$field_position = $_POST['cf_position'];
$field_company = $_POST['cf_company'];
$field_website = $_POST['cf_website'];
$field_message = $_POST['cf_message'];
$field_email = $_POST['cf_email'];

$mail_to = 'yidi@worldtradeventures.com';
$subject = 'Message from a site visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'position: '.$field_position."\n";
$body_message .= 'company: '.$field_company."\n";
$body_message .= 'website: '.$field_website."\n";
$body_message .= 'Message: '.$field_message."\n";
$body_message .= 'Mail: ' .$field_email;

$headers = 'From: '.$field_email."\r\n";
$headers = 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to yidi@worldtradeventures.com');
		window.location = 'index.html';
	</script>
<?php
}
?>