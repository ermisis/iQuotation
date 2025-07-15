<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['ee_values']) && !empty($_POST['ee_values'])) {
    
    if($_POST['ee_values'] == "insert_ee"){

    $date_input_ee = escaepD($conn, $_POST['date_input_ee']);
    $eng_ee = escaepD($conn, $_POST['eng_ee']);
    $underwriter_ee = escaepD($conn, $_POST['underwriter_ee']);
    $insured_ee = escaepD($conn, $_POST['insured_ee']);
    $industry_ee = escaepD($conn, $_POST['industry_ee']);
    $intermediary_ee = escaepD($conn, $_POST['intermediary_ee']);
    $selectCurrency_ee = escaepD($conn, $_POST['selectCurrency_ee']);
    $nrv_tsi_eo = escaepD($conn, $_POST['nrv_tsi_eo']);
    $rate_tsi_eo = escaepD($conn, $_POST['rate_tsi_eo']);
    $premium_tsi_eo = escaepD($conn, $_POST['premium_tsi_eo']);
    $nrv_srcc_eo = escaepD($conn, $_POST['nrv_srcc_eo']);
    $rate_srcc_eo = escaepD($conn, $_POST['rate_srcc_eo']);
    $premium_srcc_eo = escaepD($conn, $_POST['premium_srcc_eo']);
    $nrv_oef_eo = escaepD($conn, $_POST['nrv_oef_eo']);
    $rate_oef_eo = escaepD($conn, $_POST['rate_oef_eo']);
    $premium_oef_eo = escaepD($conn, $_POST['premium_oef_eo']);
    $nrv_airfreight_eo = escaepD($conn, $_POST['nrv_airfreight_eo']);
    $rate_airfreight_eo = escaepD($conn, $_POST['rate_airfreight_eo']);
    $premium_airfreight_eo = escaepD($conn, $_POST['premium_airfreight_eo']);
    $nrv_theft = escaepD($conn, $_POST['nrv_theft']);
    $rate_theft = escaepD($conn, $_POST['rate_theft']);
    $premium_theft = escaepD($conn, $_POST['premium_theft']);
    $nrv_mpq = escaepD($conn, $_POST['nrv_mpq']);
    $rate_mpq = escaepD($conn, $_POST['rate_mpq']);
    $premium_mpq = escaepD($conn, $_POST['premium_mpq']);
    $other_desc_ee = escaepD($conn, $_POST['other_desc_ee']);
    $other_nrv_ee = escaepD($conn, $_POST['other_nrv_ee']);
    $other_rate_ee = escaepD($conn, $_POST['other_rate_ee']);
    $other_prem_ee = escaepD($conn, $_POST['other_prem_ee']);
    $other_desc_ee1 = escaepD($conn, $_POST['other_desc_ee1']);
    $other_nrv_ee1 = escaepD($conn, $_POST['other_nrv_ee1']);
    $other_rate_ee1 = escaepD($conn, $_POST['other_rate_ee1']);
    $other_prem_ee1 = escaepD($conn, $_POST['other_prem_ee1']);
    $other_desc_ee2 = escaepD($conn, $_POST['other_desc_ee2']);
    $other_nrv_ee2 = escaepD($conn, $_POST['other_nrv_ee2']);
    $other_rate_ee2 = escaepD($conn, $_POST['other_rate_ee2']);
    $other_prem_ee2 = escaepD($conn, $_POST['other_prem_ee2']);
    $other_desc_ee3 = escaepD($conn, $_POST['other_desc_ee3']);
    $other_nrv_ee3 = escaepD($conn, $_POST['other_nrv_ee3']);
    $other_rate_ee3 = escaepD($conn, $_POST['other_rate_ee3']);
    $other_prem_ee3 = escaepD($conn, $_POST['other_prem_ee3']);
    $other_desc_ee4 = escaepD($conn, $_POST['other_desc_ee4']);
    $other_nrv_ee4 = escaepD($conn, $_POST['other_nrv_ee4']);
    $other_rate_ee4 = escaepD($conn, $_POST['other_rate_ee4']);
    $other_prem_ee4 = escaepD($conn, $_POST['other_prem_ee4']);
    $nrv_engo_ap2 = escaepD($conn, $_POST['nrv_engo_ap2']);
    $rate_engo_ap2 = escaepD($conn, $_POST['rate_engo_ap2']);
    $premium_engo_ap2 = escaepD($conn, $_POST['premium_engo_ap2']);
    $nrv_deduct2 = escaepD($conn, $_POST['nrv_deduct2']);
    $nrv_subject2 = escaepD($conn, $_POST['nrv_subject2']);

    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_other` WHERE `eng_oname`='".$eng_ee."' AND `insured_mb`='".$insured_ee."' AND `industry_mb`='".$industry_ee."' AND `intermediary_mb`='".$intermediary_ee."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_other`(`date_input`, `eng_oname`, `underwriter_mb`, `insured_mb`, `industry_mb`, `intermediary_mb`, `selectCurrency_mb`, `tsi_nrv`, `tsi_rate`, `tsi_prem`, `srcc_nrv`, `srcc_rate`, `srcc_prem`, `onwef_nrv`, `onwef_rate`, `onwef_prem`, `airfreight_nrv`, `airfreight_rate`, `airfreight_prem`, `theft_nrv`, `theft_rate`, `theft_prem`, `mpe_nrv`, `mpe_rate`, `mpe_prem`, `other_desc_mb`, `other_nrv_mb`, `other_rate_mb`, `other_prem_mb`, `other_desc_mb1`, `other_nrv_mb1`, `other_rate_mb1`, `other_prem_mb1`, `other_desc_mb2`, `other_nrv_mb2`, `other_rate_mb2`, `other_prem_mb2`, `other_desc_mb3`, `other_nrv_mb3`, `other_rate_mb3`, `other_prem_mb3`, `other_desc_mb4`, `other_nrv_mb4`, `other_rate_mb4`, `other_prem_mb4`, `ap_nrv`, `ap_rate`, `ap_prem`, `deduct_nrv`, `sub_nrv`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_ee, $eng_ee, $underwriter_ee, $insured_ee, $industry_ee, $intermediary_ee, $selectCurrency_ee, $nrv_tsi_eo, $rate_tsi_eo, $premium_tsi_eo, $nrv_srcc_eo, $rate_srcc_eo, $premium_srcc_eo, $nrv_oef_eo, $rate_oef_eo, $premium_oef_eo, $nrv_airfreight_eo, $rate_airfreight_eo, $premium_airfreight_eo, $nrv_theft, $rate_theft, $premium_theft, $nrv_mpq, $rate_mpq, $premium_mpq, $other_desc_ee, $other_nrv_ee, $other_rate_ee, $other_prem_ee, $other_desc_ee1, $other_nrv_ee1, $other_rate_ee1, $other_prem_ee1, $other_desc_ee2, $other_nrv_ee2, $other_rate_ee2, $other_prem_ee2, $other_desc_ee3, $other_nrv_ee3, $other_rate_ee3, $other_prem_ee3, $other_desc_ee4, $other_nrv_ee4, $other_rate_ee4, $other_prem_ee4, $nrv_engo_ap2, $rate_engo_ap2, $premium_engo_ap2, $nrv_deduct2, $nrv_subject2))) {
        
                $jk['vSkyNote'] = "Data Added Successfully";
                $jk['vSkySuc'] = true;
            }else {
                $jk['vSkyNote'] = "Error Adding Data!";
                $jk['vSkySuc'] = false;
            }
              
        }
        
    }
    echo json_encode($jk);
}
