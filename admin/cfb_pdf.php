<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['cfbprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['cfbprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['cfbprintform']));

            $underwriter_cfb_v = $request[1][1];
            $insured_cfb_v = $request[2][1];
            $industry_cfb_v = $request[3][1];
            $intermediary_cfb_v = $request[4][1];
            $selectCurrency_cfb_v = $request[5][1];
            $building_prem4_v = $request[8][1];
            $fencewall_prem4_v = $request[11][1];
            $fff_prem4_v = $request[14][1];
            $furnish_prem4_v = $request[17][1];
            $eea_prem4_v = $request[20][1];
            $hg_prem4_v = $request[23][1];
            $pe_prem2_v = $request[26][1];
            $cl_prem4_v = $request[29][1];
            $pm_prem4_v = $request[32][1];
            $sit_prem4_v = $request[35][1];
            $fg_prem_v = $request[38][1];
            $wip_prem_v = $request[41][1];
            $rm_prem_v = $request[44][1];
            $oc_prem4_v = $request[47][1];
            $tsibp_prem4_v = $request[50][1];
            $less_prem4_v = $request[53][1];
            $fea_dscut_prem4_v = $request[56][1];
            $fea_dscut_prem24_v = $request[59][1];
            $hd_prem4_v = $request[62][1];
            $hd24_prem_v = $request[65][1];
            $ltad_prem4_v = $request[68][1];
            $dp_prem4_v = $request[71][1];
            $ca_adp4_v = $request[74][1];
            $tr_adp4_v = $request[77][1];
            $rob_adp4_v = $request[80][1];
            $pf_adp4_v = $request[83][1];
            $rvc_adp4_v = $request[86][1];
            $pg_adp4_v = $request[89][1];
            $arsi_adp4_v = $request[92][1];
            $other_desc_cfb_v = $request[93][1];
            $other_prem_cfb_v = $request[96][1];
            $other_desc_cfb1_v = $request[97][1];
            $other_prem_cfb1_v = $request[100][1];
            $other_desc_cfb2_v = $request[101][1];
            $other_prem_cfb2_v = $request[104][1];
            $other_desc_cfb3_v = $request[105][1];
            $other_prem_cfb3_v = $request[108][1];
            $other_desc_cfb4_v = $request[109][1];
            $other_prem_cfb4_v = $request[112][1];
            $tap_adp4_v = $request[115][1];
            $netp_adp4_v = $request[118][1];
            $collapse_adp4_v = $request[121][1];
            $totp_adp44_v = $request[124][1];
            $nicl_adp4_v = $request[130][1];
            $cf_adp4_v = $request[133][1];
            $aa_ap_adp4_v = $request[136][1];
            $deduc_aat_limits4_v = $request[137][1];
            $subject_aa_limits4_v = $request[138][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'COMBINED FIRE & BURGLARY:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_cfb_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Building(s)',0,0,'L');
            $this->Cell(165,10,$building_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Fence Wall & Gate(s)',0,0,'L');
            $this->Cell(165,10,$fencewall_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Furniture, Fixtures & Fittings',0,0,'L');
            $this->Cell(165,10,$fff_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Furnishings',0,0,'L');
            $this->Cell(165,10,$furnish_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Electronic Equipment/Appliances',0,0,'L');
            $this->Cell(165,10,$eea_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Household Goods',0,0,'L');
            $this->Cell(165,10,$hg_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Personal Effects',0,0,'L');
            $this->Cell(165,10,$pe_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Computers/Laptops',0,0,'L');
            $this->Cell(165,10,$cl_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plant & Machinery',0,0,'L');
            $this->Cell(165,10,$pm_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Stock-in-Trade',0,0,'L');
            $this->Cell(165,10,$sit_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Finished Goods',0,0,'L');
            $this->Cell(165,10,$fg_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Work-In-Progress',0,0,'L');
            $this->Cell(165,10,$wip_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Raw Materials',0,0,'L');
            $this->Cell(165,10,$rm_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Other Contents',0,0,'L');
            $this->Cell(165,10,$oc_prem4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED/BASIC PREMIUM',0,0,'L');
            $this->Cell(165,10,$tsibp_prem4_v,0,0,'R');
            $this->Ln();
            // $this->SetFont('Times','',12);
            // $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            // $this->Cell(165,10,$fea_dscut_prem4_v,0,0,'R');
            // $this->Ln();
            // $this->SetFont('Times','',12);
            // $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            // $this->Cell(165,10,$fea_dscut_prem24_v,0,0,'R');
            // $this->Ln();
            // $this->SetFont('Times','',12);
            // $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            // $this->Cell(165,10,$hd_prem4_v,0,0,'R');
            // $this->Ln();
            // $this->SetFont('Times','',12);
            // $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            // $this->Cell(165,10,$hd24_prem_v,0,0,'R');
            // $this->Ln();
            // $this->SetFont('Times','',12);
            // $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            // $this->Cell(165,10,$ltad_prem4_v,0,0,'R');
            // $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Discounted Premium',0,0,'L');
            $this->Cell(165,10,$dp_prem4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Capital Additions',0,0,'L');
            $this->Cell(165,10,$ca_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Temporal Removal',0,0,'L');
            $this->Cell(165,10,$tr_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Removal of Debris',0,0,'L');
            $this->Cell(165,10,$rob_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Professional Fees',0,0,'L');
            $this->Cell(165,10,$pf_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Reinstatement Value Condition',0,0,'L');
            $this->Cell(165,10,$rvc_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plate Glass',0,0,'L');
            $this->Cell(165,10,$pg_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Automatic Reinstatement of Sum Insured',0,0,'L');
            $this->Cell(165,10,$arsi_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_cfb_v,0,0,'L');
            $this->Cell(165,10,$other_prem_cfb_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_cfb1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_cfb1_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_cfb2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_cfb2_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_cfb3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_cfb3_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_cfb4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_cfb4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Total Add. Premiums',0,0,'L');
            $this->Cell(165,10,$tap_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Net Premium',0,0,'L');
            $this->Cell(165,10,$netp_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Collapse',0,0,'L');
            $this->Cell(165,10,$collapse_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL PREMIUMS',0,0,'L');
            $this->Cell(165,10,$totp_adp44_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'1% NIC Levy',0,0,'L');
            $this->Cell(165,10,$nicl_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Certificate Fee',0,0,'L');
            $this->Cell(165,10,$cf_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$aa_ap_adp4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$deduc_aat_limits4_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subject_aa_limits4_v,0,0,'R');
            $this->Ln(50);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['cfbprintform']));

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