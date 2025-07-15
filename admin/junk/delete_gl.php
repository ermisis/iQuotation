<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['gl_id'])) {
    $gl_id = escaepD($conn, $_POST['gl_id']);
    
    $del_gl = mysqli_query($conn, "UPDATE `eng_for_gl` SET `is_deleted`='1' WHERE id='$gl_id'");
    
    if ($del_gl) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['gl_idH'])) {
    $gl_idH = escaepD($conn, $_POST['gl_idH']);
    
    $restore_gl = mysqli_query($conn, "UPDATE `eng_for_gl` SET `is_deleted`='0' WHERE id='$gl_idH'");
    
    if ($restore_gl) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_gl'])) {
    $clrBtn_gl = escaepD($conn, $_POST['clrBtn_ce']);
    
    $delete_gl = mysqli_query($conn, "DELETE FROM `eng_for_gl` WHERE `is_deleted`=1");
    
    if ($delete_gl) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}