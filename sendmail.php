<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contact@hazminchik.com"; // 🔁 Replace with your actual email
    $subject = "New message from your portfolio";

    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "You have received a new message from your portfolio site:\n\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>