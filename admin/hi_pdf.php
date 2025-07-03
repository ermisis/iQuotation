<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['hiprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['hiprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['hiprintform']));

            $underwriter_hi_v = $request[1][1];
            $insured_hi_v = $request[2][1];
            $industry_hi_v = $request[3][1];
            $intermediary_hi_v = $request[4][1];
            $selectCurrency_hi_v = $request[5][1];
            $building_prem3_v = $request[8][1];
            $fencewall2_prem_v = $request[11][1];
            $hg_prem3_v = $request[14][1];
            $pe_prem1_v = $request[17][1];
            $tsibp_prem3_v = $request[20][1];
            // $less_prem3_v = $request[23][1];
            $fea_dscut_si3_v = $request[24][1];
            $fea_dscut_prem3_v = $request[26][1];
            $fea_dscut_prem33_v = $request[29][1];
            $hd_si3_v = $request[30][1];
            $hd_prem3_v = $request[32][1];
            $hd3_prem_v = $request[35][1];
            $ltad_si3_v = $request[36][1];
            $ltad_prem3_v = $request[38][1];
            $dp_prem3_v = $request[41][1];
            $pat_adp_v = $request[44][1];
            $wcds_adp_v = $request[47][1];
            $bue_adp_v = $request[50][1];
            $pc_adp_v = $request[53][1];
            $apl_adp_v = $request[56][1];
            $pg_adp3_v = $request[59][1];
            $other_desc_hi_v = $request[60][1];
            $other_prem_hi_v = $request[63][1];
            $other_desc_hi1_v = $request[64][1];
            $other_prem_hi1_v = $request[67][1];
            $other_desc_hi2_v = $request[68][1];
            $other_prem_hi2_v = $request[71][1];
            $other_desc_hi3_v = $request[72][1];
            $other_prem_hi3_v = $request[75][1];
            $other_desc_hi4_v = $request[76][1];
            $other_prem_hi4_v = $request[79][1];
            $tap_adp3_v = $request[82][1];
            $netp_adp3_v = $request[85][1];
            $collapse_adp3_v = $request[88][1];
            $totp_adp3_v = $request[91][1];
            $nicl_adp3_v = $request[97][1];
            $cf_adp3_v = $request[100][1];
            $aa_ap_adp3_v = $request[103][1];
            $deduc_aat_limits3_v = $request[104][1];
            $subject_aa_limits3_v = $request[105][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'HOME INSURANCE:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_hi_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Building(s)',0,0,'L');
            $this->Cell(165,10,$building_prem3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Fence Wall & Gate(s)',0,0,'L');
            $this->Cell(165,10,$fencewall2_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Household Goods',0,0,'L');
            $this->Cell(165,10,$hg_prem3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Personal Effects',0,0,'L');
            $this->Cell(165,10,$pe_prem1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED/BASIC PREMIUM',0,0,'L');
            $this->Cell(165,10,$tsibp_prem3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Discounted Premium',0,0,'L');
            $this->Cell(165,10,$dp_prem3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Personal Accident',0,0,'L');
            $this->Cell(165,10,$pat_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Workmens Compensation for Domestic Staff',0,0,'L');
            $this->Cell(165,10,$wcds_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Business Use Extension',0,0,'L');
            $this->Cell(165,10,$bue_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Pedal Cycle',0,0,'L');
            $this->Cell(165,10,$pc_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Additional Public Liability',0,0,'L');
            $this->Cell(165,10,$apl_adp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plate Glass',0,0,'L');
            $this->Cell(165,10,$pg_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_hi_v,0,0,'L');
            $this->Cell(165,10,$other_prem_hi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_hi1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_hi1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_hi2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_hi2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_hi3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_hi3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_hi4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_hi4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Total Add. Premiums',0,0,'L');
            $this->Cell(165,10,$tap_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Net Premium',0,0,'L');
            $this->Cell(165,10,$netp_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Collapse',0,0,'L');
            $this->Cell(165,10,$collapse_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL PREMIUMS',0,0,'L');
            $this->Cell(165,10,$totp_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'1% NIC Levy',0,0,'L');
            $this->Cell(165,10,$nicl_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Certificate Fee',0,0,'L');
            $this->Cell(165,10,$cf_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$aa_ap_adp3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$deduc_aat_limits3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subject_aa_limits3_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['hiprintform']));

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