<?php

    include $_SERVER['DOCUMENT_ROOT']."/table/dbh.inc.php";


// UPDATING AND INSERTING OF DATA INTO UPDATE CONFIGURATION DATABASE
if(isset($_POST['update_user']) && !empty($_POST['update_user'])) {
    $edit_id = escaepD($conn, $_POST['edit_id']);
    $username_edit = escaepD($conn, $_POST['username_edit']);
    $fullname_edit = escaepD($conn, $_POST['fullname_edit']);
    $email_edit = escaepD($conn, $_POST['email_edit']);
    $contact_edit = escaepD($conn, $_POST['contact_edit']);
    $password_edit = escaepD($conn, $_POST['password_edit']);
    $department_edit = escaepD($conn, $_POST['department_edit']);
    $branch_edit = escaepD($conn, $_POST['branch_edit']);
    $update_user = escaepD($conn, $_POST['update_user']);
    
    $hashedPwd = password_hash($password_edit, PASSWORD_DEFAULT);
    
    if($update_user == "u_updated") {
        $update = mysqli_query($conn, "UPDATE `register` SET `username`='".$username_edit."',`fullname`='".$fullname_edit."',`email`='".$email_edit."', `contact`='".$contact_edit."',`password`='".$hashedPwd."',`department`='".$department_edit."',`branch`='".$branch_edit."' WHERE `id`='".$edit_id."'");
        
        if($update) {
            $data['vSkySuc'] = true;
            $data['vSkyNote'] = "Updated Successfully";
        } else {
            $data['vSkySuc'] = false;
            $data['vSkyNote'] = "Error Updating";
        }
        
        echo json_encode($data);
        exit();

    }
     
}