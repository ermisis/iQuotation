<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pmi_values']) && !empty($_POST['pmi_values'])) {
    
    if($_POST['pmi_values'] == "insert_pmi"){

    $date_input_pmi = escaepD($conn, $_POST['date_input_pmi']);
    $eng_pm_mv = escaepD($conn, $_POST['eng_pm_mv']);
    $underwriter_pmi = escaepD($conn, $_POST['underwriter_pmi']);
    $insured_pmi = escaepD($conn, $_POST['insured_pmi']);
    $industry_pmi = escaepD($conn, $_POST['industry_pmi']);
    $intermediary_pmi = escaepD($conn, $_POST['intermediary_pmi']);
    $selectCurrency_pmi = escaepD($conn, $_POST['selectCurrency_pmi']);
    $market_value_tsi = escaepD($conn, $_POST['market_value_tsi']);
    $rate_mv_tsi = escaepD($conn, $_POST['rate_mv_tsi']);
    $premium_mv_tsi = escaepD($conn, $_POST['premium_mv_tsi']);
    $other_desc_pmi = escaepD($conn, $_POST['other_desc_pmi']);
    $other_nrv_pmi = escaepD($conn, $_POST['other_nrv_pmi']);
    $other_rate_pmi = escaepD($conn, $_POST['other_rate_pmi']);
    $other_prem_pmi = escaepD($conn, $_POST['other_prem_pmi']);
    $other_desc_pmi1 = escaepD($conn, $_POST['other_desc_pmi1']);
    $other_nrv_pmi1 = escaepD($conn, $_POST['other_nrv_pmi1']);
    $other_rate_pmi1 = escaepD($conn, $_POST['other_rate_pmi1']);
    $other_prem_pmi1 = escaepD($conn, $_POST['other_prem_pmi1']);
    $other_desc_pmi2 = escaepD($conn, $_POST['other_desc_pmi2']);
    $other_nrv_pmi2 = escaepD($conn, $_POST['other_nrv_pmi2']);
    $other_rate_pmi2 = escaepD($conn, $_POST['other_rate_pmi2']);
    $other_prem_pmi2 = escaepD($conn, $_POST['other_prem_pmi2']);
    $other_desc_pmi3 = escaepD($conn, $_POST['other_desc_pmi3']);
    $other_nrv_pmi3 = escaepD($conn, $_POST['other_nrv_pmi3']);
    $other_rate_pmi3 = escaepD($conn, $_POST['other_rate_pmi3']);
    $other_prem_pmi3 = escaepD($conn, $_POST['other_prem_pmi3']);
    $other_desc_pmi4 = escaepD($conn, $_POST['other_desc_pmi4']);
    $other_nrv_pmi4 = escaepD($conn, $_POST['other_nrv_pmi4']);
    $other_rate_pmi4 = escaepD($conn, $_POST['other_rate_pmi4']);
    $other_prem_pmi4 = escaepD($conn, $_POST['other_prem_pmi4']);
    $ap_mkv = escaepD($conn, $_POST['ap_mkv']);
    $ap_rate_mv = escaepD($conn, $_POST['ap_rate_mv']);
    $ap_premium_mv = escaepD($conn, $_POST['ap_premium_mv']);
    $pmi_np = escaepD($conn, $_POST['pmi_np']);
    $mv_sub = escaepD($conn, $_POST['mv_sub']);
    
    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_pm` WHERE `eng_pm`='".$eng_pm_mv."' AND `insured_pm`='".$insured_pmi."' AND `industry_pm`='".$industry_pmi."' AND `intermediary_pm`='".$intermediary_pmi."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_pm`(`date_input_pm`, `eng_pm`, `underwriter_pm`, `insured_pm`, `industry_pm`, `intermediary_pm`, `selectCurrency_pm`, `new_replacement_market_value`, `rate_tsi`, `premium_tsi`, `other_desc_pm`, `other_nrv_pm`, `other_rate_pm`, `other_prem_pm`, `other_desc_pm1`, `other_nrv_pm1`, `other_rate_pm1`, `other_prem_pm1`, `other_desc_pm2`, `other_nrv_pm2`, `other_rate_pm2`, `other_prem_pm2`, `other_desc_pm3`, `other_nrv_pm3`, `other_rate_pm3`, `other_prem_pm3`, `other_desc_pm4`, `other_nrv_pm4`, `other_rate_pm4`, `other_prem_pm4`, `ap_nrv`, `ap_rate`, `ap_premium`, `pm_np`, `nrv_sub`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_pmi, $eng_pm_mv, $underwriter_pmi, $insured_pmi, $industry_pmi, $intermediary_pmi, $selectCurrency_pmi, $market_value_tsi, $rate_mv_tsi, $premium_mv_tsi, $other_desc_pmi, $other_nrv_pmi, $other_rate_pmi, $other_prem_pmi, $other_desc_pmi1, $other_nrv_pmi1, $other_rate_pmi1, $other_prem_pmi1, $other_desc_pmi2, $other_nrv_pmi2, $other_rate_pmi2, $other_prem_pmi2, $other_desc_pmi3, $other_nrv_pmi3, $other_rate_pmi3, $other_prem_pmi3, $other_desc_pmi4, $other_nrv_pmi4, $other_rate_pmi4, $other_prem_pmi4, $ap_mkv, $ap_rate_mv, $ap_premium_mv, $pmi_np, $mv_sub))) {
        
                $jk['vSkyNote'] = "Data Added Successfully";
                $jk['vSkySuc'] = true;
            
            } else {
            
                $jk['vSkyNote'] = "Error Adding Data!";
                $jk['vSkySuc'] = false;
            }

        }
    
    } 
    
    echo json_encode($jk);
    
}