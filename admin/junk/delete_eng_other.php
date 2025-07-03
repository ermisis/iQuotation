<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['mb_id'])) {
    $mb_id = escaepD($conn, $_POST['mb_id']);
    
    $del_mb = mysqli_query($conn, "UPDATE `eng_other` SET `is_deleted`='1' WHERE eng_other_id='$mb_id'");
    
    if ($del_mb) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['mb_idH'])) {
    $mb_idH = escaepD($conn, $_POST['mb_idH']);
    
    $restore_mb = mysqli_query($conn, "UPDATE `eng_other` SET `is_deleted`='0' WHERE eng_other_id='$mb_idH'");
    
    if ($restore_mb) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['ee_id'])) {
    $ee_id = escaepD($conn, $_POST['ee_id']);
    
    $del_ee = mysqli_query($conn, "UPDATE `eng_other` SET `is_deleted`='1' WHERE eng_other_id='$ee_id'");
    
    if ($del_ee) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['ee_idH'])) {
    $ee_idH = escaepD($conn, $_POST['ee_idH']);
    
    $restore_ee = mysqli_query($conn, "UPDATE `eng_other` SET `is_deleted`='0' WHERE eng_other_id='$ee_idH'");
    
    if ($restore_ee) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_mb'])) {
    $clrBtn_mb = escaepD($conn, $_POST['clrBtn_mb']);
    
    $delete_mb = mysqli_query($conn, "DELETE FROM `eng_other` WHERE `eng_oname` LIKE 'eng_mb%' AND `is_deleted`=1");
    
    if ($delete_mb) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_ee'])) {
    $clrBtn_ee = escaepD($conn, $_POST['clrBtn_ee']);
    
    $delete_ee = mysqli_query($conn, "DELETE FROM `eng_other` WHERE `eng_oname` LIKE 'eng_ee%' AND `is_deleted`=1");
    
    if ($delete_ee) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}