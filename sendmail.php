<?php
header('Content-Type: application/json');

$config = require __DIR__ . '/../config.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

$email = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"] ?? "");

if (empty($email) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit;
}

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_username'];
    $mail->Password = $config['smtp_password'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port'];

    $mail->setFrom($config['smtp_username'], 'Portfolio Contact Form');
    $mail->addAddress($config['recipient_email']);
    $mail->addReplyTo($email);

    $mail->isHTML(false);
    $mail->Subject = "New message from your portfolio site";
    $mail->Body    = "Email: {$email}\n\nMessage:\n{$message}";

    $mail->send();
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} catch (Exception $e) {
    echo json_encode(["status" => "error", "message" => "Mailer Error: {$mail->ErrorInfo}"]);
}