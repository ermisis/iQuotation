<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['aar_id'])) {
    $aar_id = escaepD($conn, $_POST['aar_id']);
    
    $del_aar = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='1' WHERE id='$aar_id'");
    
    if ($del_aar) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['aar_idH'])) {
    $aar_idH = escaepD($conn, $_POST['aar_idH']);
    
    $restore_aar = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='0' WHERE id='$aar_idH'");
    
    if ($restore_aar) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['fap_id'])) {
    $fap_id = escaepD($conn, $_POST['fap_id']);
    
    $del_fap = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='1' WHERE id='$fap_id'");
    
    if ($del_fap) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['fap_idH'])) {
    $fap_idH = escaepD($conn, $_POST['fap_idH']);
    
    $restore_fap = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='0' WHERE id='$fap_idH'");
    
    if ($restore_fap) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['hi_id'])) {
    $hi_id = escaepD($conn, $_POST['hi_id']);
    
    $del_hi = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='1' WHERE id='$hi_id'");
    
    if ($del_hi) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['hi_idH'])) {
    $hi_idH = escaepD($conn, $_POST['hi_idH']);
    
    $restore_hi = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='0' WHERE id='$hi_idH'");
    
    if ($restore_hi) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['cfb_id'])) {
    $cfb_id = escaepD($conn, $_POST['cfb_id']);
    
    $del_cfb = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='1' WHERE id='$cfb_id'");
    
    if ($del_cfb) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['cfb_idH'])) {
    $cfb_idH = escaepD($conn, $_POST['cfb_idH']);
    
    $restore_cfb = mysqli_query($conn, "UPDATE `combo_eng` SET `is_deleted`='0' WHERE id='$cfb_idH'");
    
    if ($restore_cfb) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_aar'])) {
    $clrBtn_aar = escaepD($conn, $_POST['clrBtn_aar']);
    
    $delete_aar = mysqli_query($conn, "DELETE FROM `combo_eng` WHERE `combo_name` LIKE 'eng_aar%' AND `is_deleted`=1");
    
    if ($delete_aar) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_fap'])) {
    $clrBtn_fap = escaepD($conn, $_POST['clrBtn_fap']);
    
    $delete_fap = mysqli_query($conn, "DELETE FROM `combo_eng` WHERE `combo_name` LIKE 'eng_fap%' AND `is_deleted`=1");
    
    if ($delete_fap) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_hi'])) {
    $clrBtn_hi = escaepD($conn, $_POST['clrBtn_hi']);
    
    $delete_hi = mysqli_query($conn, "DELETE FROM `combo_eng` WHERE `combo_name` LIKE 'eng_hi%' AND `is_deleted`=1");
    
    if ($delete_hi) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_cfb'])) {
    $clrBtn_cfb = escaepD($conn, $_POST['clrBtn_cfb']);
    
    $delete_cfb = mysqli_query($conn, "DELETE FROM `combo_eng` WHERE `combo_name` LIKE 'eng_cfb%' AND `is_deleted`=1");
    
    if ($delete_cfb) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}