<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['bbbprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['bbbprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['bbbprintform']));

            $underwriter_bbb_v = $request[1][1];
            $insured_bbb_v = $request[2][1];
            $industry_bbb_v = $request[3][1];
            $intermediary_bbb_v = $request[4][1];
            $selectCurrency_bbb_v = $request[5][1];
            $sob_prem_v = $request[8][1];
            $s2cc_prem_v = $request[11][1];
            $s3pi_prem_v = $request[14][1];
            // $s3pi_prem2_v = $request[17][1];
            $peril_prem_v = $request[20][1];
            $aloi_prem_v = $request[23][1];
            $other_desc_bbb_v = $request[24][1];
            $other_prem_bbb_v = $request[27][1];
            $other_desc_bbb1_v = $request[28][1];
            $other_prem_bbb1_v = $request[31][1];
            $other_desc_bbb2_v = $request[32][1];
            $other_prem_bbb2_v = $request[35][1];
            $other_desc_bbb3_v = $request[36][1];
            $other_prem_bbb3_v = $request[39][1];
            $other_desc_bbb4_v = $request[40][1];
            $other_prem_bbb4_v = $request[43][1];
            $apremm_prem_v = $request[46][1];
            $ded_limits_v = $request[47][1];
            $subs_limits_v = $request[48][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'BANKERS BLANKET BOND:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_bbb_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Section One - Bond',0,0,'L');
            $this->Cell(165,10,$sob_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Section Two - Computer Crime',0,0,'L');
            $this->Cell(165,10,$s2cc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Section Three - Professional Indemnity',0,0,'L');
            $this->Cell(165,10,$s3pi_prem_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Per Incident limit',0,0,'L');
            $this->Cell(165,10,$peril_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Aggregate Limit of Indemnity',0,0,'L');
            $this->Cell(165,10,$aloi_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_bbb_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bbb_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_bbb1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bbb1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_bbb2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bbb2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_bbb3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bbb3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_bbb4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bbb4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$apremm_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$ded_limits_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subs_limits_v,0,0,'R');
            $this->Ln(30);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['bbbprintform']));

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
    
    