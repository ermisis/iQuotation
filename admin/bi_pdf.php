<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['biprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['biprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['biprintform']));

            $underwriter_bty_v = $request[1][1];
            $insured_bty_v = $request[2][1];
            $industry_bty_v = $request[3][1];
            $intermediary_bty_v = $request[4][1];
            $selectCurrency_bty_v = $request[5][1];
            $fge_prem_v = $request[8][1];
            $premises_prem_v = $request[11][1];
            $transit_prem_v = $request[14][1];
            $fc_prem_v = $request[17][1];
            $fs_prem_v = $request[20][1];
            $cc_prem_v = $request[23][1];
            $doc_prem_v = $request[26][1];
            $los_prem_v = $request[29][1];
            $pi_prem_v = $request[32][1];
            $rm_prem_v = $request[35][1];
            $lod_prem_v = $request[38][1];
            $csdb_prem_v = $request[41][1];
            $ccl_prem_v = $request[44][1];
            $other_desc_bi_v = $request[45][1];
            $other_prem_bi_v = $request[48][1];
            $other_desc_bi1_v = $request[49][1];
            $other_prem_bi1_v = $request[52][1];
            $other_desc_bi2_v = $request[53][1];
            $other_prem_bi2_v = $request[56][1];
            $other_desc_bi3_v = $request[57][1];
            $other_prem_bi3_v = $request[60][1];
            $other_desc_bi4_v = $request[61][1];
            $other_prem_bi4_v = $request[64][1];
            $tsi4bi_prem_v = $request[67][1];
            $ap4bi_prem_v = $request[70][1];
            $de4bi_limits_v = $request[71][1];
            $sub4bi_limits_v = $request[72][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'BANKERS INDEMNITY:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_bty_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Category: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Fidelity Guarantee',0,0,'L');
            $this->Cell(165,10,$fge_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Premises',0,0,'L');
            $this->Cell(165,10,$premises_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Transit',0,0,'L');
            $this->Cell(165,10,$transit_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Forged Cheques',0,0,'L');
            $this->Cell(165,10,$fc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Forged Securities',0,0,'L');
            $this->Cell(165,10,$cc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Counterfeit Currency',0,0,'L');
            $this->Cell(165,10,$doc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Damage to Office Contents',0,0,'L');
            $this->Cell(165,10,$los_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Loss Of Subscription',0,0,'L');
            $this->Cell(165,10,$pi_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Professional Indemnity',0,0,'L');
            $this->Cell(165,10,$rm_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Registered Mail',0,0,'L');
            $this->Cell(165,10,$lod_prem_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Loss Of Documents',0,0,'L');
            $this->Cell(165,10,$csdb_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Customer Safety Deposit Box',0,0,'L');
            $this->Cell(165,10,$ccl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_bi_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_bi1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bi1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_bi2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bi2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_bi3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bi3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_bi4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_bi4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED',0,0,'L');
            $this->Cell(165,10,$tsi4bi_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$ap4bi_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$de4bi_limits_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$sub4bi_limits_v,0,0,'R');
            $this->Ln(30);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['biprintform']));

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
    
    