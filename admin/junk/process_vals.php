<?php

    include $_SERVER['DOCUMENT_ROOT'].'/table/dbh.inc.php';

if(isset($_POST['cal_process']) && !empty($_POST['cal_process'])){
        
        $cal_process = escaepD($conn, $_POST['cal_process']);
        $val = escaepD($conn, $_POST['val']);
        $sc = escaepD($conn, $_POST['sc']);
        $basic_prem = 0;
        $cc_load = 0;
        $grosss_prem = 0;
        $net_after_ncd = 0;
        $net_after_frb = 0;
        $exit_load = 0;
        $tppdl = 0;
        $eib = 0;
        $uw_prem = 0;
        $pre_payable = 0;
        define('PERCENT', '100');
        $f = false;
    
    if($cal_process == "cal"){
        
        //////////////////// Get values from database /////////////////////////
        $get_vals = mysqli_query($conn, "SELECT * FROM `config_quote` LIMIT 1");
        
        if($fetched_val = mysqli_fetch_assoc($get_vals)){
            $rate = $fetched_val['rate'];
            $tp_prem = $fetched_val['tp_prem'];
            $ccl = $fetched_val['ccl'];
            $cc_load = $fetched_val['cc_load'];
            $ncd = $fetched_val['ncd'];
            $fd = $fetched_val['fd'];
            $addl_per = $fetched_val['addl_per'];
            $eco_peril = $fetched_val['eco_peril'];
            $pa = $fetched_val['pa'];
            $pl = $fetched_val['pl'];
            $eib_per = $fetched_val['eib'];
            $tppdl_1 = $fetched_val['tppdl_val_1'];
            $tppdl_2 = $fetched_val['tppdl_val_2'];
            $tppdl_per = $fetched_val['tppdl_val_per'];
            $levis = $fetched_val['levis'];
            $exit_load_val_1 = $fetched_val['exit_load_val_1'];
            $exit_load_val_2 = $fetched_val['exit_load_val_2'];
        }
        
        //////// calculation goes here ///////////////////////////
        if($val > 0){
            $basic_prem = $val * $rate/PERCENT;
            $cc_load = $basic_prem * $ccl/PERCENT;
            $grosss_prem = $basic_prem + $tp_prem + $cc_load;
            $net_after_ncd = $grosss_prem - ($grosss_prem * $ncd/PERCENT);
            $net_after_frb = $net_after_ncd - ($net_after_ncd * $fd/PERCENT);
            $exit_load = $exit_load_val_1 * ($sc - $exit_load_val_2);
            $tppdl = ($tppdl_1 - $tppdl_2) * $tppdl_per/PERCENT;
            $eib = $basic_prem * $eib_per/PERCENT;
            $uw_prem = $net_after_frb + $exit_load + $addl_per + $eco_peril + $pa + $pl + $tppdl + $eib;
            $pre_payable = $uw_prem + $levis;
            
            $f = true;
        }

        if($f){
            $data['edit_basic_prem'] = $basic_prem;
            $data['edit_cc_load'] = $cc_load;
            $data['edit_gross_prem'] = $grosss_prem;
            $data['edit_net_after_ncd'] = $net_after_ncd;
            $data['edit_net_after_frb'] = $net_after_frb;
            $data['edit_exit_load'] = $exit_load;
            $data['edit_tppdl'] = $tppdl;
            $data['edit_eib'] = $eib;
            $data['edit_u_wprem'] = $uw_prem;
            $data['edit_pre_payable'] = $pre_payable;
            
            echo json_encode($data);
            exit();
        }
    }    
}
