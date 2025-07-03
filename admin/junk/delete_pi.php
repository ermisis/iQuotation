<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pi_id'])) {
    $pi_id = escaepD($conn, $_POST['pi_id']);
    
    $del_pi = mysqli_query($conn, "UPDATE `eng_pi_liability` SET `is_deleted`='1' WHERE id='$pi_id'");
    
    if ($del_pi) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['pi_idH'])) {
    $pi_idH = escaepD($conn, $_POST['pi_idH']);
    
    $restore_pi = mysqli_query($conn, "UPDATE `eng_pi_liability` SET `is_deleted`='0' WHERE id='$pi_idH'");
    
    if ($restore_pi) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_pri'])) {
    $clrBtn_pri = escaepD($conn, $_POST['clrBtn_pri']);
    
    $delete_pri = mysqli_query($conn, "DELETE FROM `eng_pi_liability` WHERE `pi_fg` LIKE 'eng_pi%' AND `is_deleted`=1");
    
    if ($delete_pri) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}