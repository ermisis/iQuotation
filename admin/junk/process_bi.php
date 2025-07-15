<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';



if(isset($_POST['bi_values']) && !empty($_POST['bi_values'])) {
    
    if($_POST['bi_values'] == "insert_bi"){

        $date_input_bty = escaepD($conn, $_POST['date_input_bty']);
        $eng_bty = escaepD($conn, $_POST['eng_bty']);
        $underwriter_bty = escaepD($conn, $_POST['underwriter_bty']);
        $insured_bty = escaepD($conn, $_POST['insured_bty']);
        $industry_bty = escaepD($conn, $_POST['industry_bty']);
        $intermediary_bty = escaepD($conn, $_POST['intermediary_bty']);
        $selectCurrency_bty = escaepD($conn, $_POST['selectCurrency_bty']);
        $fge_limits = escaepD($conn, $_POST['fge_limits']);
        $fge_rate = escaepD($conn, $_POST['fge_rate']);
        $fge_prem = escaepD($conn, $_POST['fge_prem']);
        $premises_limits = escaepD($conn, $_POST['premises_limits']);
        $premises_rate = escaepD($conn, $_POST['premises_rate']);
        $premises_prem = escaepD($conn, $_POST['premises_prem']);
        $transit_limits = escaepD($conn, $_POST['transit_limits']);
        $transit_rate = escaepD($conn, $_POST['transit_rate']);
        $transit_prem = escaepD($conn, $_POST['transit_prem']);
        $fc_limits = escaepD($conn, $_POST['fc_limits']);
        $fc_rate = escaepD($conn, $_POST['fc_rate']);
        $fc_prem = escaepD($conn, $_POST['fc_prem']);
        $fs_limits = escaepD($conn, $_POST['fs_limits']);
        $fs_rate = escaepD($conn, $_POST['fs_rate']);
        $fs_prem = escaepD($conn, $_POST['fs_prem']);
        $cc_limits = escaepD($conn, $_POST['cc_limits']);
        $cc_rate = escaepD($conn, $_POST['cc_rate']);
        $cc_prem = escaepD($conn, $_POST['cc_prem']);
        $doc_limits = escaepD($conn, $_POST['doc_limits']);
        $doc_rate = escaepD($conn, $_POST['doc_rate']);
        $doc_prem = escaepD($conn, $_POST['doc_prem']);
        $los_limits = escaepD($conn, $_POST['los_limits']);
        $los_rate = escaepD($conn, $_POST['los_rate']);
        $los_prem = escaepD($conn, $_POST['los_prem']);
        $proi_limits = escaepD($conn, $_POST['proi_limits']);
        $proi_rate = escaepD($conn, $_POST['proi_rate']);
        $proi_prem = escaepD($conn, $_POST['proi_prem']);
        $rem_limits = escaepD($conn, $_POST['rem_limits']);
        $rem_rate = escaepD($conn, $_POST['rem_rate']);
        $rem_prem = escaepD($conn, $_POST['rem_prem']);
        $lod_limits = escaepD($conn, $_POST['lod_limits']);
        $lod_rate = escaepD($conn, $_POST['lod_rate']);
        $lod_prem = escaepD($conn, $_POST['lod_prem']);
        $csdb_limits = escaepD($conn, $_POST['csdb_limits']);
        $csdb_rate = escaepD($conn, $_POST['csdb_rate']);
        $csdb_prem = escaepD($conn, $_POST['csdb_prem']);
        $ccl_limits = escaepD($conn, $_POST['ccl_limits']);
        $ccl_rate = escaepD($conn, $_POST['ccl_rate']);
        $ccl_prem = escaepD($conn, $_POST['ccl_prem']);
        $other_desc_bi = escaepD($conn, $_POST['other_desc_bi']);
        $other_limit_bi = escaepD($conn, $_POST['other_limit_bi']);
        $other_rate_bi = escaepD($conn, $_POST['other_rate_bi']);
        $other_prem_bi = escaepD($conn, $_POST['other_prem_bi']);
        $other_desc_bi1 = escaepD($conn, $_POST['other_desc_bi1']);
        $other_limit_bi1 = escaepD($conn, $_POST['other_limit_bi1']);
        $other_rate_bi1 = escaepD($conn, $_POST['other_rate_bi1']);
        $other_prem_bi1 = escaepD($conn, $_POST['other_prem_bi1']);
        $other_desc_bi2 = escaepD($conn, $_POST['other_desc_bi2']);
        $other_limit_bi2 = escaepD($conn, $_POST['other_limit_bi2']);
        $other_rate_bi2 = escaepD($conn, $_POST['other_rate_bi2']);
        $other_prem_bi2 = escaepD($conn, $_POST['other_prem_bi2']);
        $other_desc_bi3 = escaepD($conn, $_POST['other_desc_bi3']);
        $other_limit_bi3 = escaepD($conn, $_POST['other_limit_bi3']);
        $other_rate_bi3 = escaepD($conn, $_POST['other_rate_bi3']);
        $other_prem_bi3 = escaepD($conn, $_POST['other_prem_bi3']);
        $other_desc_bi4 = escaepD($conn, $_POST['other_desc_bi4']);
        $other_limit_bi4 = escaepD($conn, $_POST['other_limit_bi4']);
        $other_rate_bi4 = escaepD($conn, $_POST['other_rate_bi4']);
        $other_prem_bi4 = escaepD($conn, $_POST['other_prem_bi4']);
        $tsi4bi_limits = escaepD($conn, $_POST['tsi4bi_limits']);
        $tsi4bi_rate = escaepD($conn, $_POST['tsi4bi_rate']);
        $tsi4bi_prem = escaepD($conn, $_POST['tsi4bi_prem']);
        $ap4bi_limits = escaepD($conn, $_POST['ap4bi_limits']);
        $ap4bi_rate = escaepD($conn, $_POST['ap4bi_rate']);
        $ap4bi_prem = escaepD($conn, $_POST['ap4bi_prem']);
        $de4bi_limits = escaepD($conn, $_POST['de4bi_limits']);
        $sub4bi_limits = escaepD($conn, $_POST['sub4bi_limits']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_bi` WHERE `eng_bty`='".$eng_bty."' AND `insured_bty`='".$insured_bty."' AND `industry_bty`='".$industry_bty."' AND `intermediary_bty`='".$intermediary_bty."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_bi`(`date_input`, `eng_bty`, `underwriter_bty`, `insured_bty`, `industry_bty`, `intermediary_bty`, `selectCurrency_bty`, `fge_limits`, `fge_rate`, `fge_prem`, `premises_limits`, `premises_rate`, `premises_prem`, `transit_limits`, `transit_rate`, `transit_prem`, `fc_limits`, `fc_rate`, `fc_prem`, `fs_limits`, `fs_rate`, `fs_prem`, `cc_limits`, `cc_rate`, `cc_prem`, `doc_limits`, `doc_rate`, `doc_prem`, `los_limits`, `los_rate`, `los_prem`, `pi_limits`, `pi_rate`, `pi_prem`, `rm_limits`, `rm_rate`, `rm_prem`, `lod_limits`, `lod_rate`, `lod_prem`, `csdb_limits`, `csdb_rate`, `csdb_prem`, `ccl_limits`, `ccl_rate`, `ccl_prem`, `other_desc_bi`, `other_limit_bi`, `other_rate_bi`, `other_prem_bi`, `other_desc_bi1`, `other_limit_bi1`, `other_rate_bi1`, `other_prem_bi1`, `other_desc_bi2`, `other_limit_bi2`, `other_rate_bi2`, `other_prem_bi2`, `other_desc_bi3`, `other_limit_bi3`, `other_rate_bi3`, `other_prem_bi3`, `other_desc_bi4`, `other_limit_bi4`, `other_rate_bi4`, `other_prem_bi4`, `tsi4bi_limits`, `tsi4bi_rate`, `tsi4bi_prem`, `ap4bi_limits`, `ap4bi_rate`, `ap4bi_prem`, `de4bi_limits`, `sub4bi_limits`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_bty, $eng_bty, $underwriter_bty, $insured_bty, $industry_bty, $intermediary_bty, $selectCurrency_bty, $fge_limits, $fge_rate, $fge_prem, $premises_limits, $premises_rate, $premises_prem, $transit_limits, $transit_rate, $transit_prem, $fc_limits, $fc_rate, $fc_prem, $fs_limits, $fs_rate, $fs_prem, $cc_limits, $cc_rate, $cc_prem, $doc_limits, $doc_rate, $doc_prem, $los_limits, $los_rate, $los_prem, $proi_limits, $proi_rate, $proi_prem, $rem_limits, $rem_rate, $rem_prem, $lod_limits, $lod_rate, $lod_prem, $csdb_limits, $csdb_rate, $csdb_prem, $ccl_limits, $ccl_rate, $ccl_prem, $other_desc_bi, $other_limit_bi, $other_rate_bi, $other_prem_bi, $other_desc_bi1, $other_limit_bi1, $other_rate_bi1, $other_prem_bi1, $other_desc_bi2, $other_limit_bi2, $other_rate_bi2, $other_prem_bi2, $other_desc_bi3, $other_limit_bi3, $other_rate_bi3, $other_prem_bi3, $other_desc_bi4, $other_limit_bi4, $other_rate_bi4, $other_prem_bi4, $tsi4bi_limits, $tsi4bi_rate, $tsi4bi_prem, $ap4bi_limits, $ap4bi_rate, $ap4bi_prem, $de4bi_limits, $sub4bi_limits))) {
            
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