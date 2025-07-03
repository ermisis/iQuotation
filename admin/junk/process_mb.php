<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['mb_values']) && !empty($_POST['mb_values'])) {
    
    if($_POST['mb_values'] == "insert_mb"){

    $date_input_mb = escaepD($conn, $_POST['date_input_mb']);
    $eng_mb = escaepD($conn, $_POST['eng_mb']);
    $underwriter_mb = escaepD($conn, $_POST['underwriter_mb']);
    $insured_mb = escaepD($conn, $_POST['insured_mb']);
    $industry_mb = escaepD($conn, $_POST['industry_mb']);
    $intermediary_mb = escaepD($conn, $_POST['intermediary_mb']);
    $selectCurrency_mb = escaepD($conn, $_POST['selectCurrency_mb']);
    $new_replacement_value_tsi2 = escaepD($conn, $_POST['new_replacement_value_tsi2']);
    $rate_tsi2 = escaepD($conn, $_POST['rate_tsi2']);
    $premium_tsi2 = escaepD($conn, $_POST['premium_tsi2']);
    $nrv_srcc = escaepD($conn, $_POST['nrv_srcc']);
    $rate_srcc = escaepD($conn, $_POST['rate_srcc']);
    $premium_srcc = escaepD($conn, $_POST['premium_srcc']);
    $nrv_oef = escaepD($conn, $_POST['nrv_oef']);
    $rate_oef = escaepD($conn, $_POST['rate_oef']);
    $premium_oef = escaepD($conn, $_POST['premium_oef']);
    $nrv_airfreight = escaepD($conn, $_POST['nrv_airfreight']);
    $rate_airfreight = escaepD($conn, $_POST['rate_airfreight']);
    $premium_airfreight = escaepD($conn, $_POST['premium_airfreight']);
    $nrv_sptpl = escaepD($conn, $_POST['nrv_sptpl']);
    $rate_sptpl = escaepD($conn, $_POST['rate_sptpl']);
    $premium_sptpl = escaepD($conn, $_POST['premium_sptpl']);
    $other_desc_mb = escaepD($conn, $_POST['other_desc_mb']);
    $other_nrv_mb = escaepD($conn, $_POST['other_nrv_mb']);
    $other_rate_mb = escaepD($conn, $_POST['other_rate_mb']);
    $other_prem_mb = escaepD($conn, $_POST['other_prem_mb']);
    $other_desc_mb1 = escaepD($conn, $_POST['other_desc_mb1']);
    $other_nrv_mb1 = escaepD($conn, $_POST['other_nrv_mb1']);
    $other_rate_mb1 = escaepD($conn, $_POST['other_rate_mb1']);
    $other_prem_mb1 = escaepD($conn, $_POST['other_prem_mb1']);
    $other_desc_mb2 = escaepD($conn, $_POST['other_desc_mb2']);
    $other_nrv_mb2 = escaepD($conn, $_POST['other_nrv_mb2']);
    $other_rate_mb2 = escaepD($conn, $_POST['other_rate_mb2']);
    $other_prem_mb2 = escaepD($conn, $_POST['other_prem_mb2']);
    $other_desc_mb3 = escaepD($conn, $_POST['other_desc_mb3']);
    $other_nrv_mb3 = escaepD($conn, $_POST['other_nrv_mb3']);
    $other_rate_mb3 = escaepD($conn, $_POST['other_rate_mb3']);
    $other_prem_mb3 = escaepD($conn, $_POST['other_prem_mb3']);
    $other_desc_mb4 = escaepD($conn, $_POST['other_desc_mb4']);
    $other_nrv_mb4 = escaepD($conn, $_POST['other_nrv_mb4']);
    $other_rate_mb4 = escaepD($conn, $_POST['other_rate_mb4']);
    $other_prem_mb4 = escaepD($conn, $_POST['other_prem_mb4']);
    $nrv_engo_ap = escaepD($conn, $_POST['nrv_engo_ap']);
    $rate_engo_ap = escaepD($conn, $_POST['rate_engo_ap']);
    $premium_engo_ap = escaepD($conn, $_POST['premium_engo_ap']);
    $nrv_deduct = escaepD($conn, $_POST['nrv_deduct']);
    $nrv_subject = escaepD($conn, $_POST['nrv_subject']);

    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_other` WHERE `eng_oname`='".$eng_mb."' AND `insured_mb`='".$insured_mb."' AND `industry_mb`='".$industry_mb."' AND `intermediary_mb`='".$intermediary_mb."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_other`(`date_input`, `eng_oname`, `underwriter_mb`, `insured_mb`, `industry_mb`, `intermediary_mb`, `selectCurrency_mb`, `tsi_nrv`, `tsi_rate`, `tsi_prem`, `srcc_nrv`, `srcc_rate`, `srcc_prem`, `onwef_nrv`, `onwef_rate`, `onwef_prem`, `airfreight_nrv`, `airfreight_rate`, `airfreight_prem`, `sptl_nrv`, `sptl_rate`, `sptl_prem`, `other_desc_mb`, `other_nrv_mb`, `other_rate_mb`, `other_prem_mb`, `other_desc_mb1`, `other_nrv_mb1`, `other_rate_mb1`, `other_prem_mb1`, `other_desc_mb2`, `other_nrv_mb2`, `other_rate_mb2`, `other_prem_mb2`, `other_desc_mb3`, `other_nrv_mb3`, `other_rate_mb3`, `other_prem_mb3`, `other_desc_mb4`, `other_nrv_mb4`, `other_rate_mb4`, `other_prem_mb4`, `ap_nrv`, `ap_rate`, `ap_prem`, `deduct_nrv`, `sub_nrv`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_mb, $eng_mb, $underwriter_mb, $insured_mb, $industry_mb, $intermediary_mb, $selectCurrency_mb, $new_replacement_value_tsi2, $rate_tsi2, $premium_tsi2, $nrv_srcc, $rate_srcc, $premium_srcc, $nrv_oef, $rate_oef, $premium_oef, $nrv_airfreight, $rate_airfreight, $premium_airfreight, $nrv_sptpl, $rate_sptpl, $premium_sptpl, $other_desc_mb, $other_nrv_mb, $other_rate_mb, $other_prem_mb, $other_desc_mb1, $other_nrv_mb1, $other_rate_mb1, $other_prem_mb1, $other_desc_mb2, $other_nrv_mb2, $other_rate_mb2, $other_prem_mb2, $other_desc_mb3, $other_nrv_mb3, $other_rate_mb3, $other_prem_mb3, $other_desc_mb4, $other_nrv_mb4, $other_rate_mb4, $other_prem_mb4, $nrv_engo_ap, $rate_engo_ap, $premium_engo_ap, $nrv_deduct, $nrv_subject))) {
        
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