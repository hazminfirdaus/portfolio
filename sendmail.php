<?php
// Always send JSON
header('Content-Type: application/json');

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

// ===== CONFIGURATION =====
$to = "contact@hazminchik.com"; // <-- Change this to your actual email
$subject = "New message from your portfolio site";

// ===== SANITIZE INPUTS =====
$email = filter_var($_POST["email"] ?? "", FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($_POST["message"] ?? "", ENT_QUOTES, 'UTF-8');

// ===== BASIC VALIDATION =====
if (empty($email) || empty($message)) {
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields."]);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit;
}

// ===== EMAIL HEADERS =====
$headers = "From: {$email}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ===== EMAIL BODY =====
$body = "You have received a new message from your portfolio site:\n\n";
$body .= "Email: {$email}\n\n";
$body .= "Message:\n{$message}\n";

// ===== SEND EMAIL =====
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Message sent successfully!"]);
} else {
    echo json_encode(["status" => "error", "message" => "Failed to send message. Please try again later."]);
}
?>