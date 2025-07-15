<?php 

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['wc_values']) && !empty($_POST['wc_values'])) {
    
    if($_POST['wc_values'] == "insert_wc") {
        
        $heo = escaepD($conn, $_POST['heo']);
        $date_input_wc = escaepD($conn, $_POST['date_input_wc']);
        $underwriter_wc = escaepD($conn, $_POST['underwriter_wc']);
        $insured_wc = escaepD($conn, $_POST['insured_wc']);
        $industry_wc = escaepD($conn, $_POST['industry_wc']);
        $intermediary_wc = escaepD($conn, $_POST['intermediary_wc']);
        $selectCurrency_wc = escaepD($conn, $_POST['selectCurrency_wc']);
        $clerical_asp = escaepD($conn, $_POST['clerical_asp']);
        $clerical_num_wc = escaepD($conn, $_POST['clerical_num_wc']);
        $clerical_dtas = escaepD($conn, $_POST['clerical_dtas']);
        $clerical_heoc = escaepD($conn, $_POST['clerical_heoc']);
        $clerical_bc = escaepD($conn, $_POST['clerical_bc']);
        $clerical_rate = escaepD($conn, $_POST['clerical_rate']);
        $clerical_prem = escaepD($conn, $_POST['clerical_prem']);
        $nonclerical_asp = escaepD($conn, $_POST['nonclerical_asp']);
        $nonclerical_num = escaepD($conn, $_POST['nonclerical_num']);
        $nonclerical_dtas = escaepD($conn, $_POST['nonclerical_dtas']);
        $nonclerical_heoc = escaepD($conn, $_POST['nonclerical_heoc']);
        $nonclerical_bc = escaepD($conn, $_POST['nonclerical_bc']);
        $nonclerical_rate = escaepD($conn, $_POST['nonclerical_rate']);
        $nonclerical_prem = escaepD($conn, $_POST['nonclerical_prem']);
        $msd_asp = escaepD($conn, $_POST['msd_asp']);
        $msd_num = escaepD($conn, $_POST['msd_num']);
        $msd_dtas = escaepD($conn, $_POST['msd_dtas']);
        $msd_heoc = escaepD($conn, $_POST['msd_heoc']);
        $msd_bc = escaepD($conn, $_POST['msd_bc']);
        $msd_rate = escaepD($conn, $_POST['msd_rate']);
        $msd_prem = escaepD($conn, $_POST['msd_prem']);
        $tech_asp = escaepD($conn, $_POST['tech_asp']);
        $tech_num = escaepD($conn, $_POST['tech_num']);
        $tech_dtas = escaepD($conn, $_POST['tech_dtas']);
        $tech_heoc = escaepD($conn, $_POST['tech_heoc']);
        $tech_bc = escaepD($conn, $_POST['tech_bc']);
        $tech_rate = escaepD($conn, $_POST['tech_rate']);
        $tech_prem = escaepD($conn, $_POST['tech_prem']);
        $smldm_asp = escaepD($conn, $_POST['smldm_asp']);
        $smldm_num = escaepD($conn, $_POST['smldm_num']);
        $smldm_dtas = escaepD($conn, $_POST['smldm_dtas']);
        $smldm_heoc = escaepD($conn, $_POST['smldm_heoc']);
        $smldm_bc = escaepD($conn, $_POST['smldm_bc']);
        $smldm_rate = escaepD($conn, $_POST['smldm_rate']);
        $smldm_prem = escaepD($conn, $_POST['smldm_prem']);
        $artpe_asp = escaepD($conn, $_POST['artpe_asp']);
        $artpe_num = escaepD($conn, $_POST['artpe_num']);
        $artpe_dtas = escaepD($conn, $_POST['artpe_dtas']);
        $artpe_heoc = escaepD($conn, $_POST['artpe_heoc']);
        $artpe_bc = escaepD($conn, $_POST['artpe_bc']);
        $artpe_rate = escaepD($conn, $_POST['artpe_rate']);
        $artpe_prem = escaepD($conn, $_POST['artpe_prem']);
        $other_desc = escaepD($conn, $_POST['other_desc']);
        $other_asp = escaepD($conn, $_POST['other_asp']);
        $other_num = escaepD($conn, $_POST['other_num']);
        $other_dtas = escaepD($conn, $_POST['other_dtas']);
        $other_heoc = escaepD($conn, $_POST['other_heoc']);
        $other_bc = escaepD($conn, $_POST['other_bc']);
        $other_rate = escaepD($conn, $_POST['other_rate']);
        $other_prem = escaepD($conn, $_POST['other_prem']);
        $other1_desc = escaepD($conn, $_POST['other1_desc']);
        $other1_asp = escaepD($conn, $_POST['other1_asp']);
        $other1_num = escaepD($conn, $_POST['other1_num']);
        $other1_dtas = escaepD($conn, $_POST['other1_dtas']);
        $other1_heoc = escaepD($conn, $_POST['other1_heoc']);
        $other1_bc = escaepD($conn, $_POST['other1_bc']);
        $other1_rate = escaepD($conn, $_POST['other1_rate']);
        $other1_prem = escaepD($conn, $_POST['other1_prem']);
        $total_asp = escaepD($conn, $_POST['total_asp']);
        $total_num = escaepD($conn, $_POST['total_num']);
        $total_dtas = escaepD($conn, $_POST['total_dtas']);
        $total_heoc = escaepD($conn, $_POST['total_heoc']);
        $total_bc = escaepD($conn, $_POST['total_bc']);
        $total_rate = escaepD($conn, $_POST['total_rate']);
        $total_prem = escaepD($conn, $_POST['total_prem']);
        $mel1 = escaepD($conn, $_POST['mel1']);
        $asp1 = escaepD($conn, $_POST['asp1']);
        $mel2 = escaepD($conn, $_POST['mel2']);
        $mel3 = escaepD($conn, $_POST['mel3']);
        $mel_bc = escaepD($conn, $_POST['mel_bc']);
        $mel_rate = escaepD($conn, $_POST['mel_rate']);
        $mel_prem = escaepD($conn, $_POST['mel_prem']);
        $mel = escaepD($conn, $_POST['mel']);
        $asp2 = escaepD($conn, $_POST['asp2']);
        $mel1ro = escaepD($conn, $_POST['mel1ro']);
        $mel2ro = escaepD($conn, $_POST['mel2ro']);
        $mel3ro = escaepD($conn, $_POST['mel3ro']);
        $mel_bc2 = escaepD($conn, $_POST['mel_bc2']);
        $mel_rate2 = escaepD($conn, $_POST['mel_rate2']);
        $mel_prem2 = escaepD($conn, $_POST['mel_prem2']);
        $cll_num_ro = escaepD($conn, $_POST['cll_num_ro']);
        $asp3 = escaepD($conn, $_POST['asp3']);
        $cll_dtas_ro = escaepD($conn, $_POST['cll_dtas_ro']);
        $cll_heoc_ro = escaepD($conn, $_POST['cll_heoc_ro']);
        $cll_bc = escaepD($conn, $_POST['cll_bc']);
        $coll_rate = escaepD($conn, $_POST['coll_rate']);
        $coll_prem = escaepD($conn, $_POST['coll_prem']);
        $cll = escaepD($conn, $_POST['cll']);
        $cll_asp = escaepD($conn, $_POST['cll_asp']);
        $cll_num_ro22 = escaepD($conn, $_POST['cll_num_ro22']);
        $cll_dtas_ro22 = escaepD($conn, $_POST['cll_dtas_ro22']);
        $cll_heoc_ro22 = escaepD($conn, $_POST['cll_heoc_ro22']);
        $cll_bc22 = escaepD($conn, $_POST['cll_bc22']);
        $cll_rate22 = escaepD($conn, $_POST['cll_rate22']);
        $cll_prem222 = escaepD($conn, $_POST['cll_prem222']);
        $tfw_dtas_asp = escaepD($conn, $_POST['tfw_dtas_asp']);
        $tfw_num_ro = escaepD($conn, $_POST['tfw_num_ro']);
        $tfw_dtas_ro = escaepD($conn, $_POST['tfw_dtas_ro']);
        $tfw_heoc_ro = escaepD($conn, $_POST['tfw_heoc_ro']);
        $tfw_bc = escaepD($conn, $_POST['tfw_bc']);
        $tfw_rate = escaepD($conn, $_POST['tfw_rate']);
        $tfw_prem = escaepD($conn, $_POST['tfw_prem']);
        $tfw2 = escaepD($conn, $_POST['tfw2']);
        $tfw_num_asp2 = escaepD($conn, $_POST['tfw_num_asp2']);
        $tfw_num_ro2 = escaepD($conn, $_POST['tfw_num_ro2']);
        $tfw_dtas_ro2 = escaepD($conn, $_POST['tfw_dtas_ro2']);
        $tfw_heoc_ro2 = escaepD($conn, $_POST['tfw_heoc_ro2']);
        $tfw_bc2 = escaepD($conn, $_POST['tfw_bc2']);
        $tfw_rate2 = escaepD($conn, $_POST['tfw_rate2']);
        $tfw_prem22 = escaepD($conn, $_POST['tfw_prem22']);
        $gd_dtas_asp = escaepD($conn, $_POST['gd_dtas_asp']);
        $gd_num_ro = escaepD($conn, $_POST['gd_num_ro']);
        $gd_dtas_ro = escaepD($conn, $_POST['gd_dtas_ro']);
        $gd_heoc_ro = escaepD($conn, $_POST['gd_heoc_ro']);
        $gd_bc = escaepD($conn, $_POST['gd_bc']);
        $gd_rate = escaepD($conn, $_POST['gd_rate']);
        $gd_prem = escaepD($conn, $_POST['gd_prem']);
        $dp_dtas_asp = escaepD($conn, $_POST['dp_dtas_asp']);
        $dp_num_ro = escaepD($conn, $_POST['dp_num_ro']);
        $dp_dtas_ro = escaepD($conn, $_POST['dp_dtas_ro']);
        $dp_heoc_ro = escaepD($conn, $_POST['dp_heoc_ro']);
        $dp_bc = escaepD($conn, $_POST['dp_bc']);
        $dep_rate = escaepD($conn, $_POST['dep_rate']);
        $dep_prem = escaepD($conn, $_POST['dep_prem']);
        $ap_num_asp = escaepD($conn, $_POST['ap_num_asp']);
        $ap_num = escaepD($conn, $_POST['ap_num']);
        $ap_dtas = escaepD($conn, $_POST['ap_dtas']);
        $ap_heoc = escaepD($conn, $_POST['ap_heoc']);
        $ap_bc = escaepD($conn, $_POST['ap_bc']);
        $ap_rate = escaepD($conn, $_POST['ap_rate']);
        $ap_prem = escaepD($conn, $_POST['ap_prem']);
        $sub_num = escaepD($conn, $_POST['sub_num']);
        $sub_num2 = escaepD($conn, $_POST['sub_num2']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_wc` WHERE `heo`='".$heo."' AND `insured_wc`='".$insured_wc."' AND `industry_wc`='".$industry_wc."' AND `intermediary_wc`='".$intermediary_wc."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_wc`(`heo`, `date_input_wc`, `underwriter_wc`, `insured_wc`, `industry_wc`, `intermediary_wc`, `selectCurrency_wc`, `clerical_asp`, `clerical_num_wc`, `clerical_dtas`, `clerical_heoc`, `clerical_bc`, `clerical_rate`, `clerical_prem`, `nonclerical_asp`, `nonclerical_num`, `nonclerical_dtas`, `nonclerical_heoc`, `nonclerical_bc`, `nonclerical_rate`, `nonclerical_prem`, `msd_asp`, `msd_num`, `msd_dtas`, `msd_heoc`, `msd_bc`, `msd_rate`, `msd_prem`, `tech_asp`, `tech_num`, `tech_dtas`, `tech_heoc`, `tech_bc`, `tech_rate`, `tech_prem`, `smldm_asp`, `smldm_num`, `smldm_dtas`, `smldm_heoc`, `smldm_bc`, `smldm_rate`, `smldm_prem`, `artpe_asp`, `artpe_num`, `artpe_dtas`, `artpe_heoc`, `artpe_bc`, `artpe_rate`, `artpe_prem`, `other_desc`, `other_asp`, `other_num`, `other_dtas`, `other_heoc`, `other_bc`, `other_rate`, `other_prem`, `other1_desc`, `other1_asp`, `other1_num`, `other1_dtas`, `other1_heoc`, `other1_bc`, `other1_rate`, `other1_prem`, `total_asp`, `total_num`, `total_dtas`, `total_heoc`, `total_bc`, `total_rate`, `total_prem`, `mel1`, `asp1`, `mel2`, `mel3`, `mel_bc`, `mel_rate`, `mel_prem`, `mel`, `asp2`, `mel1ro`, `mel2ro`, `mel3ro`, `mel_bc2`, `mel_rate2`, `mel_prem2`, `cll_num_ro`, `asp3`, `cll_dtas_ro`, `cll_heoc_ro`, `cll_bc`, `coll_rate`, `coll_prem`, `cll`, `cll_asp`, `cll_num_ro22`, `cll_dtas_ro22`, `cll_heoc_ro22`, `cll_bc22`, `cll_rate22`, `cll_prem222`, `tfw_dtas_asp`, `tfw_num_ro`, `tfw_dtas_ro`, `tfw_heoc_ro`, `tfw_bc`, `tfw_rate`, `tfw_prem`, `tfw2`, `tfw_num_asp2`, `tfw_num_ro2`, `tfw_dtas_ro2`, `tfw_heoc_ro2`, `tfw_bc2`, `tfw_rate2`, `tfw_prem22`, `gd_dtas_asp`, `gd_num_ro`, `gd_dtas_ro`, `gd_heoc_ro`, `gd_bc`, `gd_rate`, `gd_prem`, `dp_dtas_asp`, `dp_num_ro`, `dp_dtas_ro`, `dp_heoc_ro`, `dp_bc`, `dep_rate`, `dep_prem`, `ap_num_asp`, `ap_num`, `ap_dtas`, `ap_heoc`, `ap_bc`, `ap_rate`, `ap_prem`, `sub_num`, `sub_num2`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $heo, $date_input_wc, $underwriter_wc, $insured_wc, $industry_wc, $intermediary_wc, $selectCurrency_wc, $clerical_asp, $clerical_num_wc, $clerical_dtas, $clerical_heoc, $clerical_bc, $clerical_rate, $clerical_prem, $nonclerical_asp, $nonclerical_num, $nonclerical_dtas, $nonclerical_heoc, $nonclerical_bc, $nonclerical_rate, $nonclerical_prem, $msd_asp, $msd_num, $msd_dtas, $msd_heoc, $msd_bc, $msd_rate, $msd_prem, $tech_asp, $tech_num, $tech_dtas, $tech_heoc, $tech_bc, $tech_rate, $tech_prem, $smldm_asp, $smldm_num, $smldm_dtas, $smldm_heoc, $smldm_bc, $smldm_rate, $smldm_prem, $artpe_asp, $artpe_num, $artpe_dtas, $artpe_heoc, $artpe_bc, $artpe_rate, $artpe_prem, $other_desc, $other_asp, $other_num, $other_dtas, $other_heoc, $other_bc, $other_rate, $other_prem, $other1_desc, $other1_asp, $other1_num, $other1_dtas, $other1_heoc, $other1_bc, $other1_rate, $other1_prem, $total_asp, $total_num, $total_dtas, $total_heoc, $total_bc, $total_rate, $total_prem, $mel1, $asp1, $mel2, $mel3, $mel_bc, $mel_rate, $mel_prem, $mel, $asp2, $mel1ro, $mel2ro, $mel3ro, $mel_bc2, $mel_rate2, $mel_prem2, $cll_num_ro, $asp3, $cll_dtas_ro, $cll_heoc_ro, $cll_bc, $coll_rate, $coll_prem, $cll, $cll_asp, $cll_num_ro22, $cll_dtas_ro22, $cll_heoc_ro22, $cll_bc22, $cll_rate22, $cll_prem222, $tfw_dtas_asp, $tfw_num_ro, $tfw_dtas_ro, $tfw_heoc_ro, $tfw_bc, $tfw_rate, $tfw_prem, $tfw2, $tfw_num_asp2, $tfw_num_ro2, $tfw_dtas_ro2, $tfw_heoc_ro2, $tfw_bc2, $tfw_rate2, $tfw_prem22, $gd_dtas_asp, $gd_num_ro, $gd_dtas_ro, $gd_heoc_ro, $gd_bc, $gd_rate, $gd_prem, $dp_dtas_asp, $dp_num_ro, $dp_dtas_ro, $dp_heoc_ro, $dp_bc, $dep_rate, $dep_prem, $ap_num_asp, $ap_num, $ap_dtas, $ap_heoc, $ap_bc, $ap_rate, $ap_prem, $sub_num, $sub_num2))) {

                $jk['vSkyNote'] = "Data Added Successfully!";
                $jk['vSkySuc'] = true;

            } else {

                $jk['vSkyNote'] = "Error Adding Data!";
                $jk['vSkySuc'] = false;

            }

        }
        
    }
    
    echo json_encode($jk);
    
}