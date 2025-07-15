<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['nrvprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['nrvprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['nrvprintform']));

            $underwriter_pm_v = $request[1][1];
            $insured_pm_v = $request[2][1];
            $industry_pm_v = $request[3][1];
            $intermediary_pm_v = $request[4][1];
            $selectCurrency_pm_v = $request[5][1];
            $premium_tsi_v = $request[8][1];
            $other_desc_pm_v = $request[9][1];
            $other_prem_pm_v = $request[12][1];
            $other_desc_pm1_v = $request[13][1];
            $other_prem_pm1_v = $request[16][1];
            $other_desc_pm2_v = $request[17][1];
            $other_prem_pm2_v = $request[20][1];
            $other_desc_pm3_v = $request[21][1];
            $other_prem_pm3_v = $request[24][1];
            $other_desc_pm4_v = $request[25][1];
            $other_prem_pm4_v = $request[28][1];
            $ap_premium_v = $request[31][1];
            $pm_np_v = $request[32][1];
            $nrv_sub_v = $request[33][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'PLANT & MACHINERY (New Replacement Value)',0,0,'L');
            $this->Cell(165,10,$selectCurrency_pm_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED',0,0,'L');
            $this->Cell(165,10,$premium_tsi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pm_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pm_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pm1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pm1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pm2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pm2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pm3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pm3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pm4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pm4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$ap_premium_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$pm_np_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$nrv_sub_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['nrvprintform']));

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