<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['aar_values']) && !empty($_POST['aar_values'])) {
    
    if($_POST['aar_values'] == "insert_aar"){
        
        $date_input_aar = escaepD($conn, $_POST['date_input_aar']);
        $eng_aar = escaepD($conn, $_POST['eng_aar']);
        $underwriter_aar = escaepD($conn, $_POST['underwriter_aar']);
        $insured_aar = escaepD($conn, $_POST['insured_aar']);
        $industry_aar = escaepD($conn, $_POST['industry_aar']);
        $intermediary_aar = escaepD($conn, $_POST['intermediary_aar']);
        $selectCurrency_aar = escaepD($conn, $_POST['selectCurrency_aar']);
        $building_si = escaepD($conn, $_POST['building_si']);
        $building_rate = escaepD($conn, $_POST['building_rate']);
        $building_prem = escaepD($conn, $_POST['building_prem']);
        $fencewall_si = escaepD($conn, $_POST['fencewall_si']);
        $fencewall_rate = escaepD($conn, $_POST['fencewall_rate']);
        $fencewall_prem = escaepD($conn, $_POST['fencewall_prem']);
        $finshed_goods_si = escaepD($conn, $_POST['finshed_goods_si']);
        $finshed_goods_rate = escaepD($conn, $_POST['finshed_goods_rate']);
        $finshed_goods_prem = escaepD($conn, $_POST['finshed_goods_prem']);
        $wrknprogres_si = escaepD($conn, $_POST['wrknprogres_si']);
        $wrknprogres_rate = escaepD($conn, $_POST['wrknprogres_rate']);
        $wrknprogres_prem = escaepD($conn, $_POST['wrknprogres_prem']);
        $fff_si = escaepD($conn, $_POST['fff_si']);
        $fff_rate = escaepD($conn, $_POST['fff_rate']);
        $fff_prem = escaepD($conn, $_POST['fff_prem']);
        $furnish_si = escaepD($conn, $_POST['furnish_si']);
        $furnish_rate = escaepD($conn, $_POST['furnish_rate']);
        $furnish_prem = escaepD($conn, $_POST['furnish_prem']);
        $eea_si = escaepD($conn, $_POST['eea_si']);
        $eea_rate = escaepD($conn, $_POST['eea_rate']);
        $eea_prem = escaepD($conn, $_POST['eea_prem']);
        $hg_si = escaepD($conn, $_POST['hg_si']);
        $hg_rate = escaepD($conn, $_POST['hg_rate']);
        $hg_prem = escaepD($conn, $_POST['hg_prem']);
        $cl_si = escaepD($conn, $_POST['cl_si']);
        $cl_rate = escaepD($conn, $_POST['cl_rate']);
        $cl_prem = escaepD($conn, $_POST['cl_prem']);
        $pm_si = escaepD($conn, $_POST['pm_si']);
        $pm_rate = escaepD($conn, $_POST['pm_rate']);
        $pm_prem = escaepD($conn, $_POST['pm_prem']);
        $sit_si = escaepD($conn, $_POST['sit_si']);
        $sit_rate = escaepD($conn, $_POST['sit_rate']);
        $sit_prem = escaepD($conn, $_POST['sit_prem']);
        $oc_si = escaepD($conn, $_POST['oc_si']);
        $oc_rate = escaepD($conn, $_POST['oc_rate']);
        $oc_prem = escaepD($conn, $_POST['oc_prem']);
        $tsibp_si = escaepD($conn, $_POST['tsibp_si']);
        $tsibp_rate = escaepD($conn, $_POST['tsibp_rate']);
        $tsibp_prem = escaepD($conn, $_POST['tsibp_prem']);
        $less_si = escaepD($conn, $_POST['less_si']);
        $less_rate = escaepD($conn, $_POST['less_rate']);
        $less_prem = escaepD($conn, $_POST['less_prem']);
        $fea_dscut_si = escaepD($conn, $_POST['fea_dscut_si']);
        $fea_dscut_rate = escaepD($conn, $_POST['fea_dscut_rate']);
        $fea_dscut_prem = escaepD($conn, $_POST['fea_dscut_prem']);
        $fea_dscut_si2 = escaepD($conn, $_POST['fea_dscut_si2']);
        $fea_dscut_rate2 = escaepD($conn, $_POST['fea_dscut_rate2']);
        $fea_dscut_prem2 = escaepD($conn, $_POST['fea_dscut_prem2']);
        $hd_si = escaepD($conn, $_POST['hd_si']);
        $hd_rate = escaepD($conn, $_POST['hd_rate']);
        $hd_prem = escaepD($conn, $_POST['hd_prem']);
        $hd2_si = escaepD($conn, $_POST['hd2_si']);
        $hd2_rate = escaepD($conn, $_POST['hd2_rate']);
        $hd2_prem = escaepD($conn, $_POST['hd2_prem']);
        $ltad_si = escaepD($conn, $_POST['ltad_si']);
        $ltad_rate = escaepD($conn, $_POST['ltad_rate']);
        $ltad_prem = escaepD($conn, $_POST['ltad_prem']);
        $dp_si = escaepD($conn, $_POST['dp_si']);
        $dp_rate = escaepD($conn, $_POST['dp_rate']);
        $dp_prem = escaepD($conn, $_POST['dp_prem']);
        $special_disc_desc = escaepD($conn, $_POST['special_disc_desc']);
        $special_disc_si = escaepD($conn, $_POST['special_disc_si']);
        $special_disc_rate = escaepD($conn, $_POST['special_disc_rate']);
        $special_disc_prem = escaepD($conn, $_POST['special_disc_prem']);
        $ca_limits = escaepD($conn, $_POST['ca_limits']);
        $ca_rate = escaepD($conn, $_POST['ca_rate']);
        $ca_adp = escaepD($conn, $_POST['ca_adp']);
        $tr_limits = escaepD($conn, $_POST['tr_limits']);
        $tr_rate = escaepD($conn, $_POST['tr_rate']);
        $tr_adp = escaepD($conn, $_POST['tr_adp']);
        $rob_limits = escaepD($conn, $_POST['rob_limits']);
        $rob_rate = escaepD($conn, $_POST['rob_rate']);
        $rob_adp = escaepD($conn, $_POST['rob_adp']);
        $pf_limits = escaepD($conn, $_POST['pf_limits']);
        $pf_rate = escaepD($conn, $_POST['pf_rate']);
        $pf_adp = escaepD($conn, $_POST['pf_adp']);
        $rvc_limits = escaepD($conn, $_POST['rvc_limits']);
        $rvc_rate = escaepD($conn, $_POST['rvc_rate']);
        $rvc_adp = escaepD($conn, $_POST['rvc_adp']);
        $pg_limits = escaepD($conn, $_POST['pg_limits']);
        $pg_rate = escaepD($conn, $_POST['pg_rate']);
        $pg_adp = escaepD($conn, $_POST['pg_adp']);
        $arsi_limits = escaepD($conn, $_POST['arsi_limits']);
        $arsi_rate = escaepD($conn, $_POST['arsi_rate']);
        $arsi_adp = escaepD($conn, $_POST['arsi_adp']);
        $sp_limits = escaepD($conn, $_POST['sp_limits']);
        $sp_rate = escaepD($conn, $_POST['sp_rate']);
        $sp_adp = escaepD($conn, $_POST['sp_adp']);
        $other_desc_aar = escaepD($conn, $_POST['other_desc_aar']);
        $other_si_aar = escaepD($conn, $_POST['other_si_aar']);
        $other_rate_aar = escaepD($conn, $_POST['other_rate_aar']);
        $other_prem_aar = escaepD($conn, $_POST['other_prem_aar']);
        $other_desc_aar1 = escaepD($conn, $_POST['other_desc_aar1']);
        $other_si_aar1 = escaepD($conn, $_POST['other_si_aar1']);
        $other_rate_aar1 = escaepD($conn, $_POST['other_rate_aar1']);
        $other_prem_aar1 = escaepD($conn, $_POST['other_prem_aar1']);
        $other_desc_aar2 = escaepD($conn, $_POST['other_desc_aar2']);
        $other_si_aar2 = escaepD($conn, $_POST['other_si_aar2']);
        $other_rate_aar2 = escaepD($conn, $_POST['other_rate_aar2']);
        $other_prem_aar2 = escaepD($conn, $_POST['other_prem_aar2']);
        $other_desc_aar3 = escaepD($conn, $_POST['other_desc_aar3']);
        $other_si_aar3 = escaepD($conn, $_POST['other_si_aar3']);
        $other_rate_aar3 = escaepD($conn, $_POST['other_rate_aar3']);
        $other_prem_aar3 = escaepD($conn, $_POST['other_prem_aar3']);
        $other_desc_aar4 = escaepD($conn, $_POST['other_desc_aar4']);
        $other_si_aar4 = escaepD($conn, $_POST['other_si_aar4']);
        $other_rate_aar4 = escaepD($conn, $_POST['other_rate_aar4']);
        $other_prem_aar4 = escaepD($conn, $_POST['other_prem_aar4']);
        $tap_limits = escaepD($conn, $_POST['tap_limits']);
        $tap_rate = escaepD($conn, $_POST['tap_rate']);
        $tap_adp = escaepD($conn, $_POST['tap_adp']);
        $netp_limits = escaepD($conn, $_POST['netp_limits']);
        $netp_rate = escaepD($conn, $_POST['netp_rate']);
        $netp_adp = escaepD($conn, $_POST['netp_adp']);
        $collapse_limits = escaepD($conn, $_POST['collapse_limits']);
        $collapse_rate = escaepD($conn, $_POST['collapse_rate']);
        $collapse_adp = escaepD($conn, $_POST['collapse_adp']);
        $totp_limits = escaepD($conn, $_POST['totp_limits']);
        $totp_rate = escaepD($conn, $_POST['totp_rate']);
        $totp_adp = escaepD($conn, $_POST['totp_adp']);
        $totp2_limits = escaepD($conn, $_POST['totp2_limits']);
        $totp2_rate = escaepD($conn, $_POST['totp2_rate']);
        $totp2_adp = escaepD($conn, $_POST['totp2_adp']);
        $nicl_limits = escaepD($conn, $_POST['nicl_limits']);
        $nicl_rate = escaepD($conn, $_POST['nicl_rate']);
        $nicl_adp = escaepD($conn, $_POST['nicl_adp']);
        $cf_limits = escaepD($conn, $_POST['cf_limits']);
        $cf_rate = escaepD($conn, $_POST['cf_rate']);
        $cf_adp = escaepD($conn, $_POST['cf_adp']);
        $aa_ap_limits = escaepD($conn, $_POST['aa_ap_limits']);
        $aa_ap_rate = escaepD($conn, $_POST['aa_ap_rate']);
        $aa_ap_adp = escaepD($conn, $_POST['aa_ap_adp']);
        $deduc_aat_limits = escaepD($conn, $_POST['deduc_aat_limits']);
        $subject_aa_limits = escaepD($conn, $_POST['subject_aa_limits']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `combo_eng` WHERE `combo_name`='".$eng_aar."' AND `insured_comb`='".$insured_aar."' AND `industry_comb`='".$industry_aar."' AND `intermediary_comb`='".$intermediary_aar."'"));

        $numRows = mysqli_num_rows($sqlChkn);

            if ($numRows > 0) {

                $jk['vSkyNote'] = "Data Already Exists!";
                $jk['vSkySuc'] = true;

            } else {

                if(mysqli_query($conn, sprintf("INSERT INTO `combo_eng`(`date_input`, `combo_name`, `underwriter_comb`, `insured_comb`, `industry_comb`, `intermediary_comb`, `selectCurrency_comb`, `building_si`, `building_rate`, `building_prem`, `fencewall_si`, `fencewall_rate`, `fencewall_prem`, `finshed_goods_si`, `finshed_goods_rate`, `finshed_goods_prem`, `wrknprogres_si`, `wrknprogres_rate`, `wrknprogres_prem`, `fff_si`, `fff_rate`, `fff_prem`, `furnish_si`, `furnish_rate`, `furnish_prem`, `eea_si`, `eea_rate`, `eea_prem`, `hg_si`, `hg_rate`, `hg_prem`, `cl_si`, `cl_rate`, `cl_prem`, `pm_si`, `pm_rate`, `pm_prem`, `sit_si`, `sit_rate`, `sit_prem`, `oc_si`, `oc_rate`, `oc_prem`, `tsibp_si`, `tsibp_rate`, `tsibp_prem`, `less_si`, `less_rate`, `less_prem`, `fea_dscut_si`, `fea_dscut_rate`, `fea_dscut_prem`, `fea_dscut_si2`, `fea_dscut_rate2`, `fea_dscut_prem2`, `hd_si`, `hd_rate`, `hd_prem`, `hd2_si`, `hd2_rate`, `hd2_prem`, `ltad_si`, `ltad_rate`, `ltad_prem`, `dp_si`, `dp_rate`, `dp_prem`, `special_disc_desc`, `special_disc_si`, `special_disc_rate`, `special_disc_prem`, `ca_limits`, `ca_rate`, `ca_adp`, `tr_limits`, `tr_rate`, `tr_adp`, `rob_limits`, `rob_rate`, `rob_adp`, `pf_limits`, `pf_rate`, `pf_adp`, `rvc_limits`, `rvc_rate`, `rvc_adp`, `pg_limits`, `pg_rate`, `pg_adp`, `arsi_limits`, `arsi_rate`, `arsi_adp`, `sp_limits`, `sp_rate`, `sp_adp`, `combo_desc_eng`, `combo_si_eng`, `combo_rate_eng`, `combo_prem_eng`, `combo_desc_eng1`, `combo_si_eng1`, `combo_rate_eng1`, `combo_prem_eng1`, `combo_desc_eng2`, `combo_si_eng2`, `combo_rate_eng2`, `combo_prem_eng2`, `combo_desc_eng3`, `combo_si_eng3`, `combo_rate_eng3`, `combo_prem_eng3`, `combo_desc_eng4`, `combo_si_eng4`, `combo_rate_eng4`, `combo_prem_eng4`, `tap_limits`, `tap_rate`, `tap_adp`, `netp_limits`, `netp_rate`, `netp_adp`, `collapse_limits`, `collapse_rate`, `collapse_adp`, `totp_limits`, `totp_rate`, `totp_adp`, `totp2_limits`, `totp2_rate`, `totp2_adp`, `nicl_limits`, `nicl_rate`, `nicl_adp`, `cf_limits`, `cf_rate`, `cf_adp`, `aa_ap_limits`, `aa_ap_rate`, `aa_ap_adp`, `deduc_aat_limits`, `subject_aa_limits`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_aar, $eng_aar, $underwriter_aar, $insured_aar, $industry_aar, $intermediary_aar, $selectCurrency_aar, $building_si, $building_rate, $building_prem, $fencewall_si, $fencewall_rate, $fencewall_prem, $finshed_goods_si, $finshed_goods_rate, $finshed_goods_prem, $wrknprogres_si, $wrknprogres_rate, $wrknprogres_prem, $fff_si, $fff_rate, $fff_prem, $furnish_si, $furnish_rate, $furnish_prem, $eea_si, $eea_rate, $eea_prem, $hg_si, $hg_rate, $hg_prem, $cl_si, $cl_rate, $cl_prem, $pm_si, $pm_rate, $pm_prem, $sit_si, $sit_rate, $sit_prem, $oc_si, $oc_rate, $oc_prem, $tsibp_si, $tsibp_rate, $tsibp_prem, $less_si, $less_rate, $less_prem, $fea_dscut_si, $fea_dscut_rate, $fea_dscut_prem, $fea_dscut_si2, $fea_dscut_rate2, $fea_dscut_prem2, $hd_si, $hd_rate, $hd_prem, $hd2_si, $hd2_rate, $hd2_prem, $ltad_si, $ltad_rate, $ltad_prem, $dp_si, $dp_rate, $dp_prem, $special_disc_desc, $special_disc_si, $special_disc_rate, $special_disc_prem, $ca_limits, $ca_rate, $ca_adp, $tr_limits, $tr_rate, $tr_adp, $rob_limits, $rob_rate, $rob_adp, $pf_limits, $pf_rate, $pf_adp, $rvc_limits, $rvc_rate, $rvc_adp, $pg_limits, $pg_rate, $pg_adp, $arsi_limits, $arsi_rate, $arsi_adp, $sp_limits, $sp_rate, $sp_adp, $other_desc_aar, $other_si_aar, $other_rate_aar, $other_prem_aar, $other_desc_aar1, $other_si_aar1, $other_rate_aar1, $other_prem_aar1, $other_desc_aar2, $other_si_aar2, $other_rate_aar2, $other_prem_aar2, $other_desc_aar3, $other_si_aar3, $other_rate_aar3, $other_prem_aar3, $other_desc_aar4, $other_si_aar4, $other_rate_aar4, $other_prem_aar4, $tap_limits, $tap_rate, $tap_adp, $netp_limits, $netp_rate, $netp_adp, $collapse_limits, $collapse_rate, $collapse_adp, $totp_limits, $totp_rate, $totp_adp, $totp2_limits, $totp2_rate, $totp2_adp, $nicl_limits, $nicl_rate, $nicl_adp, $cf_limits, $cf_rate, $cf_adp, $aa_ap_limits, $aa_ap_rate, $aa_ap_adp, $deduc_aat_limits, $subject_aa_limits))) {
            
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