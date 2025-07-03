l<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pl_values']) && !empty($_POST['pl_values'])) {
    
    if($_POST['pl_values'] == "insert_pl"){

    $date_input_pl = escaepD($conn, $_POST['date_input_pl']);
    $eng_pl = escaepD($conn, $_POST['eng_pl']);
    $underwriter_pl = escaepD($conn, $_POST['underwriter_pl']);
    $insured_pl = escaepD($conn, $_POST['insured_pl']);
    $industry_pl = escaepD($conn, $_POST['industry_pl']);
    $intermediary_pl = escaepD($conn, $_POST['intermediary_pl']);
    $selectCurrency_pl = escaepD($conn, $_POST['selectCurrency_pl']);
    $operations_si = escaepD($conn, $_POST['operations_si']);
    $operations_rate = escaepD($conn, $_POST['operations_rate']);
    $operations_prem = escaepD($conn, $_POST['operations_prem']);
    $pi_si = escaepD($conn, $_POST['pi_si']);
    $pi_rate = escaepD($conn, $_POST['pi_rate']);
    $pi_prem = escaepD($conn, $_POST['pi_prem']);
    $all_si = escaepD($conn, $_POST['all_si']);
    $all_rate = escaepD($conn, $_POST['all_rate']);
    $all_prem = escaepD($conn, $_POST['all_prem']);
    $bppl_si = escaepD($conn, $_POST['bppl_si']);
    $bppl_rate = escaepD($conn, $_POST['bppl_rate']);
    $bppl_prem = escaepD($conn, $_POST['bppl_prem']);
    $pl2_si = escaepD($conn, $_POST['pl2_si']);
    $pl2_rate = escaepD($conn, $_POST['pl2_rate']);
    $pl2_prem = escaepD($conn, $_POST['pl2_prem']);
    $tl_si = escaepD($conn, $_POST['tl_si']);
    $tl_rate = escaepD($conn, $_POST['tl_rate']);
    $tl_prem = escaepD($conn, $_POST['tl_prem']);
    $cll_si = escaepD($conn, $_POST['cll_si']);
    $cll_rate = escaepD($conn, $_POST['cll_rate']);
    $cll_prem = escaepD($conn, $_POST['cll_prem']);
    $ws_si = escaepD($conn, $_POST['ws_si']);
    $ws_rate = escaepD($conn, $_POST['ws_rate']);
    $ws_prem = escaepD($conn, $_POST['ws_prem']);
    $other_desc_pl = escaepD($conn, $_POST['other_desc_pl']);
    $other_si_pl = escaepD($conn, $_POST['other_si_pl']);
    $other_rate_pl = escaepD($conn, $_POST['other_rate_pl']);
    $other_prem_pl = escaepD($conn, $_POST['other_prem_pl']);
    $other_desc_pl1 = escaepD($conn, $_POST['other_desc_pl1']);
    $other_si_pl1 = escaepD($conn, $_POST['other_si_pl1']);
    $other_rate_pl1 = escaepD($conn, $_POST['other_rate_pl1']);
    $other_prem_pl1 = escaepD($conn, $_POST['other_prem_pl1']);
    $other_desc_pl2 = escaepD($conn, $_POST['other_desc_pl2']);
    $other_si_pl2 = escaepD($conn, $_POST['other_si_pl2']);
    $other_rate_pl2 = escaepD($conn, $_POST['other_rate_pl2']);
    $other_prem_pl2 = escaepD($conn, $_POST['other_prem_pl2']);
    $other_desc_pl3 = escaepD($conn, $_POST['other_desc_pl3']);
    $other_si_pl3 = escaepD($conn, $_POST['other_si_pl3']);
    $other_rate_pl3 = escaepD($conn, $_POST['other_rate_pl3']);
    $other_prem_pl3 = escaepD($conn, $_POST['other_prem_pl3']);
    $other_desc_pl4 = escaepD($conn, $_POST['other_desc_pl4']);
    $other_si_pl4 = escaepD($conn, $_POST['other_si_pl4']);
    $other_rate_pl4 = escaepD($conn, $_POST['other_rate_pl4']);
    $other_prem_pl4 = escaepD($conn, $_POST['other_prem_pl4']);
    $si_engo_pl = escaepD($conn, $_POST['si_engo_pl']);
    $rate_engo_pl = escaepD($conn, $_POST['rate_engo_pl']);
    $premium_engo_pl = escaepD($conn, $_POST['premium_engo_pl']);
    $de_si = escaepD($conn, $_POST['de_si']);
    $subject_si = escaepD($conn, $_POST['subject_si']);

    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_for_pl` WHERE `eng_pl`='".$eng_pl."' AND `insured_pl`='".$insured_pl."' AND `industry_pl`='".$industry_pl."' AND `intermediary_pl`='".$intermediary_pl."'"));

    $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_for_pl`(`date_input_pl`, `eng_pl`, `underwriter_pl`, `insured_pl`, `industry_pl`, `intermediary_pl`, `selectCurrency_pl`, `operations_si`, `operations_rate`, `operations_prem`, `pi_si`, `pi_rate`, `pi_prem`, `all_si`, `all_rate`, `all_prem`, `bppl_si`, `bppl_rate`, `bppl_prem`, `pl2_si`, `pl2_rate`, `pl2_prem`, `tl_si`, `tl_rate`, `tl_prem`, `cll_si`, `cll_rate`, `cll_prem`, `ws_si`, `ws_rate`, `ws_prem`, `other_desc_pl`, `other_si_pl`, `other_rate_pl`, `other_prem_pl`, `other_desc_pl1`, `other_si_pl1`, `other_rate_pl1`, `other_prem_pl1`, `other_desc_pl2`, `other_si_pl2`, `other_rate_pl2`, `other_prem_pl2`, `other_desc_pl3`, `other_si_pl3`, `other_rate_pl3`, `other_prem_pl3`, `other_desc_pl4`, `other_si_pl4`, `other_rate_pl4`, `other_prem_pl4`, `si_engo_pl`, `rate_engo_pl`, `premium_engo_pl`, `de_si`, `subject_si`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_pl, $eng_pl, $underwriter_pl, $insured_pl, $industry_pl, $intermediary_pl, $selectCurrency_pl, $operations_si, $operations_rate, $operations_prem, $pi_si, $pi_rate, $pi_prem, $all_si, $all_rate, $all_prem, $bppl_si, $bppl_rate, $bppl_prem, $pl2_si, $pl2_rate, $pl2_prem, $tl_si, $tl_rate, $tl_prem, $cll_si, $cll_rate, $cll_prem, $ws_si, $ws_rate, $ws_prem, $other_desc_pl, $other_si_pl, $other_rate_pl, $other_prem_pl, $other_desc_pl1, $other_si_pl1, $other_rate_pl1, $other_prem_pl1, $other_desc_pl2, $other_si_pl2, $other_rate_pl2, $other_prem_pl2, $other_desc_pl3, $other_si_pl3, $other_rate_pl3, $other_prem_pl3, $other_desc_pl4, $other_si_pl4, $other_rate_pl4, $other_prem_pl4, $si_engo_pl, $rate_engo_pl, $premium_engo_pl, $de_si, $subject_si))) {
        
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