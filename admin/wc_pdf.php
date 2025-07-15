<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['wcprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['wcprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'WORKMENS COMPENSATION QUOTATION',0,1,'C');
            // $this->Ln(10);

        }

        // function headerTable() {
                        
        //     $request = json_decode(base64_decode($_GET['wcprintform']));

        //     $selectCurrency_wc_v = $request[6][1];
        //     $this->SetFont('Times','B',12);
        //     $this->Cell(20,10,'Assets All Risks,',0,0,'L');
        //     $this->Cell(130,10,$selectCurrency_wc_v,0,0,'R');
        //     $this->Ln(10);

        // }

        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['wcprintform']));

            $heo_v = $request[0][1];
            $underwriter_wc_v = $request[2][1];
            $industry_wc_v = $request[4][1];
            $total_prem_v = $request[71][1];
            $ap_prem_v = $request[137][1];
            $selectCurrency_wc_v = $request[6][1];
            $clerical_prem_v = $request[7][1];
            $nonclerical_prem_v = $request[20][1];
            $msd_prem_v = $request[27][1];
            $tech_prem_v = $request[34][1];
            $smldm_prem_v = $request[41][1];
            $artpe_prem_v = $request[48][1];
            $other_num_v = $request[49][1];
            $other_prem_v = $request[56][1];
            $other1_num_v = $request[57][1];
            $other1_prem_v = $request[64][1];
            $mel_prem_v = $request[78][1];
            $coll_prem_v = $request[93][1];
            $tfw_prem_v = $request[108][1];
            $gd_prem_v = $request[123][1];
            $dep_prem_v = $request[130][1];
            $sub_num_v = $request[138][1];
            $sub_num2_v = $request[139][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'WORKMENS COMPENSATION:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_wc_v,0,0,'R');
            $this->Ln(10);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description of Staff: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Clerical',0,0,'L');
            $this->Cell(165,10,$clerical_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Non-Clerical',0,0,'L');
            $this->Cell(165,10,$nonclerical_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Managers/Supervisors/Administrative',0,0,'L');
            $this->Cell(165,10,$msd_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Technical',0,0,'L');
            $this->Cell(165,10,$tech_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Security/Manual Labour/Driver/Mining',0,0,'L');
            $this->Cell(165,10,$smldm_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Artisans - Plumbing/Electrcians',0,0,'L');
            $this->Cell(165,10,$artpe_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_num_v,0,0,'L');
            $this->Cell(165,10,$other_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other1_num_v,0,0,'L');
            $this->Cell(165,10,$other1_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Medical Expense Loading',0,0,'L');
            $this->Cell(165,10,$mel_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Common Law Loading',0,0,'L');
            $this->Cell(165,10,$coll_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'To & Fro Work',0,0,'L');
            $this->Cell(165,10,$tfw_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Group Discount',0,0,'L');
            $this->Cell(165,10,$gd_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deposit Premium',0,0,'L');
            $this->Cell(165,10,$dep_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$sub_num_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$sub_num2_v,0,0,'R');
            $this->Ln(10);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'HEO: ',0,0,'L');
            $this->Cell(165,10,$heo_v,0,0,'R');
            $this->Ln(6);
            $this->Cell(20,10,'TOTAL: ',0,0,'L');
            $this->Cell(165,10,$total_prem_v,0,0,'R');
            $this->Ln(6);
            $this->Cell(20,10,'Annual Premium: ',0,0,'L');
            $this->Cell(165,10,$ap_prem_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            $request = json_decode(base64_decode($_GET['wcprintform']));

            $this->SetY(-15);
            $this->SetFont('Arial','',8);
            $this->Cell(0,10,'Page'.$this->PageNo().'/{nb}',0,0,'C');
            
        }
        
    }

    $pdf = new myPDF();
    $pdf->AliasNbPages();
    $pdf->AddPage('P','A4',0);
    // $pdf->headerTable();
    $pdf->headerContent();
    $pdf->Output();
    
    