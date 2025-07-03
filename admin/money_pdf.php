<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['moneyprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['moneyprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(20);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['moneyprintform']));

            $underwriter_m_v = $request[1][1];
            $insured_m_v = $request[2][1];
            $industry_m_v = $request[3][1];
            $intermediary_m_v = $request[4][1];
            $selectCurrency_m_v = $request[5][1];
            $ptl_prem_v = $request[8][1];
            $ac_prem_v = $request[11][1];
            $loi_cis_prem_v = $request[14][1];
            $loi_hp_prem_v = $request[17][1];
            $other_desc_mi_v = $request[18][1];
            $other_desc_mi1_v = $request[22][1];
            $other_desc_mi2_v = $request[26][1];
            $other_prem_mi_v = $request[21][1];
            $other_prem_mi1_v = $request[25][1];
            $other_prem_mi2_v = $request[29][1];
            $ap_money_prem_v = $request[32][1];
            $de_money_si_v = $request[33][1];
            $sub_money_si_v = $request[34][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'MONEY INSURANCE:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_m_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Category/Designation: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Per Transit Limit',0,0,'L');
            $this->Cell(165,10,$ptl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Carriage',0,0,'L');
            $this->Cell(165,10,$ac_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Limit of Indemnity',0,0,'L');
            $this->Cell(165,10,$loi_cis_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Limit of Indemnity',0,0,'L');
            $this->Cell(165,10,$loi_hp_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mi_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_mi1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mi1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,$other_desc_mi2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_mi2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$ap_money_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$de_money_si_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$sub_money_si_v,0,0,'R');
            $this->Ln(30);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['moneyprintform']));

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
    
    