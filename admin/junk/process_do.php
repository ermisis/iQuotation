<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['do_values']) && !empty($_POST['do_values'])) {
    
    if($_POST['do_values'] == "insert_do") {
        
    $date_input_do = escaepD($conn, $_POST['date_input_do']);
    $eng_do = escaepD($conn, $_POST['eng_do']);
    $underwriter_do = escaepD($conn, $_POST['underwriter_do']);
    $insured_do = escaepD($conn, $_POST['insured_do']);
    $industry_do = escaepD($conn, $_POST['industry_do']);
    $intermediary_do = escaepD($conn, $_POST['intermediary_do']);
    $selectCurrency_do = escaepD($conn, $_POST['selectCurrency_do']);
    $adoc_si = escaepD($conn, $_POST['adoc_si']);
    $adoc_rate = escaepD($conn, $_POST['adoc_rate']);
    $adoc_prem = escaepD($conn, $_POST['adoc_prem']);
    $lpd_si = escaepD($conn, $_POST['lpd_si']);
    $lpd_rate = escaepD($conn, $_POST['lpd_rate']);
    $lpd_prem = escaepD($conn, $_POST['lpd_prem']);
    $peri_si = escaepD($conn, $_POST['peri_si']);
    $peri_rate = escaepD($conn, $_POST['peri_rate']);
    $peri_prem = escaepD($conn, $_POST['peri_prem']);
    $all3_si = escaepD($conn, $_POST['all3_si']);
    $all3_rate = escaepD($conn, $_POST['all3_rate']);
    $all3_prem = escaepD($conn, $_POST['all3_prem']);
    $other_desc_do = escaepD($conn, $_POST['other_desc_do']);
    $other_si_do = escaepD($conn, $_POST['other_si_do']);
    $other_rate_do = escaepD($conn, $_POST['other_rate_do']);
    $other_prem_do = escaepD($conn, $_POST['other_prem_do']);
    $other_desc_do1 = escaepD($conn, $_POST['other_desc_do1']);
    $other_si_do1 = escaepD($conn, $_POST['other_si_do1']);
    $other_rate_do1 = escaepD($conn, $_POST['other_rate_do1']);
    $other_prem_do1 = escaepD($conn, $_POST['other_prem_do1']);
    $other_desc_do2 = escaepD($conn, $_POST['other_desc_do2']);
    $other_si_do2 = escaepD($conn, $_POST['other_si_do2']);
    $other_rate_do2 = escaepD($conn, $_POST['other_rate_do2']);
    $other_prem_do2 = escaepD($conn, $_POST['other_prem_do2']);
    $other_desc_do3 = escaepD($conn, $_POST['other_desc_do3']);
    $other_si_do3 = escaepD($conn, $_POST['other_si_do3']);
    $other_rate_do3 = escaepD($conn, $_POST['other_rate_do3']);
    $other_prem_do3 = escaepD($conn, $_POST['other_prem_do3']);
    $other_desc_do4 = escaepD($conn, $_POST['other_desc_do4']);
    $other_si_do4 = escaepD($conn, $_POST['other_si_do4']);
    $other_rate_do4 = escaepD($conn, $_POST['other_rate_do4']);
    $other_prem_do4 = escaepD($conn, $_POST['other_prem_do4']);
    $ap4do_si = escaepD($conn, $_POST['ap4do_si']);
    $ap4do_rate = escaepD($conn, $_POST['ap4do_rate']);
    $ap4do_prem = escaepD($conn, $_POST['ap4do_prem']);
    $de4do_si = escaepD($conn, $_POST['de4do_si']);
    $sub4do_si = escaepD($conn, $_POST['sub4do_si']);

    $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_do_liability` WHERE `eng_dol`='".$eng_do."' AND `insured_do`='".$insured_do."' AND `industry_do`='".$industry_do."' AND `intermediary_do`='".$intermediary_do."'"));

    $numRows = mysqli_num_rows($sqlChkn);

        if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

        } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_do_liability`(`date_input`, `eng_dol`, `underwriter_do`, `insured_do`, `industry_do`, `intermediary_do`, `selectCurrency_do`, `adoc_si`, `adoc_rate`, `adoc_prem`, `lpd_si`, `lpd_rate`, `lpd_prem`, `peri_si`, `peri_rate`, `peri_prem`, `all3_si`, `all3_rate`, `all3_prem`, `other_desc_do`, `other_si_do`, `other_rate_do`, `other_prem_do`, `other_desc_do1`, `other_si_do1`, `other_rate_do1`, `other_prem_do1`, `other_desc_do2`, `other_si_do2`, `other_rate_do2`, `other_prem_do2`, `other_desc_do3`, `other_si_do3`, `other_rate_do3`, `other_prem_do3`, `other_desc_do4`, `other_si_do4`, `other_rate_do4`, `other_prem_do4`, `ap4do_si`, `ap4do_rate`, `ap4do_prem`, `de4do_si`, `sub4do_si`) VALUES ('%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s','%s')", $date_input_do, $eng_do, $underwriter_do, $insured_do, $industry_do, $intermediary_do, $selectCurrency_do, $adoc_si, $adoc_rate, $adoc_prem, $lpd_si, $lpd_rate, $lpd_prem, $peri_si, $peri_rate, $peri_prem, $all3_si, $all3_rate, $all3_prem, $other_desc_do, $other_si_do, $other_rate_do, $other_prem_do, $other_desc_do1, $other_si_do1, $other_rate_do1, $other_prem_do1, $other_desc_do2, $other_si_do2, $other_rate_do2, $other_prem_do2, $other_desc_do3, $other_si_do3, $other_rate_do3, $other_prem_do3, $other_desc_do4, $other_si_do4, $other_rate_do4, $other_prem_do4, $ap4do_si, $ap4do_rate, $ap4do_prem, $de4do_si, $sub4do_si))) {
        
                $jk['vSkyNote'] = "Data Added Successfully";
                $jk['vSkySuc'] = true;
            }else {
                $jk['vSkyNote'] = "Error Adding Data!";
                $jk['vSkySuc'] = false;
            }

        }
        
    }

    echo json_encode($jk);

    
}