<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['u_id'])) {
    $u_id = escaepD($conn, $_POST['u_id']);
    
    $del_user = mysqli_query($conn, "DELETE FROM `register` WHERE id='$u_id'");
    
    if ($del_user) {
        echo "<script type='text/javascript'> alert('User Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting User. Please try again.!');</script>";
    }
    
}