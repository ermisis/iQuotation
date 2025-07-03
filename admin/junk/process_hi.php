<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['hi_values']) && !empty($_POST['hi_values'])) {
    
    if($_POST['hi_values'] == "insert_hi"){

        $date_input_hi = escaepD($conn, $_POST['date_input_hi']);
        $eng_hi = escaepD($conn, $_POST['eng_hi']);
        $underwriter_hi = escaepD($conn, $_POST['underwriter_hi']);
        $insured_hi = escaepD($conn, $_POST['insured_hi']);
        $industry_hi = escaepD($conn, $_POST['industry_hi']);
        $intermediary_hi = escaepD($conn, $_POST['intermediary_hi']);
        $selectCurrency_hi = escaepD($conn, $_POST['selectCurrency_hi']);
        $building_si3 = escaepD($conn, $_POST['building_si3']);
        $building_rate3 = escaepD($conn, $_POST['building_rate3']);
        $building_prem3 = escaepD($conn, $_POST['building_prem3']);
        $fencewall2_si = escaepD($conn, $_POST['fencewall2_si']);
        $fencewall2_rate = escaepD($conn, $_POST['fencewall2_rate']);
        $fencewall2_prem = escaepD($conn, $_POST['fencewall2_prem']);
        $hg_si3 = escaepD($conn, $_POST['hg_si3']);
        $hg_rate3 = escaepD($conn, $_POST['hg_rate3']);
        $hg_prem3 = escaepD($conn, $_POST['hg_prem3']);
        $pe_si1 = escaepD($conn, $_POST['pe_si1']);
        $pe_rate1 = escaepD($conn, $_POST['pe_rate1']);
        $pe_prem1 = escaepD($conn, $_POST['pe_prem1']);
        $tsibp_si3 = escaepD($conn, $_POST['tsibp_si3']);
        $tsibp_rate3 = escaepD($conn, $_POST['tsibp_rate3']);
        $tsibp_prem3 = escaepD($conn, $_POST['tsibp_prem3']);
        $less_si3 = escaepD($conn, $_POST['less_si3']);
        $less_rate3 = escaepD($conn, $_POST['less_rate3']);
        $less_prem3 = escaepD($conn, $_POST['less_prem3']);
        $fea_dscut_si3 = escaepD($conn, $_POST['fea_dscut_si3']);
        $fea_dscut_rate3 = escaepD($conn, $_POST['fea_dscut_rate3']);
        $fea_dscut_prem3 = escaepD($conn, $_POST['fea_dscut_prem3']);
        $fea_dscut_si33 = escaepD($conn, $_POST['fea_dscut_si33']);
        $fea_dscut_rate33 = escaepD($conn, $_POST['fea_dscut_rate33']);
        $fea_dscut_prem33 = escaepD($conn, $_POST['fea_dscut_prem33']);
        $hd_si3 = escaepD($conn, $_POST['hd_si3']);
        $hd_rate3 = escaepD($conn, $_POST['hd_rate3']);
        $hd_prem3 = escaepD($conn, $_POST['hd_prem3']);
        $hd3_si = escaepD($conn, $_POST['hd3_si']);
        $hd3_rate = escaepD($conn, $_POST['hd3_rate']);
        $hd3_prem = escaepD($conn, $_POST['hd3_prem']);
        $ltad_si3 = escaepD($conn, $_POST['ltad_si3']);
        $ltad_rate3 = escaepD($conn, $_POST['ltad_rate3']);
        $ltad_prem3 = escaepD($conn, $_POST['ltad_prem3']);
        $dp_si3 = escaepD($conn, $_POST['dp_si3']);
        $dp_rate3 = escaepD($conn, $_POST['dp_rate3']);
        $dp_prem3 = escaepD($conn, $_POST['dp_prem3']);
        $pat_limits = escaepD($conn, $_POST['pat_limits']);
        $pat_rate = escaepD($conn, $_POST['pat_rate']);
        $pat_adp = escaepD($conn, $_POST['pat_adp']);
        $wcds_limits = escaepD($conn, $_POST['wcds_limits']);
        $wcds_rate = escaepD($conn, $_POST['wcds_rate']);
        $wcds_adp = escaepD($conn, $_POST['wcds_adp']);
        $bue_limits = escaepD($conn, $_POST['bue_limits']);
        $bue_rate = escaepD($conn, $_POST['bue_rate']);
        $bue_adp = escaepD($conn, $_POST['bue_adp']);
        $pc_limits = escaepD($conn, $_POST['pc_limits']);
        $pc_rate = escaepD($conn, $_POST['pc_rate']);
        $pc_adp = escaepD($conn, $_POST['pc_adp']);
        $apl_limits = escaepD($conn, $_POST['apl_limits']);
        $apl_rate = escaepD($conn, $_POST['apl_rate']);
        $apl_adp = escaepD($conn, $_POST['apl_adp']);
        $pg_limits3 = escaepD($conn, $_POST['pg_limits3']);
        $pg_rate3 = escaepD($conn, $_POST['pg_rate3']);
        $pg_adp3 = escaepD($conn, $_POST['pg_adp3']);
        $other_desc_hi = escaepD($conn, $_POST['other_desc_hi']);
        $other_si_hi = escaepD($conn, $_POST['other_si_hi']);
        $other_rate_hi = escaepD($conn, $_POST['other_rate_hi']);
        $other_prem_hi = escaepD($conn, $_POST['other_prem_hi']);
        $other_desc_hi1 = escaepD($conn, $_POST['other_desc_hi1']);
        $other_si_hi1 = escaepD($conn, $_POST['other_si_hi1']);
        $other_rate_hi1 = escaepD($conn, $_POST['other_rate_hi1']);
        $other_prem_hi1 = escaepD($conn, $_POST['other_prem_hi1']);
        $other_desc_hi2 = escaepD($conn, $_POST['other_desc_hi2']);
        $other_si_hi2 = escaepD($conn, $_POST['other_si_hi2']);
        $other_rate_hi2 = escaepD($conn, $_POST['other_rate_hi2']);
        $other_prem_hi2 = escaepD($conn, $_POST['other_prem_hi2']);
        $other_desc_hi3 = escaepD($conn, $_POST['other_desc_hi3']);
        $other_si_hi3 = escaepD($conn, $_POST['other_si_hi3']);
        $other_rate_hi3 = escaepD($conn, $_POST['other_rate_hi3']);
        $other_prem_hi3 = escaepD($conn, $_POST['other_prem_hi3']);
        $other_desc_hi4 = escaepD($conn, $_POST['other_desc_hi4']);
        $other_si_hi4 = escaepD($conn, $_POST['other_si_hi4']);
        $other_rate_hi4 = escaepD($conn, $_POST['other_rate_hi4']);
        $other_prem_hi4 = escaepD($conn, $_POST['other_prem_hi4']);
        $tap_limits3 = escaepD($conn, $_POST['tap_limits3']);
        $tap_rate3 = escaepD($conn, $_POST['tap_rate3']);
        $tap_adp3 = escaepD($conn, $_POST['tap_adp3']);
        $netp_limits3 = escaepD($conn, $_POST['netp_limits3']);
        $netp_rate3 = escaepD($conn, $_POST['netp_rate3']);
        $netp_adp3 = escaepD($conn, $_POST['netp_adp3']);
        $collapse_limits3 = escaepD($conn, $_POST['collapse_limits3']);
        $collapse_rate3 = escaepD($conn, $_POST['collapse_rate3']);
        $collapse_adp3 = escaepD($conn, $_POST['collapse_adp3']);
        $totp_limits3 = escaepD($conn, $_POST['totp_limits3']);
        $totp_rate3 = escaepD($conn, $_POST['totp_rate3']);
        $totp_adp3 = escaepD($conn, $_POST['totp_adp3']);
        $totp_limits4 = escaepD($conn, $_POST['totp_limits4']);
        $totp_rate4 = escaepD($conn, $_POST['totp_rate4']);
        $totp_adp4 = escaepD($conn, $_POST['totp_adp4']);
        $nicl_limits3 = escaepD($conn, $_POST['nicl_limits3']);
        $nicl_rate3 = escaepD($conn, $_POST['nicl_rate3']);
        $nicl_adp3 = escaepD($conn, $_POST['nicl_adp3']);
        $cf_limits3 = escaepD($conn, $_POST['cf_limits3']);
        $cf_rate3 = escaepD($conn, $_POST['cf_rate3']);
        $cf_adp3 = escaepD($conn, $_POST['cf_adp3']);
        $aa_ap_limits3 = escaepD($conn, $_POST['aa_ap_limits3']);
        $aa_ap_rate3 = escaepD($conn, $_POST['aa_ap_rate3']);
        $aa_ap_adp3 = escaepD($conn, $_POST['aa_ap_adp3']);
        $deduc_aat_limits3 = escaepD($conn, $_POST['deduc_aat_limits3']);
        $subject_aa_limits3 = escaepD($conn, $_POST['subject_aa_limits3']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `combo_eng` WHERE `combo_name`='".$eng_hi."' AND `insured_comb`='".$insured_hi."' AND `industry_comb`='".$industry_hi."' AND `intermediary_comb`='".$intermediary_hi."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `combo_eng`(`date_input`, `combo_name`, `underwriter_comb`, `insured_comb`, `industry_comb`, `intermediary_comb`, `selectCurrency_comb`, `building_si`, `building_rate`, `building_prem`, `fencewall_si`, `fencewall_rate`, `fencewall_prem`, `hg_si`, `hg_rate`, `hg_prem`, `pe_combo_si`, `pe_combo_rate`, `pe_combo_prem`, `tsibp_si`, `tsibp_rate`, `tsibp_prem`, `less_si`, `less_rate`, `less_prem`, `fea_dscut_si`, `fea_dscut_rate`, `fea_dscut_prem`, `fea_dscut_si2`, `fea_dscut_rate2`, `fea_dscut_prem2`, `hd_si`, `hd_rate`, `hd_prem`, `hd2_si`, `hd2_rate`, `hd2_prem`, `ltad_si`, `ltad_rate`, `ltad_prem`, `dp_si`, `dp_rate`, `dp_prem`, `pat_limits`, `pat_rate`, `pat_adp`, `wcds_limits`, `wcds_rate`, `wcds_adp`, `bue_limits`, `bue_rate`, `bue_adp`, `pc_limits`, `pc_rate`, `pc_adp`, `apl_limits`, `apl_rate`, `apl_adp`, `pg_limits`, `pg_rate`, `pg_adp`, `combo_desc_eng`, `combo_si_eng`, `combo_rate_eng`, `combo_prem_eng`, `combo_desc_eng1`, `combo_si_eng1`, `combo_rate_eng1`, `combo_prem_eng1`, `combo_desc_eng2`, `combo_si_eng2`, `combo_rate_eng2`, `combo_prem_eng2`, `combo_desc_eng3`, `combo_si_eng3`, `combo_rate_eng3`, `combo_prem_eng3`, `combo_desc_eng4`, `combo_si_eng4`, `combo_rate_eng4`, `combo_prem_eng4`, `tap_limits`, `tap_rate`, `tap_adp`, `netp_limits`, `netp_rate`, `netp_adp`, `collapse_limits`, `collapse_rate`, `collapse_adp`, `totp_limits`, `totp_rate`, `totp_adp`, `totp2_limits`, `totp2_rate`, `totp2_adp`, `nicl_limits`, `nicl_rate`, `nicl_adp`, `cf_limits`, `cf_rate`, `cf_adp`, `aa_ap_limits`, `aa_ap_rate`, `aa_ap_adp`, `deduc_aat_limits`, `subject_aa_limits`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_hi, $eng_hi, $underwriter_hi, $insured_hi, $industry_hi, $intermediary_hi, $selectCurrency_hi, $building_si3, $building_rate3, $building_prem3, $fencewall2_si, $fencewall2_rate, $fencewall2_prem, $hg_si3, $hg_rate3, $hg_prem3, $pe_si1, $pe_rate1, $pe_prem1, $tsibp_si3, $tsibp_rate3, $tsibp_prem3, $less_si3, $less_rate3, $less_prem3, $fea_dscut_si3, $fea_dscut_rate3, $fea_dscut_prem3, $fea_dscut_si33, $fea_dscut_rate33, $fea_dscut_prem33, $hd_si3, $hd_rate3, $hd_prem3, $hd3_si, $hd3_rate, $hd3_prem, $ltad_si3, $ltad_rate3, $ltad_prem3, $dp_si3, $dp_rate3, $dp_prem3, $pat_limits, $pat_rate, $pat_adp, $wcds_limits, $wcds_rate, $wcds_adp, $bue_limits, $bue_rate, $bue_adp, $pc_limits, $pc_rate, $pc_adp, $apl_limits, $apl_rate, $apl_adp, $pg_limits3, $pg_rate3, $pg_adp3, $other_desc_hi, $other_si_hi, $other_rate_hi, $other_prem_hi, $other_desc_hi1, $other_si_hi1, $other_rate_hi1, $other_prem_hi1, $other_desc_hi2, $other_si_hi2, $other_rate_hi2, $other_prem_hi2, $other_desc_hi3, $other_si_hi3, $other_rate_hi3, $other_prem_hi3, $other_desc_hi4, $other_si_hi4, $other_rate_hi4, $other_prem_hi4, $tap_limits3, $tap_rate3, $tap_adp3, $netp_limits3, $netp_rate3, $netp_adp3, $collapse_limits3, $collapse_rate3, $collapse_adp3, $totp_limits3, $totp_rate3, $totp_adp3, $totp_limits4, $totp_rate4, $totp_adp4, $nicl_limits3, $nicl_rate3, $nicl_adp3, $cf_limits3, $cf_rate3, $cf_adp3, $aa_ap_limits3, $aa_ap_rate3, $aa_ap_adp3, $deduc_aat_limits3, $subject_aa_limits3))) {
            
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