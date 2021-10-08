<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header("Access-Control-Allow-Origin: *");
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $subject = strip_tags(trim($_POST["subject"]));
    $name = strip_tags(trim($_POST["name"]));
    $email = strip_tags(trim($_POST["email"]));
    $phone= strip_tags(trim($_POST["phone"]));
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Invalid data provided.";
        exit;
    }

    $content = "Imię i nazwisko: $name\n";
    $content .= "Email: $email\n";
    $content .= "Telefon: $phone\n";
    $content .= "Temat: $subject\n";
    $content .= "Wiadomość:\n$message\n";

    $headers = "From: Rozmowni.pl <kontakt@rozmowni.pl>";
    $mail_to = "kontakt@rozmowni.pl";

    $success = mail($mail_to, "Rozmowni.pl - formularz kontaktowy", $content, $headers);

    if ($success) {
        http_response_code(200);
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong, we couldn't send a message.";
    }

} else {
    http_response_code(403);
    echo "Access forbidden";
}
