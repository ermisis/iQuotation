<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['doprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['doprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['doprintform']));

            $underwriter_do_v = $request[1][1];
            $insured_do_v = $request[2][1];
            $industry_do_v = $request[3][1];
            $intermediary_do_v = $request[4][1];
            $selectCurrency_do_v = $request[5][1];
            $adoc_prem_v = $request[8][1];
            $lpd_prem_v = $request[11][1];
            $peri_prem_v = $request[11][1];
            $all3_prem_v = $request[11][1];
            $other_desc_do_v = $request[18][1];
            $other_prem_do_v = $request[21][1];
            $other_desc_do1_v = $request[22][1];
            $other_prem_do1_v = $request[25][1];
            $other_desc_do2_v = $request[26][1];
            $other_prem_do2_v = $request[29][1];
            $other_desc_do3_v = $request[30][1];
            $other_prem_do3_v = $request[33][1];
            $other_desc_do4_v = $request[34][1];
            $other_prem_do4_v = $request[37][1];
            $ap4do_prem_v = $request[40][1];
            $de4do_si_v = $request[41][1];
            $sub4do_si_v = $request[42][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'DIRECTORS & OFFICERS LIABILITY:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_do_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'All Directors & Officers of the company',0,0,'L');
            $this->Cell(165,10,$adoc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Limit Per Director',0,0,'L');
            $this->Cell(165,10,$lpd_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Per Incident',0,0,'L');
            $this->Cell(165,10,$peri_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Aggregate Limit of Liability',0,0,'L');
            $this->Cell(165,10,$all3_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_do_v,0,0,'L');
            $this->Cell(165,10,$other_prem_do_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_do1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_do1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_do2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_do2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_do3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_do3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_do4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_do4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$ap4do_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$de4do_si_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$sub4do_si_v,0,0,'R');
            $this->Ln(50);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['doprintform']));

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