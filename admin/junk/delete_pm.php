<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pmnrv_id'])) {
    $pmnrv_id = escaepD($conn, $_POST['pmnrv_id']);
    
    $del_pm = mysqli_query($conn, "UPDATE`eng_pm` SET `is_deleted`='1' WHERE id='$pmnrv_id'");
    
    if ($del_pm) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if (isset($_POST['pmnrv_idH'])) {
    $pmnrv_idH = escaepD($conn, $_POST['pmnrv_idH']);
    
    $restore_pmnrv = mysqli_query($conn, "UPDATE`eng_pm` SET `is_deleted`='0' WHERE id='$pmnrv_idH'");
    
    if ($restore_pmnrv) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['pmi_id'])) {
    $pmi_id = escaepD($conn, $_POST['pmi_id']);
    
    $del_pmi = mysqli_query($conn, "UPDATE`eng_pm` SET `is_deleted`='1' WHERE id='$pmi_id'");
    
    if ($del_pmi) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['pmi_idH'])) {
    $pmi_idH = escaepD($conn, $_POST['pmi_idH']);
    
    $restore_pmi = mysqli_query($conn, "UPDATE`eng_pm` SET `is_deleted`='0' WHERE id='$pmi_idH'");
    
    if ($restore_pmi) {
        echo "<script type='text/javascript'> alert('Quote Restored Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Restoring Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_pmnrv'])) {
    $clrBtn_pmnrv = escaepD($conn, $_POST['clrBtn_pmnrv']);
    
    $delete_nrv = mysqli_query($conn, "DELETE FROM `eng_pm` WHERE `eng_pm` LIKE '%eng_pm_nrv%' AND `is_deleted`=1");
    
    if ($delete_nrv) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else if(isset($_POST['clrBtn_pmi'])) {
    $clrBtn_pmi = escaepD($conn, $_POST['clrBtn_pmi']);
    
    $delete_pmi = mysqli_query($conn, "DELETE FROM `eng_pm` WHERE `eng_pm` LIKE '%eng_pm_mv%' AND `is_deleted`=1");
    
    if ($delete_pmi) {
        echo "<script type='text/javascript'> alert('Quote Deleted Successfully..!');</script>";
    } else {
        echo "<script type='text/javascript'> alert('Error Deleting Quote. Please try again.!');</script>";
    }
    
} else {
    echo "<script type='text/javascript'> alert('No Action..!');</script>";
}
