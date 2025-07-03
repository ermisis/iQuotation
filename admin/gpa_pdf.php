<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['gpaprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['gpaprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(20);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'GROUP PERSONAL ACCIDENT',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['gpaprintform']));

            $underwriter_gpa_v = $request[1][1];
            $selectCurrency_gpa_v = $request[5][1];
            $num_asc_v = $request[6][1];
            $insured_gpa_v = $request[2][1];
            $industry_gpa_v = $request[3][1];
            $intermediary_gpa_v = $request[4][1];
            $clerical_cs_v = $request[10][1];
            $nc_cs_v = $request[14][1];
            $mors_cs_v = $request[18][1];
            $artisans_cs_v = $request[22][1];
            $sormw_cs_v = $request[26][1];
            $total_cs_v = $request[30][1];
            $death_cs_v = $request[34][1];
            $pd_prem_v = $request[38][1];
            $td_prem_v = $request[42][1];
            $me_prem_v = $request[46][1];
            $death4_cs_v = $request[50][1];
            $pd4_prem_v = $request[54][1];
            $td4_prem_v = $request[58][1];
            $me4_prem_v = $request[62][1];
            $total_prems_v = $request[66][1];
            $gd4gpa_prem_v = $request[70][1];
            $ap4gpa_prem_v = $request[74][1];
            $deduc_terms = $request[75][1];
            $sub1_terms = $request[76][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'GROUP PERSONAL ACCIDENT:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_gpa_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Category/Designation: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Clerical',0,0,'L');
            $this->Cell(165,10,$clerical_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Non-Clerical',0,0,'L');
            $this->Cell(165,10,$nc_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Managers/Supervisors/Administrative',0,0,'L');
            $this->Cell(165,10,$mors_cs_v,0,0,'R');
            $this->Ln6(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Artisans',0,0,'L');
            $this->Cell(165,10,$artisans_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Security/Manual Workers',0,0,'L');
            $this->Cell(165,10,$sormw_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Total',0,0,'L');
            $this->Cell(165,10,$total_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',13);
            $this->Cell(20,10,'Death',0,0,'L');
            $this->Cell(165,10,$death_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Permanent Disablement',0,0,'L');
            $this->Cell(165,10,$pd_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Temporal Disablement',0,0,'L');
            $this->Cell(165,10,$td_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Medical Expense',0,0,'L');
            $this->Cell(165,10,$me_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Death',0,0,'L');
            $this->Cell(165,10,$death4_cs_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Permanent Disablement',0,0,'L');
            $this->Cell(165,10,$pd4_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Temporal Disablement',0,0,'L');
            $this->Cell(165,10,$td4_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Medical Expense',0,0,'L');
            $this->Cell(165,10,$me4_prem_v,0,0,'R');
            $this->Ln(10);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'TOTAL PREMIUM',0,0,'L');
            $this->Cell(165,10,$total_prems_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Group Discount: ',0,0,'L');
            $this->Cell(165,10,$gd4gpa_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Annual Premium: ',0,0,'L');
            $this->Cell(165,10,$ap4gpa_prem_v,0,0,'R');
            $this->Ln(6);
            $this->Cell(20,10,'DEDUCTIBLES: ',0,0,'L');
            $this->Cell(165,10,$deduc_terms,0,0,'R');
            $this->Ln(10);
            $this->Cell(20,10,'SUBJECTIVITIES: ',0,0,'L');
            $this->Cell(165,10,$sub1_terms,0,0,'R');
            $this->Ln(50);

        }

        function footer() {

            $request = json_decode(base64_decode($_GET['gpaprintform']));

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
    
    