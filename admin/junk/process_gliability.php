<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['gl_values']) && !empty($_POST['gl_values'])) {
    
    if($_POST['gl_values'] == "insert_gl"){

    $date_input_gl = escaepD($conn, $_POST['date_input_gl']);
    $eng_gl = escaepD($conn, $_POST['eng_gl']);
    $underwriter_gl = escaepD($conn, $_POST['underwriter_gl']);
    $insured_gl = escaepD($conn, $_POST['insured_gl']);
    $industry_gl = escaepD($conn, $_POST['industry_gl']);
    $intermediary_gl = escaepD($conn, $_POST['intermediary_gl']);
    $selectCurrency_gl = escaepD($conn, $_POST['selectCurrency_gl']);
    $pl4gl_si = escaepD($conn, $_POST['pl4gl_si']);
    $pl4gl_rate = escaepD($conn, $_POST['pl4gl_rate']);
    $pl4gl_prem = escaepD($conn, $_POST['pl4gl_prem']);
    $plt_si = escaepD($conn, $_POST['plt_si']);
    $plt_rate = escaepD($conn, $_POST['plt_rate']);
    $plt_prem = escaepD($conn, $_POST['plt_prem']);
    $plll_si = escaepD($conn, $_POST['plll_si']);
    $plll_rate = escaepD($conn, $_POST['plll_rate']);
    $plll_prem = escaepD($conn, $_POST['plll_prem']);
    $all4gl_si = escaepD($conn, $_POST['all4gl_si']);
    $all4gl_rate = escaepD($conn, $_POST['all4gl_rate']);
    $all4gl_prem = escaepD($conn, $_POST['all4gl_prem']);
    $bppl4gl_si = escaepD($conn, $_POST['bppl4gl_si']);
    $bppl4gl_rate = escaepD($conn, $_POST['bppl4gl_rate']);
    $bppl4gl_prem = escaepD($conn, $_POST['bppl4gl_prem']);
    $pl24pl_si = escaepD($conn, $_POST['pl24pl_si']);
    $pl24pl_rate = escaepD($conn, $_POST['pl24pl_rate']);
    $pl24pl_prem = escaepD($conn, $_POST['pl24pl_prem']);
    $tl4pl_si = escaepD($conn, $_POST['tl4pl_si']);
    $tl4pl_rate = escaepD($conn, $_POST['tl4pl_rate']);
    $tl4pl_prem = escaepD($conn, $_POST['tl4pl_prem']);
    $cl4pl_si = escaepD($conn, $_POST['cl4pl_si']);
    $cl4pl_rate = escaepD($conn, $_POST['cl4pl_rate']);
    $cl4pl_prem = escaepD($conn, $_POST['cl4pl_prem']);
    $ws4pl_si = escaepD($conn, $_POST['ws4pl_si']);
    $ws4pl_rate = escaepD($conn, $_POST['ws4pl_rate']);
    $ws4pl_prem = escaepD($conn, $_POST['ws4pl_prem']);
    $defw_si = escaepD($conn, $_POST['defw_si']);
    $defw_rate = escaepD($conn, $_POST['defw_rate']);
    $defw_prem = escaepD($conn, $_POST['defw_prem']);
    $pfl_si = escaepD($conn, $_POST['pfl_si']);
    $pfl_rate = escaepD($conn, $_POST['pfl_rate']);
    $pfl_prem = escaepD($conn, $_POST['pfl_prem']);
    $pig_si = escaepD($conn, $_POST['pig_si']);
    $pig_rate = escaepD($conn, $_POST['pig_rate']);
    $pig_prem = escaepD($conn, $_POST['pig_prem']);
    $rel_si = escaepD($conn, $_POST['rel_si']);
    $rel_rate = escaepD($conn, $_POST['rel_rate']);
    $rel_prem = escaepD($conn, $_POST['rel_prem']);
    $sldc_si = escaepD($conn, $_POST['sldc_si']);
    $sldc_rate = escaepD($conn, $_POST['sldc_rate']);
    $sldc_prem = escaepD($conn, $_POST['sldc_prem']);
    $wad_si = escaepD($conn, $_POST['wad_si']);
    $wad_rate = escaepD($conn, $_POST['wad_rate']);
    $wad_prem = escaepD($conn, $_POST['wad_prem']);
    $other_desc_gl = escaepD($conn, $_POST['other_desc_gl']);
    $other_si_gl = escaepD($conn, $_POST['other_si_gl']);
    $other_rate_gl = escaepD($conn, $_POST['other_rate_gl']);
    $other_prem_gl = escaepD($conn, $_POST['other_prem_gl']);
    $other_desc_gl1 = escaepD($conn, $_POST['other_desc_gl1']);
    $other_si_gl1 = escaepD($conn, $_POST['other_si_gl1']);
    $other_rate_gl1 = escaepD($conn, $_POST['other_rate_gl1']);
    $other_prem_gl1 = escaepD($conn, $_POST['other_prem_gl1']);
    $other_desc_gl2 = escaepD($conn, $_POST['other_desc_gl2']);
    $other_si_gl2 = escaepD($conn, $_POST['other_si_gl2']);
    $other_rate_gl2 = escaepD($conn, $_POST['other_rate_gl2']);
    $other_prem_gl2 = escaepD($conn, $_POST['other_prem_gl2']);
    $other_desc_gl3 = escaepD($conn, $_POST['other_desc_gl3']);
    $other_si_gl3 = escaepD($conn, $_POST['other_si_gl3']);
    $other_rate_gl3 = escaepD($conn, $_POST['other_rate_gl3']);
    $other_prem_gl3 = escaepD($conn, $_POST['other_prem_gl3']);
    $other_desc_gl4 = escaepD($conn, $_POST['other_desc_gl4']);
    $other_si_gl4 = escaepD($conn, $_POST['other_si_gl4']);
    $other_rate_gl4 = escaepD($conn, $_POST['other_rate_gl4']);
    $other_prem_gl4 = escaepD($conn, $_POST['other_prem_gl4']);
    $tapg_si = escaepD($conn, $_POST['tapg_si']);
    $tapg_rate = escaepD($conn, $_POST['tapg_rate']);
    $tapg_prem = escaepD($conn, $_POST['tapg_prem']);
    $si_engo_gl = escaepD($conn, $_POST['si_engo_gl']);
    $rate_engo_gl = escaepD($conn, $_POST['rate_engo_gl']);
    $premium_engo_gl = escaepD($conn, $_POST['premium_engo_gl']);
    $de_si4pl = escaepD($conn, $_POST['de_si4pl']);
    $subject4pl_si = escaepD($conn, $_POST['subject4pl_si']);

    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_for_gl` WHERE `eng_gl`='".$eng_gl."' AND `insured_liability`='".$insured_gl."' AND `industry_liability`='".$industry_gl."' AND `intermediary_liability`='".$intermediary_gl."'"));

    $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_for_gl`(`date_input_gl`, `eng_gl`, `underwriter_liability`, `insured_liability`, `industry_liability`, `intermediary_liability`, `selectCurrency_liability`, `pl4gl_si`, `pl4gl_rate`, `pl4gl_prem`, `plt_si`, `plt_rate`, `plt_prem`, `plll_si`, `plll_rate`, `plll_prem`, `all_si`, `all_rate`, `all_prem`, `bppl_si`, `bppl_rate`, `bppl_prem`, `pl4pl_si`, `pl4pl_rate`, `pl4pl_prem`, `tl_si`, `tl_rate`, `tl_prem`, `cl_si`, `cl_rate`, `cl_prem`, `ws_si`, `ws_rate`, `ws_prem`, `defw_si`, `defw_rate`, `defw_prem`, `pfl_si`, `pfl_rate`, `pfl_prem`, `pi4gl_si`, `pi4gl_rate`, `pi4gl_prem`, `rel_si`, `rel_rate`, `rel_prem`, `sldc_si`, `sldc_rate`, `sldc_prem`, `wad_si`, `wad_rate`, `wad_prem`, `other_desc_gl`, `other_si_gl`, `other_rate_gl`, `other_prem_gl`, `other_desc_gl1`, `other_si_gl1`, `other_rate_gl1`, `other_prem_gl1`, `other_desc_gl2`, `other_si_gl2`, `other_rate_gl2`, `other_prem_gl2`, `other_desc_gl3`, `other_si_gl3`, `other_rate_gl3`, `other_prem_gl3`, `other_desc_gl4`, `other_si_gl4`, `other_rate_gl4`, `other_prem_gl4`, `tap_si`, `tap_rate`, `tap_prem`, `eng_liability_si`, `eng_liability_rate`, `eng_liability_prem`, `de_si`, `subject_si`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_gl, $eng_gl, $underwriter_gl, $insured_gl, $industry_gl, $intermediary_gl, $selectCurrency_gl,  $pl4gl_si, $pl4gl_rate, $pl4gl_prem, $plt_si, $plt_rate, $plt_prem, $plll_si, $plll_rate, $plll_prem, $all4gl_si, $all4gl_rate, $all4gl_prem, $bppl4gl_si, $bppl4gl_rate, $bppl4gl_prem, $pl24pl_si, $pl24pl_rate, $pl24pl_prem, $tl4pl_si, $tl4pl_rate, $tl4pl_prem, $cl4pl_si, $cl4pl_rate, $cl4pl_prem, $ws4pl_si, $ws4pl_rate, $ws4pl_prem, $defw_si, $defw_rate, $defw_prem, $pfl_si, $pfl_rate, $pfl_prem, $pig_si, $pig_rate, $pig_prem, $rel_si, $rel_rate, $rel_prem, $sldc_si, $sldc_rate, $sldc_prem, $wad_si, $wad_rate, $wad_prem, $other_desc_gl, $other_si_gl, $other_rate_gl, $other_prem_gl, $other_desc_gl1, $other_si_gl1, $other_rate_gl1, $other_prem_gl1, $other_desc_gl2, $other_si_gl2, $other_rate_gl2, $other_prem_gl2, $other_desc_gl3, $other_si_gl3, $other_rate_gl3, $other_prem_gl3, $other_desc_gl4, $other_si_gl4, $other_rate_gl4, $other_prem_gl4, $tapg_si, $tapg_rate, $tapg_prem, $si_engo_gl, $rate_engo_gl, $premium_engo_gl, $de_si4pl, $subject4pl_si))) {

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