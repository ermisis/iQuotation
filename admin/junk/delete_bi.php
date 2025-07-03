<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['bi_id'])) {
    $bi_id = escaepD($conn, $_POST['bi_id']);
    
    $del_bi = mysqli_query($conn, "UPDATE `eng_bi` SET `is_deleted`='1' WHERE id='$bi_id'");
    
    if ($del_bi) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['bi_idH'])) {
    $bi_idH = escaepD($conn, $_POST['bi_idH']);
    
    $restore_bi = mysqli_query($conn, "UPDATE `eng_bi` SET `is_deleted`='0' WHERE id='$bi_idH'");
    
    if ($restore_bi) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_bty'])) {
    
    $delete_bty = mysqli_query($conn, "DELETE FROM `eng_bi` WHERE `is_deleted`=1");
    
    if ($delete_bty) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}