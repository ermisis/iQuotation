<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['fgprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['fgprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['fgprintform']));

            $underwriter_fid_v = $request[1][1];
            $insured_fid_v = $request[2][1];
            $industry_fid_v = $request[3][1];
            $intermediary_fid_v = $request[4][1];
            $selectCurrency_fid_v = $request[5][1];
            $pcl2_prem_v = $request[11][1];
            $allfg_prem_v = $request[14][1];
            $other_desc_fg_v = $request[15][1];
            $other_prem_fg_v = $request[18][1];
            $other_desc_fg1_v = $request[19][1];
            $other_prem_fg1_v = $request[22][1];
            $other_desc_fg2_v = $request[23][1];
            $other_prem_fg2_v = $request[26][1];
            $other_desc_fg3_v = $request[27][1];
            $other_prem_fg3_v = $request[30][1];
            $other_desc_fg4_v = $request[31][1];
            $other_prem_fg4_v = $request[34][1];
            $ap4fg_prem_v = $request[37][1];
            $de4fg_si_v = $request[38][1];
            $sub4fg_si_v = $request[39][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'FIDELITY GUARANTEE:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_fid_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Category of Staff: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Per Occurrence Limit',0,0,'L');
            $this->Cell(165,10,$pcl2_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Aggregate Limit of Liability',0,0,'L');
            $this->Cell(165,10,$allfg_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fg_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fg_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fg1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fg1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fg2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fg2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fg3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fg3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_fg4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_fg4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$ap4fg_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$de4fg_si_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$sub4fg_si_v,0,0,'R');
            $this->Ln(30);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['fgprintform']));

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
    
    