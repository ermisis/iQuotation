<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['gpa_values']) && !empty($_POST['gpa_values'])) {
    
    if($_POST['gpa_values'] == "insert_gpa") {

        $date_input_gpa = escaepD($conn, $_POST['date_input_gpa']);
        $underwriter_gpa = escaepD($conn, $_POST['underwriter_gpa']);
        $insured_gpa = escaepD($conn, $_POST['insured_gpa']);
        $industry_gpa = escaepD($conn, $_POST['industry_gpa']);
        $intermediary_gpa = escaepD($conn, $_POST['intermediary_gpa']);
        $selectCurrency_gpa = escaepD($conn, $_POST['selectCurrency_gpa']);
        $num_asc = escaepD($conn, $_POST['num_asc']);
        $clerical_as = escaepD($conn, $_POST['clerical_as']);
        $clerical_num = escaepD($conn, $_POST['clerical_num']);
        $clerical_etas = escaepD($conn, $_POST['clerical_etas']);
        $clerical_cs = escaepD($conn, $_POST['clerical_cs']);
        $nc_as = escaepD($conn, $_POST['nc_as']);
        $nc_num = escaepD($conn, $_POST['nc_num']);
        $nc_etas = escaepD($conn, $_POST['nc_etas']);
        $nc_cs = escaepD($conn, $_POST['nc_cs']);
        $mors_as = escaepD($conn, $_POST['mors_as']);
        $mors_num = escaepD($conn, $_POST['mors_num']);
        $mors_etas = escaepD($conn, $_POST['mors_etas']);
        $mors_cs = escaepD($conn, $_POST['mors_cs']);
        $artisans_as = escaepD($conn, $_POST['artisans_as']);
        $artisans_num = escaepD($conn, $_POST['artisans_num']);
        $artisans_etas = escaepD($conn, $_POST['artisans_etas']);
        $artisans_cs = escaepD($conn, $_POST['artisans_cs']);
        $sormw_as = escaepD($conn, $_POST['sormw_as']);
        $sormw_num = escaepD($conn, $_POST['sormw_num']);
        $sormw_etas = escaepD($conn, $_POST['sormw_etas']);
        $sormw_cs = escaepD($conn, $_POST['sormw_cs']);
        $total_as = escaepD($conn, $_POST['total_as']);
        $total_num = escaepD($conn, $_POST['total_num']);
        $total_etas = escaepD($conn, $_POST['total_etas']);
        $total_cs = escaepD($conn, $_POST['total_cs']);
        $death_as = escaepD($conn, $_POST['death_as']);
        $death_num = escaepD($conn, $_POST['death_num']);
        $death_etas = escaepD($conn, $_POST['death_etas']);
        $death_cs = escaepD($conn, $_POST['death_cs']);
        $pd_terms = escaepD($conn, $_POST['pd_terms']);
        $pd_cs = escaepD($conn, $_POST['pd_cs']);
        $pd_rate = escaepD($conn, $_POST['pd_rate']);
        $pd_prem = escaepD($conn, $_POST['pd_prem']);
        $td_terms = escaepD($conn, $_POST['td_terms']);
        $td_cs = escaepD($conn, $_POST['td_cs']);
        $td_rate = escaepD($conn, $_POST['td_rate']);
        $td_prem = escaepD($conn, $_POST['td_prem']);
        $me_terms = escaepD($conn, $_POST['me_terms']);
        $me_cs = escaepD($conn, $_POST['me_cs']);
        $me_rate = escaepD($conn, $_POST['me_rate']);
        $me_prem = escaepD($conn, $_POST['me_prem']);
        $death4_as = escaepD($conn, $_POST['death4_as']);
        $death4_num = escaepD($conn, $_POST['death4_num']);
        $death4_etas = escaepD($conn, $_POST['death4_etas']);
        $death4_cs = escaepD($conn, $_POST['death4_cs']);
        $pd4_terms = escaepD($conn, $_POST['pd4_terms']);
        $pd4_cs = escaepD($conn, $_POST['pd4_cs']);
        $pd4_rate = escaepD($conn, $_POST['pd4_rate']);
        $pd4_prem = escaepD($conn, $_POST['pd4_prem']);
        $td4_terms = escaepD($conn, $_POST['td4_terms']);
        $td4_cs = escaepD($conn, $_POST['td4_cs']);
        $td4_rate = escaepD($conn, $_POST['td4_rate']);
        $td4_prem = escaepD($conn, $_POST['td4_prem']);
        $me4_terms = escaepD($conn, $_POST['me4_terms']);
        $me4_cs = escaepD($conn, $_POST['me4_cs']);
        $me4_rate = escaepD($conn, $_POST['me4_rate']);
        $me4_prem = escaepD($conn, $_POST['me4_prem']);
        $total_prem_term = escaepD($conn, $_POST['total_prem_term']);
        $total_prem_cs = escaepD($conn, $_POST['total_prem_cs']);
        $total_prem_rate = escaepD($conn, $_POST['total_prem_rate']);
        $total_prems = escaepD($conn, $_POST['total_prems']);
        $gd4gpa_terms = escaepD($conn, $_POST['gd4gpa_terms']);
        $gd4gpa_cs = escaepD($conn, $_POST['gd4gpa_cs']);
        $gd4gpa_rate = escaepD($conn, $_POST['gd4gpa_rate']);
        $gd4gpa_prem = escaepD($conn, $_POST['gd4gpa_prem']);
        $ap4gpa_terms = escaepD($conn, $_POST['ap4gpa_terms']);
        $ap4gpa_cs = escaepD($conn, $_POST['ap4gpa_cs']);
        $ap4gpa_rate = escaepD($conn, $_POST['ap4gpa_rate']);
        $ap4gpa_prem = escaepD($conn, $_POST['ap4gpa_prem']);
        $deduc_terms = escaepD($conn, $_POST['deduc_terms']);
        $sub1_terms = escaepD($conn, $_POST['sub1_terms']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_gpa` WHERE `num_asc`='".$num_asc."' AND `insured_gpa`='".$insured_gpa."' AND `industry_gpa`='".$industry_gpa."' AND `intermediary_gpa`='".$intermediary_gpa."'"));

        $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {
            
            if(mysqli_query($conn, sprintf("INSERT INTO `eng_gpa`(`underwriter_gpa`, `insured_gpa`, `industry_gpa`, `intermediary_gpa`, `selectCurrency_gpa`, `num_asc`, `clerical_as`, `clerical_num`, `clerical_etas`, `clerical_cs`, `nc_as`, `nc_num`, `nc_etas`, `nc_cs`, `mors_as`, `mors_num`, `mors_etas`, `mors_cs`, `artisans_as`, `artisans_num`, `artisans_etas`, `artisans_cs`, `sormw_as`, `sormw_num`, `sormw_etas`, `sormw_cs`, `total_as`, `total_num`, `total_etas`, `total_cs`, `death_as`, `death_num`, `death_etas`, `death_cs`, `pd_terms`, `pd_cs`, `pd_rate`, `pd_prem`, `td_terms`, `td_cs`, `td_rate`, `td_prem`, `me_terms`, `me_cs`, `me_rate`, `me_prem`, `death4_as`, `death4_num`, `death4_etas`, `death4_cs`, `pd4_terms`, `pd4_cs`, `pd4_rate`, `pd4_prem`, `td4_terms`, `td4_cs`, `td4_rate`, `td4_prem`, `me4_terms`, `me4_cs`, `me4_rate`, `me4_prem`, `total_prem_term`, `total_prem_cs`, `total_prem_rate`, `total_prems`, `gd4gpa_terms`, `gd4gpa_cs`, `gd4gpa_rate`, `gd4gpa_prem`, `ap4gpa_terms`, `ap4gpa_cs`, `ap4gpa_rate`, `ap4gpa_prem`, `deduc_terms`, `sub1_terms`, `date_input_gpa`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $underwriter_gpa, $insured_gpa, $industry_gpa, $intermediary_gpa, $selectCurrency_gpa, $num_asc, $clerical_as, $clerical_num, $clerical_etas, $clerical_cs, $nc_as, $nc_num, $nc_etas, $nc_cs, $mors_as, $mors_num, $mors_etas, $mors_cs, $artisans_as, $artisans_num, $artisans_etas, $artisans_cs, $sormw_as, $sormw_num, $sormw_etas, $sormw_cs, $total_as, $total_num, $total_etas, $total_cs, $death_as, $death_num, $death_etas, $death_cs, $pd_terms, $pd_cs, $pd_rate, $pd_prem, $td_terms, $td_cs, $td_rate, $td_prem, $me_terms, $me_cs, $me_rate, $me_prem, $death4_as, $death4_num, $death4_etas, $death4_cs, $pd4_terms, $pd4_cs, $pd4_rate, $pd4_prem, $td4_terms, $td4_cs, $td4_rate, $td4_prem, $me4_terms, $me4_cs, $me4_rate, $me4_prem, $total_prem_term, $total_prem_cs, $total_prem_rate, $total_prems, $gd4gpa_terms, $gd4gpa_cs, $gd4gpa_rate, $gd4gpa_prem, $ap4gpa_terms, $ap4gpa_cs, $ap4gpa_rate, $ap4gpa_prem, $deduc_terms, $sub1_terms, $date_input_gpa))) {

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