<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['do_id'])) {
    $do_id = escaepD($conn, $_POST['do_id']);
    
    $del_do = mysqli_query($conn, "UPDATE `eng_do_liability` SET `is_deleted`='1' WHERE id='$do_id'");
    
    if ($del_do) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['do_idH'])) {
    $do_idH = escaepD($conn, $_POST['do_idH']);
    
    $restore_do = mysqli_query($conn, "UPDATE `eng_do_liability` SET `is_deleted`='0' WHERE id='$do_idH'");
    
    if ($restore_do) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_do'])) {
    $clrBtn_do = escaepD($conn, $_POST['clrBtn_do']);
    
    $delete_do = mysqli_query($conn, "DELETE FROM `eng_do_liability` WHERE `is_deleted`=1");
    
    if ($delete_do) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}