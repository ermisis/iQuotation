<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['ce_id'])) {
    $ce_id = escaepD($conn, $_POST['ce_id']);
    
    $del_ce = mysqli_query($conn, "UPDATE `eng_ce` SET `is_deleted`='1' WHERE id='$ce_id'");
    
    if ($del_ce) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['ce_idH'])) {
    $ce_idH = escaepD($conn, $_POST['ce_idH']);
    
    $restore_ce = mysqli_query($conn, "UPDATE `eng_ce` SET `is_deleted`='0' WHERE id='$ce_idH'");
    
    if ($restore_ce) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_ce'])) {
    $clrBtn_ce = escaepD($conn, $_POST['clrBtn_ce']);
    
    $delete_ce = mysqli_query($conn, "DELETE FROM `eng_ce` WHERE `is_deleted`=1");
    
    if ($delete_ce) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}