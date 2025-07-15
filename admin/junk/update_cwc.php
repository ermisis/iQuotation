<?php

    include $_SERVER['DOCUMENT_ROOT']."/table/dbh.inc.php";

if(isset($_POST['wc_config']) && !empty($_POST['wc_config'])) {
    $mel_rate_edit = escaepD($conn, $_POST['mel_rate_edit']);
    $cll_rate_edit = escaepD($conn, $_POST['cll_rate_edit']);
    $tfw_rate_edit = escaepD($conn, $_POST['tfw_rate_edit']);
    $gd_rate_edit = escaepD($conn, $_POST['gd_rate_edit']);
    $wc_config = escaepD($conn, $_POST['wc_config']);
    
    if($wc_config == "update") {
        $updt_wc = mysqli_query($conn, "UPDATE `config_wc` SET `mel_rate`='".$mel_rate_edit."',`cll_rate`='".$cll_rate_edit."',`tfw_rate`='".$tfw_rate_edit."',`gd_rate`='".$gd_rate_edit."' WHERE `id`='1'");
        
        if($updt_wc) {
            $data['vSkySuc'] = "true";
            $data['vSkyNote'] = "Update Successful!";
        } else {
            $data['vSkySuc'] = "false";
            $data['vSkyNote'] = "Error Updating!";
        }
        
        echo json_encode($data);
        
    }
}