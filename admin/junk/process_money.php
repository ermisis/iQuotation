<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';



if (isset($_POST['money_values']) && !empty($_POST['money_values'])) {
    
    if ($_POST['money_values'] == "insert_money") {
        
        $date_input_m = escaepD($conn, $_POST['date_input_m']);
        $eng_m = escaepD($conn, $_POST['eng_m']);
        $underwriter_m = escaepD($conn, $_POST['underwriter_m']);
        $insured_m = escaepD($conn, $_POST['insured_m']);
        $industry_m = escaepD($conn, $_POST['industry_m']);
        $intermediary_m = escaepD($conn, $_POST['intermediary_m']);
        $selectCurrency_m = escaepD($conn, $_POST['selectCurrency_m']);
        $ptl_si = escaepD($conn, $_POST['ptl_si']);
        $ptl_rate = escaepD($conn, $_POST['ptl_rate']);
        $ptl_prem = escaepD($conn, $_POST['ptl_prem']);
        $ac_si = escaepD($conn, $_POST['ac_si']);
        $ac_rate = escaepD($conn, $_POST['ac_rate']);
        $ac_prem = escaepD($conn, $_POST['ac_prem']);
        $loi_cis_si = escaepD($conn, $_POST['loi_cis_si']);
        $loi_cis_rate = escaepD($conn, $_POST['loi_cis_rate']);
        $loi_cis_prem = escaepD($conn, $_POST['loi_cis_prem']);
        $loi_hp_limits = escaepD($conn, $_POST['loi_hp_limits']);
        $loi_hp_rate = escaepD($conn, $_POST['loi_hp_rate']);
        $loi_hp_prem = escaepD($conn, $_POST['loi_hp_prem']);
        $other_desc_mi = escaepD($conn, $_POST['other_desc_mi']);
        $other_limit_mi = escaepD($conn, $_POST['other_limit_mi']);
        $other_rate_mi = escaepD($conn, $_POST['other_rate_mi']);
        $other_prem_mi = escaepD($conn, $_POST['other_prem_mi']);
        $other_desc_mi1 = escaepD($conn, $_POST['other_desc_mi1']);
        $other_limit_mi1 = escaepD($conn, $_POST['other_limit_mi1']);
        $other_rate_mi1 = escaepD($conn, $_POST['other_rate_mi1']);
        $other_prem_mi1 = escaepD($conn, $_POST['other_prem_mi1']);
        $other_desc_mi2 = escaepD($conn, $_POST['other_desc_mi2']);
        $other_limit_mi2 = escaepD($conn, $_POST['other_limit_mi2']);
        $other_rate_mi2 = escaepD($conn, $_POST['other_rate_mi2']);
        $other_prem_mi2 = escaepD($conn, $_POST['other_prem_mi2']);
        $ap_money_si = escaepD($conn, $_POST['ap_money_si']);
        $ap_money_rate = escaepD($conn, $_POST['ap_money_rate']);
        $ap_money_prem = escaepD($conn, $_POST['ap_money_prem']);
        $de_money_si = escaepD($conn, $_POST['de_money_si']);
        $sub_money_si = escaepD($conn, $_POST['sub_money_si']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_money` WHERE `eng_m`='".$eng_m."' AND `insured_m`='".$insured_m."' AND `industry_m`='".$industry_m."' AND `intermediary_m`='".$intermediary_m."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if (mysqli_query($conn, sprintf("INSERT INTO `eng_money`(`date_input`, `eng_m`, `underwriter_m`, `insured_m`, `industry_m`, `intermediary_m`, `selectCurrency_m`, `ptl_si`, `ptl_rate`, `ptl_prem`, `ac_si`, `ac_rate`, `ac_prem`, `loi_cis_si`, `loi_cis_rate`, `loi_cis_prem`, `loi_hp_limits`, `loi_hp_rate`, `loi_hp_prem`, `other_desc_mi`, `other_limit_mi`, `other_rate_mi`, `other_prem_mi`, `other_desc_mi1`, `other_limit_mi1`, `other_rate_mi1`, `other_prem_mi1`, `other_desc_mi2`, `other_limit_mi2`, `other_rate_mi2`, `other_prem_mi2`, `ap_money_si`, `ap_money_rate`, `ap_money_prem`, `de_money_si`, `sub_money_si`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_m, $eng_m, $underwriter_m, $insured_m, $industry_m, $intermediary_m, $selectCurrency_m, $ptl_si, $ptl_rate, $ptl_prem, $ac_si, $ac_rate, $ac_prem, $loi_cis_si, $loi_cis_rate, $loi_cis_prem, $loi_hp_limits, $loi_hp_rate, $loi_hp_prem, $other_desc_mi, $other_limit_mi, $other_rate_mi, $other_prem_mi, $other_desc_mi1, $other_limit_mi1, $other_rate_mi1, $other_prem_mi1, $other_desc_mi2, $other_limit_mi2, $other_rate_mi2, $other_prem_mi2, $ap_money_si, $ap_money_rate, $ap_money_prem, $de_money_si, $sub_money_si))) {
            
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