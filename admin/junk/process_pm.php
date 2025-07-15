<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pm_values']) && !empty($_POST['pm_values'])) {
    
    if($_POST['pm_values'] == "insert_pm"){

        $date_input_pm = escaepD($conn, $_POST['date_input_pm']);
        $eng_pm_nrv = escaepD($conn, $_POST['eng_pm_nrv']);
        $underwriter_pm = escaepD($conn, $_POST['underwriter_pm']);
        $insured_pm = escaepD($conn, $_POST['insured_pm']);
        $industry_pm = escaepD($conn, $_POST['industry_pm']);
        $intermediary_pm = escaepD($conn, $_POST['intermediary_pm']);
        $selectCurrency_pm = escaepD($conn, $_POST['selectCurrency_pm']);
        $new_replacement_value_tsi = escaepD($conn, $_POST['new_replacement_value_tsi']);
        $rate_tsi = escaepD($conn, $_POST['rate_tsi']);
        $premium_tsi = escaepD($conn, $_POST['premium_tsi']);
        $other_desc_pm = escaepD($conn, $_POST['other_desc_pm']);
        $other_nrv_pm = escaepD($conn, $_POST['other_nrv_pm']);
        $other_rate_pm = escaepD($conn, $_POST['other_rate_pm']);
        $other_prem_pm = escaepD($conn, $_POST['other_prem_pm']);
        $other_desc_pm1 = escaepD($conn, $_POST['other_desc_pm1']);
        $other_nrv_pm1 = escaepD($conn, $_POST['other_nrv_pm1']);
        $other_rate_pm1 = escaepD($conn, $_POST['other_rate_pm1']);
        $other_prem_pm1 = escaepD($conn, $_POST['other_prem_pm1']);
        $other_desc_pm2 = escaepD($conn, $_POST['other_desc_pm2']);
        $other_nrv_pm2 = escaepD($conn, $_POST['other_nrv_pm2']);
        $other_rate_pm2 = escaepD($conn, $_POST['other_rate_pm2']);
        $other_prem_pm2 = escaepD($conn, $_POST['other_prem_pm2']);
        $other_desc_pm3 = escaepD($conn, $_POST['other_desc_pm3']);
        $other_nrv_pm3 = escaepD($conn, $_POST['other_nrv_pm3']);
        $other_rate_pm3 = escaepD($conn, $_POST['other_rate_pm3']);
        $other_prem_pm3 = escaepD($conn, $_POST['other_prem_pm3']);
        $other_desc_pm4 = escaepD($conn, $_POST['other_desc_pm4']);
        $other_nrv_pm4 = escaepD($conn, $_POST['other_nrv_pm4']);
        $other_rate_pm4 = escaepD($conn, $_POST['other_rate_pm4']);
        $other_prem_pm4 = escaepD($conn, $_POST['other_prem_pm4']);
        $ap_nrv = escaepD($conn, $_POST['ap_nrv']);
        $ap_rate = escaepD($conn, $_POST['ap_rate']);
        $ap_premium = escaepD($conn, $_POST['ap_premium']);
        $pm_np = escaepD($conn, $_POST['pm_np']);
        $nrv_sub = escaepD($conn, $_POST['nrv_sub']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_pm` WHERE `eng_pm`='".$eng_pm_nrv."' AND `insured_pm`='".$insured_pm."' AND `industry_pm`='".$industry_pm."' AND `intermediary_pm`='".$intermediary_pm."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_pm`(`date_input_pm`, `eng_pm`, `underwriter_pm`, `insured_pm`, `industry_pm`, `intermediary_pm`, `selectCurrency_pm`, `new_replacement_market_value`, `rate_tsi`, `premium_tsi`, `other_desc_pm`, `other_nrv_pm`, `other_rate_pm`, `other_prem_pm`, `other_desc_pm1`, `other_nrv_pm1`, `other_rate_pm1`, `other_prem_pm1`, `other_desc_pm2`, `other_nrv_pm2`, `other_rate_pm2`, `other_prem_pm2`, `other_desc_pm3`, `other_nrv_pm3`, `other_rate_pm3`, `other_prem_pm3`, `other_desc_pm4`, `other_nrv_pm4`, `other_rate_pm4`, `other_prem_pm4`, `ap_nrv`, `ap_rate`, `ap_premium`, `pm_np`, `nrv_sub`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_pm, $eng_pm_nrv, $underwriter_pm, $insured_pm, $industry_pm, $intermediary_pm, $selectCurrency_pm, $new_replacement_value_tsi, $rate_tsi, $premium_tsi, $other_desc_pm, $other_nrv_pm, $other_rate_pm, $other_prem_pm, $other_desc_pm1, $other_nrv_pm1, $other_rate_pm1, $other_prem_pm1, $other_desc_pm2, $other_nrv_pm2, $other_rate_pm2, $other_prem_pm2, $other_desc_pm3, $other_nrv_pm3, $other_rate_pm3, $other_prem_pm3, $other_desc_pm4, $other_nrv_pm4, $other_rate_pm4, $other_prem_pm4, $ap_nrv, $ap_rate, $ap_premium, $pm_np, $nrv_sub))) {
            
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