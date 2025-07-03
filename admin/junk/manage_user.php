<?php

    include $_SERVER['DOCUMENT_ROOT']."/table/dbh.inc.php";


if(isset($_POST['register_user']) && !empty($_POST['register_user'])) {
    
    if($_POST['register_user'] == "insert_user") {
        $username = escaepD($conn, $_POST['username']);
        $fullname = escaepD($conn, $_POST['fullname']);
        $email = escaepD($conn, $_POST['email']);
        $contact = escaepD($conn, $_POST['contact']);
        $password = escaepD($conn, $_POST['password']);
        $department = escaepD($conn, $_POST['department']);
        $branch = escaepD($conn, $_POST['branch']);
        
        $hashedPwd = password_hash($password, PASSWORD_DEFAULT);

        $slqChkUser = (mysqli_query($conn, "SELECT * FROM `register` WHERE `username`='".$username."'"));

        if (mysqli_num_rows($slqChkUser) > 0) {

            $jk['vSkySuc'] = "found";
            $jk['vSkyNote'] = "Sorry Username Already Taken...!";

        } else {
            
            if(mysqli_query($conn, sprintf("INSERT INTO `register`(`username`, `fullname`, `email`, `contact`, `password`, `department`, `branch`) VALUES ('%s','%s','%s','%s','%s','%s','%s')", $username, $fullname, $email, $contact, $hashedPwd, $department, $branch))) {

                $jk['vSkyNote'] = "User Added Successfully!";
                $jk['vSkySuc'] = true;

            } else {
                
                $jk['vSkyNote'] = "Error Adding User!";
                $jk['vSkySuc'] = false;

            }

        }        
        
    } 
    
    echo json_encode($jk);
    
    
}