<?php

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['pri_values']) && !empty($_POST['pri_values'])) {
    
    if($_POST['pri_values'] == "insert_pri") {
        
         $date_input_pi = escaepD($conn, $_POST['date_input_pi']);
         $eng_pi = escaepD($conn, $_POST['eng_pi']);
         $underwriter_pi = escaepD($conn, $_POST['underwriter_pi']);
         $insured_pi = escaepD($conn, $_POST['insured_pi']);
         $industry_pi = escaepD($conn, $_POST['industry_pi']);
         $intermediary_pi = escaepD($conn, $_POST['intermediary_pi']);
         $selectCurrency_pi = escaepD($conn, $_POST['selectCurrency_pi']);
         $apob_si = escaepD($conn, $_POST['apob_si']);
         $apob_rate = escaepD($conn, $_POST['apob_rate']);
         $apob_prem = escaepD($conn, $_POST['apob_prem']);
         $pcl_si = escaepD($conn, $_POST['pcl_si']);
         $pcl_rate = escaepD($conn, $_POST['pcl_rate']);
         $pcl_prem = escaepD($conn, $_POST['pcl_prem']);
         $allpi_si = escaepD($conn, $_POST['allpi_si']);
         $allpi_rate = escaepD($conn, $_POST['allpi_rate']);
         $allpi_prem = escaepD($conn, $_POST['allpi_prem']);
         $other_desc_pi = escaepD($conn, $_POST['other_desc_pi']);
         $other_si_pi = escaepD($conn, $_POST['other_si_pi']);
         $other_rate_pi = escaepD($conn, $_POST['other_rate_pi']);
         $other_prem_pi = escaepD($conn, $_POST['other_prem_pi']);
         $other_desc_pi1 = escaepD($conn, $_POST['other_desc_pi1']);
         $other_si_pi1 = escaepD($conn, $_POST['other_si_pi1']);
         $other_rate_pi1 = escaepD($conn, $_POST['other_rate_pi1']);
         $other_prem_pi1 = escaepD($conn, $_POST['other_prem_pi1']);
         $other_desc_pi2 = escaepD($conn, $_POST['other_desc_pi2']);
         $other_si_pi2 = escaepD($conn, $_POST['other_si_pi2']);
         $other_rate_pi2 = escaepD($conn, $_POST['other_rate_pi2']);
         $other_prem_pi2 = escaepD($conn, $_POST['other_prem_pi2']);
         $other_desc_pi3 = escaepD($conn, $_POST['other_desc_pi3']);
         $other_si_pi3 = escaepD($conn, $_POST['other_si_pi3']);
         $other_rate_pi3 = escaepD($conn, $_POST['other_rate_pi3']);
         $other_prem_pi3 = escaepD($conn, $_POST['other_prem_pi3']);
         $other_desc_pi4 = escaepD($conn, $_POST['other_desc_pi4']);
         $other_si_pi4 = escaepD($conn, $_POST['other_si_pi4']);
         $other_rate_pi4 = escaepD($conn, $_POST['other_rate_pi4']);
         $other_prem_pi4 = escaepD($conn, $_POST['other_prem_pi4']);
         $ap4pi_si = escaepD($conn, $_POST['ap4pi_si']);
         $ap4pi_rate = escaepD($conn, $_POST['ap4pi_rate']);
         $ap4pi_prem = escaepD($conn, $_POST['ap4pi_prem']);
         $de4pi_si = escaepD($conn, $_POST['de4pi_si']);
         $sub4pi_si = escaepD($conn, $_POST['sub4pi_si']);

         $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_pi_liability` WHERE `pi_fg`='".$eng_pi."' AND `insured_pi`='".$insured_pi."' AND `industry_pi`='".$industry_pi."' AND `intermediary_pi`='".$intermediary_pi."'"));

         $numRows = mysqli_num_rows($sqlChkn);

         if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

         } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_pi_liability`(`date_input`, `pi_fg`, `underwriter_pi`, `insured_pi`, `industry_pi`, `intermediary_pi`, `selectCurrency_pi`, `apob_si`, `apob_rate`, `apob_prem`, `pcl_si`, `pcl_rate`, `pcl_prem`, `allpi_si`, `allpi_rate`, `allpi_prem`, `pi_fg_desc_do`, `pi_fg_si_do`, `pi_fg_rate_do`, `pi_fg_prem_do`, `pi_fg_desc_do1`, `pi_fg_si_do1`, `pi_fg_rate_do1`, `pi_fg_prem_do1`, `pi_fg_desc_do2`, `pi_fg_si_do2`, `pi_fg_rate_do2`, `pi_fg_prem_do2`, `pi_fg_desc_do3`, `pi_fg_si_do3`, `pi_fg_rate_do3`, `pi_fg_prem_do3`, `pi_fg_desc_do4`, `pi_fg_si_do4`, `pi_fg_rate_do4`, `pi_fg_prem_do4`, `ap4pi_si`, `ap4pi_rate`, `ap4pi_prem`, `de4pi_si`, `sub4pi_si`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')", $date_input_pi, $eng_pi, $underwriter_pi, $insured_pi, $industry_pi, $intermediary_pi, $selectCurrency_pi, $apob_si, $apob_rate, $apob_prem, $pcl_si, $pcl_rate, $pcl_prem, $allpi_si, $allpi_rate, $allpi_prem, $other_desc_pi, $other_si_pi, $other_rate_pi, $other_prem_pi, $other_desc_pi1, $other_si_pi1, $other_rate_pi1, $other_prem_pi1, $other_desc_pi2, $other_si_pi2, $other_rate_pi2, $other_prem_pi2, $other_desc_pi3, $other_si_pi3, $other_rate_pi3, $other_prem_pi3, $other_desc_pi4, $other_si_pi4, $other_rate_pi4, $other_prem_pi4, $ap4pi_si, $ap4pi_rate, $ap4pi_prem, $de4pi_si, $sub4pi_si))) {
            
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