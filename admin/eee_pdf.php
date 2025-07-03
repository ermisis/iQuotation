<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['eeeprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['eeeprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['eeeprintform']));

            $underwriter_ee_v = $request[1][1];
            $insured_ee_v = $request[2][1];
            $industry_ee_v = $request[3][1];
            $intermediary_ee_v = $request[4][1];
            $selectCurrency_ee_v = $request[5][1];
            $premium_tsi_eo_v = $request[8][1];
            $premium_srcc_eo_v = $request[11][1];
            $premium_oef_eo_v = $request[14][1];
            $premium_airfreight_eo_v = $request[17][1];
            $premium_theft_v = $request[20][1];
            $premium_mpq_v = $request[23][1];
            $other_desc_ee_v = $request[24][1];
            $other_prem_ee_v = $request[27][1];
            $other_desc_ee1_v = $request[28][1];
            $other_prem_ee1_v = $request[31][1];
            $other_desc_ee2_v = $request[32][1];
            $other_prem_ee2_v = $request[35][1];
            $other_desc_ee3_v = $request[36][1];
            $other_prem_ee3_v = $request[39][1];
            $other_desc_ee4_v = $request[40][1];
            $other_prem_ee4_v = $request[43][1];
            $premium_engo_ap2_v = $request[46][1];
            $nrv_deduct2_v = $request[47][1];
            $nrv_subject2_v = $request[48][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'ENGINEERING - ELECTRONIC EQUIPMENT:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_ee_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'TOTAL SUM INSURED',0,0,'L');
            $this->Cell(165,10,$premium_tsi_eo_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Strikes, Riot and Civil Commotion',0,0,'L');
            $this->Cell(165,10,$premium_srcc_eo_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Overtime, Night Work & Express Freight',0,0,'L');
            $this->Cell(165,10,$premium_oef_eo_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Airfreight',0,0,'L');
            $this->Cell(165,10,$premium_airfreight_eo_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Theft',0,0,'L');
            $this->Cell(165,10,$premium_theft_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Mobile & Portable Equipment',0,0,'L');
            $this->Cell(165,10,$premium_mpq_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_ee_v,0,0,'L');
            $this->Cell(165,10,$other_prem_ee_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_ee1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_ee1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_ee2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_ee2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_ee3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_ee3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_ee4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_ee4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$premium_engo_ap2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$nrv_deduct2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$nrv_subject2_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['eeeprintform']));

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