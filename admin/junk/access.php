<?php

    session_start();


if(isset($_POST['submit'])) {
    include $_SERVER['DOCUMENT_ROOT']."/table/dbh.inc.php";
    
    $username = escaepD($conn, $_POST['username']);
    $password = escaepD($conn, $_POST['password']);
    if (empty($username) || empty($password)) {
        header("Location: ../login.php?login=empty");
        exit();
        
    } else {
        $sql = "SELECT * FROM register WHERE username='$username'";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);
        if ($resultCheck < 1) {
            header("Location: ../login.php?login=error");
            exit();
        } else {
            if ($row = mysqli_fetch_assoc($result)) {
                // Checking Password
                $hashedPwdCheck = password_verify($password, $row['password']);
                if ($hashedPwdCheck == false) {
                    header("Location: ../login.php?login=error");
                    exit();
                } else if ($hashedPwdCheck == true) {
                    $_SESSION['u_id'] = $row['id'];
                    $_SESSION['username'] = $row['username'];
                    $_SESSION['fullname'] = $row['fullname'];
                    $_SESSION['email'] = $row['email'];
                    $_SESSION['contact'] = $row['contact'];
                    $_SESSION['password'] = $row['password'];
                    $_SESSION['department'] = $row['department'];
                    $_SESSION['branch'] = $row['branch'];
                    header("Location: ../non.moto.php?login=success");
                    exit();
                }
            }
        }
    }
} else {
    header("Location: ../login.php?login=error");
    exit();
}
    
    
    
      
