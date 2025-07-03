<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['mi_id'])) {
    $mi_id = escaepD($conn, $_POST['mi_id']);
    
    $del_money = mysqli_query($conn, "UPDATE `eng_money` SET `is_deleted`='1' WHERE id='$mi_id'");
    
    if ($del_money) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['mi_idH'])) {
    $mi_idH = escaepD($conn, $_POST['mi_idH']);
    
    $restore_money = mysqli_query($conn, "UPDATE `eng_money` SET `is_deleted`='0' WHERE id='$mi_idH'");
    
    if ($restore_money) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_m'])) {
    
    $delete_m = mysqli_query($conn, "DELETE FROM `eng_money` WHERE `is_deleted`=1");
    
    if ($delete_m) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}