<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['fg_id'])) {
    $fg_id = escaepD($conn, $_POST['fg_id']);
    
    $del_fg = mysqli_query($conn, "UPDATE `eng_pi_liability` SET `is_deleted`='1' WHERE id='$fg_id'");
    
    if ($del_fg) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['fg_idH'])) {
    $fg_idH = escaepD($conn, $_POST['fg_idH']);
    
    $restore_fg = mysqli_query($conn, "UPDATE `eng_pi_liability` SET `is_deleted`='0' WHERE id='$fg_idH'");
    
    if ($restore_fg) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_fg'])) {
    $clrBtn_fg = escaepD($conn, $_POST['clrBtn_fg']);
    
    $delete_fg = mysqli_query($conn, "DELETE FROM `eng_pi_liability` WHERE `pi_fg` LIKE 'eng_fg%' AND `is_deleted`=1");
    
    if ($delete_fg) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}