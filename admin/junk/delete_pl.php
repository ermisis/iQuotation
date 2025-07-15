<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pl_id'])) {
    $pl_id = escaepD($conn, $_POST['pl_id']);
    
    $del_pl = mysqli_query($conn, "UPDATE `eng_for_pl` SET `is_deleted`='1' WHERE id='$pl_id'");
    
    if ($del_pl) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['pl_idH'])) {
    $pl_idH = escaepD($conn, $_POST['pl_idH']);
    
    $restore_pl = mysqli_query($conn, "UPDATE `eng_for_pl` SET `is_deleted`='0' WHERE id='$pl_idH'");
    
    if ($restore_pl) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_pl'])) {
    $clrBtn_pl = escaepD($conn, $_POST['clrBtn_pl']);
    
    $delete_pl = mysqli_query($conn, "DELETE FROM `eng_for_pl` WHERE `is_deleted`=1");
    
    if ($delete_pl) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}