<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['pmiprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['pmiprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['pmiprintform']));

            $underwriter_pm_v = $request[1][1];
            $insured_pm_v = $request[2][1];
            $industry_pm_v = $request[3][1];
            $intermediary_pm_v = $request[4][1];
            $selectCurrency_pm_v = $request[5][1];
            $premium_mv_tsi_v = $request[7][1];
            $other_desc_pmi_v = $request[8][1];
            $other_prem_pmi_v = $request[11][1];
            $other_desc_pmi1_v = $request[12][1];
            $other_prem_pmi1_v = $request[15][1];
            $other_desc_pmi2_v = $request[16][1];
            $other_prem_pmi2_v = $request[19][1];
            $other_desc_pmi3_v = $request[20][1];
            $other_prem_pmi3_v = $request[23][1];
            $other_desc_pmi4_v = $request[24][1];
            $other_prem_pmi4_v = $request[27][1];
            $ap_premium_mv_v = $request[30][1];
            $pmi_np_v = $request[31][1];
            $mv_sub_v = $request[32][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'PLANT & MACHINERY (Indemnity)',0,0,'L');
            $this->Cell(165,10,$selectCurrency_pm_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED',0,0,'L');
            $this->Cell(165,10,$premium_mv_tsi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pmi_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pmi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pmi1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pmi1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pmi2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pmi2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pmi3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pmi3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pmi4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pmi4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$ap_premium_mv_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$pmi_np_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$mv_sub_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['pmiprintform']));

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