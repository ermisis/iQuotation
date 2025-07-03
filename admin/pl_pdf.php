<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['plprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['plprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['plprintform']));

            $underwriter_pl_v = $request[1][1];
            $insured_pl_v = $request[2][1];
            $industry_pl_v = $request[3][1];
            $intermediary_pl_v = $request[4][1];
            $selectCurrency_pl_v = $request[5][1];
            $all_prem_v = $request[14][1];
            $bppl_prem_v = $request[17][1];
            $pl2_prem_v = $request[20][1];
            $tl_prem_v = $request[23][1];
            $cll_prem_v = $request[26][1];
            $ws_prem_v = $request[29][1];
            $other_desc_pl_v = $request[30][1];
            $other_prem_pl_v = $request[33][1];
            $other_desc_pl1_v = $request[34][1];
            $other_prem_pl1_v = $request[37][1];
            $other_desc_pl2_v = $request[38][1];
            $other_prem_pl2_v = $request[41][1];
            $other_desc_pl3_v = $request[42][1];
            $other_prem_pl3_v = $request[45][1];
            $other_desc_pl4_v = $request[46][1];
            $other_prem_pl4_v = $request[49][1];
            $premium_engo_pl_v = $request[52][1];
            $de_si_v = $request[53][1];
            $subject_si_v = $request[54][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'PUBLIC LIABILITY:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_pl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Operations - Per Incident: ',0,0,'L');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Aggregate Limit of Liability',0,0,'L');
            $this->Cell(165,10,$all_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Basic Premium',0,0,'L');
            $this->Cell(165,10,$bppl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Product Liability',0,0,'L');
            $this->Cell(165,10,$pl2_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Tenants Liability',0,0,'L');
            $this->Cell(165,10,$tl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Cross Liability',0,0,'L');
            $this->Cell(165,10,$cll_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            $this->Cell(165,10,$ws_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pl_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pl1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pl1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pl2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pl2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pl3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pl3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_pl4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_pl4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$premium_engo_pl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$de_si_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subject_si_v,0,0,'R');
            $this->Ln(50);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['plprintform']));

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