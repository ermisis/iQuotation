  <!-- Bootstrap core JavaScript-->
  <script src="/table/admin/vendor/jquery/jquery.min.js"></script>
  <script src="/table/admin/vendor/bootstrap/js/popper.min.js"></script>
  <script src="/table/admin/vendor/bootstrap/js/bootstrap.min.js"></script>
  <script src="/table/admin/vendor/datatables/jquery.dataTables.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="/table/admin/vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="/table/admin/js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="/table/admin/vendor/chart.js/Chart.min.js"></script>

  <!-- Page level custom scripts -->
  <!--  <script src="/table/vendor/js/demo/chart-area-demo.js"></script>-->
  <!--  <script src="/table/vendor/js/demo/chart-pie-demo.js"></script>-->


  <!-- Bootstrap Online JavaScript & Bootstrap Plugins -->
<!--  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
  <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>


  <!-- Bootstrap core JavaScript -->
  <!--
    <script src="vendor/jquery/jquery.slim.min.js"></script>
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/datatable/jquery.dataTables.min.js"></script>
    <script src="js/functions.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <script src="vendor/bootstrap-table-master/dist/bootstrap-table.min.js"></script>

-->


<!-- MY MAIN JS FUNCTIONS LINK -->
  <script type="text/javaScript" src="/table/js/functions.js"></script>

  <!-- ENGINEERING - CAR & EAR -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#ce_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#ce_table').DataTable();

          $('#ce_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("id_ce_v").value = data[0];
              document.getElementById("underwriter_ce_v").value = data[1];
              document.getElementById("insured_ce_v").value = data[2];
              document.getElementById("industry_ce_v").value = data[3];
              document.getElementById("intermediary_ce_v").value = data[4];
              document.getElementById("selectCurrency_ce_v").value = data[5];
              document.getElementById("contract_sum_cp_v").value = data[6];
              document.getElementById("rate_cp_v").value = data[7];
              document.getElementById("premium_cp_v").value = data[8];
              document.getElementById("contract_sum_tpl_v").value = data[9];
              document.getElementById("rate_tpl_v").value = data[10];
              document.getElementById("premium_tpl_v").value = data[11];
              document.getElementById("contract_sum_csp_v").value = data[12];
              document.getElementById("rate_csp_v").value = data[13];
              document.getElementById("premium_csp_v").value = data[14];
              document.getElementById("contract_sum_bpm_v").value = data[15];
              document.getElementById("rate_bpm_v").value = data[16];
              document.getElementById("premium_bpm_v").value = data[17];
              document.getElementById("contract_sum_rod_v").value = data[18];
              document.getElementById("rate_rod_v").value = data[19];
              document.getElementById("premium_rod_v").value = data[20];
              document.getElementById("contract_sum_md_v").value = data[21];
              document.getElementById("rate_md_v").value = data[22];
              document.getElementById("premium_md_v").value = data[23];
              document.getElementById("contract_sum_src_v").value = data[24];
              document.getElementById("rate_src_v").value = data[25];
              document.getElementById("premium_src_v").value = data[26];
              document.getElementById("contract_sum_cl_v").value = data[27];
              document.getElementById("rate_cl_v").value = data[28];
              document.getElementById("premium_cl_v").value = data[29];
              document.getElementById("contract_sum_72hc_v").value = data[30];
              document.getElementById("rate_72hc_v").value = data[31];
              document.getElementById("premium_72hc_v").value = data[32];
              document.getElementById("contract_sum_pf_v").value = data[33];
              document.getElementById("rate_pf_v").value = data[34];
              document.getElementById("premium_pf_v").value = data[35];
              document.getElementById("contract_sum_emc_v").value = data[36];
              document.getElementById("rate_emc_v").value = data[37];
              document.getElementById("premium_emc_v").value = data[38];
              document.getElementById("contract_sum_spy_v").value = data[39];
              document.getElementById("rate_spy_v").value = data[40];
              document.getElementById("premium_spy_v").value = data[41];
              document.getElementById("contract_sum_aisi_v").value = data[42];
              document.getElementById("rate_aisi_v").value = data[43];
              document.getElementById("premium_aisi_v").value = data[44];
              document.getElementById("contract_sum_rv_v").value = data[45];
              document.getElementById("rate_rv_v").value = data[46];
              document.getElementById("premium_rv_v").value = data[47];
              document.getElementById("contract_sum_arsi_v").value = data[48];
              document.getElementById("rate_arsi_v").value = data[49];
              document.getElementById("premium_arsi_v").value = data[50];
              document.getElementById("contract_sum_m50_v").value = data[51];
              document.getElementById("rate_m50_v").value = data[52];
              document.getElementById("premium_m50_v").value = data[53];
              document.getElementById("contract_sum_pa_v").value = data[54];
              document.getElementById("rate_pa_v").value = data[55];
              document.getElementById("premium_pa_v").value = data[56];
              document.getElementById("contract_sum_cpc_v").value = data[57];
              document.getElementById("rate_cpc_v").value = data[58];
              document.getElementById("premium_cpc_v").value = data[59];
              document.getElementById("contract_sum_ucp_v").value = data[60];
              document.getElementById("rate_ucp_v").value = data[61];
              document.getElementById("premium_ucp_v").value = data[62];
              document.getElementById("contract_sum_wos_v").value = data[63];
              document.getElementById("rate_wos_v").value = data[64];
              document.getElementById("premium_wos_v").value = data[65];
              document.getElementById("contract_sum_pdc_v").value = data[66];
              document.getElementById("rate_pdc_v").value = data[67];
              document.getElementById("premium_pdc_v").value = data[68];
              document.getElementById("contract_sum_msec_v").value = data[69];
              document.getElementById("rate_msec_v").value = data[70];
              document.getElementById("premium_msec_v").value = data[71];
              document.getElementById("contract_sum_eco_v").value = data[72];
              document.getElementById("rate_eco_v").value = data[73];
              document.getElementById("premium_eco_v").value = data[74];
              document.getElementById("contract_sum_ecfa_v").value = data[75];
              document.getElementById("rate_ecfa_v").value = data[76];
              document.getElementById("premium_ecfa_v").value = data[77];
              document.getElementById("contract_sum_poss_v").value = data[78];
              document.getElementById("rate_poss_v").value = data[79];
              document.getElementById("premium_poss_v").value = data[80];
              document.getElementById("contract_sum_esp_v").value = data[81];
              document.getElementById("rate_esp_v").value = data[82];
              document.getElementById("premium_esp_v").value = data[83];
              document.getElementById("contract_sum_wcc_v").value = data[84];
              document.getElementById("rate_wcc_v").value = data[85];
              document.getElementById("premium_wcc_v").value = data[86];
              document.getElementById("contract_sum_it_v").value = data[87];
              document.getElementById("rate_it_v").value = data[88];
              document.getElementById("premium_it_v").value = data[89];
              document.getElementById("contract_sum_epp_v").value = data[90];
              document.getElementById("rate_epp_v").value = data[91];
              document.getElementById("premium_epp_v").value = data[92];
              document.getElementById("contract_sum_vrws_v").value = data[93];
              document.getElementById("rate_vrws_v").value = data[94];
              document.getElementById("premium_vrws_v").value = data[95];
              document.getElementById("others_one_v").value = data[96];
              document.getElementById("others_one_sum_v").value = data[97];
              document.getElementById("others_one_rate_v").value = data[98];
              document.getElementById("others_one_prem_v").value = data[99];
              document.getElementById("others_two_v").value = data[100];
              document.getElementById("others_two_sum_v").value = data[101];
              document.getElementById("others_two_rate_v").value = data[102];
              document.getElementById("others_two_prem_v").value = data[103];
              document.getElementById("others_three_v").value = data[104];
              document.getElementById("others_three_sum_v").value = data[105];
              document.getElementById("others_three_rate_v").value = data[106];
              document.getElementById("others_three_prem_v").value = data[107];
              document.getElementById("others_four_v").value = data[108];
              document.getElementById("others_four_sum_v").value = data[109];
              document.getElementById("others_four_rate_v").value = data[110];
              document.getElementById("others_four_prem_v").value = data[111];
              document.getElementById("others_five_v").value = data[112];
              document.getElementById("others_five_sum_v").value = data[113];
              document.getElementById("others_five_rate_v").value = data[114];
              document.getElementById("others_five_prem_v").value = data[115];
              document.getElementById("contract_sum_ebp_v").value = data[116];
              document.getElementById("rate_ebp_v").value = data[117];
              document.getElementById("premium_ebp_v").value = data[118];
              document.getElementById("contract_sum_levy_v").value = data[119];
              document.getElementById("rate_levy_v").value = data[120];
              document.getElementById("premium_levy_v").value = data[121];
              document.getElementById("contract_sum_cert").value = data[122];
              document.getElementById("rate_cert_v").value = data[123];
              document.getElementById("premium_cert_v").value = data[124];
              document.getElementById("contract_sum_prem_v").value = data[125];
              document.getElementById("rate_prem_v").value = data[126];
              document.getElementById("premium_prem_v").value = data[127];
              document.getElementById("contract_sum_ded_v").value = data[128];
              document.getElementById("works_e_v").value = data[129];
              document.getElementById("property_d_v").value = data[130];
              document.getElementById("testing_v").value = data[131];
              document.getElementById("others_v").value = data[132];
              document.getElementById("contract_sum_sub_v").value = data[133];
              $("#addquote_ce").modal("show");
          });
      });

  </script>
  <!-- ENGINEERING - CAR & EAR -->


  <!-- ENG - PLANT & MACHINERY (NRB) -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#nrv_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#nrv_table').DataTable();

          $('#nrv_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("pm_id_v").value = data[0];
              document.getElementById("underwriter_pm_v").value = data[1];
              document.getElementById("insured_pm_v").value = data[2];
              document.getElementById("industry_pm_v").value = data[3];
              document.getElementById("intermediary_pm_v").value = data[4];
              document.getElementById("selectCurrency_pm_v").value = data[5];
              document.getElementById("new_replacement_value_tsi_v").value = data[6];
              document.getElementById("rate_tsi_v").value = data[7];
              document.getElementById("premium_tsi_v").value = data[8];
              document.getElementById("other_desc_pm_v").value = data[9];
              document.getElementById("other_nrv_pm_v").value = data[10];
              document.getElementById("other_rate_pm_v").value = data[11];
              document.getElementById("other_prem_pm_v").value = data[12];
              document.getElementById("other_desc_pm1_v").value = data[13];
              document.getElementById("other_nrv_pm1_v").value = data[14];
              document.getElementById("other_rate_pm1_v").value = data[15];
              document.getElementById("other_prem_pm1_v").value = data[16];
              document.getElementById("other_desc_pm2_v").value = data[17];
              document.getElementById("other_nrv_pm2_v").value = data[18];
              document.getElementById("other_rate_pm2_v").value = data[19];
              document.getElementById("other_prem_pm2_v").value = data[20];
              document.getElementById("other_desc_pm3_v").value = data[21];
              document.getElementById("other_nrv_pm3_v").value = data[22];
              document.getElementById("other_rate_pm3_v").value = data[23];
              document.getElementById("other_prem_pm3_v").value = data[24];
              document.getElementById("other_desc_pm4_v").value = data[25];
              document.getElementById("other_nrv_pm4_v").value = data[26];
              document.getElementById("other_rate_pm4_v").value = data[27];
              document.getElementById("other_prem_pm4_v").value = data[28];
              document.getElementById("ap_nrv_v").value = data[29];
              document.getElementById("ap_rate_v").value = data[30];
              document.getElementById("ap_premium_v").value = data[31];
              document.getElementById("pm_np_v").value = data[32];
              document.getElementById("nrv_sub_v").value = data[33];
              $("#view_eng_nrv").modal("show");
          });
      });

  </script>
  <!-- ENG - PLANT & MACHINERY (NRV)-->
  
  
  <!-- ENG - PLANT & MACHINERY (INDEMNITY) -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#pmi_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#pmi_table').DataTable();

          $('#pmi_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("pmi_id_v").value = data[0];
              document.getElementById("underwriter_pmi_v").value = data[1];
              document.getElementById("insured_pmi_v").value = data[2];
              document.getElementById("industry_pmi_v").value = data[3];
              document.getElementById("intermediary_pmi_v").value = data[4];
              document.getElementById("selectCurrency_pm_v").value = data[5];
              document.getElementById("market_value_tsi_v").value = data[6];
              document.getElementById("rate_mv_tsi_v").value = data[7];
              document.getElementById("premium_mv_tsi_v").value = data[8];
              document.getElementById("other_desc_pmi_v").value = data[9];
              document.getElementById("other_nrv_pmi_v").value = data[10];
              document.getElementById("other_rate_pmi_v").value = data[11];
              document.getElementById("other_prem_pmi_v").value = data[12];
              document.getElementById("other_desc_pmi1_v").value = data[13];
              document.getElementById("other_nrv_pmi1_v").value = data[14];
              document.getElementById("other_rate_pmi1_v").value = data[15];
              document.getElementById("other_prem_pmi1_v").value = data[16];
              document.getElementById("other_desc_pmi2_v").value = data[17];
              document.getElementById("other_nrv_pmi2_v").value = data[18];
              document.getElementById("other_rate_pmi2_v").value = data[19];
              document.getElementById("other_prem_pmi2_v").value = data[20];
              document.getElementById("other_desc_pmi3_v").value = data[21];
              document.getElementById("other_nrv_pmi3_v").value = data[22];
              document.getElementById("other_rate_pmi3_v").value = data[23];
              document.getElementById("other_prem_pmi3_v").value = data[24];
              document.getElementById("other_desc_pmi4_v").value = data[25];
              document.getElementById("other_nrv_pmi4_v").value = data[26];
              document.getElementById("other_rate_pmi4_v").value = data[27];
              document.getElementById("other_prem_pmi4_v").value = data[28];
              document.getElementById("ap_mkv_v").value = data[29];
              document.getElementById("ap_rate_mv_v").value = data[30];
              document.getElementById("ap_premium_mv_v").value = data[31];
              document.getElementById("pmi_np_v").value = data[32];
              document.getElementById("mv_sub_v").value = data[33];
              $("#view_eng_pmi").modal("show");
          });
      });

  </script>
  <!-- ENG - PLANT & MACHINERY -->
  

  <!-- ENG - MACHINERY BREAKDOWN  -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#mb_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#mb_table').DataTable();

          $('#mb_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("id_mb_v").value = data[0];
              document.getElementById("underwriter_mb_v").value = data[1];
              document.getElementById("insured_mb_v").value = data[2];
              document.getElementById("industry_mb_v").value = data[3];
              document.getElementById("intermediary_mb_v").value = data[4];
              document.getElementById("selectCurrency_mb_v").value = data[5];
              document.getElementById("new_replacement_value_tsi2_v").value = data[6];
              document.getElementById("rate_tsi2_v").value = data[7];
              document.getElementById("premium_tsi2_v").value = data[8];
              document.getElementById("nrv_srcc_v").value = data[9];
              document.getElementById("rate_srcc_v").value = data[10];
              document.getElementById("premium_srcc_v").value = data[11];
              document.getElementById("nrv_oef_v").value = data[12];
              document.getElementById("rate_oef_v").value = data[13];
              document.getElementById("premium_oef_v").value = data[14];
              document.getElementById("nrv_airfreight_v").value = data[15];
              document.getElementById("rate_airfreight_v").value = data[16];
              document.getElementById("premium_airfreight_v").value = data[17];
              document.getElementById("nrv_sptpl_v").value = data[18];
              document.getElementById("rate_sptpl_v").value = data[19];
              document.getElementById("premium_sptpl_v").value = data[20];
              document.getElementById("other_desc_mb_v").value = data[21];
              document.getElementById("other_nrv_mb_v").value = data[22];
              document.getElementById("other_rate_mb_v").value = data[23];
              document.getElementById("other_prem_mb_v").value = data[24];
              document.getElementById("other_desc_mb1_v").value = data[25];
              document.getElementById("other_nrv_mb1_v").value = data[26];
              document.getElementById("other_rate_mb1_v").value = data[27];
              document.getElementById("other_prem_mb1_v").value = data[28];
              document.getElementById("other_desc_mb2_v").value = data[29];
              document.getElementById("other_nrv_mb2_v").value = data[30];
              document.getElementById("other_rate_mb2_v").value = data[31];
              document.getElementById("other_prem_mb2_v").value = data[32];
              document.getElementById("other_desc_mb3_v").value = data[33];
              document.getElementById("other_nrv_mb3_v").value = data[34];
              document.getElementById("other_rate_mb3_v").value = data[35];
              document.getElementById("other_prem_mb3_v").value = data[36];
              document.getElementById("other_desc_mb4_v").value = data[37];
              document.getElementById("other_nrv_mb4_v").value = data[38];
              document.getElementById("other_rate_mb4_v").value = data[39];
              document.getElementById("other_prem_mb4_v").value = data[40];
              document.getElementById("nrv_engo_ap_v").value = data[41];
              document.getElementById("rate_engo_ap_v").value = data[42];
              document.getElementById("premium_engo_ap_v").value = data[43];
              document.getElementById("mb_deduct_v").value = data[44];
              document.getElementById("nrv_subject_v").value = data[45];
              $("#view_eng_mb").modal("show");
          });
      });

  </script>
  <!-- ENG - MACHINERY BREAKDOWN -->
  
  
  <!-- ENG - ELECTRONIC EQUIPMENT  -->
  <script type="text/javascript">
        $(document).ready(function() {
            $('#ee_table').DataTable({
                "info": false,
                "responsive": true,
                "order": [
                    [0, "desc"]
                ],
                "columnDefs": [{
                    "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                    "visible": false,
                    "searchable": false
                }]
            });

            var table = $('#ee_table').DataTable();

            $('#ee_table tbody').on('dblclick', 'tr', function(e) {
                e.preventDefault();
                var data = table.row(this).data();
                document.getElementById("ee_id_v").value = data[0];
                document.getElementById("underwriter_ee_v").value = data[1];
                document.getElementById("insured_ee_v").value = data[2];
                document.getElementById("industry_ee_v").value = data[3];
                document.getElementById("intermediary_ee_v").value = data[4];
                document.getElementById("selectCurrency_ee_v").value = data[5];
                document.getElementById("nrv_tsi_eo_v").value = data[6];
                document.getElementById("rate_tsi_eo_v").value = data[7];
                document.getElementById("premium_tsi_eo_v").value = data[8];
                document.getElementById("nrv_srcc_eo_v").value = data[9];
                document.getElementById("rate_srcc_eo_v").value = data[10];
                document.getElementById("premium_srcc_eo_v").value = data[11];
                document.getElementById("nrv_oef_eo_v").value = data[12];
                document.getElementById("rate_oef_eo_v").value = data[13];
                document.getElementById("premium_oef_eo_v").value = data[14];
                document.getElementById("nrv_airfreight_eo_v").value = data[15];
                document.getElementById("rate_airfreight_eo_v").value = data[16];
                document.getElementById("premium_airfreight_eo_v").value = data[17];
                document.getElementById("nrv_theft_v").value = data[18];
                document.getElementById("rate_theft_v").value = data[19];
                document.getElementById("premium_theft_v").value = data[20];
                document.getElementById("nrv_mpq_v").value = data[21];
                document.getElementById("rate_mpq_v").value = data[22];
                document.getElementById("premium_mpq_v").value = data[23];
                document.getElementById("other_desc_ee_v").value = data[24];
                document.getElementById("other_nrv_ee_v").value = data[25];
                document.getElementById("other_rate_ee_v").value = data[26];
                document.getElementById("other_prem_ee_v").value = data[27];
                document.getElementById("other_desc_ee1_v").value = data[28];
                document.getElementById("other_nrv_ee1_v").value = data[29];
                document.getElementById("other_rate_ee1_v").value = data[30];
                document.getElementById("other_prem_ee1_v").value = data[31];
                document.getElementById("other_desc_ee2_v").value = data[32];
                document.getElementById("other_nrv_ee2_v").value = data[33];
                document.getElementById("other_rate_ee2_v").value = data[34];
                document.getElementById("other_prem_ee2_v").value = data[35];
                document.getElementById("other_desc_ee3_v").value = data[36];
                document.getElementById("other_nrv_ee3_v").value = data[37];
                document.getElementById("other_rate_ee3_v").value = data[38];
                document.getElementById("other_prem_ee3_v").value = data[39];
                document.getElementById("other_desc_ee4_v").value = data[40];
                document.getElementById("other_nrv_ee4_v").value = data[41];
                document.getElementById("other_rate_ee4_v").value = data[42];
                document.getElementById("other_prem_ee4_v").value = data[43];
                document.getElementById("nrv_engo_ap2_v").value = data[44];
                document.getElementById("rate_engo_ap2_v").value = data[45];
                document.getElementById("premium_engo_ap2_v").value = data[46];
                document.getElementById("nrv_deduct2_v").value = data[47];
                document.getElementById("nrv_subject2_v").value = data[48];
                $("#view_eng_ee").modal("show");
            });
        });
    </script>
  <!-- ENG - ELECTRONIC EQUIPMENT -->
  
  
  <!-- ENG - ASSETS ALL RISKS -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#aar_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#aar_table').DataTable();

          $('#aar_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("aar_id_v").value = data[0];
              document.getElementById("underwriter_comb_v").value = data[1];
              document.getElementById("insured_aar_v").value = data[2];
              document.getElementById("industry_aar_v").value = data[3];
              document.getElementById("intermediary_aar_v").value = data[4];
              document.getElementById("selectCurrency_aar_v").value = data[5];
              document.getElementById("building_si_v").value = data[6];
              document.getElementById("building_rate_v").value = data[7];
              document.getElementById("building_prem_v").value = data[8];
              document.getElementById("fencewall_si_v").value = data[9];
              document.getElementById("fencewall_rate_v").value = data[10];
              document.getElementById("fencewall_prem_v").value = data[11];
              document.getElementById("finshed_goods_si_v").value = data[12];
              document.getElementById("finshed_goods_rate_v").value = data[13];
              document.getElementById("finshed_goods_prem_v").value = data[14];
              document.getElementById("wrknprogres_si_v").value = data[15];
              document.getElementById("wrknprogres_rate_v").value = data[16];
              document.getElementById("wrknprogres_prem_v").value = data[17];
              document.getElementById("fff_si_v").value = data[18];
              document.getElementById("fff_rate_v").value = data[19];
              document.getElementById("fff_prem_v").value = data[20];
              document.getElementById("furnish_si_v").value = data[21];
              document.getElementById("furnish_rate_v").value = data[22];
              document.getElementById("furnish_prem_v").value = data[23];
              document.getElementById("eea_si_v").value = data[24];
              document.getElementById("eea_rate_v").value = data[25];
              document.getElementById("eea_prem_v").value = data[26];
              document.getElementById("hg_si_v").value = data[27];
              document.getElementById("hg_rate_v").value = data[28];
              document.getElementById("hg_prem_v").value = data[29];
              document.getElementById("cl_si_v").value = data[30];
              document.getElementById("cl_rate_v").value = data[31];
              document.getElementById("cl_prem_v").value = data[32];
              document.getElementById("pm_si_v").value = data[33];
              document.getElementById("pm_rate_v").value = data[34];
              document.getElementById("pm_prem_v").value = data[35];
              document.getElementById("sit_si_v").value = data[36];
              document.getElementById("sit_rate_v").value = data[37];
              document.getElementById("sit_prem_v").value = data[38];
              document.getElementById("oc_si_v").value = data[39];
              document.getElementById("oc_rate_v").value = data[40];
              document.getElementById("oc_prem_v").value = data[41];
              document.getElementById("tsibp_si_v").value = data[42];
              document.getElementById("tsibp_rate_v").value = data[43];
              document.getElementById("tsibp_prem_v").value = data[44];
              document.getElementById("less_si_v").value = data[45];
              document.getElementById("less_rate_v").value = data[46];
              document.getElementById("less_prem_v").value = data[47];
              document.getElementById("fea_dscut_si_v").value = data[48];
              document.getElementById("fea_dscut_rate_v").value = data[49];
              document.getElementById("fea_dscut_prem_v").value = data[50];
              document.getElementById("fea_dscut_si2_v").value = data[51];
              document.getElementById("fea_dscut_rate2_v").value = data[52];
              document.getElementById("fea_dscut_prem2_v").value = data[53];
              document.getElementById("hd_si_v").value = data[54];
              document.getElementById("hd_rate_v").value = data[55];
              document.getElementById("hd_prem_v").value = data[56];
              document.getElementById("hd2_si_v").value = data[57];
              document.getElementById("hd2_rate_v").value = data[58];
              document.getElementById("hd2_prem_v").value = data[59];
              document.getElementById("ltad_si_v").value = data[60];
              document.getElementById("ltad_rate_v").value = data[61];
              document.getElementById("ltad_prem_v").value = data[62];
              document.getElementById("dp_si_v").value = data[63];
              document.getElementById("dp_rate_v").value = data[64];
              document.getElementById("dp_prem_v").value = data[65];
              document.getElementById("special_disc_desc_v").value = data[66];
              document.getElementById("special_disc_si_v").value = data[67];
              document.getElementById("special_disc_rate_v").value = data[68];
              document.getElementById("special_disc_prem_v").value = data[69];
              document.getElementById("ca_limits_v").value = data[70];
              document.getElementById("ca_rate_v").value = data[71];
              document.getElementById("ca_adp_v").value = data[72];
              document.getElementById("tr_limits_v").value = data[73];
              document.getElementById("tr_rate_v").value = data[74];
              document.getElementById("tr_adp_v").value = data[75];
              document.getElementById("rob_limits_v").value = data[76];
              document.getElementById("rob_rate_v").value = data[77];
              document.getElementById("rob_adp_v").value = data[78];
              document.getElementById("pf_limits_v").value = data[79];
              document.getElementById("pf_rate_v").value = data[80];
              document.getElementById("pf_adp_v").value = data[81];
              document.getElementById("rvc_limits_v").value = data[82];
              document.getElementById("rvc_rate_v").value = data[83];
              document.getElementById("rvc_adp_v").value = data[84];
              document.getElementById("pg_limits_v").value = data[85];
              document.getElementById("pg_rate_v").value = data[86];
              document.getElementById("pg_adp_v").value = data[87];
              document.getElementById("arsi_limits_v").value = data[88];
              document.getElementById("arsi_rate_v").value = data[89];
              document.getElementById("arsi_adp_v").value = data[90];
              document.getElementById("sp_limits_v").value = data[91];
              document.getElementById("sp_rate_v").value = data[92];
              document.getElementById("sp_adp_v").value = data[93];
              document.getElementById("other_desc_aar_v").value = data[94];
              document.getElementById("other_si_aar_v").value = data[95];
              document.getElementById("other_rate_aar_v").value = data[96];
              document.getElementById("other_prem_aar_v").value = data[97];
              document.getElementById("other_desc_aar1_v").value = data[98];
              document.getElementById("other_si_aar1_v").value = data[99];
              document.getElementById("other_rate_aar1_v").value = data[100];
              document.getElementById("other_prem_aar1_v").value = data[101];
              document.getElementById("other_desc_aar2_v").value = data[102];
              document.getElementById("other_si_aar2_v").value = data[103];
              document.getElementById("other_rate_aar2_v").value = data[104];
              document.getElementById("other_prem_aar2_v").value = data[105];
              document.getElementById("other_desc_aar3_v").value = data[106];
              document.getElementById("other_si_aar3_v").value = data[107];
              document.getElementById("other_rate_aar3_v").value = data[108];
              document.getElementById("other_prem_aar3_v").value = data[109];
              document.getElementById("other_desc_aar4_v").value = data[110];
              document.getElementById("other_si_aar4_v").value = data[111];
              document.getElementById("other_rate_aar4_v").value = data[112];
              document.getElementById("other_prem_aar4_v").value = data[113];
              document.getElementById("tap_limits_v").value = data[114];
              document.getElementById("tap_rate_v").value = data[115];
              document.getElementById("tap_adp_v").value = data[116];
              document.getElementById("netp_limits_v").value = data[117];
              document.getElementById("netp_rate_v").value = data[118];
              document.getElementById("netp_adp_v").value = data[119];
              document.getElementById("collapse_limits_v").value = data[120];
              document.getElementById("collapse_rate_v").value = data[121];
              document.getElementById("collapse_adp_v").value = data[122];
              document.getElementById("totp_limits_v").value = data[123];
              document.getElementById("totp_rate_v").value = data[124];
              document.getElementById("totp_adp_v").value = data[125];
              document.getElementById("totp2_limits_v").value = data[126];
              document.getElementById("totp2_rate_v").value = data[127];
              document.getElementById("totp2_adp_v").value = data[128];
              document.getElementById("nicl_limits_v").value = data[129];
              document.getElementById("nicl_rate_v").value = data[130];
              document.getElementById("nicl_adp_v").value = data[131];
              document.getElementById("cf_limits_v").value = data[132];
              document.getElementById("cf_rate_v").value = data[133];
              document.getElementById("cf_adp_v").value = data[134];
              document.getElementById("aa_ap_limits_v").value = data[135];
              document.getElementById("aa_ap_rate_v").value = data[136];
              document.getElementById("aa_ap_adp_v").value = data[137];
              document.getElementById("deduc_aat_limits_v").value = data[138];
              document.getElementById("subject_aa_limits_v").value = data[139];
              $("#view_eng_aar").modal("show");
          });
      });

  </script>
  <!-- ENG - ASSETS ALL RISKS -->
  
  
  <!-- ENG - FIRE & ALLIED PERILS -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#fap_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#fap_table').DataTable();

          $('#fap_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("fap_id_v").value = data[0];
              document.getElementById("underwriter_fap_v").value = data[1];
              document.getElementById("insured_fap_v").value = data[2];
              document.getElementById("industry_fap_v").value = data[3];
              document.getElementById("intermediary_fap_v").value = data[4];
              document.getElementById("selectCurrency_fap_v").value = data[5];
              document.getElementById("building_si2_v").value = data[6];
              document.getElementById("building_rate2_v").value = data[7];
              document.getElementById("building_prem2_v").value = data[8];
              document.getElementById("fencewall1_si_v").value = data[9];
              document.getElementById("fencewall1_rate_v").value = data[10];
              document.getElementById("fencewall1_prem_v").value = data[11];
              document.getElementById("fff_si2_v").value = data[12];
              document.getElementById("fff_rate2_v").value = data[13];
              document.getElementById("fff_prem2_v").value = data[14];
              document.getElementById("furnish_si2_v").value = data[15];
              document.getElementById("furnish_rate2_v").value = data[16];
              document.getElementById("furnish_prem2_v").value = data[17];
              document.getElementById("eea_si2_v").value = data[18];
              document.getElementById("eea_rate2_v").value = data[19];
              document.getElementById("eea_prem2_v").value = data[20];
              document.getElementById("hg_si2_v").value = data[21];
              document.getElementById("hg_rate2_v").value = data[22];
              document.getElementById("hg_prem2_v").value = data[23];
              document.getElementById("pe_si_v").value = data[24];
              document.getElementById("pe_rate_v").value = data[25];
              document.getElementById("pe_prem_v").value = data[26];
              document.getElementById("cl_si2_v").value = data[27];
              document.getElementById("cl_rate2_v").value = data[28];
              document.getElementById("cl_prem2_v").value = data[29];
              document.getElementById("pm_si2_v").value = data[30];
              document.getElementById("pm_rate2_v").value = data[31];
              document.getElementById("pm_prem2_v").value = data[32];
              document.getElementById("sit_si2_v").value = data[33];
              document.getElementById("sit_rate2_v").value = data[34];
              document.getElementById("sit_prem2_v").value = data[35];
              document.getElementById("oc_si2_v").value = data[36];
              document.getElementById("oc_rate2_v").value = data[37];
              document.getElementById("oc_prem2_v").value = data[38];
              document.getElementById("tsibp_si2_v").value = data[39];
              document.getElementById("tsibp_rate2_v").value = data[40];
              document.getElementById("tsibp_prem2_v").value = data[41];
              document.getElementById("less_si2").value = data[42];
              document.getElementById("less_rate2_v").value = data[43];
              document.getElementById("less_prem2_v").value = data[44];
              document.getElementById("fea_dscut_si21_v").value = data[45];
              document.getElementById("fea_dscut_rate21_v").value = data[46];
              document.getElementById("fea_dscut_prem21_v").value = data[47];
              document.getElementById("fea_dscut_si22_v").value = data[48];
              document.getElementById("fea_dscut_rate22_v").value = data[49];
              document.getElementById("fea_dscut_prem22_v").value = data[50];
              document.getElementById("hd_si2_v").value = data[51];
              document.getElementById("hd_rate2_v").value = data[52];
              document.getElementById("hd_prem2_v").value = data[53];
              document.getElementById("hd2_si2_v").value = data[54];
              document.getElementById("hd2_rate2_v").value = data[55];
              document.getElementById("hd2_prem2_v").value = data[56];
              document.getElementById("ltad_si2_v").value = data[57];
              document.getElementById("ltad_rate2_v").value = data[58];
              document.getElementById("ltad_prem2_v").value = data[59];
              document.getElementById("dp_si2_v").value = data[60];
              document.getElementById("dp_rate2_v").value = data[61];
              document.getElementById("dp_prem2_v").value = data[62];
              document.getElementById("ca_limits2_v").value = data[63];
              document.getElementById("ca_rate2_v").value = data[64];
              document.getElementById("ca_adp2_v").value = data[65];
              document.getElementById("tr_limits2_v").value = data[66];
              document.getElementById("tr_rate2_v").value = data[67];
              document.getElementById("tr_adp2_v").value = data[68];
              document.getElementById("rob_limits2_v").value =data[69]; 
              document.getElementById("rob_rate2_v").value = data[70];
              document.getElementById("rob_adp2_v").value = data[71];
              document.getElementById("pf_limits2_v").value = data[72];
              document.getElementById("pf_rate2_v").value = data[73];
              document.getElementById("pf_adp2_v").value = data[74];
              document.getElementById("rvc_limits2_v").value =data[75]; 
              document.getElementById("rvc_rate2_v").value =data[76]; 
              document.getElementById("rvc_adp2_v").value =data[77]; 
              document.getElementById("pg_limits2_v").value = data[78];
              document.getElementById("pg_rate2_v").value = data[79];
              document.getElementById("pg_adp2_v").value = data[80];
              document.getElementById("arsi_limits2_v").value = data[81];
              document.getElementById("arsi_rate2_v").value = data[82];
              document.getElementById("arsi_adp2_v").value = data[83];
              document.getElementById("sp_limits2_v").value = data[84];
              document.getElementById("sp_rate2_v").value = data[85];
              document.getElementById("sp_adp2_v").value = data[86];
              document.getElementById("other_desc_fap_v").value = data[87];
              document.getElementById("other_si_fap_v").value = data[88];
              document.getElementById("other_rate_fap_v").value =data[89]; 
              document.getElementById("other_prem_fap_v").value = data[90];
              document.getElementById("other_desc_fap1_v").value = data[91];
              document.getElementById("other_si_fap1_v").value = data[92];
              document.getElementById("other_rate_fap1_v").value = data[93];
              document.getElementById("other_prem_fap1_v").value = data[94];
              document.getElementById("other_desc_fap2_v").value = data[95];
              document.getElementById("other_si_fap2_v").value = data[96];
              document.getElementById("other_rate_fap2_v").value = data[97];
              document.getElementById("other_prem_fap2_v").value = data[98];
              document.getElementById("other_desc_fap3_v").value = data[99];
              document.getElementById("other_si_fap3_v").value = data[100];
              document.getElementById("other_rate_fap3_v").value = data[101];
              document.getElementById("other_prem_fap3_v").value = data[102];
              document.getElementById("other_desc_fap4_v").value = data[103];
              document.getElementById("other_si_fap4_v").value = data[104];
              document.getElementById("other_rate_fap4_v").value = data[105];
              document.getElementById("other_prem_fap4_v").value = data[106];
              document.getElementById("tap_limits2_v").value = data[107];
              document.getElementById("tap_rate2_v").value = data[108];
              document.getElementById("tap_adp2_v").value = data[109];
              document.getElementById("netp_limits2_v").value = data[110];
              document.getElementById("netp_rate2_v").value = data[111];
              document.getElementById("netp_adp2_v").value = data[112];
              document.getElementById("collapse_limits2_v").value = data[113];
              document.getElementById("collapse_rate2_v").value = data[114];
              document.getElementById("collapse_adp2_v").value = data[115];
              document.getElementById("totp_limits2_v").value = data[116];
              document.getElementById("totp_rate2_v").value = data[117];
              document.getElementById("totp_adp2_v").value = data[118];
              document.getElementById("totp2_limits2_v").value = data[119];
              document.getElementById("totp2_rate2_v").value = data[120];
              document.getElementById("totp2_adp2_v").value = data[121];
              document.getElementById("nicl_limits2_v").value = data[122];
              document.getElementById("nicl_rate2_v").value = data[123];
              document.getElementById("nicl_adp2_v").value = data[124];
              document.getElementById("cf_limits2_v").value = data[125];
              document.getElementById("cf_rate2_v").value = data[126];
              document.getElementById("cf_adp2_v").value = data[127];
              document.getElementById("aa_ap_limits2_v").value = data[128];
              document.getElementById("aa_ap_rate2_v").value = data[129];
              document.getElementById("aa_ap_adp2_v").value = data[130];
              document.getElementById("deduc_aat_limits2_v").value = data[131];
              document.getElementById("subject_aa_limits2_v").value = data[132];
              $("#view_eng_fap").modal("show");
          });
      });

  </script>
  <!-- ENG - FIRE & ALLIED PERILS -->
  
  
  <!-- ENG - HOME INSURANCE -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#hi_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#hi_table').DataTable();

          $('#hi_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("hi_id_v").value = data[0];
              document.getElementById("underwriter_hi_v").value = data[1];
              document.getElementById("insured_hi_v").value = data[2];
              document.getElementById("industry_hi_v").value = data[3];
              document.getElementById("intermediary_hi_v").value = data[4];
              document.getElementById("selectCurrency_hi_v").value = data[5];
              document.getElementById("building_si3_v").value = data[6];
              document.getElementById("building_rate3_v").value = data[7];
              document.getElementById("building_prem3_v").value = data[8];
              document.getElementById("fencewall2_si_v").value = data[9];
              document.getElementById("fencewall2_rate_v").value = data[10];
              document.getElementById("fencewall2_prem_v").value = data[11];
              document.getElementById("hg_si3_v").value = data[12];
              document.getElementById("hg_rate3_v").value = data[13];
              document.getElementById("hg_prem3_v").value = data[14];
              document.getElementById("pe_si1_v").value = data[15];
              document.getElementById("pe_rate1_v").value = data[16];
              document.getElementById("pe_prem1_v").value = data[17];
              document.getElementById("tsibp_si3_v").value = data[18];
              document.getElementById("tsibp_rate3_v").value = data[19];
              document.getElementById("tsibp_prem3_v").value = data[20];
              document.getElementById("less_si3_v").value = data[21];
              document.getElementById("less_rate3_v").value = data[22];
              document.getElementById("less_prem3_v").value = data[23];
              document.getElementById("fea_dscut_si3_v").value = data[24];
              document.getElementById("fea_dscut_rate3_v").value = data[25];
              document.getElementById("fea_dscut_prem3_v").value = data[26];
              document.getElementById("fea_dscut_si33_v").value = data[27];
              document.getElementById("fea_dscut_rate33_v").value = data[28];
              document.getElementById("fea_dscut_prem33_v").value = data[29];
              document.getElementById("hd_si3_v").value = data[30];
              document.getElementById("hd_rate3_v").value = data[31];
              document.getElementById("hd_prem3_v").value = data[32];
              document.getElementById("hd3_si_v").value = data[33];
              document.getElementById("hd3_rate_v").value = data[34];
              document.getElementById("hd3_prem_v").value = data[35];
              document.getElementById("ltad_si3_v").value = data[36];
              document.getElementById("ltad_rate3_v").value = data[37];
              document.getElementById("ltad_prem3_v").value = data[38];
              document.getElementById("dp_si3_v").value = data[39];
              document.getElementById("dp_rate3_v").value = data[40];
              document.getElementById("dp_prem3_v").value = data[41];
              document.getElementById("pat_limits_v").value = data[42];
              document.getElementById("pat_rate_v").value = data[43];
              document.getElementById("pat_adp_v").value = data[44];
              document.getElementById("wcds_limits_v").value = data[45];
              document.getElementById("wcds_rate_v").value = data[46];
              document.getElementById("wcds_adp_v").value = data[47];
              document.getElementById("bue_limits_v").value = data[48];
              document.getElementById("bue_rate_v").value = data[49];
              document.getElementById("bue_adp_v").value = data[50];
              document.getElementById("pc_limits_v").value = data[51];
              document.getElementById("pc_rate_v").value = data[52];
              document.getElementById("pc_adp_v").value = data[53];
              document.getElementById("apl_limits_v").value = data[54];
              document.getElementById("apl_rate_v").value = data[55];
              document.getElementById("apl_adp_v").value = data[56];
              document.getElementById("pg_limits3_v").value = data[57];
              document.getElementById("pg_rate3_v").value = data[58];
              document.getElementById("pg_adp3_v").value = data[59];
              document.getElementById("other_desc_hi_v").value = data[60];
              document.getElementById("other_si_hi_v").value = data[61];
              document.getElementById("other_rate_hi_v").value = data[62];
              document.getElementById("other_prem_hi_v").value = data[63];
              document.getElementById("other_desc_hi1_v").value = data[64];
              document.getElementById("other_si_hi1_v").value = data[65];
              document.getElementById("other_rate_hi1_v").value = data[66];
              document.getElementById("other_prem_hi1_v").value = data[67];
              document.getElementById("other_desc_hi2_v").value = data[68];
              document.getElementById("other_si_hi2_v").value = data[69];
              document.getElementById("other_rate_hi2_v").value = data[70];
              document.getElementById("other_prem_hi2_v").value = data[71];
              document.getElementById("other_desc_hi3_v").value = data[72];
              document.getElementById("other_si_hi3_v").value = data[73];
              document.getElementById("other_rate_hi3_v").value = data[74];
              document.getElementById("other_prem_hi3_v").value = data[75];
              document.getElementById("other_desc_hi4_v").value = data[76];
              document.getElementById("other_si_hi4_v").value = data[77];
              document.getElementById("other_rate_hi4_v").value = data[78];
              document.getElementById("other_prem_hi4_v").value = data[79];
              document.getElementById("tap_limits3_v").value = data[80];
              document.getElementById("tap_rate3_v").value = data[81];
              document.getElementById("tap_adp3_v").value = data[82];
              document.getElementById("netp_limits3_v").value = data[83];
              document.getElementById("netp_rate3_v").value = data[84];
              document.getElementById("netp_adp3_v").value = data[85];
              document.getElementById("collapse_limits3_v").value = data[86];
              document.getElementById("collapse_rate3_v").value = data[87];
              document.getElementById("collapse_adp3_v").value = data[88];
              document.getElementById("totp_limits3_v").value = data[89];
              document.getElementById("totp_rate3_v").value = data[90];
              document.getElementById("totp_adp3_v").value = data[91];
              document.getElementById("totp_limits4_v").value = data[92];
              document.getElementById("totp_rate4_v").value = data[93];
              document.getElementById("totp_adp4_v").value = data[94];
              document.getElementById("nicl_limits3_v").value = data[95];
              document.getElementById("nicl_rate3_v").value = data[96];
              document.getElementById("nicl_adp3_v").value = data[97];
              document.getElementById("cf_limits3_v").value = data[98];
              document.getElementById("cf_rate3_v").value = data[99];
              document.getElementById("cf_adp3_v").value = data[100];
              document.getElementById("aa_ap_limits3_v").value = data[101];
              document.getElementById("aa_ap_rate3_v").value = data[102];
              document.getElementById("aa_ap_adp3_v").value = data[103];
              document.getElementById("deduc_aat_limits3_v").value = data[104];
              document.getElementById("subject_aa_limits3_v").value = data[105];
              $("#view_eng_hi").modal("show");
          });
      });

  </script>
  <!-- ENG - HOME INSURANCE -->
  
  
  <!-- ENG - COMBINED FIRE & BURGLARY -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#cfb_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#cfb_table').DataTable();

          $('#cfb_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("cfb_id_v").value = data[0];
              document.getElementById("underwriter_cfb_v").value = data[1];
              document.getElementById("insured_cfb_v").value = data[2];
              document.getElementById("industry_cfb_v").value = data[3];
              document.getElementById("intermediary_cfb_v").value = data[4];
              document.getElementById("selectCurrency_cfb_v").value = data[5];
              document.getElementById("building_si4_v").value = data[6];
              document.getElementById("building_rate4_v").value = data[7];
              document.getElementById("building_prem4_v").value = data[8];
              document.getElementById("fencewall_si4_v").value = data[9];
              document.getElementById("fencewall_rate4_v").value = data[10];
              document.getElementById("fencewall_prem4_v").value = data[11];
              document.getElementById("fff_si4_v").value = data[12];
              document.getElementById("fff_rate4_v").value = data[13];
              document.getElementById("fff_prem4_v").value = data[14];
              document.getElementById("furnish_si4_v").value = data[15];
              document.getElementById("furnish_rate4_v").value = data[16];
              document.getElementById("furnish_prem4_v").value = data[17];
              document.getElementById("eea_si4_v").value = data[18];
              document.getElementById("eea_rate4_v").value = data[19];
              document.getElementById("eea_prem4_v").value = data[20];
              document.getElementById("hg_si4_v").value = data[21];
              document.getElementById("hg_rate4_v").value = data[22];
              document.getElementById("hg_prem4_v").value = data[23];
              document.getElementById("pe_si2_v").value = data[24];
              document.getElementById("pe_rate2_v").value = data[25];
              document.getElementById("pe_prem2_v").value = data[26];
              document.getElementById("cl_si4_v").value = data[27];
              document.getElementById("cl_rate4_v").value = data[28];
              document.getElementById("cl_prem4_v").value = data[29];
              document.getElementById("pm_si4_v").value = data[30];
              document.getElementById("pm_rate4_v").value = data[31];
              document.getElementById("pm_prem4_v").value = data[32];
              document.getElementById("sit_si4_v").value = data[33];
              document.getElementById("sit_rate4_v").value = data[34];
              document.getElementById("sit_prem4_v").value = data[35];
              document.getElementById("fg_si_v").value = data[36];
              document.getElementById("fg_rate_v").value = data[37];
              document.getElementById("fg_prem_v").value = data[38];
              document.getElementById("wip_si_v").value = data[39];
              document.getElementById("wip_rate_v").value = data[40];
              document.getElementById("wip_prem_v").value = data[41];
              document.getElementById("rm_si_v").value = data[42];
              document.getElementById("rm_rate_v").value = data[43];
              document.getElementById("rm_prem_v").value = data[44];
              document.getElementById("oc_si4_v").value = data[45];
              document.getElementById("oc_rate4_v").value = data[46];
              document.getElementById("oc_prem4_v").value = data[47];
              document.getElementById("tsibp_si4_v").value =data[48]; 
              document.getElementById("tsibp_rate4_v").value = data[49];
              document.getElementById("tsibp_prem4_v").value = data[50];
              document.getElementById("less_si4_v").value = data[51];
              document.getElementById("less_rate4_v").value = data[52];
              document.getElementById("less_prem4_v").value = data[53];
              document.getElementById("fea_dscut_si4_v").value = data[54];
              document.getElementById("fea_dscut_rate4_v").value = data[55];
              document.getElementById("fea_dscut_prem4_v").value = data[56];
              document.getElementById("fea_dscut_si24_v").value = data[57];
              document.getElementById("fea_dscut_rate24_v").value = data[58];
              document.getElementById("fea_dscut_prem24_v").value = data[59];
              document.getElementById("hd_si4_v").value = data[60];
              document.getElementById("hd_rate4_v").value = data[61];
              document.getElementById("hd_prem4_v").value = data[62];
              document.getElementById("hd24_si_v").value = data[63];
              document.getElementById("hd24_rate_v").value = data[64];
              document.getElementById("hd24_prem_v").value = data[65];
              document.getElementById("ltad_si4_v").value = data[66];
              document.getElementById("ltad_rate4_v").value = data[67];
              document.getElementById("ltad_prem4_v").value = data[68];
              document.getElementById("dp_si4_v").value = data[69];
              document.getElementById("dp_rate4_v").value = data[70];
              document.getElementById("dp_prem4_v").value = data[71];
              document.getElementById("ca_limits4_v").value = data[72];
              document.getElementById("ca_rate4_v").value = data[73];
              document.getElementById("ca_adp4_v").value = data[74];
              document.getElementById("tr_limits4_v").value = data[75];
              document.getElementById("tr_rate4_v").value = data[76];
              document.getElementById("tr_adp4_v").value = data[77];
              document.getElementById("rob_limits4_v").value =data[78]; 
              document.getElementById("rob_rate4_v").value = data[79];
              document.getElementById("rob_adp4_v").value = data[80];
              document.getElementById("pf_limits4_v").value = data[81];
              document.getElementById("pf_rate4_v").value = data[82];
              document.getElementById("pf_adp4_v").value = data[83];
              document.getElementById("rvc_limits4_v").value = data[84];
              document.getElementById("rvc_rate4_v").value = data[85];
              document.getElementById("rvc_adp4_v").value = data[86];
              document.getElementById("pg_limits4_v").value = data[87];
              document.getElementById("pg_rate4_v").value = data[88];
              document.getElementById("pg_adp4_v").value = data[89];
              document.getElementById("arsi_limits4_v").value = data[90];
              document.getElementById("arsi_rate4_v").value = data[91];
              document.getElementById("arsi_adp4_v").value = data[92];
              document.getElementById("other_desc_cfb_v").value = data[93];
              document.getElementById("other_si_cfb_v").value = data[94];
              document.getElementById("other_rate_cfb_v").value =data[95]; 
              document.getElementById("other_prem_cfb_v").value = data[96];
              document.getElementById("other_desc_cfb1_v").value = data[97];
              document.getElementById("other_si_cfb1_v").value = data[98];
              document.getElementById("other_rate_cfb1_v").value = data[99];
              document.getElementById("other_prem_cfb1_v").value = data[100];
              document.getElementById("other_desc_cfb2_v").value = data[101];
              document.getElementById("other_si_cfb2_v").value = data[102];
              document.getElementById("other_rate_cfb2_v").value = data[103];
              document.getElementById("other_prem_cfb2_v").value = data[104];
              document.getElementById("other_desc_cfb3_v").value = data[105];
              document.getElementById("other_si_cfb3_v").value = data[106];
              document.getElementById("other_rate_cfb3_v").value = data[107];
              document.getElementById("other_prem_cfb3_v").value = data[108];
              document.getElementById("other_desc_cfb4_v").value = data[109];
              document.getElementById("other_si_cfb4_v").value = data[110];
              document.getElementById("other_rate_cfb4_v").value = data[111];
              document.getElementById("other_prem_cfb4_v").value = data[112];
              document.getElementById("tap_limits4_v").value = data[113];
              document.getElementById("tap_rate4_v").value = data[114];
              document.getElementById("tap_adp4_v").value = data[115];
              document.getElementById("netp_limits4_v").value = data[116];
              document.getElementById("netp_rate4_v").value = data[117];
              document.getElementById("netp_adp4_v").value = data[118];
              document.getElementById("collapse_limits4_v").value = data[119];
              document.getElementById("collapse_rate4_v").value = data[120];
              document.getElementById("collapse_adp4_v").value = data[121];
              document.getElementById("totp_limits44_v").value = data[122];
              document.getElementById("totp_rate44_v").value = data[123];
              document.getElementById("totp_adp44_v").value = data[124];
              document.getElementById("totp2_limits4_v").value = data[125];
              document.getElementById("totp2_rate4_v").value = data[126];
              document.getElementById("totp2_adp4_v").value = data[127];
              document.getElementById("nicl_limits4_v").value = data[128];
              document.getElementById("nicl_rate4_v").value = data[129];
              document.getElementById("nicl_adp4_v").value = data[130];
              document.getElementById("cf_limits4_v").value = data[131];
              document.getElementById("cf_rate4_v").value = data[132];
              document.getElementById("cf_adp4_v").value = data[133];
              document.getElementById("aa_ap_limits4_v").value = data[134];
              document.getElementById("aa_ap_rate4_v").value = data[135];
              document.getElementById("aa_ap_adp4_v").value = data[136];
              document.getElementById("deduc_aat_limits4_v").value = data[137];
              document.getElementById("subject_aa_limits4_v").value = data[138];
              $("#view_eng_cfb").modal("show");
          });
      });

  </script>
  <!-- ENG - COMBINED FIRE & BURGLARY -->
  
  
  <!-- ENG- PUBLIC LIABILITY -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#pl_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#pl_table').DataTable();

          $('#pl_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("pl_id_v").value = data[0];
              document.getElementById("underwriter_pl_v").value = data[1];
              document.getElementById("insured_pl_v").value = data[2];
              document.getElementById("industry_pl_v").value = data[3];
              document.getElementById("intermediary_pl_v").value = data[4];
              document.getElementById("selectCurrency_pl_v").value = data[5];
              document.getElementById("operations_si_v").value = data[6];
              document.getElementById("operations_rate_v").value = data[7];
              document.getElementById("operations_prem_v").value = data[8];
              document.getElementById("pi_si_v").value = data[9];
              document.getElementById("pi_rate_v").value = data[10];
              document.getElementById("pi_prem_v").value = data[11];
              document.getElementById("all_si_v").value = data[12];
              document.getElementById("all_rate_v").value = data[13];
              document.getElementById("all_prem_v").value = data[14];
              document.getElementById("bppl_si_v").value = data[15];
              document.getElementById("bppl_rate_v").value = data[16];
              document.getElementById("bppl_prem_v").value = data[17];
              document.getElementById("pl2_si_v").value = data[18];
              document.getElementById("pl2_rate_v").value = data[19];
              document.getElementById("pl2_prem_v").value = data[20];
              document.getElementById("tl_si_v").value = data[21];
              document.getElementById("tl_rate_v").value = data[22];
              document.getElementById("tl_prem_v").value = data[23];
              document.getElementById("cll_si_v").value = data[24];
              document.getElementById("cll_rate_v").value = data[25];
              document.getElementById("cll_prem_v").value = data[26];
              document.getElementById("ws_si_v").value = data[27];
              document.getElementById("ws_rate_v").value = data[28];
              document.getElementById("ws_prem_v").value = data[29];
              document.getElementById("other_desc_pl_v").value = data[30];
              document.getElementById("other_si_pl_v").value = data[31];
              document.getElementById("other_rate_pl_v").value = data[32];
              document.getElementById("other_prem_pl_v").value = data[33];
              document.getElementById("other_desc_pl1_v").value = data[34];
              document.getElementById("other_si_pl_v1").value = data[35];
              document.getElementById("other_rate_pl1_v").value = data[36];
              document.getElementById("other_prem_pl1_v").value = data[37];
              document.getElementById("other_desc_pl2_v").value = data[38];
              document.getElementById("other_si_pl_v2").value = data[39];
              document.getElementById("other_rate_pl2_v").value = data[40];
              document.getElementById("other_prem_pl2_v").value = data[41];
              document.getElementById("other_desc_pl3_v").value = data[42];
              document.getElementById("other_si_pl_v3").value = data[43];
              document.getElementById("other_rate_pl3_v").value = data[44];
              document.getElementById("other_prem_pl3_v").value = data[45];
              document.getElementById("other_desc_pl4_v").value = data[46];
              document.getElementById("other_si_pl_v4").value = data[47];
              document.getElementById("other_rate_pl4_v").value = data[48];
              document.getElementById("other_prem_pl4_v").value = data[49];
              document.getElementById("si_engo_pl_v").value = data[50];
              document.getElementById("rate_engo_pl_v").value = data[51];
              document.getElementById("premium_engo_pl_v").value = data[52];
              document.getElementById("de_si_v").value = data[53];
              document.getElementById("subject_si_v").value = data[54];
              $("#view_eng_pl").modal("show");
          });
      });

  </script>
  <!-- ENG- PUBLIC LIABILITY -->
  
  
  <!-- ENG- GENERAL LIABILITY -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#gl_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#gl_table').DataTable();

          $('#gl_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("gl_id_v").value = data[0];
              document.getElementById("underwriter_gl_v").value = data[1];
              document.getElementById("insured_gl_v").value = data[2];
              document.getElementById("industry_gl_v").value = data[3];
              document.getElementById("intermediary_gl_v").value = data[4];
              document.getElementById("selectCurrency_gl_v").value = data[5];
              document.getElementById("pl4gl_si_v").value = data[6];
              document.getElementById("pl4gl_rate_v").value = data[7];
              document.getElementById("pl4gl_prem_v").value = data[8];
              document.getElementById("plt_si_v").value = data[9];
              document.getElementById("plt_rate_v").value = data[10];
              document.getElementById("plt_prem_v").value = data[11];
              document.getElementById("plll_si_v").value = data[12];
              document.getElementById("plll_rate_v").value = data[13];
              document.getElementById("plll_prem_v").value = data[14];
              document.getElementById("all4gl_si_v").value = data[15];
              document.getElementById("all4gl_rate_v").value = data[16];
              document.getElementById("all4gl_prem_v").value = data[17];
              document.getElementById("bppl4gl_si_v").value = data[18];
              document.getElementById("bppl4gl_rate_v").value = data[19];
              document.getElementById("bppl4gl_prem_v").value = data[20];
              document.getElementById("pl24pl_si_v").value = data[21];
              document.getElementById("pl24pl_rate_v").value = data[22];
              document.getElementById("pl24pl_prem_v").value = data[23];
              document.getElementById("tl4pl_si_v").value = data[24];
              document.getElementById("tl4pl_rate_v").value = data[25];
              document.getElementById("tl4pl_prem_v").value = data[26];
              document.getElementById("cl4pl_si_v").value = data[27];
              document.getElementById("cl4pl_rate_v").value = data[28];
              document.getElementById("cl4pl_prem_v").value = data[29];
              document.getElementById("ws4pl_si_v").value = data[30];
              document.getElementById("ws4pl_rate_v").value = data[31];
              document.getElementById("ws4pl_prem_v").value = data[32];
              document.getElementById("defw_si_v").value = data[33];
              document.getElementById("defw_rate_v").value = data[34];
              document.getElementById("defw_prem_v").value = data[35];
              document.getElementById("pfl_si_v").value = data[36];
              document.getElementById("pfl_rate_v").value = data[37];
              document.getElementById("pfl_prem_v").value = data[38];
              document.getElementById("pig_si_v").value = data[39];
              document.getElementById("pig_rate_v").value = data[40];
              document.getElementById("pig_prem_v").value = data[41];
              document.getElementById("rel_si_v").value = data[42];
              document.getElementById("rel_rate_v").value = data[43];
              document.getElementById("rel_prem_v").value = data[44];
              document.getElementById("sldc_si_v").value = data[45];
              document.getElementById("sldc_rate_v").value = data[46];
              document.getElementById("sldc_prem_v").value = data[47];
              document.getElementById("wad_si_v").value = data[48];
              document.getElementById("wad_rate_v").value = data[49];
              document.getElementById("wad_prem_v").value = data[50];
              document.getElementById("other_desc_gl_v").value = data[51];
              document.getElementById("other_si_gl_v").value = data[52];
              document.getElementById("other_rate_gl_v").value = data[53];
              document.getElementById("other_prem_gl_v").value = data[54];
              document.getElementById("other_desc_gl1_v").value = data[55];
              document.getElementById("other_si_gl1_v").value = data[56];
              document.getElementById("other_rate_gl1_v").value = data[57];
              document.getElementById("other_prem_gl1_v").value = data[58];
              document.getElementById("other_desc_gl2_v").value = data[59];
              document.getElementById("other_si_gl2_v").value = data[60];
              document.getElementById("other_rate_gl2_v").value = data[61];
              document.getElementById("other_prem_gl2_v").value = data[62];
              document.getElementById("other_desc_gl3_v").value = data[63];
              document.getElementById("other_si_gl3_v").value = data[64];
              document.getElementById("other_rate_gl3_v").value = data[65];
              document.getElementById("other_prem_gl3_v").value = data[66];
              document.getElementById("other_desc_gl4_v").value = data[67];
              document.getElementById("other_si_gl4_v").value = data[68];
              document.getElementById("other_rate_gl4_v").value = data[69];
              document.getElementById("other_prem_gl4_v").value = data[70];
              document.getElementById("tapg_si_v").value = data[71];
              document.getElementById("tapg_rate_v").value = data[72];
              document.getElementById("tapg_prem_v").value = data[73];
              document.getElementById("si_engo_gl_v").value = data[74];
              document.getElementById("rate_engo_gl_v").value = data[75];
              document.getElementById("premium_engo_gl_v").value = data[76];
              document.getElementById("de_si4pl_v").value = data[77];
              document.getElementById("subject4pl_si_v").value = data[78];
              $("#view_eng_gl").modal("show");
          });
      });

  </script>
  <!-- ENG- GENERAL LIABILITY -->
  
  
  <!--  DIRECTORS' & OFFICERS LIABILITY  -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#do_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#do_table').DataTable();

          $('#do_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("do_id_v").value = data[0];
              document.getElementById("underwriter_do_v").value = data[1];
              document.getElementById("insured_do_v").value = data[2];
              document.getElementById("industry_do_v").value = data[3];
              document.getElementById("intermediary_do_v").value = data[4];
              document.getElementById("selectCurrency_do_v").value = data[5];
              document.getElementById("adoc_si_v").value = data[6];
              document.getElementById("adoc_rate_v").value = data[7];
              document.getElementById("adoc_prem_v").value = data[8];
              document.getElementById("lpd_si_v").value = data[9];
              document.getElementById("lpd_rate_v").value = data[10];
              document.getElementById("lpd_prem_v").value = data[11];
              document.getElementById("peri_si_v").value = data[12];
              document.getElementById("peri_rate_v").value = data[13];
              document.getElementById("peri_prem_v").value = data[14];
              document.getElementById("all3_si_v").value = data[15];
              document.getElementById("all3_rate_v").value = data[16];
              document.getElementById("all3_prem_v").value = data[17];
              document.getElementById("other_desc_do_v").value = data[18];
              document.getElementById("other_si_do_v").value = data[19];
              document.getElementById("other_rate_do_v").value = data[20];
              document.getElementById("other_prem_do_v").value = data[21];
              document.getElementById("other_desc_do1_v").value = data[22];
              document.getElementById("other_si_do1_v").value = data[23];
              document.getElementById("other_rate_do1_v").value = data[24];
              document.getElementById("other_prem_do1_v").value = data[25];
              document.getElementById("other_desc_do2_v").value = data[26];
              document.getElementById("other_si_do2_v").value = data[27];
              document.getElementById("other_rate_do2_v").value = data[28];
              document.getElementById("other_prem_do2_v").value = data[29];
              document.getElementById("other_desc_do3_v").value = data[30];
              document.getElementById("other_si_do3_v").value = data[31];
              document.getElementById("other_rate_do3_v").value = data[32];
              document.getElementById("other_prem_do3_v").value = data[33];
              document.getElementById("other_desc_do4_v").value = data[34];
              document.getElementById("other_si_do4_v").value = data[35];
              document.getElementById("other_rate_do4_v").value = data[36];
              document.getElementById("other_prem_do4_v").value = data[37];
              document.getElementById("ap4do_si_v").value = data[38];
              document.getElementById("ap4do_rate_v").value = data[39];
              document.getElementById("ap4do_prem_v").value = data[40];
              document.getElementById("de4do_si_v").value = data[41];
              document.getElementById("sub4do_si_v").value = data[42];
              $("#view_eng_do").modal("show");
          });
      });

  </script>
  <!-- DIRECTORS' & OFFICERS LIABILITY -->
  
    
  <!-- PROFESSIONAL INDEMNITY  -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#pi_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#pi_table').DataTable();

          $('#pi_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("pi_id_v").value = data[0];
              document.getElementById("underwriter_pi_v").value = data[1];
              document.getElementById("insured_pi_v").value = data[2];
              document.getElementById("industry_pi_v").value = data[3];
              document.getElementById("intermediary_pi_v").value = data[4];
              document.getElementById("selectCurrency_pi_v").value = data[5];
              document.getElementById("apob_si_v").value = data[6];
              document.getElementById("apob_rate_v").value = data[7];
              document.getElementById("apob_prem_v").value = data[8];
              document.getElementById("pcl_si_v").value = data[9];
              document.getElementById("pcl_rate_v").value = data[10];
              document.getElementById("pcl_prem_v").value = data[11];
              document.getElementById("allpi_si_v").value = data[12];
              document.getElementById("allpi_rate_v").value = data[13];
              document.getElementById("allpi_prem_v").value = data[14];
              document.getElementById("other_desc_pi_v").value = data[15];
              document.getElementById("other_si_pi_v").value = data[16];
              document.getElementById("other_rate_pi_v").value = data[17];
              document.getElementById("other_prem_pi_v").value = data[18];
              document.getElementById("other_desc_pi1_v").value = data[19];
              document.getElementById("other_si_pi1_v").value = data[20];
              document.getElementById("other_rate_pi1_v").value = data[21];
              document.getElementById("other_prem_pi1_v").value = data[22];
              document.getElementById("other_desc_pi2_v").value = data[23];
              document.getElementById("other_si_pi2_v").value = data[24];
              document.getElementById("other_rate_pi2_v").value = data[25];
              document.getElementById("other_prem_pi2_v").value = data[26];
              document.getElementById("other_desc_pi3_v").value = data[27];
              document.getElementById("other_si_pi3_v").value = data[28];
              document.getElementById("other_rate_pi3_v").value = data[29];
              document.getElementById("other_prem_pi3_v").value = data[30];
              document.getElementById("other_desc_pi4_v").value = data[31];
              document.getElementById("other_si_pi4_v").value = data[32];
              document.getElementById("other_rate_pi4_v").value = data[33];
              document.getElementById("other_prem_pi4_v").value = data[34];
              document.getElementById("ap4pi_si_v").value = data[35];
              document.getElementById("ap4pi_rate_v").value = data[36];
              document.getElementById("ap4pi_prem_v").value = data[37];
              document.getElementById("de4pi_si_v").value = data[38];
              document.getElementById("sub4pi_si_v").value = data[39];
              $("#view_eng_pi").modal("show");
          });
      });

  </script>
  <!-- PROFESSIONAL INDEMNITY -->
  
  
  <!--  ENG - FIDELITY GUARANTEE QUOTATION  -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#fg_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#fg_table').DataTable();

          $('#fg_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("fid_id_v").value = data[0];
              document.getElementById("underwriter_fid_v").value = data[1];
              document.getElementById("insured_fid_v").value = data[2];
              document.getElementById("industry_fid_v").value = data[3];
              document.getElementById("intermediary_fid_v").value = data[4];
              document.getElementById("selectCurrency_fid_v").value = data[5];
              document.getElementById("cos_si_v").value = data[6];
              document.getElementById("cos_rate_v").value = data[7];
              document.getElementById("cos_prem_v").value = data[8];
              document.getElementById("pcl2_si_v").value = data[9];
              document.getElementById("pcl2_rate_v").value = data[10];
              document.getElementById("pcl2_prem_v").value = data[11];
              document.getElementById("allfg_si_v").value = data[12];
              document.getElementById("allfg_rate_v").value = data[13];
              document.getElementById("allfg_prem_v").value = data[14];
              document.getElementById("other_desc_fg_v").value = data[15];
              document.getElementById("other_si_fg_v").value = data[16];
              document.getElementById("other_rate_fg_v").value = data[17];
              document.getElementById("other_prem_fg_v").value = data[18];
              document.getElementById("other_desc_fg1_v").value = data[19];
              document.getElementById("other_si_fg1_v").value = data[20];
              document.getElementById("other_rate_fg1_v").value = data[21];
              document.getElementById("other_prem_fg1_v").value = data[22];
              document.getElementById("other_desc_fg2_v").value = data[23];
              document.getElementById("other_si_fg2_v").value = data[24];
              document.getElementById("other_rate_fg2_v").value = data[25];
              document.getElementById("other_prem_fg2_v").value = data[26];
              document.getElementById("other_desc_fg3_v").value = data[27];
              document.getElementById("other_si_fg3_v").value = data[28];
              document.getElementById("other_rate_fg3_v").value = data[29];
              document.getElementById("other_prem_fg3_v").value = data[30];
              document.getElementById("other_desc_fg4_v").value = data[31];
              document.getElementById("other_si_fg4_v").value = data[32];
              document.getElementById("other_rate_fg4_v").value = data[33];
              document.getElementById("other_prem_fg4_v").value = data[34];
              document.getElementById("ap4fg_si_v").value = data[35];
              document.getElementById("ap4fg_rate_v").value = data[36];
              document.getElementById("ap4fg_prem_v").value = data[37];
              document.getElementById("de4fg_si_v").value = data[38];
              document.getElementById("sub4fg_si_v").value = data[39];
              $("#view_eng_fg").modal("show");
          });
      });

  </script>
  <!-- ENG - FIDELITY GUARANTEE QUOTATION -->
  
  
  <!-- BANKERS INDEMNITY -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#bty_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#bty_table').DataTable();

          $('#bty_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("bty_id_v").value = data[0];
              document.getElementById("underwriter_bty_v").value = data[1];
              document.getElementById("insured_bty_v").value = data[2];
              document.getElementById("industry_bty_v").value = data[3];
              document.getElementById("intermediary_bty_v").value = data[4];
              document.getElementById("selectCurrency_bty_v").value = data[5];
              document.getElementById("fge_limits_v").value = data[6];
              document.getElementById("fge_rate_v").value = data[7];
              document.getElementById("fge_prem_v").value = data[8];
              document.getElementById("premises_limits_v").value = data[9];
              document.getElementById("premises_rate_v").value = data[10];
              document.getElementById("premises_prem_v").value = data[11];
              document.getElementById("transit_limits_v").value = data[12];
              document.getElementById("transit_rate_v").value = data[13];
              document.getElementById("transit_prem_v").value = data[14];
              document.getElementById("fc_limits_v").value = data[15];
              document.getElementById("fc_rate_v").value = data[16];
              document.getElementById("fc_prem_v").value = data[17];
              document.getElementById("fs_limits_v").value = data[18];
              document.getElementById("fs_rate_v").value = data[19];
              document.getElementById("fs_prem_v").value = data[20];
              document.getElementById("cc_limits_v").value = data[21];
              document.getElementById("cc_rate_v").value = data[22];
              document.getElementById("cc_prem_v").value = data[23];
              document.getElementById("doc_limits_v").value = data[24];
              document.getElementById("doc_rate_v").value = data[25];
              document.getElementById("doc_prem_v").value = data[26];
              document.getElementById("los_limits_v").value = data[27];
              document.getElementById("los_rate_v").value = data[28];
              document.getElementById("los_prem_v").value = data[29];
              document.getElementById("proi_limits_v").value = data[30];
              document.getElementById("proi_rate_v").value = data[31];
              document.getElementById("proi_prem_v").value = data[32];
              document.getElementById("rem_limits_v").value = data[33];
              document.getElementById("rem_rate_v").value = data[34];
              document.getElementById("rem_prem_v").value = data[35];
              document.getElementById("lod_limits_v").value = data[36];
              document.getElementById("lod_rate_v").value = data[37];
              document.getElementById("lod_prem_v").value = data[38];
              document.getElementById("csdb_limits_v").value = data[39];
              document.getElementById("csdb_rate_v").value = data[40];
              document.getElementById("csdb_prem_v").value = data[41];
              document.getElementById("ccl_limits_v").value = data[42];
              document.getElementById("ccl_rate_v").value = data[43];
              document.getElementById("ccl_prem_v").value = data[44];
              document.getElementById("other_desc_bi_v").value = data[45];
              document.getElementById("other_limit_bi_v").value = data[46];
              document.getElementById("other_rate_bi_v").value = data[47];
              document.getElementById("other_prem_bi_v").value = data[48];
              document.getElementById("other_desc_bi1_v").value = data[49];
              document.getElementById("other_limit_bi1_v").value = data[50];
              document.getElementById("other_rate_bi1_v").value = data[51];
              document.getElementById("other_prem_bi1_v").value = data[52];
              document.getElementById("other_desc_bi2_v").value = data[53];
              document.getElementById("other_limit_bi2_v").value = data[54];
              document.getElementById("other_rate_bi2_v").value = data[55];
              document.getElementById("other_prem_bi2_v").value = data[56];
              document.getElementById("other_desc_bi3_v").value = data[57];
              document.getElementById("other_limit_bi3_v").value = data[58];
              document.getElementById("other_rate_bi3_v").value = data[59];
              document.getElementById("other_prem_bi3_v").value = data[60];
              document.getElementById("other_desc_bi4_v").value = data[61];
              document.getElementById("other_limit_bi4_v").value = data[62];
              document.getElementById("other_rate_bi4_v").value = data[63];
              document.getElementById("other_prem_bi4_v").value = data[64];
              document.getElementById("tsi4bi_limits_v").value = data[65];
              document.getElementById("tsi4bi_rate_v").value = data[66];
              document.getElementById("tsi4bi_prem_v").value = data[67];
              document.getElementById("ap4bi_limits_v").value = data[68];
              document.getElementById("ap4bi_rate_v").value = data[69];
              document.getElementById("ap4bi_prem_v").value = data[70];
              document.getElementById("de4bi_limits_v").value = data[71];
              document.getElementById("sub4bi_limits_v").value = data[72];
              $("#view_eng_bty").modal("show");
          });
      });

  </script>
  <!-- BANKERS INDEMNITY -->
  
  
  <!-- ENG - BANKERS BLANKET BOND -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#bbb_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#bbb_table').DataTable();

          $('#bbb_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("bbb_id_v").value = data[0];
              document.getElementById("underwriter_bbb_v").value = data[1];
              document.getElementById("insured_bbb_v").value = data[2];
              document.getElementById("industry_bbb_v").value = data[3];
              document.getElementById("intermediary_bbb_v").value = data[4];
              document.getElementById("selectCurrency_bbb_v").value = data[5];
              document.getElementById("sob_limits_v").value = data[6];
              document.getElementById("sob_rate_v").value = data[7];
              document.getElementById("sob_prem_v").value = data[8];
              document.getElementById("s2cc_limits_v").value = data[9];
              document.getElementById("s2cc_rate_v").value = data[10];
              document.getElementById("s2cc_prem_v").value = data[11];
              document.getElementById("s3pi_limits_v").value = data[12];
              document.getElementById("s3pi_rate_v").value =  data[13]
              document.getElementById("s3pi_prem_v").value = data[14];
              document.getElementById("s3pi_limits2_v").value = data[15];
              document.getElementById("s3pi_rate2_v").value = data[16];
              document.getElementById("s3pi_prem2_v").value = data[17];
              document.getElementById("peril_limits_v").value = data[18];
              document.getElementById("peril_rate_v").value = data[19];
              document.getElementById("peril_prem_v").value = data[20];
              document.getElementById("aloi_limits_v").value = data[21];
              document.getElementById("aloi_rate_v").value = data[22];
              document.getElementById("aloi_prem_v").value = data[23];
              document.getElementById("other_desc_bbb_v").value = data[24];
              document.getElementById("other_limit_bbb_v").value = data[25];
              document.getElementById("other_rate_bbb_v").value = data[26];
              document.getElementById("other_prem_bbb_v").value = data[27];
              document.getElementById("other_desc_bbb1_v").value = data[28];
              document.getElementById("other_limit_bbb1_v").value = data[29];
              document.getElementById("other_rate_bbb1_v").value = data[30];
              document.getElementById("other_prem_bbb1_v").value = data[31];
              document.getElementById("other_desc_bbb2_v").value = data[32];
              document.getElementById("other_limit_bbb2_v").value = data[33];
              document.getElementById("other_rate_bbb2_v").value = data[34];
              document.getElementById("other_prem_bbb2_v").value = data[35];
              document.getElementById("other_desc_bbb3_v").value = data[36];
              document.getElementById("other_limit_bbb3_v").value = data[37];
              document.getElementById("other_rate_bbb3_v").value = data[38];
              document.getElementById("other_prem_bbb3_v").value = data[39];
              document.getElementById("other_desc_bbb4_v").value = data[40];
              document.getElementById("other_limit_bbb4_v").value = data[41];
              document.getElementById("other_rate_bbb4_v").value = data[42];
              document.getElementById("other_prem_bbb4_v").value = data[43];
              document.getElementById("apremm_limits_v").value = data[44];
              document.getElementById("apremm_rate_v").value = data[45];
              document.getElementById("apremm_prem_v").value = data[46];
              document.getElementById("ded_limits_v").value = data[47];
              document.getElementById("subs_limits_v").value = data[48];
              $("#view_eng_bbb").modal("show");
          });
      });

  </script>
  <!-- ENG - BANKERS BLANKET BOND -->
  
  
  <!-- ENG - MONEY INSURANCE -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#m_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#m_table').DataTable();

          $('#m_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("m_id_v").value = data[0];
              document.getElementById("underwriter_m_v").value = data[1];
              document.getElementById("insured_m_v").value = data[2];
              document.getElementById("industry_m_v").value = data[3];
              document.getElementById("intermediary_m_v").value = data[4];
              document.getElementById("selectCurrency_m_v").value = data[5];
              document.getElementById("ptl_si_v").value = data[6];
              document.getElementById("ptl_rate_v").value = data[7];
              document.getElementById("ptl_prem_v").value = data[8];
              document.getElementById("ac_si_v").value = data[9];
              document.getElementById("ac_rate_v").value = data[10];
              document.getElementById("ac_prem_v").value = data[11];
              document.getElementById("loi_cis_si_v").value = data[12];
              document.getElementById("loi_cis_rate_v").value = data[13];
              document.getElementById("loi_cis_prem_v").value = data[14];
              document.getElementById("loi_hp_limits_v").value = data[15];
              document.getElementById("loi_hp_rate_v").value = data[16];
              document.getElementById("loi_hp_prem_v").value = data[17];
              document.getElementById("other_desc_mi_v").value = data[18];
              document.getElementById("other_limit_mi_v").value = data[19];
              document.getElementById("other_rate_mi_v").value = data[20];
              document.getElementById("other_prem_mi_v").value = data[21];
              document.getElementById("other_desc_mi1_v").value = data[22];
              document.getElementById("other_limit_mi1_v").value = data[23];
              document.getElementById("other_rate_mi1_v").value = data[24];
              document.getElementById("other_prem_mi1_v").value = data[25];
              document.getElementById("other_desc_mi2_v").value = data[26];
              document.getElementById("other_limit_mi2_v").value = data[27];
              document.getElementById("other_rate_mi2_v").value = data[28];
              document.getElementById("other_prem_mi2_v").value = data[29];
              document.getElementById("ap_money_si_v").value = data[30];
              document.getElementById("ap_money_rate_v").value = data[31];
              document.getElementById("ap_money_prem_v").value = data[32];
              document.getElementById("de_money_si_v").value = data[33];
              document.getElementById("sub_money_si_v").value = data[34];
              $("#view_eng_money").modal("show");
          });
      });

  </script>
  <!-- ENG - MONEY INSURANCE -->
  
  
  <!-- ENG - GROUP PERSONAL ACCIDENT -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#gpa_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#gpa_table').DataTable();

          $('#gpa_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("gpa_id_v").value = data[0];
              document.getElementById("underwriter_gpa_v").value = data[1];
              document.getElementById("insured_gpa_v").value = data[2];
              document.getElementById("industry_gpa_v").value = data[3];
              document.getElementById("intermediary_gpa_v").value = data[4];
              document.getElementById("selectCurrency_gpa_v").value = data[5];
              document.getElementById("num_asc_v").value = data[6];
              document.getElementById("clerical_as_v").value = data[7];
              document.getElementById("clerical_num_v").value = data[8];
              document.getElementById("clerical_etas_v").value = data[9];
              document.getElementById("clerical_cs_v").value = data[10];
              document.getElementById("nc_as_v").value = data[11];
              document.getElementById("nc_num_v").value = data[12];
              document.getElementById("nc_etas_v").value = data[13];
              document.getElementById("nc_cs_v").value = data[14];
              document.getElementById("mors_as_v").value = data[15];
              document.getElementById("mors_num_v").value = data[16];
              document.getElementById("mors_etas_v").value = data[17];
              document.getElementById("mors_cs_v").value = data[18];
              document.getElementById("artisans_as_v").value = data[19];
              document.getElementById("artisans_num_v").value = data[20];
              document.getElementById("artisans_etas_v").value = data[21];
              document.getElementById("artisans_cs_v").value = data[22];
              document.getElementById("sormw_as_v").value = data[23];
              document.getElementById("sormw_num_v").value = data[24];
              document.getElementById("sormw_etas_v").value = data[25];
              document.getElementById("sormw_cs_v").value = data[26];
              document.getElementById("total_as_v").value = data[27];
              document.getElementById("total_num_v").value = data[28];
              document.getElementById("total_etas_v").value = data[29];
              document.getElementById("total_cs_v").value = data[30];
              document.getElementById("death_as_v").value = data[31];
              document.getElementById("death_num_v").value = data[32];
              document.getElementById("death_etas_v").value = data[33];
              document.getElementById("death_cs_v").value = data[34];
              document.getElementById("pd_terms_v").value = data[35];
              document.getElementById("pd_cs_v").value = data[36];
              document.getElementById("pd_rate_v").value = data[37];
              document.getElementById("pd_prem_v").value = data[38];
              document.getElementById("td_terms_v").value = data[39];
              document.getElementById("td_cs_v").value = data[40];
              document.getElementById("td_rate_v").value = data[41];
              document.getElementById("td_prem_v").value = data[42];
              document.getElementById("me_terms_v").value = data[43];
              document.getElementById("me_cs_v").value = data[44];
              document.getElementById("me_rate_v").value = data[45];
              document.getElementById("me_prem_v").value = data[46];
              document.getElementById("death4_as_v").value = data[47];
              document.getElementById("death4_num_v").value = data[48];
              document.getElementById("death4_etas_v").value = data[49];
              document.getElementById("death4_cs_v").value = data[50];
              document.getElementById("pd4_terms_v").value = data[51];
              document.getElementById("pd4_cs_v").value = data[52];
              document.getElementById("pd4_rate_v").value = data[53];
              document.getElementById("pd4_prem_v").value = data[54];
              document.getElementById("td4_terms_v").value = data[55];
              document.getElementById("td4_cs_v").value = data[56];
              document.getElementById("td4_rate_v").value = data[57];
              document.getElementById("td4_prem_v").value = data[58];
              document.getElementById("me4_terms_v").value = data[59];
              document.getElementById("me4_cs_v").value = data[60];
              document.getElementById("me4_rate_v").value = data[61];
              document.getElementById("me4_prem_v").value = data[62];
              document.getElementById("total_prem_term_v").value = data[63];
              document.getElementById("total_prem_cs_v").value = data[64];
              document.getElementById("total_prem_rate_v").value = data[65];
              document.getElementById("total_prems_v").value = data[66];
              document.getElementById("gd4gpa_terms_v").value = data[67];
              document.getElementById("gd4gpa_cs_v").value = data[68];
              document.getElementById("gd4gpa_rate_v").value = data[69];
              document.getElementById("gd4gpa_prem_v").value = data[70];
              document.getElementById("ap4gpa_terms_v").value = data[71];
              document.getElementById("ap4gpa_cs_v").value = data[72];
              document.getElementById("ap4gpa_rate_v").value = data[73];
              document.getElementById("ap4gpa_prem_v").value = data[74];
              document.getElementById("deduc_terms_v").value = data[75];
              document.getElementById("sub1_terms_v").value = data[76];
              $("#view_eng_gpa").modal("show");
          });
      });

  </script>
  <!-- ENG - GROUP PERSONAL ACCIDENT -->
  
  
  <!-- ENG - ENG - WORKMENS' COMPENSATION -->
<script type="text/javascript">
      $(document).ready(function() {
          $('#wc_table').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#wc_table').DataTable();

          $('#wc_table tbody').on('dblclick', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("heo_v").value = data[0];
              document.getElementById("wc_id_v").value = data[1];
              document.getElementById("underwriter_wc_v").value = data[2];
              document.getElementById("insured_wc_v").value = data[3];
              document.getElementById("industry_wc_v").value = data[4];
              document.getElementById("intermediary_wc_v").value = data[5];
              document.getElementById("selectCurrency_wc_v").value = data[6];
              document.getElementById("clerical_asp_v").value = data[7];
              document.getElementById("clerical_num_wc_v").value = data[8];
              document.getElementById("clerical_dtas_v").value = data[9];
              document.getElementById("clerical_heoc_v").value = data[10];
              document.getElementById("clerical_bc_v").value = data[11];
              document.getElementById("clerical_rate_v").value = data[12];
              document.getElementById("clerical_prem_v").value = data[13];
              document.getElementById("nonclerical_asp_v").value = data[14];
              document.getElementById("nonclerical_num_v").value = data[15];
              document.getElementById("nonclerical_dtas_v").value = data[16];
              document.getElementById("nonclerical_heoc_v").value = data[17];
              document.getElementById("nonclerical_bc_v").value = data[18];
              document.getElementById("nonclerical_rate_v").value = data[19];
              document.getElementById("nonclerical_prem_v").value = data[20];
              document.getElementById("msd_asp_v").value = data[21];
              document.getElementById("msd_num_v").value = data[22];
              document.getElementById("msd_dtas_v").value = data[23];
              document.getElementById("msd_heoc_v").value = data[24];
              document.getElementById("msd_bc_v").value = data[25];
              document.getElementById("msd_rate_v").value = data[26];
              document.getElementById("msd_prem_v").value = data[27];
              document.getElementById("tech_asp_v").value = data[28];
              document.getElementById("tech_num_v").value = data[29];
              document.getElementById("tech_dtas_v").value = data[30];
              document.getElementById("tech_heoc_v").value = data[31];
              document.getElementById("tech_bc_v").value = data[32];
              document.getElementById("tech_rate_v").value = data[33];
              document.getElementById("tech_prem_v").value = data[34];
              document.getElementById("smldm_asp_v").value = data[35];
              document.getElementById("smldm_num_v").value = data[36];
              document.getElementById("smldm_dtas_v").value = data[37];
              document.getElementById("smldm_heoc_v").value = data[38];
              document.getElementById("smldm_bc_v").value = data[39];
              document.getElementById("smldm_rate_v").value = data[40];
              document.getElementById("smldm_prem_v").value = data[41];
              document.getElementById("artpe_asp_v").value = data[42];
              document.getElementById("artpe_num_v").value = data[43];
              document.getElementById("artpe_dtas_v").value = data[44];
              document.getElementById("artpe_heoc_v").value = data[45];
              document.getElementById("artpe_bc_v").value = data[46];
              document.getElementById("artpe_rate_v").value = data[47];
              document.getElementById("artpe_prem_v").value = data[48];
              document.getElementById("other_desc_v").value = data[49];
              document.getElementById("other_asp_v").value = data[50];
              document.getElementById("other_num_v").value = data[51];
              document.getElementById("other_dtas_v").value = data[52];
              document.getElementById("other_heoc_v").value = data[53];
              document.getElementById("other_bc_v").value = data[54];
              document.getElementById("other_rate_v").value = data[55];
              document.getElementById("other_prem_v").value = data[56];
              document.getElementById("other1_desc_v").value = data[57];
              document.getElementById("other1_asp_v").value = data[58];
              document.getElementById("other1_num_v").value = data[59];
              document.getElementById("other1_dtas_v").value = data[60];
              document.getElementById("other1_heoc_v").value = data[61];
              document.getElementById("other1_bc_v").value = data[62];
              document.getElementById("other1_rate_v").value = data[63];
              document.getElementById("other1_prem_v").value = data[64];
              document.getElementById("total_asp_v").value = data[65];
              document.getElementById("total_num_v").value = data[66];
              document.getElementById("total_dtas_v").value = data[67];
              document.getElementById("total_heoc_v").value = data[68];
              document.getElementById("total_bc_v").value = data[69];
              document.getElementById("total_rate_v").value = data[70];
              document.getElementById("total_prem_v").value = data[71];
              document.getElementById("mel1_v").value = data[72];
              document.getElementById("asp1_v").value = data[73];
              document.getElementById("mel2_v").value = data[74];
              document.getElementById("mel3_v").value = data[75];
              document.getElementById("mel_bc_v").value = data[76];
              document.getElementById("mel_rate_v").value = data[77];
              document.getElementById("mel_prem_v").value = data[78];
              document.getElementById("mel_v").value = data[79];
              document.getElementById("asp2").value = data[80];
              document.getElementById("mel1ro_v").value = data[81];
              document.getElementById("mel2ro_v").value = data[82];
              document.getElementById("mel3ro_v").value = data[83];
              document.getElementById("mel_bc2_v").value = data[84];
              document.getElementById("mel_rate2_v").value = data[85];
              document.getElementById("mel_prem2_v").value = data[86];
              document.getElementById("cll_num_ro_v").value = data[87];
              document.getElementById("asp3_v").value = data[88];
              document.getElementById("cll_dtas_ro_v").value = data[89];
              document.getElementById("cll_heoc_ro_v").value = data[90];
              document.getElementById("cll_bc_v").value = data[91];
              document.getElementById("coll_rate_v").value = data[92];
              document.getElementById("coll_prem_v").value = data[93];
              document.getElementById("cll_v").value = data[94];
              document.getElementById("cll_asp").value = data[95];
              document.getElementById("cll_num_ro22_v").value = data[96];
              document.getElementById("cll_dtas_ro22_v").value = data[97];
              document.getElementById("cll_heoc_ro22_v").value = data[98];
              document.getElementById("cll_bc22_v").value = data[99];
              document.getElementById("cll_rate22_v").value = data[100];
              document.getElementById("cll_prem222_v").value = data[101];
              document.getElementById("tfw_num_ro_v").value = data[102];
              document.getElementById("tfw_dtas_asp_v").value = data[103];
              document.getElementById("tfw_dtas_ro_v").value = data[104];
              document.getElementById("tfw_heoc_ro_v").value = data[105];
              document.getElementById("tfw_bc_v").value = data[106];
              document.getElementById("tfw_rate_v").value = data[107];
              document.getElementById("tfw_prem_v").value = data[108];
              document.getElementById("tfw2_v").value = data[109];
              document.getElementById("tfw_num_asp2").value = data[110];
              document.getElementById("tfw_num_ro2_v").value = data[111];
              document.getElementById("tfw_dtas_ro2_v").value = data[112];
              document.getElementById("tfw_heoc_ro2_v").value = data[113];
              document.getElementById("tfw_bc2_v").value = data[114];
              document.getElementById("tfw_rate2_v").value = data[115];
              document.getElementById("tfw_prem22_v").value = data[116];
              document.getElementById("gd_num_ro_v").value = data[117];
              document.getElementById("gd_dtas_asp").value = data[118];
              document.getElementById("gd_dtas_ro_v").value = data[119];
              document.getElementById("gd_heoc_ro_v").value = data[120];
              document.getElementById("gd_bc_v").value = data[121];
              document.getElementById("gd_rate_v").value = data[122];
              document.getElementById("gd_prem_v").value = data[123];
              document.getElementById("dp_num_ro_v").value = data[124];
              document.getElementById("dp_dtas_asp_v").value = data[125];
              document.getElementById("dp_dtas_ro_v").value = data[126];
              document.getElementById("dp_heoc_ro_v").value = data[127];
              document.getElementById("dp_bc_v").value = data[128];
              document.getElementById("dep_rate_v").value = data[129];
              document.getElementById("dep_prem_v").value = data[130];
              document.getElementById("ap_num_asp_v").value = data[131];
              document.getElementById("ap_num_v").value = data[132];
              document.getElementById("ap_dtas_v").value = data[133];
              document.getElementById("ap_heoc_v").value = data[134];
              document.getElementById("ap_bc_v").value = data[135];
              document.getElementById("ap_rate_v").value = data[136];
              document.getElementById("ap_prem_v").value = data[137];
              document.getElementById("sub_num_v").value = data[138];
              document.getElementById("sub_num2_v").value = data[139];
              $("#view_eng_wc").modal("show");
          });
      });

  </script>
  <!-- ENG - ENG - WORKMENS' COMPENSATION -->





<!-- Script For Deleting Eng-Car & Ear Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_ce").on('click', function(e) {

              e.preventDefault();

              var ce_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_ce.php', {
                          ce_id: ce_id,
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <!-- Script For Restoring Eng-Car & Ear Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn").on('click', function(e) {

              e.preventDefault();

              var ce_idH= $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_ce.php', {
                          ce_idH: ce_idH,
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_ce").on('click', function(e) {

              e.preventDefault();

              var clrBtn_ce = $(this).attr("id");

                  $.post('/table/admin/junk/delete_ce.php', {
                          clrBtn_ce: clrBtn_ce,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_ce").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Eng-Plant & Machinery NRV Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_pm").on('click', function(e) {

              e.preventDefault();

              var pmnrv_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_pm.php', {
                          pmnrv_id: pmnrv_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <!-- Script For Restoring Eng-Plant & Machinery NRV Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_pmnrv").on('click', function(e) {

              e.preventDefault();

              var pmnrv_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_pm.php', {
                          pmnrv_idH: pmnrv_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_pmnrv").on('click', function(e) {

              e.preventDefault();

              var clrBtn_pmnrv = $(this).attr("id");

                  $.post('/table/admin/junk/delete_pm.php', {
                          clrBtn_pmnrv: clrBtn_pmnrv,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_pmnrv").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>




  <!-- Script For Deleting Eng-Plant & Machinery INDEMNITY Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_pmi").on('click', function(e) {

              e.preventDefault();

              var pmi_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_pm.php', {
                          pmi_id: pmi_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <!-- Script For Restoring Eng-Plant & Machinery INDEMNITY Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_pmi").on('click', function(e) {

              e.preventDefault();

              var pmi_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_pm.php', {
                          pmi_idH: pmi_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_pmi").on('click', function(e) {

              e.preventDefault();

              var clrBtn_pmi = $(this).attr("id");

                  $.post('/table/admin/junk/delete_pm.php', {
                          clrBtn_pmi: clrBtn_pmi,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_pmi").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Eng-Mechanical Breakdown Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_mb").on('click', function(e) {

              e.preventDefault();

              var mb_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_other.php', {
                          mb_id: mb_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <!-- Script For Restoring Eng-Mechanical Breakdown Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_mb").on('click', function(e) {

              e.preventDefault();

              var mb_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_other.php', {
                          mb_idH: mb_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_mb").on('click', function(e) {

              e.preventDefault();

              var clrBtn_mb = $(this).attr("id");

                  $.post('/table/admin/junk/delete_eng_other.php', {
                          clrBtn_mb: clrBtn_mb,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_mb").modal("hide");

                      });

                      location.reload(true);

          });
      });
  </script>
  


<!-- Script For Deleting Eng-Electronic Equipment Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_ee").on('click', function(e) {

              e.preventDefault();

              var ee_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_other.php', {
                          ee_id: ee_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Eng-Electronic Equipment Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_ee").on('click', function(e) {

              e.preventDefault();

              var ee_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_other.php', {
                          ee_idH: ee_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_ee").on('click', function(e) {

              e.preventDefault();

              var clrBtn_ee = $(this).attr("id");

                  $.post('/table/admin/junk/delete_eng_other.php', {
                          clrBtn_ee: clrBtn_ee,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_ee").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Assets All Risks Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_aar").on('click', function(e) {

              e.preventDefault();

              var aar_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          aar_id: aar_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Assets All Risks Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_aar").on('click', function(e) {

              e.preventDefault();

              var aar_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          aar_idH: aar_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_aar").on('click', function(e) {

              e.preventDefault();

              var clrBtn_aar = $(this).attr("id");

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          clrBtn_aar: clrBtn_aar,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_aar").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Fire & Allied Perils Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_fap").on('click', function(e) {

              e.preventDefault();

              var fap_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          fap_id: fap_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Fire & Allied Perils Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_fap").on('click', function(e) {

              e.preventDefault();

              var fap_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          fap_idH: fap_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_fap").on('click', function(e) {

              e.preventDefault();

              var clrBtn_fap = $(this).attr("id");

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          clrBtn_fap: clrBtn_fap,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_fap").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Home Insurance Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_hi").on('click', function(e) {

              e.preventDefault();

              var hi_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          hi_id: hi_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Home Insurance Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_hi").on('click', function(e) {

              e.preventDefault();

              var hi_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          hi_idH: hi_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_hi").on('click', function(e) {

              e.preventDefault();

              var clrBtn_hi = $(this).attr("id");

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          clrBtn_hi: clrBtn_hi,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_hi").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Combing Fire & Burglary Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_cfb").on('click', function(e) {

              e.preventDefault();

              var cfb_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          cfb_id: cfb_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Combing Fire & Burglary Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_cfb").on('click', function(e) {

              e.preventDefault();

              var cfb_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          cfb_idH: cfb_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_cfb").on('click', function(e) {

              e.preventDefault();

              var clrBtn_cfb = $(this).attr("id");

                  $.post('/table/admin/junk/delete_eng_combo.php', {
                          clrBtn_cfb: clrBtn_cfb,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_cfb").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Public Liability Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_pl").on('click', function(e) {

              e.preventDefault();

              var pl_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_pl.php', {
                          pl_id: pl_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Public Liability Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_pl").on('click', function(e) {

              e.preventDefault();

              var pl_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_pl.php', {
                          pl_idH: pl_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_pl").on('click', function(e) {

              e.preventDefault();

              var clrBtn_pl = $(this).attr("id");

                  $.post('/table/admin/junk/delete_pl.php', {
                          clrBtn_pl: clrBtn_pl,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_pl").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting General Liability Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_gl").on('click', function(e) {

              e.preventDefault();

              var gl_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_gl.php', {
                          gl_id: gl_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring General Liability Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_gl").on('click', function(e) {

              e.preventDefault();

              var gl_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_gl.php', {
                          gl_idH: gl_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_gl").on('click', function(e) {

              e.preventDefault();

              var clrBtn_gl = $(this).attr("id");

                  $.post('/table/admin/junk/delete_gl.php', {
                          clrBtn_gl: clrBtn_gl,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_gl").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Director's & Officers Liability Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_do").on('click', function(e) {

              e.preventDefault();

              var do_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_do.php', {
                          do_id: do_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Director's & Officers Liability Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_do").on('click', function(e) {

              e.preventDefault();

              var do_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_do.php', {
                          do_idH: do_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_do").on('click', function(e) {

              e.preventDefault();

              var clrBtn_do = $(this).attr("id");

                  $.post('/table/admin/junk/delete_do.php', {
                          clrBtn_do: clrBtn_do,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_do").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Professional Indemnity Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_pi").on('click', function(e) {

              e.preventDefault();

              var pi_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_pi.php', {
                          pi_id: pi_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Professional Indemnity Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_pi").on('click', function(e) {

              e.preventDefault();

              var pi_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_pi.php', {
                          pi_idH: pi_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_pri").on('click', function(e) {

              e.preventDefault();

              var clrBtn_pri = $(this).attr("id");

                  $.post('/table/admin/junk/delete_pi.php', {
                          clrBtn_pri: clrBtn_pri,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_pmi").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Fidelity Guarantee Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_fg").on('click', function(e) {

              e.preventDefault();

              var fg_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_fg.php', {
                          fg_id: fg_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Fidelity Guarantee Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_fg").on('click', function(e) {

              e.preventDefault();

              var fg_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_fg.php', {
                          fg_idH: fg_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_fg").on('click', function(e) {

              e.preventDefault();

              var clrBtn_fg = $(this).attr("id");

                  $.post('/table/admin/junk/delete_fg.php', {
                          clrBtn_fg: clrBtn_fg,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_pmi").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Bankers Indemnity Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_bi").on('click', function(e) {

              e.preventDefault();

              var bi_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_bi.php', {
                          bi_id: bi_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Bankers Indemnity Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_bi").on('click', function(e) {

              e.preventDefault();

              var bi_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_bi.php', {
                          bi_id: bi_id
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_bty").on('click', function(e) {

              e.preventDefault();

              var clrBtn_bty = $(this).attr("id");

                  $.post('/table/admin/junk/delete_bi.php', {
                          clrBtn_bty: clrBtn_bty,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_bty").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Bankers Blanket Bond Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_bbb").on('click', function(e) {

              e.preventDefault();

              var bbb_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_bbb.php', {
                          bbb_id: bbb_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Bankers Blanket Bond Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_bbb").on('click', function(e) {

              e.preventDefault();

              var bbb_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_bbb.php', {
                          bbb_idH: bbb_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_bbb").on('click', function(e) {

              e.preventDefault();

              var clrBtn_bbb = $(this).attr("id");

                  $.post('/table/admin/junk/delete_bbb.php', {
                          clrBtn_bbb: clrBtn_bbb,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_bbb").modal("hide");

                      });

                      location.reload(true);

          });
      });
  </script>


<!-- Script For Deleting Money Insurance Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_mi").on('click', function(e) {

              e.preventDefault();

              var mi_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_mi.php', {
                          mi_id: mi_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Money Insurance Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_mi").on('click', function(e) {

              e.preventDefault();

              var mi_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_mi.php', {
                          mi_idH: mi_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restore Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_m").on('click', function(e) {

              e.preventDefault();

              var clrBtn_m = $(this).attr("id");

                  $.post('/table/admin/junk/delete_mi.php', {
                          clrBtn_m: clrBtn_m,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_money").modal("hide");

                      });

                      location.reload(true);

          });
      });
  </script>




  <!-- Script For Deleting Group Personal Accident -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_gpa").on('click', function(e) {

              e.preventDefault();

              var gpa_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                  $.post('/table/admin/junk/delete_gpa.php', {
                          gpa_id: gpa_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Group Personal Accident -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_gpa").on('click', function(e) {

              e.preventDefault();

              var gpa_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_gpa.php', {
                          gpa_idH: gpa_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restre Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_gpa").on('click', function(e) {

              e.preventDefault();

              var clrBtn_gpa = $(this).attr("id");

                  $.post('/table/admin/junk/delete_gpa.php', {
                          clrBtn_gpa: clrBtn_gpa,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_gpa").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting Workmens Compensation Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_wc").on('click', function(e) {

              e.preventDefault();

              var wc_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete Quote ?")) {

                $("#addquote_eng_wc").modal("hide");
                
                  $.post('/table/admin/junk/delete_wc.php', {
                          wc_id: wc_id
                      },

                      function(data) {
                          if (data) {
                              alert("Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
<!-- Script For Restoring Workmens Compensation Data -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".restoreBtn_wc").on('click', function(e) {

              e.preventDefault();

              var wc_idH = $(this).attr("id");

              if (confirm("Are You Sure You Want To Restore Quote ?")) {

                  $.post('/table/admin/junk/delete_wc.php', {
                          wc_idH: wc_idH
                      },

                      function(data) {
                          if (data) {
                              alert("Restored...!");
                          } else {
                              alert("Couldn't Restre Quote!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>
  <script type="text/javascript">
      $(document).ready(function() {
          $(".clrBtn_wc").on('click', function(e) {

              e.preventDefault();

              var clrBtn_wc = $(this).attr("id");

                  $.post('/table/admin/junk/delete_wc.php', {
                          clrBtn_wc: clrBtn_wc,
                      },
                      function(data) {
                          if (data) {
                              alert("History Permanently Deleted...!");
                          } else {
                              alert("Couldn't Delete Quote!");
                          }

                          $("#deleteModal_wc").modal("hide");

                      });

                      location.reload(true);
          });
      });
  </script>


<!-- Script For Deleting User -->
  <script type="text/javascript">
      $(document).ready(function() {
          $(".delBtn_user").on('click', function(e) {

              e.preventDefault();

              var u_id = $(this).attr("id");

              if (confirm("Are You Sure You Want To Delete User ?")) {

                  $.post('/table/admin/junk/delete_user.php', {
                          u_id: u_id
                      },

                      function(data) {
                          if (data) {
                              alert("User Deleted...!");
                          } else {
                              alert("Couldnt Delete User!");
                          }

                      });

                      location.reload(true);
              }

          });
      });
  </script>








  <!-- Script for Getting Selected td into UserUpdate Modal -->
  <script type="text/javascript">
      $(document).ready(function() {
          $('#userTb').DataTable({
              "info": false,
              "responsive": true,
              "order": [
                  [0, "desc"]
              ],
              "columnDefs": [{
                  "targets": [0, 5],
                  "visible": false,
                  "searchable": false
              }]
          });

          var table = $('#userTb').DataTable();

          $('#userTb tbody').on('click', 'tr', function() {
              var data = table.row(this).data();
              document.getElementById("edit_id").value = data[0];
              document.getElementById("username_edit").value = data[1];
              document.getElementById("fullname_edit").value = data[2];
              document.getElementById("email_edit").value = data[3];
              document.getElementById("contact_edit").value = data[4];
              document.getElementById("password_edit").value = data[5];
              document.getElementById("department_edit").value = data[6];
              document.getElementById("branch_edit").value = data[7];
          });
      });

  </script>
