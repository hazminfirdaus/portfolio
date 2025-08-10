<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contact@hazminchik.com"; // Replace with your actual email
    $subject = "New message from your portfolio";

    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "You have received a new message from your portfolio site:\n\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
    exit;
}

http_response_code(405);
echo json_encode(["status" => "invalid_method"]);
exit;
?>