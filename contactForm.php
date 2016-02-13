<!DOCTYPE html>
<html lang="en">
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="content-type">
        <title>Email Sent</title>
    </head>
    <body>
        <?php

            // Form input variables
            $firstname = $_POST['firstname'];
            $lastname = $_POST['lastname'];
            $email = $_POST['email'];
            $message = $_POST['message'];
           


            // connect to the database
            $conn = new PDO('mysql:host=sql.computerstudi.es;dbname=gc200197303', 'gc200197303', '9q3eMvyw');

            // set up the SQL command to save the data
            $sql = "INSERT INTO contactForm (firstname, lastname, email, message)
			VALUES (:firstname, :lastname, :email, :message)";

            // command object
            $cmd = $conn ->prepare($sql);

            // input value into the proper feild
            $cmd -> bindParam(':firstname', $firstname, PDO::PARAM_STR);
            $cmd -> bindParam(':lastname', $lastname, PDO::PARAM_STR);
            $cmd -> bindParam(':email', $email, PDO::PARAM_STR);
            $cmd -> bindParam(':message', $message, PDO::PARAM_STR);

            // execute the save
            $cmd -> execute();

            // disconnect
            $conn = null;

            mail('taralynnemcneil', 'Portfolio Contact', 'You have received a message');
            
            echo 'Message has been sent and I will contact you as soo as possible<br /><a href="index.html" title="Return Home">Return Home</a>';
        ?>
    </body>
</html>