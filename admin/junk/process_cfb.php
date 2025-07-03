<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['cfb_values']) && !empty($_POST['cfb_values'])) {
    
    if($_POST['cfb_values'] == "insert_cfb"){

    $date_input_cfb = escaepD($conn, $_POST['date_input_cfb']);
    $eng_cfb = escaepD($conn, $_POST['eng_cfb']);
    $underwriter_cfb = escaepD($conn, $_POST['underwriter_cfb']);
    $insured_cfb = escaepD($conn, $_POST['insured_cfb']);
    $industry_cfb = escaepD($conn, $_POST['industry_cfb']);
    $intermediary_cfb = escaepD($conn, $_POST['intermediary_cfb']);
    $selectCurrency_cfb = escaepD($conn, $_POST['selectCurrency_cfb']);
    $building_si4 = escaepD($conn, $_POST['building_si4']);
    $building_rate4 = escaepD($conn, $_POST['building_rate4']);
    $building_prem4 = escaepD($conn, $_POST['building_prem4']);
    $fencewall_si4 = escaepD($conn, $_POST['fencewall_si4']);
    $fencewall_rate4 = escaepD($conn, $_POST['fencewall_rate4']);
    $fencewall_prem4 = escaepD($conn, $_POST['fencewall_prem4']);
    $fff_si4 = escaepD($conn, $_POST['fff_si4']);
    $fff_rate4 = escaepD($conn, $_POST['fff_rate4']);
    $fff_prem4 = escaepD($conn, $_POST['fff_prem4']);
    $furnish_si4 = escaepD($conn, $_POST['furnish_si4']);
    $furnish_rate4 = escaepD($conn, $_POST['furnish_rate4']);
    $furnish_prem4 = escaepD($conn, $_POST['furnish_prem4']);
    $eea_si4 = escaepD($conn, $_POST['eea_si4']);
    $eea_rate4 = escaepD($conn, $_POST['eea_rate4']);
    $eea_prem4 = escaepD($conn, $_POST['eea_prem4']);
    $hg_si4 = escaepD($conn, $_POST['hg_si4']);
    $hg_rate4 = escaepD($conn, $_POST['hg_rate4']);
    $hg_prem4 = escaepD($conn, $_POST['hg_prem4']);
    $pe_si2 = escaepD($conn, $_POST['pe_si2']);
    $pe_rate2 = escaepD($conn, $_POST['pe_rate2']);
    $pe_prem2 = escaepD($conn, $_POST['pe_prem2']);
    $cl_si4 = escaepD($conn, $_POST['cl_si4']);
    $cl_rate4 = escaepD($conn, $_POST['cl_rate4']);
    $cl_prem4 = escaepD($conn, $_POST['cl_prem4']);
    $pm_si4 = escaepD($conn, $_POST['pm_si4']);
    $pm_rate4 = escaepD($conn, $_POST['pm_rate4']);
    $pm_prem4 = escaepD($conn, $_POST['pm_prem4']);
    $sit_si4 = escaepD($conn, $_POST['sit_si4']);
    $sit_rate4 = escaepD($conn, $_POST['sit_rate4']);
    $sit_prem4 = escaepD($conn, $_POST['sit_prem4']);
    $fg_si = escaepD($conn, $_POST['fg_si']);
    $fg_rate = escaepD($conn, $_POST['fg_rate']);
    $fg_prem = escaepD($conn, $_POST['fg_prem']);
    $wip_si = escaepD($conn, $_POST['wip_si']);
    $wip_rate = escaepD($conn, $_POST['wip_rate']);
    $wip_prem = escaepD($conn, $_POST['wip_prem']);
    $rm_si = escaepD($conn, $_POST['rm_si']);
    $rm_rate = escaepD($conn, $_POST['rm_rate']);
    $rm_prem = escaepD($conn, $_POST['rm_prem']);
    $oc_si4 = escaepD($conn, $_POST['oc_si4']);
    $oc_rate4 = escaepD($conn, $_POST['oc_rate4']);
    $oc_prem4 = escaepD($conn, $_POST['oc_prem4']);
    $tsibp_si4 = escaepD($conn, $_POST['tsibp_si4']);
    $tsibp_rate4 = escaepD($conn, $_POST['tsibp_rate4']);
    $tsibp_prem4 = escaepD($conn, $_POST['tsibp_prem4']);
    $less_si4 = escaepD($conn, $_POST['less_si4']);
    $less_rate4 = escaepD($conn, $_POST['less_rate4']);
    $less_prem4 = escaepD($conn, $_POST['less_prem4']);
    $fea_dscut_si4 = escaepD($conn, $_POST['fea_dscut_si4']);
    $fea_dscut_rate4 = escaepD($conn, $_POST['fea_dscut_rate4']);
    $fea_dscut_prem4 = escaepD($conn, $_POST['fea_dscut_prem4']);
    $fea_dscut_si24 = escaepD($conn, $_POST['fea_dscut_si24']);
    $fea_dscut_rate24 = escaepD($conn, $_POST['fea_dscut_rate24']);
    $fea_dscut_prem24 = escaepD($conn, $_POST['fea_dscut_prem24']);
    $hd_si4 = escaepD($conn, $_POST['hd_si4']);
    $hd_rate4 = escaepD($conn, $_POST['hd_rate4']);
    $hd_prem4 = escaepD($conn, $_POST['hd_prem4']);
    $hd24_si = escaepD($conn, $_POST['hd24_si']);
    $hd24_rate = escaepD($conn, $_POST['hd24_rate']);
    $hd24_prem = escaepD($conn, $_POST['hd24_prem']);
    $ltad_si4 = escaepD($conn, $_POST['ltad_si4']);
    $ltad_rate4 = escaepD($conn, $_POST['ltad_rate4']);
    $ltad_prem4 = escaepD($conn, $_POST['ltad_prem4']);
    $dp_si4 = escaepD($conn, $_POST['dp_si4']);
    $dp_rate4 = escaepD($conn, $_POST['dp_rate4']);
    $dp_prem4 = escaepD($conn, $_POST['dp_prem4']);
    $ca_limits4 = escaepD($conn, $_POST['ca_limits4']);
    $ca_rate4 = escaepD($conn, $_POST['ca_rate4']);
    $ca_adp4 = escaepD($conn, $_POST['ca_adp4']);
    $tr_limits4 = escaepD($conn, $_POST['tr_limits4']);
    $tr_rate4 = escaepD($conn, $_POST['tr_rate4']);
    $tr_adp4 = escaepD($conn, $_POST['tr_adp4']);
    $rob_limits4 = escaepD($conn, $_POST['rob_limits4']);
    $rob_rate4 = escaepD($conn, $_POST['rob_rate4']);
    $rob_adp4 = escaepD($conn, $_POST['rob_adp4']);
    $pf_limits4 = escaepD($conn, $_POST['pf_limits4']);
    $pf_rate4 = escaepD($conn, $_POST['pf_rate4']);
    $pf_adp4 = escaepD($conn, $_POST['pf_adp4']);
    $rvc_limits4 = escaepD($conn, $_POST['rvc_limits4']);
    $rvc_rate4 = escaepD($conn, $_POST['rvc_rate4']);
    $rvc_adp4 = escaepD($conn, $_POST['rvc_adp4']);
    $pg_limits4 = escaepD($conn, $_POST['pg_limits4']);
    $pg_rate4 = escaepD($conn, $_POST['pg_rate4']);
    $pg_adp4 = escaepD($conn, $_POST['pg_adp4']);
    $arsi_limits4 = escaepD($conn, $_POST['arsi_limits4']);
    $arsi_rate4 = escaepD($conn, $_POST['arsi_rate4']);
    $arsi_adp4 = escaepD($conn, $_POST['arsi_adp4']);
    $other_desc_cfb = escaepD($conn, $_POST['other_desc_cfb']);
    $other_si_cfb = escaepD($conn, $_POST['other_si_cfb']);
    $other_rate_cfb = escaepD($conn, $_POST['other_rate_cfb']);
    $other_prem_cfb = escaepD($conn, $_POST['other_prem_cfb']);
    $other_desc_cfb1 = escaepD($conn, $_POST['other_desc_cfb1']);
    $other_si_cfb1 = escaepD($conn, $_POST['other_si_cfb1']);
    $other_rate_cfb1 = escaepD($conn, $_POST['other_rate_cfb1']);
    $other_prem_cfb1 = escaepD($conn, $_POST['other_prem_cfb1']);
    $other_desc_cfb2 = escaepD($conn, $_POST['other_desc_cfb2']);
    $other_si_cfb2 = escaepD($conn, $_POST['other_si_cfb2']);
    $other_rate_cfb2 = escaepD($conn, $_POST['other_rate_cfb2']);
    $other_prem_cfb2 = escaepD($conn, $_POST['other_prem_cfb2']);
    $other_desc_cfb3 = escaepD($conn, $_POST['other_desc_cfb3']);
    $other_si_cfb3 = escaepD($conn, $_POST['other_si_cfb3']);
    $other_rate_cfb3 = escaepD($conn, $_POST['other_rate_cfb3']);
    $other_prem_cfb3 = escaepD($conn, $_POST['other_prem_cfb3']);
    $other_desc_cfb4 = escaepD($conn, $_POST['other_desc_cfb4']);
    $other_si_cfb4 = escaepD($conn, $_POST['other_si_cfb4']);
    $other_rate_cfb4 = escaepD($conn, $_POST['other_rate_cfb4']);
    $other_prem_cfb4 = escaepD($conn, $_POST['other_prem_cfb4']);
    $tap_limits4 = escaepD($conn, $_POST['tap_limits4']);
    $tap_rate4 = escaepD($conn, $_POST['tap_rate4']);
    $tap_adp4 = escaepD($conn, $_POST['tap_adp4']);
    $netp_limits4 = escaepD($conn, $_POST['netp_limits4']);
    $netp_rate4 = escaepD($conn, $_POST['netp_rate4']);
    $netp_adp4 = escaepD($conn, $_POST['netp_adp4']);
    $collapse_limits4 = escaepD($conn, $_POST['collapse_limits4']);
    $collapse_rate4 = escaepD($conn, $_POST['collapse_rate4']);
    $collapse_adp4 = escaepD($conn, $_POST['collapse_adp4']);
    $totp_limits44 = escaepD($conn, $_POST['totp_limits44']);
    $totp_rate44 = escaepD($conn, $_POST['totp_rate44']);
    $totp_adp44 = escaepD($conn, $_POST['totp_adp44']);
    $totp2_limits4 = escaepD($conn, $_POST['totp2_limits4']);
    $totp2_rate4 = escaepD($conn, $_POST['totp2_rate4']);
    $totp2_adp4 = escaepD($conn, $_POST['totp2_adp4']);
    $nicl_limits4 = escaepD($conn, $_POST['nicl_limits4']);
    $nicl_rate4 = escaepD($conn, $_POST['nicl_rate4']);
    $nicl_adp4 = escaepD($conn, $_POST['nicl_adp4']);
    $cf_limits4 = escaepD($conn, $_POST['cf_limits4']);
    $cf_rate4 = escaepD($conn, $_POST['cf_rate4']);
    $cf_adp4 = escaepD($conn, $_POST['cf_adp4']);
    $aa_ap_limits4 = escaepD($conn, $_POST['aa_ap_limits4']);
    $aa_ap_rate4 = escaepD($conn, $_POST['aa_ap_rate4']);
    $aa_ap_adp4 = escaepD($conn, $_POST['aa_ap_adp4']);
    $deduc_aat_limits4 = escaepD($conn, $_POST['deduc_aat_limits4']);
    $subject_aa_limits4 = escaepD($conn, $_POST['subject_aa_limits4']);

    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `combo_eng` WHERE `combo_name`='".$eng_cfb."' AND `insured_comb`='".$insured_cfb."' AND `industry_comb`='".$industry_cfb."' AND `intermediary_comb`='".$intermediary_cfb."'"));

    $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `combo_eng`(`date_input`, `combo_name`, `underwriter_comb`, `insured_comb`, `industry_comb`, `intermediary_comb`, `selectCurrency_comb`, `building_si`, `building_rate`, `building_prem`, `fencewall_si`, `fencewall_rate`, `fencewall_prem`, `fff_si`, `fff_rate`, `fff_prem`, `furnish_si`, `furnish_rate`, `furnish_prem`, `eea_si`, `eea_rate`, `eea_prem`, `hg_si`, `hg_rate`, `hg_prem`, `pe_combo_si`, `pe_combo_rate`, `pe_combo_prem`, `cl_si`, `cl_rate`, `cl_prem`, `pm_si`, `pm_rate`, `pm_prem`, `sit_si`, `sit_rate`, `sit_prem`, `fg_si`, `fg_rate`, `fg_prem`, `wip_si`, `wip_rate`, `wip_prem`, `rm_si`, `rm_rate`, `rm_prem`, `oc_si`, `oc_rate`, `oc_prem`, `tsibp_si`, `tsibp_rate`, `tsibp_prem`, `less_si`, `less_rate`, `less_prem`, `fea_dscut_si`, `fea_dscut_rate`, `fea_dscut_prem`, `fea_dscut_si2`, `fea_dscut_rate2`, `fea_dscut_prem2`, `hd_si`, `hd_rate`, `hd_prem`, `hd2_si`, `hd2_rate`, `hd2_prem`, `ltad_si`, `ltad_rate`, `ltad_prem`, `dp_si`, `dp_rate`, `dp_prem`, `ca_limits`, `ca_rate`, `ca_adp`, `tr_limits`, `tr_rate`, `tr_adp`, `rob_limits`, `rob_rate`, `rob_adp`, `pf_limits`, `pf_rate`, `pf_adp`, `rvc_limits`, `rvc_rate`, `rvc_adp`, `pg_limits`, `pg_rate`, `pg_adp`, `arsi_limits`, `arsi_rate`, `arsi_adp`, `combo_desc_eng`, `combo_si_eng`, `combo_rate_eng`, `combo_prem_eng`, `combo_desc_eng1`, `combo_si_eng1`, `combo_rate_eng1`, `combo_prem_eng1`, `combo_desc_eng2`, `combo_si_eng2`, `combo_rate_eng2`, `combo_prem_eng2`, `combo_desc_eng3`, `combo_si_eng3`, `combo_rate_eng3`, `combo_prem_eng3`, `combo_desc_eng4`, `combo_si_eng4`, `combo_rate_eng4`, `combo_prem_eng4`, `tap_limits`, `tap_rate`, `tap_adp`, `netp_limits`, `netp_rate`, `netp_adp`, `collapse_limits`, `collapse_rate`, `collapse_adp`, `totp_limits`, `totp_rate`, `totp_adp`, `totp2_limits`, `totp2_rate`, `totp2_adp`, `nicl_limits`, `nicl_rate`, `nicl_adp`, `cf_limits`, `cf_rate`, `cf_adp`, `aa_ap_limits`, `aa_ap_rate`, `aa_ap_adp`, `deduc_aat_limits`, `subject_aa_limits`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_cfb, $eng_cfb, $underwriter_cfb, $insured_cfb, $industry_cfb, $intermediary_cfb, $selectCurrency_cfb, $building_si4, $building_rate4, $building_prem4, $fencewall_si4, $fencewall_rate4, $fencewall_prem4, $fff_si4, $fff_rate4, $fff_prem4, $furnish_si4, $furnish_rate4, $furnish_prem4, $eea_si4, $eea_rate4, $eea_prem4, $hg_si4, $hg_rate4, $hg_prem4, $pe_si2, $pe_rate2, $pe_prem2, $cl_si4, $cl_rate4, $cl_prem4, $pm_si4, $pm_rate4, $pm_prem4, $sit_si4, $sit_rate4, $sit_prem4, $fg_si, $fg_rate, $fg_prem, $wip_si, $wip_rate, $wip_prem, $rm_si, $rm_rate, $rm_prem, $oc_si4, $oc_rate4, $oc_prem4, $tsibp_si4, $tsibp_rate4, $tsibp_prem4, $less_si4, $less_rate4, $less_prem4, $fea_dscut_si4, $fea_dscut_rate4, $fea_dscut_prem4, $fea_dscut_si24, $fea_dscut_rate24, $fea_dscut_prem24, $hd_si4, $hd_rate4, $hd_prem4, $hd24_si, $hd24_rate, $hd24_prem, $ltad_si4, $ltad_rate4, $ltad_prem4, $dp_si4, $dp_rate4, $dp_prem4, $ca_limits4, $ca_rate4, $ca_adp4, $tr_limits4, $tr_rate4, $tr_adp4, $rob_limits4, $rob_rate4, $rob_adp4, $pf_limits4, $pf_rate4, $pf_adp4, $rvc_limits4, $rvc_rate4, $rvc_adp4, $pg_limits4, $pg_rate4, $pg_adp4, $arsi_limits4, $arsi_rate4, $arsi_adp4, $other_desc_cfb, $other_si_cfb, $other_rate_cfb, $other_prem_cfb, $other_desc_cfb1, $other_si_cfb1, $other_rate_cfb1, $other_prem_cfb1, $other_desc_cfb2, $other_si_cfb2, $other_rate_cfb2, $other_prem_cfb2, $other_desc_cfb3, $other_si_cfb3, $other_rate_cfb3, $other_prem_cfb3, $other_desc_cfb4, $other_si_cfb4, $other_rate_cfb4, $other_prem_cfb4, $tap_limits4, $tap_rate4, $tap_adp4, $netp_limits4, $netp_rate4, $netp_adp4, $collapse_limits4, $collapse_rate4, $collapse_adp4, $totp_limits44, $totp_rate44, $totp_adp44, $totp2_limits4, $totp2_rate4, $totp2_adp4, $nicl_limits4, $nicl_rate4, $nicl_adp4, $cf_limits4, $cf_rate4, $cf_adp4, $aa_ap_limits4, $aa_ap_rate4, $aa_ap_adp4, $deduc_aat_limits4, $subject_aa_limits4))) {

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