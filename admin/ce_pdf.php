<?php 

    require('fpdf/fpdf.php');

    $request = json_decode(base64_decode($_GET['ceprintform']));

    // echo "<pre>";
    // print_r($request);
    // echo "</pre>";

    class myPDF extends FPDF {

        function header() {

            $request = json_decode(base64_decode($_GET['ceprintform']));

            $this->Image('img/whiteHollard.sm.jpg',160,2,'R');
            $this->Ln(15);
            
            // $this->SetFont('Arial','B',16);
            // $this->Cell(188,15,'MONEY INSURANCE',0,1,'C');
            // $this->Ln(10);

        }


        function headerContent() {
                        
            $request = json_decode(base64_decode($_GET['ceprintform']));

            $underwriter_ce_v = $request[1][1];
            $insured_ce_v = $request[2][1];
            $industry_ce_v = $request[3][1];
            $intermediary_ce_v = $request[4][1];
            $selectCurrency_ce_v = $request[5][1];
            $premium_cp_v = $request[8][1];
            $premium_tpl_v = $request[11][1];
            $premium_csp_v = $request[14][1];
            $premium_bpm_v = $request[17][1];
            $premium_rod_v = $request[20][1];
            $premium_md_v = $request[23][1];
            $premium_src_v = $request[26][1];
            $premium_cl_v = $request[29][1];
            $premium_72hc_v = $request[32][1];
            $premium_pf_v = $request[35][1];
            $premium_emc_v = $request[38][1];
            $premium_spy_v = $request[41][1];
            $premium_aisi_v = $request[44][1];
            $premium_rv_v = $request[47][1];
            $premium_arsi_v = $request[50][1];
            $premium_m50_v = $request[53][1];
            $premium_pa_v = $request[56][1];
            $premium_cpc_v = $request[59][1];
            $premium_ucp_v = $request[62][1];
            $premium_wos_v = $request[65][1];
            $premium_pdc_v = $request[68][1];
            $premium_msec_v = $request[71][1];
            $premium_eco_v = $request[74][1];
            $premium_ecfa_v = $request[77][1];
            $premium_poss_v = $request[80][1];
            $premium_esp_v = $request[83][1];
            $premium_wcc_v = $request[86][1];
            $premium_it_v = $request[89][1];
            $premium_epp_v = $request[92][1];
            $premium_vrws_v = $request[95][1];
            $others_one_v = $request[96][1];
            $others_one_prem_v = $request[99][1];
            $others_two_v = $request[100][1];
            $others_two_prem_v = $request[103][1];
            $others_three_v = $request[104][1];
            $others_three_prem_v = $request[107][1];
            $others_four_v = $request[108][1];
            $others_four_prem_v = $request[111][1];
            $others_five_v = $request[112][1];
            $others_five_prem_v = $request[115][1];
            $premium_ebp_v = $request[118][1];
            $premium_levy_v = $request[121][1];
            $premium_cert_v = $request[124][1];
            $premium_prem_v = $request[127][1];
            $contract_sum_ded_v = $request[128][1];
            $works_e_v = $request[129][1];
            $property_d_v = $request[130][1];
            $testing_v = $request[131][1];
            $others_v = $request[132][1];
            $contract_sum_sub_v = $request[133][1];

            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'ENGINEERING - CAR & EAR',0,0,'L');
            $this->Cell(165,10,$selectCurrency_ce_v,0,0,'R');
            $this->Ln();
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Description: ',0,0,'L');
            $this->Cell(165,10,'Premium',0,0,'R');
            $this->Ln();
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Contact Price',0,0,'L');
            $this->Cell(165,10,$premium_cp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Third Party Liability',0,0,'L');
            $this->Cell(165,10,$premium_tpl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Contractors Plant & Machinery',0,0,'L');
            $this->Cell(165,10,$premium_csp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Basic Premium',0,0,'L');
            $this->Cell(165,10,$premium_bpm_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Removal of Debris',0,0,'L');
            $this->Cell(165,10,$premium_rod_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Malicious Damage',0,0,'L');
            $this->Cell(165,10,$premium_md_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Strike, Riots and Civil Commotion',0,0,'L');
            $this->Cell(165,10,$premium_src_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Cross Liability',0,0,'L');
            $this->Cell(165,10,$premium_cl_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'72 Hour Clause',0,0,'L');
            $this->Cell(165,10,$premium_72hc_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Professional Fees',0,0,'L');
            $this->Cell(165,10,$premium_pf_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Extended Maintenance Cover',0,0,'L');
            $this->Cell(165,10,$premium_emc_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Surrounding Property',0,0,'L');
            $this->Cell(165,10,$premium_spy_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Automatic Increase - Sum Insured (20%)',0,0,'L');
            $this->Cell(165,10,$premium_aisi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Reinstatement Value',0,0,'L');
            $this->Cell(165,10,$premium_rv_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Automatic Reinstatement of Sum Insured',0,0,'L');
            $this->Cell(165,10,$premium_arsi_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Marine 50/50',0,0,'L');
            $this->Cell(165,10,$premium_m50_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Public Autorities',0,0,'L');
            $this->Cell(165,10,$premium_pa_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Claims Preparation Clause',0,0,'L');
            $this->Cell(165,10,$premium_cpc_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Underground Cables & Pipes',0,0,'L');
            $this->Cell(165,10,$premium_ucp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Waiver of Subrogation',0,0,'L');
            $this->Cell(165,10,$premium_wos_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Plans & Documents Clause',0,0,'L');
            $this->Cell(165,10,$premium_pdc_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Material on Site Extension Clause',0,0,'L');
            $this->Cell(165,10,$premium_msec_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Extra Charges for Overtime, Night Work etc',0,0,'L');
            $this->Cell(165,10,$premium_eco_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Extra Charges for Airfreight',0,0,'L');
            $this->Cell(165,10,$premium_ecfa_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Property in Off Site Storage',0,0,'L');
            $this->Cell(165,10,$premium_poss_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Existing / Surrounding Property',0,0,'L');
            $this->Cell(165,10,$premium_esp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Maintenance Visit',0,0,'L');
            $this->Cell(165,10,$premium_wcc_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Inland Transit',0,0,'L');
            $this->Cell(165,10,$premium_it_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Existing Property of Principal',0,0,'L');
            $this->Cell(165,10,$premium_epp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Vibration, Removal or Weakening of Support',0,0,'L');
            $this->Cell(165,10,$premium_vrws_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$others_one_v,0,0,'L');
            $this->Cell(165,10,$others_one_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$others_two_v,0,0,'L');
            $this->Cell(165,10,$others_two_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$others_three_v,0,0,'L');
            $this->Cell(165,10,$others_three_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$others_four_v,0,0,'L');
            $this->Cell(165,10,$others_four_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,$others_five_v,0,0,'L');
            $this->Cell(165,10,$others_five_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Basic Premium',0,0,'L');
            $this->Cell(165,10,$premium_ebp_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Levy',0,0,'L');
            $this->Cell(165,10,$premium_levy_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Certificate',0,0,'L');
            $this->Cell(165,10,$premium_cert_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','B',12);
            $this->Cell(20,10,'Premium',0,0,'L');
            $this->Cell(165,10,$premium_prem_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'DEDUCTIBLES',0,0,'L');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Natural Perils',0,0,'L');
            $this->Cell(165,10,$contract_sum_ded_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Works/Erection',0,0,'L');
            $this->Cell(165,10,$works_e_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Property Damage',0,0,'L');
            $this->Cell(165,10,$property_d_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Testing',0,0,'L');
            $this->Cell(165,10,$testing_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Others',0,0,'L');
            $this->Cell(165,10,$others_v,0,0,'R');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'Natural Perils',0,0,'L');
            $this->Ln(6);
            $this->SetFont('Times','',12);
            $this->Cell(20,10,'SUBJECTIVITIES',0,0,'L');
            $this->Cell(165,10,$contract_sum_sub_v,0,0,'R');
            $this->Ln();

        }

        function footer() {

            // $request = json_decode(base64_decode($_GET['ceprintform']));

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