<?php

    include $_SERVER['DOCUMENT_ROOT']."/table/dbh.inc.php";


if(isset($_POST['edit_combo']) && !empty($_POST['edit_combo'])) {
    $edit_fea_dscut_si = escaepD($conn, $_POST['edit_fea_dscut_si']);
    $edit_hd_si = escaepD($conn, $_POST['edit_hd_si']);
    $edit_ltad_si = escaepD($conn, $_POST['edit_ltad_si']);
    $edit_fea_dscut_si2 = escaepD($conn, $_POST['edit_fea_dscut_si2']);
    $edit_hd_si2 = escaepD($conn, $_POST['edit_hd_si2']);
    $edit_ltad_si2 = escaepD($conn, $_POST['edit_ltad_si2']);
    $edit_fea_dscut_si3 = escaepD($conn, $_POST['edit_fea_dscut_si3']);
    $edit_hd_si3 = escaepD($conn, $_POST['edit_hd_si3']);
    $edit_ltad_si3 = escaepD($conn, $_POST['edit_ltad_si3']);
    $edit_fea_dscut_si4 = escaepD($conn, $_POST['edit_fea_dscut_si4']);
    $edit_hd_si4 = escaepD($conn, $_POST['edit_hd_si4']);
    $edit_ltad_si4 = escaepD($conn, $_POST['edit_ltad_si4']);
    $edit_combo = escaepD($conn, $_POST['edit_combo']);
    
    if($edit_combo == "updated") {
        
        $udate_cc = mysqli_query($conn, "UPDATE `config_combo` SET `fea_dscut_si`='".$edit_fea_dscut_si."',`hd_si`='".$edit_hd_si."',`ltad_si`='".$edit_ltad_si."',`fea_dscut_si2`='".$edit_fea_dscut_si2."',`hd_si2`='".$edit_hd_si2."',`ltad_si2`='".$edit_ltad_si2."',`fea_dscut_si3`='".$edit_fea_dscut_si3."',`hd_si3`='".$edit_hd_si3."',`ltad_si3`='".$edit_ltad_si3."',`fea_dscut_si4`='".$edit_fea_dscut_si4."',`hd_si4`='".$edit_hd_si4."',`ltad_si4`='".$edit_ltad_si4."' WHERE `id`='1'");
        
        if($udate_cc){
                $data['vSkySuc'] = true;
                $data['vSkyNote'] = "Updated Successfully";
            }else{
                $data['vSkySuc'] = false;
                $data['vSkyNote'] = "Error Updating";
            }
            
            echo json_encode($data);
            exit();
        }
    
}
