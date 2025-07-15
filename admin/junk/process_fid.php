<?php 

    session_start();
    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';


if(isset($_POST['fid_values']) && !empty($_POST['fid_values'])) {
    
    if($_POST['fid_values'] == "insert_fid") {
        
        $date_input_fg = escaepD($conn, $_POST['date_input_fg']);
        $eng_fg = escaepD($conn, $_POST['eng_fg']);
        $underwriter_fid = escaepD($conn, $_POST['underwriter_fid']);
        $insured_fid = escaepD($conn, $_POST['insured_fid']);
        $industry_fid = escaepD($conn, $_POST['industry_fid']);
        $intermediary_fid = escaepD($conn, $_POST['intermediary_fid']);
        $selectCurrency_fid = escaepD($conn, $_POST['selectCurrency_fid']);
        $cos_si = escaepD($conn, $_POST['cos_si']);
        $cos_rate = escaepD($conn, $_POST['cos_rate']);
        $cos_prem = escaepD($conn, $_POST['cos_prem']);
        $pcl2_si = escaepD($conn, $_POST['pcl2_si']);
        $pcl2_rate = escaepD($conn, $_POST['pcl2_rate']);
        $pcl2_prem = escaepD($conn, $_POST['pcl2_prem']);
        $allfg_si = escaepD($conn, $_POST['allfg_si']);
        $allfg_rate = escaepD($conn, $_POST['allfg_rate']);
        $allfg_prem = escaepD($conn, $_POST['allfg_prem']);
        $other_desc_fg = escaepD($conn, $_POST['other_desc_fg']);
        $other_si_fg = escaepD($conn, $_POST['other_si_fg']);
        $other_rate_fg = escaepD($conn, $_POST['other_rate_fg']);
        $other_prem_fg = escaepD($conn, $_POST['other_prem_fg']);
        $other_desc_fg1 = escaepD($conn, $_POST['other_desc_fg1']);
        $other_si_fg1 = escaepD($conn, $_POST['other_si_fg1']);
        $other_rate_fg1 = escaepD($conn, $_POST['other_rate_fg1']);
        $other_prem_fg1 = escaepD($conn, $_POST['other_prem_fg1']);
        $other_desc_fg2 = escaepD($conn, $_POST['other_desc_fg2']);
        $other_si_fg2 = escaepD($conn, $_POST['other_si_fg2']);
        $other_rate_fg2 = escaepD($conn, $_POST['other_rate_fg2']);
        $other_prem_fg2 = escaepD($conn, $_POST['other_prem_fg2']);
        $other_desc_fg3 = escaepD($conn, $_POST['other_desc_fg3']);
        $other_si_fg3 = escaepD($conn, $_POST['other_si_fg3']);
        $other_rate_fg3 = escaepD($conn, $_POST['other_rate_fg3']);
        $other_prem_fg3 = escaepD($conn, $_POST['other_prem_fg3']);
        $other_desc_fg4 = escaepD($conn, $_POST['other_desc_fg4']);
        $other_si_fg4 = escaepD($conn, $_POST['other_si_fg4']);
        $other_rate_fg4 = escaepD($conn, $_POST['other_rate_fg4']);
        $other_prem_fg4 = escaepD($conn, $_POST['other_prem_fg4']);
        $ap4fg_si = escaepD($conn, $_POST['ap4fg_si']);
        $ap4fg_rate = escaepD($conn, $_POST['ap4fg_rate']);
        $ap4fg_prem = escaepD($conn, $_POST['ap4fg_prem']);
        $de4fg_si = escaepD($conn, $_POST['de4fg_si']);
        $sub4fg_si = escaepD($conn, $_POST['sub4fg_si']);

        $sqlChkn = (mysqli_query($conn, "SELECT * FROM `eng_pi_liability` WHERE `pi_fg`='".$eng_fg."' AND `insured_pi`='".$insured_fid."' AND `industry_pi`='".$industry_fid."' AND `intermediary_pi`='".$intermediary_fid."'"));

         $numRows = mysqli_num_rows($sqlChkn);

         if ($numRows > 0) {

            $jk['vSkyNote'] = "Data Already Exists!";
            $jk['vSkySuc'] = true;

         } else {

            if(mysqli_query($conn, sprintf("INSERT INTO `eng_pi_liability`(`date_input`, `pi_fg`, `underwriter_pi`, `insured_pi`, `industry_pi`, `intermediary_pi`, `selectCurrency_pi`, `cos_si`, `cos_rate`, `cos_prem`, `pcl_si`, `pcl_rate`, `pcl_prem`, `allpi_si`, `allpi_rate`, `allpi_prem`, `pi_fg_desc_do`, `pi_fg_si_do`, `pi_fg_rate_do`, `pi_fg_prem_do`, `pi_fg_desc_do1`, `pi_fg_si_do1`, `pi_fg_rate_do1`, `pi_fg_prem_do1`, `pi_fg_desc_do2`, `pi_fg_si_do2`, `pi_fg_rate_do2`, `pi_fg_prem_do2`, `pi_fg_desc_do3`, `pi_fg_si_do3`, `pi_fg_rate_do3`, `pi_fg_prem_do3`, `pi_fg_desc_do4`, `pi_fg_si_do4`, `pi_fg_rate_do4`, `pi_fg_prem_do4`, `ap4pi_si`, `ap4pi_rate`, `ap4pi_prem`, `de4pi_si`, `sub4pi_si`) VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')", $date_input_fg, $eng_fg, $underwriter_fid, $insured_fid, $industry_fid, $intermediary_fid, $selectCurrency_fid, $cos_si, $cos_rate, $cos_prem, $pcl2_si, $pcl2_rate, $pcl2_prem, $allfg_si, $allfg_rate, $allfg_prem, $other_desc_fg, $other_si_fg, $other_rate_fg, $other_prem_fg, $other_desc_fg1, $other_si_fg1, $other_rate_fg1, $other_prem_fg1, $other_desc_fg2, $other_si_fg2, $other_rate_fg2, $other_prem_fg2, $other_desc_fg3, $other_si_fg3, $other_rate_fg3, $other_prem_fg3, $other_desc_fg4, $other_si_fg4, $other_rate_fg4, $other_prem_fg4, $ap4fg_si, $ap4fg_rate, $ap4fg_prem, $de4fg_si, $sub4fg_si))) {
            
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