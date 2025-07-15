<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['aarprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['aarprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['aarprintform']));

            $underwriter_comb_v = $request[1][1];
            $insured_aar_v = $request[2][1];
            $industry_aar_v = $request[3][1];
            $intermediary_aar_v = $request[4][1];
            $selectCurrency_aar_v = $request[5][1];
            $building_prem_v = $request[8][1];
            $fencewall_prem_v = $request[11][1];
            $finshed_goods_prem_v = $request[14][1];
            $wrknprogres_prem_v = $request[17][1];
            $fff_prem_v = $request[20][1];
            $furnish_prem_v = $request[23][1];
            $eea_prem_v = $request[26][1];
            $hg_prem_v = $request[29][1];
            $cl_prem_v = $request[32][1];
            $pm_prem_v = $request[35][1];
            $sit_prem_v = $request[38][1];
            $oc_prem_v = $request[41][1];
            $tsibp_prem_v = $request[44][1];
            $fea_dscut_si_v = $request[48][1];
            $fea_dscut_prem_v = $request[50][1];
            $fea_dscut_prem2_v = $request[53][1];
            $hd_si_v = $request[54][1];
            $hd_prem_v = $request[56][1];
            $hd2_prem_v = $request[59][1];
            $ltad_si_v = $request[60][1];
            $ltad_prem_v = $request[62][1];
            $dp_prem_v = $request[65][1];
            $special_disc_si_v = $request[67][1];
            $special_disc_prem_v = $request[69][1];
            $ca_adp_v = $request[72][1];
            $tr_adp_v = $request[75][1];
            $rob_adp_v = $request[78][1];
            $pf_adp_v = $request[81][1];
            $rvc_adp_v = $request[84][1];
            $pg_adp_v = $request[87][1];
            $arsi_adp_v = $request[90][1];
            $sp_adp_v = $request[93][1];
            $other_desc_aar_v = $request[94][1];
            $other_prem_aar_v = $request[97][1];
            $other_desc_aar1_v = $request[98][1];
            $other_prem_aar1_v = $request[101][1];
            $other_desc_aar2_v = $request[102][1];
            $other_prem_aar2_v = $request[105][1];
            $other_desc_aar3_v = $request[106][1];
            $other_prem_aar3_v = $request[109][1];
            $other_desc_aar4_v = $request[110][1];
            $other_prem_aar4_v = $request[113][1];
            $tap_adp_v = $request[116][1];
            $netp_adp_v = $request[119][1];
            $collapse_adp_v = $request[122][1];
            $totp_adp_v = $request[125][1];
            $nicl_adp_v = $request[131][1];
            $cf_adp_v = $request[134][1];
            $aa_ap_adp_v = $request[137][1];
            $deduc_aat_limits_v = $request[138][1];
            $subject_aa_limits_v = $request[139][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'ASSETS ALL RISKS:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_aar_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Building(s)',0,0,'L');
            $this->Cell(165,10,$building_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Fence Wall & Gate(s)',0,0,'L');
            $this->Cell(165,10,$fencewall_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Finished Goods',0,0,'L');
            $this->Cell(165,10,$finshed_goods_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Work In Progress',0,0,'L');
            $this->Cell(165,10,$wrknprogres_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Furniture, Fixtures & Fittings',0,0,'L');
            $this->Cell(165,10,$fff_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Furnishings',0,0,'L');
            $this->Cell(165,10,$furnish_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Electronic Equipment/Appliances',0,0,'L');
            $this->Cell(165,10,$eea_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Household Goods',0,0,'L');
            $this->Cell(165,10,$hg_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Computers/Laptops',0,0,'L');
            $this->Cell(165,10,$cl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plant & Machinery',0,0,'L');
            $this->Cell(165,10,$pm_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Stock-in-Trade',0,0,'L');
            $this->Cell(165,10,$sit_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Other Contents',0,0,'L');
            $this->Cell(165,10,$oc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED/BASIC PREMIUM',0,0,'L');
            $this->Cell(165,10,$tsibp_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Discounted Premium',0,0,'L');
            $this->Cell(165,10,$dp_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Capital Additions',0,0,'L');
            $this->Cell(165,10,$special_disc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Temporal Removal',0,0,'L');
            $this->Cell(165,10,$ca_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Removal of Debris',0,0,'L');
            $this->Cell(165,10,$tr_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Professional Fees',0,0,'L');
            $this->Cell(165,10,$rob_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Reinstatement Value Condition',0,0,'L');
            $this->Cell(165,10,$pf_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plate Glass',0,0,'L');
            $this->Cell(165,10,$rvc_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Automatic Reinstatement of Sum Insured',0,0,'L');
            $this->Cell(165,10,$pg_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Surrounding Property',0,0,'L');
            $this->Cell(165,10,$arsi_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Surrounding Property',0,0,'L');
            $this->Cell(165,10,$sp_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_aar_v,0,0,'L');
            $this->Cell(165,10,$other_prem_aar_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_aar1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_aar1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_aar2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_aar2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_aar3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_aar3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_aar4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_aar4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Total Add. Premiums',0,0,'L');
            $this->Cell(165,10,$tap_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Net Premium',0,0,'L');
            $this->Cell(165,10,$netp_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Collapse',0,0,'L');
            $this->Cell(165,10,$collapse_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL PREMIUMS',0,0,'L');
            $this->Cell(165,10,$totp_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'1% NIC Levy',0,0,'L');
            $this->Cell(165,10,$nicl_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Certificate Fee',0,0,'L');
            $this->Cell(165,10,$cf_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$aa_ap_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$deduc_aat_limits_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subject_aa_limits_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['aarprintform']));

            $this->SetY(-15);
            $this->SetFont('Arial','',8);
            $this->Cell(0,10,'Page'.$this->PageNo().'/{nb}',0,0,'C');
            
        }
        
    }

    $pdf = new myPDF();
    $pdf->AliasNbPages();
    $pdf->AddPage('P','A4',0);
    $pdf->headerContent();
    $pdf->Output();