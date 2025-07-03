<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['gpa_id'])) {
    $gpa_id = escaepD($conn, $_POST['gpa_id']);
    
    $del_gpa = mysqli_query($conn, "UPDATE `eng_gpa` SET `is_deleted`='1' WHERE id='$gpa_id'");
    
    if ($del_gpa) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['gpa_idH'])) {
    $gpa_idH = escaepD($conn, $_POST['gpa_idH']);
    
    $restore_gpa = mysqli_query($conn, "UPDATE `eng_gpa` SET `is_deleted`='0' WHERE id='$gpa_idH'");
    
    if ($restore_gpa) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_gpa'])) {
    
    $delete_gpa = mysqli_query($conn, "DELETE FROM `eng_gpa` WHERE `is_deleted`=1");
    
    if ($delete_gpa) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}