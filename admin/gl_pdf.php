<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['glprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['glprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['glprintform']));

            $underwriter_gl_v = $request[1][1];
            $insured_gl_v = $request[2][1];
            $industry_gl_v = $request[3][1];
            $intermediary_gl_v = $request[4][1];
            $selectCurrency_gl_v = $request[5][1];
            $pl4gl_prem_v = $request[8][1];
            $plt_prem_v = $request[11][1];
            $plll_prem_v = $request[14][1];
            $all4gl_prem_v = $request[17][1];
            $bppl4gl_prem_v = $request[20][1];
            $pl24pl_prem_v = $request[23][1];
            $tl4pl_prem_v = $request[26][1];
            $cl4pl_prem_v = $request[29][1];
            $ws4pl_prem_v = $request[32][1];
            $defw_prem_v = $request[35][1];
            $pfl_prem_v = $request[38][1];
            $pig_prem_v = $request[41][1];
            $rel_prem_v = $request[44][1];
            $sldc_prem_v = $request[47][1];
            $wad_prem_v = $request[50][1];
            $other_desc_gl_v = $request[51][1];
            $other_prem_gl_v = $request[54][1];
            $other_desc_gl1_v = $request[55][1];
            $other_prem_gl1_v = $request[58][1];
            $other_desc_gl2_v = $request[59][1];
            $other_prem_gl2_v = $request[62][1];
            $other_desc_gl3_v = $request[63][1];
            $other_prem_gl3_v = $request[66][1];
            $other_desc_gl4_v = $request[67][1];
            $other_prem_gl4_v = $request[70][1];
            $tapg_prem_v = $request[73][1];
            $premium_engo_pl4pl_v = $request[76][1];
            $de_si4pl_v = $request[77][1];
            $subject4pl_si_v = $request[78][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'GENERAL LIABILITY:',0,0,'L');
            $this->Cell(165,10,$selectCurrency_gl_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Public Liability',0,0,'L');
            $this->Cell(165,10,$pl4gl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Product Liability',0,0,'L');
            $this->Cell(165,10,$plt_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Pollution Liability',0,0,'L');
            $this->Cell(165,10,$plll_prem_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Aggregate Limit of Liability',0,0,'L');
            $this->Cell(165,10,$all4gl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Basic Premium',0,0,'L');
            $this->Cell(165,10,$bppl4gl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Product Liability',0,0,'L');
            $this->Cell(165,10,$pl24pl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Tenants Liability',0,0,'L');
            $this->Cell(165,10,$tl4pl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Cross Liability',0,0,'L');
            $this->Cell(165,10,$cl4pl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Waiver of subrogation',0,0,'L');
            $this->Cell(165,10,$ws4pl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Defective Workmanship',0,0,'L');
            $this->Cell(165,10,$defw_prem_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Pure Financial Loss',0,0,'L');
            $this->Cell(165,10,$pfl_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Personal Injury',0,0,'L');
            $this->Cell(165,10,$pig_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Residual Employers Liability',0,0,'L');
            $this->Cell(165,10,$rel_prem_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Statutory Legal Defense Costs',0,0,'L');
            $this->Cell(165,10,$sldc_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Wrongful Arrest & Defamation',0,0,'L');
            $this->Cell(165,10,$wad_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_gl_v,0,0,'L');
            $this->Cell(165,10,$other_prem_gl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_gl1_v,0,0,'L');
            $this->Cell(165,10,$other_prem_gl1_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_gl2_v,0,0,'L');
            $this->Cell(165,10,$other_prem_gl2_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_gl3_v,0,0,'L');
            $this->Cell(165,10,$other_prem_gl3_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$other_desc_gl4_v,0,0,'L');
            $this->Cell(165,10,$other_prem_gl4_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Total Additional Premium',0,0,'L');
            $this->Cell(165,10,$tapg_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Annual Premium',0,0,'L');
            $this->Cell(165,10,$premium_engo_pl4pl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Deductibles',0,0,'L');
            $this->Cell(165,10,$de_si4pl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Subjectivities',0,0,'L');
            $this->Cell(165,10,$subject4pl_si_v,0,0,'R');
            $this->Ln(50);

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['glprintform']));

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