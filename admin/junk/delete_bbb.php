<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['bbb_id'])) {
    $bbb_id = escaepD($conn, $_POST['bbb_id']);
    
    $del_bbb = mysqli_query($conn, "UPDATE `eng_bbb` SET `is_deleted`='1' WHERE id='$bbb_id'");
    
    if ($del_bbb) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['bbb_idH'])) {
    $bbb_idH = escaepD($conn, $_POST['bbb_idH']);
    
    $restore_bbb = mysqli_query($conn, "UPDATE `eng_bbb` SET `is_deleted`='0' WHERE id='$bbb_idH'");
    
    if ($restore_bbb) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_bbb'])) {
    
    $delete_bbb = mysqli_query($conn, "DELETE FROM `eng_bbb` WHERE `is_deleted`=1");
    
    if ($delete_bbb) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}