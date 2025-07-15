<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['ce_values']) && !empty($_POST['ce_values'])) {
    
    if($_POST['ce_values'] == "insert_ce") {
        
        $date_input_ce = escaepD($conn, $_POST['date_input_ce']);
        $eng_ce = escaepD($conn, $_POST['eng_ce']);
        $underwriter_ce = escaepD($conn, $_POST['underwriter_ce']);
        $insured_ce = escaepD($conn, $_POST['insured_ce']);
        $industry_ce = escaepD($conn, $_POST['industry_ce']);
        $intermediary_ce = escaepD($conn, $_POST['intermediary_ce']);
        $selectCurrency_ce = escaepD($conn, $_POST['selectCurrency_ce']);
        $contract_sum_cp = escaepD($conn, $_POST['contract_sum_cp']);
        $rate_cp = escaepD($conn, $_POST['rate_cp']);
        $premium_cp = escaepD($conn, $_POST['premium_cp']);
        $contract_sum_tpl = escaepD($conn, $_POST['contract_sum_tpl']);
        $rate_tpl = escaepD($conn, $_POST['rate_tpl']);
        $premium_tpl = escaepD($conn, $_POST['premium_tpl']);
        $contract_sum_csp = escaepD($conn, $_POST['contract_sum_csp']);
        $rate_csp = escaepD($conn, $_POST['rate_csp']);
        $premium_csp = escaepD($conn, $_POST['premium_csp']);
        $contract_sum_bpm = escaepD($conn, $_POST['contract_sum_bpm']);
        $rate_bpm = escaepD($conn, $_POST['rate_bpm']);
        $premium_bpm = escaepD($conn, $_POST['premium_bpm']);
        $contract_sum_rod = escaepD($conn, $_POST['contract_sum_rod']);
        $rate_rod = escaepD($conn, $_POST['rate_rod']);
        $premium_rod = escaepD($conn, $_POST['premium_rod']);
        $contract_sum_md = escaepD($conn, $_POST['contract_sum_md']);
        $rate_md = escaepD($conn, $_POST['rate_md']);
        $premium_md = escaepD($conn, $_POST['premium_md']);
        $contract_sum_src = escaepD($conn, $_POST['contract_sum_src']);
        $rate_src = escaepD($conn, $_POST['rate_src']);
        $premium_src = escaepD($conn, $_POST['premium_src']);
        $contract_sum_cl = escaepD($conn, $_POST['contract_sum_cl']);
        $rate_cl = escaepD($conn, $_POST['rate_cl']);
        $premium_cl = escaepD($conn, $_POST['premium_cl']);
        $contract_sum_72hc = escaepD($conn, $_POST['contract_sum_72hc']);
        $rate_72hc = escaepD($conn, $_POST['rate_72hc']);
        $premium_72hc = escaepD($conn, $_POST['premium_72hc']);
        $contract_sum_pf = escaepD($conn, $_POST['contract_sum_pf']);
        $rate_pf = escaepD($conn, $_POST['rate_pf']);
        $premium_pf = escaepD($conn, $_POST['premium_pf']);
        $contract_sum_emc = escaepD($conn, $_POST['contract_sum_emc']);
        $rate_emc = escaepD($conn, $_POST['rate_emc']);
        $premium_emc = escaepD($conn, $_POST['premium_emc']);
        $contract_sum_spy = escaepD($conn, $_POST['contract_sum_spy']);
        $rate_spy = escaepD($conn, $_POST['rate_spy']);
        $premium_spy = escaepD($conn, $_POST['premium_spy']);
        $contract_sum_aisi = escaepD($conn, $_POST['contract_sum_aisi']);
        $rate_aisi = escaepD($conn, $_POST['rate_aisi']);
        $premium_aisi = escaepD($conn, $_POST['premium_aisi']);
        $contract_sum_rv = escaepD($conn, $_POST['contract_sum_rv']);
        $rate_rv = escaepD($conn, $_POST['rate_rv']);
        $premium_rv = escaepD($conn, $_POST['premium_rv']);
        $contract_sum_arsi = escaepD($conn, $_POST['contract_sum_arsi']);
        $rate_arsi = escaepD($conn, $_POST['rate_arsi']);
        $premium_arsi = escaepD($conn, $_POST['premium_arsi']);
        $contract_sum_m50 = escaepD($conn, $_POST['contract_sum_m50']);
        $rate_m50 = escaepD($conn, $_POST['rate_m50']);
        $premium_m50 = escaepD($conn, $_POST['premium_m50']);
        $contract_sum_pa = escaepD($conn, $_POST['contract_sum_pa']);
        $rate_pa = escaepD($conn, $_POST['rate_pa']);
        $premium_pa = escaepD($conn, $_POST['premium_pa']);
        $contract_sum_cpc = escaepD($conn, $_POST['contract_sum_cpc']);
        $rate_cpc = escaepD($conn, $_POST['rate_cpc']);
        $premium_cpc = escaepD($conn, $_POST['premium_cpc']);
        $contract_sum_ucp = escaepD($conn, $_POST['contract_sum_ucp']);
        $rate_ucp = escaepD($conn, $_POST['rate_ucp']);
        $premium_ucp = escaepD($conn, $_POST['premium_ucp']);
        $contract_sum_wos = escaepD($conn, $_POST['contract_sum_wos']);
        $rate_wos = escaepD($conn, $_POST['rate_wos']);
        $premium_wos = escaepD($conn, $_POST['premium_wos']);
        $contract_sum_pdc = escaepD($conn, $_POST['contract_sum_pdc']);
        $rate_pdc = escaepD($conn, $_POST['rate_pdc']);
        $premium_pdc = escaepD($conn, $_POST['premium_pdc']);
        $contract_sum_msec = escaepD($conn, $_POST['contract_sum_msec']);
        $rate_msec = escaepD($conn, $_POST['rate_msec']);
        $premium_msec = escaepD($conn, $_POST['premium_msec']);
        $contract_sum_eco = escaepD($conn, $_POST['contract_sum_eco']);
        $rate_eco = escaepD($conn, $_POST['rate_eco']);
        $premium_eco = escaepD($conn, $_POST['premium_eco']);
        $contract_sum_ecfa = escaepD($conn, $_POST['contract_sum_ecfa']);
        $rate_ecfa = escaepD($conn, $_POST['rate_ecfa']);
        $premium_ecfa = escaepD($conn, $_POST['premium_ecfa']);
        $contract_sum_poss = escaepD($conn, $_POST['contract_sum_poss']);
        $rate_poss = escaepD($conn, $_POST['rate_poss']);
        $premium_poss = escaepD($conn, $_POST['premium_poss']);
        $contract_sum_esp = escaepD($conn, $_POST['contract_sum_esp']);
        $rate_esp = escaepD($conn, $_POST['rate_esp']);
        $premium_esp = escaepD($conn, $_POST['premium_esp']);
        $contract_sum_wcc = escaepD($conn, $_POST['contract_sum_wcc']);
        $rate_wcc = escaepD($conn, $_POST['rate_wcc']);
        $premium_wcc = escaepD($conn, $_POST['premium_wcc']);
        $contract_sum_it = escaepD($conn, $_POST['contract_sum_it']);
        $rate_it = escaepD($conn, $_POST['rate_it']);
        $premium_it = escaepD($conn, $_POST['premium_it']);
        $contract_sum_epp = escaepD($conn, $_POST['contract_sum_epp']);
        $rate_epp = escaepD($conn, $_POST['rate_epp']);
        $premium_epp = escaepD($conn, $_POST['premium_epp']);
        $contract_sum_vrws = escaepD($conn, $_POST['contract_sum_vrws']);
        $rate_vrws = escaepD($conn, $_POST['rate_vrws']);
        $premium_vrws = escaepD($conn, $_POST['premium_vrws']);
        $others_one = escaepD($conn, $_POST['others_one']);
        $others_one_sum = escaepD($conn, $_POST['others_one_sum']);
        $others_one_rate = escaepD($conn, $_POST['others_one_rate']);
        $others_one_prem = escaepD($conn, $_POST['others_one_prem']);
        $others_two = escaepD($conn, $_POST['others_two']);
        $others_two_sum = escaepD($conn, $_POST['others_two_sum']);
        $others_two_rate = escaepD($conn, $_POST['others_two_rate']);
        $others_two_prem = escaepD($conn, $_POST['others_two_prem']);
        $others_three = escaepD($conn, $_POST['others_three']);
        $others_three_sum = escaepD($conn, $_POST['others_three_sum']);
        $others_three_rate = escaepD($conn, $_POST['others_three_rate']);
        $others_three_prem = escaepD($conn, $_POST['others_three_prem']);
        $others_four = escaepD($conn, $_POST['others_four']);
        $others_four_sum = escaepD($conn, $_POST['others_four_sum']);
        $others_four_rate = escaepD($conn, $_POST['others_four_rate']);
        $others_four_prem = escaepD($conn, $_POST['others_four_prem']);
        $others_five = escaepD($conn, $_POST['others_five']);
        $others_five_sum = escaepD($conn, $_POST['others_five_sum']);
        $others_five_rate = escaepD($conn, $_POST['others_five_rate']);
        $others_five_prem = escaepD($conn, $_POST['others_five_prem']);
        $contract_sum_ebp = escaepD($conn, $_POST['contract_sum_ebp']);
        $rate_ebp = escaepD($conn, $_POST['rate_ebp']);
        $premium_ebp = escaepD($conn, $_POST['premium_ebp']);
        $contract_sum_levy = escaepD($conn, $_POST['contract_sum_levy']);
        $rate_levy = escaepD($conn, $_POST['rate_levy']);
        $premium_levy = escaepD($conn, $_POST['premium_levy']);
        $contract_sum_cert = escaepD($conn, $_POST['contract_sum_cert']);
        $rate_cert = escaepD($conn, $_POST['rate_cert']);
        $premium_cert = escaepD($conn, $_POST['premium_cert']);
        $contract_sum_prem = escaepD($conn, $_POST['contract_sum_prem']);
        $rate_prem = escaepD($conn, $_POST['rate_prem']);
        $premium_prem = escaepD($conn, $_POST['premium_prem']);
        $contract_sum_ded = escaepD($conn, $_POST['contract_sum_ded']);
        $works_e = escaepD($conn, $_POST['works_e']);
        $property_d = escaepD($conn, $_POST['property_d']);
        $testing = escaepD($conn, $_POST['testing']);
        $others = escaepD($conn, $_POST['others']);
        $contract_sum_sub = escaepD($conn, $_POST['contract_sum_sub']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_ce` WHERE `eng_ce`='".$eng_ce."' AND `insured_ce`='".$insured_ce."' AND `industry_ce`='".$industry_ce."' AND `intermediary_ce`='".$intermediary_ce."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = "found";

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_ce`(`date_input`, `eng_ce`, `underwriter_ce`, `insured_ce`, `industry_ce`, `intermediary_ce`, `selectCurrency_ce`, `contract_sum_cp`, `rate_cp`, `premium_cp`, `contract_sum_tpl`, `rate_tpl`, `premium_tpl`, `contract_sum_csp`, `rate_csp`, `premium_csp`, `contract_sum_bpm`, `rate_bpm`, `premium_bpm`, `contract_sum_rod`, `rate_rod`, `premium_rod`, `contract_sum_md`, `rate_md`, `premium_md`, `contract_sum_src`, `rate_src`, `premium_src`, `contract_sum_cl`, `rate_cl`, `premium_cl`, `contract_sum_72hc`, `rate_72hc`, `premium_72hc`, `contract_sum_pf`, `rate_pf`, `premium_pf`, `contract_sum_emc`, `rate_emc`, `premium_emc`, `contract_sum_spy`, `rate_spy`, `premium_spy`, `contract_sum_aisi`, `rate_aisi`, `premium_aisi`, `contract_sum_rv`, `rate_rv`, `premium_rv`, `contract_sum_arsi`, `rate_arsi`, `premium_arsi`, `contract_sum_m50`, `rate_m50`, `premium_m50`, `contract_sum_pa`, `rate_pa`, `premium_pa`, `contract_sum_cpc`, `rate_cpc`, `premium_cpc`, `contract_sum_ucp`, `rate_ucp`, `premium_ucp`, `contract_sum_wos`, `rate_wos`, `premium_wos`, `contract_sum_pdc`, `rate_pdc`, `premium_pdc`, `contract_sum_msec`, `rate_msec`, `premium_msec`, `contract_sum_eco`, `rate_eco`, `premium_eco`, `contract_sum_ecfa`, `rate_ecfa`, `premium_ecfa`, `contract_sum_poss`, `rate_poss`, `premium_poss`, `contract_sum_esp`, `rate_esp`, `premium_esp`, `contract_sum_wcc`, `rate_wcc`, `premium_wcc`, `contract_sum_it`, `rate_it`, `premium_it`, `contract_sum_epp`, `rate_epp`, `premium_epp`, `contract_sum_vrws`, `rate_vrws`, `premium_vrws`, `other_one`, `other_one_sum`, `other_one_rate`, `other_one_prem`, `other_two`, `other_two_sum`, `other_two_rate`, `other_two_prem`, `others_three`, `others_three_sum`, `others_three_rate`, `others_three_prem`, `others_four`, `others_four_sum`, `others_four_rate`, `others_four_prem`, `others_five`, `others_five_sum`, `others_five_rate`, `others_five_prem`, `contract_sum_ebp`, `rate_ebp`, `premium_ebp`, `contract_sum_levy`, `rate_levy`, `premium_levy`, `contract_sum_cert`, `rate_cert`, `premium_cert`, `contract_sum_prem`, `rate_prem`, `premium_prem`, `contract_sum_ded`, `works_e`, `property_d`, `testing`, `others`, `contract_sum_sub`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_ce, $eng_ce, $underwriter_ce, $insured_ce, $industry_ce, $intermediary_ce, $selectCurrency_ce, $contract_sum_cp, $rate_cp, $premium_cp, $contract_sum_tpl, $rate_tpl, $premium_tpl, $contract_sum_csp, $rate_csp, $premium_csp, $contract_sum_bpm, $rate_bpm, $premium_bpm, $contract_sum_rod, $rate_rod, $premium_rod, $contract_sum_md, $rate_md, $premium_md, $contract_sum_src, $rate_src, $premium_src, $contract_sum_cl, $rate_cl, $premium_cl, $contract_sum_72hc, $rate_72hc, $premium_72hc, $contract_sum_pf, $rate_pf, $premium_pf, $contract_sum_emc, $rate_emc, $premium_emc, $contract_sum_spy, $rate_spy, $premium_spy, $contract_sum_aisi, $rate_aisi, $premium_aisi, $contract_sum_rv, $rate_rv, $premium_rv, $contract_sum_arsi, $rate_arsi, $premium_arsi, $contract_sum_m50, $rate_m50, $premium_m50, $contract_sum_pa, $rate_pa, $premium_pa, $contract_sum_cpc, $rate_cpc, $premium_cpc, $contract_sum_ucp, $rate_ucp, $premium_ucp, $contract_sum_wos, $rate_wos, $premium_wos, $contract_sum_pdc, $rate_pdc, $premium_pdc, $contract_sum_msec, $rate_msec, $premium_msec, $contract_sum_eco, $rate_eco, $premium_eco, $contract_sum_ecfa, $rate_ecfa, $premium_ecfa, $contract_sum_poss, $rate_poss, $premium_poss, $contract_sum_esp, $rate_esp, $premium_esp, $contract_sum_wcc, $rate_wcc, $premium_wcc, $contract_sum_it, $rate_it, $premium_it, $contract_sum_epp, $rate_epp, $premium_epp, $contract_sum_vrws, $rate_vrws, $premium_vrws, $others_one, $others_one_sum, $others_one_rate, $others_one_prem, $others_two, $others_two_sum, $others_two_rate, $others_two_prem, $others_three, $others_three_sum, $others_three_rate, $others_three_prem, $others_four, $others_four_sum, $others_four_rate, $others_four_prem, $others_five, $others_five_sum, $others_five_rate, $others_five_prem, $contract_sum_ebp, $rate_ebp, $premium_ebp, $contract_sum_levy, $rate_levy, $premium_levy, $contract_sum_cert, $rate_cert, $premium_cert, $contract_sum_prem, $rate_prem, $premium_prem, $contract_sum_ded, $works_e, $property_d, $testing, $others, $contract_sum_sub))) {

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