<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';



if (isset($_POST['bbb_values']) && !empty($_POST['bbb_values'])) {
    
    if ($_POST['bbb_values'] == "insert_bbb") {
        
        $date_input_bbb = escaepD($conn, $_POST['date_input_bbb']);
        $eng_bbb = escaepD($conn, $_POST['eng_bbb']);
        $underwriter_bbb = escaepD($conn, $_POST['underwriter_bbb']);
        $insured_bbb = escaepD($conn, $_POST['insured_bbb']);
        $industry_bbb = escaepD($conn, $_POST['industry_bbb']);
        $intermediary_bbb = escaepD($conn, $_POST['intermediary_bbb']);
        $selectCurrency_bbb = escaepD($conn, $_POST['selectCurrency_bbb']);
        $sob_limits = escaepD($conn, $_POST['sob_limits']);
        $sob_rate = escaepD($conn, $_POST['sob_rate']);
        $sob_prem = escaepD($conn, $_POST['sob_prem']);
        $s2cc_limits = escaepD($conn, $_POST['s2cc_limits']);
        $s2cc_rate = escaepD($conn, $_POST['s2cc_rate']);
        $s2cc_prem = escaepD($conn, $_POST['s2cc_prem']);
        $s3pi_limits = escaepD($conn, $_POST['s3pi_limits']);
        $s3pi_rate = escaepD($conn, $_POST['s3pi_rate']);
        $s3pi_prem = escaepD($conn, $_POST['s3pi_prem']);
        $s3pi_limits2 = escaepD($conn, $_POST['s3pi_limits2']);
        $s3pi_rate2 = escaepD($conn, $_POST['s3pi_rate2']);
        $s3pi_prem2 = escaepD($conn, $_POST['s3pi_prem2']);
        $peril_limits = escaepD($conn, $_POST['peril_limits']);
        $peril_rate = escaepD($conn, $_POST['peril_rate']);
        $peril_prem = escaepD($conn, $_POST['peril_prem']);
        $aloi_limits = escaepD($conn, $_POST['aloi_limits']);
        $aloi_rate = escaepD($conn, $_POST['aloi_rate']);
        $aloi_prem = escaepD($conn, $_POST['aloi_prem']);
        $other_desc_bbb = escaepD($conn, $_POST['other_desc_bbb']);
        $other_limit_bbb = escaepD($conn, $_POST['other_limit_bbb']);
        $other_rate_bbb = escaepD($conn, $_POST['other_rate_bbb']);
        $other_prem_bbb = escaepD($conn, $_POST['other_prem_bbb']);
        $other_desc_bbb1 = escaepD($conn, $_POST['other_desc_bbb1']);
        $other_limit_bbb1 = escaepD($conn, $_POST['other_limit_bbb1']);
        $other_rate_bbb1 = escaepD($conn, $_POST['other_rate_bbb1']);
        $other_prem_bbb1 = escaepD($conn, $_POST['other_prem_bbb1']);
        $other_desc_bbb2 = escaepD($conn, $_POST['other_desc_bbb2']);
        $other_limit_bbb2 = escaepD($conn, $_POST['other_limit_bbb2']);
        $other_rate_bbb2 = escaepD($conn, $_POST['other_rate_bbb2']);
        $other_prem_bbb2 = escaepD($conn, $_POST['other_prem_bbb2']);
        $other_desc_bbb3 = escaepD($conn, $_POST['other_desc_bbb3']);
        $other_limit_bbb3 = escaepD($conn, $_POST['other_limit_bbb3']);
        $other_rate_bbb3 = escaepD($conn, $_POST['other_rate_bbb3']);
        $other_prem_bbb3 = escaepD($conn, $_POST['other_prem_bbb3']);
        $other_desc_bbb4 = escaepD($conn, $_POST['other_desc_bbb4']);
        $other_limit_bbb4 = escaepD($conn, $_POST['other_limit_bbb4']);
        $other_rate_bbb4 = escaepD($conn, $_POST['other_rate_bbb4']);
        $other_prem_bbb4 = escaepD($conn, $_POST['other_prem_bbb4']);
        $apremm_limits = escaepD($conn, $_POST['apremm_limits']);
        $apremm_rate = escaepD($conn, $_POST['apremm_rate']);
        $apremm_prem = escaepD($conn, $_POST['apremm_prem']);
        $ded_limits = escaepD($conn, $_POST['ded_limits']);
        $subs_limits = escaepD($conn, $_POST['subs_limits']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_bbb` WHERE `eng_bbb`='".$eng_bbb."' AND `insured_bbb`='".$insured_bbb."' AND `industry_bbb`='".$industry_bbb."' AND `intermediary_bbb`='".$intermediary_bbb."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_bbb`(`date_input`, `eng_bbb`, `underwriter_bbb`, `insured_bbb`, `industry_bbb`, `intermediary_bbb`, `selectCurrency_bbb`, `sob_limits`, `sob_rate`, `sob_prem`, `s2cc_limits`, `s2cc_rate`, `s2cc_prem`, `s3pi_limits`, `s3pi_rate`, `s3pi_prem`, `s3pi_limits2`, `s3pi_rate2`, `s3pi_prem2`, `peril_limits`, `peril_rate`, `peril_prem`, `aloi_limits`, `aloi_rate`, `aloi_prem`, `other_desc_bbb`, `other_limit_bbb`, `other_rate_bbb`, `other_prem_bbb`, `other_desc_bbb1`, `other_limit_bbb1`, `other_rate_bbb1`, `other_prem_bbb1`, `other_desc_bbb2`, `other_limit_bbb2`, `other_rate_bbb2`, `other_prem_bbb2`, `other_desc_bbb3`, `other_limit_bbb3`, `other_rate_bbb3`, `other_prem_bbb3`, `other_desc_bbb4`, `other_limit_bbb4`, `other_rate_bbb4`, `other_prem_bbb4`, `apremm_limits`, `apremm_rate`, `apremm_prem`, `ded_limits`, `subs_limits`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_bbb, $eng_bbb, $underwriter_bbb, $insured_bbb, $industry_bbb, $intermediary_bbb, $selectCurrency_bbb, $sob_limits, $sob_rate, $sob_prem, $s2cc_limits, $s2cc_rate, $s2cc_prem, $s3pi_limits, $s3pi_rate, $s3pi_prem, $s3pi_limits2, $s3pi_rate2, $s3pi_prem2, $peril_limits, $peril_rate, $peril_prem, $aloi_limits, $aloi_rate, $aloi_prem, $other_desc_bbb, $other_limit_bbb, $other_rate_bbb, $other_prem_bbb, $other_desc_bbb1, $other_limit_bbb1, $other_rate_bbb1, $other_prem_bbb1, $other_desc_bbb2, $other_limit_bbb2, $other_rate_bbb2, $other_prem_bbb2, $other_desc_bbb3, $other_limit_bbb3, $other_rate_bbb3, $other_prem_bbb3, $other_desc_bbb4, $other_limit_bbb4, $other_rate_bbb4, $other_prem_bbb4, $apremm_limits, $apremm_rate, $apremm_prem, $ded_limits, $subs_limits))) {
            
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