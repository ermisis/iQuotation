<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT']."/table/dbh.inc.php";

if(isset($_POST['fap_values']) && !empty($_POST['fap_values'])) {
    
    if($_POST['fap_values'] == "insert_fap") {
        
        $date_input_fap = escaepD($conn, $_POST['date_input_fap']);
        $eng_fap = escaepD($conn, $_POST['eng_fap']);
        $underwriter_fap = escaepD($conn, $_POST['underwriter_fap']);
        $insured_fap = escaepD($conn, $_POST['insured_fap']);
        $industry_fap = escaepD($conn, $_POST['industry_fap']);
        $intermediary_fap = escaepD($conn, $_POST['intermediary_fap']);
        $selectCurrency_fap = escaepD($conn, $_POST['selectCurrency_fap']);
        $building_si2 = escaepD($conn, $_POST['building_si2']);
        $building_rate2 = escaepD($conn, $_POST['building_rate2']);
        $building_prem2 = escaepD($conn, $_POST['building_prem2']);
        $fencewall1_si = escaepD($conn, $_POST['fencewall1_si']);
        $fencewall1_rate = escaepD($conn, $_POST['fencewall1_rate']);
        $fencewall1_prem = escaepD($conn, $_POST['fencewall1_prem']);
        $fff_si2 = escaepD($conn, $_POST['fff_si2']);
        $fff_rate2 = escaepD($conn, $_POST['fff_rate2']);
        $fff_prem2 = escaepD($conn, $_POST['fff_prem2']);
        $furnish_si2 = escaepD($conn, $_POST['furnish_si2']);
        $furnish_rate2 = escaepD($conn, $_POST['furnish_rate2']);
        $furnish_prem2 = escaepD($conn, $_POST['furnish_prem2']);
        $eea_si2 = escaepD($conn, $_POST['eea_si2']);
        $eea_rate2 = escaepD($conn, $_POST['eea_rate2']);
        $eea_prem2 = escaepD($conn, $_POST['eea_prem2']);
        $hg_si2 = escaepD($conn, $_POST['hg_si2']);
        $hg_rate2 = escaepD($conn, $_POST['hg_rate2']);
        $hg_prem2 = escaepD($conn, $_POST['hg_prem2']);
        $pe_si = escaepD($conn, $_POST['pe_si']);
        $pe_rate = escaepD($conn, $_POST['pe_rate']);
        $pe_prem = escaepD($conn, $_POST['pe_prem']);
        $cl_si2 = escaepD($conn, $_POST['cl_si2']);
        $cl_rate2 = escaepD($conn, $_POST['cl_rate2']);
        $cl_prem2 = escaepD($conn, $_POST['cl_prem2']);
        $pm_si2 = escaepD($conn, $_POST['pm_si2']);
        $pm_rate2 = escaepD($conn, $_POST['pm_rate2']);
        $pm_prem2 = escaepD($conn, $_POST['pm_prem2']);
        $sit_si2 = escaepD($conn, $_POST['sit_si2']);
        $sit_rate2 = escaepD($conn, $_POST['sit_rate2']);
        $sit_prem2 = escaepD($conn, $_POST['sit_prem2']);
        $oc_si2 = escaepD($conn, $_POST['oc_si2']);
        $oc_rate2 = escaepD($conn, $_POST['oc_rate2']);
        $oc_prem2 = escaepD($conn, $_POST['oc_prem2']);
        $tsibp_si2 = escaepD($conn, $_POST['tsibp_si2']);
        $tsibp_rate2 = escaepD($conn, $_POST['tsibp_rate2']);
        $tsibp_prem2 = escaepD($conn, $_POST['tsibp_prem2']);
        $less_si2 = escaepD($conn, $_POST['less_si2']);
        $less_rate2 = escaepD($conn, $_POST['less_rate2']);
        $less_prem2 = escaepD($conn, $_POST['less_prem2']);
        $fea_dscut_si21 = escaepD($conn, $_POST['fea_dscut_si21']);
        $fea_dscut_rate21 = escaepD($conn, $_POST['fea_dscut_rate21']);
        $fea_dscut_prem21 = escaepD($conn, $_POST['fea_dscut_prem21']);
        $fea_dscut_si22 = escaepD($conn, $_POST['fea_dscut_si22']);
        $fea_dscut_rate22 = escaepD($conn, $_POST['fea_dscut_rate22']);
        $fea_dscut_prem22 = escaepD($conn, $_POST['fea_dscut_prem22']);
        $hd_si2 = escaepD($conn, $_POST['hd_si2']);
        $hd_rate2 = escaepD($conn, $_POST['hd_rate2']);
        $hd_prem2 = escaepD($conn, $_POST['hd_prem2']);
        $hd2_si2 = escaepD($conn, $_POST['hd2_si2']);
        $hd2_rate2 = escaepD($conn, $_POST['hd2_rate2']);
        $hd2_prem2 = escaepD($conn, $_POST['hd2_prem2']);
        $ltad_si2 = escaepD($conn, $_POST['ltad_si2']);
        $ltad_rate2 = escaepD($conn, $_POST['ltad_rate2']);
        $ltad_prem2 = escaepD($conn, $_POST['ltad_prem2']);
        $dp_si2 = escaepD($conn, $_POST['dp_si2']);
        $dp_rate2 = escaepD($conn, $_POST['dp_rate2']);
        $dp_prem2 = escaepD($conn, $_POST['dp_prem2']);
        $ca_limits2 = escaepD($conn, $_POST['ca_limits2']);
        $ca_rate2 = escaepD($conn, $_POST['ca_rate2']);
        $ca_adp2 = escaepD($conn, $_POST['ca_adp2']);
        $tr_limits2 = escaepD($conn, $_POST['tr_limits2']);
        $tr_rate2 = escaepD($conn, $_POST['tr_rate2']);
        $tr_adp2 = escaepD($conn, $_POST['tr_adp2']);
        $rob_limits2 = escaepD($conn, $_POST['rob_limits2']);
        $rob_rate2 = escaepD($conn, $_POST['rob_rate2']);
        $rob_adp2 = escaepD($conn, $_POST['rob_adp2']);
        $pf_limits2 = escaepD($conn, $_POST['pf_limits2']);
        $pf_rate2 = escaepD($conn, $_POST['pf_rate2']);
        $pf_adp2 = escaepD($conn, $_POST['pf_adp2']);
        $rvc_limits2 = escaepD($conn, $_POST['rvc_limits2']);
        $rvc_rate2 = escaepD($conn, $_POST['rvc_rate2']);
        $rvc_adp2 = escaepD($conn, $_POST['rvc_adp2']);
        $pg_limits2 = escaepD($conn, $_POST['pg_limits2']);
        $pg_rate2 = escaepD($conn, $_POST['pg_rate2']);
        $pg_adp2 = escaepD($conn, $_POST['pg_adp2']);
        $arsi_limits2 = escaepD($conn, $_POST['arsi_limits2']);
        $arsi_rate2 = escaepD($conn, $_POST['arsi_rate2']);
        $arsi_adp2 = escaepD($conn, $_POST['arsi_adp2']);
        $sp_limits2 = escaepD($conn, $_POST['sp_limits2']);
        $sp_rate2 = escaepD($conn, $_POST['sp_rate2']);
        $sp_adp2 = escaepD($conn, $_POST['sp_adp2']);
        $other_desc_fap = escaepD($conn, $_POST['other_desc_fap']);
        $other_si_fap = escaepD($conn, $_POST['other_si_fap']);
        $other_rate_fap = escaepD($conn, $_POST['other_rate_fap']);
        $other_prem_fap = escaepD($conn, $_POST['other_prem_fap']);
        $other_desc_fap1 = escaepD($conn, $_POST['other_desc_fap1']);
        $other_si_fap1 = escaepD($conn, $_POST['other_si_fap1']);
        $other_rate_fap1 = escaepD($conn, $_POST['other_rate_fap1']);
        $other_prem_fap1 = escaepD($conn, $_POST['other_prem_fap1']);
        $other_desc_fap2 = escaepD($conn, $_POST['other_desc_fap2']);
        $other_si_fap2 = escaepD($conn, $_POST['other_si_fap2']);
        $other_rate_fap2 = escaepD($conn, $_POST['other_rate_fap2']);
        $other_prem_fap2 = escaepD($conn, $_POST['other_prem_fap2']);
        $other_desc_fap3 = escaepD($conn, $_POST['other_desc_fap3']);
        $other_si_fap3 = escaepD($conn, $_POST['other_si_fap3']);
        $other_rate_fap3 = escaepD($conn, $_POST['other_rate_fap3']);
        $other_prem_fap3 = escaepD($conn, $_POST['other_prem_fap3']);
        $other_desc_fap4 = escaepD($conn, $_POST['other_desc_fap4']);
        $other_si_fap4 = escaepD($conn, $_POST['other_si_fap4']);
        $other_rate_fap4 = escaepD($conn, $_POST['other_rate_fap4']);
        $other_prem_fap4 = escaepD($conn, $_POST['other_prem_fap4']);
        $tap_limits2 = escaepD($conn, $_POST['tap_limits2']);
        $tap_rate2 = escaepD($conn, $_POST['tap_rate2']);
        $tap_adp2 = escaepD($conn, $_POST['tap_adp2']);
        $netp_limits2 = escaepD($conn, $_POST['netp_limits2']);
        $netp_rate2 = escaepD($conn, $_POST['netp_rate2']);
        $netp_adp2 = escaepD($conn, $_POST['netp_adp2']);
        $collapse_limits2 = escaepD($conn, $_POST['collapse_limits2']);
        $collapse_rate2 = escaepD($conn, $_POST['collapse_rate2']);
        $collapse_adp2 = escaepD($conn, $_POST['collapse_adp2']);
        $totp_limits2 = escaepD($conn, $_POST['totp_limits2']);
        $totp_rate2 = escaepD($conn, $_POST['totp_rate2']);
        $totp_adp2 = escaepD($conn, $_POST['totp_adp2']);
        $totp2_limits2 = escaepD($conn, $_POST['totp2_limits2']);
        $totp2_rate2 = escaepD($conn, $_POST['totp2_rate2']);
        $totp2_adp2 = escaepD($conn, $_POST['totp2_adp2']);
        $nicl_limits2 = escaepD($conn, $_POST['nicl_limits2']);
        $nicl_rate2 = escaepD($conn, $_POST['nicl_rate2']);
        $nicl_adp2 = escaepD($conn, $_POST['nicl_adp2']);
        $cf_limits2 = escaepD($conn, $_POST['cf_limits2']);
        $cf_rate2 = escaepD($conn, $_POST['cf_rate2']);
        $cf_adp2 = escaepD($conn, $_POST['cf_adp2']);
        $aa_ap_limits2 = escaepD($conn, $_POST['aa_ap_limits2']);
        $aa_ap_rate2 = escaepD($conn, $_POST['aa_ap_rate2']);
        $aa_ap_adp2 = escaepD($conn, $_POST['aa_ap_adp2']);
        $deduc_aat_limits2 = escaepD($conn, $_POST['deduc_aat_limits2']);
        $subject_aa_limits2 = escaepD($conn, $_POST['subject_aa_limits2']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `combo_eng` WHERE `combo_name`='".$eng_aar."' AND `insured_comb`='".$insured_fap."' AND `industry_comb`='".$industry_fap."' AND `intermediary_comb`='".$intermediary_fap."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `combo_eng`(`date_input`, `combo_name`, `underwriter_comb`, `insured_comb`, `industry_comb`, `intermediary_comb`, `selectCurrency_comb`, `building_si`, `building_rate`, `building_prem`, `fencewall_si`, `fencewall_rate`, `fencewall_prem`, `fff_si`, `fff_rate`, `fff_prem`, `furnish_si`, `furnish_rate`, `furnish_prem`, `eea_si`, `eea_rate`, `eea_prem`, `hg_si`, `hg_rate`, `hg_prem`, `pe_combo_si`, `pe_combo_rate`, `pe_combo_prem`, `cl_si`, `cl_rate`, `cl_prem`, `pm_si`, `pm_rate`, `pm_prem`, `sit_si`, `sit_rate`, `sit_prem`, `oc_si`, `oc_rate`, `oc_prem`, `tsibp_si`, `tsibp_rate`, `tsibp_prem`, `less_si`, `less_rate`, `less_prem`, `fea_dscut_si`, `fea_dscut_rate`, `fea_dscut_prem`, `fea_dscut_si2`, `fea_dscut_rate2`, `fea_dscut_prem2`, `hd_si`, `hd_rate`, `hd_prem`, `hd2_si`, `hd2_rate`, `hd2_prem`, `ltad_si`, `ltad_rate`, `ltad_prem`, `dp_si`, `dp_rate`, `dp_prem`, `ca_limits`, `ca_rate`, `ca_adp`, `tr_limits`, `tr_rate`, `tr_adp`, `rob_limits`, `rob_rate`, `rob_adp`, `pf_limits`, `pf_rate`, `pf_adp`, `rvc_limits`, `rvc_rate`, `rvc_adp`, `pg_limits`, `pg_rate`, `pg_adp`, `arsi_limits`, `arsi_rate`, `arsi_adp`, `sp_limits`, `sp_rate`, `sp_adp`, `combo_desc_eng`, `combo_si_eng`, `combo_rate_eng`, `combo_prem_eng`, `combo_desc_eng1`, `combo_si_eng1`, `combo_rate_eng1`, `combo_prem_eng1`, `combo_desc_eng2`, `combo_si_eng2`, `combo_rate_eng2`, `combo_prem_eng2`, `combo_desc_eng3`, `combo_si_eng3`, `combo_rate_eng3`, `combo_prem_eng3`, `combo_desc_eng4`, `combo_si_eng4`, `combo_rate_eng4`, `combo_prem_eng4`, `tap_limits`, `tap_rate`, `tap_adp`, `netp_limits`, `netp_rate`, `netp_adp`, `collapse_limits`, `collapse_rate`, `collapse_adp`, `totp_limits`, `totp_rate`, `totp_adp`, `totp2_limits`, `totp2_rate`, `totp2_adp`, `nicl_limits`, `nicl_rate`, `nicl_adp`, `cf_limits`, `cf_rate`, `cf_adp`, `aa_ap_limits`, `aa_ap_rate`, `aa_ap_adp`, `deduc_aat_limits`, `subject_aa_limits`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_fap, $eng_fap, $underwriter_fap, $insured_fap, $industry_fap, $intermediary_fap, $selectCurrency_fap, $building_si2, $building_rate2, $building_prem2, $fencewall1_si, $fencewall1_rate, $fencewall1_prem, $fff_si2, $fff_rate2, $fff_prem2, $furnish_si2, $furnish_rate2, $furnish_prem2, $eea_si2, $eea_rate2, $eea_prem2, $hg_si2, $hg_rate2, $hg_prem2, $pe_si, $pe_rate, $pe_prem, $cl_si2, $cl_rate2, $cl_prem2, $pm_si2, $pm_rate2, $pm_prem2, $sit_si2, $sit_rate2, $sit_prem2, $oc_si2, $oc_rate2, $oc_prem2, $tsibp_si2, $tsibp_rate2, $tsibp_prem2, $less_si2, $less_rate2, $less_prem2, $fea_dscut_si21, $fea_dscut_rate21, $fea_dscut_prem21, $fea_dscut_si22, $fea_dscut_rate22, $fea_dscut_prem22, $hd_si2, $hd_rate2, $hd_prem2, $hd2_si2, $hd2_rate2, $hd2_prem2, $ltad_si2, $ltad_rate2, $ltad_prem2, $dp_si2, $dp_rate2, $dp_prem2, $ca_limits2, $ca_rate2, $ca_adp2, $tr_limits2, $tr_rate2, $tr_adp2, $rob_limits2, $rob_rate2, $rob_adp2, $pf_limits2, $pf_rate2, $pf_adp2, $rvc_limits2, $rvc_rate2, $rvc_adp2, $pg_limits2, $pg_rate2, $pg_adp2, $arsi_limits2, $arsi_rate2, $arsi_adp2, $sp_limits2, $sp_rate2, $sp_adp2, $other_desc_fap, $other_si_fap, $other_rate_fap, $other_prem_fap, $other_desc_fap1, $other_si_fap1, $other_rate_fap1, $other_prem_fap1, $other_desc_fap2, $other_si_fap2, $other_rate_fap2, $other_prem_fap2, $other_desc_fap3, $other_si_fap3, $other_rate_fap3, $other_prem_fap3, $other_desc_fap4, $other_si_fap4, $other_rate_fap4, $other_prem_fap4, $tap_limits2, $tap_rate2, $tap_adp2, $netp_limits2, $netp_rate2, $netp_adp2, $collapse_limits2, $collapse_rate2, $collapse_adp2, $totp_limits2, $totp_rate2, $totp_adp2, $totp2_limits2, $totp2_rate2, $totp2_adp2, $nicl_limits2, $nicl_rate2, $nicl_adp2, $cf_limits2, $cf_rate2, $cf_adp2, $aa_ap_limits2, $aa_ap_rate2, $aa_ap_adp2, $deduc_aat_limits2, $subject_aa_limits2))) {

                $jk['vSkyNote'] = "Data Added Successully!";
                $jk['vSkySuc'] = true;

            } else {

                $jk['vSkyNote'] = "Error Adding Data!";
                $jk['vSkySuc'] = false;

            }

        }

    }
    
    echo json_encode($jk);
    
    
}