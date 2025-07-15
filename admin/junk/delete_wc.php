<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['wc_id'])) {
    $wc_id = escaepD($conn, $_POST['wc_id']);
    
    $del_wc = mysqli_query($conn, "UPDATE `eng_wc` SET `is_deleted`='1' WHERE `id`='$wc_id'");
    
    if ($del_wc) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['wc_idH'])) {
    $wc_idH = escaepD($conn, $_POST['wc_idH']);
    
    $restore_wc = mysqli_query($conn, "UPDATE `eng_wc` SET `is_deleted`='0' WHERE `id`='$wc_idH'");
    
    if ($restore_wc) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_wc'])) {
    
    $delete_wc = mysqli_query($conn, "DELETE FROM `eng_wc` WHERE `is_deleted`=1");
    
    if ($delete_wc) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}