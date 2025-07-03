<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['fapprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['fapprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['fapprintform']));

            $underwriter_fap_v = $request[1][1];
            $insured_fap_v = $request[2][1];
            $industry_fap_v = $request[3][1];
            $intermediary_fap_v = $request[4][1];
            $selectCurrency_fap_v = $request[5][1];
            $building_prem2_v = $request[8][1];
            $fencewall1_prem_v = $request[11][1];
            $fff_prem2_v = $request[14][1];
            $furnish_prem2_v = $request[17][1];
            $eea_prem2_v = $request[20][1];
            $hg_prem2_v = $request[23][1];
            $pe_prem_v = $request[26][1];
            $cl_prem2_v = $request[29][1];
            $pm_prem2_v = $request[32][1];
            $sit_prem2_v = $request[35][1];
            $oc_prem2_v = $request[38][1];
            $tsibp_prem2_v = $request[41][1];
            $fea_dscut_si21_v = $request[45][1];
            $fea_dscut_prem21_v = $request[47][1];
            $fea_dscut_prem22_v = $request[50][1];
            $hd_si2_v = $request[51][1];
            $hd_prem2_v = $request[53][1];
            $hd2_prem2_v = $request[56][1];
            $ltad_si2_v = $request[57][1];
            $ltad_prem2_v = $request[59][1];
            $dp_prem2_v = $request[62][1];
            $ca_adp2_v = $request[65][1];
            $tr_adp2_v = $request[68][1];
            $rob_adp2_v = $request[71][1];
            $pf_adp2_v = $request[74][1];
            $rvc_adp2_v = $request[77][1];
            $pg_adp2_v = $request[80][1];
            $arsi_adp2_v = $request[83][1];
            $sp_adp2_v = $request[86][1];
            $other_desc_fap_v = $request[87][1];
            $other_prem_fap_v = $request[90][1];
            $other_desc_fap1_v = $request[91][1];
            $other_prem_fap1_v = $request[94][1];
            $other_desc_fap2_v = $request[95][1];
            $other_prem_fap2_v = $request[98][1];
            $other_desc_fap3_v = $request[99][1];
            $other_prem_fap3_v = $request[102][1];
            $other_desc_fap4_v = $request[103][1];
            $other_prem_fap4_v = $request[106][1];
            $tap_adp2_v = $request[109][1];
            $netp_adp2_v = $request[112][1];
            $collapse_adp2_v = $request[115][1];
            $totp_adp2_v = $request[118][1];
            $nicl_adp2_v = $request[124][1];
            $cf_adp2_v = $request[127][1];
            $aa_ap_adp2_v = $request[130][1];
            $deduc_aat_limits2_v = $request[131][1];
            $subject_aa_limits2_v = $request[132][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'FIRE & ALLIED PERILS:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_fap_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Building(s)',0,0,'L');
            $this->Cell(165,10,$building_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Fence Wall & Gate(s)',0,0,'L');
            $this->Cell(165,10,$fencewall1_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Furniture, Fixtures & Fittings',0,0,'L');
            $this->Cell(165,10,$fff_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Furnishings',0,0,'L');
            $this->Cell(165,10,$furnish_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Electronic Equipment/Appliances',0,0,'L');
            $this->Cell(165,10,$eea_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Household Goods',0,0,'L');
            $this->Cell(165,10,$hg_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Personal Effects',0,0,'L');
            $this->Cell(165,10,$pe_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Computers/Laptops',0,0,'L');
            $this->Cell(165,10,$cl_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plant & Machinery',0,0,'L');
            $this->Cell(165,10,$pm_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Stock-in-Trade',0,0,'L');
            $this->Cell(165,10,$sit_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Other Contents',0,0,'L');
            $this->Cell(165,10,$oc_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED/BASIC PREMIUM',0,0,'L');
            $this->Cell(165,10,$tsibp_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Discounted Premium',0,0,'L');
            $this->Cell(165,10,$dp_prem2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Capital Additions',0,0,'L');
            $this->Cell(165,10,$ca_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Temporal Removal',0,0,'L');
            $this->Cell(165,10,$tr_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Removal of Debris',0,0,'L');
            $this->Cell(165,10,$rob_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Professional Fees',0,0,'L');
            $this->Cell(165,10,$pf_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Reinstatement Value Condition',0,0,'L');
            $this->Cell(165,10,$rvc_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plate Glass',0,0,'L');
            $this->Cell(165,10,$pg_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Automatic Reinstatement of Sum Insured',0,0,'L');
            $this->Cell(165,10,$arsi_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Surrounding Property',0,0,'L');
            $this->Cell(165,10,$sp_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fap_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fap_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fap1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fap1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fap2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fap2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fap3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fap3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fap4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fap4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Total Add. Premiums',0,0,'L');
            $this->Cell(165,10,$tap_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Net Premium',0,0,'L');
            $this->Cell(165,10,$netp_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Collapse',0,0,'L');
            $this->Cell(165,10,$collapse_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL PREMIUMS',0,0,'L');
            $this->Cell(165,10,$totp_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'1% NIC Levy',0,0,'L');
            $this->Cell(165,10,$nicl_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Certificate Fee',0,0,'L');
            $this->Cell(165,10,$cf_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$aa_ap_adp2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$deduc_aat_limits2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subject_aa_limits2_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['fapprintform']));

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