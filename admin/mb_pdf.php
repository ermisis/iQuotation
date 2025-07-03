<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['mbprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['mbprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['mbprintform']));

            $underwriter_mb_v = $request[1][1];
            $insured_mb_v = $request[2][1];
            $industry_mb_v = $request[3][1];
            $intermediary_mb_v = $request[4][1];
            $selectCurrency_mb_v = $request[5][1];
            $premium_tsi2_v = $request[8][1];
            $premium_srcc_v = $request[11][1];
            $premium_oef_v = $request[14][1];
            $premium_airfreight_v = $request[17][1];
            $premium_sptpl_v = $request[20][1];
            $other_desc_mb_v = $request[21][1];
            $other_prem_mb_v = $request[24][1];
            $other_desc_mb1_v = $request[25][1];
            $other_prem_mb1_v = $request[28][1];
            $other_desc_mb2_v = $request[29][1];
            $other_prem_mb2_v = $request[32][1];
            $other_desc_mb3_v = $request[33][1];
            $other_prem_mb3_v = $request[36][1];
            $other_desc_mb4_v = $request[37][1];
            $other_prem_mb4_v = $request[40][1];
            $premium_engo_ap_v = $request[43][1];
            $mb_deduct_v = $request[44][1];
            $nrv_subject_v = $request[45][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'ENGINEERING - MACHINERY BREAKDOWN:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_mb_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED',0,0,'L');
            $this->Cell(165,10,$premium_tsi2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Strikes, Riot and Civil Commotion',0,0,'L');
            $this->Cell(165,10,$premium_srcc_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Overtime, Night Work & Express Freight',0,0,'L');
            $this->Cell(165,10,$premium_oef_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Airfreight',0,0,'L');
            $this->Cell(165,10,$premium_airfreight_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Surrounding Property & Third Party Liability',0,0,'L');
            $this->Cell(165,10,$premium_sptpl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mb_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mb_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mb1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mb1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mb2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mb2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mb3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mb3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mb4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mb4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$premium_engo_ap_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$mb_deduct_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$nrv_subject_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['mbprintform']));

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