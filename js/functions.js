$(document).ready(function () {
    ///FUNCTION FOR REGISTERING OF USERS/////////    
    $("#register_user").on("click", () => {
        var username = $("#username").val(),
            fullname = $("#fullname").val(),
            email = $("#email").val(),
            contact = $("#contact").val(),
            password = $("#password").val(),
            department = $("#department").val(),
            branch = $("#branch").val(),

            register_user = "insert_user";

        $.post("/table/admin/junk/manage_user.php", {
            username: username,
            fullname: fullname,
            email: email,
            contact: contact,
            password: password,
            department: department,
            branch: branch,

            register_user: register_user

        }, function (da) {
            console.log(da);
            var da = JSON.parse(da);
            if (da.vSkySuc) {
                alert(da.vSkyNote);
            } else if (da.vSkySuc == "found") {
                alert(da.vSkyNote);
            } else {
                alert(da.vSkyNote);
            }

            $("#adduser").modal("hide");

        });
    });



    ///FUNCTION FOR UPDATING OF USERS/////////    
    $("#update_user").on("click", () => {
        var edit_id = $("#edit_id").val(),
            username_edit = $("#username_edit").val(),
            fullname_edit = $("#fullname_edit").val(),
            email_edit = $("#email_edit").val(),
            contact_edit = $("#contact_edit").val(),
            password_edit = $("#password_edit").val(),
            department_edit = $("#department_edit").val(),
            branch_edit = $("#branch_edit").val(),

            update_user = "u_updated";

        $.post("/table/admin/junk/update_user.php", {
            edit_id: edit_id,
            username_edit: username_edit,
            fullname_edit: fullname_edit,
            email_edit: email_edit,
            contact_edit: contact_edit,
            password_edit: password_edit,
            department_edit: department_edit,
            branch_edit: branch_edit,

            update_user: update_user

        }, function (da) {
            console.log(da);
            var da = JSON.parse(da);
            if (da.vSkySuc) {
                alert(da.vSkyNote);
            } else if (da.vSkySuc == "data") {
                alert(da.vSkyNote);
            } else {
                alert(da.vSkyNote);
            }
        });
    });






});





///// Submission Function for Printing CAR & EAR
$(document).ready(function () {
    $("#print_eng_ce").on('click', function (e) {

        e.preventDefault();

        var formData_ce = new FormData(document.getElementById("eng_ce_form_v"));

        formData_ce = [...formData_ce.entries()];

        console.log(formData_ce);

        window.open("http://localhost:1234/table/admin/ce_pdf.php?ceprintform="+btoa(JSON.stringify(formData_ce)), "_blank");

    });
});


///// Submission Function for Printing PM NRV
$(document).ready(function () {
    $("#print_eng_nrv").on('click', function (e) {

        e.preventDefault();

        var formData_nrv = new FormData(document.getElementById("eng_nrv_form_v"));

        formData_nrv = [...formData_nrv.entries()];

        console.log(formData_nrv);

        window.open("http://localhost:1234/table/admin/nrv_pdf.php?nrvprintform="+btoa(JSON.stringify(formData_nrv)), "_blank");

    });
});


///// Submission Function for Printing PM INDEMNITY
$(document).ready(function () {
    $("#print_eng_pmi").on('click', function (e) {

        e.preventDefault();

        var formData_pmi = new FormData(document.getElementById("eng_pmi_form_v"));

        formData_pmi = [...formData_pmi.entries()];

        console.log(formData_pmi);

        window.open("http://localhost:1234/table/admin/pmi_pdf.php?pmiprintform="+btoa(JSON.stringify(formData_pmi)), "_blank");

    });
});


///// Submission Function for Printing MACHINERY BREAKDOWN
$(document).ready(function () {
    $("#print_eng_mb").on('click', function (e) {

        e.preventDefault();

        var formData_mb = new FormData(document.getElementById("eng_mb_form_v"));

        formData_mb = [...formData_mb.entries()];

        console.log(formData_mb);

        window.open("http://localhost:1234/table/admin/mb_pdf.php?mbprintform="+btoa(JSON.stringify(formData_mb)), "_blank");

    });
});


///// Submission Function for Printing ELECTRONIC EQUIPMENT
$(document).ready(function () {
    $("#print_eng_ee").on('click', function (e) {

        e.preventDefault();

        var formData_ee = new FormData(document.getElementById("eng_ee_form_v"));

        formData_ee = [...formData_ee.entries()];

        console.log(formData_ee);

        window.open("http://localhost:1234/table/admin/eee_pdf.php?eeeprintform="+btoa(JSON.stringify(formData_ee)), "_blank");

    });
});


///// Submission Function for Printing ASSETS ALL RISKS
$(document).ready(function () {
    $("#print_eng_aar").on('click', function (e) {

        e.preventDefault();

        var formData_aar = new FormData(document.getElementById("eng_aar_form_v"));

        formData_aar = [...formData_aar.entries()];

        console.log(formData_aar);

        window.open("http://localhost:1234/table/admin/aar_pdf.php?aarprintform="+btoa(JSON.stringify(formData_aar)), "_blank");

    });
});


///// Submission Function for Printing FIRE & ALIED PERILS
$(document).ready(function () {
    $("#print_eng_fap").on('click', function (e) {

        e.preventDefault();

        var formData_fap = new FormData(document.getElementById("eng_fap_form_v"));

        formData_fap = [...formData_fap.entries()];

        console.log(formData_fap);

        window.open("http://localhost:1234/table/admin/fap_pdf.php?fapprintform="+btoa(JSON.stringify(formData_fap)), "_blank");

    });
});


///// Submission Function for Printing HOME INSURANCE
$(document).ready(function () {
    $("#print_eng_hi").on('click', function (e) {

        e.preventDefault();

        var formData_hi = new FormData(document.getElementById("eng_hi_form_v"));

        formData_hi = [...formData_hi.entries()];

        console.log(formData_hi);

        window.open("http://localhost:1234/table/admin/hi_pdf.php?hiprintform="+btoa(JSON.stringify(formData_hi)), "_blank");

    });
});


///// Submission Function for Printing COMBINED FIRE & BURGLARY
$(document).ready(function () {
    $("#print_eng_cfb").on('click', function (e) {

        e.preventDefault();

        var formData_cfb = new FormData(document.getElementById("eng_cfb_form_v"));

        formData_cfb = [...formData_cfb.entries()];

        console.log(formData_cfb);

        window.open("http://localhost:1234/table/admin/cfb_pdf.php?cfbprintform="+btoa(JSON.stringify(formData_cfb)), "_blank");

    });
});


///// Submission Function for Printing PUBLIC LIABILITY
$(document).ready(function () {
    $("#print_eng_pl").on('click', function (e) {

        e.preventDefault();

        var formData_pl = new FormData(document.getElementById("eng_pl_form_v"));

        formData_pl = [...formData_pl.entries()];

        console.log(formData_pl);

        window.open("http://localhost:1234/table/admin/pl_pdf.php?plprintform="+btoa(JSON.stringify(formData_pl)), "_blank");

    });
});


///// Submission Function for Printing GENERAL LIABILITY
$(document).ready(function () {
    $("#print_eng_gl").on('click', function (e) {

        e.preventDefault();

        var formData_gl = new FormData(document.getElementById("eng_gl_form_v"));

        formData_gl = [...formData_gl.entries()];

        console.log(formData_gl);

        window.open("http://localhost:1234/table/admin/gl_pdf.php?glprintform="+btoa(JSON.stringify(formData_gl)), "_blank");

    });
});


///// Submission Function for Printing DIRECTORS & OFFICERS LIABILITY
$(document).ready(function () {
    $("#print_eng_do").on('click', function (e) {

        e.preventDefault();

        var formData_do = new FormData(document.getElementById("eng_do_form_v"));

        formData_do = [...formData_do.entries()];

        console.log(formData_do);

        window.open("http://localhost:1234/table/admin/do_pdf.php?doprintform="+btoa(JSON.stringify(formData_do)), "_blank");

    });
});


///// Submission Function for Printing FIDELITY GUARANTEE
$(document).ready(function () {
    $("#print_eng_pi").on('click', function (e) {

        e.preventDefault();

        var formData_pi = new FormData(document.getElementById("eng_pi_form_v"));

        formData_pi = [...formData_pi.entries()];

        console.log(formData_pi);

        window.open("http://localhost:1234/table/admin/pi_pdf.php?piprintform="+btoa(JSON.stringify(formData_pi)), "_blank");

    });
});


///// Submission Function for Printing FIDELITY GUARANTEE
$(document).ready(function () {
    $("#print_eng_fg").on('click', function (e) {

        e.preventDefault();

        var formData_fg = new FormData(document.getElementById("eng_fg_form_v"));

        formData_fg = [...formData_fg.entries()];

        console.log(formData_fg);

        window.open("http://localhost:1234/table/admin/fg_pdf.php?fgprintform="+btoa(JSON.stringify(formData_fg)), "_blank");

    });
});


///// Submission Function for Printing BANKERS INDEMNITY
$(document).ready(function () {
    $("#print_eng_bi").on('click', function (e) {

        e.preventDefault();

        var formData_bi = new FormData(document.getElementById("eng_bty_form_v"));

        formData_bi = [...formData_bi.entries()];

        console.log(formData_bi);

        window.open("http://localhost:1234/table/admin/bi_pdf.php?biprintform="+btoa(JSON.stringify(formData_bi)), "_blank");

    });
});


///// Submission Function for Printing BANKERS BLANKET BOND
$(document).ready(function () {
    $("#print_eng_bbb").on('click', function (e) {

        e.preventDefault();

        var formData_bbb = new FormData(document.getElementById("eng_bbb_form_v"));

        formData_bbb = [...formData_bbb.entries()];

        console.log(formData_bbb);

        window.open("http://localhost:1234/table/admin/bbb_pdf.php?bbbprintform="+btoa(JSON.stringify(formData_bbb)), "_blank");

    });
});


///// Submission Function for Printing MONEY INSURANCE
$(document).ready(function () {
    $("#print_eng_money").on('click', function (e) {

        e.preventDefault();

        var formData_money = new FormData(document.getElementById("eng_money_form_v"));

        formData_money = [...formData_money.entries()];

        console.log(formData_money);

        window.open("http://localhost:1234/table/admin/money_pdf.php?moneyprintform="+btoa(JSON.stringify(formData_money)), "_blank");

    });
});


///// Submission Function for Printing GROUP PERSONAL ACCIDENT
$(document).ready(function () {
    $("#print_eng_gpa").on('click', function (e) {

        e.preventDefault();

        var formData_gpa = new FormData(document.getElementById("eng_gpa_form_v"));

        formData_gpa = [...formData_gpa.entries()];

        console.log(formData_gpa);

        window.open("http://localhost:1234/table/admin/gpa_pdf.php?gpaprintform="+btoa(JSON.stringify(formData_gpa)), "_blank");

    });
});

///// Submission Function for Printing WORKMENS COMPENSATION
$(document).ready(function () {
    $("#print_eng_wc").on('click', function (e) {

        e.preventDefault();

        var formData_wc = new FormData(document.getElementById("eng_wc_form_v"));

        formData_wc = [...formData_wc.entries()];

        console.log(formData_wc);

        window.open("http://localhost:1234/table/admin/wc_pdf.php?wcprintform="+btoa(JSON.stringify(formData_wc)), "_blank");

    });
});








//// FUNCTIONS FOR UPDATING CONFIG_COMBO ////
$("#updatebtn_combo").on("click", () => {
    var edit_fea_dscut_si = $("#edit_fea_dscut_si").val(),
        edit_hd_si = $("#edit_hd_si").val(),
        edit_ltad_si = $("#edit_ltad_si").val(),
        edit_fea_dscut_si2 = $("#edit_fea_dscut_si2").val(),
        edit_hd_si2 = $("#edit_hd_si2").val(),
        edit_ltad_si2 = $("#edit_ltad_si2").val(),
        edit_fea_dscut_si3 = $("#edit_fea_dscut_si3").val(),
        edit_hd_si3 = $("#edit_hd_si3").val(),
        edit_ltad_si3 = $("#edit_ltad_si3").val(),
        edit_fea_dscut_si4 = $("#edit_fea_dscut_si4").val(),
        edit_hd_si4 = $("#edit_hd_si4").val(),
        edit_ltad_si4 = $("#edit_ltad_si4").val(),

        edit_combo = "updated";

    $.post("/table/admin/junk/update_cc.php", {
        edit_fea_dscut_si: edit_fea_dscut_si,
        edit_hd_si: edit_hd_si,
        edit_ltad_si: edit_ltad_si,
        edit_fea_dscut_si2: edit_fea_dscut_si2,
        edit_hd_si2: edit_hd_si2,
        edit_ltad_si2: edit_ltad_si2,
        edit_fea_dscut_si3: edit_fea_dscut_si3,
        edit_hd_si3: edit_hd_si3,
        edit_ltad_si3: edit_ltad_si3,
        edit_fea_dscut_si4: edit_fea_dscut_si4,
        edit_hd_si4: edit_hd_si4,
        edit_ltad_si4: edit_ltad_si4,

        edit_combo: edit_combo

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});

//// FUNCTION FOR UPDATING WC CONFIG ////
$("#updatebtn_wc").on("click", () => {
    var mel_rate_edit = $("#mel_rate_edit").val(),
        cll_rate_edit = $("#cll_rate_edit").val(),
        tfw_rate_edit = $("#tfw_rate_edit").val(),
        gd_rate_edit = $("#gd_rate_edit").val(),

        wc_config = "update";

    $.post("/table/admin/junk/update_cwc.php", {
        mel_rate_edit: mel_rate_edit,
        cll_rate_edit: cll_rate_edit,
        tfw_rate_edit: tfw_rate_edit,
        gd_rate_edit: gd_rate_edit,

        wc_config: wc_config

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});





////---------------------------------------------------------------------------------------------/////




//// HERE IS WHERE DATA IS CAPTURED FROM INPUT TO PHP FOR PROCESSING ////
//// ENGINEERING - CAR &EAR QUOTATION ///////////////////////////////////
$("#eng_ce_save").on("click", () => {
    var date_input_ce = $("#date_input_ce").val(),
        eng_ce = "eng_ce",
        underwriter_ce = $("#underwriter_ce").val(),
        insured_ce = $("#insured_ce").val(),
        industry_ce = $("#industry_ce").val(),
        intermediary_ce = $("#intermediary_ce").val(),
        selectCurrency_ce = $("#selectCurrency_ce").val(),

        contract_sum_cp = $("#contract_sum_cp").val(),
        rate_cp = $("#rate_cp").val(),
        premium_cp = $("#premium_cp").val(),

        contract_sum_tpl = $("#contract_sum_tpl").val(),
        rate_tpl = $("#rate_tpl").val(),
        premium_tpl = $("#premium_tpl").val(),

        contract_sum_csp = $("#contract_sum_csp").val(),
        rate_csp = $("#rate_csp").val(),
        premium_csp = $("#premium_csp").val(),

        contract_sum_bpm = $("#contract_sum_bpm").val(),
        rate_bpm = $("#rate_bpm").val(),
        premium_bpm = $("#premium_bpm").val(),

        contract_sum_rod = $("#contract_sum_rod").val(),
        rate_rod = $("#rate_rod").val(),
        premium_rod = $("#premium_rod").val(),

        contract_sum_md = $("#contract_sum_md").val(),
        rate_md = $("#rate_md").val(),
        premium_md = $("#premium_md").val(),

        contract_sum_src = $("#contract_sum_src").val(),
        rate_src = $("#rate_src").val(),
        premium_src = $("#premium_src").val(),

        contract_sum_cl = $("#contract_sum_cl").val(),
        rate_cl = $("#rate_cl").val(),
        premium_cl = $("#premium_cl").val(),

        contract_sum_72hc = $("#contract_sum_72hc").val(),
        rate_72hc = $("#rate_72hc").val(),
        premium_72hc = $("#premium_72hc").val(),

        contract_sum_pf = $("#contract_sum_pf").val(),
        rate_pf = $("#rate_pf").val(),
        premium_pf = $("#premium_pf").val(),

        contract_sum_emc = $("#contract_sum_emc").val(),
        rate_emc = $("#rate_emc").val(),
        premium_emc = $("#premium_emc").val(),

        contract_sum_spy = $("#contract_sum_spy").val(),
        rate_spy = $("#rate_spy").val(),
        premium_spy = $("#premium_spy").val(),

        contract_sum_aisi = $("#contract_sum_aisi").val(),
        rate_aisi = $("#rate_aisi").val(),
        premium_aisi = $("#premium_aisi").val(),

        contract_sum_rv = $("#contract_sum_rv").val(),
        rate_rv = $("#rate_rv").val(),
        premium_rv = $("#premium_rv").val(),

        contract_sum_arsi = $("#contract_sum_arsi").val(),
        rate_arsi = $("#rate_arsi").val(),
        premium_arsi = $("#premium_arsi").val(),

        contract_sum_m50 = $("#contract_sum_m50").val(),
        rate_m50 = $("#rate_m50").val(),
        premium_m50 = $("#premium_m50").val(),

        contract_sum_pa = $("#contract_sum_pa").val(),
        rate_pa = $("#rate_pa").val(),
        premium_pa = $("#premium_pa").val(),

        contract_sum_cpc = $("#contract_sum_cpc").val(),
        rate_cpc = $("#rate_cpc").val(),
        premium_cpc = $("#premium_cpc").val(),

        contract_sum_ucp = $("#contract_sum_ucp").val(),
        rate_ucp = $("#rate_ucp").val(),
        premium_ucp = $("#premium_ucp").val(),

        contract_sum_wos = $("#contract_sum_wos").val(),
        rate_wos = $("#rate_wos").val(),
        premium_wos = $("#premium_wos").val(),

        contract_sum_pdc = $("#contract_sum_pdc").val(),
        rate_pdc = $("#rate_pdc").val(),
        premium_pdc = $("#premium_pdc").val(),

        contract_sum_msec = $("#contract_sum_msec").val(),
        rate_msec = $("#rate_msec").val(),
        premium_msec = $("#premium_msec").val(),

        contract_sum_eco = $("#contract_sum_eco").val(),
        rate_eco = $("#rate_eco").val(),
        premium_eco = $("#premium_eco").val(),

        contract_sum_ecfa = $("#contract_sum_ecfa").val(),
        rate_ecfa = $("#rate_ecfa").val(),
        premium_ecfa = $("#premium_ecfa").val(),

        contract_sum_poss = $("#contract_sum_poss").val(),
        rate_poss = $("#rate_poss").val(),
        premium_poss = $("#premium_poss").val(),

        contract_sum_esp = $("#contract_sum_esp").val(),
        rate_esp = $("#rate_esp").val(),
        premium_esp = $("#premium_esp").val(),

        contract_sum_wcc = $("#contract_sum_wcc").val(),
        rate_wcc = $("#rate_wcc").val(),
        premium_wcc = $("#premium_wcc").val(),

        contract_sum_it = $("#contract_sum_it").val(),
        rate_it = $("#rate_it").val(),
        premium_it = $("#premium_it").val(),

        contract_sum_epp = $("#contract_sum_epp").val(),
        rate_epp = $("#rate_epp").val(),
        premium_epp = $("#premium_epp").val(),

        contract_sum_vrws = $("#contract_sum_vrws").val(),
        rate_vrws = $("#rate_vrws").val(),
        premium_vrws = $("#premium_vrws").val(),

        others_one = $("#others_one").val(),
        others_one_sum = $("#others_one_sum").val(),
        others_one_rate = $("#others_one_rate").val(),
        others_one_prem = $("#others_one_prem").val(),

        others_two = $("#others_two").val(),
        others_two_sum = $("#others_two_sum").val(),
        others_two_rate = $("#others_two_rate").val(),
        others_two_prem = $("#others_two_prem").val(),

        others_three = $("#others_three").val(),
        others_three_sum = $("#others_three_sum").val(),
        others_three_rate = $("#others_three_rate").val(),
        others_three_prem = $("#others_three_prem").val(),

        others_four = $("#others_four").val(),
        others_four_sum = $("#others_four_sum").val(),
        others_four_rate = $("#others_four_rate").val(),
        others_four_prem = $("#others_four_prem").val(),

        others_five = $("#others_five").val(),
        others_five_sum = $("#others_five_sum").val(),
        others_five_rate = $("#others_five_rate").val(),
        others_five_prem = $("#others_five_prem").val(),

        contract_sum_ebp = $("#contract_sum_ebp").val(),
        rate_ebp = $("#rate_ebp").val(),
        premium_ebp = $("#premium_ebp").val(),

        contract_sum_levy = $("#contract_sum_levy").val(),
        rate_levy = $("#rate_levy").val(),
        premium_levy = $("#premium_levy").val(),

        contract_sum_cert = $("#contract_sum_cert").val(),
        rate_cert = $("#rate_cert").val(),
        premium_cert = $("#premium_cert").val(),

        contract_sum_prem = $("#contract_sum_prem").val(),
        rate_prem = $("#rate_prem").val(),
        premium_prem = $("#premium_prem").val(),

        contract_sum_ded = $("#contract_sum_ded").val(),
        works_e = $("#works_e").val(),
        property_d = $("#property_d").val(),
        testing = $("#testing").val(),
        others = $("#others").val(),

        contract_sum_sub = $("#contract_sum_sub").val(),

        ce_values = "insert_ce";

    $.post("/table/admin/junk/process_ce.php", {
        date_input_ce: date_input_ce,
        eng_ce: eng_ce,
        underwriter_ce: underwriter_ce,
        insured_ce: insured_ce,
        industry_ce: industry_ce,
        intermediary_ce: intermediary_ce,
        selectCurrency_ce: selectCurrency_ce,
        contract_sum_cp: contract_sum_cp,
        rate_cp: rate_cp,
        premium_cp: premium_cp,
        contract_sum_tpl: contract_sum_tpl,
        rate_tpl: rate_tpl,
        premium_tpl: premium_tpl,
        contract_sum_csp: contract_sum_csp,
        rate_csp: rate_csp,
        premium_csp: premium_csp,
        contract_sum_bpm: contract_sum_bpm,
        rate_bpm: rate_bpm,
        premium_bpm: premium_bpm,
        contract_sum_rod: contract_sum_rod,
        rate_rod: rate_rod,
        premium_rod: premium_rod,
        contract_sum_md: contract_sum_md,
        rate_md: rate_md,
        premium_md: premium_md,
        contract_sum_src: contract_sum_src,
        rate_src: rate_src,
        premium_src: premium_src,
        contract_sum_cl: contract_sum_cl,
        rate_cl: rate_cl,
        premium_cl: premium_cl,
        contract_sum_72hc: contract_sum_72hc,
        rate_72hc: rate_72hc,
        premium_72hc: premium_72hc,
        contract_sum_pf: contract_sum_pf,
        rate_pf: rate_pf,
        premium_pf: premium_pf,
        contract_sum_emc: contract_sum_emc,
        rate_emc: rate_emc,
        premium_emc: premium_emc,
        contract_sum_spy: contract_sum_spy,
        rate_spy: rate_spy,
        premium_spy: premium_spy,
        contract_sum_aisi: contract_sum_aisi,
        rate_aisi: rate_aisi,
        premium_aisi: premium_aisi,
        contract_sum_rv: contract_sum_rv,
        rate_rv: rate_rv,
        premium_rv: premium_rv,
        contract_sum_arsi: contract_sum_arsi,
        rate_arsi: rate_arsi,
        premium_arsi: premium_arsi,
        contract_sum_m50: contract_sum_m50,
        rate_m50: rate_m50,
        premium_m50: premium_m50,
        contract_sum_pa: contract_sum_pa,
        rate_pa: rate_pa,
        premium_pa: premium_pa,
        contract_sum_cpc: contract_sum_cpc,
        rate_cpc: rate_cpc,
        premium_cpc: premium_cpc,
        contract_sum_ucp: contract_sum_ucp,
        rate_ucp: rate_ucp,
        premium_ucp: premium_ucp,
        contract_sum_wos: contract_sum_wos,
        rate_wos: rate_wos,
        premium_wos: premium_wos,
        contract_sum_pdc: contract_sum_pdc,
        rate_pdc: rate_pdc,
        premium_pdc: premium_pdc,
        contract_sum_msec: contract_sum_msec,
        rate_msec: rate_msec,
        premium_msec: premium_msec,
        contract_sum_eco: contract_sum_eco,
        rate_eco: rate_eco,
        premium_eco: premium_eco,
        contract_sum_ecfa: contract_sum_ecfa,
        rate_ecfa: rate_ecfa,
        premium_ecfa: premium_ecfa,
        contract_sum_poss: contract_sum_poss,
        rate_poss: rate_poss,
        premium_poss: premium_poss,
        contract_sum_esp: contract_sum_esp,
        rate_esp: rate_esp,
        premium_esp: premium_esp,
        contract_sum_wcc: contract_sum_wcc,
        rate_wcc: rate_wcc,
        premium_wcc: premium_wcc,
        contract_sum_it: contract_sum_it,
        rate_it: rate_it,
        premium_it: premium_it,
        contract_sum_epp: contract_sum_epp,
        rate_epp: rate_epp,
        premium_epp: premium_epp,
        contract_sum_vrws: contract_sum_vrws,
        rate_vrws: rate_vrws,
        premium_vrws: premium_vrws,
        others_one: others_one,
        others_one_sum: others_one_sum,
        others_one_rate: others_one_rate,
        others_one_prem: others_one_prem,
        others_two: others_two,
        others_two_sum: others_two_sum,
        others_two_rate: others_two_rate,
        others_two_prem: others_two_prem,
        others_three: others_three,
        others_three_sum: others_three_sum,
        others_three_rate: others_three_rate,
        others_three_prem: others_three_prem,
        others_four: others_four,
        others_four_sum: others_four_sum,
        others_four_rate: others_four_rate,
        others_four_prem: others_four_prem,
        others_five: others_five,
        others_five_sum: others_five_sum,
        others_five_rate: others_five_rate,
        others_five_prem: others_five_prem,
        contract_sum_ebp: contract_sum_ebp,
        rate_ebp: rate_ebp,
        premium_ebp: premium_ebp,
        contract_sum_levy: contract_sum_levy,
        rate_levy: rate_levy,
        premium_levy: premium_levy,
        contract_sum_cert: contract_sum_cert,
        rate_cert: rate_cert,
        premium_cert: premium_cert,
        contract_sum_prem: contract_sum_prem,
        rate_prem: rate_prem,
        premium_prem: premium_prem,
        contract_sum_ded: contract_sum_ded,
        works_e: works_e,
        property_d: property_d,
        testing: testing,
        others: others,
        contract_sum_sub: contract_sum_sub,
        ce_values: ce_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "found") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });
});


/// ENG - PLANT & MACHINERY (NEW REPLCMT VAL) QUOTATION ////////////////////////////
$("#save_eng_nrv").on("click", () => {
    var date_input_pm = $("#date_input_pm").val(),
        eng_pm_nrv = "eng_pm_nrv",
        underwriter_pm = $("#underwriter_pm").val(),
        insured_pm = $("#insured_pm").val(),
        industry_pm = $("#industry_pm").val(),
        intermediary_pm = $("#intermediary_pm").val(),
        selectCurrency_pm = $("#selectCurrency_pm").val(),

        new_replacement_value_tsi = $("#new_replacement_value_tsi").val(),
        rate_tsi = $("#rate_tsi").val(),
        premium_tsi = $("#premium_tsi").val(),

        other_desc_pm = $("#other_desc_pm").val(),
        other_nrv_pm = $("#other_nrv_pm").val(),
        other_rate_pm = $("#other_rate_pm").val(),
        other_prem_pm = $("#other_prem_pm").val(),

        other_desc_pm1 = $("#other_desc_pm1").val(),
        other_nrv_pm1 = $("#other_nrv_pm1").val(),
        other_rate_pm1 = $("#other_rate_pm1").val(),
        other_prem_pm1 = $("#other_prem_pm1").val(),

        other_desc_pm2 = $("#other_desc_pm2").val(),
        other_nrv_pm2 = $("#other_nrv_pm2").val(),
        other_rate_pm2 = $("#other_rate_pm2").val(),
        other_prem_pm2 = $("#other_prem_pm2").val(),

        other_desc_pm3 = $("#other_desc_pm3").val(),
        other_nrv_pm3 = $("#other_nrv_pm3").val(),
        other_rate_pm3 = $("#other_rate_pm3").val(),
        other_prem_pm3 = $("#other_prem_pm3").val(),

        other_desc_pm4 = $("#other_desc_pm4").val(),
        other_nrv_pm4 = $("#other_nrv_pm4").val(),
        other_rate_pm4 = $("#other_rate_pm4").val(),
        other_prem_pm4 = $("#other_prem_pm4").val(),

        ap_nrv = $("#ap_nrv").val(),
        ap_rate = $("#ap_rate").val(),
        ap_premium = $("#ap_premium").val(),

        pm_np = $("#pm_np").val(),
        pm_we = $("#pm_we").val(),
        pm_tp = $("#pm_tp").val(),
        pm_pd = $("#pm_pd").val(),
        pm_t = $("#pm_t").val(),
        pm_o = $("#pm_o").val(),

        nrv_sub = $("#nrv_sub").val(),

        pm_values = "insert_pm";

    $.post("/table/admin/junk/process_pm.php", {
        date_input_pm: date_input_pm,
        eng_pm_nrv: eng_pm_nrv,
        underwriter_pm: underwriter_pm,
        insured_pm: insured_pm,
        industry_pm: industry_pm,
        intermediary_pm: intermediary_pm,
        selectCurrency_pm: selectCurrency_pm,
        new_replacement_value_tsi: new_replacement_value_tsi,
        rate_tsi: rate_tsi,
        premium_tsi: premium_tsi,
        other_desc_pm: other_desc_pm,
        other_nrv_pm: other_nrv_pm,
        other_rate_pm: other_rate_pm,
        other_prem_pm: other_prem_pm,
        other_desc_pm1: other_desc_pm1,
        other_nrv_pm1: other_nrv_pm1,
        other_rate_pm1: other_rate_pm1,
        other_prem_pm1: other_prem_pm1,
        other_desc_pm2: other_desc_pm2,
        other_nrv_pm2: other_nrv_pm2,
        other_rate_pm2: other_rate_pm2,
        other_prem_pm2: other_prem_pm2,
        other_desc_pm3: other_desc_pm3,
        other_nrv_pm3: other_nrv_pm3,
        other_rate_pm3: other_rate_pm3,
        other_prem_pm3: other_prem_pm3,
        other_desc_pm4: other_desc_pm4,
        other_nrv_pm4: other_nrv_pm4,
        other_rate_pm4: other_rate_pm4,
        other_prem_pm4: other_prem_pm4,
        ap_nrv: ap_nrv,
        ap_rate: ap_rate,
        ap_premium: ap_premium,
        pm_np: pm_np,
        pm_we: pm_we,
        pm_tp: pm_tp,
        pm_pd: pm_pd,
        pm_t: pm_t,
        pm_o: pm_o,
        nrv_sub: nrv_sub,

        pm_values: pm_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG - PLANT & MACHINERY (INDEMNITY) QUOTATION ////////////////////////////
$("#save_eng_pmi").on("click", () => {
    var date_input_pmi = $("#date_input_pmi").val(),
        eng_pm_mv = "eng_pm_mv",
        underwriter_pmi = $("#underwriter_pmi").val(),
        insured_pmi = $("#insured_pmi").val(),
        industry_pmi = $("#industry_pmi").val(),
        intermediary_pmi = $("#intermediary_pmi").val(),
        selectCurrency_pmi = $("#selectCurrency_pmi").val(),

        market_value_tsi = $("#market_value_tsi").val(),
        rate_mv_tsi = $("#rate_mv_tsi").val(),
        premium_mv_tsi = $("#premium_mv_tsi").val(),

        other_desc_pmi = $("#other_desc_pmi").val(),
        other_nrv_pmi = $("#other_nrv_pmi").val(),
        other_rate_pmi = $("#other_rate_pmi").val(),
        other_prem_pmi = $("#other_prem_pmi").val(),

        other_desc_pmi1 = $("#other_desc_pmi1").val(),
        other_nrv_pmi1 = $("#other_nrv_pmi1").val(),
        other_rate_pmi1 = $("#other_rate_pmi1").val(),
        other_prem_pmi1 = $("#other_prem_pmi1").val(),

        other_desc_pmi2 = $("#other_desc_pmi2").val(),
        other_nrv_pmi2 = $("#other_nrv_pmi2").val(),
        other_rate_pmi2 = $("#other_rate_pmi2").val(),
        other_prem_pmi2 = $("#other_prem_pmi2").val(),

        other_desc_pmi3 = $("#other_desc_pmi3").val(),
        other_nrv_pmi3 = $("#other_nrv_pmi3").val(),
        other_rate_pmi3 = $("#other_rate_pmi3").val(),
        other_prem_pmi3 = $("#other_prem_pmi3").val(),

        other_desc_pmi4 = $("#other_desc_pmi4").val(),
        other_nrv_pmi4 = $("#other_nrv_pmi4").val(),
        other_rate_pmi4 = $("#other_rate_pmi4").val(),
        other_prem_pmi4 = $("#other_prem_pmi4").val(),

        ap_mkv = $("#ap_mkv").val(),
        ap_rate_mv = $("#ap_rate_mv").val(),
        ap_premium_mv = $("#ap_premium_mv").val(),

        pmi_np = $("#pmi_np").val(),
        pmi_we = $("#pmi_we").val(),
        pmi_tp = $("#pmi_tp").val(),
        pmi_pd = $("#pmi_pd").val(),
        pmi_t = $("#pmi_t").val(),
        pmi_o = $("#pmi_o").val(),

        mv_sub = $("#mv_sub").val(),

        pmi_values = "insert_pmi";

    $.post("/table/admin/junk/process_pmi.php", {
        date_input_pmi: date_input_pmi,
        eng_pm_mv: eng_pm_mv,
        underwriter_pmi: underwriter_pmi,
        insured_pmi: insured_pmi,
        industry_pmi: industry_pmi,
        intermediary_pmi: intermediary_pmi,
        selectCurrency_pmi: selectCurrency_pmi,
        market_value_tsi: market_value_tsi,
        rate_mv_tsi: rate_mv_tsi,
        premium_mv_tsi: premium_mv_tsi,
        other_desc_pmi: other_desc_pmi,
        other_nrv_pmi: other_nrv_pmi,
        other_rate_pmi: other_rate_pmi,
        other_prem_pmi: other_prem_pmi,
        other_desc_pmi1: other_desc_pmi1,
        other_nrv_pmi1: other_nrv_pmi1,
        other_rate_pmi1: other_rate_pmi1,
        other_prem_pmi1: other_prem_pmi1,
        other_desc_pmi2: other_desc_pmi2,
        other_nrv_pmi2: other_nrv_pmi2,
        other_rate_pmi2: other_rate_pmi2,
        other_prem_pmi2: other_prem_pmi2,
        other_desc_pmi3: other_desc_pmi3,
        other_nrv_pmi3: other_nrv_pmi3,
        other_rate_pmi3: other_rate_pmi3,
        other_prem_pmi3: other_prem_pmi3,
        other_desc_pmi4: other_desc_pmi4,
        other_nrv_pmi4: other_nrv_pmi4,
        other_rate_pmi4: other_rate_pmi4,
        other_prem_pmi4: other_prem_pmi4,
        ap_mkv: ap_mkv,
        ap_rate_mv: ap_rate_mv,
        ap_premium_mv: ap_premium_mv,
        pmi_np: pmi_np,
        pmi_we: pmi_we,
        pmi_tp: pmi_tp,
        pmi_pd: pmi_pd,
        pmi_t: pmi_t,
        pmi_o: pmi_o,
        mv_sub: mv_sub,

        pmi_values: pmi_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- MACHINERY BREAKDOWN QUOTATION ////////////////////////////
$("#save_eng_mb").on("click", () => {
    var date_input_mb = $("#date_input_mb").val(),
        eng_mb = "eng_mb",
        underwriter_mb = $("#underwriter_mb").val(),
        insured_mb = $("#insured_mb").val(),
        industry_mb = $("#industry_mb").val(),
        intermediary_mb = $("#intermediary_mb").val(),
        selectCurrency_mb = $("#selectCurrency_mb").val(),

        new_replacement_value_tsi2 = $("#new_replacement_value_tsi2").val(),
        rate_tsi2 = $("#rate_tsi2").val(),
        premium_tsi2 = $("#premium_tsi2").val(),

        nrv_srcc = $("#nrv_srcc").val(),
        rate_srcc = $("#rate_srcc").val(),
        premium_srcc = $("#premium_srcc").val(),

        nrv_oef = $("#nrv_oef").val(),
        rate_oef = $("#rate_oef").val(),
        premium_oef = $("#premium_oef").val(),

        nrv_airfreight = $("#nrv_airfreight").val(),
        rate_airfreight = $("#rate_airfreight").val(),
        premium_airfreight = $("#premium_airfreight").val(),

        nrv_sptpl = $("#nrv_sptpl").val(),
        rate_sptpl = $("#rate_sptpl").val(),
        premium_sptpl = $("#premium_sptpl").val(),

        other_desc_mb = $("#other_desc_mb").val(),
        other_nrv_mb = $("#other_nrv_mb").val(),
        other_rate_mb = $("#other_rate_mb").val(),
        other_prem_mb = $("#other_prem_mb").val(),

        other_desc_mb1 = $("#other_desc_mb1").val(),
        other_nrv_mb1 = $("#other_nrv_mb1").val(),
        other_rate_mb1 = $("#other_rate_mb1").val(),
        other_prem_mb1 = $("#other_prem_mb1").val(),

        other_desc_mb2 = $("#other_desc_mb2").val(),
        other_nrv_mb2 = $("#other_nrv_mb2").val(),
        other_rate_mb2 = $("#other_rate_mb2").val(),
        other_prem_mb2 = $("#other_prem_mb2").val(),

        other_desc_mb3 = $("#other_desc_mb3").val(),
        other_nrv_mb3 = $("#other_nrv_mb3").val(),
        other_rate_mb3 = $("#other_rate_mb3").val(),
        other_prem_mb3 = $("#other_prem_mb3").val(),

        other_desc_mb4 = $("#other_desc_mb4").val(),
        other_nrv_mb4 = $("#other_nrv_mb4").val(),
        other_rate_mb4 = $("#other_rate_mb4").val(),
        other_prem_mb4 = $("#other_prem_mb4").val(),

        nrv_engo_ap = $("#nrv_engo_ap").val(),
        rate_engo_ap = $("#rate_engo_ap").val(),
        premium_engo_ap = $("#premium_engo_ap").val(),

        nrv_deduct = $("#nrv_deduct").val(),
        // mb_we = $("#mb_we").val(),
        // mb_tp = $("#mb_tp").val(),
        // mb_pd = $("#mb_pd").val(),
        // mb_t = $("#mb_t").val(),
        // mb_o = $("#mb_o").val(),

        nrv_subject = $("#nrv_subject").val(),

        mb_values = "insert_mb";

    $.post("/table/admin/junk/process_mb.php", {
        date_input_mb: date_input_mb,
        eng_mb: eng_mb,
        underwriter_mb: underwriter_mb,
        insured_mb: insured_mb,
        industry_mb: industry_mb,
        intermediary_mb: intermediary_mb,
        selectCurrency_mb: selectCurrency_mb,
        new_replacement_value_tsi2: new_replacement_value_tsi2,
        rate_tsi2: rate_tsi2,
        premium_tsi2: premium_tsi2,
        nrv_srcc: nrv_srcc,
        rate_srcc: rate_srcc,
        premium_srcc: premium_srcc,
        nrv_oef: nrv_oef,
        rate_oef: rate_oef,
        premium_oef: premium_oef,
        nrv_airfreight: nrv_airfreight,
        rate_airfreight: rate_airfreight,
        premium_airfreight: premium_airfreight,
        nrv_sptpl: nrv_sptpl,
        rate_sptpl: rate_sptpl,
        premium_sptpl: premium_sptpl,
        other_desc_mb: other_desc_mb,
        other_nrv_mb: other_nrv_mb,
        other_rate_mb: other_rate_mb,
        other_prem_mb: other_prem_mb,
        other_desc_mb1: other_desc_mb1,
        other_nrv_mb1: other_nrv_mb1,
        other_rate_mb1: other_rate_mb1,
        other_prem_mb1: other_prem_mb1,
        other_desc_mb2: other_desc_mb2,
        other_nrv_mb2: other_nrv_mb2,
        other_rate_mb2: other_rate_mb2,
        other_prem_mb2: other_prem_mb2,
        other_desc_mb3: other_desc_mb3,
        other_nrv_mb3: other_nrv_mb3,
        other_rate_mb3: other_rate_mb3,
        other_prem_mb3: other_prem_mb3,
        other_desc_mb4: other_desc_mb4,
        other_nrv_mb4: other_nrv_mb4,
        other_rate_mb4: other_rate_mb4,
        other_prem_mb4: other_prem_mb4,
        nrv_engo_ap: nrv_engo_ap,
        rate_engo_ap: rate_engo_ap,
        premium_engo_ap: premium_engo_ap,
        nrv_deduct: nrv_deduct,
        // mb_we: mb_we,
        // mb_tp: mb_tp,
        // mb_pd: mb_pd,
        // mb_t: mb_t,
        // mb_o: mb_o,
        nrv_subject: nrv_subject,

        mb_values: mb_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- ELECTRONIC EQUIPMT QUOTATION /////////////////////////////
$("#save_eng_ee").on("click", () => {
    var date_input_ee = $("#date_input_ee").val(),
        eng_ee = "eng_ee",
        underwriter_ee = $("#underwriter_ee").val(),
        insured_ee = $("#insured_ee").val(),
        industry_ee = $("#industry_ee").val(),
        intermediary_ee = $("#intermediary_ee").val(),
        selectCurrency_ee = $("#selectCurrency_ee").val(),

        nrv_tsi_eo = $("#nrv_tsi_eo").val(),
        rate_tsi_eo = $("#rate_tsi_eo").val(),
        premium_tsi_eo = $("#premium_tsi_eo").val(),

        nrv_srcc_eo = $("#nrv_srcc_eo").val(),
        rate_srcc_eo = $("#rate_srcc_eo").val(),
        premium_srcc_eo = $("#premium_srcc_eo").val(),

        nrv_oef_eo = $("#nrv_oef_eo").val(),
        rate_oef_eo = $("#rate_oef_eo").val(),
        premium_oef_eo = $("#premium_oef_eo").val(),

        nrv_airfreight_eo = $("#nrv_airfreight_eo").val(),
        rate_airfreight_eo = $("#rate_airfreight_eo").val(),
        premium_airfreight_eo = $("#premium_airfreight_eo").val(),

        nrv_theft = $("#nrv_theft").val(),
        rate_theft = $("#rate_theft").val(),
        premium_theft = $("#premium_theft").val(),

        nrv_mpq = $("#nrv_mpq").val(),
        rate_mpq = $("#rate_mpq").val(),
        premium_mpq = $("#premium_mpq").val(),

        other_desc_ee = $("#other_desc_ee").val(),
        other_nrv_ee = $("#other_nrv_ee").val(),
        other_rate_ee = $("#other_rate_ee").val(),
        other_prem_ee = $("#other_prem_ee").val(),

        other_desc_ee1 = $("#other_desc_ee1").val(),
        other_nrv_ee1 = $("#other_nrv_ee1").val(),
        other_rate_ee1 = $("#other_rate_ee1").val(),
        other_prem_ee1 = $("#other_prem_ee1").val(),

        other_desc_ee2 = $("#other_desc_ee2").val(),
        other_nrv_ee2 = $("#other_nrv_ee2").val(),
        other_rate_ee2 = $("#other_rate_ee2").val(),
        other_prem_ee2 = $("#other_prem_ee2").val(),

        other_desc_ee3 = $("#other_desc_ee3").val(),
        other_nrv_ee3 = $("#other_nrv_ee3").val(),
        other_rate_ee3 = $("#other_rate_ee3").val(),
        other_prem_ee3 = $("#other_prem_ee3").val(),

        other_desc_ee4 = $("#other_desc_ee4").val(),
        other_nrv_ee4 = $("#other_nrv_ee4").val(),
        other_rate_ee4 = $("#other_rate_ee4").val(),
        other_prem_ee4 = $("#other_prem_ee4").val(),

        nrv_engo_ap2 = $("#nrv_engo_ap2").val(),
        rate_engo_ap2 = $("#rate_engo_ap2").val(),
        premium_engo_ap2 = $("#premium_engo_ap2").val(),

        nrv_deduct2 = $("#nrv_deduct2").val(),
        // eee_we = $("#eee_we").val(),
        // eee_tp = $("#eee_tp").val(),
        // eee_pd = $("#eee_pd").val(),
        // eee_t = $("#eee_t").val(),
        // eee_o = $("#eee_o").val(),

        nrv_subject2 = $("#nrv_subject2").val(),

        ee_values = "insert_ee";

    $.post("/table/admin/junk/process_ee.php", {
        date_input_ee: date_input_ee,
        eng_ee: eng_ee,
        underwriter_ee: underwriter_ee,
        insured_ee: insured_ee,
        industry_ee: industry_ee,
        intermediary_ee: intermediary_ee,
        selectCurrency_ee: selectCurrency_ee,
        nrv_tsi_eo: nrv_tsi_eo,
        rate_tsi_eo: rate_tsi_eo,
        premium_tsi_eo: premium_tsi_eo,
        nrv_srcc_eo: nrv_srcc_eo,
        rate_srcc_eo: rate_srcc_eo,
        premium_srcc_eo: premium_srcc_eo,
        nrv_oef_eo: nrv_oef_eo,
        rate_oef_eo: rate_oef_eo,
        premium_oef_eo: premium_oef_eo,
        nrv_airfreight_eo: nrv_airfreight_eo,
        rate_airfreight_eo: rate_airfreight_eo,
        premium_airfreight_eo: premium_airfreight_eo,
        nrv_theft: nrv_theft,
        rate_theft: rate_theft,
        premium_theft: premium_theft,
        nrv_mpq: nrv_mpq,
        rate_mpq: rate_mpq,
        premium_mpq: premium_mpq,
        other_desc_ee: other_desc_ee,
        other_nrv_ee: other_nrv_ee,
        other_rate_ee: other_rate_ee,
        other_prem_ee: other_prem_ee,
        other_desc_ee1: other_desc_ee1,
        other_nrv_ee1: other_nrv_ee1,
        other_rate_ee1: other_rate_ee1,
        other_prem_ee1: other_prem_ee1,
        other_desc_ee2: other_desc_ee2,
        other_nrv_ee2: other_nrv_ee2,
        other_rate_ee2: other_rate_ee2,
        other_prem_ee2: other_prem_ee2,
        other_desc_ee3: other_desc_ee3,
        other_nrv_ee3: other_nrv_ee3,
        other_rate_ee3: other_rate_ee3,
        other_prem_ee3: other_prem_ee3,
        other_desc_ee4: other_desc_ee4,
        other_nrv_ee4: other_nrv_ee4,
        other_rate_ee4: other_rate_ee4,
        other_prem_ee4: other_prem_ee4,
        nrv_engo_ap2: nrv_engo_ap2,
        rate_engo_ap2: rate_engo_ap2,
        premium_engo_ap2: premium_engo_ap2,
        nrv_deduct2: nrv_deduct2,
        // eee_we: eee_we,
        // eee_tp: eee_tp,
        // eee_pd: eee_pd,
        // eee_t: eee_t,
        // eee_o: eee_o,
        nrv_subject2: nrv_subject2,

        ee_values: ee_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- ASSETS ALL RISKS QUOTATION ///////////////////////////////
$("#save_eng_aar").on("click", () => {
    var date_input_aar = $("#date_input_aar").val(),
        eng_aar = "eng_aar",
        underwriter_aar = $("#underwriter_aar").val(),
        insured_aar = $("#insured_aar").val(),
        industry_aar = $("#industry_aar").val(),
        intermediary_aar = $("#intermediary_aar").val(),
        selectCurrency_aar = $("#selectCurrency_aar").val(),

        building_si = $("#building_si").val(),
        building_rate = $("#building_rate").val(),
        building_prem = $("#building_prem").val(),

        fencewall_si = $("#fencewall_si").val(),
        fencewall_rate = $("#fencewall_rate").val(),
        fencewall_prem = $("#fencewall_prem").val(),

        finshed_goods_si = $("#finshed_goods_si").val(),
        finshed_goods_rate = $("#finshed_goods_rate").val(),
        finshed_goods_prem = $("#finshed_goods_prem").val(),

        wrknprogres_si = $("#wrknprogres_si").val(),
        wrknprogres_rate = $("#wrknprogres_rate").val(),
        wrknprogres_prem = $("#wrknprogres_prem").val(),

        fff_si = $("#fff_si").val(),
        fff_rate = $("#fff_rate").val(),
        fff_prem = $("#fff_prem").val(),

        furnish_si = $("#furnish_si").val(),
        furnish_rate = $("#furnish_rate").val(),
        furnish_prem = $("#furnish_prem").val(),

        eea_si = $("#eea_si").val(),
        eea_rate = $("#eea_rate").val(),
        eea_prem = $("#eea_prem").val(),

        hg_si = $("#hg_si").val(),
        hg_rate = $("#hg_rate").val(),
        hg_prem = $("#hg_prem").val(),

        cl_si = $("#cl_si").val(),
        cl_rate = $("#cl_rate").val(),
        cl_prem = $("#cl_prem").val(),

        pm_si = $("#pm_si").val(),
        pm_rate = $("#pm_rate").val(),
        pm_prem = $("#pm_prem").val(),

        sit_si = $("#sit_si").val(),
        sit_rate = $("#sit_rate").val(),
        sit_prem = $("#sit_prem").val(),

        oc_si = $("#oc_si").val(),
        oc_rate = $("#oc_rate").val(),
        oc_prem = $("#oc_prem").val(),

        tsibp_si = $("#tsibp_si").val(),
        tsibp_rate = $("#tsibp_rate").val(),
        tsibp_prem = $("#tsibp_prem").val(),

        less_si = $("#less_si").val(),
        less_rate = $("#less_rate").val(),
        less_prem = $("#less_prem").val(),

        fea_dscut_si = $("#fea_dscut_si").val(),
        fea_dscut_rate = $("#fea_dscut_rate").val(),
        fea_dscut_prem = $("#fea_dscut_prem").val(),

        fea_dscut_si2 = $("#fea_dscut_si2").val(),
        fea_dscut_rate2 = $("#fea_dscut_rate2").val(),
        fea_dscut_prem2 = $("#fea_dscut_prem2").val(),

        hd_si = $("#hd_si").val(),
        hd_rate = $("#hd_rate").val(),
        hd_prem = $("#hd_prem").val(),

        hd2_si = $("#hd2_si").val(),
        hd2_rate = $("#hd2_rate").val(),
        hd2_prem = $("#hd2_prem").val(),

        ltad_si = $("#ltad_si").val(),
        ltad_rate = $("#ltad_rate").val(),
        ltad_prem = $("#ltad_prem").val(),

        dp_si = $("#dp_si").val(),
        dp_rate = $("#dp_rate").val(),
        dp_prem = $("#dp_prem").val(),

        special_disc_desc = $("#special_disc_desc").val(),
        special_disc_si = $("#special_disc_si").val(),
        special_disc_rate = $("#special_disc_rate").val(),
        special_disc_prem = $("#special_disc_prem").val(),

        ca_limits = $("#ca_limits").val(),
        ca_rate = $("#ca_rate").val(),
        ca_adp = $("#ca_adp").val(),

        tr_limits = $("#tr_limits").val(),
        tr_rate = $("#tr_rate").val(),
        tr_adp = $("#tr_adp").val(),

        rob_limits = $("#rob_limits").val(),
        rob_rate = $("#rob_rate").val(),
        rob_adp = $("#rob_adp").val(),

        pf_limits = $("#pf_limits").val(),
        pf_rate = $("#pf_rate").val(),
        pf_adp = $("#pf_adp").val(),

        rvc_limits = $("#rvc_limits").val(),
        rvc_rate = $("#rvc_rate").val(),
        rvc_adp = $("#rvc_adp").val(),

        pg_limits = $("#pg_limits").val(),
        pg_rate = $("#pg_rate").val(),
        pg_adp = $("#pg_adp").val(),

        arsi_limits = $("#arsi_limits").val(),
        arsi_rate = $("#arsi_rate").val(),
        arsi_adp = $("#arsi_adp").val(),

        sp_limits = $("#sp_limits").val(),
        sp_rate = $("#sp_rate").val(),
        sp_adp = $("#sp_adp").val(),

        other_desc_aar = $("#other_desc_aar").val(),
        other_si_aar = $("#other_si_aar").val(),
        other_rate_aar = $("#other_rate_aar").val(),
        other_prem_aar = $("#other_prem_aar").val(),

        other_desc_aar1 = $("#other_desc_aar1").val(),
        other_si_aar1 = $("#other_si_aar1").val(),
        other_rate_aar1 = $("#other_rate_aar1").val(),
        other_prem_aar1 = $("#other_prem_aar1").val(),

        other_desc_aar2 = $("#other_desc_aar2").val(),
        other_si_aar2 = $("#other_si_aar2").val(),
        other_rate_aar2 = $("#other_rate_aar2").val(),
        other_prem_aar2 = $("#other_prem_aar2").val(),

        other_desc_aar3 = $("#other_desc_aar3").val(),
        other_si_aar3 = $("#other_si_aar3").val(),
        other_rate_aar3 = $("#other_rate_aar3").val(),
        other_prem_aar3 = $("#other_prem_aar3").val(),

        other_desc_aar4 = $("#other_desc_aar4").val(),
        other_si_aar4 = $("#other_si_aar4").val(),
        other_rate_aar4 = $("#other_rate_aar4").val(),
        other_prem_aar4 = $("#other_prem_aar4").val(),

        tap_limits = $("#tap_limits").val(),
        tap_rate = $("#tap_rate").val(),
        tap_adp = $("#tap_adp").val(),

        netp_limits = $("#netp_limits").val(),
        netp_rate = $("#netp_rate").val(),
        netp_adp = $("#netp_adp").val(),

        collapse_limits = $("#collapse_limits").val(),
        collapse_rate = $("#collapse_rate").val(),
        collapse_adp = $("#collapse_adp").val(),

        totp_limits = $("#totp_limits").val(),
        totp_rate = $("#totp_rate").val(),
        totp_adp = $("#totp_adp").val(),

        totp2_limits = $("#totp2_limits").val(),
        totp2_rate = $("#totp2_rate").val(),
        totp2_adp = $("#totp2_adp").val(),

        nicl_limits = $("#nicl_limits").val(),
        nicl_rate = $("#nicl_rate").val(),
        nicl_adp = $("#nicl_adp").val(),

        cf_limits = $("#cf_limits").val(),
        cf_rate = $("#cf_rate").val(),
        cf_adp = $("#cf_adp").val(),

        aa_ap_limits = $("#aa_ap_limits").val(),
        aa_ap_rate = $("#aa_ap_rate").val(),
        aa_ap_adp = $("#aa_ap_adp").val(),

        deduc_aat_limits = $("#deduc_aat_limits").val(),

        subject_aa_limits = $("#subject_aa_limits").val(),

        aar_values = "insert_aar";

    $.post("/table/admin/junk/process_aar.php", {
        date_input_aar: date_input_aar,
        eng_aar: eng_aar,
        underwriter_aar: underwriter_aar,
        insured_aar: insured_aar,
        industry_aar: industry_aar,
        intermediary_aar: intermediary_aar,
        selectCurrency_aar: selectCurrency_aar,
        building_si: building_si,
        building_rate: building_rate,
        building_prem: building_prem,
        fencewall_si: fencewall_si,
        fencewall_rate: fencewall_rate,
        fencewall_prem: fencewall_prem,
        finshed_goods_si: finshed_goods_si,
        finshed_goods_rate: finshed_goods_rate,
        finshed_goods_prem: finshed_goods_prem,
        wrknprogres_si: wrknprogres_si,
        wrknprogres_rate: wrknprogres_rate,
        wrknprogres_prem: wrknprogres_prem,
        fff_si: fff_si,
        fff_rate: fff_rate,
        fff_prem: fff_prem,
        furnish_si: furnish_si,
        furnish_rate: furnish_rate,
        furnish_prem: furnish_prem,
        eea_si: eea_si,
        eea_rate: eea_rate,
        eea_prem: eea_prem,
        hg_si: hg_si,
        hg_rate: hg_rate,
        hg_prem: hg_prem,
        cl_si: cl_si,
        cl_rate: cl_rate,
        cl_prem: cl_prem,
        pm_si: pm_si,
        pm_rate: pm_rate,
        pm_prem: pm_prem,
        sit_si: sit_si,
        sit_rate: sit_rate,
        sit_prem: sit_prem,
        oc_si: oc_si,
        oc_rate: oc_rate,
        oc_prem: oc_prem,
        tsibp_si: tsibp_si,
        tsibp_rate: tsibp_rate,
        tsibp_prem: tsibp_prem,
        less_si: less_si,
        less_rate: less_rate,
        less_prem: less_prem,
        fea_dscut_si: fea_dscut_si,
        fea_dscut_rate: fea_dscut_rate,
        fea_dscut_prem: fea_dscut_prem,
        fea_dscut_si2: fea_dscut_si2,
        fea_dscut_rate2: fea_dscut_rate2,
        fea_dscut_prem2: fea_dscut_prem2,
        hd_si: hd_si,
        hd_rate: hd_rate,
        hd_prem: hd_prem,
        hd2_si: hd2_si,
        hd2_rate: hd2_rate,
        hd2_prem: hd2_prem,
        ltad_si: ltad_si,
        ltad_rate: ltad_rate,
        ltad_prem: ltad_prem,
        dp_si: dp_si,
        dp_rate: dp_rate,
        dp_prem: dp_prem,
        special_disc_desc: special_disc_desc,
        special_disc_si: special_disc_si,
        special_disc_rate: special_disc_rate,
        special_disc_prem: special_disc_prem,
        ca_limits: ca_limits,
        ca_rate: ca_rate,
        ca_adp: ca_adp,
        tr_limits: tr_limits,
        tr_rate: tr_rate,
        tr_adp: tr_adp,
        rob_limits: rob_limits,
        rob_rate: rob_rate,
        rob_adp: rob_adp,
        pf_limits: pf_limits,
        pf_rate: pf_rate,
        pf_adp: pf_adp,
        rvc_limits: rvc_limits,
        rvc_rate: rvc_rate,
        rvc_adp: rvc_adp,
        pg_limits: pg_limits,
        pg_rate: pg_rate,
        pg_adp: pg_adp,
        arsi_limits: arsi_limits,
        arsi_rate: arsi_rate,
        arsi_adp: arsi_adp,
        sp_limits: sp_limits,
        sp_rate: sp_rate,
        sp_adp: sp_adp,
        other_desc_aar: other_desc_aar,
        other_si_aar: other_si_aar,
        other_rate_aar: other_rate_aar,
        other_prem_aar: other_prem_aar,
        other_desc_aar1: other_desc_aar1,
        other_si_aar1: other_si_aar1,
        other_rate_aar1: other_rate_aar1,
        other_prem_aar1: other_prem_aar1,
        other_desc_aar2: other_desc_aar2,
        other_si_aar2: other_si_aar2,
        other_rate_aar2: other_rate_aar2,
        other_prem_aar2: other_prem_aar2,
        other_desc_aar3: other_desc_aar3,
        other_si_aar3: other_si_aar3,
        other_rate_aar3: other_rate_aar3,
        other_prem_aar3: other_prem_aar3,
        other_desc_aar4: other_desc_aar4,
        other_si_aar4: other_si_aar4,
        other_rate_aar4: other_rate_aar4,
        other_prem_aar4: other_prem_aar4,
        tap_limits: tap_limits,
        tap_rate: tap_rate,
        tap_adp: tap_adp,
        netp_limits: netp_limits,
        netp_rate: netp_rate,
        netp_adp: netp_adp,
        collapse_limits: collapse_limits,
        collapse_rate: collapse_rate,
        collapse_adp: collapse_adp,
        totp_limits: totp_limits,
        totp_rate: totp_rate,
        totp_adp: totp_adp,
        totp2_limits: totp2_limits,
        totp2_rate: totp2_rate,
        totp2_adp: totp2_adp,
        nicl_limits: nicl_limits,
        nicl_rate: nicl_rate,
        nicl_adp: nicl_adp,
        cf_limits: cf_limits,
        cf_rate: cf_rate,
        cf_adp: cf_adp,
        aa_ap_limits: aa_ap_limits,
        aa_ap_rate: aa_ap_rate,
        aa_ap_adp: aa_ap_adp,
        deduc_aat_limits: deduc_aat_limits,
        subject_aa_limits: subject_aa_limits,

        aar_values: aar_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// FIRE & ALLIED PERILS QUOTATION ////////////////////////////////
$("#save_eng_fap").on("click", () => {
    var date_input_fap = $("#date_input_fap").val(),
        eng_fap = "eng_fap",
        underwriter_fap = $("#underwriter_fap").val(),
        insured_fap = $("#insured_fap").val(),
        industry_fap = $("#industry_fap").val(),
        intermediary_fap = $("#intermediary_fap").val(),
        selectCurrency_fap = $("#selectCurrency_fap").val(),

        building_si2 = $("#building_si2").val(),
        building_rate2 = $("#building_rate2").val(),
        building_prem2 = $("#building_prem2").val(),

        fencewall1_si = $("#fencewall1_si").val(),
        fencewall1_rate = $("#fencewall1_rate").val(),
        fencewall1_prem = $("#fencewall1_prem").val(),

        fff_si2 = $("#fff_si2").val(),
        fff_rate2 = $("#fff_rate2").val(),
        fff_prem2 = $("#fff_prem2").val(),

        furnish_si2 = $("#furnish_si2").val(),
        furnish_rate2 = $("#furnish_rate2").val(),
        furnish_prem2 = $("#furnish_prem2").val(),

        eea_si2 = $("#eea_si2").val(),
        eea_rate2 = $("#eea_rate2").val(),
        eea_prem2 = $("#eea_prem2").val(),

        hg_si2 = $("#hg_si2").val(),
        hg_rate2 = $("#hg_rate2").val(),
        hg_prem2 = $("#hg_prem2").val(),

        pe_si = $("#pe_si").val(),
        pe_rate = $("#pe_rate").val(),
        pe_prem = $("#pe_prem").val(),

        cl_si2 = $("#cl_si2").val(),
        cl_rate2 = $("#cl_rate2").val(),
        cl_prem2 = $("#cl_prem2").val(),

        pm_si2 = $("#pm_si2").val(),
        pm_rate2 = $("#pm_rate2").val(),
        pm_prem2 = $("#pm_prem2").val(),

        sit_si2 = $("#sit_si2").val(),
        sit_rate2 = $("#sit_rate2").val(),
        sit_prem2 = $("#sit_prem2").val(),

        oc_si2 = $("#oc_si2").val(),
        oc_rate2 = $("#oc_rate2").val(),
        oc_prem2 = $("#oc_prem2").val(),

        tsibp_si2 = $("#tsibp_si2").val(),
        tsibp_rate2 = $("#tsibp_rate2").val(),
        tsibp_prem2 = $("#tsibp_prem2").val(),

        less_si2 = $("#less_si2").val(),
        less_rate2 = $("#less_rate2").val(),
        less_prem2 = $("#less_prem2").val(),

        fea_dscut_si21 = $("#fea_dscut_si21").val(),
        fea_dscut_rate21 = $("#fea_dscut_rate21").val(),
        fea_dscut_prem21 = $("#fea_dscut_prem21").val(),

        fea_dscut_si22 = $("#fea_dscut_si22").val(),
        fea_dscut_rate22 = $("#fea_dscut_rate22").val(),
        fea_dscut_prem22 = $("#fea_dscut_prem22").val(),

        hd_si2 = $("#hd_si2").val(),
        hd_rate2 = $("#hd_rate2").val(),
        hd_prem2 = $("#hd_prem2").val(),

        hd2_si2 = $("#hd2_si2").val(),
        hd2_rate2 = $("#hd2_rate2").val(),
        hd2_prem2 = $("#hd2_prem2").val(),

        ltad_si2 = $("#ltad_si2").val(),
        ltad_rate2 = $("#ltad_rate2").val(),
        ltad_prem2 = $("#ltad_prem2").val(),

        dp_si2 = $("#dp_si2").val(),
        dp_rate2 = $("#dp_rate2").val(),
        dp_prem2 = $("#dp_prem2").val(),

        ca_limits2 = $("#ca_limits2").val(),
        ca_rate2 = $("#ca_rate2").val(),
        ca_adp2 = $("#ca_adp2").val(),

        tr_limits2 = $("#tr_limits2").val(),
        tr_rate2 = $("#tr_rate2").val(),
        tr_adp2 = $("#tr_adp2").val(),

        rob_limits2 = $("#rob_limits2").val(),
        rob_rate2 = $("#rob_rate2").val(),
        rob_adp2 = $("#rob_adp2").val(),

        pf_limits2 = $("#pf_limits2").val(),
        pf_rate2 = $("#pf_rate2").val(),
        pf_adp2 = $("#pf_adp2").val(),

        rvc_limits2 = $("#rvc_limits2").val(),
        rvc_rate2 = $("#rvc_rate2").val(),
        rvc_adp2 = $("#rvc_adp2").val(),

        pg_limits2 = $("#pg_limits2").val(),
        pg_rate2 = $("#pg_rate2").val(),
        pg_adp2 = $("#pg_adp2").val(),

        arsi_limits2 = $("#arsi_limits2").val(),
        arsi_rate2 = $("#arsi_rate2").val(),
        arsi_adp2 = $("#arsi_adp2").val(),

        sp_limits2 = $("#sp_limits2").val(),
        sp_rate2 = $("#sp_rate2").val(),
        sp_adp2 = $("#sp_adp2").val(),

        tap_limits2 = $("#tap_limits2").val(),
        tap_rate2 = $("#tap_rate2").val(),
        tap_adp2 = $("#tap_adp2").val(),

        netp_limits2 = $("#netp_limits2").val(),
        netp_rate2 = $("#netp_rate2").val(),
        netp_adp2 = $("#netp_adp2").val(),

        other_desc_fap = $("#other_desc_fap").val(),
        other_si_fap = $("#other_si_fap").val(),
        other_rate_fap = $("#other_rate_fap").val(),
        other_prem_fap = $("#other_prem_fap").val(),

        other_desc_fap1 = $("#other_desc_fap1").val(),
        other_si_fap1 = $("#other_si_fap1").val(),
        other_rate_fap1 = $("#other_rate_fap1").val(),
        other_prem_fap1 = $("#other_prem_fap1").val(),

        other_desc_fap2 = $("#other_desc_fap2").val(),
        other_si_fap2 = $("#other_si_fap2").val(),
        other_rate_fap2 = $("#other_rate_fap2").val(),
        other_prem_fap2 = $("#other_prem_fap2").val(),

        other_desc_fap3 = $("#other_desc_fap3").val(),
        other_si_fap3 = $("#other_si_fap3").val(),
        other_rate_fap3 = $("#other_rate_fap3").val(),
        other_prem_fap3 = $("#other_prem_fap3").val(),

        other_desc_fap4 = $("#other_desc_fap4").val(),
        other_si_fap4 = $("#other_si_fap4").val(),
        other_rate_fap4 = $("#other_rate_fap4").val(),
        other_prem_fap4 = $("#other_prem_fap4").val(),

        collapse_limits2 = $("#collapse_limits2").val(),
        collapse_rate2 = $("#collapse_rate2").val(),
        collapse_adp2 = $("#collapse_adp2").val(),

        totp_limits2 = $("#totp_limits2").val(),
        totp_rate2 = $("#totp_rate2").val(),
        totp_adp2 = $("#totp_adp2").val(),

        totp2_limits2 = $("#totp2_limits2").val(),
        totp2_rate2 = $("#totp2_rate2").val(),
        totp2_adp2 = $("#totp2_adp2").val(),

        nicl_limits2 = $("#nicl_limits2").val(),
        nicl_rate2 = $("#nicl_rate2").val(),
        nicl_adp2 = $("#nicl_adp2").val(),

        cf_limits2 = $("#cf_limits2").val(),
        cf_rate2 = $("#cf_rate2").val(),
        cf_adp2 = $("#cf_adp2").val(),

        aa_ap_limits2 = $("#aa_ap_limits2").val(),
        aa_ap_rate2 = $("#aa_ap_rate2").val(),
        aa_ap_adp2 = $("#aa_ap_adp2").val(),

        deduc_aat_limits2 = $("#deduc_aat_limits2").val(),

        subject_aa_limits2 = $("#subject_aa_limits2").val(),

        fap_values = "insert_fap";

    $.post("/table/admin/junk/process_fire.php", {
        date_input_fap: date_input_fap,
        eng_fap: eng_fap,
        underwriter_fap: underwriter_fap,
        insured_fap: insured_fap,
        industry_fap: industry_fap,
        intermediary_fap: intermediary_fap,
        selectCurrency_fap: selectCurrency_fap,
        building_si2: building_si2,
        building_rate2: building_rate2,
        building_prem2: building_prem2,
        fencewall1_si: fencewall1_si,
        fencewall1_rate: fencewall1_rate,
        fencewall1_prem: fencewall1_prem,
        fff_si2: fff_si2,
        fff_rate2: fff_rate2,
        fff_prem2: fff_prem2,
        furnish_si2: furnish_si2,
        furnish_rate2: furnish_rate2,
        furnish_prem2: furnish_prem2,
        eea_si2: eea_si2,
        eea_rate2: eea_rate2,
        eea_prem2: eea_prem2,
        hg_si2: hg_si2,
        hg_rate2: hg_rate2,
        hg_prem2: hg_prem2,
        pe_si: pe_si,
        pe_rate: pe_rate,
        pe_prem: pe_prem,
        cl_si2: cl_si2,
        cl_rate2: cl_rate2,
        cl_prem2: cl_prem2,
        pm_si2: pm_si2,
        pm_rate2: pm_rate2,
        pm_prem2: pm_prem2,
        sit_si2: sit_si2,
        sit_rate2: sit_rate2,
        sit_prem2: sit_prem2,
        oc_si2: oc_si2,
        oc_rate2: oc_rate2,
        oc_prem2: oc_prem2,
        tsibp_si2: tsibp_si2,
        tsibp_rate2: tsibp_rate2,
        tsibp_prem2: tsibp_prem2,
        less_si2: less_si2,
        less_rate2: less_rate2,
        less_prem2: less_prem2,
        fea_dscut_si21: fea_dscut_si21,
        fea_dscut_rate21: fea_dscut_rate21,
        fea_dscut_prem21: fea_dscut_prem21,
        fea_dscut_si22: fea_dscut_si22,
        fea_dscut_rate22: fea_dscut_rate22,
        fea_dscut_prem22: fea_dscut_prem22,
        hd_si2: hd_si2,
        hd_rate2: hd_rate2,
        hd_prem2: hd_prem2,
        hd2_si2: hd2_si2,
        hd2_rate2: hd2_rate2,
        hd2_prem2: hd2_prem2,
        ltad_si2: ltad_si2,
        ltad_rate2: ltad_rate2,
        ltad_prem2: ltad_prem2,
        dp_si2: dp_si2,
        dp_rate2: dp_rate2,
        dp_prem2: dp_prem2,
        ca_limits2: ca_limits2,
        ca_rate2: ca_rate2,
        ca_adp2: ca_adp2,
        tr_limits2: tr_limits2,
        tr_rate2: tr_rate2,
        tr_adp2: tr_adp2,
        rob_limits2: rob_limits2,
        rob_rate2: rob_rate2,
        rob_adp2: rob_adp2,
        pf_limits2: pf_limits2,
        pf_rate2: pf_rate2,
        pf_adp2: pf_adp2,
        rvc_limits2: rvc_limits2,
        rvc_rate2: rvc_rate2,
        rvc_adp2: rvc_adp2,
        pg_limits2: pg_limits2,
        pg_rate2: pg_rate2,
        pg_adp2: pg_adp2,
        arsi_limits2: arsi_limits2,
        arsi_rate2: arsi_rate2,
        arsi_adp2: arsi_adp2,
        sp_limits2: sp_limits2,
        sp_rate2: sp_rate2,
        sp_adp2: sp_adp2,
        tap_limits2: tap_limits2,
        tap_rate2: tap_rate2,
        tap_adp2: tap_adp2,
        netp_limits2: netp_limits2,
        netp_rate2: netp_rate2,
        netp_adp2: netp_adp2,
        other_desc_fap: other_desc_fap,
        other_si_fap: other_si_fap,
        other_rate_fap: other_rate_fap,
        other_prem_fap: other_prem_fap,
        other_desc_fap1: other_desc_fap1,
        other_si_fap1: other_si_fap1,
        other_rate_fap1: other_rate_fap1,
        other_prem_fap1: other_prem_fap1,
        other_desc_fap2: other_desc_fap2,
        other_si_fap2: other_si_fap2,
        other_rate_fap2: other_rate_fap2,
        other_prem_fap2: other_prem_fap2,
        other_desc_fap3: other_desc_fap3,
        other_si_fap3: other_si_fap3,
        other_rate_fap3: other_rate_fap3,
        other_prem_fap3: other_prem_fap3,
        other_desc_fap4: other_desc_fap4,
        other_si_fap4: other_si_fap4,
        other_rate_fap4: other_rate_fap4,
        other_prem_fap4: other_prem_fap4,
        collapse_limits2: collapse_limits2,
        collapse_rate2: collapse_rate2,
        collapse_adp2: collapse_adp2,
        totp_limits2: totp_limits2,
        totp_rate2: totp_rate2,
        totp_adp2: totp_adp2,
        totp2_limits2: totp2_limits2,
        totp2_rate2: totp2_rate2,
        totp2_adp2: totp2_adp2,
        nicl_limits2: nicl_limits2,
        nicl_rate2: nicl_rate2,
        nicl_adp2: nicl_adp2,
        cf_limits2: cf_limits2,
        cf_rate2: cf_rate2,
        cf_adp2: cf_adp2,
        aa_ap_limits2: aa_ap_limits2,
        aa_ap_rate2: aa_ap_rate2,
        aa_ap_adp2: aa_ap_adp2,
        deduc_aat_limits2: deduc_aat_limits2,
        subject_aa_limits2: subject_aa_limits2,

        fap_values: fap_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});


/// ENG- HOME INSURANCE QUOTATION /////////////////////////////////
$("#save_eng_hi").on("click", () => {
    var date_input_hi = $("#date_input_hi").val(),
        eng_hi = "eng_hi",
        underwriter_hi = $("#underwriter_hi").val(),
        insured_hi = $("#insured_hi").val(),
        industry_hi = $("#industry_hi").val(),
        intermediary_hi = $("#intermediary_hi").val(),
        selectCurrency_hi = $("#selectCurrency_hi").val(),

        building_si3 = $("#building_si3").val(),
        building_rate3 = $("#building_rate3").val(),
        building_prem3 = $("#building_prem3").val(),

        fencewall2_si = $("#fencewall2_si").val(),
        fencewall2_rate = $("#fencewall2_rate").val(),
        fencewall2_prem = $("#fencewall2_prem").val(),

        hg_si3 = $("#hg_si3").val(),
        hg_rate3 = $("#hg_rate3").val(),
        hg_prem3 = $("#hg_prem3").val(),

        pe_si1 = $("#pe_si1").val(),
        pe_rate1 = $("#pe_rate1").val(),
        pe_prem1 = $("#pe_prem1").val(),

        tsibp_si3 = $("#tsibp_si3").val(),
        tsibp_rate3 = $("#tsibp_rate3").val(),
        tsibp_prem3 = $("#tsibp_prem3").val(),

        less_si3 = $("#less_si3").val(),
        less_rate3 = $("#less_rate3").val(),
        less_prem3 = $("#less_prem3").val(),

        fea_dscut_si3 = $("#fea_dscut_si3").val(),
        fea_dscut_rate3 = $("#fea_dscut_rate3").val(),
        fea_dscut_prem3 = $("#fea_dscut_prem3").val(),

        fea_dscut_si33 = $("#fea_dscut_si33").val(),
        fea_dscut_rate33 = $("#fea_dscut_rate33").val(),
        fea_dscut_prem33 = $("#fea_dscut_prem33").val(),

        hd_si3 = $("#hd_si3").val(),
        hd_rate3 = $("#hd_rate3").val(),
        hd_prem3 = $("#hd_prem3").val(),

        hd3_si = $("#hd3_si").val(),
        hd3_rate = $("#hd3_rate").val(),
        hd3_prem = $("#hd3_prem").val(),

        ltad_si3 = $("#ltad_si3").val(),
        ltad_rate3 = $("#ltad_rate3").val(),
        ltad_prem3 = $("#ltad_prem3").val(),

        dp_si3 = $("#dp_si3").val(),
        dp_rate3 = $("#dp_rate3").val(),
        dp_prem3 = $("#dp_prem3").val(),

        pat_limits = $("#pat_limits").val(),
        pat_rate = $("#pat_rate").val(),
        pat_adp = $("#pat_adp").val(),

        wcds_limits = $("#wcds_limits").val(),
        wcds_rate = $("#wcds_rate").val(),
        wcds_adp = $("#wcds_adp").val(),

        bue_limits = $("#bue_limits").val(),
        bue_rate = $("#bue_rate").val(),
        bue_adp = $("#bue_adp").val(),

        pc_limits = $("#pc_limits").val(),
        pc_rate = $("#pc_rate").val(),
        pc_adp = $("#pc_adp").val(),

        apl_limits = $("#apl_limits").val(),
        apl_rate = $("#apl_rate").val(),
        apl_adp = $("#apl_adp").val(),

        pg_limits3 = $("#pg_limits3").val(),
        pg_rate3 = $("#pg_rate3").val(),
        pg_adp3 = $("#pg_adp3").val(),

        other_desc_hi = $("#other_desc_hi").val(),
        other_si_hi = $("#other_si_hi").val(),
        other_rate_hi = $("#other_rate_hi").val(),
        other_prem_hi = $("#other_prem_hi").val(),

        other_desc_hi1 = $("#other_desc_hi1").val(),
        other_si_hi1 = $("#other_si_hi1").val(),
        other_rate_hi1 = $("#other_rate_hi1").val(),
        other_prem_hi1 = $("#other_prem_hi1").val(),

        other_desc_hi2 = $("#other_desc_hi2").val(),
        other_si_hi2 = $("#other_si_hi2").val(),
        other_rate_hi2 = $("#other_rate_hi2").val(),
        other_prem_hi2 = $("#other_prem_hi2").val(),

        other_desc_hi3 = $("#other_desc_hi3").val(),
        other_si_hi3 = $("#other_si_hi3").val(),
        other_rate_hi3 = $("#other_rate_hi3").val(),
        other_prem_hi3 = $("#other_prem_hi3").val(),

        other_desc_hi4 = $("#other_desc_hi4").val(),
        other_si_hi4 = $("#other_si_hi4").val(),
        other_rate_hi4 = $("#other_rate_hi4").val(),
        other_prem_hi4 = $("#other_prem_hi4").val(),

        tap_limits3 = $("#tap_limits3").val(),
        tap_rate3 = $("#tap_rate3").val(),
        tap_adp3 = $("#tap_adp3").val(),

        netp_limits3 = $("#netp_limits3").val(),
        netp_rate3 = $("#netp_rate3").val(),
        netp_adp3 = $("#netp_adp3").val(),

        collapse_limits3 = $("#collapse_limits3").val(),
        collapse_rate3 = $("#collapse_rate3").val(),
        collapse_adp3 = $("#collapse_adp3").val(),

        totp_limits3 = $("#totp_limits3").val(),
        totp_rate3 = $("#totp_rate3").val(),
        totp_adp3 = $("#totp_adp3").val(),

        totp_limits4 = $("#totp_limits4").val(),
        totp_rate4 = $("#totp_rate4").val(),
        totp_adp4 = $("#totp_adp4").val(),

        nicl_limits3 = $("#nicl_limits3").val(),
        nicl_rate3 = $("#nicl_rate3").val(),
        nicl_adp3 = $("#nicl_adp3").val(),

        cf_limits3 = $("#cf_limits3").val(),
        cf_rate3 = $("#cf_rate3").val(),
        cf_adp3 = $("#cf_adp3").val(),

        aa_ap_limits3 = $("#aa_ap_limits3").val(),
        aa_ap_rate3 = $("#aa_ap_rate3").val(),
        aa_ap_adp3 = $("#aa_ap_adp3").val(),

        deduc_aat_limits3 = $("#deduc_aat_limits3").val(),

        subject_aa_limits3 = $("#subject_aa_limits3").val(),

        hi_values = "insert_hi";

    $.post("/table/admin/junk/process_hi.php", {
        date_input_hi: date_input_hi,
        eng_hi: eng_hi,
        underwriter_hi: underwriter_hi,
        insured_hi: insured_hi,
        industry_hi: industry_hi,
        intermediary_hi: intermediary_hi,
        selectCurrency_hi: selectCurrency_hi,
        building_si3: building_si3,
        building_rate3: building_rate3,
        building_prem3: building_prem3,
        fencewall2_si: fencewall2_si,
        fencewall2_rate: fencewall2_rate,
        fencewall2_prem: fencewall2_prem,
        hg_si3: hg_si3,
        hg_rate3: hg_rate3,
        hg_prem3: hg_prem3,
        pe_si1: pe_si1,
        pe_rate1: pe_rate1,
        pe_prem1: pe_prem1,
        tsibp_si3: tsibp_si3,
        tsibp_rate3: tsibp_rate3,
        tsibp_prem3: tsibp_prem3,
        less_si3: less_si3,
        less_rate3: less_rate3,
        less_prem3: less_prem3,
        fea_dscut_si3: fea_dscut_si3,
        fea_dscut_rate3: fea_dscut_rate3,
        fea_dscut_prem3: fea_dscut_prem3,
        fea_dscut_si33: fea_dscut_si33,
        fea_dscut_rate33: fea_dscut_rate33,
        fea_dscut_prem33: fea_dscut_prem33,
        hd_si3: hd_si3,
        hd_rate3: hd_rate3,
        hd_prem3: hd_prem3,
        hd3_si: hd3_si,
        hd3_rate: hd3_rate,
        hd3_prem: hd3_prem,
        ltad_si3: ltad_si3,
        ltad_rate3: ltad_rate3,
        ltad_prem3: ltad_prem3,
        dp_si3: dp_si3,
        dp_rate3: dp_rate3,
        dp_prem3: dp_prem3,
        pat_limits: pat_limits,
        pat_rate: pat_rate,
        pat_adp: pat_adp,
        wcds_limits: wcds_limits,
        wcds_rate: wcds_rate,
        wcds_adp: wcds_adp,
        bue_limits: bue_limits,
        bue_rate: bue_rate,
        bue_adp: bue_adp,
        pc_limits: pc_limits,
        pc_rate: pc_rate,
        pc_adp: pc_adp,
        apl_limits: apl_limits,
        apl_rate: apl_rate,
        apl_adp: apl_adp,
        pg_limits3: pg_limits3,
        pg_rate3: pg_rate3,
        pg_adp3: pg_adp3,
        other_desc_hi: other_desc_hi,
        other_si_hi: other_si_hi,
        other_rate_hi: other_rate_hi,
        other_prem_hi: other_prem_hi,
        other_desc_hi1: other_desc_hi1,
        other_si_hi1: other_si_hi1,
        other_rate_hi1: other_rate_hi1,
        other_prem_hi1: other_prem_hi1,
        other_desc_hi2: other_desc_hi2,
        other_si_hi2: other_si_hi2,
        other_rate_hi2: other_rate_hi2,
        other_prem_hi2: other_prem_hi2,
        other_desc_hi3: other_desc_hi3,
        other_si_hi3: other_si_hi3,
        other_rate_hi3: other_rate_hi3,
        other_prem_hi3: other_prem_hi3,
        other_desc_hi4: other_desc_hi4,
        other_si_hi4: other_si_hi4,
        other_rate_hi4: other_rate_hi4,
        other_prem_hi4: other_prem_hi4,
        tap_limits3: tap_limits3,
        tap_rate3: tap_rate3,
        tap_adp3: tap_adp3,
        netp_limits3: netp_limits3,
        netp_rate3: netp_rate3,
        netp_adp3: netp_adp3,
        collapse_limits3: collapse_limits3,
        collapse_rate3: collapse_rate3,
        collapse_adp3: collapse_adp3,
        totp_limits3: totp_limits3,
        totp_rate3: totp_rate3,
        totp_adp3: totp_adp3,
        totp_limits4: totp_limits4,
        totp_rate4: totp_rate4,
        totp_adp4: totp_adp4,
        nicl_limits3: nicl_limits3,
        nicl_rate3: nicl_rate3,
        nicl_adp3: nicl_adp3,
        cf_limits3: cf_limits3,
        cf_rate3: cf_rate3,
        cf_adp3: cf_adp3,
        aa_ap_limits3: aa_ap_limits3,
        aa_ap_rate3: aa_ap_rate3,
        aa_ap_adp3: aa_ap_adp3,
        deduc_aat_limits3: deduc_aat_limits3,
        subject_aa_limits3: subject_aa_limits3,

        hi_values: hi_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- COMBINED FIRE & BURGLARY QUOTATION ///////////////////////
$("#save_eng_cfb").on("click", () => {
    var date_input_cfb = $("#date_input_cfb").val(),
        eng_cfb = "eng_cfb",
        underwriter_cfb = $("#underwriter_cfb").val(),
        insured_cfb = $("#insured_cfb").val(),
        industry_cfb = $("#industry_cfb").val(),
        intermediary_cfb = $("#intermediary_cfb").val(),
        selectCurrency_cfb = $("#selectCurrency_cfb").val(),

        building_si4 = $("#building_si4").val(),
        building_rate4 = $("#building_rate4").val(),
        building_prem4 = $("#building_prem4").val(),

        fencewall_si4 = $("#fencewall_si4").val(),
        fencewall_rate4 = $("#fencewall_rate4").val(),
        fencewall_prem4 = $("#fencewall_prem4").val(),

        fff_si4 = $("#fff_si4").val(),
        fff_rate4 = $("#fff_rate4").val(),
        fff_prem4 = $("#fff_prem4").val(),

        furnish_si4 = $("#furnish_si4").val(),
        furnish_rate4 = $("#furnish_rate4").val(),
        furnish_prem4 = $("#furnish_prem4").val(),

        eea_si4 = $("#eea_si4").val(),
        eea_rate4 = $("#eea_rate4").val(),
        eea_prem4 = $("#eea_prem4").val(),

        hg_si4 = $("#hg_si4").val(),
        hg_rate4 = $("#hg_rate4").val(),
        hg_prem4 = $("#hg_prem4").val(),

        pe_si2 = $("#pe_si2").val(),
        pe_rate2 = $("#pe_rate2").val(),
        pe_prem2 = $("#pe_prem2").val(),

        cl_si4 = $("#cl_si4").val(),
        cl_rate4 = $("#cl_rate4").val(),
        cl_prem4 = $("#cl_prem4").val(),

        pm_si4 = $("#pm_si4").val(),
        pm_rate4 = $("#pm_rate4").val(),
        pm_prem4 = $("#pm_prem4").val(),

        sit_si4 = $("#sit_si4").val(),
        sit_rate4 = $("#sit_rate4").val(),
        sit_prem4 = $("#sit_prem4").val(),

        fg_si = $("#fg_si").val(),
        fg_rate = $("#fg_rate").val(),
        fg_prem = $("#fg_prem").val(),

        wip_si = $("#wip_si").val(),
        wip_rate = $("#wip_rate").val(),
        wip_prem = $("#wip_prem").val(),

        rm_si = $("#rm_si").val(),
        rm_rate = $("#rm_rate").val(),
        rm_prem = $("#rm_prem").val(),

        oc_si4 = $("#oc_si4").val(),
        oc_rate4 = $("#oc_rate4").val(),
        oc_prem4 = $("#oc_prem4").val(),

        tsibp_si4 = $("#tsibp_si4").val(),
        tsibp_rate4 = $("#tsibp_rate4").val(),
        tsibp_prem4 = $("#tsibp_prem4").val(),

        less_si4 = $("#less_si4").val(),
        less_rate4 = $("#less_rate4").val(),
        less_prem4 = $("#less_prem4").val(),

        fea_dscut_si4 = $("#fea_dscut_si4").val(),
        fea_dscut_rate4 = $("#fea_dscut_rate4").val(),
        fea_dscut_prem4 = $("#fea_dscut_prem4").val(),

        fea_dscut_si24 = $("#fea_dscut_si24").val(),
        fea_dscut_rate24 = $("#fea_dscut_rate24").val(),
        fea_dscut_prem24 = $("#fea_dscut_prem24").val(),

        hd_si4 = $("#hd_si4").val(),
        hd_rate4 = $("#hd_rate4").val(),
        hd_prem4 = $("#hd_prem4").val(),

        hd24_si = $("#hd24_si").val(),
        hd24_rate = $("#hd24_rate").val(),
        hd24_prem = $("#hd24_prem").val(),

        ltad_si4 = $("#ltad_si4").val(),
        ltad_rate4 = $("#ltad_rate4").val(),
        ltad_prem4 = $("#ltad_prem4").val(),

        dp_si4 = $("#dp_si4").val(),
        dp_rate4 = $("#dp_rate4").val(),
        dp_prem4 = $("#dp_prem4").val(),

        ca_limits4 = $("#ca_limits4").val(),
        ca_rate4 = $("#ca_rate4").val(),
        ca_adp4 = $("#ca_adp4").val(),

        tr_limits4 = $("#tr_limits4").val(),
        tr_rate4 = $("#tr_rate4").val(),
        tr_adp4 = $("#tr_adp4").val(),

        rob_limits4 = $("#rob_limits4").val(),
        rob_rate4 = $("#rob_rate4").val(),
        rob_adp4 = $("#rob_adp4").val(),

        pf_limits4 = $("#pf_limits4").val(),
        pf_rate4 = $("#pf_rate4").val(),
        pf_adp4 = $("#pf_adp4").val(),

        rvc_limits4 = $("#rvc_limits4").val(),
        rvc_rate4 = $("#rvc_rate4").val(),
        rvc_adp4 = $("#rvc_adp4").val(),

        pg_limits4 = $("#pg_limits4").val(),
        pg_rate4 = $("#pg_rate4").val(),
        pg_adp4 = $("#pg_adp4").val(),

        arsi_limits4 = $("#arsi_limits4").val(),
        arsi_rate4 = $("#arsi_rate4").val(),
        arsi_adp4 = $("#arsi_adp4").val(),

        other_desc_cfb = $("#other_desc_cfb").val(),
        other_si_cfb = $("#other_si_cfb").val(),
        other_rate_cfb = $("#other_rate_cfb").val(),
        other_prem_cfb = $("#other_prem_cfb").val(),

        other_desc_cfb1 = $("#other_desc_cfb1").val(),
        other_si_cfb1 = $("#other_si_cfb1").val(),
        other_rate_cfb1 = $("#other_rate_cfb1").val(),
        other_prem_cfb1 = $("#other_prem_cfb1").val(),

        other_desc_cfb2 = $("#other_desc_cfb2").val(),
        other_si_cfb2 = $("#other_si_cfb2").val(),
        other_rate_cfb2 = $("#other_rate_cfb2").val(),
        other_prem_cfb2 = $("#other_prem_cfb2").val(),

        other_desc_cfb3 = $("#other_desc_cfb3").val(),
        other_si_cfb3 = $("#other_si_cfb3").val(),
        other_rate_cfb3 = $("#other_rate_cfb3").val(),
        other_prem_cfb3 = $("#other_prem_cfb3").val(),

        other_desc_cfb4 = $("#other_desc_cfb4").val(),
        other_si_cfb4 = $("#other_si_cfb4").val(),
        other_rate_cfb4 = $("#other_rate_cfb1").val(),
        other_prem_cfb4 = $("#other_prem_cfb4").val(),

        tap_limits4 = $("#tap_limits4").val(),
        tap_rate4 = $("#tap_rate4").val(),
        tap_adp4 = $("#tap_adp4").val(),

        netp_limits4 = $("#netp_limits4").val(),
        netp_rate4 = $("#netp_rate4").val(),
        netp_adp4 = $("#netp_adp4").val(),

        collapse_limits4 = $("#collapse_limits4").val(),
        collapse_rate4 = $("#collapse_rate4").val(),
        collapse_adp4 = $("#collapse_adp4").val(),

        totp_limits44 = $("#totp_limits44").val(),
        totp_rate44 = $("#totp_rate44").val(),
        totp_adp44 = $("#totp_adp44").val(),

        totp2_limits4 = $("#totp2_limits4").val(),
        totp2_rate4 = $("#totp2_rate4").val(),
        totp2_adp4 = $("#totp2_adp4").val(),

        nicl_limits4 = $("#nicl_limits4").val(),
        nicl_rate4 = $("#nicl_rate4").val(),
        nicl_adp4 = $("#nicl_adp4").val(),

        cf_limits4 = $("#cf_limits4").val(),
        cf_rate4 = $("#cf_rate4").val(),
        cf_adp4 = $("#cf_adp4").val(),

        aa_ap_limits4 = $("#aa_ap_limits4").val(),
        aa_ap_rate4 = $("#aa_ap_rate4").val(),
        aa_ap_adp4 = $("#aa_ap_adp4").val(),

        deduc_aat_limits4 = $("#deduc_aat_limits4").val(),

        subject_aa_limits4 = $("#subject_aa_limits4").val(),

        cfb_values = "insert_cfb";

    $.post("/table/admin/junk/process_cfb.php", {
        date_input_cfb: date_input_cfb,
        eng_cfb: eng_cfb,
        underwriter_cfb: underwriter_cfb,
        insured_cfb: insured_cfb,
        industry_cfb: industry_cfb,
        intermediary_cfb: intermediary_cfb,
        selectCurrency_cfb: selectCurrency_cfb,
        building_si4: building_si4,
        building_rate4: building_rate4,
        building_prem4: building_prem4,
        fencewall_si4: fencewall_si4,
        fencewall_rate4: fencewall_rate4,
        fencewall_prem4: fencewall_prem4,
        fff_si4: fff_si4,
        fff_rate4: fff_rate4,
        fff_prem4: fff_prem4,
        furnish_si4: furnish_si4,
        furnish_rate4: furnish_rate4,
        furnish_prem4: furnish_prem4,
        eea_si4: eea_si4,
        eea_rate4: eea_rate4,
        eea_prem4: eea_prem4,
        hg_si4: hg_si4,
        hg_rate4: hg_rate4,
        hg_prem4: hg_prem4,
        pe_si2: pe_si2,
        pe_rate2: pe_rate2,
        pe_prem2: pe_prem2,
        cl_si4: cl_si4,
        cl_rate4: cl_rate4,
        cl_prem4: cl_prem4,
        pm_si4: pm_si4,
        pm_rate4: pm_rate4,
        pm_prem4: pm_prem4,
        sit_si4: sit_si4,
        sit_rate4: sit_rate4,
        sit_prem4: sit_prem4,
        fg_si: fg_si,
        fg_rate: fg_rate,
        fg_prem: fg_prem,
        wip_si: wip_si,
        wip_rate: wip_rate,
        wip_prem: wip_prem,
        rm_si: rm_si,
        rm_rate: rm_rate,
        rm_prem: rm_prem,
        oc_si4: oc_si4,
        oc_rate4: oc_rate4,
        oc_prem4: oc_prem4,
        tsibp_si4: tsibp_si4,
        tsibp_rate4: tsibp_rate4,
        tsibp_prem4: tsibp_prem4,
        less_si4: less_si4,
        less_rate4: less_rate4,
        less_prem4: less_prem4,
        fea_dscut_si4: fea_dscut_si4,
        fea_dscut_rate4: fea_dscut_rate4,
        fea_dscut_prem4: fea_dscut_prem4,
        fea_dscut_si24: fea_dscut_si24,
        fea_dscut_rate24: fea_dscut_rate24,
        fea_dscut_prem24: fea_dscut_prem24,
        hd_si4: hd_si4,
        hd_rate4: hd_rate4,
        hd_prem4: hd_prem4,
        hd24_si: hd24_si,
        hd24_rate: hd24_rate,
        hd24_prem: hd24_prem,
        ltad_si4: ltad_si4,
        ltad_rate4: ltad_rate4,
        ltad_prem4: ltad_prem4,
        dp_si4: dp_si4,
        dp_rate4: dp_rate4,
        dp_prem4: dp_prem4,
        ca_limits4: ca_limits4,
        ca_rate4: ca_rate4,
        ca_adp4: ca_adp4,
        tr_limits4: tr_limits4,
        tr_rate4: tr_rate4,
        tr_adp4: tr_adp4,
        rob_limits4: rob_limits4,
        rob_rate4: rob_rate4,
        rob_adp4: rob_adp4,
        pf_limits4: pf_limits4,
        pf_rate4: pf_rate4,
        pf_adp4: pf_adp4,
        rvc_limits4: rvc_limits4,
        rvc_rate4: rvc_rate4,
        rvc_adp4: rvc_adp4,
        pg_limits4: pg_limits4,
        pg_rate4: pg_rate4,
        pg_adp4: pg_adp4,
        arsi_limits4: arsi_limits4,
        arsi_rate4: arsi_rate4,
        arsi_adp4: arsi_adp4,
        other_desc_cfb: other_desc_cfb,
        other_si_cfb: other_si_cfb,
        other_rate_cfb: other_rate_cfb,
        other_prem_cfb: other_prem_cfb,
        other_desc_cfb1: other_desc_cfb1,
        other_si_cfb1: other_si_cfb1,
        other_rate_cfb1: other_rate_cfb1,
        other_prem_cfb1: other_prem_cfb1,
        other_desc_cfb2: other_desc_cfb2,
        other_si_cfb2: other_si_cfb2,
        other_rate_cfb2: other_rate_cfb2,
        other_prem_cfb2: other_prem_cfb2,
        other_desc_cfb3: other_desc_cfb3,
        other_si_cfb3: other_si_cfb3,
        other_rate_cfb3: other_rate_cfb3,
        other_prem_cfb3: other_prem_cfb3,
        other_desc_cfb4: other_desc_cfb4,
        other_si_cfb4: other_si_cfb4,
        other_rate_cfb4: other_rate_cfb4,
        other_prem_cfb4: other_prem_cfb4,
        tap_limits4: tap_limits4,
        tap_rate4: tap_rate4,
        tap_adp4: tap_adp4,
        netp_limits4: netp_limits4,
        netp_rate4: netp_rate4,
        netp_adp4: netp_adp4,
        collapse_limits4: collapse_limits4,
        collapse_rate4: collapse_rate4,
        collapse_adp4: collapse_adp4,
        totp_limits44: totp_limits44,
        totp_rate44: totp_rate44,
        totp_adp44: totp_adp44,
        totp2_limits4: totp2_limits4,
        totp2_rate4: totp2_rate4,
        totp2_adp4: totp2_adp4,
        nicl_limits4: nicl_limits4,
        nicl_rate4: nicl_rate4,
        nicl_adp4: nicl_adp4,
        cf_limits4: cf_limits4,
        cf_rate4: cf_rate4,
        cf_adp4: cf_adp4,
        aa_ap_limits4: aa_ap_limits4,
        aa_ap_rate4: aa_ap_rate4,
        aa_ap_adp4: aa_ap_adp4,
        deduc_aat_limits4: deduc_aat_limits4,
        subject_aa_limits4: subject_aa_limits4,

        cfb_values: cfb_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- PUBLIC LIABILITY QUOTATION ///////////////////////////////
$("#save_eng_pl").on("click", () => {
    var date_input_pl = $("#date_input_pl").val(),
        eng_pl = "eng_pl",
        underwriter_pl = $("#underwriter_pl").val(),
        insured_pl = $("#insured_pl").val(),
        industry_pl = $("#industry_pl").val(),
        intermediary_pl = $("#intermediary_pl").val(),
        selectCurrency_pl = $("#selectCurrency_pl").val(),

        operations_si = $("#operations_si").val(),
        operations_rate = $("#operations_rate").val(),
        operations_prem = $("#operations_prem").val(),

        pi_si = $("#pi_si").val(),
        pi_rate = $("#pi_rate").val(),
        pi_prem = $("#pi_prem").val(),

        all_si = $("#all_si").val(),
        all_rate = $("#all_rate").val(),
        all_prem = $("#all_prem").val(),

        bppl_si = $("#bppl_si").val(),
        bppl_rate = $("#bppl_rate").val(),
        bppl_prem = $("#bppl_prem").val(),

        pl2_si = $("#pl2_si").val(),
        pl2_rate = $("#pl2_rate").val(),
        pl2_prem = $("#pl2_prem").val(),

        tl_si = $("#tl_si").val(),
        tl_rate = $("#tl_rate").val(),
        tl_prem = $("#tl_prem").val(),

        cll_si = $("#cll_si").val(),
        cll_rate = $("#cll_rate").val(),
        cll_prem = $("#cll_prem").val(),

        ws_si = $("#ws_si").val(),
        ws_rate = $("#ws_rate").val(),
        ws_prem = $("#ws_prem").val(),

        other_desc_pl = $("#other_desc_pl").val(),
        other_si_pl = $("#other_si_pl").val(),
        other_rate_pl = $("#other_rate_pl").val(),
        other_prem_pl = $("#other_prem_pl").val(),

        other_desc_pl1 = $("#other_desc_pl1").val(),
        other_si_pl1 = $("#other_si_pl1").val(),
        other_rate_pl1 = $("#other_rate_pl1").val(),
        other_prem_pl1 = $("#other_prem_pl1").val(),

        other_desc_pl2 = $("#other_desc_pl2").val(),
        other_si_pl2 = $("#other_si_pl2").val(),
        other_rate_pl2 = $("#other_rate_pl2").val(),
        other_prem_pl2 = $("#other_prem_pl2").val(),

        other_desc_pl3 = $("#other_desc_pl3").val(),
        other_si_pl3 = $("#other_si_pl3").val(),
        other_rate_pl3 = $("#other_rate_pl3").val(),
        other_prem_pl3 = $("#other_prem_pl3").val(),

        other_desc_pl4 = $("#other_desc_pl4").val(),
        other_si_pl4 = $("#other_si_pl4").val(),
        other_rate_pl4 = $("#other_rate_pl4").val(),
        other_prem_pl4 = $("#other_prem_pl4").val(),

        si_engo_pl = $("#si_engo_pl").val(),
        rate_engo_pl = $("#rate_engo_pl").val(),
        premium_engo_pl = $("#premium_engo_pl").val(),

        de_si = $("#de_si").val(),

        subject_si = $("#subject_si").val(),

        pl_values = "insert_pl";

    $.post("/table/admin/junk/process_pliability.php", {
        date_input_pl: date_input_pl,
        eng_pl: eng_pl,
        underwriter_pl: underwriter_pl,
        insured_pl: insured_pl,
        industry_pl: industry_pl,
        intermediary_pl: intermediary_pl,
        selectCurrency_pl: selectCurrency_pl,
        operations_si: operations_si,
        operations_rate: operations_rate,
        operations_prem: operations_prem,
        pi_si: pi_si,
        pi_rate: pi_rate,
        pi_prem: pi_prem,
        all_si: all_si,
        all_rate: all_rate,
        all_prem: all_prem,
        bppl_si: bppl_si,
        bppl_rate: bppl_rate,
        bppl_prem: bppl_prem,
        pl2_si: pl2_si,
        pl2_rate: pl2_rate,
        pl2_prem: pl2_prem,
        tl_si: tl_si,
        tl_rate: tl_rate,
        tl_prem: tl_prem,
        cll_si: cll_si,
        cll_rate: cll_rate,
        cll_prem: cll_prem,
        ws_si: ws_si,
        ws_rate: ws_rate,
        ws_prem: ws_prem,
        other_desc_pl: other_desc_pl,
        other_si_pl: other_si_pl,
        other_rate_pl: other_rate_pl,
        other_prem_pl: other_prem_pl,
        other_desc_pl1: other_desc_pl1,
        other_si_pl1: other_si_pl1,
        other_rate_pl1: other_rate_pl1,
        other_prem_pl1: other_prem_pl1,
        other_desc_pl2: other_desc_pl2,
        other_si_pl2: other_si_pl2,
        other_rate_pl2: other_rate_pl2,
        other_prem_pl2: other_prem_pl2,
        other_desc_pl3: other_desc_pl3,
        other_si_pl3: other_si_pl3,
        other_rate_pl3: other_rate_pl3,
        other_prem_pl3: other_prem_pl3,
        other_desc_pl4: other_desc_pl4,
        other_si_pl4: other_si_pl4,
        other_rate_pl4: other_rate_pl4,
        other_prem_pl4: other_prem_pl4,
        si_engo_pl: si_engo_pl,
        rate_engo_pl: rate_engo_pl,
        premium_engo_pl: premium_engo_pl,
        de_si: de_si,
        subject_si: subject_si,

        pl_values: pl_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });



});


/// ENG- GENERAL LIABILITY QUOTATION //////////////////////////////
$("#save_eng_gl").on("click", () => {
    var date_input_gl = $("#date_input_gl").val(),
        eng_gl = "eng_gl",
        underwriter_gl = $("#underwriter_gl").val(),
        insured_gl = $("#insured_gl").val(),
        industry_gl = $("#industry_gl").val(),
        intermediary_gl = $("#intermediary_gl").val(),
        selectCurrency_gl = $("#selectCurrency_gl").val(),

        pl4gl_si = $("#pl4gl_si").val(),
        pl4gl_rate = $("#pl4gl_rate").val(),
        pl4gl_prem = $("#pl4gl_prem").val(),

        plt_si = $("#plt_si").val(),
        plt_rate = $("#plt_rate").val(),
        plt_prem = $("#plt_prem").val(),

        plll_si = $("#plll_si").val(),
        plll_rate = $("#plll_rate").val(),
        plll_prem = $("#plll_prem").val(),

        all4gl_si = $("#all4gl_si").val(),
        all4gl_rate = $("#all4gl_rate").val(),
        all4gl_prem = $("#all4gl_prem").val(),

        bppl4gl_si = $("#bppl4gl_si").val(),
        bppl4gl_rate = $("#bppl4gl_rate").val(),
        bppl4gl_prem = $("#bppl4gl_prem").val(),

        pl24pl_si = $("#pl24pl_si").val(),
        pl24pl_rate = $("#pl24pl_rate").val(),
        pl24pl_prem = $("#pl24pl_prem").val(),

        tl4pl_si = $("#tl4pl_si").val(),
        tl4pl_rate = $("#tl4pl_rate").val(),
        tl4pl_prem = $("#tl4pl_prem").val(),

        cl4pl_si = $("#cl4pl_si").val(),
        cl4pl_rate = $("#cl4pl_rate").val(),
        cl4pl_prem = $("#cl4pl_prem").val(),

        ws4pl_si = $("#ws4pl_si").val(),
        ws4pl_rate = $("#ws4pl_rate").val(),
        ws4pl_prem = $("#ws4pl_prem").val(),

        defw_si = $("#defw_si").val(),
        defw_rate = $("#defw_rate").val(),
        defw_prem = $("#defw_prem").val(),

        pfl_si = $("#pfl_si").val(),
        pfl_rate = $("#pfl_rate").val(),
        pfl_prem = $("#pfl_prem").val(),

        pig_si = $("#pig_si").val(),
        pig_rate = $("#pig_rate").val(),
        pig_prem = $("#pig_prem").val(),

        rel_si = $("#rel_si").val(),
        rel_rate = $("#rel_rate").val(),
        rel_prem = $("#rel_prem").val(),

        sldc_si = $("#sldc_si").val(),
        sldc_rate = $("#sldc_rate").val(),
        sldc_prem = $("#sldc_prem").val(),

        wad_si = $("#wad_si").val(),
        wad_rate = $("#wad_rate").val(),
        wad_prem = $("#wad_prem").val(),

        other_desc_gl = $("#other_desc_gl").val(),
        other_si_gl = $("#other_si_gl").val(),
        other_rate_gl = $("#other_rate_gl").val(),
        other_prem_gl = $("#other_prem_gl").val(),

        other_desc_gl1 = $("#other_desc_gl1").val(),
        other_si_gl1 = $("#other_si_gl1").val(),
        other_rate_gl1 = $("#other_rate_gl1").val(),
        other_prem_gl1 = $("#other_prem_gl1").val(),

        other_desc_gl2 = $("#other_desc_gl2").val(),
        other_si_gl2 = $("#other_si_gl2").val(),
        other_rate_gl2 = $("#other_rate_gl2").val(),
        other_prem_gl2 = $("#other_prem_gl2").val(),

        other_desc_gl3 = $("#other_desc_gl3").val(),
        other_si_gl3 = $("#other_si_gl3").val(),
        other_rate_gl3 = $("#other_rate_gl3").val(),
        other_prem_gl3 = $("#other_prem_gl3").val(),

        other_desc_gl4 = $("#other_desc_gl4").val(),
        other_si_gl4 = $("#other_si_gl4").val(),
        other_rate_gl4 = $("#other_rate_gl4").val(),
        other_prem_gl4 = $("#other_prem_gl4").val(),

        tapg_si = $("#tapg_si").val(),
        tapg_rate = $("#tapg_rate").val(),
        tapg_prem = $("#tapg_prem").val(),

        si_engo_gl = $("#si_engo_gl").val(),
        rate_engo_gl = $("#rate_engo_gl").val(),
        premium_engo_gl = $("#premium_engo_gl").val(),

        de_si4pl = $("#de_si4pl").val(),

        subject4pl_si = $("#subject4pl_si").val(),

        gl_values = "insert_gl";

    $.post("/table/admin/junk/process_gliability.php", {
        date_input_gl: date_input_gl,
        eng_gl: eng_gl,
        underwriter_gl: underwriter_gl,
        insured_gl: insured_gl,
        industry_gl: industry_gl,
        intermediary_gl: intermediary_gl,
        selectCurrency_gl: selectCurrency_gl,
        pl4gl_si: pl4gl_si,
        pl4gl_rate: pl4gl_rate,
        pl4gl_prem: pl4gl_prem,
        plt_si: plt_si,
        plt_rate: plt_rate,
        plt_prem: plt_prem,
        plll_si: plll_si,
        plll_rate: plll_rate,
        plll_prem: plll_prem,
        all4gl_si: all4gl_si,
        all4gl_rate: all4gl_rate,
        all4gl_prem: all4gl_prem,
        bppl4gl_si: bppl4gl_si,
        bppl4gl_rate: bppl4gl_rate,
        bppl4gl_prem: bppl4gl_prem,
        pl24pl_si: pl24pl_si,
        pl24pl_rate: pl24pl_rate,
        pl24pl_prem: pl24pl_prem,
        tl4pl_si: tl4pl_si,
        tl4pl_rate: tl4pl_rate,
        tl4pl_prem: tl4pl_prem,
        cl4pl_si: cl4pl_si,
        cl4pl_rate: cl4pl_rate,
        cl4pl_prem: cl4pl_prem,
        ws4pl_si: ws4pl_si,
        ws4pl_rate: ws4pl_rate,
        ws4pl_prem: ws4pl_prem,
        defw_si: defw_si,
        defw_rate: defw_rate,
        defw_prem: defw_prem,
        pfl_si: pfl_si,
        pfl_rate: pfl_rate,
        pfl_prem: pfl_prem,
        pig_si: pig_si,
        pig_rate: pig_rate,
        pig_prem: pig_prem,
        rel_si: rel_si,
        rel_rate: rel_rate,
        rel_prem: rel_prem,
        sldc_si: sldc_si,
        sldc_rate: sldc_rate,
        sldc_prem: sldc_prem,
        wad_si: wad_si,
        wad_rate: wad_rate,
        wad_prem: wad_prem,
        other_desc_gl: other_desc_gl,
        other_si_gl: other_si_gl,
        other_rate_gl: other_rate_gl,
        other_prem_gl: other_prem_gl,
        other_desc_gl1: other_desc_gl1,
        other_si_gl1: other_si_gl1,
        other_rate_gl1: other_rate_gl1,
        other_prem_gl1: other_prem_gl1,
        other_desc_gl2: other_desc_gl2,
        other_si_gl2: other_si_gl2,
        other_rate_gl2: other_rate_gl2,
        other_prem_gl2: other_prem_gl2,
        other_desc_gl3: other_desc_gl3,
        other_si_gl3: other_si_gl3,
        other_rate_gl3: other_rate_gl3,
        other_prem_gl3: other_prem_gl3,
        other_desc_gl4: other_desc_gl4,
        other_si_gl4: other_si_gl4,
        other_rate_gl4: other_rate_gl4,
        other_prem_gl4: other_prem_gl4,
        tapg_si: tapg_si,
        tapg_rate: tapg_rate,
        tapg_prem: tapg_prem,
        si_engo_gl: si_engo_gl,
        rate_engo_gl: rate_engo_gl,
        premium_engo_gl: premium_engo_gl,
        de_si4pl: de_si4pl,
        subject4pl_si: subject4pl_si,

        gl_values: gl_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});


/// ENG- DIRECTORS & OFFICERS QUOTATION ///////////////////////////
$("#save_eng_do").on("click", () => {
    var date_input_do = $("#date_input_do").val(),
        eng_do = "eng_do",
        underwriter_do = $("#underwriter_do").val(),
        insured_do = $("#insured_do").val(),
        industry_do = $("#industry_do").val(),
        intermediary_do = $("#intermediary_do").val(),
        selectCurrency_do = $("#selectCurrency_do").val(),

        adoc_si = $("#adoc_si").val(),
        adoc_rate = $("#adoc_rate").val(),
        adoc_prem = $("#adoc_prem").val(),

        lpd_si = $("#lpd_si").val(),
        lpd_rate = $("#lpd_rate").val(),
        lpd_prem = $("#lpd_prem").val(),

        peri_si = $("#peri_si").val(),
        peri_rate = $("#peri_rate").val(),
        peri_prem = $("#peri_prem").val(),

        all3_si = $("#all3_si").val(),
        all3_rate = $("#all3_rate").val(),
        all3_prem = $("#all3_prem").val(),

        other_desc_do = $("#other_desc_do").val(),
        other_si_do = $("#other_si_do").val(),
        other_rate_do = $("#other_rate_do").val(),
        other_prem_do = $("#other_prem_do").val(),

        other_desc_do1 = $("#other_desc_do1").val(),
        other_si_do1 = $("#other_si_do1").val(),
        other_rate_do1 = $("#other_rate_do1").val(),
        other_prem_do1 = $("#other_prem_do1").val(),

        other_desc_do2 = $("#other_desc_do2").val(),
        other_si_do2 = $("#other_si_do2").val(),
        other_rate_do2 = $("#other_rate_do2").val(),
        other_prem_do2 = $("#other_prem_do2").val(),

        other_desc_do3 = $("#other_desc_do3").val(),
        other_si_do3 = $("#other_si_do3").val(),
        other_rate_do3 = $("#other_rate_do3").val(),
        other_prem_do3 = $("#other_prem_do3").val(),

        other_desc_do4 = $("#other_desc_do4").val(),
        other_si_do4 = $("#other_si_do4").val(),
        other_rate_do4 = $("#other_rate_do4").val(),
        other_prem_do4 = $("#other_prem_do4").val(),

        ap4do_si = $("#ap4do_si").val(),
        ap4do_rate = $("#ap4do_rate").val(),
        ap4do_prem = $("#ap4do_prem").val(),

        de4do_si = $("#de4do_si").val(),

        sub4do_si = $("#sub4do_si").val(),

        do_values = "insert_do";

    $.post("/table/admin/junk/process_do.php", {
        date_input_do: date_input_do,
        eng_do: eng_do,
        underwriter_do: underwriter_do,
        insured_do: insured_do,
        industry_do: industry_do,
        intermediary_do: intermediary_do,
        selectCurrency_do: selectCurrency_do,
        adoc_si: adoc_si,
        adoc_rate: adoc_rate,
        adoc_prem: adoc_prem,
        lpd_si: lpd_si,
        lpd_rate: lpd_rate,
        lpd_prem: lpd_prem,
        peri_si: peri_si,
        peri_rate: peri_rate,
        peri_prem: peri_prem,
        all3_si: all3_si,
        all3_rate: all3_rate,
        all3_prem: all3_prem,
        other_desc_do: other_desc_do,
        other_si_do: other_si_do,
        other_rate_do: other_rate_do,
        other_prem_do: other_prem_do,
        other_desc_do1: other_desc_do1,
        other_si_do1: other_si_do1,
        other_rate_do1: other_rate_do1,
        other_prem_do1: other_prem_do1,
        other_desc_do2: other_desc_do2,
        other_si_do2: other_si_do2,
        other_rate_do2: other_rate_do2,
        other_prem_do2: other_prem_do2,
        other_desc_do3: other_desc_do3,
        other_si_do3: other_si_do3,
        other_rate_do3: other_rate_do3,
        other_prem_do3: other_prem_do3,
        other_desc_do4: other_desc_do4,
        other_si_do4: other_si_do4,
        other_rate_do4: other_rate_do4,
        other_prem_do4: other_prem_do4,
        ap4do_si: ap4do_si,
        ap4do_rate: ap4do_rate,
        ap4do_prem: ap4do_prem,
        de4do_si: de4do_si,
        sub4do_si: sub4do_si,
        do_values: do_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});


/// ENG- PROFESSIONAL INDEMNITY QUOTATION /////////////////////////
$("#save_eng_pi").on("click", () => {
    var date_input_pi = $("#date_input_pi").val(),
        eng_pi = "eng_pi",
        underwriter_pi = $("#underwriter_pi").val(),
        insured_pi = $("#insured_pi").val(),
        industry_pi = $("#industry_pi").val(),
        intermediary_pi = $("#intermediary_pi").val(),
        selectCurrency_pi = $("#selectCurrency_pi").val(),

        apob_si = $("#apob_si").val(),
        apob_rate = $("#apob_rate").val(),
        apob_prem = $("#apob_prem").val(),

        pcl_si = $("#pcl_si").val(),
        pcl_rate = $("#pcl_rate").val(),
        pcl_prem = $("#pcl_prem").val(),

        allpi_si = $("#allpi_si").val(),
        allpi_rate = $("#allpi_rate").val(),
        allpi_prem = $("#allpi_prem").val(),

        other_desc_pi = $("#other_desc_pi").val(),
        other_si_pi = $("#other_si_pi").val(),
        other_rate_pi = $("#other_rate_pi").val(),
        other_prem_pi = $("#other_prem_pi").val(),

        other_desc_pi1 = $("#other_desc_pi1").val(),
        other_si_pi1 = $("#other_si_pi1").val(),
        other_rate_pi1 = $("#other_rate_pi1").val(),
        other_prem_pi1 = $("#other_prem_pi1").val(),

        other_desc_pi1 = $("#other_desc_pi1").val(),
        other_si_pi1 = $("#other_si_pi1").val(),
        other_rate_pi1 = $("#other_rate_pi1").val(),
        other_prem_pi1 = $("#other_prem_pi1").val(),

        other_desc_pi2 = $("#other_desc_pi2").val(),
        other_si_pi2 = $("#other_si_pi2").val(),
        other_rate_pi2 = $("#other_rate_pi2").val(),
        other_prem_pi2 = $("#other_prem_pi2").val(),

        other_desc_pi3 = $("#other_desc_pi3").val(),
        other_si_pi3 = $("#other_si_pi3").val(),
        other_rate_pi3 = $("#other_rate_pi3").val(),
        other_prem_pi3 = $("#other_prem_pi3").val(),

        other_desc_pi4 = $("#other_desc_pi4").val(),
        other_si_pi4 = $("#other_si_pi4").val(),
        other_rate_pi4 = $("#other_rate_pi4").val(),
        other_prem_pi4 = $("#other_prem_pi4").val(),

        ap4pi_si = $("#ap4pi_si").val(),
        ap4pi_rate = $("#ap4pi_rate").val(),
        ap4pi_prem = $("#ap4pi_prem").val(),

        de4pi_si = $("#de4pi_si").val(),

        sub4pi_si = $("#sub4pi_si").val(),

        pri_values = "insert_pri";

    $.post("/table/admin/junk/process_pri.php", {
        date_input_pi: date_input_pi,
        eng_pi: eng_pi,
        underwriter_pi: underwriter_pi,
        insured_pi: insured_pi,
        industry_pi: industry_pi,
        intermediary_pi: intermediary_pi,
        selectCurrency_pi: selectCurrency_pi,
        apob_si: apob_si,
        apob_rate: apob_rate,
        apob_prem: apob_prem,
        pcl_si: pcl_si,
        pcl_rate: pcl_rate,
        pcl_prem: pcl_prem,
        allpi_si: allpi_si,
        allpi_rate: allpi_rate,
        allpi_prem: allpi_prem,
        other_desc_pi: other_desc_pi,
        other_si_pi: other_si_pi,
        other_rate_pi: other_rate_pi,
        other_prem_pi: other_prem_pi,
        other_desc_pi1: other_desc_pi1,
        other_si_pi1: other_si_pi1,
        other_rate_pi1: other_rate_pi1,
        other_prem_pi1: other_prem_pi1,
        other_desc_pi2: other_desc_pi2,
        other_si_pi2: other_si_pi2,
        other_rate_pi2: other_rate_pi2,
        other_prem_pi2: other_prem_pi2,
        other_desc_pi3: other_desc_pi3,
        other_si_pi3: other_si_pi3,
        other_rate_pi3: other_rate_pi3,
        other_prem_pi3: other_prem_pi3,
        other_desc_pi4: other_desc_pi4,
        other_si_pi4: other_si_pi4,
        other_rate_pi4: other_rate_pi4,
        other_prem_pi4: other_prem_pi4,
        ap4pi_si: ap4pi_si,
        ap4pi_rate: ap4pi_rate,
        ap4pi_prem: ap4pi_prem,
        de4pi_si: de4pi_si,
        sub4pi_si: sub4pi_si,

        pri_values: pri_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});


/// ENG- FIDELITY GUARANTEE QUOTATION /////////////////////////////
$("#save_eng_fg").on("click", () => {
    var date_input_fg = $("#date_input_fg").val(),
        eng_fg = "eng_fg",
        underwriter_fid = $("#underwriter_fid").val(),
        insured_fid = $("#insured_fid").val(),
        industry_fid = $("#industry_fid").val(),
        intermediary_fid = $("#intermediary_fid").val(),
        selectCurrency_fid = $("#selectCurrency_fid").val(),

        cos_si = $("#cos_si").val(),
        cos_rate = $("#cos_rate").val(),
        cos_prem = $("#cos_prem").val(),

        pcl2_si = $("#pcl2_si").val(),
        pcl2_rate = $("#pcl2_rate").val(),
        pcl2_prem = $("#pcl2_prem").val(),

        allfg_si = $("#allfg_si").val(),
        allfg_rate = $("#allfg_rate").val(),
        allfg_prem = $("#allfg_prem").val(),

        other_desc_fg = $("#other_desc_fg").val(),
        other_si_fg = $("#other_si_fg").val(),
        other_rate_fg = $("#other_rate_fg").val(),
        other_prem_fg = $("#other_prem_fg").val(),

        other_desc_fg1 = $("#other_desc_fg1").val(),
        other_si_fg1 = $("#other_si_fg1").val(),
        other_rate_fg1 = $("#other_rate_fg1").val(),
        other_prem_fg1 = $("#other_prem_fg1").val(),

        other_desc_fg2 = $("#other_desc_fg2").val(),
        other_si_fg2 = $("#other_si_fg2").val(),
        other_rate_fg2 = $("#other_rate_fg2").val(),
        other_prem_fg2 = $("#other_prem_fg2").val(),

        other_desc_fg3 = $("#other_desc_fg3").val(),
        other_si_fg3 = $("#other_si_fg3").val(),
        other_rate_fg3 = $("#other_rate_fg3").val(),
        other_prem_fg3 = $("#other_prem_fg3").val(),

        other_desc_fg4 = $("#other_desc_fg4").val(),
        other_si_fg4 = $("#other_si_fg4").val(),
        other_rate_fg4 = $("#other_rate_fg4").val(),
        other_prem_fg4 = $("#other_prem_fg4").val(),

        ap4fg_si = $("#ap4fg_si").val(),
        ap4fg_rate = $("#ap4fg_rate").val(),
        ap4fg_prem = $("#ap4fg_prem").val(),

        de4fg_si = $("#de4fg_si").val(),

        sub4fg_si = $("#sub4fg_si").val(),

        fid_values = "insert_fid";

    $.post("/table/admin/junk/process_fid.php", {
        date_input_fg: date_input_fg,
        eng_fg: eng_fg,
        underwriter_fid: underwriter_fid,
        insured_fid: insured_fid,
        industry_fid: industry_fid,
        intermediary_fid: intermediary_fid,
        selectCurrency_fid: selectCurrency_fid,
        cos_si: cos_si,
        cos_rate: cos_rate,
        cos_prem: cos_prem,
        pcl2_si: pcl2_si,
        pcl2_rate: pcl2_rate,
        pcl2_prem: pcl2_prem,
        allfg_si: allfg_si,
        allfg_rate: allfg_rate,
        allfg_prem: allfg_prem,
        other_desc_fg: other_desc_fg,
        other_si_fg: other_si_fg,
        other_rate_fg: other_rate_fg,
        other_prem_fg: other_prem_fg,
        other_desc_fg1: other_desc_fg1,
        other_si_fg1: other_si_fg1,
        other_rate_fg1: other_rate_fg1,
        other_prem_fg1: other_prem_fg1,
        other_desc_fg2: other_desc_fg2,
        other_si_fg2: other_si_fg2,
        other_rate_fg2: other_rate_fg2,
        other_prem_fg2: other_prem_fg2,
        other_desc_fg3: other_desc_fg3,
        other_si_fg3: other_si_fg3,
        other_rate_fg3: other_rate_fg3,
        other_prem_fg3: other_prem_fg3,
        other_desc_fg4: other_desc_fg4,
        other_si_fg4: other_si_fg4,
        other_rate_fg4: other_rate_fg4,
        other_prem_fg4: other_prem_fg4,
        ap4fg_si: ap4fg_si,
        ap4fg_rate: ap4fg_rate,
        ap4fg_prem: ap4fg_prem,
        de4fg_si: de4fg_si,
        sub4fg_si: sub4fg_si,

        fid_values: fid_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });
});


/// ENG- BANKERS INDEMNITY QUOTATION //////////////////////////////
$("#save_eng_bi").on("click", () => {
    var date_input_bty = $("#date_input_bty").val(),
        eng_bty = "eng_bty",
        underwriter_bty = $("#underwriter_bty").val(),
        insured_bty = $("#insured_bty").val(),
        industry_bty = $("#industry_bty").val(),
        intermediary_bty = $("#intermediary_bty").val(),
        selectCurrency_bty = $("#selectCurrency_bty").val(),

        fge_limits = $("#fge_limits").val(),
        fge_rate = $("#fge_rate").val(),
        fge_prem = $("#fge_prem").val(),

        premises_limits = $("#premises_limits").val(),
        premises_rate = $("#premises_rate").val(),
        premises_prem = $("#premises_prem").val(),

        transit_limits = $("#transit_limits").val(),
        transit_rate = $("#transit_rate").val(),
        transit_prem = $("#transit_prem").val(),

        fc_limits = $("#fc_limits").val(),
        fc_rate = $("#fc_rate").val(),
        fc_prem = $("#fc_prem").val(),

        fs_limits = $("#fs_limits").val(),
        fs_rate = $("#fs_rate").val(),
        fs_prem = $("#fs_prem").val(),

        cc_limits = $("#cc_limits").val(),
        cc_rate = $("#cc_rate").val(),
        cc_prem = $("#cc_prem").val(),

        doc_limits = $("#doc_limits").val(),
        doc_rate = $("#doc_rate").val(),
        doc_prem = $("#doc_prem").val(),

        los_limits = $("#los_limits").val(),
        los_rate = $("#los_rate").val(),
        los_prem = $("#los_prem").val(),

        proi_limits = $("#proi_limits").val(),
        proi_rate = $("#proi_rate").val(),
        proi_prem = $("#proi_prem").val(),

        rem_limits = $("#rem_limits").val(),
        rem_rate = $("#rem_rate").val(),
        rem_prem = $("#rem_prem").val(),

        lod_limits = $("#lod_limits").val(),
        lod_rate = $("#lod_rate").val(),
        lod_prem = $("#lod_prem").val(),

        csdb_limits = $("#csdb_limits").val(),
        csdb_rate = $("#csdb_rate").val(),
        csdb_prem = $("#csdb_prem").val(),

        ccl_limits = $("#ccl_limits").val(),
        ccl_rate = $("#ccl_rate").val(),
        ccl_prem = $("#ccl_prem").val(),

        other_desc_bi = $("#other_desc_bi").val(),
        other_limit_bi = $("#other_limit_bi").val(),
        other_rate_bi = $("#other_rate_bi").val(),
        other_prem_bi = $("#other_prem_bi").val(),

        other_desc_bi1 = $("#other_desc_bi1").val(),
        other_limit_bi1 = $("#other_limit_bi1").val(),
        other_rate_bi1 = $("#other_rate_bi1").val(),
        other_prem_bi1 = $("#other_prem_bi1").val(),

        other_desc_bi2 = $("#other_desc_bi2").val(),
        other_limit_bi2 = $("#other_limit_bi2").val(),
        other_rate_bi2 = $("#other_rate_bi2").val(),
        other_prem_bi2 = $("#other_prem_bi2").val(),

        other_desc_bi3 = $("#other_desc_bi3").val(),
        other_limit_bi3 = $("#other_limit_bi3").val(),
        other_rate_bi3 = $("#other_rate_bi3").val(),
        other_prem_bi3 = $("#other_prem_bi3").val(),

        other_desc_bi4 = $("#other_desc_bi4").val(),
        other_limit_bi4 = $("#other_limit_bi4").val(),
        other_rate_bi4 = $("#other_rate_bi4").val(),
        other_prem_bi4 = $("#other_prem_bi4").val(),

        tsi4bi_limits = $("#tsi4bi_limits").val(),
        tsi4bi_rate = $("#tsi4bi_rate").val(),
        tsi4bi_prem = $("#tsi4bi_prem").val(),

        ap4bi_limits = $("#ap4bi_limits").val(),
        ap4bi_rate = $("#ap4bi_rate").val(),
        ap4bi_prem = $("#ap4bi_prem").val(),

        de4bi_limits = $("#de4bi_limits").val(),

        sub4bi_limits = $("#sub4bi_limits").val(),

        bi_values = "insert_bi";

    $.post("/table/admin/junk/process_bi.php", {
        date_input_bty: date_input_bty,
        eng_bty: eng_bty,
        underwriter_bty: underwriter_bty,
        insured_bty: insured_bty,
        industry_bty: industry_bty,
        intermediary_bty: intermediary_bty,
        selectCurrency_bty: selectCurrency_bty,
        fge_limits: fge_limits,
        fge_rate: fge_rate,
        fge_prem: fge_prem,
        premises_limits: premises_limits,
        premises_rate: premises_rate,
        premises_prem: premises_prem,
        transit_limits: transit_limits,
        transit_rate: transit_rate,
        transit_prem: transit_prem,
        fc_limits: fc_limits,
        fc_rate: fc_rate,
        fc_prem: fc_prem,
        fs_limits: fs_limits,
        fs_rate: fs_rate,
        fs_prem: fs_prem,
        cc_limits: cc_limits,
        cc_rate: cc_rate,
        cc_prem: cc_prem,
        doc_limits: doc_limits,
        doc_rate: doc_rate,
        doc_prem: doc_prem,
        los_limits: los_limits,
        los_rate: los_rate,
        los_prem: los_prem,
        proi_limits: proi_limits,
        proi_rate: proi_rate,
        proi_prem: proi_prem,
        rem_limits: rem_limits,
        rem_rate: rem_rate,
        rem_prem: rem_prem,
        lod_limits: lod_limits,
        lod_rate: lod_rate,
        lod_prem: lod_prem,
        csdb_limits: csdb_limits,
        csdb_rate: csdb_rate,
        csdb_prem: csdb_prem,
        ccl_limits: ccl_limits,
        ccl_rate: ccl_rate,
        ccl_prem: ccl_prem,
        other_desc_bi: other_desc_bi,
        other_limit_bi: other_limit_bi,
        other_rate_bi: other_rate_bi,
        other_prem_bi: other_prem_bi,
        other_desc_bi1: other_desc_bi1,
        other_limit_bi1: other_limit_bi1,
        other_rate_bi1: other_rate_bi1,
        other_prem_bi1: other_prem_bi1,
        other_desc_bi2: other_desc_bi2,
        other_limit_bi2: other_limit_bi2,
        other_rate_bi2: other_rate_bi2,
        other_prem_bi2: other_prem_bi2,
        other_desc_bi3: other_desc_bi3,
        other_limit_bi3: other_limit_bi3,
        other_rate_bi3: other_rate_bi3,
        other_prem_bi3: other_prem_bi3,
        other_desc_bi4: other_desc_bi4,
        other_limit_bi4: other_limit_bi4,
        other_rate_bi4: other_rate_bi4,
        other_prem_bi4: other_prem_bi4,
        tsi4bi_limits: tsi4bi_limits,
        tsi4bi_rate: tsi4bi_rate,
        tsi4bi_prem: tsi4bi_prem,
        ap4bi_limits: ap4bi_limits,
        ap4bi_rate: ap4bi_rate,
        ap4bi_prem: ap4bi_prem,
        de4bi_limits: de4bi_limits,
        sub4bi_limits: sub4bi_limits,

        bi_values: bi_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });
});


/// ENG- BANKERS BLANKET BOND QUOTATION ///////////////////////////
$("#save_eng_bbb").on("click", () => {
    var date_input_bbb = $("#date_input_bbb").val(),
        eng_bbb = "eng_bbb",
        underwriter_bbb = $("#underwriter_bbb").val(),
        insured_bbb = $("#insured_bbb").val(),
        industry_bbb = $("#industry_bbb").val(),
        intermediary_bbb = $("#intermediary_bbb").val(),
        selectCurrency_bbb = $("#selectCurrency_bbb").val(),

        sob_limits = $("#sob_limits").val(),
        sob_rate = $("#sob_rate").val(),
        sob_prem = $("#sob_prem").val(),

        s2cc_limits = $("#s2cc_limits").val(),
        s2cc_rate = $("#s2cc_rate").val(),
        s2cc_prem = $("#s2cc_prem").val(),

        s3pi_limits = $("#s3pi_limits").val(),
        s3pi_rate = $("#s3pi_rate").val(),
        s3pi_prem = $("#s3pi_prem").val(),

        s3pi_limits2 = $("#s3pi_limits2").val(),
        s3pi_rate2 = $("#s3pi_rate2").val(),
        s3pi_prem2 = $("#s3pi_prem2").val(),

        peril_limits = $("#peril_limits").val(),
        peril_rate = $("#peril_rate").val(),
        peril_prem = $("#peril_prem").val(),

        aloi_limits = $("#aloi_limits").val(),
        aloi_rate = $("#aloi_rate").val(),
        aloi_prem = $("#aloi_prem").val(),

        other_desc_bbb = $("#other_desc_bbb").val(),
        other_limit_bbb = $("#other_limit_bbb").val(),
        other_rate_bbb = $("#other_rate_bbb").val(),
        other_prem_bbb = $("#other_prem_bbb").val(),

        other_desc_bbb1 = $("#other_desc_bbb1").val(),
        other_limit_bbb1 = $("#other_limit_bbb1").val(),
        other_rate_bbb1 = $("#other_rate_bbb1").val(),
        other_prem_bbb1 = $("#other_prem_bbb1").val(),

        other_desc_bbb2 = $("#other_desc_bbb2").val(),
        other_limit_bbb2 = $("#other_limit_bbb2").val(),
        other_rate_bbb2 = $("#other_rate_bbb2").val(),
        other_prem_bbb2 = $("#other_prem_bbb2").val(),

        other_desc_bbb3 = $("#other_desc_bbb3").val(),
        other_limit_bbb3 = $("#other_limit_bbb3").val(),
        other_rate_bbb3 = $("#other_rate_bbb3").val(),
        other_prem_bbb3 = $("#other_prem_bbb3").val(),

        other_desc_bbb4 = $("#other_desc_bbb4").val(),
        other_limit_bbb4 = $("#other_limit_bbb4").val(),
        other_rate_bbb4 = $("#other_rate_bbb4").val(),
        other_prem_bbb4 = $("#other_prem_bbb4").val(),

        apremm_limits = $("#apremm_limits").val(),
        apremm_rate = $("#apremm_rate").val(),
        apremm_prem = $("#apremm_prem").val(),

        ded_limits = $("#ded_limits").val(),

        subs_limits = $("#subs_limits").val(),

        bbb_values = "insert_bbb";

    $.post("/table/admin/junk/process_bbb.php", {
        date_input_bbb: date_input_bbb,
        eng_bbb: eng_bbb,
        underwriter_bbb: underwriter_bbb,
        insured_bbb: insured_bbb,
        industry_bbb: industry_bbb,
        intermediary_bbb: intermediary_bbb,
        selectCurrency_bbb: selectCurrency_bbb,
        sob_limits: sob_limits,
        sob_rate: sob_rate,
        sob_prem: sob_prem,
        s2cc_limits: s2cc_limits,
        s2cc_rate: s2cc_rate,
        s2cc_prem: s2cc_prem,
        s3pi_limits: s3pi_limits,
        s3pi_rate: s3pi_rate,
        s3pi_prem: s3pi_prem,
        s3pi_limits2: s3pi_limits2,
        s3pi_rate2: s3pi_rate2,
        s3pi_prem2: s3pi_prem2,
        peril_limits: peril_limits,
        peril_rate: peril_rate,
        peril_prem: peril_prem,
        aloi_limits: aloi_limits,
        aloi_rate: aloi_rate,
        aloi_prem: aloi_prem,
        other_desc_bbb: other_desc_bbb,
        other_limit_bbb: other_limit_bbb,
        other_rate_bbb: other_rate_bbb,
        other_prem_bbb: other_prem_bbb,
        other_desc_bbb1: other_desc_bbb1,
        other_limit_bbb1: other_limit_bbb1,
        other_rate_bbb1: other_rate_bbb1,
        other_prem_bbb1: other_prem_bbb1,
        other_desc_bbb2: other_desc_bbb2,
        other_limit_bbb2: other_limit_bbb2,
        other_rate_bbb2: other_rate_bbb2,
        other_prem_bbb2: other_prem_bbb2,
        other_desc_bbb3: other_desc_bbb3,
        other_limit_bbb3: other_limit_bbb3,
        other_rate_bbb3: other_rate_bbb3,
        other_prem_bbb3: other_prem_bbb3,
        other_desc_bbb4: other_desc_bbb4,
        other_limit_bbb4: other_limit_bbb4,
        other_rate_bbb4: other_rate_bbb4,
        other_prem_bbb4: other_prem_bbb4,
        apremm_limits: apremm_limits,
        apremm_rate: apremm_rate,
        apremm_prem: apremm_prem,
        ded_limits: ded_limits,
        subs_limits: subs_limits,

        bbb_values: bbb_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- MONEY INSURANCE QUOTATION ////////////////////////////////
$("#save_eng_money").on("click", () => {
    var date_input_m = $("#date_input_m").val(),
        eng_m = "eng_m",
        underwriter_m = $("#underwriter_m").val(),
        insured_m = $("#insured_m").val(),
        industry_m = $("#industry_m").val(),
        intermediary_m = $("#intermediary_m").val(),
        selectCurrency_m = $("#selectCurrency_m").val(),

        ptl_si = $("#ptl_si").val(),
        ptl_rate = $("#ptl_rate").val(),
        ptl_prem = $("#ptl_prem").val(),

        ac_si = $("#ac_si").val(),
        ac_rate = $("#ac_rate").val(),
        ac_prem = $("#ac_prem").val(),

        loi_cis_si = $("#loi_cis_si").val(),
        loi_cis_rate = $("#loi_cis_rate").val(),
        loi_cis_prem = $("#loi_cis_prem").val(),

        loi_hp_limits = $("#loi_hp_limits").val(),
        loi_hp_rate = $("#loi_hp_rate").val(),
        loi_hp_prem = $("#loi_hp_prem").val(),

        other_desc_mi = $("#other_desc_mi").val(),
        other_limit_mi = $("#other_limit_mi").val(),
        other_rate_mi = $("#other_rate_mi").val(),
        other_prem_mi = $("#other_prem_mi").val(),

        other_desc_mi1 = $("#other_desc_mi1").val(),
        other_limit_mi1 = $("#other_limit_mi1").val(),
        other_rate_mi1 = $("#other_rate_mi1").val(),
        other_prem_mi1 = $("#other_prem_mi1").val(),

        other_desc_mi2 = $("#other_desc_mi2").val(),
        other_limit_mi2 = $("#other_limit_mi2").val(),
        other_rate_mi2 = $("#other_rate_mi2").val(),
        other_prem_mi2 = $("#other_prem_mi2").val(),

        ap_money_si = $("#ap_money_si").val(),
        ap_money_rate = $("#ap_money_rate").val(),
        ap_money_prem = $("#ap_money_prem").val(),

        de_money_si = $("#de_money_si").val(),

        sub_money_si = $("#sub_money_si").val(),

        money_values = "insert_money";

    $.post("/table/admin/junk/process_money.php", {
        date_input_m: date_input_m,
        eng_m: eng_m,
        underwriter_m: underwriter_m,
        insured_m: insured_m,
        industry_m: industry_m,
        intermediary_m: intermediary_m,
        selectCurrency_m: selectCurrency_m,
        ptl_si: ptl_si,
        ptl_rate: ptl_rate,
        ptl_prem: ptl_prem,
        ac_si: ac_si,
        ac_rate: ac_rate,
        ac_prem: ac_prem,
        loi_cis_si: loi_cis_si,
        loi_cis_rate: loi_cis_rate,
        loi_cis_prem: loi_cis_prem,
        loi_hp_limits: loi_hp_limits,
        loi_hp_rate: loi_hp_rate,
        loi_hp_prem: loi_hp_prem,
        other_desc_mi: other_desc_mi,
        other_limit_mi: other_limit_mi,
        other_rate_mi: other_rate_mi,
        other_prem_mi: other_prem_mi,
        other_desc_mi1: other_desc_mi1,
        other_limit_mi1: other_limit_mi1,
        other_rate_mi1: other_rate_mi1,
        other_prem_mi1: other_prem_mi1,
        other_desc_mi2: other_desc_mi2,
        other_limit_mi2: other_limit_mi2,
        other_rate_mi2: other_rate_mi2,
        other_prem_mi2: other_prem_mi2,
        ap_money_si: ap_money_si,
        ap_money_rate: ap_money_rate,
        ap_money_prem: ap_money_prem,
        de_money_si: de_money_si,
        sub_money_si: sub_money_si,
        money_values: money_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });


});


/// ENG- GROUP PERSONAL ACCIDENT QUOTATION ////////////////////////
$("#save_eng_gpa").on("click", () => {
    var date_input_gpa = $("#date_input_gpa").val(),
        underwriter_gpa = $("#underwriter_gpa").val(),
        insured_gpa = $("#insured_gpa").val(),
        industry_gpa = $("#industry_gpa").val(),
        intermediary_gpa = $("#intermediary_gpa").val(),
        selectCurrency_gpa = $("#selectCurrency_gpa").val(),
        num_asc = $("#num_asc").val(),
        clerical_as = $("#clerical_as").val(),
        clerical_num = $("#clerical_num").val(),
        clerical_etas = $("#clerical_etas").val(),
        clerical_cs = $("#clerical_cs").val(),
        nc_as = $("#nc_as").val(),
        nc_num = $("#nc_num").val(),
        nc_etas = $("#nc_etas").val(),
        nc_cs = $("#nc_cs").val(),
        mors_as = $("#mors_as").val(),
        mors_num = $("#mors_num").val(),
        mors_etas = $("#mors_etas").val(),
        mors_cs = $("#mors_cs").val(),
        artisans_as = $("#artisans_as").val(),
        artisans_num = $("#artisans_num").val(),
        artisans_etas = $("#artisans_etas").val(),
        artisans_cs = $("#artisans_cs").val(),
        sormw_as = $("#sormw_as").val(),
        sormw_num = $("#sormw_num").val(),
        sormw_etas = $("#sormw_etas").val(),
        sormw_cs = $("#sormw_cs").val(),
        total_as = $("#total_as").val(),
        total_num = $("#total_num").val(),
        total_etas = $("#total_etas").val(),
        total_cs = $("#total_cs").val(),
        death_as = $("#death_as").val(),
        death_num = $("#death_num").val(),
        death_etas = $("#death_etas").val(),
        death_cs = $("#death_cs").val(),
        pd_terms = $("#pd_terms").val(),
        pd_cs = $("#pd_cs").val(),
        pd_rate = $("#pd_rate").val(),
        pd_prem = $("#pd_prem").val(),
        td_terms = $("#td_terms").val(),
        td_cs = $("#td_cs").val(),
        td_rate = $("#td_rate").val(),
        td_prem = $("#td_prem").val(),
        me_terms = $("#me_terms").val(),
        me_cs = $("#me_cs").val(),
        me_rate = $("#me_rate").val(),
        me_prem = $("#me_prem").val(),
        death4_as = $("#death4_as").val(),
        death4_num = $("#death4_num").val(),
        death4_etas = $("#death4_etas").val(),
        death4_cs = $("#death4_cs").val(),
        pd4_terms = $("#pd4_terms").val(),
        pd4_cs = $("#pd4_cs").val(),
        pd4_rate = $("#pd4_rate").val(),
        pd4_prem = $("#pd4_prem").val(),
        td4_terms = $("#td4_terms").val(),
        td4_cs = $("#td4_cs").val(),
        td4_rate = $("#td4_rate").val(),
        td4_prem = $("#td4_prem").val(),
        me4_terms = $("#me4_terms").val(),
        me4_cs = $("#me4_cs").val(),
        me4_rate = $("#me4_rate").val(),
        me4_prem = $("#me4_prem").val(),
        total_prem_term = $("#total_prem_term").val(),
        total_prem_cs = $("#total_prem_cs").val(),
        total_prem_rate = $("#total_prem_rate").val(),
        total_prems = $("#total_prems").val(),
        gd4gpa_terms = $("#gd4gpa_terms").val(),
        gd4gpa_cs = $("#gd4gpa_cs").val(),
        gd4gpa_rate = $("#gd4gpa_rate").val(),
        gd4gpa_prem = $("#gd4gpa_prem").val(),
        ap4gpa_terms = $("#ap4gpa_terms").val(),
        ap4gpa_cs = $("#ap4gpa_cs").val(),
        ap4gpa_rate = $("#ap4gpa_rate").val(),
        ap4gpa_prem = $("#ap4gpa_prem").val(),
        deduc_terms = $("#deduc_terms").val(),
        sub1_terms = $("#sub1_terms").val(),

        gpa_values = "insert_gpa";

    $.post("/table/admin/junk/process_gpa.php", {
        date_input_gpa: date_input_gpa,
        underwriter_gpa: underwriter_gpa,
        insured_gpa: insured_gpa,
        industry_gpa: industry_gpa,
        intermediary_gpa: intermediary_gpa,
        selectCurrency_gpa: selectCurrency_gpa,
        num_asc: num_asc,
        clerical_as: clerical_as,
        clerical_num: clerical_num,
        clerical_etas: clerical_etas,
        clerical_cs: clerical_cs,
        nc_as: nc_as,
        nc_num: nc_num,
        nc_etas: nc_etas,
        nc_cs: nc_cs,
        mors_as: mors_as,
        mors_num: mors_num,
        mors_etas: mors_etas,
        mors_cs: mors_cs,
        artisans_as: artisans_as,
        artisans_num: artisans_num,
        artisans_etas: artisans_etas,
        artisans_cs: artisans_cs,
        sormw_as: sormw_as,
        sormw_num: sormw_num,
        sormw_etas: sormw_etas,
        sormw_cs: sormw_cs,
        total_as: total_as,
        total_num: total_num,
        total_etas: total_etas,
        total_cs: total_cs,
        death_as: death_as,
        death_num: death_num,
        death_etas: death_etas,
        death_cs: death_cs,
        pd_terms: pd_terms,
        pd_cs: pd_cs,
        pd_rate: pd_rate,
        pd_prem: pd_prem,
        td_terms: td_terms,
        td_cs: td_cs,
        td_rate: td_rate,
        td_prem: td_prem,
        me_terms: me_terms,
        me_cs: me_cs,
        me_rate: me_rate,
        me_prem: me_prem,
        death4_as: death4_as,
        death4_num: death4_num,
        death4_etas: death4_etas,
        death4_cs: death4_cs,
        pd4_terms: pd4_terms,
        pd4_cs: pd4_cs,
        pd4_rate: pd4_rate,
        pd4_prem: pd4_prem,
        td4_terms: td4_terms,
        td4_cs: td4_cs,
        td4_rate: td4_rate,
        td4_prem: td4_prem,
        me4_terms: me4_terms,
        me4_cs: me4_cs,
        me4_rate: me4_rate,
        me4_prem: me4_prem,
        total_prem_term: total_prem_term,
        total_prem_cs: total_prem_cs,
        total_prem_rate: total_prem_rate,
        total_prems: total_prems,
        gd4gpa_terms: gd4gpa_terms,
        gd4gpa_cs: gd4gpa_cs,
        gd4gpa_rate: gd4gpa_rate,
        gd4gpa_prem: gd4gpa_prem,
        ap4gpa_terms: ap4gpa_terms,
        ap4gpa_cs: ap4gpa_cs,
        ap4gpa_rate: ap4gpa_rate,
        ap4gpa_prem: ap4gpa_prem,
        deduc_terms: deduc_terms,
        sub1_terms: sub1_terms,

        gpa_values: gpa_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});


/// ENG- WORKMENS' COMPENSATION QUOTATION /////////////////////////
$("#save_eng_wc").on("click", () => {
    var heo = $("#heo").val(),
        date_input_wc = $("#date_input_wc").val(),
        underwriter_wc = $("#underwriter_wc").val(),
        insured_wc = $("#insured_wc").val(),
        industry_wc = $("#industry_wc").val(),
        intermediary_wc = $("#intermediary_wc").val(),
        selectCurrency_wc = $("#selectCurrency_wc").val(),
        clerical_asp = $("#clerical_asp").val(),
        clerical_num_wc = $("#clerical_num_wc").val(),
        clerical_dtas = $("#clerical_dtas").val(),
        clerical_heoc = $("#clerical_heoc").val(),
        clerical_bc = $("#clerical_bc").val(),
        clerical_rate = $("#clerical_rate").val(),
        clerical_prem = $("#clerical_prem").val(),
        nonclerical_asp = $("#nonclerical_asp").val(),
        nonclerical_num = $("#nonclerical_num").val(),
        nonclerical_dtas = $("#nonclerical_dtas").val(),
        nonclerical_heoc = $("#nonclerical_heoc").val(),
        nonclerical_bc = $("#nonclerical_bc").val(),
        nonclerical_rate = $("#nonclerical_rate").val(),
        nonclerical_prem = $("#nonclerical_prem").val(),
        msd_asp = $("#msd_asp").val(),
        msd_num = $("#msd_num").val(),
        msd_dtas = $("#msd_dtas").val(),
        msd_heoc = $("#msd_heoc").val(),
        msd_bc = $("#msd_bc").val(),
        msd_rate = $("#msd_rate").val(),
        msd_prem = $("#msd_prem").val(),
        tech_asp = $("#tech_asp").val(),
        tech_num = $("#tech_num").val(),
        tech_dtas = $("#tech_dtas").val(),
        tech_heoc = $("#tech_heoc").val(),
        tech_bc = $("#tech_bc").val(),
        tech_rate = $("#tech_rate").val(),
        tech_prem = $("#tech_prem").val(),
        smldm_asp = $("#smldm_asp").val(),
        smldm_num = $("#smldm_num").val(),
        smldm_dtas = $("#smldm_dtas").val(),
        smldm_heoc = $("#smldm_heoc").val(),
        smldm_bc = $("#smldm_bc").val(),
        smldm_rate = $("#smldm_rate").val(),
        smldm_prem = $("#smldm_prem").val(),
        artpe_asp = $("#artpe_asp").val(),
        artpe_num = $("#artpe_num").val(),
        artpe_dtas = $("#artpe_dtas").val(),
        artpe_heoc = $("#artpe_heoc").val(),
        artpe_bc = $("#artpe_bc").val(),
        artpe_rate = $("#artpe_rate").val(),
        artpe_prem = $("#artpe_prem").val(),
        other_desc = $("#other_desc").val(),
        other_asp = $("#other_asp").val(),
        other_num = $("#other_num").val(),
        other_dtas = $("#other_dtas").val(),
        other_heoc = $("#other_heoc").val(),
        other_bc = $("#other_bc").val(),
        other_rate = $("#other_rate").val(),
        other_prem = $("#other_prem").val(),
        other1_desc = $("#other1_desc").val(),
        other1_asp = $("#other1_asp").val(),
        other1_num = $("#other1_num").val(),
        other1_dtas = $("#other1_dtas").val(),
        other1_heoc = $("#other1_heoc").val(),
        other1_bc = $("#other1_bc").val(),
        other1_rate = $("#other1_rate").val(),
        other1_prem = $("#other1_prem").val(),
        total_asp = $("#total_asp").val(),
        total_num = $("#total_num").val(),
        total_dtas = $("#total_dtas").val(),
        total_heoc = $("#total_heoc").val(),
        total_bc = $("#total_bc").val(),
        total_rate = $("#total_rate").val(),
        total_prem = $("#total_prem").val(),
        mel1 = $("#mel1").val(),
        asp1 = $("#asp1").val(),
        mel2 = $("#mel2").val(),
        mel3 = $("#mel3").val(),
        mel_bc = $("#mel_bc").val(),
        mel_rate = $("#mel_rate").val(),
        mel_prem = $("#mel_prem").val(),
        mel = $("#mel").val(),
        asp2 = $("#asp2").val(),
        mel1ro = $("#mel1ro").val(),
        mel2ro = $("#mel2ro").val(),
        mel3ro = $("#mel3ro").val(),
        mel_bc2 = $("#mel_bc2").val(),
        mel_rate2 = $("#mel_rate2").val(),
        mel_prem2 = $("#mel_prem2").val(),
        cll_num_ro = $("#cll_num_ro").val(),
        asp3 = $("#asp3").val(),
        cll_dtas_ro = $("#cll_dtas_ro").val(),
        cll_heoc_ro = $("#cll_heoc_ro").val(),
        cll_bc = $("#cll_bc").val(),
        coll_rate = $("#coll_rate").val(),
        coll_prem = $("#coll_prem").val(),
        cll = $("#cll").val(),
        cll_asp = $("#cll_asp").val(),
        cll_num_ro22 = $("#cll_num_ro22").val(),
        cll_dtas_ro22 = $("#cll_dtas_ro22").val(),
        cll_heoc_ro22 = $("#cll_heoc_ro22").val(),
        cll_bc22 = $("#cll_bc22").val(),
        cll_rate22 = $("#cll_rate22").val(),
        cll_prem222 = $("#cll_prem222").val(),
        tfw_dtas_asp = $("#tfw_dtas_asp").val(),
        tfw_num_ro = $("#tfw_num_ro").val(),
        tfw_dtas_ro = $("#tfw_dtas_ro").val(),
        tfw_heoc_ro = $("#tfw_heoc_ro").val(),
        tfw_bc = $("#tfw_bc").val(),
        tfw_rate = $("#tfw_rate").val(),
        tfw_prem = $("#tfw_prem").val(),
        tfw2 = $("#tfw2").val(),
        tfw_num_asp2 = $("#tfw_num_asp2").val(),
        tfw_num_ro2 = $("#tfw_num_ro2").val(),
        tfw_dtas_ro2 = $("#tfw_dtas_ro2").val(),
        tfw_heoc_ro2 = $("#tfw_heoc_ro2").val(),
        tfw_bc2 = $("#tfw_bc2").val(),
        tfw_rate2 = $("#tfw_rate2").val(),
        tfw_prem22 = $("#tfw_prem22").val(),
        gd_dtas_asp = $("#gd_dtas_asp").val(),
        gd_num_ro = $("#gd_num_ro").val(),
        gd_dtas_ro = $("#gd_dtas_ro").val(),
        gd_heoc_ro = $("#gd_heoc_ro").val(),
        gd_bc = $("#gd_bc").val(),
        gd_rate = $("#gd_rate").val(),
        gd_prem = $("#gd_prem").val(),
        dp_dtas_asp = $("#dp_dtas_asp").val(),
        dp_num_ro = $("#dp_num_ro").val(),
        dp_dtas_ro = $("#dp_dtas_ro").val(),
        dp_heoc_ro = $("#dp_heoc_ro").val(),
        dp_bc = $("#dp_bc").val(),
        dep_rate = $("#dep_rate").val(),
        dep_prem = $("#dep_prem").val(),
        ap_num_asp = $("#ap_num_asp").val(),
        ap_num = $("#ap_num").val(),
        ap_dtas = $("#ap_dtas").val(),
        ap_heoc = $("#ap_heoc").val(),
        ap_bc = $("#ap_bc").val(),
        ap_rate = $("#ap_rate").val(),
        ap_prem = $("#ap_prem").val(),
        sub_num = $("#sub_num").val(),
        sub_num2 = $("#sub_num2").val(),

        wc_values = "insert_wc";

    $.post("/table/admin/junk/process_wc.php", {
        heo: heo,
        date_input_wc: date_input_wc,
        underwriter_wc: underwriter_wc,
        insured_wc: insured_wc,
        industry_wc: industry_wc,
        intermediary_wc: intermediary_wc,
        selectCurrency_wc: selectCurrency_wc,
        clerical_asp: clerical_asp,
        clerical_num_wc: clerical_num_wc,
        clerical_dtas: clerical_dtas,
        clerical_heoc: clerical_heoc,
        clerical_bc: clerical_bc,
        clerical_rate: clerical_rate,
        clerical_prem: clerical_prem,
        nonclerical_asp: nonclerical_asp,
        nonclerical_num: nonclerical_num,
        nonclerical_dtas: nonclerical_dtas,
        nonclerical_heoc: nonclerical_heoc,
        nonclerical_bc: nonclerical_bc,
        nonclerical_rate: nonclerical_rate,
        nonclerical_prem: nonclerical_prem,
        msd_asp: msd_asp,
        msd_num: msd_num,
        msd_dtas: msd_dtas,
        msd_heoc: msd_heoc,
        msd_bc: msd_bc,
        msd_rate: msd_rate,
        msd_prem: msd_prem,
        tech_asp: tech_asp,
        tech_num: tech_num,
        tech_dtas: tech_dtas,
        tech_heoc: tech_heoc,
        tech_bc: tech_bc,
        tech_rate: tech_rate,
        tech_prem: tech_prem,
        smldm_asp: smldm_asp,
        smldm_num: smldm_num,
        smldm_dtas: smldm_dtas,
        smldm_heoc: smldm_heoc,
        smldm_bc: smldm_bc,
        smldm_rate: smldm_rate,
        smldm_prem: smldm_prem,
        artpe_asp: artpe_asp,
        artpe_num: artpe_num,
        artpe_dtas: artpe_dtas,
        artpe_heoc: artpe_heoc,
        artpe_bc: artpe_bc,
        artpe_rate: artpe_rate,
        artpe_prem: artpe_prem,
        other_desc: other_desc,
        other_asp: other_asp,
        other_num: other_num,
        other_dtas: other_dtas,
        other_heoc: other_heoc,
        other_bc: other_bc,
        other_rate: other_rate,
        other_prem: other_prem,
        other1_desc: other1_desc,
        other1_asp: other1_asp,
        other1_num: other1_num,
        other1_dtas: other1_dtas,
        other1_heoc: other1_heoc,
        other1_bc: other1_bc,
        other1_rate: other1_rate,
        other1_prem: other1_prem,
        total_asp: total_asp,
        total_num: total_num,
        total_dtas: total_dtas,
        total_heoc: total_heoc,
        total_bc: total_bc,
        total_rate: total_rate,
        total_prem: total_prem,
        mel1: mel1,
        asp1: asp1,
        mel2: mel2,
        mel3: mel3,
        mel_bc: mel_bc,
        mel_rate: mel_rate,
        mel_prem: mel_prem,
        mel: mel,
        asp2: asp2,
        mel1ro: mel1ro,
        mel2ro: mel2ro,
        mel3ro: mel3ro,
        mel_bc2: mel_bc2,
        mel_rate2: mel_rate2,
        mel_prem2: mel_prem2,
        cll_num_ro: cll_num_ro,
        asp3: asp3,
        cll_dtas_ro: cll_dtas_ro,
        cll_heoc_ro: cll_heoc_ro,
        cll_bc: cll_bc,
        coll_rate: coll_rate,
        coll_prem: coll_prem,
        cll: cll,
        cll_asp: cll_asp,
        cll_num_ro22: cll_num_ro22,
        cll_dtas_ro22: cll_dtas_ro22,
        cll_heoc_ro22: cll_heoc_ro22,
        cll_bc22: cll_bc22,
        cll_rate22: cll_rate22,
        cll_prem222: cll_prem222,
        tfw_dtas_asp: tfw_dtas_asp,
        tfw_num_ro: tfw_num_ro,
        tfw_dtas_ro: tfw_dtas_ro,
        tfw_heoc_ro: tfw_heoc_ro,
        tfw_bc: tfw_bc,
        tfw_rate: tfw_rate,
        tfw_prem: tfw_prem,
        tfw2: tfw2,
        tfw_num_asp2: tfw_num_asp2,
        tfw_num_ro2: tfw_num_ro2,
        tfw_dtas_ro2: tfw_dtas_ro2,
        tfw_heoc_ro2: tfw_heoc_ro2,
        tfw_bc2: tfw_bc2,
        tfw_rate2: tfw_rate2,
        tfw_prem22: tfw_prem22,
        gd_dtas_asp: gd_dtas_asp,
        gd_num_ro: gd_num_ro,
        gd_dtas_ro: gd_dtas_ro,
        gd_heoc_ro: gd_heoc_ro,
        gd_bc: gd_bc,
        gd_rate: gd_rate,
        gd_prem: gd_prem,
        dp_dtas_asp: dp_dtas_asp,
        dp_num_ro: dp_num_ro,
        dp_dtas_ro: dp_dtas_ro,
        dp_heoc_ro: dp_heoc_ro,
        dp_bc: dp_bc,
        dep_rate: dep_rate,
        dep_prem: dep_prem,
        ap_num_asp: ap_num_asp,
        ap_num: ap_num,
        ap_dtas: ap_dtas,
        ap_heoc: ap_heoc,
        ap_bc: ap_bc,
        ap_rate: ap_rate,
        ap_prem: ap_prem,
        sub_num: sub_num,
        sub_num2: sub_num2,

        wc_values: wc_values

    }, function (da) {
        console.log(da);
        var da = JSON.parse(da);
        if (da.vSkySuc) {
            alert(da.vSkyNote);
        } else if (da.vSkySuc == "data") {
            alert(da.vSkyNote);
        } else {
            alert(da.vSkyNote);
        }
    });

});


////---------------------------------------------------------------------------------------------/////


/// SECTION WHERE ALL INPUT FIELD CALCUTALTIONS ARE DONE //////
///CALCULATIONS FOR  ENGINEERING - CAR &EAR QUOTATION FIELD ////////////
$(document).ready(function () {
    ///// Contract Price   
    $("#rate_cp").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_cp = $("#contract_sum_cp").val(),
            rate_cp = $("#rate_cp").val(),
            result = parseFloat(contract_sum_cp.replace(pattern, '')) * parseFloat(rate_cp.replace(pattern, '')) / 100;
        $("#premium_cp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_cp").on("blur", () => {
        var premium_cp = $("#premium_cp").val();
        $("#premium_bpm").val(premium_cp);
        $("#premium_ebp").val(premium_cp);
        $("#premium_prem").val(premium_cp);
    })
    ///// Third Party Liability 
    $("#rate_tpl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_tpl = $("#contract_sum_tpl").val(),
            rate_tpl = $("#rate_tpl").val(),
            result = parseFloat(contract_sum_tpl.replace(pattern, '')) * parseFloat(rate_tpl.replace(pattern, '')) / 100
        $("#premium_tpl").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_tpl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tpl = $("#premium_tpl").val(),
            premium_cp = $("#premium_cp").val(),
            result = parseFloat(premium_tpl.replace(pattern, '')) + parseFloat(premium_cp.replace(pattern, ''));
        $("#premium_bpm").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ////// Contractors Plant & Machinery
    $("#rate_csp").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_csp = $("#contract_sum_csp").val(),
            rate_csp = $("#rate_csp").val(),
            result = parseFloat(contract_sum_csp.replace(pattern, '')) * parseFloat(rate_csp.replace(pattern, '')) / 100;
        $("#premium_csp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_csp").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_cp = $("#premium_cp").val(),
            premium_tpl = $("#premium_tpl").val(),
            premium_csp = $("#premium_csp").val(),
            result = parseFloat(premium_cp.replace(pattern, '')) + parseFloat(premium_tpl.replace(pattern, '')) + parseFloat(premium_csp.replace(pattern, ''));
        $("#premium_bpm").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////EXTENSION
    ////// Removal Of Debris
    $("#rate_rod").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_rod = $("#contract_sum_rod").val(),
            rate_rod = $("#rate_rod").val(),
            result = parseFloat(contract_sum_rod.replace(pattern, '')) * parseFloat(rate_rod.replace(pattern, '')) / 100;
        $("#premium_rod").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_rod").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_bpm = $("#premium_bpm").val(),
            result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Malicious Damage
    $("#rate_md").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_md = $("#contract_sum_md").val(),
            rate_md = $("#rate_md").val(),
            result = parseFloat(contract_sum_md.replace(pattern, '')) * parseFloat(rate_md.replace(pattern, '')) / 100;
        $("#premium_md").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_md").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Strike, Riots and Civil Commotion
    $("#rate_src").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_src = $("#contract_sum_src").val(),
            rate_src = $("#rate_src").val(),
            result = parseFloat(contract_sum_src.replace(pattern, '')) * parseFloat(rate_src.replace(pattern, '')) / 100
        $("#premium_src").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_src").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Cross Liability
    $("#rate_cl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_cl = $("#contract_sum_cl").val(),
            rate_cl = $("#rate_cl").val(),
            result = parseFloat(contract_sum_cl.replace(pattern, '')) * parseFloat(rate_cl.replace(pattern, '')) / 100
        $("#premium_cl").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_cl").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// 72 Hour Clause
    $("#rate_72hc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_72hc = $("#contract_sum_72hc").val(),
            rate_72hc = $("#rate_72hc").val(),
            result = parseFloat(contract_sum_72hc.replace(pattern, '')) * parseFloat(rate_72hc.replace(pattern, '')) / 100
        $("#premium_72hc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_72hc").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Professional Fees
    $("#rate_pf").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_pf = $("#contract_sum_pf").val(),
            rate_pf = $("#rate_pf").val(),
            result = parseFloat(contract_sum_pf.replace(pattern, '')) * parseFloat(rate_pf.replace(pattern, '')) / 100
        $("#premium_pf").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_pf").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Extended Maintenance Cover
    $("#rate_emc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_emc = $("#contract_sum_emc").val(),
            rate_emc = $("#rate_emc").val(),
            result = parseFloat(contract_sum_emc.replace(pattern, '')) * parseFloat(rate_emc.replace(pattern, '')) / 100;
        $("#premium_emc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_emc").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Surrounding Property
    $("#rate_spy").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_spy = $("#contract_sum_spy").val(),
            rate_spy = $("#rate_spy").val(),
            result = parseFloat(contract_sum_spy.replace(pattern, '')) * parseFloat(rate_spy.replace(pattern, '')) / 100;
        $("#premium_spy").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_spy").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Automatic Increase - Sum Insured (20%)
    $("#rate_aisi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_aisi = $("#contract_sum_aisi").val(),
            rate_aisi = $("#rate_aisi").val(),
            result = parseFloat(contract_sum_aisi.replace(pattern, '')) * parseFloat(rate_aisi.replace(pattern, '')) / 100;
        $("#premium_aisi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_aisi").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Reinstatement Value
    $("#rate_rv").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_rv = $("#contract_sum_rv").val(),
            rate_rv = $("#rate_rv").val(),
            result = parseFloat(contract_sum_rv.replace(pattern, '')) * parseFloat(rate_rv.replace(pattern, '')) / 100;
        $("#premium_rv").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_rv").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Automatic Reinstatement of Sum Insured
    $("#rate_arsi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_arsi = $("#contract_sum_arsi").val(),
            rate_arsi = $("#rate_arsi").val(),
            result = parseFloat(contract_sum_arsi.replace(pattern, '')) * parseFloat(rate_arsi.replace(pattern, '')) / 100;
        $("#premium_arsi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_arsi").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Marine 50/50
    $("#rate_m50").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_m50 = $("#contract_sum_m50").val(),
            rate_m50 = $("#rate_m50").val(),
            result = parseFloat(contract_sum_m50.replace(pattern, '')) * parseFloat(rate_m50.replace(pattern, '')) / 100;
        $("#premium_m50").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_m50").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Public Autorities
    $("#rate_pa").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_pa = $("#contract_sum_pa").val(),
            rate_pa = $("#rate_pa").val(),
            result = parseFloat(contract_sum_pa.replace(pattern, '')) * parseFloat(rate_pa.replace(pattern, '')) / 100;
        $("#premium_pa").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_pa").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Claims Preparation Clause
    $("#rate_cpc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_cpc = $("#contract_sum_cpc").val(),
            rate_cpc = $("#rate_cpc").val(),
            result = parseFloat(contract_sum_cpc.replace(pattern, '')) * parseFloat(rate_cpc.replace(pattern, '')) / 100;
        $("#premium_cpc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_cpc").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Underground Cables & Pipes
    $("#rate_ucp").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_ucp = $("#contract_sum_ucp").val(),
            rate_ucp = $("#rate_ucp").val(),
            result = parseFloat(contract_sum_ucp.replace(pattern, '')) * parseFloat(rate_ucp.replace(pattern, '')) / 100;
        $("#premium_ucp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_ucp").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Waiver of Subrogation
    $("#rate_wos").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_wos = $("#contract_sum_wos").val(),
            rate_wos = $("#rate_wos").val(),
            result = parseFloat(contract_sum_wos.replace(pattern, '')) * parseFloat(rate_wos.replace(pattern, '')) / 100;
        $("#premium_wos").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_wos").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ////// Plans & Documents Clause
    $("#rate_pdc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_pdc = $("#contract_sum_pdc").val(),
            rate_pdc = $("#rate_pdc").val(),
            result = parseFloat(contract_sum_pdc.replace(pattern, '')) * (rate_pdc.replace(pattern, '')) / 100;
        $("#premium_pdc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_pdc").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Material on Site Extension Clause
    $("#rate_msec").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_msec = $("#contract_sum_msec").val(),
            rate_msec = $("#rate_msec").val(),
            result = parseFloat(contract_sum_msec.replace(pattern, '')) * parseFloat(rate_msec.replace(pattern, '')) / 100;
        $("#premium_msec").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_msec").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ////// Extra Charges for Overtime, Night Work etc
    $("#rate_eco").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_eco = $("#contract_sum_eco").val(),
            rate_eco = $("#rate_eco").val(),
            result = parseFloat(contract_sum_eco.replace(pattern, '')) * parseFloat(rate_eco.replace(pattern, '')) / 100;
        $("#premium_eco").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_eco").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Extra Charges for Airfreight
    $("#rate_ecfa").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_ecfa = $("#contract_sum_ecfa").val(),
            rate_ecfa = $("#rate_ecfa").val(),
            result = parseFloat(contract_sum_ecfa.replace(pattern, '')) * parseFloat(rate_ecfa.replace(pattern, '')) / 100;
        $("#premium_ecfa").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_ecfa").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Property in Off Site Storage
    $("#rate_poss").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_poss = $("#contract_sum_poss").val(),
            rate_poss = $("#rate_poss").val(),
            result = parseFloat(contract_sum_poss.replace(pattern, '')) * parseFloat(rate_poss.replace(pattern, '')) / 100;
        $("#premium_poss").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_poss").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ////// Existing / Surrounding Property
    $("#rate_esp").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_esp = $("#contract_sum_esp").val(),
            rate_esp = $("#rate_esp").val(),
            result = parseFloat(contract_sum_esp.replace(pattern, '')) * parseFloat(rate_esp.replace(pattern, '')) / 100;
        $("#premium_esp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_esp").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Maintenance Visit
    $("#rate_wcc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_wcc = $("#contract_sum_wcc").val(),
            rate_wcc = $("#rate_wcc").val(),
            result = parseFloat(contract_sum_wcc.replace(pattern, '')) * parseFloat(rate_wcc.replace(pattern, '')) / 100;
        $("#premium_wcc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#premium_wcc").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Inland Transit
    $("#rate_it").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_it = $("#contract_sum_it").val(),
            rate_it = $("#rate_it").val(),
            result = parseFloat(contract_sum_it.replace(pattern, '')) * (rate_it.replace(pattern, '')) / 100;
        $("#premium_it").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_it").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Existing Property of Principal
    $("#rate_epp").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_epp = $("#contract_sum_epp").val(),
            rate_epp = $("#rate_epp").val(),
            result = parseFloat(contract_sum_epp.replace(pattern, '')) * parseFloat(rate_epp.replace(pattern, '')) / 100;
        $("#premium_epp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_epp").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Vibration, Removal or Weakening of Support
    $("#rate_vrws").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_vrws = $("#contract_sum_vrws").val(),
            rate_vrws = $("#rate_vrws").val(),
            result = parseFloat(contract_sum_vrws.replace(pattern, '')) * parseFloat(rate_vrws.replace(pattern, '')) / 100;
        $("#premium_vrws").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_vrws").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_vrws = $("#premium_vrws").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_vrws.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////ENDORSEMENT
    ////// First Row
    $("#others_one_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var others_one_sum = $("#others_one_sum").val(),
            others_one_rate = $("#others_one_rate").val(),
            result = parseFloat(others_one_sum.replace(pattern, '')) * parseFloat(others_one_rate.replace(pattern, '')) / 100;
        $("#others_one_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#others_one_rate").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_vrws = $("#premium_vrws").val(),
            others_one_prem = $("#others_one_prem").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_vrws.replace(pattern, '')) + parseFloat(others_one_prem.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ////// Second Row
    $("#others_two_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var others_two_sum = $("#others_two_sum").val(),
            others_two_rate = $("#others_two_rate").val(),
            result = parseFloat(others_two_sum.replace(pattern, '')) * parseFloat(others_two_rate.replace(pattern, '')) / 100;
        $("#others_two_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#others_two_rate").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_vrws = $("#premium_vrws").val(),
            others_one_prem = $("#others_one_prem").val(),
            others_two_prem = $("#others_two_prem").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_vrws.replace(pattern, '')) + parseFloat(others_one_prem.replace(pattern, '')) + parseFloat(others_two_prem.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ////// Third Row
    $("#others_three_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var others_three_sum = $("#others_three_sum").val(),
            others_three_rate = $("#others_three_rate").val(),
            result = parseFloat(others_three_sum.replace(pattern, '')) * parseFloat(others_three_rate.replace(pattern, '')) / 100;
        $("#others_three_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#others_three_rate").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_vrws = $("#premium_vrws").val(),
            others_one_prem = $("#others_one_prem").val(),
            others_two_prem = $("#others_two_prem").val(),
            others_three_prem = $("#others_three_prem").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_vrws.replace(pattern, '')) + parseFloat(others_one_prem.replace(pattern, '')) + parseFloat(others_two_prem.replace(pattern, '')) + parseFloat(others_three_prem.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ////// Forth Row
    $("#others_four_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var others_four_sum = $("#others_four_sum").val(),
            others_four_rate = $("#others_four_rate").val(),
            result = parseFloat(others_four_sum.replace(pattern, '')) * parseFloat(others_four_rate.replace(pattern, '')) / 100;
        $("#others_four_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#others_four_rate").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_vrws = $("#premium_vrws").val(),
            others_one_prem = $("#others_one_prem").val(),
            others_two_prem = $("#others_two_prem").val(),
            others_three_prem = $("#others_three_prem").val(),
            others_four_prem = $("#others_four_prem").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_vrws.replace(pattern, '')) + parseFloat(others_one_prem.replace(pattern, '')) + parseFloat(others_two_prem.replace(pattern, '')) + parseFloat(others_three_prem.replace(pattern, '')) + parseFloat(others_four_prem.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ////// Fifth Row
    $("#others_five_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var others_five_sum = $("#others_five_sum").val(),
            others_five_rate = $("#others_five_rate").val(),
            result = parseFloat(others_five_sum.replace(pattern, '')) * parseFloat(others_five_rate.replace(pattern, '')) / 100;
        $("#others_five_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#others_five_rate").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var premium_rod = $("#premium_rod").val(),
            premium_md = $("#premium_md").val(),
            premium_src = $("#premium_src").val(),
            premium_cl = $("#premium_cl").val(),
            premium_72hc = $("#premium_72hc").val(),
            premium_pf = $("#premium_pf").val(),
            premium_emc = $("#premium_emc").val(),
            premium_spy = $("#premium_spy").val(),
            premium_aisi = $("#premium_aisi").val(),
            premium_rv = $("#premium_rv").val(),
            premium_arsi = $("#premium_arsi").val(),
            premium_m50 = $("#premium_m50").val(),
            premium_pa = $("#premium_pa").val(),
            premium_cpc = $("#premium_cpc").val(),
            premium_ucp = $("#premium_ucp").val(),
            premium_wos = $("#premium_wos").val(),
            premium_pdc = $("#premium_pdc").val(),
            premium_msec = $("#premium_msec").val(),
            premium_eco = $("#premium_eco").val(),
            premium_ecfa = $("#premium_ecfa").val(),
            premium_poss = $("#premium_poss").val(),
            premium_esp = $("#premium_esp").val(),
            premium_wcc = $("#premium_wcc").val(),
            premium_it = $("#premium_it").val(),
            premium_epp = $("#premium_epp").val(),
            premium_vrws = $("#premium_vrws").val(),
            others_one_prem = $("#others_one_prem").val(),
            others_two_prem = $("#others_two_prem").val(),
            others_three_prem = $("#others_three_prem").val(),
            others_four_prem = $("#others_four_prem").val(),
            others_five_prem = $("#others_five_prem").val(),
            premium_bpm = $("#premium_bpm").val();
        var result = parseFloat(premium_rod.replace(pattern, '')) + parseFloat(premium_md.replace(pattern, '')) + parseFloat(premium_src.replace(pattern, '')) + parseFloat(premium_cl.replace(pattern, '')) + parseFloat(premium_72hc.replace(pattern, '')) + parseFloat(premium_pf.replace(pattern, '')) + parseFloat(premium_emc.replace(pattern, '')) + parseFloat(premium_spy.replace(pattern, '')) + parseFloat(premium_aisi.replace(pattern, '')) + parseFloat(premium_rv.replace(pattern, '')) + parseFloat(premium_arsi.replace(pattern, '')) + parseFloat(premium_m50.replace(pattern, '')) + parseFloat(premium_pa.replace(pattern, '')) + parseFloat(premium_cpc.replace(pattern, '')) + parseFloat(premium_ucp.replace(pattern, '')) + parseFloat(premium_wos.replace(pattern, '')) + parseFloat(premium_pdc.replace(pattern, '')) + parseFloat(premium_msec.replace(pattern, '')) + parseFloat(premium_eco.replace(pattern, '')) + parseFloat(premium_ecfa.replace(pattern, '')) + parseFloat(premium_poss.replace(pattern, '')) + parseFloat(premium_esp.replace(pattern, '')) + parseFloat(premium_wcc.replace(pattern, '')) + parseFloat(premium_it.replace(pattern, '')) + parseFloat(premium_epp.replace(pattern, '')) + parseFloat(premium_vrws.replace(pattern, '')) + parseFloat(others_one_prem.replace(pattern, '')) + parseFloat(others_two_prem.replace(pattern, '')) + parseFloat(others_three_prem.replace(pattern, '')) + parseFloat(others_four_prem.replace(pattern, '')) + parseFloat(others_five_prem.replace(pattern, '')) + parseFloat(premium_bpm.replace(pattern, ''));
        $("#premium_ebp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    //$("#calc_eng_ce").on("click", () => {
    //    var result = 0;
    //    var premium_cp = $("#premium_cp").val(),
    //        premium_tpl = $("#premium_tpl").val(),
    //        premium_csp = $("#premium_csp").val(),
    //        premium_bpm = $("#premium_bpm").val(),
    //        premium_rod = $("#premium_rod").val(),
    //        premium_md = $("#premium_md").val(),
    //        premium_src = $("#premium_src").val(),
    //        premium_cl = $("#premium_cl").val(),
    //        premium_72hc = $("#premium_72hc").val(),
    //        premium_pf = $("#premium_pf").val(),
    //        premium_emc = $("#premium_emc").val(),
    //        premium_spy = $("#premium_spy").val(),
    //        premium_aisi = $("#premium_aisi").val(),
    //        premium_rv = $("#premium_rv").val(),
    //        premium_arsi = $("#premium_arsi").val(),
    //        premium_m50 = $("#premium_m50").val(),
    //        premium_pa = $("#premium_pa").val(),
    //        premium_cpc = $("#premium_cpc").val(),
    //        premium_ucp = $("#premium_ucp").val(),
    //        premium_wos = $("#premium_wos").val(),
    //        premium_pdc = $("#premium_pdc").val(),
    //        premium_msec = $("#premium_msec").val(),
    //        premium_eco = $("#premium_eco").val(),
    //        premium_ecfa = $("#premium_ecfa").val(),
    //        premium_poss = $("#premium_poss").val(),
    //        premium_esp = $("#premium_esp").val(),
    //        premium_wcc = $("#premium_wcc").val(),
    //        premium_it = $("#premium_it").val(),
    //        premium_epp = $("#premium_epp").val(),
    //        premium_vrws = $("#premium_vrws").val(),
    //        result = parseFloat(premium_cp)+parseFloat(premium_tpl)+parseFloat(premium_csp)+parseFloat(premium_bpm)+parseFloat(premium_rod)+parseFloat(premium_md)+parseFloat(premium_src)+parseFloat(premium_cl)+parseFloat(premium_72hc)+parseFloat(premium_pf)+parseFloat(premium_emc)+parseFloat(premium_spy)+parseFloat(premium_aisi)+parseFloat(premium_rv)+parseFloat(premium_arsi)+parseFloat(premium_m50)+parseFloat(premium_pa)+parseFloat(premium_cpc)+parseFloat(premium_ucp)+parseFloat(premium_wos)+parseFloat(premium_pdc)+parseFloat(premium_msec)+parseFloat(premium_eco)+parseFloat(premium_ecfa)+parseFloat(premium_poss)+parseFloat(premium_esp)+parseFloat(premium_wcc)+parseFloat(premium_it)+parseFloat(premium_epp)+parseFloat(premium_vrws);
    //    
    //    $("#premium_ebp").val(result);
    //})

    ///// Levy PREMIUM    
    $("#contract_sum_levy").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var contract_sum_levy = $("#contract_sum_levy").val(),
            premium_ebp = $("#premium_ebp").val(),
            result = (parseFloat(premium_ebp.replace(pattern, '')) * parseFloat(contract_sum_levy.replace(pattern, ''))) / 100;
        $("#premium_levy").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Final Premium Calculations
    $("#contract_sum_levy").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_ebp = $("#premium_ebp").val(),
            premium_levy = $("#premium_levy").val(),
            premium_cert = $("#premium_cert").val(),
            result = parseFloat(premium_ebp.replace(pattern, '')) + parseFloat(premium_levy.replace(pattern, '')) + parseFloat(premium_cert.replace(pattern, ''));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Summing Certificate value with Premium
    $("#premium_cert").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_prem = $("#premium_prem").val(),
            premium_cert = $("#premium_cert").val(),
            result = parseFloat(premium_prem.replace(pattern, '')) + parseFloat(premium_cert.replace(pattern, ''));
        $("#premium_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

});


///CALCULATIONS FOR ENG - PLANT & MACHINERY QUOTATION ////////////
$(document).ready(function () {
    ////
    $("#rate_tsi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var new_replacement_value_tsi = $("#new_replacement_value_tsi").val(),
            rate_tsi = $("#rate_tsi").val(),
            result = (parseFloat(new_replacement_value_tsi.replace(pattern, '')) * parseFloat(rate_tsi.replace(pattern, ''))) / 100;
        $("#premium_tsi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_tsi").on("blur", () => {
        var premium_tsi = $("#premium_tsi").val();
        $("#ap_premium").val(premium_tsi);
    })
    ///// Others
    $("#other_rate_pm").on("blur", () => {
        var res = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pm = $("#other_nrv_pm").val(),
            other_rate_pm = $("#other_rate_pm").val(),
            res = (parseFloat(other_nrv_pm.replace(pattern, '')) * parseFloat(other_rate_pm.replace(pattern, ''))) / 100;
        $("#other_prem_pm").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pm").on("blur", () => {
        var ores = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi = $("#premium_tsi").val(),
            other_prem_pm = $("#other_prem_pm").val(),
            ores = (parseFloat(premium_tsi.replace(pattern, '')) + parseFloat(other_prem_pm.replace(pattern, '')));
        $("#ap_premium").val(ores.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 1
    $("#other_rate_pm1").on("blur", () => {
        var res1 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pm1 = $("#other_nrv_pm1").val(),
            other_rate_pm1 = $("#other_rate_pm1").val(),
            res1 = (parseFloat(other_nrv_pm1.replace(pattern, '')) * parseFloat(other_rate_pm1.replace(pattern, ''))) / 100;
        $("#other_prem_pm1").val(res1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pm1").on("blur", () => {
        var ores1 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi = $("#premium_tsi").val(),
            other_prem_pm = $("#other_prem_pm").val(),
            other_prem_pm1 = $("#other_prem_pm1").val(),
            ores1 = (parseFloat(premium_tsi.replace(pattern, '')) + parseFloat(other_prem_pm.replace(pattern, '')) + parseFloat(other_prem_pm1.replace(pattern, '')));
        $("#ap_premium").val(ores1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 2
    $("#other_rate_pm2").on("blur", () => {
        var res2 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pm2 = $("#other_nrv_pm2").val(),
            other_rate_pm2 = $("#other_rate_pm2").val(),
            res2 = (parseFloat(other_nrv_pm2.replace(pattern, '')) * parseFloat(other_rate_pm2.replace(pattern, ''))) / 100;
        $("#other_prem_pm2").val(res2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pm2").on("blur", () => {
        var ores2 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi = $("#premium_tsi").val(),
            other_prem_pm = $("#other_prem_pm").val(),
            other_prem_pm1 = $("#other_prem_pm1").val(),
            other_prem_pm2 = $("#other_prem_pm2").val(),
            ores2 = (parseFloat(premium_tsi.replace(pattern, '')) + parseFloat(other_prem_pm.replace(pattern, '')) + parseFloat(other_prem_pm1.replace(pattern, '')) + parseFloat(other_prem_pm2.replace(pattern, '')));
        $("#ap_premium").val(ores2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 3
    $("#other_rate_pm3").on("blur", () => {
        var res3 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pm3 = $("#other_nrv_pm3").val(),
            other_rate_pm3 = $("#other_rate_pm3").val(),
            res3 = (parseFloat(other_nrv_pm3.replace(pattern, '')) * parseFloat(other_rate_pm3.replace(pattern, ''))) / 100;
        $("#other_prem_pm3").val(res3.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pm3").on("blur", () => {
        var ores3 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi = $("#premium_tsi").val(),
            other_prem_pm = $("#other_prem_pm").val(),
            other_prem_pm1 = $("#other_prem_pm1").val(),
            other_prem_pm2 = $("#other_prem_pm2").val(),
            other_prem_pm3 = $("#other_prem_pm3").val(),
            ores3 = (parseFloat(premium_tsi.replace(pattern, '')) + parseFloat(other_prem_pm.replace(pattern, '')) + parseFloat(other_prem_pm1.replace(pattern, '')) + parseFloat(other_prem_pm2.replace(pattern, '')) + parseFloat(other_prem_pm3.replace(pattern, '')));
        $("#ap_premium").val(ores3.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 4
    $("#other_rate_pm4").on("blur", () => {
        var res4 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pm4 = $("#other_nrv_pm4").val(),
            other_rate_pm4 = $("#other_rate_pm4").val(),
            res4 = (parseFloat(other_nrv_pm4.replace(pattern, '')) * parseFloat(other_rate_pm4.replace(pattern, ''))) / 100;
        $("#other_prem_pm4").val(res4.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pm4").on("blur", () => {
        var ores4 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi = $("#premium_tsi").val(),
            other_prem_pm = $("#other_prem_pm").val(),
            other_prem_pm1 = $("#other_prem_pm1").val(),
            other_prem_pm2 = $("#other_prem_pm2").val(),
            other_prem_pm3 = $("#other_prem_pm3").val(),
            other_prem_pm4 = $("#other_prem_pm4").val(),
            ores4 = (parseFloat(premium_tsi.replace(pattern, '')) + parseFloat(other_prem_pm.replace(pattern, '')) + parseFloat(other_prem_pm1.replace(pattern, '')) + parseFloat(other_prem_pm2.replace(pattern, '')) + parseFloat(other_prem_pm3.replace(pattern, '')) + parseFloat(other_prem_pm4.replace(pattern, '')));
        $("#ap_premium").val(ores4.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// PLANT & MACHINERY (INDEMNITY)///////////////////
    $("#rate_mv_tsi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var market_value_tsi = $("#market_value_tsi").val(),
            rate_mv_tsi = $("#rate_mv_tsi").val(),
            result = (parseFloat(market_value_tsi.replace(pattern, '')) * parseFloat(rate_mv_tsi.replace(pattern, '')) / 100);
        $("#premium_mv_tsi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_mv_tsi").on("blur", () => {
        var premium_mv_tsi = $("#premium_mv_tsi").val();
        $("#ap_premium_mv").val(premium_mv_tsi);
    })

    ///// Others
    $("#other_rate_pmi").on("blur", () => {
        var reslt = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pmi = $("#other_nrv_pmi").val(),
            other_rate_pmi = $("#other_rate_pmi").val(),
            reslt = (parseFloat(other_nrv_pmi.replace(pattern, '')) * parseFloat(other_rate_pmi.replace(pattern, ''))) / 100;
        $("#other_prem_pmi").val(reslt.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pmi").on("blur", () => {
        var oreslt = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_mv_tsi = $("#premium_mv_tsi").val(),
            other_prem_pmi = $("#other_prem_pmi").val(),
            oreslt = (parseFloat(premium_mv_tsi.replace(pattern, '')) + parseFloat(other_prem_pmi.replace(pattern, '')));
        $("#ap_premium_mv").val(oreslt.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 1
    $("#other_rate_pmi1").on("blur", () => {
        var reslt1 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pmi1 = $("#other_nrv_pmi1").val(),
            other_rate_pmi1 = $("#other_rate_pmi1").val(),
            reslt1 = (parseFloat(other_nrv_pmi1.replace(pattern, '')) * parseFloat(other_rate_pmi1.replace(pattern, ''))) / 100;
        $("#other_prem_pmi1").val(reslt1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pmi1").on("blur", () => {
        var oreslt1 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_mv_tsi = $("#premium_mv_tsi").val(),
            other_prem_pmi = $("#other_prem_pmi").val(),
            other_prem_pmi1 = $("#other_prem_pmi1").val(),
            oreslt1 = (parseFloat(premium_mv_tsi.replace(pattern, '')) + parseFloat(other_prem_pmi.replace(pattern, '')) + parseFloat(other_prem_pmi1.replace(pattern, '')));
        $("#ap_premium_mv").val(oreslt1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 2
    $("#other_rate_pmi2").on("blur", () => {
        var reslt2 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pmi2 = $("#other_nrv_pmi2").val(),
            other_rate_pmi2 = $("#other_rate_pmi2").val(),
            reslt2 = (parseFloat(other_nrv_pmi2.replace(pattern, '')) * parseFloat(other_rate_pmi2.replace(pattern, ''))) / 100;
        $("#other_prem_pmi2").val(reslt2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pmi2").on("blur", () => {
        var oreslt2 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_mv_tsi = $("#premium_mv_tsi").val(),
            other_prem_pmi = $("#other_prem_pmi").val(),
            other_prem_pmi1 = $("#other_prem_pmi1").val(),
            other_prem_pmi2 = $("#other_prem_pmi2").val(),
            oreslt2 = (parseFloat(premium_mv_tsi.replace(pattern, '')) + parseFloat(other_prem_pmi.replace(pattern, '')) + parseFloat(other_prem_pmi1.replace(pattern, '')) + parseFloat(other_prem_pmi2.replace(pattern, '')));
        $("#ap_premium_mv").val(oreslt2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 3
    $("#other_rate_pmi3").on("blur", () => {
        var reslt3 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pmi3 = $("#other_nrv_pmi3").val(),
            other_rate_pmi3 = $("#other_rate_pmi3").val(),
            reslt3 = (parseFloat(other_nrv_pmi3.replace(pattern, '')) * parseFloat(other_rate_pmi3.replace(pattern, ''))) / 100;
        $("#other_prem_pmi3").val(reslt3.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pmi3").on("blur", () => {
        var oreslt3 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_mv_tsi = $("#premium_mv_tsi").val(),
            other_prem_pmi = $("#other_prem_pmi").val(),
            other_prem_pmi1 = $("#other_prem_pmi1").val(),
            other_prem_pmi2 = $("#other_prem_pmi2").val(),
            other_prem_pmi3 = $("#other_prem_pmi3").val(),
            oreslt3 = (parseFloat(premium_mv_tsi.replace(pattern, '')) + parseFloat(other_prem_pmi.replace(pattern, '')) + parseFloat(other_prem_pmi1.replace(pattern, '')) + parseFloat(other_prem_pmi2.replace(pattern, '')) + parseFloat(other_prem_pmi3.replace(pattern, '')));
        $("#ap_premium_mv").val(oreslt3.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 4
    $("#other_rate_pmi4").on("blur", () => {
        var reslt4 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_pmi4 = $("#other_nrv_pmi4").val(),
            other_rate_pmi4 = $("#other_rate_pmi4").val(),
            reslt4 = (parseFloat(other_nrv_pmi4.replace(pattern, '')) * parseFloat(other_rate_pmi4.replace(pattern, ''))) / 100;
        $("#other_prem_pmi4").val(reslt4.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_pmi4").on("blur", () => {
        var oreslt4 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_mv_tsi = $("#premium_mv_tsi").val(),
            other_prem_pmi = $("#other_prem_pmi").val(),
            other_prem_pmi1 = $("#other_prem_pmi1").val(),
            other_prem_pmi2 = $("#other_prem_pmi2").val(),
            other_prem_pmi3 = $("#other_prem_pmi3").val(),
            other_prem_pmi4 = $("#other_prem_pmi4").val(),
            oreslt4 = (parseFloat(premium_mv_tsi.replace(pattern, '')) + parseFloat(other_prem_pmi.replace(pattern, '')) + parseFloat(other_prem_pmi1.replace(pattern, '')) + parseFloat(other_prem_pmi2.replace(pattern, '')) + parseFloat(other_prem_pmi3.replace(pattern, '')) + parseFloat(other_prem_pmi4.replace(pattern, '')));
        $("#ap_premium_mv").val(oreslt4.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
});


////CALCULATIONS FOR ENG - MACHINERY BREAKDOWN QUOTATION FIELD
$(document).ready(function () {

    ///// Total Sum Insured    
    $("#new_replacement_value_tsi2, #rate_tsi2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var new_replacement_value_tsi2 = $("#new_replacement_value_tsi2").val(),
            rate_tsi2 = $("#rate_tsi2").val(),
            result = (parseFloat(new_replacement_value_tsi2.replace(pattern, '')) * parseFloat(rate_tsi2.replace(pattern, '')) / 100);
        $("#premium_tsi2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#new_replacement_value_tsi2, #rate_tsi2").on("blur", () => {
        var premium_tsi2 = $("#premium_tsi2").val();
        $("#premium_engo_ap").val(premium_tsi2);
    })
    ///// Strikes, Riot and Civil Commotion
    $("#nrv_srcc, #rate_srcc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_srcc = $("#nrv_srcc").val(),
            rate_srcc = $("#rate_srcc").val(),
            result = (parseFloat(nrv_srcc.replace(pattern, '')) * parseFloat(rate_srcc.replace(pattern, '')) / 100);
        $("#premium_srcc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#nrv_srcc, #rate_srcc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            result = (parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')));
        $("#premium_engo_ap").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Overtime, Night Work & Express Freight
    $("#nrv_oef, #rate_oef").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_oef = $("#nrv_oef").val(),
            rate_oef = $("#rate_oef").val(),
            result = (parseFloat(nrv_oef.replace(pattern, '')) * parseFloat(rate_oef.replace(pattern, '')) / 100);
        $("#premium_oef").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_oef").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            result = (parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')));
        $("#premium_engo_ap").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Airfreight
    $("#rate_airfreight").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_airfreight = $("#nrv_airfreight").val(),
            rate_airfreight = $("#rate_airfreight").val(),
            result = (parseFloat(nrv_airfreight.replace(pattern, '')) * parseFloat(rate_airfreight.replace(pattern, '')) / 100);
        $("#premium_airfreight").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_airfreight").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            result = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, ''));
        $("#premium_engo_ap").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Surrounding Property & Third Party Liability
    $("#rate_sptpl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_sptpl = $("#nrv_sptpl").val(),
            rate_sptpl = $("#rate_sptpl").val(),
            result = (parseFloat(nrv_sptpl.replace(pattern, '')) * parseFloat(rate_sptpl.replace(pattern, '')) / 100);
        $("#premium_sptpl").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_sptpl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            premium_sptpl = $("#premium_sptpl").val(),
            result = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, '')) + parseFloat(premium_sptpl.replace(pattern, ''));
        $("#premium_engo_ap").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 
    $("#other_rate_mb").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_mb = $("#other_nrv_mb").val(),
            other_rate_mb = $("#other_rate_mb").val(),
            result = (parseFloat(other_nrv_mb.replace(pattern, '')) * parseFloat(other_rate_mb.replace(pattern, '')) / 100);
        $("#other_prem_mb").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_mb").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            premium_sptpl = $("#premium_sptpl").val(),
            other_prem_mb = $("#other_prem_mb").val(),
            result = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, '')) + parseFloat(premium_sptpl.replace(pattern, '')) + parseFloat(other_prem_mb.replace(pattern, ''));
        $("#premium_engo_ap").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 1
    $("#other_rate_mb1").on("blur", () => {
        var result1 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_mb1 = $("#other_nrv_mb1").val(),
            other_rate_mb1 = $("#other_rate_mb1").val(),
            result1 = (parseFloat(other_nrv_mb1.replace(pattern, '')) * parseFloat(other_rate_mb1.replace(pattern, '')) / 100);
        $("#other_prem_mb1").val(result1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_mb1").on("blur", () => {
        var result1 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            premium_sptpl = $("#premium_sptpl").val(),
            other_prem_mb = $("#other_prem_mb").val(),
            other_prem_mb1 = $("#other_prem_mb1").val(),
            result1 = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, '')) + parseFloat(premium_sptpl.replace(pattern, '')) + parseFloat(other_prem_mb.replace(pattern, '')) + parseFloat(other_prem_mb1.replace(pattern, ''));
        $("#premium_engo_ap").val(result1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 2
    $("#other_rate_mb2").on("blur", () => {
        var result1 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_mb2 = $("#other_nrv_mb2").val(),
            other_rate_mb2 = $("#other_rate_mb2").val(),
            result1 = (parseFloat(other_nrv_mb2.replace(pattern, '')) * parseFloat(other_rate_mb2.replace(pattern, '')) / 100);
        $("#other_prem_mb2").val(result1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_mb2").on("blur", () => {
        var result2 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            premium_sptpl = $("#premium_sptpl").val(),
            other_prem_mb = $("#other_prem_mb").val(),
            other_prem_mb1 = $("#other_prem_mb1").val(),
            other_prem_mb2 = $("#other_prem_mb2").val(),
            result2 = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, '')) + parseFloat(premium_sptpl.replace(pattern, '')) + parseFloat(other_prem_mb.replace(pattern, '')) + parseFloat(other_prem_mb1.replace(pattern, '')) + parseFloat(other_prem_mb2.replace(pattern, ''));
        $("#premium_engo_ap").val(result2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 3
    $("#other_rate_mb3").on("blur", () => {
        var result3 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_mb3 = $("#other_nrv_mb3").val(),
            other_rate_mb3 = $("#other_rate_mb3").val(),
            result3 = (parseFloat(other_nrv_mb3.replace(pattern, '')) * parseFloat(other_rate_mb3.replace(pattern, '')) / 100);
        $("#other_prem_mb3").val(result3.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_mb3").on("blur", () => {
        var result3 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            premium_sptpl = $("#premium_sptpl").val(),
            other_prem_mb = $("#other_prem_mb").val(),
            other_prem_mb1 = $("#other_prem_mb1").val(),
            other_prem_mb2 = $("#other_prem_mb2").val(),
            other_prem_mb3 = $("#other_prem_mb3").val(),
            result3 = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, '')) + parseFloat(premium_sptpl.replace(pattern, '')) + parseFloat(other_prem_mb.replace(pattern, '')) + parseFloat(other_prem_mb1.replace(pattern, '')) + parseFloat(other_prem_mb2.replace(pattern, '')) + parseFloat(other_prem_mb3.replace(pattern, ''));
        $("#premium_engo_ap").val(result3.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 4
    $("#other_rate_mb4").on("blur", () => {
        var result4 = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_mb4 = $("#other_nrv_mb4").val(),
            other_rate_mb4 = $("#other_rate_mb4").val(),
            result4 = (parseFloat(other_nrv_mb4.replace(pattern, '')) * parseFloat(other_rate_mb4.replace(pattern, '')) / 100);
        $("#other_prem_mb4").val(result4.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_mb4").on("blur", () => {
        var result4 = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi2 = $("#premium_tsi2").val(),
            premium_srcc = $("#premium_srcc").val(),
            premium_oef = $("#premium_oef").val(),
            premium_airfreight = $("#premium_airfreight").val(),
            premium_sptpl = $("#premium_sptpl").val(),
            other_prem_mb = $("#other_prem_mb").val(),
            other_prem_mb1 = $("#other_prem_mb1").val(),
            other_prem_mb2 = $("#other_prem_mb2").val(),
            other_prem_mb3 = $("#other_prem_mb3").val(),
            other_prem_mb4 = $("#other_prem_mb4").val(),
            result4 = parseFloat(premium_tsi2.replace(pattern, '')) + parseFloat(premium_srcc.replace(pattern, '')) + parseFloat(premium_oef.replace(pattern, '')) + parseFloat(premium_airfreight.replace(pattern, '')) + parseFloat(premium_sptpl.replace(pattern, '')) + parseFloat(other_prem_mb.replace(pattern, '')) + parseFloat(other_prem_mb1.replace(pattern, '')) + parseFloat(other_prem_mb2.replace(pattern, '')) + parseFloat(other_prem_mb3.replace(pattern, '')) + parseFloat(other_prem_mb4.replace(pattern, ''));
        $("#premium_engo_ap").val(result4.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })


    //    $("#calcbtn_mb").on("click", () => {
    //        var result = 0;
    //
    //        var premium_tsi2 = $("#premium_tsi2").val(),
    //            premium_srcc = $("#premium_srcc").val(),
    //            premium_oef = $("#premium_oef").val(),
    //            premium_airfreight = $("#premium_airfreight").val(),
    //            premium_sptpl = $("#premium_sptpl").val(),
    //            result = parseFloat(premium_tsi2) + parseFloat(premium_srcc) + parseFloat(premium_oef) + parseFloat(premium_airfreight) + parseFloat(premium_sptpl);
    //        $("#premium_engo_ap").val(result);
    //    })
});


////CALCULATIONS FOR ENG - ELECTRONIC EQUIPMENT QUOTATION FIELD ////////
$(document).ready(function () {

    /////  Total Sum Insured   
    $("#rate_tsi_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_tsi_eo = $("#nrv_tsi_eo").val(),
            rate_tsi_eo = $("#rate_tsi_eo").val(),
            result = (parseFloat(nrv_tsi_eo.replace(pattern, '')) * parseFloat(rate_tsi_eo.replace(pattern, '')) / 100);
        $("#premium_tsi_eo").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_tsi_eo").on("blur", () => {
        var premium_tsi_eo = $("#premium_tsi_eo").val();
        $("#premium_engo_ap2").val(premium_tsi_eo);
    })
    ///// Strikes, Riot and Civil Commotion
    $("#rate_srcc_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_srcc_eo = $("#nrv_srcc_eo").val(),
            rate_srcc_eo = $("#rate_srcc_eo").val(),
            result = (parseFloat(nrv_srcc_eo.replace(pattern, '')) * parseFloat(rate_srcc_eo.replace(pattern, '')) / 100);
        $("#premium_srcc_eo").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_srcc_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Overtime, Night Work & Express Freight
    $("#rate_oef_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_oef_eo = $("#nrv_oef_eo").val(),
            rate_oef_eo = $("#rate_oef_eo").val(),
            result = (parseFloat(nrv_oef_eo.replace(pattern, '')) * parseFloat(rate_oef_eo.replace(pattern, '')) / 100);
        $("#premium_oef_eo").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_oef_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Airfreight
    $("#rate_airfreight_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_airfreight_eo = $("#nrv_airfreight_eo").val(),
            rate_airfreight_eo = $("#rate_airfreight_eo").val(),
            result = (parseFloat(nrv_airfreight_eo.replace(pattern, '')) * parseFloat(rate_airfreight_eo.replace(pattern, '')) / 100);
        $("#premium_airfreight_eo").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_airfreight_eo").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Theft
    $("#rate_theft").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_theft = $("#nrv_theft").val(),
            rate_theft = $("#rate_theft").val(),
            result = (parseFloat(nrv_theft.replace(pattern, '')) * parseFloat(rate_theft.replace(pattern, '')) / 100);
        $("#premium_theft").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_theft").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Mobile & Portable Equipment
    $("#rate_mpq").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nrv_mpq = $("#nrv_mpq").val(),
            rate_mpq = $("#rate_mpq").val(),
            result = (parseFloat(nrv_mpq.replace(pattern, '')) * parseFloat(rate_mpq.replace(pattern, '')) / 100);
        $("#premium_mpq").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rate_mpq").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            premium_mpq = $("#premium_mpq").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')) + parseFloat(premium_mpq.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 
    $("#other_rate_ee").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_ee = $("#other_nrv_ee").val(),
            other_rate_ee = $("#other_rate_ee").val(),
            result = (parseFloat(other_nrv_ee.replace(pattern, '')) * parseFloat(other_rate_ee.replace(pattern, '')) / 100);
        $("#other_prem_ee").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_ee").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            premium_mpq = $("#premium_mpq").val(),
            other_prem_ee = $("#other_prem_ee").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')) + parseFloat(premium_mpq.replace(pattern, '')) + parseFloat(other_prem_ee.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 1
    $("#other_rate_ee1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_ee1 = $("#other_nrv_ee1").val(),
            other_rate_ee1 = $("#other_rate_ee1").val(),
            result = (parseFloat(other_nrv_ee1.replace(pattern, '')) * parseFloat(other_rate_ee1.replace(pattern, '')) / 100);
        $("#other_prem_ee1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_ee1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            premium_mpq = $("#premium_mpq").val(),
            other_prem_ee = $("#other_prem_ee").val(),
            other_prem_ee1 = $("#other_prem_ee1").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')) + parseFloat(premium_mpq.replace(pattern, '')) + parseFloat(other_prem_ee.replace(pattern, '')) + parseFloat(other_prem_ee1.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 2
    $("#other_rate_ee2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_ee2 = $("#other_nrv_ee2").val(),
            other_rate_ee2 = $("#other_rate_ee2").val(),
            result = (parseFloat(other_nrv_ee2.replace(pattern, '')) * parseFloat(other_rate_ee2.replace(pattern, '')) / 100);
        $("#other_prem_ee2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_ee2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            premium_mpq = $("#premium_mpq").val(),
            other_prem_ee = $("#other_prem_ee").val(),
            other_prem_ee1 = $("#other_prem_ee1").val(),
            other_prem_ee2 = $("#other_prem_ee2").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')) + parseFloat(premium_mpq.replace(pattern, '')) + parseFloat(other_prem_ee.replace(pattern, '')) + parseFloat(other_prem_ee1.replace(pattern, '')) + parseFloat(other_prem_ee2.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 3
    $("#other_rate_ee3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_ee3 = $("#other_nrv_ee3").val(),
            other_rate_ee3 = $("#other_rate_ee3").val(),
            result = (parseFloat(other_nrv_ee3.replace(pattern, '')) * parseFloat(other_rate_ee3.replace(pattern, '')) / 100);
        $("#other_prem_ee3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_ee3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            premium_mpq = $("#premium_mpq").val(),
            other_prem_ee = $("#other_prem_ee").val(),
            other_prem_ee1 = $("#other_prem_ee1").val(),
            other_prem_ee2 = $("#other_prem_ee2").val(),
            other_prem_ee3 = $("#other_prem_ee3").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')) + parseFloat(premium_mpq.replace(pattern, '')) + parseFloat(other_prem_ee.replace(pattern, '')) + parseFloat(other_prem_ee1.replace(pattern, '')) + parseFloat(other_prem_ee2.replace(pattern, '')) + parseFloat(other_prem_ee3.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 4
    $("#other_rate_ee4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_nrv_ee4 = $("#other_nrv_ee4").val(),
            other_rate_ee4 = $("#other_rate_ee4").val(),
            result = (parseFloat(other_nrv_ee4.replace(pattern, '')) * parseFloat(other_rate_ee4.replace(pattern, '')) / 100);
        $("#other_prem_ee4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_ee4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premium_tsi_eo = $("#premium_tsi_eo").val(),
            premium_srcc_eo = $("#premium_srcc_eo").val(),
            premium_oef_eo = $("#premium_oef_eo").val(),
            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
            premium_theft = $("#premium_theft").val(),
            premium_mpq = $("#premium_mpq").val(),
            other_prem_ee = $("#other_prem_ee").val(),
            other_prem_ee1 = $("#other_prem_ee1").val(),
            other_prem_ee2 = $("#other_prem_ee2").val(),
            other_prem_ee3 = $("#other_prem_ee3").val(),
            other_prem_ee4 = $("#other_prem_ee4").val(),
            result = (parseFloat(premium_tsi_eo.replace(pattern, '')) + parseFloat(premium_srcc_eo.replace(pattern, '')) + parseFloat(premium_oef_eo.replace(pattern, '')) + parseFloat(premium_airfreight_eo.replace(pattern, '')) + parseFloat(premium_theft.replace(pattern, '')) + parseFloat(premium_mpq.replace(pattern, '')) + parseFloat(other_prem_ee.replace(pattern, '')) + parseFloat(other_prem_ee1.replace(pattern, '')) + parseFloat(other_prem_ee2.replace(pattern, '')) + parseFloat(other_prem_ee3.replace(pattern, '')) + parseFloat(other_prem_ee4.replace(pattern, '')));
        $("#premium_engo_ap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    //    $("#calcbtn_pm").on("click", () => {
    //        var result = 0;
    //
    //        var premium_tsi_eo = $("#premium_tsi_eo").val(),
    //            premium_srcc_eo = $("#premium_srcc_eo").val(),
    //            premium_oef_eo = $("#premium_oef_eo").val(),
    //            premium_airfreight_eo = $("#premium_airfreight_eo").val(),
    //            premium_theft = $("#premium_theft").val(),
    //            premium_mpq = $("#premium_mpq").val(),
    //            result = parseFloat(premium_tsi_eo) + parseFloat(premium_srcc_eo) + parseFloat(premium_oef_eo) + parseFloat(premium_airfreight_eo) + parseFloat(premium_theft) + parseFloat(premium_mpq);
    //        $("#premium_engo_ap").val(result);
    //    })

});


////CALCULATIONS FOR ENG - ASSETS ALL QUOTATION FIELD ////////
$(document).ready(function () {
    ///// Building (s)
    $("#building_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_si = $("#building_si").val(),
            building_rate = $("#building_rate").val();
        var result = (parseFloat(building_si.replace(pattern, '')) * parseFloat(building_rate.replace(pattern, '')) / 100);
        $("#building_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#building_rate").on("blur", () => {
        var building_prem = $("#building_prem").val();
        $("#tsibp_prem").val(building_prem); //Value of PREMIUM = TOTAL SUM INSURED/BASIC PREMIUM
        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Fence Wall
    $("#fencewall_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fencewall_si = $("#fencewall_si").val(),
            fencewall_rate = $("#fencewall_rate").val();
        var result = (parseFloat(fencewall_si.replace(pattern, '')) * parseFloat(fencewall_rate.replace(pattern, '')) / 100);
        $("#fencewall_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#fencewall_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////   Finished Goods     
    $("#finshed_goods_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var finshed_goods_si = $("#finshed_goods_si").val(),
            finshed_goods_rate = $("#finshed_goods_rate").val();
        var result = (parseFloat(finshed_goods_si.replace(pattern, '')) * parseFloat(finshed_goods_rate.replace(pattern, '')) / 100);
        $("#finshed_goods_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#finshed_goods_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////   Work In Progress     
    $("#wrknprogres_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var wrknprogres_si = $("#wrknprogres_si").val(),
            wrknprogres_rate = $("#wrknprogres_rate").val();
        var result = (parseFloat(wrknprogres_si.replace(pattern, '')) * parseFloat(wrknprogres_rate.replace(pattern, '')) / 100);
        $("#wrknprogres_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#wrknprogres_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    /////  Furniture, Fixtures & Fittings         
    $("#fff_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fff_si = $("#fff_si").val(),
            fff_rate = $("#fff_rate").val();
        var result = (parseFloat(fff_si.replace(pattern, '')) * parseFloat(fff_rate.replace(pattern, '')) / 100);
        $("#fff_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#fff_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    ///// Furnishings                
    $("#furnish_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var furnish_si = $("#furnish_si").val(),
            furnish_rate = $("#furnish_rate").val();
        var result = (parseFloat(furnish_si.replace(pattern, '')) * parseFloat(furnish_rate.replace(pattern, '')) / 100);
        $("#furnish_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#furnish_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    ///// Electronic Equpment/Appliances                   
    $("#eea_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var eea_si = $("#eea_si").val(),
            eea_rate = $("#eea_rate").val();
        var result = (parseFloat(eea_si.replace(pattern, '')) * parseFloat(eea_rate.replace(pattern, '')) / 100);
        $("#eea_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#eea_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val(),
            eea_prem = $("#eea_prem").val(),
            result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')) + parseFloat(eea_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Household Goods                       
    $("#hg_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var hg_si = $("#hg_si").val(),
            hg_rate = $("#hg_rate").val();
        var result = (parseFloat(hg_si.replace(pattern, '')) * parseFloat(hg_rate.replace(pattern, '')) / 100);
        $("#hg_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#hg_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val(),
            eea_prem = $("#eea_prem").val(),
            hg_prem = $("#hg_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')) + parseFloat(eea_prem.replace(pattern, '')) + parseFloat(hg_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })


    ///// Computers/Laptops                           
    $("#cl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cl_si = $("#cl_si").val(),
            cl_rate = $("#cl_rate").val();
        var result = (parseFloat(cl_si.replace(pattern, '')) * parseFloat(cl_rate.replace(pattern, '')) / 100);
        $("#cl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#cl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val(),
            eea_prem = $("#eea_prem").val(),
            hg_prem = $("#hg_prem").val(),
            cl_prem = $("#cl_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')) + parseFloat(eea_prem.replace(pattern, '')) + parseFloat(hg_prem.replace(pattern, '')) + parseFloat(cl_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Plant & Machinery                                
    $("#pm_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pm_si = $("#pm_si").val(),
            pm_rate = $("#pm_rate").val();
        var result = (parseFloat(pm_si.replace(pattern, '')) * parseFloat(pm_rate.replace(pattern, '')) / 100);
        $("#pm_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pm_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val(),
            eea_prem = $("#eea_prem").val(),
            hg_prem = $("#hg_prem").val(),
            cl_prem = $("#cl_prem").val(),
            pm_prem = $("#pm_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')) + parseFloat(eea_prem.replace(pattern, '')) + parseFloat(hg_prem.replace(pattern, '')) + parseFloat(cl_prem.replace(pattern, '')) + parseFloat(pm_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Stock-in-Trade                                    
    $("#sit_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sit_si = $("#sit_si").val(),
            sit_rate = $("#sit_rate").val();
        var result = (parseFloat(sit_si.replace(pattern, '')) * parseFloat(sit_rate.replace(pattern, '')) / 100);
        $("#sit_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sit_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val(),
            eea_prem = $("#eea_prem").val(),
            hg_prem = $("#hg_prem").val(),
            cl_prem = $("#cl_prem").val(),
            pm_prem = $("#pm_prem").val(),
            sit_prem = $("#sit_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')) + parseFloat(eea_prem.replace(pattern, '')) + parseFloat(hg_prem.replace(pattern, '')) + parseFloat(cl_prem.replace(pattern, '')) + parseFloat(pm_prem.replace(pattern, '')) + parseFloat(sit_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////  Other Contents                                      
    $("#oc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var oc_si = $("#oc_si").val(),
            oc_rate = $("#oc_rate").val();
        var result = (parseFloat(oc_si.replace(pattern, '')) * parseFloat(oc_rate.replace(pattern, '')) / 100);
        $("#oc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#oc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem = $("#building_prem").val(),
            fencewall_prem = $("#fencewall_prem").val(),
            finshed_goods_prem = $("#finshed_goods_prem").val(),
            wrknprogres_prem = $("#wrknprogres_prem").val(),
            fff_prem = $("#fff_prem").val(),
            furnish_prem = $("#furnish_prem").val(),
            eea_prem = $("#eea_prem").val(),
            hg_prem = $("#hg_prem").val(),
            cl_prem = $("#cl_prem").val(),
            pm_prem = $("#pm_prem").val(),
            sit_prem = $("#sit_prem").val(),
            oc_prem = $("#oc_prem").val();
        var result = (parseFloat(building_prem.replace(pattern, '')) + parseFloat(fencewall_prem.replace(pattern, '')) + parseFloat(finshed_goods_prem.replace(pattern, '')) + parseFloat(wrknprogres_prem.replace(pattern, '')) + parseFloat(fff_prem.replace(pattern, '')) + parseFloat(furnish_prem.replace(pattern, '')) + parseFloat(eea_prem.replace(pattern, '')) + parseFloat(hg_prem.replace(pattern, '')) + parseFloat(cl_prem.replace(pattern, '')) + parseFloat(pm_prem.replace(pattern, '')) + parseFloat(sit_prem.replace(pattern, '')) + parseFloat(oc_prem.replace(pattern, '')));
        $("#tsibp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si = $("#fea_dscut_si").val(),
            tsibp_prem = $("#tsibp_prem").val();
        var feaResult = (parseFloat(fea_dscut_si.replace(pattern, '')) * parseFloat(tsibp_prem.replace(pattern, '')) / 100);
        $("#fea_dscut_prem").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem = $("#tsibp_prem").val(),
            fea_dscut_prem = $("#fea_dscut_prem").val();
        var feaSub = (parseFloat(tsibp_prem.replace(pattern, '')) - parseFloat(fea_dscut_prem.replace(pattern, '')));
        $("#fea_dscut_prem2").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si = $("#hd_si").val(),
            fea_dscut_prem2 = $("#fea_dscut_prem2").val();
        var hydResult = (parseFloat(hd_si.replace(pattern, '')) * parseFloat(fea_dscut_prem2.replace(pattern, '')) / 100);
        $("#hd_prem").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem2 = $("#fea_dscut_prem2").val(),
            hd_prem = $("#hd_prem").val();
        var hydSub = (parseFloat(fea_dscut_prem2.replace(pattern, '')) - parseFloat(hd_prem.replace(pattern, '')));
        $("#hd2_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem = $("#hd2_prem").val(),
            ltad_si = $("#ltad_si").val();
        var ltaResult = (parseFloat(hd2_prem.replace(pattern, '')) * parseFloat(ltad_si.replace(pattern, '')) / 100);
        $("#ltad_prem").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem = $("#ltad_prem").val(),
            hd2_prem = $("#hd2_prem").val();
        var ltaSub = (parseFloat(hd2_prem.replace(pattern, '')) - parseFloat(ltad_prem.replace(pattern, '')));
        $("#dp_prem").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    })
    /// FOR THE EXTENDED PARTS
    ///// Capital Additions
    $("#ca_rate").on("blur", () => {
        var caRes = 0;
        var pattern = /[^0-9.-]+/g;
        var ca_limits = $("#ca_limits").val(),
            ca_rate = $("#ca_rate").val();
        var caRes = (parseFloat(ca_limits.replace(pattern, '')) * parseFloat(ca_rate.replace(pattern, '')) / 100);
        $("#ca_adp").val(caRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for ADDTITIONAL PREMIUM
    })
    $("#ca_rate").on("blur", () => {
        var ca_adp = $("#ca_adp").val();
        $("#tap_adp").val(ca_adp);
    })
    $("#ca_rate").on("blur", () => {
        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Temporal Removal
    $("#tr_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tr_limits = $("#tr_limits").val(),
            tr_rate = $("#tr_rate").val();
        var result = (parseFloat(tr_limits.replace(pattern, '')) * parseFloat(tr_rate.replace(pattern, '')) / 100);
        $("#tr_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#tr_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            tr_adp = $("#tr_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(tr_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Removal of Debris
    $("#rob_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rob_limits = $("#rob_limits").val(),
            rob_rate = $("#rob_rate").val();
        var result = (parseFloat(rob_limits.replace(pattern, '')) * parseFloat(rob_rate.replace(pattern, '')) / 100);
        $("#rob_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rob_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            rob_adp = $("#rob_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(rob_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Professional Fees
    $("#pf_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pf_limits = $("#pf_limits").val(),
            pf_rate = $("#pf_rate").val();
        var result = (parseFloat(pf_limits.replace(pattern, '')) * parseFloat(pf_rate.replace(pattern, '')) / 100);
        $("#pf_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pf_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pf_adp = $("#pf_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(pf_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Reinstatement Value Condition
    $("#rvc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rvc_limits = $("#rvc_limits").val(),
            rvc_rate = $("#rvc_rate").val();
        var result = (parseFloat(rvc_limits.replace(pattern, '')) * parseFloat(rvc_rate.replace(pattern, '')) / 100);
        $("#rvc_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rvc_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            rvc_adp = $("#rvc_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(rvc_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Plate Glass
    $("#pg_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pg_limits = $("#pg_limits").val(),
            pg_rate = $("#pg_rate").val();
        var result = (parseFloat(pg_limits.replace(pattern, '')) * parseFloat(pg_rate.replace(pattern, '')) / 100);
        $("#pg_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pg_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pg_adp = $("#pg_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(pg_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Automatic Reinstatement of Sum Insured
    $("#arsi_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var arsi_limits = $("#arsi_limits").val(),
            arsi_rate = $("#arsi_rate").val();
        var result = (parseFloat(arsi_limits.replace(pattern, '')) * parseFloat(arsi_rate.replace(pattern, '')) / 100);
        $("#arsi_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#arsi_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            arsi_adp = $("#arsi_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(arsi_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Surrounding Property
    $("#sp_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sp_limits = $("#sp_limits").val(),
            sp_rate = $("#sp_rate").val();
        var result = (parseFloat(sp_limits.replace(pattern, '')) * parseFloat(sp_rate.replace(pattern, '')) / 100);
        $("#sp_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sp_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            sp_adp = $("#sp_adp").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(sp_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    //// Special Discount 
    $("#special_disc_si").on("blur", () => {
        var spTotal = 0,
            pattern = /[^0-9.-]+/g,
            special_disc_si = $("#special_disc_si").val(),
            dp_prem = $("#dp_prem").val(),
            spTotal = (parseFloat(special_disc_si.replace(pattern, '')) * dp_prem.replace(pattern, '')) / 100;
        $("#special_disc_prem").val(spTotal.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        var special_disc_prem = $("#special_disc_prem").val();
        $("#netp_adp").val(special_disc_prem);
    });
    $("#special_disc_si").on("blur", () => {
        var special_disc_prem = $("#special_disc_prem").val();
        $("#totp_adp").val(special_disc_prem);

        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(4));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(4));
    });

    ///// Theft
    // $("#theft_rate").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var theft_limits = $("#theft_limits").val(),
    //         theft_rate = $("#theft_rate").val();
    //     var result = (parseFloat(theft_limits.replace(pattern, '')) * parseFloat(theft_rate.replace(pattern, '')) / 100);
    //     $("#theft_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })
    // $("#theft_rate").on("blur", () => {
    //     var tapRes = 0,
    //         pattern = /[^0-9.-]+/g,
    //         theft_adp = $("#theft_adp").val(),
    //         tap_adp = $("#tap_adp").val(),
    //         tapRes = (parseFloat(theft_adp.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
    //     $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    //     // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
    //     var extResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         dp_prem = $("#dp_prem").val(),
    //         tap_adp = $("#tap_adp").val(),
    //         extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
    //     $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var tpResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         netp_adp = $("#netp_adp").val(),
    //         collapse_adp = $("#collapse_adp").val(),
    //         tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
    //     $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var nlResult = 0,
    //         onePersnt = 1,
    //         pattern = /[^0-9.-]+/g,
    //         totp_adp = $("#totp_adp").val(),
    //         nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
    //     $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
    //     var apResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         totp_adp = $("#totp_adp").val(),
    //         nicl_adp = $("#nicl_adp").val(),
    //         cf_adp = $("#cf_adp").val(),
    //         apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
    //     $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })

    ///// Others
    $("#other_rate_aar").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_aar = $("#other_si_aar").val(),
            other_rate_aar = $("#other_rate_aar").val();
        var result = (parseFloat(other_si_aar.replace(pattern, '')) * parseFloat(other_rate_aar.replace(pattern, '')) / 100);
        $("#other_prem_aar").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#other_rate_aar").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_aar = $("#other_prem_aar").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(other_prem_aar.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    ///// Others 1
    $("#other_rate_aar1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_aar1 = $("#other_si_aar1").val(),
            other_rate_aar1 = $("#other_rate_aar1").val();
        var result = (parseFloat(other_si_aar1.replace(pattern, '')) * parseFloat(other_rate_aar1.replace(pattern, '')) / 100);
        $("#other_prem_aar1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#other_rate_aar1").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_aar1 = $("#other_prem_aar1").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(other_prem_aar1.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    ///// Others 2
    $("#other_rate_aar2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_aar2 = $("#other_si_aar2").val(),
            other_rate_aar2 = $("#other_rate_aar2").val();
        var result = (parseFloat(other_si_aar2.replace(pattern, '')) * parseFloat(other_rate_aar2.replace(pattern, '')) / 100);
        $("#other_prem_aar2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_aar2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_aar2 = $("#other_prem_aar2").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(other_prem_aar2.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Others 3
    $("#other_rate_aar3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_aar3 = $("#other_si_aar3").val(),
            other_rate_aar3 = $("#other_rate_aar3").val();
        var result = (parseFloat(other_si_aar3.replace(pattern, '')) * parseFloat(other_rate_aar3.replace(pattern, '')) / 100);
        $("#other_prem_aar3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_aar3").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_aar3 = $("#other_prem_aar3").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(other_prem_aar3.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    ///// Others 4
    $("#other_rate_aar4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_aar4 = $("#other_si_aar4").val(),
            other_rate_aar4 = $("#other_rate_aar4").val();
        var result = (parseFloat(other_si_aar4.replace(pattern, '')) * parseFloat(other_rate_aar4.replace(pattern, '')) / 100);
        $("#other_prem_aar4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#other_rate_aar4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_aar4 = $("#other_prem_aar4").val(),
            tap_adp = $("#tap_adp").val(),
            tapRes = (parseFloat(other_prem_aar4.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#tap_adp").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem = $("#dp_prem").val(),
            tap_adp = $("#tap_adp").val(),
            extResult = (parseFloat(dp_prem.replace(pattern, '')) + parseFloat(tap_adp.replace(pattern, '')));
        $("#netp_adp").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    //// Collapse
    $("#collapse_rate").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            collapse_limits = $("#collapse_limits").val(),
            collapse_rate = $("#collapse_rate").val(),
            apResult = (parseFloat(collapse_limits.replace(pattern, '')) * parseFloat(collapse_rate.replace(pattern, '')) / 100);
        $("#collapse_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Adding to Annual Premium
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp = $("#netp_adp").val(),
            collapse_adp = $("#collapse_adp").val(),
            tpResult = (parseFloat(netp_adp.replace(pattern, '')) + parseFloat(collapse_adp.replace(pattern, '')));
        $("#totp_adp").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    ///// Certificate Fee ...
    $("#cf_adp").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            cf_adp = $("#cf_adp").val(),
            nicl_adp = $("#nicl_adp").val(),
            totp_adp = $("#totp_adp").val(),
            apResult = (parseFloat(totp_adp.replace(pattern, '')) + parseFloat(nicl_adp.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    //// Summing Total Sum Insured  
    $("#building_si").on("blur", () => {
        var building_si = $("#building_si").val();
        $("#tsibp_si").val(building_si);
    });
    $("#fencewall_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#finshed_goods_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#wrknprogres_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#fff_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#furnish_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#eea_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            eea_si = $("#eea_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')) + parseFloat(eea_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#hg_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            eea_si = $("#eea_si").val(),
            hg_si = $("#hg_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')) + parseFloat(eea_si.replace(pattern, '')) + parseFloat(hg_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#cl_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            eea_si = $("#eea_si").val(),
            hg_si = $("#hg_si").val(),
            cl_si = $("#cl_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')) + parseFloat(eea_si.replace(pattern, '')) + parseFloat(hg_si.replace(pattern, '')) + parseFloat(cl_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#pm_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            eea_si = $("#eea_si").val(),
            hg_si = $("#hg_si").val(),
            cl_si = $("#cl_si").val(),
            pm_si = $("#pm_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')) + parseFloat(eea_si.replace(pattern, '')) + parseFloat(hg_si.replace(pattern, '')) + parseFloat(cl_si.replace(pattern, '')) + parseFloat(pm_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#sit_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            eea_si = $("#eea_si").val(),
            hg_si = $("#hg_si").val(),
            cl_si = $("#cl_si").val(),
            pm_si = $("#pm_si").val(),
            sit_si = $("#sit_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')) + parseFloat(eea_si.replace(pattern, '')) + parseFloat(hg_si.replace(pattern, '')) + parseFloat(cl_si.replace(pattern, '')) + parseFloat(pm_si.replace(pattern, '')) + parseFloat(sit_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#oc_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si = $("#building_si").val(),
            fencewall_si = $("#fencewall_si").val(),
            finshed_goods_si = $("#finshed_goods_si").val(),
            wrknprogres_si = $("#wrknprogres_si").val(),
            fff_si = $("#fff_si").val(),
            furnish_si = $("#furnish_si").val(),
            eea_si = $("#eea_si").val(),
            hg_si = $("#hg_si").val(),
            cl_si = $("#cl_si").val(),
            pm_si = $("#pm_si").val(),
            sit_si = $("#sit_si").val(),
            oc_si = $("#oc_si").val(),
            sum = (parseFloat(building_si.replace(pattern, '')) + parseFloat(fencewall_si.replace(pattern, '')) + parseFloat(finshed_goods_si.replace(pattern, '')) + parseFloat(wrknprogres_si.replace(pattern, '')) + parseFloat(fff_si.replace(pattern, '')) + parseFloat(furnish_si.replace(pattern, '')) + parseFloat(eea_si.replace(pattern, '')) + parseFloat(hg_si.replace(pattern, '')) + parseFloat(cl_si.replace(pattern, '')) + parseFloat(pm_si.replace(pattern, '')) + parseFloat(sit_si.replace(pattern, '')) + parseFloat(oc_si.replace(pattern, '')));
        $("#tsibp_si").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

});


////CALCULATIONS FOR ENG - FIRE & ALLIED PERILS QUOTATION FIELD ////////
$(document).ready(function () {
    ///// Building (s)
    $("#building_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_si2 = $("#building_si2").val(),
            building_rate2 = $("#building_rate2").val();
        var result = (parseFloat(building_si2.replace(pattern, '')) * parseFloat(building_rate2.replace(pattern, '')) / 100);
        $("#building_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    });
    $("#building_rate2").on("blur", () => {
        var building_prem2 = $("#building_prem2").val();
        $("#tsibp_prem2").val(building_prem2); // Value of PREMIUM = TOTAL SUM INSURED/BASIC PREMIUM
        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    ///// Fence Wall & Gate(s)
    $("#fencewall1_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fencewall1_si = $("#fencewall1_si").val(),
            fencewall1_rate = $("#fencewall1_rate").val();
        var result = (parseFloat(fencewall1_si.replace(pattern, '')) * parseFloat(fencewall1_rate.replace(pattern, '')) / 100);
        $("#fencewall1_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#fencewall1_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp = $("#cf_adp").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    /////   Gate (s)     
    // $("#gate_rate2").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var gate_si2 = $("#gate_si2").val(),
    //         gate_rate2 = $("#gate_rate2").val();
    //     var result = (parseFloat(gate_si2.replace(pattern, '')) * parseFloat(gate_rate2.replace(pattern, '')) / 100);
    //     $("#gate_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })
    // $("#gate_rate2").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var building_prem2 = $("#building_prem2").val(),
    //         fencewall1_prem = $("#fencewall1_prem").val(),
    //         gate_prem2 = $("#gate_prem2").val();
    //     var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(gate_prem2.replace(pattern, '')));
    //     $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    //     ///// FEA Discount
    //     var feaResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         fea_dscut_si21 = $("#fea_dscut_si21").val(),
    //         tsibp_prem2 = $("#tsibp_prem2").val();
    //     var feaResult2 = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
    //     $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var feaSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem2 = $("#tsibp_prem2").val(),
    //         fea_dscut_prem21 = $("#fea_dscut_prem21").val();
    //     var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
    //     $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     ///// Hydrant Discount
    //     var hydResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         hd_si2 = $("#hd_si2").val(),
    //         tsibp_prem2 = $("#tsibp_prem2").val();
    //     var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
    //     $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var hydSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem2 = $("#tsibp_prem2").val(),
    //         hd_prem2 = $("#hd_prem2").val();
    //     var hydSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
    //     $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     ///// LTA Discount
    //     var ltaResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem2 = $("#tsibp_prem2").val(),
    //         ltad_si2 = $("#ltad_si2").val();
    //     var ltaResult = (parseFloat(tsibp_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
    //     $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var ltaSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         ltad_prem2 = $("#ltad_prem2").val(),
    //         tsibp_prem2 = $("#tsibp_prem2").val();
    //     var ltaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
    //     $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

    //     // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
    //     var extResult = 0,
    //         dp_prem2 = $("#dp_prem2").val(),
    //         tap_adp2 = $("#tap_adp2").val(),
    //         extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
    //     $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var tpResult = 0,
    //         netp_adp2 = $("#netp_adp2").val(),
    //         collapse_adp2 = $("#collapse_adp2").val(),
    //         tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
    //     $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var nlResult = 0,
    //         onePersnt = 1,
    //         totp_adp2 = $("#totp_adp2").val(),
    //         nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
    //     $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
    //     var apResult = 0,
    //         totp_adp2 = $("#totp_adp2").val(),
    //         nicl_adp2 = $("#nicl_adp2").val(),
    //         cf_adp2 = $("#cf_adp2").val(),
    //         apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
    //     $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })

    /////  Furniture, Fixtures & Fittings         
    $("#fff_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fff_si2 = $("#fff_si2").val(),
            fff_rate2 = $("#fff_rate2").val();
        var result = (parseFloat(fff_si2.replace(pattern, '')) * parseFloat(fff_rate2.replace(pattern, '')) / 100);
        $("#fff_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#fff_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult2 = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult2 = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult2.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });

    ///// Furnishings                
    $("#furnish_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var furnish_si2 = $("#furnish_si2").val(),
            furnish_rate2 = $("#furnish_rate2").val();
        var result = (parseFloat(furnish_si2.replace(pattern, '')) * parseFloat(furnish_rate2.replace(pattern, '')) / 100);
        $("#furnish_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#furnish_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Di2scount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Electronic Equpment/Appliances                   
    $("#eea_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var eea_si2 = $("#eea_si2").val(),
            eea_rate2 = $("#eea_rate2").val();
        var result = (parseFloat(eea_si2.replace(pattern, '')) * parseFloat(eea_rate2.replace(pattern, '')) / 100);
        $("#eea_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    });
    $("#eea_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Household Goods                       
    $("#hg_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var hg_si2 = $("#hg_si2").val(),
            hg_rate2 = $("#hg_rate2").val();
        var result = (parseFloat(hg_si2.replace(pattern, '')) * parseFloat(hg_rate2.replace(pattern, '')) / 100);
        $("#hg_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#hg_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val(),
            hg_prem2 = $("#hg_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')) + parseFloat(hg_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Personal Effects                       
    $("#pe_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pe_si = $("#pe_si").val(),
            pe_rate = $("#pe_rate").val();
        var result = (parseFloat(pe_si.replace(pattern, '')) * parseFloat(pe_rate.replace(pattern, '')) / 100);
        $("#pe_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pe_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val(),
            hg_prem2 = $("#hg_prem2").val(),
            pe_prem = $("#pe_prem").val(),
            result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')) + parseFloat(hg_prem2.replace(pattern, '')) + parseFloat(pe_prem.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Computers/Laptops                           
    $("#cl_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cl_si2 = $("#cl_si2").val(),
            cl_rate2 = $("#cl_rate2").val();
        var result = (parseFloat(cl_si2.replace(pattern, '')) * parseFloat(cl_rate2.replace(pattern, '')) / 100);
        $("#cl_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#cl_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val(),
            hg_prem2 = $("#hg_prem2").val(),
            pe_prem = $("#pe_prem").val(),
            cl_prem2 = $("#cl_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')) + parseFloat(hg_prem2.replace(pattern, '')) + parseFloat(pe_prem.replace(pattern, '')) + parseFloat(cl_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Plant & Machinery                                
    $("#pm_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pm_si2 = $("#pm_si2").val(),
            pm_rate2 = $("#pm_rate2").val();
        var result = (parseFloat(pm_si2.replace(pattern, '')) * parseFloat(pm_rate2.replace(pattern, '')) / 100);
        $("#pm_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pm_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val(),
            hg_prem2 = $("#hg_prem2").val(),
            pe_prem = $("#pe_prem").val(),
            cl_prem2 = $("#cl_prem2").val(),
            pm_prem2 = $("#pm_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')) + parseFloat(hg_prem2.replace(pattern, '')) + parseFloat(pe_prem.replace(pattern, '')) + parseFloat(cl_prem2.replace(pattern, '')) + parseFloat(pm_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Stock-in-Trade                                    
    $("#sit_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sit_si2 = $("#sit_si2").val(),
            sit_rate2 = $("#sit_rate2").val();
        var result = (parseFloat(sit_si2.replace(pattern, '')) * parseFloat(sit_rate2.replace(pattern, '')) / 100);
        $("#sit_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sit_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val(),
            hg_prem2 = $("#hg_prem2").val(),
            pe_prem = $("#pe_prem").val(),
            cl_prem2 = $("#cl_prem2").val(),
            pm_prem2 = $("#pm_prem2").val(),
            sit_prem2 = $("#sit_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')) + parseFloat(hg_prem2.replace(pattern, '')) + parseFloat(pe_prem.replace(pattern, '')) + parseFloat(cl_prem2.replace(pattern, '')) + parseFloat(pm_prem2.replace(pattern, '')) + parseFloat(sit_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////  Other Contents                                      
    $("#oc_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var oc_si2 = $("#oc_si2").val(),
            oc_rate2 = $("#oc_rate2").val();
        var result = (parseFloat(oc_si2.replace(pattern, '')) * parseFloat(oc_rate2.replace(pattern, '')) / 100);
        $("#oc_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#oc_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem2 = $("#building_prem2").val(),
            fencewall1_prem = $("#fencewall1_prem").val(),
            fff_prem2 = $("#fff_prem2").val(),
            furnish_prem2 = $("#furnish_prem2").val(),
            eea_prem2 = $("#eea_prem2").val(),
            hg_prem2 = $("#hg_prem2").val(),
            pe_prem = $("#pe_prem").val(),
            cl_prem2 = $("#cl_prem2").val(),
            pm_prem2 = $("#pm_prem2").val(),
            sit_prem2 = $("#sit_prem2").val(),
            oc_prem2 = $("#oc_prem2").val();
        var result = (parseFloat(building_prem2.replace(pattern, '')) + parseFloat(fencewall1_prem.replace(pattern, '')) + parseFloat(fff_prem2.replace(pattern, '')) + parseFloat(furnish_prem2.replace(pattern, '')) + parseFloat(eea_prem2.replace(pattern, '')) + parseFloat(hg_prem2.replace(pattern, '')) + parseFloat(pe_prem.replace(pattern, '')) + parseFloat(cl_prem2.replace(pattern, '')) + parseFloat(pm_prem2.replace(pattern, '')) + parseFloat(sit_prem2.replace(pattern, '')) + parseFloat(oc_prem2.replace(pattern, '')));
        $("#tsibp_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si21 = $("#fea_dscut_si21").val(),
            tsibp_prem2 = $("#tsibp_prem2").val();
        var feaResult = (parseFloat(fea_dscut_si21.replace(pattern, '')) * parseFloat(tsibp_prem2.replace(pattern, '')) / 100);
        $("#fea_dscut_prem21").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem2 = $("#tsibp_prem2").val(),
            fea_dscut_prem21 = $("#fea_dscut_prem21").val();
        var feaSub = (parseFloat(tsibp_prem2.replace(pattern, '')) - parseFloat(fea_dscut_prem21.replace(pattern, '')));
        $("#fea_dscut_prem22").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si2 = $("#hd_si2").val(),
            fea_dscut_prem22 = $("#fea_dscut_prem22").val();
        var hydResult = (parseFloat(hd_si2.replace(pattern, '')) * parseFloat(fea_dscut_prem22.replace(pattern, '')) / 100);
        $("#hd_prem2").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem22 = $("#fea_dscut_prem22").val(),
            hd_prem2 = $("#hd_prem2").val();
        var hydSub = (parseFloat(fea_dscut_prem22.replace(pattern, '')) - parseFloat(hd_prem2.replace(pattern, '')));
        $("#hd2_prem2").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd2_prem2 = $("#hd2_prem2").val(),
            ltad_si2 = $("#ltad_si2").val();
        var ltaResult = (parseFloat(hd2_prem2.replace(pattern, '')) * parseFloat(ltad_si2.replace(pattern, '')) / 100);
        $("#ltad_prem2").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem2 = $("#ltad_prem2").val(),
            hd2_prem2 = $("#hd2_prem2").val();
        var ltaSub = (parseFloat(hd2_prem2.replace(pattern, '')) - parseFloat(ltad_prem2.replace(pattern, '')));
        $("#dp_prem2").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    })
    /// FOR THE EXTENDED SECTION
    ///// Capital Additions
    $("#ca_rate2").on("blur", () => {
        var caRes = 0;
        var pattern = /[^0-9.-]+/g;
        var ca_limits2 = $("#ca_limits2").val(),
            ca_rate2 = $("#ca_rate2").val();
        var caRes = (parseFloat(ca_limits2.replace(pattern, '')) * parseFloat(ca_rate2.replace(pattern, '')) / 100);
        $("#ca_adp2").val(caRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for ADDTITIONAL PREMIUM
    })
    $("#ca_rate2").on("blur", () => {
        var ca_adp2 = $("#ca_adp2").val();
        $("#tap_adp2").val(ca_adp2);
    })
    $("#ca_rate2").on("blur", () => {
        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Temporal Removal
    $("#tr_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tr_limits2 = $("#tr_limits2").val(),
            tr_rate2 = $("#tr_rate2").val();
        var result = (parseFloat(tr_limits2.replace(pattern, '')) * parseFloat(tr_rate2.replace(pattern, '')) / 100);
        $("#tr_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#tr_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            tr_adp2 = $("#tr_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(tr_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Removal of Debris
    $("#rob_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rob_limits2 = $("#rob_limits2").val(),
            rob_rate2 = $("#rob_rate2").val();
        var result = (parseFloat(rob_limits2.replace(pattern, '')) * parseFloat(rob_rate2.replace(pattern, '')) / 100);
        $("#rob_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rob_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            rob_adp2 = $("#rob_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(rob_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp = $("#totp_adp").val(),
            nlResult = (parseFloat(totp_adp.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Professional Fees
    $("#pf_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pf_limits2 = $("#pf_limits2").val(),
            pf_rate2 = $("#pf_rate2").val();
        var result = (parseFloat(pf_limits2.replace(pattern, '')) * parseFloat(pf_rate2.replace(pattern, '')) / 100);
        $("#pf_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pf_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pf_adp2 = $("#pf_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(pf_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Reinstatement Value Condition
    $("#rvc_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rvc_limits2 = $("#rvc_limits2").val(),
            rvc_rate2 = $("#rvc_rate2").val();
        var result = (parseFloat(rvc_limits2.replace(pattern, '')) * parseFloat(rvc_rate2.replace(pattern, '')) / 100);
        $("#rvc_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rvc_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            rvc_adp2 = $("#rvc_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(rvc_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Plate Glass
    $("#pg_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pg_limits2 = $("#pg_limits2").val(),
            pg_rate2 = $("#pg_rate2").val();
        var result = (parseFloat(pg_limits2.replace(pattern, '')) * parseFloat(pg_rate2.replace(pattern, '')) / 100);
        $("#pg_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pg_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pg_adp2 = $("#pg_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(pg_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Automatic Reinstatement of Sum Insured
    $("#arsi_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var arsi_limits2 = $("#arsi_limits2").val(),
            arsi_rate2 = $("#arsi_rate2").val();
        var result = (parseFloat(arsi_limits2.replace(pattern, '')) * parseFloat(arsi_rate2.replace(pattern, '')) / 100);
        $("#arsi_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#arsi_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            arsi_adp2 = $("#arsi_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(arsi_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Surrounding Property
    $("#sp_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sp_limits2 = $("#sp_limits2").val(),
            sp_rate2 = $("#sp_rate2").val();
        var result = (parseFloat(sp_limits2.replace(pattern, '')) * parseFloat(sp_rate2.replace(pattern, '')) / 100);
        $("#sp_adp2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sp_rate2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            sp_adp2 = $("#sp_adp2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(sp_adp2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other
    $("#other_rate_fap").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fap = $("#other_si_fap").val(),
            other_rate_fap = $("#other_rate_fap").val();
        var result = (parseFloat(other_si_fap.replace(pattern, '')) * parseFloat(other_rate_fap.replace(pattern, '')) / 100);
        $("#other_prem_fap").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_fap").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_fap = $("#other_prem_fap").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(other_prem_fap.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 1
    $("#other_rate_fap1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fap1 = $("#other_si_fap1").val(),
            other_rate_fap1 = $("#other_rate_fap1").val();
        var result = (parseFloat(other_si_fap1.replace(pattern, '')) * parseFloat(other_rate_fap1.replace(pattern, '')) / 100);
        $("#other_prem_fap1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_fap1").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_fap1 = $("#other_prem_fap1").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(other_prem_fap1.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 2
    $("#other_rate_fap2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fap2 = $("#other_si_fap2").val(),
            other_rate_fap2 = $("#other_rate_fap2").val();
        var result = (parseFloat(other_si_fap2.replace(pattern, '')) * parseFloat(other_rate_fap2.replace(pattern, '')) / 100);
        $("#other_prem_fap2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_fap2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_fap2 = $("#other_prem_fap2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(other_prem_fap2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 3
    $("#other_rate_fap3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fap3 = $("#other_si_fap3").val(),
            other_rate_fap3 = $("#other_rate_fap3").val();
        var result = (parseFloat(other_si_fap3.replace(pattern, '')) * parseFloat(other_rate_fap3.replace(pattern, '')) / 100);
        $("#other_prem_fap3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_fap3").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_fap3 = $("#other_prem_fap3").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(other_prem_fap3.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 4
    $("#other_rate_fap4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fap4 = $("#other_si_fap4").val(),
            other_rate_fap4 = $("#other_rate_fap4").val();
        var result = (parseFloat(other_si_fap4.replace(pattern, '')) * parseFloat(other_rate_fap4.replace(pattern, '')) / 100);
        $("#other_prem_fap4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_fap4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_fap4 = $("#other_prem_fap4").val(),
            tap_adp2 = $("#tap_adp2").val(),
            tapRes = (parseFloat(other_prem_fap4.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#tap_adp2").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem2 = $("#dp_prem2").val(),
            tap_adp2 = $("#tap_adp2").val(),
            extResult = (parseFloat(dp_prem2.replace(pattern, '')) + parseFloat(tap_adp2.replace(pattern, '')));
        $("#netp_adp2").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Collapse
    $("#collapse_rate2").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            collapse_limits2 = $("#collapse_limits2").val(),
            collapse_rate2 = $("#collapse_rate2").val(),
            apResult = (parseFloat(collapse_limits2.replace(pattern, '')) * parseFloat(collapse_rate2.replace(pattern, '')) / 100);
        $("#collapse_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Adding to Annual Premium
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp2 = $("#netp_adp2").val(),
            collapse_adp2 = $("#collapse_adp2").val(),
            tpResult = (parseFloat(netp_adp2.replace(pattern, '')) + parseFloat(collapse_adp2.replace(pattern, '')));
        $("#totp_adp2").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nlResult = (parseFloat(totp_adp2.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp2").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp2 = $("#totp_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            cf_adp2 = $("#cf_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Certificate Fee ...
    $("#cf_adp2").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            cf_adp2 = $("#cf_adp2").val(),
            nicl_adp2 = $("#nicl_adp2").val(),
            totp_adp2 = $("#totp_adp2").val(),
            apResult = (parseFloat(totp_adp2.replace(pattern, '')) + parseFloat(nicl_adp2.replace(pattern, '')) + parseFloat(cf_adp2.replace(pattern, '')));
        $("#aa_ap_adp2").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    //// Summing Total Sum Insured  
    $("#building_si2").on("blur", () => {
        var pattern = /[^0-9.-]+/g;
        var building_si2 = $("#building_si2").val();
        $("#tsibp_si2").val(building_si2.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#fencewall1_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    // $("#gate_si2").on("blur", () => {
    //     var sum = 0,
    //         pattern = /[^0-9.-]+/g,
    //         building_si2 = $("#building_si2").val(),
    //         fencewall1_si = $("#fencewall1_si").val(),
    //         gate_si2 = $("#gate_si2").val(),
    //         sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(gate_si2.replace(pattern, '')));
    //     $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })
    $("#fff_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#furnish_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#eea_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#hg_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            hg_si2 = $("#hg_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')) + parseFloat(hg_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pe_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            hg_si2 = $("#hg_si2").val(),
            pe_si = $("#pe_si").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')) + parseFloat(hg_si2.replace(pattern, '')) + parseFloat(pe_si.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#cl_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            hg_si2 = $("#hg_si2").val(),
            pe_si = $("#pe_si").val(),
            cl_si2 = $("#cl_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')) + parseFloat(hg_si2.replace(pattern, '')) + parseFloat(pe_si.replace(pattern, '')) + parseFloat(cl_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pm_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            hg_si2 = $("#hg_si2").val(),
            pe_si = $("#pe_si").val(),
            cl_si2 = $("#cl_si2").val(),
            pm_si2 = $("#pm_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')) + parseFloat(hg_si2.replace(pattern, '')) + parseFloat(pe_si.replace(pattern, '')) + parseFloat(cl_si2.replace(pattern, '')) + parseFloat(pm_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sit_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            hg_si2 = $("#hg_si2").val(),
            pe_si = $("#pe_si").val(),
            cl_si2 = $("#cl_si2").val(),
            pm_si2 = $("#pm_si2").val(),
            sit_si2 = $("#sit_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')) + parseFloat(hg_si2.replace(pattern, '')) + parseFloat(pe_si.replace(pattern, '')) + parseFloat(cl_si2.replace(pattern, '')) + parseFloat(pm_si2.replace(pattern, '')) + parseFloat(sit_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#oc_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si2 = $("#building_si2").val(),
            fencewall1_si = $("#fencewall1_si").val(),
            fff_si2 = $("#fff_si2").val(),
            furnish_si2 = $("#furnish_si2").val(),
            eea_si2 = $("#eea_si2").val(),
            hg_si2 = $("#hg_si2").val(),
            pe_si = $("#pe_si").val(),
            cl_si2 = $("#cl_si2").val(),
            pm_si2 = $("#pm_si2").val(),
            sit_si2 = $("#sit_si2").val(),
            oc_si2 = $("#oc_si2").val(),
            sum = (parseFloat(building_si2.replace(pattern, '')) + parseFloat(fencewall1_si.replace(pattern, '')) + parseFloat(fff_si2.replace(pattern, '')) + parseFloat(furnish_si2.replace(pattern, '')) + parseFloat(eea_si2.replace(pattern, '')) + parseFloat(hg_si2.replace(pattern, '')) + parseFloat(pe_si.replace(pattern, '')) + parseFloat(cl_si2.replace(pattern, '')) + parseFloat(pm_si2.replace(pattern, '')) + parseFloat(sit_si2.replace(pattern, '')) + parseFloat(oc_si2.replace(pattern, '')));
        $("#tsibp_si2").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })


});


////CALCULATIONS FOR HOME INSURANCE QUOTATION FIELD ////////
$(document).ready(function () {
    ///// Building (s)
    $("#building_rate3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_si3 = $("#building_si3").val(),
            building_rate3 = $("#building_rate3").val();
        var result = (parseFloat(building_si3.replace(pattern, '')) * parseFloat(building_rate3.replace(pattern, '')) / 100);
        $("#building_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#building_rate3").on("blur", () => {
        var building_prem3 = $("#building_prem3").val();
        $("#tsibp_prem3").val(building_prem3); //Value of PREMIUM = TOTAL SUM INSURED/BASIC PREMIUM
        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si3 = $("#fea_dscut_si3").val(),
            tsibp_prem3 = $("#tsibp_prem3").val();
        var feaResult = (parseFloat(fea_dscut_si3.replace(pattern, '')) * parseFloat(tsibp_prem3.replace(pattern, '')) / 100);
        $("#fea_dscut_prem3").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem3 = $("#tsibp_prem3").val(),
            fea_dscut_prem3 = $("#fea_dscut_prem3").val();
        var feaSub = (parseFloat(tsibp_prem3.replace(pattern, '')) - parseFloat(fea_dscut_prem3.replace(pattern, '')));
        $("#fea_dscut_prem33").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si3 = $("#hd_si3").val(),
            fea_dscut_prem33 = $("#fea_dscut_prem33").val();
        var hydResult = (parseFloat(hd_si3.replace(pattern, '')) * parseFloat(fea_dscut_prem33.replace(pattern, '')) / 100);
        $("#hd_prem3").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem33 = $("#fea_dscut_prem33").val(),
            hd_prem3 = $("#hd_prem3").val();
        var hydSub = (parseFloat(fea_dscut_prem33.replace(pattern, '')) - parseFloat(hd_prem3.replace(pattern, '')));
        $("#hd3_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd3_prem = $("#hd3_prem").val(),
            ltad_si3 = $("#ltad_si3").val();
        var ltaResult = (parseFloat(hd3_prem.replace(pattern, '')) * parseFloat(ltad_si3.replace(pattern, '')) / 100);
        $("#ltad_prem3").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem3 = $("#ltad_prem3").val(),
            hd3_prem = $("#hd3_prem").val();
        var ltaSub = (parseFloat(hd3_prem.replace(pattern, '')) - parseFloat(ltad_prem3.replace(pattern, '')));
        $("#dp_prem3").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Fence Wall
    $("#fencewall2_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fencewall2_si = $("#fencewall2_si").val(),
            fencewall2_rate = $("#fencewall2_rate").val();
        var result = (parseFloat(fencewall2_si.replace(pattern, '')) * parseFloat(fencewall2_rate.replace(pattern, '')) / 100);
        $("#fencewall2_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#fencewall2_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem3 = $("#building_prem3").val(),
            fencewall2_prem = $("#fencewall2_prem").val();
        var result = (parseFloat(building_prem3.replace(pattern, '')) + parseFloat(fencewall2_prem.replace(pattern, '')));
        $("#tsibp_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si3 = $("#fea_dscut_si3").val(),
            tsibp_prem3 = $("#tsibp_prem3").val();
        var feaResult = (parseFloat(fea_dscut_si3.replace(pattern, '')) * parseFloat(tsibp_prem3.replace(pattern, '')) / 100);
        $("#fea_dscut_prem3").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem3 = $("#tsibp_prem3").val(),
            fea_dscut_prem3 = $("#fea_dscut_prem3").val();
        var feaSub = (parseFloat(tsibp_prem3.replace(pattern, '')) - parseFloat(fea_dscut_prem3.replace(pattern, '')));
        $("#fea_dscut_prem33").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si3 = $("#hd_si3").val(),
            fea_dscut_prem33 = $("#fea_dscut_prem33").val();
        var hydResult = (parseFloat(hd_si3.replace(pattern, '')) * parseFloat(fea_dscut_prem33.replace(pattern, '')) / 100);
        $("#hd_prem3").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem33 = $("#fea_dscut_prem33").val(),
            hd_prem3 = $("#hd_prem3").val();
        var hydSub = (parseFloat(fea_dscut_prem33.replace(pattern, '')) - parseFloat(hd_prem3.replace(pattern, '')));
        $("#hd3_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd3_prem = $("#hd3_prem").val(),
            ltad_si3 = $("#ltad_si3").val();
        var ltaResult = (parseFloat(hd3_prem.replace(pattern, '')) * parseFloat(ltad_si3.replace(pattern, '')) / 100);
        $("#ltad_prem3").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem3 = $("#ltad_prem3").val(),
            hd3_prem = $("#hd3_prem").val();
        var ltaSub = (parseFloat(hd3_prem.replace(pattern, '')) - parseFloat(ltad_prem3.replace(pattern, '')));
        $("#dp_prem3").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    // /////   Gate (s)     
    // $("#gate_rate3").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var gate_si3 = $("#gate_si3").val(),
    //         gate_rate3 = $("#gate_rate3").val();
    //     var result = (parseFloat(gate_si3.replace(pattern, '')) * parseFloat(gate_rate3.replace(pattern, '')) / 100);
    //     $("#gate_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    // })
    // $("#gate_rate3").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var gate_prem3 = $("#gate_prem3").val(),
    //         building_prem3 = $("#building_prem3").val(),
    //         fencewall2_prem = $("#fencewall2_prem").val();
    //     var result = (parseFloat(building_prem3.replace(pattern, '')) + parseFloat(fencewall2_prem.replace(pattern, '')) + parseFloat(gate_prem3.replace(pattern, '')));
    //     $("#tsibp_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    //     ///// FEA Discount
    //     var feaResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         fea_dscut_si3 = $("#fea_dscut_si3").val(),
    //         tsibp_prem3 = $("#tsibp_prem3").val();
    //     var feaResult = (parseFloat(fea_dscut_si3.replace(pattern, '')) * parseFloat(tsibp_prem3.replace(pattern, '')) / 100);
    //     $("#fea_dscut_prem3").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var feaSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem3 = $("#tsibp_prem3").val(),
    //         fea_dscut_prem3 = $("#fea_dscut_prem3").val();
    //     var feaSub = (parseFloat(tsibp_prem3.replace(pattern, '')) - parseFloat(fea_dscut_prem3.replace(pattern, '')));
    //     $("#fea_dscut_prem33").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     ///// Hydrant Discount
    //     var hydResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         hd_si3 = $("#hd_si3").val(),
    //         tsibp_prem3 = $("#tsibp_prem3").val();
    //     var hydResult = (parseFloat(hd_si3.replace(pattern, '')) * parseFloat(tsibp_prem3.replace(pattern, '')) / 100);
    //     $("#hd_prem3").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var hydSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         fea_dscut_prem33 = $("#fea_dscut_prem33").val(),
    //         hd_prem3 = $("#hd_prem3").val();
    //     var hydSub = (parseFloat(fea_dscut_prem33.replace(pattern, '')) - parseFloat(hd_prem3.replace(pattern, '')));
    //     $("#hd3_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     ///// LTA Discount
    //     var ltaResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem3 = $("#tsibp_prem3").val(),
    //         ltad_si3 = $("#ltad_si3").val();
    //     var ltaResult = (parseFloat(tsibp_prem3.replace(pattern, '')) * parseFloat(ltad_si3.replace(pattern, '')) / 100);
    //     $("#ltad_prem3").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var ltaSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         ltad_prem3 = $("#ltad_prem3").val(),
    //         hd3_prem = $("#hd3_prem").val();
    //     var ltaSub = (parseFloat(hd3_prem.replace(pattern, '')) - parseFloat(ltad_prem3.replace(pattern, '')));
    //     $("#dp_prem3").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

    //     // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
    //     var extResult = 0,
    //         dp_prem3 = $("#dp_prem3").val(),
    //         tap_adp3 = $("#tap_adp3").val(),
    //         extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
    //     $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var tpResult = 0,
    //         netp_adp3 = $("#netp_adp3").val(),
    //         collapse_adp3 = $("#collapse_adp3").val(),
    //         tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
    //     $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var nlResult = 0,
    //         onePersnt = 1,
    //         totp_adp3 = $("#totp_adp3").val(),
    //         nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
    //     $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
    //     var apResult = 0,
    //         totp_adp3 = $("#totp_adp3").val(),
    //         nicl_adp3 = $("#nicl_adp3").val(),
    //         cf_adp3 = $("#cf_adp3").val(),
    //         apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
    //     $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })

    /////  Household Goods     
    $("#hg_rate3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var hg_si3 = $("#hg_si3").val(),
            hg_rate3 = $("#hg_rate3").val();
        var result = (parseFloat(hg_si3.replace(pattern, '')) * parseFloat(hg_rate3.replace(pattern, '')) / 100);
        $("#hg_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#hg_rate3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var hg_prem3 = $("#hg_prem3").val(),
            building_prem3 = $("#building_prem3").val(),
            fencewall2_prem = $("#fencewall2_prem").val();
        var result = (parseFloat(hg_prem3.replace(pattern, '')) + parseFloat(building_prem3.replace(pattern, '')) + parseFloat(fencewall2_prem.replace(pattern, '')));
        $("#tsibp_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si3 = $("#fea_dscut_si3").val(),
            tsibp_prem3 = $("#tsibp_prem3").val();
        var feaResult = (parseFloat(fea_dscut_si3.replace(pattern, '')) * parseFloat(tsibp_prem3.replace(pattern, '')) / 100);
        $("#fea_dscut_prem3").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem3 = $("#tsibp_prem3").val(),
            fea_dscut_prem3 = $("#fea_dscut_prem3").val();
        var feaSub = (parseFloat(tsibp_prem3.replace(pattern, '')) - parseFloat(fea_dscut_prem3.replace(pattern, '')));
        $("#fea_dscut_prem33").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si3 = $("#hd_si3").val(),
            fea_dscut_prem33 = $("#fea_dscut_prem33").val();
        var hydResult = (parseFloat(hd_si3.replace(pattern, '')) * parseFloat(fea_dscut_prem33.replace(pattern, '')) / 100);
        $("#hd_prem3").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem33 = $("#fea_dscut_prem33").val(),
            hd_prem3 = $("#hd_prem3").val();
        var hydSub = (parseFloat(fea_dscut_prem33.replace(pattern, '')) - parseFloat(hd_prem3.replace(pattern, '')));
        $("#hd3_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd3_prem = $("#hd3_prem").val(),
            ltad_si3 = $("#ltad_si3").val();
        var ltaResult = (parseFloat(hd3_prem.replace(pattern, '')) * parseFloat(ltad_si3.replace(pattern, '')) / 100);
        $("#ltad_prem3").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem3 = $("#ltad_prem3").val(),
            hd3_prem = $("#hd3_prem").val();
        var ltaSub = (parseFloat(hd3_prem.replace(pattern, '')) - parseFloat(ltad_prem3.replace(pattern, '')));
        $("#dp_prem3").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /////  Personal Effects     
    $("#pe_rate1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pe_si1 = $("#pe_si1").val(),
            pe_rate1 = $("#pe_rate1").val();
        var result = (parseFloat(pe_si1.replace(pattern, '')) * parseFloat(pe_rate1.replace(pattern, '')) / 100);
        $("#pe_prem1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#pe_rate1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var hg_prem3 = $("#hg_prem3").val(),
            building_prem3 = $("#building_prem3").val(),
            pe_prem1 = $("#pe_prem1").val(),
            fencewall2_prem = $("#fencewall2_prem").val();
        var result = (parseFloat(hg_prem3.replace(pattern, '')) + parseFloat(building_prem3.replace(pattern, '')) + parseFloat(fencewall2_prem.replace(pattern, '')) + parseFloat(pe_prem1.replace(pattern, '')));
        $("#tsibp_prem3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si3 = $("#fea_dscut_si3").val(),
            tsibp_prem3 = $("#tsibp_prem3").val();
        var feaResult = (parseFloat(fea_dscut_si3.replace(pattern, '')) * parseFloat(tsibp_prem3.replace(pattern, '')) / 100);
        $("#fea_dscut_prem3").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem3 = $("#tsibp_prem3").val(),
            fea_dscut_prem3 = $("#fea_dscut_prem3").val();
        var feaSub = (parseFloat(tsibp_prem3.replace(pattern, '')) - parseFloat(fea_dscut_prem3.replace(pattern, '')));
        $("#fea_dscut_prem33").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si3 = $("#hd_si3").val(),
            fea_dscut_prem33 = $("#fea_dscut_prem33").val();
        var hydResult = (parseFloat(hd_si3.replace(pattern, '')) * parseFloat(fea_dscut_prem33.replace(pattern, '')) / 100);
        $("#hd_prem3").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem33 = $("#fea_dscut_prem33").val(),
            hd_prem3 = $("#hd_prem3").val();
        var hydSub = (parseFloat(fea_dscut_prem33.replace(pattern, '')) - parseFloat(hd_prem3.replace(pattern, '')));
        $("#hd3_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd3_prem = $("#hd3_prem").val(),
            ltad_si3 = $("#ltad_si3").val();
        var ltaResult = (parseFloat(hd3_prem.replace(pattern, '')) * parseFloat(ltad_si3.replace(pattern, '')) / 100);
        $("#ltad_prem3").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem3 = $("#ltad_prem3").val(),
            hd3_prem = $("#hd3_prem").val();
        var ltaSub = (parseFloat(hd3_prem.replace(pattern, '')) - parseFloat(ltad_prem3.replace(pattern, '')));
        $("#dp_prem3").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    /// FOR THE EXTENDED SECTION
    ///// Personal Accident
    $("#pat_rate").on("blur", () => {
        var caRes = 0;
        var pattern = /[^0-9.-]+/g;
        var pat_limits = $("#pat_limits").val(),
            pat_rate = $("#pat_rate").val();
        var caRes = (parseFloat(pat_limits.replace(pattern, '')) * parseFloat(pat_rate.replace(pattern, '')) / 100);
        $("#pat_adp").val(caRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for ADDTITIONAL PREMIUM
    })
    $("#pat_rate").on("blur", () => {
        var pat_adp = $("#pat_adp").val();
        $("#tap_adp3").val(pat_adp);
    })
    $("#pat_rate").on("blur", () => {
        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Workmen's Compensation for Domestic Staff
    $("#wcds_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var wcds_limits = $("#wcds_limits").val(),
            wcds_rate = $("#wcds_rate").val();
        var result = (parseFloat(wcds_limits.replace(pattern, '')) * parseFloat(wcds_rate.replace(pattern, '')) / 100);
        $("#wcds_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#wcds_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            wcds_adp = $("#wcds_adp").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(wcds_adp.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Business Use Extension
    $("#bue_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var bue_limits = $("#bue_limits").val(),
            bue_rate = $("#bue_rate").val();
        var result = (parseFloat(bue_limits.replace(pattern, '')) * parseFloat(bue_rate.replace(pattern, '')) / 100);
        $("#bue_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#bue_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            bue_adp = $("#bue_adp").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(bue_adp.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Pedal Cycle
    $("#pc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pc_limits = $("#pc_limits").val(),
            pc_rate = $("#pc_rate").val();
        var result = (parseFloat(pc_limits.replace(pattern, '')) * parseFloat(pc_rate.replace(pattern, '')) / 100);
        $("#pc_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pc_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pc_adp = $("#pc_adp").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(pc_adp.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Additional Public Liability
    $("#apl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var apl_limits = $("#apl_limits").val(),
            apl_rate = $("#apl_rate").val();
        var result = (parseFloat(apl_limits.replace(pattern, '')) * parseFloat(apl_rate.replace(pattern, '')) / 100);
        $("#apl_adp").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#apl_rate").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            apl_adp = $("#apl_adp").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(apl_adp.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Plate Glass
    $("#pg_rate3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pg_limits3 = $("#pg_limits3").val(),
            pg_rate3 = $("#pg_rate3").val();
        var result = (parseFloat(pg_limits3.replace(pattern, '')) * parseFloat(pg_rate3.replace(pattern, '')) / 100);
        $("#pg_adp3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pg_rate3").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pg_adp3 = $("#pg_adp3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(pg_adp3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other
    $("#other_rate_hi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_hi = $("#other_si_hi").val(),
            other_rate_hi = $("#other_rate_hi").val();
        var result = (parseFloat(other_si_hi.replace(pattern, '')) * parseFloat(other_rate_hi.replace(pattern, '')) / 100);
        $("#other_prem_hi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_hi").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_hi = $("#other_prem_hi").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(other_prem_hi.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 1
    $("#other_rate_hi1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_hi1 = $("#other_si_hi1").val(),
            other_rate_hi1 = $("#other_rate_hi1").val();
        var result = (parseFloat(other_si_hi1.replace(pattern, '')) * parseFloat(other_rate_hi1.replace(pattern, '')) / 100);
        $("#other_prem_hi1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_hi1").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_hi1 = $("#other_prem_hi1").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(other_prem_hi1.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 2
    $("#other_rate_hi2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_hi2 = $("#other_si_hi2").val(),
            other_rate_hi2 = $("#other_rate_hi2").val();
        var result = (parseFloat(other_si_hi2.replace(pattern, '')) * parseFloat(other_rate_hi2.replace(pattern, '')) / 100);
        $("#other_prem_hi2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_hi2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_hi2 = $("#other_prem_hi2").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(other_prem_hi2.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 3
    $("#other_rate_hi3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_hi3 = $("#other_si_hi3").val(),
            other_rate_hi3 = $("#other_rate_hi3").val();
        var result = (parseFloat(other_si_hi3.replace(pattern, '')) * parseFloat(other_rate_hi3.replace(pattern, '')) / 100);
        $("#other_prem_hi3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_hi3").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_hi3 = $("#other_prem_hi3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(other_prem_hi3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other 4
    $("#other_rate_hi4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_hi4 = $("#other_si_hi4").val(),
            other_rate_hi4 = $("#other_rate_hi4").val();
        var result = (parseFloat(other_si_hi4.replace(pattern, '')) * parseFloat(other_rate_hi4.replace(pattern, '')) / 100);
        $("#other_prem_hi4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_hi4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_hi4 = $("#other_prem_hi4").val(),
            tap_adp3 = $("#tap_adp3").val(),
            tapRes = (parseFloat(other_prem_hi4.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#tap_adp3").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem3 = $("#dp_prem3").val(),
            tap_adp3 = $("#tap_adp3").val(),
            extResult = (parseFloat(dp_prem3.replace(pattern, '')) + parseFloat(tap_adp3.replace(pattern, '')));
        $("#netp_adp3").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Collapse
    $("#collapse_rate3").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            collapse_limits3 = $("#collapse_limits3").val(),
            collapse_rate3 = $("#collapse_rate3").val(),
            apResult = (parseFloat(collapse_limits3.replace(pattern, '')) * parseFloat(collapse_rate3.replace(pattern, '')) / 100);
        $("#collapse_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Adding to Annual Premium
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp3 = $("#netp_adp3").val(),
            collapse_adp3 = $("#collapse_adp3").val(),
            tpResult = (parseFloat(netp_adp3.replace(pattern, '')) + parseFloat(collapse_adp3.replace(pattern, '')));
        $("#totp_adp3").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nlResult = (parseFloat(totp_adp3.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp3").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp3 = $("#totp_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            cf_adp3 = $("#cf_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Certificate Fee ...
    $("#cf_adp3").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            cf_adp3 = $("#cf_adp3").val(),
            nicl_adp3 = $("#nicl_adp3").val(),
            totp_adp3 = $("#totp_adp3").val(),
            apResult = (parseFloat(totp_adp3.replace(pattern, '')) + parseFloat(nicl_adp3.replace(pattern, '')) + parseFloat(cf_adp3.replace(pattern, '')));
        $("#aa_ap_adp3").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    //// Summing Total Sum Insured  
    $("#building_si3").on("blur", () => {
        var building_si3 = $("#building_si3").val();
        $("#tsibp_si3").val(building_si3);
    })
    $("#fencewall2_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si3 = $("#building_si3").val(),
            fencewall2_si = $("#fencewall2_si").val(),
            sum = (parseFloat(building_si3.replace(pattern, '')) + parseFloat(fencewall2_si.replace(pattern, '')));
        $("#tsibp_si3").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#hg_si3").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si3 = $("#building_si3").val(),
            fencewall2_si = $("#fencewall2_si").val(),
            hg_si3 = $("#hg_si3").val(),
            sum = (parseFloat(building_si3.replace(pattern, '')) + parseFloat(fencewall2_si.replace(pattern, '')) + parseFloat(hg_si3.replace(pattern, '')));
        $("#tsibp_si3").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pe_si1").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si3 = $("#building_si3").val(),
            fencewall2_si = $("#fencewall2_si").val(),
            hg_si3 = $("#hg_si3").val(),
            pe_si1 = $("#pe_si1").val(),
            sum = (parseFloat(building_si3.replace(pattern, '')) + parseFloat(fencewall2_si.replace(pattern, '')) + parseFloat(hg_si3.replace(pattern, '')) + parseFloat(pe_si1.replace(pattern, '')));
        $("#tsibp_si3").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })


});


/////CALCULATIONS COMBNINED FIRE & BURGLARY //////
$(document).ready(function () {
    ///// Building (s)
    $("#building_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_si4 = $("#building_si4").val(),
            building_rate4 = $("#building_rate4").val();
        var result = (parseFloat(building_si4.replace(pattern, '')) * parseFloat(building_rate4.replace(pattern, '')) / 100);
        $("#building_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#building_rate4").on("blur", () => {
        var building_prem4 = $("#building_prem4").val();
        $("#tsibp_prem4").val(building_prem4); //Value of PREMIUM = TOTAL SUM INSURED/BASIC PREMIUM
        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Fence Wall
    $("#fencewall_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fencewall_si4 = $("#fencewall_si4").val(),
            fencewall_rate4 = $("#fencewall_rate4").val();
        var result = (parseFloat(fencewall_si4.replace(pattern, '')) * parseFloat(fencewall_rate4.replace(pattern, '')) / 100);
        $("#fencewall_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#fencewall_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Gate(s)
    // $("#gate_rate4").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var gate_si4 = $("#gate_si4").val(),
    //         gate_rate4 = $("#gate_rate4").val();
    //     var result = (parseFloat(gate_si4.replace(pattern, '')) * parseFloat(gate_rate4.replace(pattern, '')) / 100);
    //     $("#gate_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    // })
    // $("#gate_rate4").on("blur", () => {
    //     var result = 0;
    //     var pattern = /[^0-9.-]+/g;
    //     var building_prem4 = $("#building_prem4").val(),
    //         fencewall_prem4 = $("#fencewall_prem4").val(),
    //         gate_prem4 = $("#gate_prem4").val();
    //     var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(gate_prem4.replace(pattern, '')));
    //     $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    //     ///// FEA Discount
    //     var feaResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         fea_dscut_si4 = $("#fea_dscut_si4").val(),
    //         tsibp_prem4 = $("#tsibp_prem4").val();
    //     var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
    //     $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var feaSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem4 = $("#tsibp_prem4").val(),
    //         fea_dscut_prem4 = $("#fea_dscut_prem4").val();
    //     var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
    //     $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     ///// Hydrant Discount
    //     var hydResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         hd_si4 = $("#hd_si4").val(),
    //         tsibp_prem4 = $("#tsibp_prem4").val();
    //     var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
    //     $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var hydSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
    //         hd_prem4 = $("#hd_prem4").val();
    //     var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
    //     $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     ///// LTA Discount
    //     var ltaResult = 0,
    //         pattern = /[^0-9.-]+/g,
    //         tsibp_prem4 = $("#tsibp_prem4").val(),
    //         ltad_si4 = $("#ltad_si4").val();
    //     var ltaResult = (parseFloat(tsibp_prem4.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
    //     $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     var ltaSub = 0,
    //         pattern = /[^0-9.-]+/g,
    //         ltad_prem4 = $("#ltad_prem4").val(),
    //         hd24_prem = $("#hd24_prem").val();
    //     var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
    //     $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

    //     // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
    //     var extResult = 0,
    //         dp_prem4 = $("#dp_prem4").val(),
    //         tap_adp4 = $("#tap_adp4").val(),
    //         extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
    //     $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var tpResult = 0,
    //         netp_adp4 = $("#netp_adp4").val(),
    //         collapse_adp4 = $("#collapse_adp4").val(),
    //         tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
    //     $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
    //     var nlResult = 0,
    //         onePersnt = 1,
    //         totp_adp44 = $("#totp_adp44").val(),
    //         nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
    //     $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    //     // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
    //     var apResult = 0,
    //         totp_adp44 = $("#totp_adp44").val(),
    //         nicl_adp4 = $("#nicl_adp4").val(),
    //         cf_adp4 = $("#cf_adp4").val(),
    //         apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
    //     $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    // })

    ///// Furniture, Fixtures &amp; Fittings
    $("#fff_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fff_si4 = $("#fff_si4").val(),
            fff_rate4 = $("#fff_rate4").val();
        var result = (parseFloat(fff_si4.replace(pattern, '')) * parseFloat(fff_rate4.replace(pattern, '')) / 100);
        $("#fff_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#fff_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Furnishings
    $("#furnish_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var furnish_si4 = $("#furnish_si4").val(),
            furnish_rate4 = $("#furnish_rate4").val();
        var result = (parseFloat(furnish_si4.replace(pattern, '')) * parseFloat(furnish_rate4.replace(pattern, '')) / 100);
        $("#furnish_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#furnish_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Electronic Equipment/Appliances
    $("#eea_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var eea_si4 = $("#eea_si4").val(),
            eea_rate4 = $("#eea_rate4").val();
        var result = (parseFloat(eea_si4.replace(pattern, '')) * parseFloat(eea_rate4.replace(pattern, '')) / 100);
        $("#eea_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#eea_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Household Goods
    $("#hg_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var hg_si4 = $("#hg_si4").val(),
            hg_rate4 = $("#hg_rate4").val();
        var result = (parseFloat(hg_si4.replace(pattern, '')) * parseFloat(hg_rate4.replace(pattern, '')) / 100);
        $("#hg_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#hg_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Personal Effects
    $("#pe_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pe_si2 = $("#pe_si2").val(),
            pe_rate2 = $("#pe_rate2").val();
        var result = (parseFloat(pe_si2.replace(pattern, '')) * parseFloat(pe_rate2.replace(pattern, '')) / 100);
        $("#pe_prem2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#pe_rate2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Computers/Laptops
    $("#cl_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cl_si4 = $("#cl_si4").val(),
            cl_rate4 = $("#cl_rate4").val();
        var result = (parseFloat(cl_si4.replace(pattern, '')) * parseFloat(cl_rate4.replace(pattern, '')) / 100);
        $("#cl_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#cl_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Plant &amp; Machinery
    $("#pm_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pm_si4 = $("#pm_si4").val(),
            pm_rate4 = $("#pm_rate4").val();
        var result = (parseFloat(pm_si4.replace(pattern, '')) * parseFloat(pm_rate4.replace(pattern, '')) / 100);
        $("#pm_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#pm_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val(),
            pm_prem4 = $("#pm_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')) + parseFloat(pm_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Stock-in-Trade
    $("#sit_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sit_si4 = $("#sit_si4").val(),
            sit_rate4 = $("#sit_rate4").val();
        var result = (parseFloat(sit_si4.replace(pattern, '')) * parseFloat(sit_rate4.replace(pattern, '')) / 100);
        $("#sit_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#sit_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val(),
            pm_prem4 = $("#pm_prem4").val(),
            sit_prem4 = $("#sit_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')) + parseFloat(pm_prem4.replace(pattern, '')) + parseFloat(sit_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Finished Goods
    $("#fg_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fg_si = $("#fg_si").val(),
            fg_rate = $("#fg_rate").val();
        var result = (parseFloat(fg_si.replace(pattern, '')) * parseFloat(fg_rate.replace(pattern, '')) / 100);
        $("#fg_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#fg_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val(),
            pm_prem4 = $("#pm_prem4").val(),
            sit_prem4 = $("#sit_prem4").val(),
            fg_prem = $("#fg_prem").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')) + parseFloat(pm_prem4.replace(pattern, '')) + parseFloat(sit_prem4.replace(pattern, '')) + parseFloat(fg_prem.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Work-In-Progress
    $("#wip_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var wip_si = $("#wip_si").val(),
            wip_rate = $("#wip_rate").val();
        var result = (parseFloat(wip_si.replace(pattern, '')) * parseFloat(wip_rate.replace(pattern, '')) / 100);
        $("#wip_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#wip_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val(),
            pm_prem4 = $("#pm_prem4").val(),
            sit_prem4 = $("#sit_prem4").val(),
            fg_prem = $("#fg_prem").val(),
            wip_prem = $("#wip_prem").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')) + parseFloat(pm_prem4.replace(pattern, '')) + parseFloat(sit_prem4.replace(pattern, '')) + parseFloat(fg_prem.replace(pattern, '')) + parseFloat(wip_prem.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Raw Materials
    $("#rm_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rm_si = $("#rm_si").val(),
            rm_rate = $("#rm_rate").val();
        var result = (parseFloat(rm_si.replace(pattern, '')) * parseFloat(rm_rate.replace(pattern, '')) / 100);
        $("#rm_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#rm_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val(),
            pm_prem4 = $("#pm_prem4").val(),
            sit_prem4 = $("#sit_prem4").val(),
            fg_prem = $("#fg_prem").val(),
            wip_prem = $("#wip_prem").val(),
            rm_prem = $("#rm_prem").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')) + parseFloat(pm_prem4.replace(pattern, '')) + parseFloat(sit_prem4.replace(pattern, '')) + parseFloat(fg_prem.replace(pattern, '')) + parseFloat(wip_prem.replace(pattern, '')) + parseFloat(rm_prem.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Other Contents
    $("#oc_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var oc_si4 = $("#oc_si4").val(),
            oc_rate4 = $("#oc_rate4").val();
        var result = (parseFloat(oc_si4.replace(pattern, '')) * parseFloat(oc_rate4.replace(pattern, '')) / 100);
        $("#oc_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for PREMIUM
    })
    $("#oc_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var building_prem4 = $("#building_prem4").val(),
            fencewall_prem4 = $("#fencewall_prem4").val(),
            fff_prem4 = $("#fff_prem4").val(),
            furnish_prem4 = $("#furnish_prem4").val(),
            eea_prem4 = $("#eea_prem4").val(),
            hg_prem4 = $("#hg_prem4").val(),
            pe_prem2 = $("#pe_prem2").val(),
            cl_prem4 = $("#cl_prem4").val(),
            pm_prem4 = $("#pm_prem4").val(),
            sit_prem4 = $("#sit_prem4").val(),
            fg_prem = $("#fg_prem").val(),
            wip_prem = $("#wip_prem").val(),
            rm_prem = $("#rm_prem").val(),
            oc_prem4 = $("#oc_prem4").val();
        var result = (parseFloat(building_prem4.replace(pattern, '')) + parseFloat(fencewall_prem4.replace(pattern, '')) + parseFloat(fff_prem4.replace(pattern, '')) + parseFloat(furnish_prem4.replace(pattern, '')) + parseFloat(eea_prem4.replace(pattern, '')) + parseFloat(hg_prem4.replace(pattern, '')) + parseFloat(pe_prem2.replace(pattern, '')) + parseFloat(cl_prem4.replace(pattern, '')) + parseFloat(pm_prem4.replace(pattern, '')) + parseFloat(sit_prem4.replace(pattern, '')) + parseFloat(fg_prem.replace(pattern, '')) + parseFloat(wip_prem.replace(pattern, '')) + parseFloat(rm_prem.replace(pattern, '')) + parseFloat(oc_prem4.replace(pattern, '')));
        $("#tsibp_prem4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        ///// FEA Discount
        var feaResult = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_si4 = $("#fea_dscut_si4").val(),
            tsibp_prem4 = $("#tsibp_prem4").val();
        var feaResult = (parseFloat(fea_dscut_si4.replace(pattern, '')) * parseFloat(tsibp_prem4.replace(pattern, '')) / 100);
        $("#fea_dscut_prem4").val(feaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var feaSub = 0,
            pattern = /[^0-9.-]+/g,
            tsibp_prem4 = $("#tsibp_prem4").val(),
            fea_dscut_prem4 = $("#fea_dscut_prem4").val();
        var feaSub = (parseFloat(tsibp_prem4.replace(pattern, '')) - parseFloat(fea_dscut_prem4.replace(pattern, '')));
        $("#fea_dscut_prem24").val(feaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Hydrant Discount
        var hydResult = 0,
            pattern = /[^0-9.-]+/g,
            hd_si4 = $("#hd_si4").val(),
            fea_dscut_prem24 = $("#fea_dscut_prem24").val();
        var hydResult = (parseFloat(hd_si4.replace(pattern, '')) * parseFloat(fea_dscut_prem24.replace(pattern, '')) / 100);
        $("#hd_prem4").val(hydResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var hydSub = 0,
            pattern = /[^0-9.-]+/g,
            fea_dscut_prem24 = $("#fea_dscut_prem24").val(),
            hd_prem4 = $("#hd_prem4").val();
        var hydSub = (parseFloat(fea_dscut_prem24.replace(pattern, '')) - parseFloat(hd_prem4.replace(pattern, '')));
        $("#hd24_prem").val(hydSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// LTA Discount
        var ltaResult = 0,
            pattern = /[^0-9.-]+/g,
            hd24_prem = $("#hd24_prem").val(),
            ltad_si4 = $("#ltad_si4").val();
        var ltaResult = (parseFloat(hd24_prem.replace(pattern, '')) * parseFloat(ltad_si4.replace(pattern, '')) / 100);
        $("#ltad_prem4").val(ltaResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        var ltaSub = 0,
            pattern = /[^0-9.-]+/g,
            ltad_prem4 = $("#ltad_prem4").val(),
            hd24_prem = $("#hd24_prem").val();
        var ltaSub = (parseFloat(hd24_prem.replace(pattern, '')) - parseFloat(ltad_prem4.replace(pattern, '')));
        $("#dp_prem4").val(ltaSub.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // The TOTAL VALUE OF DISCOUNT PREMIUM

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// FOR THE EXTENDED SECTION
    ///// Capital Additions
    $("#ca_rate4").on("blur", () => {
        var caRes = 0;
        var pattern = /[^0-9.-]+/g;
        var ca_limits4 = $("#ca_limits4").val(),
            ca_rate4 = $("#ca_rate4").val();
        var caRes = (parseFloat(ca_limits4.replace(pattern, '')) * parseFloat(ca_rate4.replace(pattern, '')) / 100);
        $("#ca_adp4").val(caRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value for ADDTITIONAL PREMIUM
    })
    $("#ca_rate4").on("blur", () => {
        var ca_adp4 = $("#ca_adp4").val();
        $("#tap_adp4").val(ca_adp4);
    })
    $("#ca_rate4").on("blur", () => {
        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING TOTAL PREMIUMS TO NIC LEVY FOR NIC RESULTS...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Temporal Removal
    $("#tr_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tr_limits4 = $("#tr_limits4").val(),
            tr_rate4 = $("#tr_rate4").val();
        var result = (parseFloat(tr_limits4.replace(pattern, '')) * parseFloat(tr_rate4.replace(pattern, '')) / 100);
        $("#tr_adp4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#tr_rate4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            tr_adp4 = $("#tr_adp4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(tr_adp4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Removal of Debris
    $("#rob_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rob_limits4 = $("#rob_limits4").val(),
            rob_rate4 = $("#rob_rate4").val();
        var result = (parseFloat(rob_limits4.replace(pattern, '')) * parseFloat(rob_rate4.replace(pattern, '')) / 100);
        $("#rob_adp4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rob_rate4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            rob_adp4 = $("#rob_adp4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(rob_adp4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Professional Fees
    $("#pf_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pf_limits4 = $("#pf_limits4").val(),
            pf_rate4 = $("#pf_rate4").val();
        var result = (parseFloat(pf_limits4.replace(pattern, '')) * parseFloat(pf_rate4.replace(pattern, '')) / 100);
        $("#pf_adp4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pf_rate4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pf_adp4 = $("#pf_adp4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(pf_adp4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Reinstatement Value Condition
    $("#rvc_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rvc_limits4 = $("#rvc_limits4").val(),
            rvc_rate4 = $("#rvc_rate4").val();
        var result = (parseFloat(rvc_limits4.replace(pattern, '')) * parseFloat(rvc_rate4.replace(pattern, '')) / 100);
        $("#rvc_adp4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rvc_rate4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            rvc_adp4 = $("#rvc_adp4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(rvc_adp4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Plate Glass
    $("#pg_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pg_limits4 = $("#pg_limits4").val(),
            pg_rate4 = $("#pg_rate4").val();
        var result = (parseFloat(pg_limits4.replace(pattern, '')) * parseFloat(pg_rate4.replace(pattern, '')) / 100);
        $("#pg_adp4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pg_rate4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            pg_adp4 = $("#pg_adp4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(pg_adp4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Automatic Reinstatement of Sum Insured
    $("#arsi_rate4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var arsi_limits4 = $("#arsi_limits4").val(),
            arsi_rate4 = $("#arsi_rate4").val();
        var result = (parseFloat(arsi_limits4.replace(pattern, '')) * parseFloat(arsi_rate4.replace(pattern, '')) / 100);
        $("#arsi_adp4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#arsi_rate4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            arsi_adp4 = $("#arsi_adp4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(arsi_adp4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other CFB
    $("#other_rate_cfb").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_cfb = $("#other_si_cfb").val(),
            other_rate_cfb = $("#other_rate_cfb").val();
        var result = (parseFloat(other_si_cfb.replace(pattern, '')) * parseFloat(other_rate_cfb.replace(pattern, '')) / 100);
        $("#other_prem_cfb").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_cfb").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_cfb = $("#other_prem_cfb").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(other_prem_cfb.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other CFB1
    $("#other_rate_cfb1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_cfb1 = $("#other_si_cfb1").val(),
            other_rate_cfb1 = $("#other_rate_cfb1").val();
        var result = (parseFloat(other_si_cfb1.replace(pattern, '')) * parseFloat(other_rate_cfb1.replace(pattern, '')) / 100);
        $("#other_prem_cfb1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_cfb1").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_cfb1 = $("#other_prem_cfb1").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(other_prem_cfb1.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other CFB2
    $("#other_rate_cfb2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_cfb2 = $("#other_si_cfb2").val(),
            other_rate_cfb2 = $("#other_rate_cfb2").val();
        var result = (parseFloat(other_si_cfb2.replace(pattern, '')) * parseFloat(other_rate_cfb2.replace(pattern, '')) / 100);
        $("#other_prem_cfb2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_cfb2").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_cfb2 = $("#other_prem_cfb2").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(other_prem_cfb2.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other CFB3
    $("#other_rate_cfb3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_cfb3 = $("#other_si_cfb3").val(),
            other_rate_cfb3 = $("#other_rate_cfb3").val();
        var result = (parseFloat(other_si_cfb3.replace(pattern, '')) * parseFloat(other_rate_cfb3.replace(pattern, '')) / 100);
        $("#other_prem_cfb3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_cfb3").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_cfb3 = $("#other_prem_cfb3").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(other_prem_cfb3.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Other CFB4
    $("#other_rate_cfb4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_cfb4 = $("#other_si_cfb4").val(),
            other_rate_cfb4 = $("#other_rate_cfb4").val();
        var result = (parseFloat(other_si_cfb4.replace(pattern, '')) * parseFloat(other_rate_cfb4.replace(pattern, '')) / 100);
        $("#other_prem_cfb4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_cfb4").on("blur", () => {
        var tapRes = 0,
            pattern = /[^0-9.-]+/g,
            other_prem_cfb4 = $("#other_prem_cfb4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            tapRes = (parseFloat(other_prem_cfb4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#tap_adp4").val(tapRes.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

        // ADDING DISCOUNT PREMIUM AND TOTAL ADD. PREMIUM...
        var extResult = 0,
            pattern = /[^0-9.-]+/g,
            dp_prem4 = $("#dp_prem4").val(),
            tap_adp4 = $("#tap_adp4").val(),
            extResult = (parseFloat(dp_prem4.replace(pattern, '')) + parseFloat(tap_adp4.replace(pattern, '')));
        $("#netp_adp4").val(extResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

    ///// Collapse
    $("#collapse_rate4").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            collapse_limits4 = $("#collapse_limits4").val(),
            collapse_rate4 = $("#collapse_rate4").val(),
            apResult = (parseFloat(collapse_limits4.replace(pattern, '')) * parseFloat(collapse_rate4.replace(pattern, '')) / 100);
        $("#collapse_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        ///// Adding to Annual Premium
        // ADDING NET PREMIUM AND COLLAPSE FOR TOTAL PREMIUM VALUE...
        var tpResult = 0,
            pattern = /[^0-9.-]+/g,
            netp_adp4 = $("#netp_adp4").val(),
            collapse_adp4 = $("#collapse_adp4").val(),
            tpResult = (parseFloat(netp_adp4.replace(pattern, '')) + parseFloat(collapse_adp4.replace(pattern, '')));
        $("#totp_adp44").val(tpResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // ADDING NET PREMIUM AND COLLAPS FOR TOTAL PREMIUM VALUE...
        var nlResult = 0,
            onePersnt = 1,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nlResult = (parseFloat(totp_adp44.replace(pattern, '')) * parseFloat(onePersnt / 100));
        $("#nicl_adp4").val(nlResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // SUMMING UP TOTAL PREMIUMS, NIC LEVY PERCNT & CERTIFICATE FEE...
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            totp_adp44 = $("#totp_adp44").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            cf_adp4 = $("#cf_adp4").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    ///// Certificate Fee ...
    $("#cf_adp4").on("blur", () => {
        var apResult = 0,
            pattern = /[^0-9.-]+/g,
            cf_adp4 = $("#cf_adp4").val(),
            nicl_adp4 = $("#nicl_adp4").val(),
            totp_adp44 = $("#totp_adp44").val(),
            apResult = (parseFloat(totp_adp44.replace(pattern, '')) + parseFloat(nicl_adp4.replace(pattern, '')) + parseFloat(cf_adp4.replace(pattern, '')));
        $("#aa_ap_adp4").val(apResult.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Summing Total Sum Insured  
    $("#building_si4").on("blur", () => {
        var building_si4 = $("#building_si4").val();
        $("#tsibp_si4").val(building_si4);
    })
    $("#fencewall_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#fff_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#furnish_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#eea_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#hg_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pe_si2").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#cl_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pm_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            pm_si4 = $("#pm_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')) + parseFloat(pm_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sit_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            pm_si4 = $("#pm_si4").val(),
            sit_si4 = $("#sit_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')) + parseFloat(pm_si4.replace(pattern, '')) + parseFloat(sit_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#fg_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            pm_si4 = $("#pm_si4").val(),
            sit_si4 = $("#sit_si4").val(),
            fg_si = $("#fg_si").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')) + parseFloat(pm_si4.replace(pattern, '')) + parseFloat(sit_si4.replace(pattern, '')) + parseFloat(fg_si.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#wip_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            pm_si4 = $("#pm_si4").val(),
            sit_si4 = $("#sit_si4").val(),
            fg_si = $("#fg_si").val(),
            wip_si = $("#wip_si").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')) + parseFloat(pm_si4.replace(pattern, '')) + parseFloat(sit_si4.replace(pattern, '')) + parseFloat(fg_si.replace(pattern, '')) + parseFloat(wip_si.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rm_si").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            pm_si4 = $("#pm_si4").val(),
            sit_si4 = $("#sit_si4").val(),
            fg_si = $("#fg_si").val(),
            wip_si = $("#wip_si").val(),
            rm_si = $("#rm_si").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')) + parseFloat(pm_si4.replace(pattern, '')) + parseFloat(sit_si4.replace(pattern, '')) + parseFloat(fg_si.replace(pattern, '')) + parseFloat(wip_si.replace(pattern, '')) + parseFloat(rm_si.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#oc_si4").on("blur", () => {
        var sum = 0,
            pattern = /[^0-9.-]+/g,
            building_si4 = $("#building_si4").val(),
            fencewall_si4 = $("#fencewall_si4").val(),
            fff_si4 = $("#fff_si4").val(),
            furnish_si4 = $("#furnish_si4").val(),
            eea_si4 = $("#eea_si4").val(),
            hg_si4 = $("#hg_si4").val(),
            pe_si2 = $("#pe_si2").val(),
            cl_si4 = $("#cl_si4").val(),
            pm_si4 = $("#pm_si4").val(),
            sit_si4 = $("#sit_si4").val(),
            fg_si = $("#fg_si").val(),
            wip_si = $("#wip_si").val(),
            rm_si = $("#rm_si").val(),
            oc_si4 = $("#oc_si4").val(),
            sum = (parseFloat(building_si4.replace(pattern, '')) + parseFloat(fencewall_si4.replace(pattern, '')) + parseFloat(fff_si4.replace(pattern, '')) + parseFloat(furnish_si4.replace(pattern, '')) + parseFloat(eea_si4.replace(pattern, '')) + parseFloat(hg_si4.replace(pattern, '')) + parseFloat(pe_si2.replace(pattern, '')) + parseFloat(cl_si4.replace(pattern, '')) + parseFloat(pm_si4.replace(pattern, '')) + parseFloat(sit_si4.replace(pattern, '')) + parseFloat(fg_si.replace(pattern, '')) + parseFloat(wip_si.replace(pattern, '')) + parseFloat(rm_si.replace(pattern, '')) + parseFloat(oc_si4.replace(pattern, '')));
        $("#tsibp_si4").val(sum.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

});


/////CALCULATIONS PUBLIC LIABILITY //////
$(document).ready(function () {
    //// Operations -
    $("#operations_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var operations_si = $("#operations_si").val(),
            operations_rate = $("#operations_rate").val();
        var result = (parseFloat(operations_si.replace(pattern, '')) * parseFloat(operations_rate.replace(pattern, '')) / 100);
        $("#operations_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Operations PREMIUM
        //Subjecting Operations Premium Value to Basic Premium
        var operations_prem = $("#operations_prem").val();
        $("#bppl_prem").val(operations_prem);
        //Subjecting Operations Premium Value to Annual Premium
        var operations_prem = $("#operations_prem").val();
        $("#premium_engo_pl").val(operations_prem);
    })
    //// Per Incident
    $("#pi_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pi_si = $("#pi_si").val(),
            pi_rate = $("#pi_rate").val();
        var result = (parseFloat(pi_si.replace(pattern, '')) * parseFloat(pi_rate.replace(pattern, '')) / 100);
        $("#pi_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')));
        $("#bppl_prem").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Value to Basic Premium
        //Subjecting Operations Premium Value to Annual Premium
        var bppl_prem = $("#bppl_prem").val();
        $("#premium_engo_pl").val(bppl_prem);
    })
    //// Aggregate Limit of Liability
    $("#all_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var all_si = $("#all_si").val(),
            all_rate = $("#all_rate").val();
        var result = (parseFloat(all_si.replace(pattern, '')) * parseFloat(all_rate.replace(pattern, '')) / 100);
        $("#all_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')));
        $("#bppl_prem").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting Operations Premium Value to Annual Premium
        var bppl_prem = $("#bppl_prem").val();
        $("#premium_engo_pl").val(bppl_prem);
    })
    //// Product Liability
    $("#pl2_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pl2_si = $("#pl2_si").val(),
            pl2_rate = $("#pl2_rate").val();
        var result = (parseFloat(pl2_si.replace(pattern, '')) * parseFloat(pl2_rate.replace(pattern, '')) / 100);
        $("#pl2_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Product Liability PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Tenants Liability
    $("#tl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tl_si = $("#tl_si").val(),
            tl_rate = $("#tl_rate").val();
        var result = (parseFloat(tl_si.replace(pattern, '')) * parseFloat(tl_rate.replace(pattern, '')) / 100);
        $("#tl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Cross Liability
    $("#cll_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cll_si = $("#cll_si").val(),
            cll_rate = $("#cll_rate").val();
        var result = (parseFloat(cll_si.replace(pattern, '')) * parseFloat(cll_rate.replace(pattern, '')) / 100);
        $("#cll_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Cross Liability PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Waiver of subrogation
    $("#ws_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var ws_si = $("#ws_si").val(),
            ws_rate = $("#ws_rate").val();
        var result = (parseFloat(ws_si.replace(pattern, '')) * parseFloat(ws_rate.replace(pattern, '')) / 100);
        $("#ws_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Waiver of subrogation PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val(),
            ws_prem = $("#ws_prem").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')) + parseFloat(ws_prem.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other Pl
    $("#other_rate_pl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pl = $("#other_si_pl").val(),
            other_rate_pl = $("#other_rate_pl").val();
        var result = (parseFloat(other_si_pl.replace(pattern, '')) * parseFloat(other_rate_pl.replace(pattern, '')) / 100);
        $("#other_prem_pl").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Waiver of subrogation PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val(),
            ws_prem = $("#ws_prem").val(),
            other_prem_pl = $("#other_prem_pl").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')) + parseFloat(ws_prem.replace(pattern, '')) + parseFloat(other_prem_pl.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other Pl1
    $("#other_rate_pl1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pl1 = $("#other_si_pl1").val(),
            other_rate_pl1 = $("#other_rate_pl1").val();
        var result = (parseFloat(other_si_pl1.replace(pattern, '')) * parseFloat(other_rate_pl1.replace(pattern, '')) / 100);
        $("#other_prem_pl1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Waiver of subrogation PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val(),
            ws_prem = $("#ws_prem").val(),
            other_prem_pl = $("#other_prem_pl").val(),
            other_prem_pl1 = $("#other_prem_pl1").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')) + parseFloat(ws_prem.replace(pattern, '')) + parseFloat(other_prem_pl.replace(pattern, '')) + parseFloat(other_prem_pl1.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other Pl2
    $("#other_rate_pl2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pl2 = $("#other_si_pl2").val(),
            other_rate_pl2 = $("#other_rate_pl2").val();
        var result = (parseFloat(other_si_pl2.replace(pattern, '')) * parseFloat(other_rate_pl2.replace(pattern, '')) / 100);
        $("#other_prem_pl2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Waiver of subrogation PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val(),
            ws_prem = $("#ws_prem").val(),
            other_prem_pl = $("#other_prem_pl").val(),
            other_prem_pl1 = $("#other_prem_pl1").val(),
            other_prem_pl2 = $("#other_prem_pl2").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')) + parseFloat(ws_prem.replace(pattern, '')) + parseFloat(other_prem_pl.replace(pattern, '')) + parseFloat(other_prem_pl1.replace(pattern, '')) + parseFloat(other_prem_pl2.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other Pl3
    $("#other_rate_pl3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pl3 = $("#other_si_pl3").val(),
            other_rate_pl3 = $("#other_rate_pl3").val();
        var result = (parseFloat(other_si_pl3.replace(pattern, '')) * parseFloat(other_rate_pl3.replace(pattern, '')) / 100);
        $("#other_prem_pl3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Waiver of subrogation PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val(),
            ws_prem = $("#ws_prem").val(),
            other_prem_pl = $("#other_prem_pl").val(),
            other_prem_pl1 = $("#other_prem_pl1").val(),
            other_prem_pl2 = $("#other_prem_pl2").val(),
            other_prem_pl3 = $("#other_prem_pl3").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')) + parseFloat(ws_prem.replace(pattern, '')) + parseFloat(other_prem_pl.replace(pattern, '')) + parseFloat(other_prem_pl1.replace(pattern, '')) + parseFloat(other_prem_pl2.replace(pattern, '')) + parseFloat(other_prem_pl3.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other Pl4
    $("#other_rate_pl4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pl4 = $("#other_si_pl4").val(),
            other_rate_pl4 = $("#other_rate_pl4").val();
        var result = (parseFloat(other_si_pl4.replace(pattern, '')) * parseFloat(other_rate_pl4.replace(pattern, '')) / 100);
        $("#other_prem_pl4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Waiver of subrogation PREMIUM
        //Suming up to Annual Premium
        var operations_prem = $("#operations_prem").val(),
            pi_prem = $("#pi_prem").val(),
            all_prem = $("#all_prem").val(),
            pl2_prem = $("#pl2_prem").val(),
            tl_prem = $("#tl_prem").val(),
            cll_prem = $("#cll_prem").val(),
            ws_prem = $("#ws_prem").val(),
            other_prem_pl = $("#other_prem_pl").val(),
            other_prem_pl1 = $("#other_prem_pl1").val(),
            other_prem_pl2 = $("#other_prem_pl2").val(),
            other_prem_pl3 = $("#other_prem_pl3").val(),
            other_prem_pl4 = $("#other_prem_pl4").val();
        var add_r = (parseFloat(operations_prem.replace(pattern, '')) + parseFloat(pi_prem.replace(pattern, '')) + parseFloat(all_prem.replace(pattern, '')) + parseFloat(pl2_prem.replace(pattern, '')) + parseFloat(tl_prem.replace(pattern, '')) + parseFloat(cll_prem.replace(pattern, '')) + parseFloat(ws_prem.replace(pattern, '')) + parseFloat(other_prem_pl.replace(pattern, '')) + parseFloat(other_prem_pl1.replace(pattern, '')) + parseFloat(other_prem_pl2.replace(pattern, '')) + parseFloat(other_prem_pl3.replace(pattern, '')) + parseFloat(other_prem_pl4.replace(pattern, '')));
        $("#premium_engo_pl").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })

});


/////CALCULATIONS GENERAL LIABILITY //////
$(document).ready(function () {
    //// Public Liability
    $("#pl4gl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pl4gl_si = $("#pl4gl_si").val(),
            pl4gl_rate = $("#pl4gl_rate").val();
        var result = (parseFloat(pl4gl_si.replace(pattern, '')) * parseFloat(pl4gl_rate.replace(pattern, '')) / 100);
        $("#pl4gl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Operations PREMIUM
        //Subjecting Operations Premium Value to Basic Premium And Annual Premium
        var pl4gl_prem = $("#pl4gl_prem").val();
        $("#bppl4gl_prem").val(pl4gl_prem);
        var bppl4gl_prem = $("#bppl4gl_prem").val();
        $("#premium_engo_gl").val(bppl4gl_prem);
    })
    //// Product Liability
    $("#plt_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var plt_si = $("#plt_si").val(),
            plt_rate = $("#plt_rate").val();
        var result = (parseFloat(plt_si.replace(pattern, '')) * parseFloat(plt_rate.replace(pattern, '')) / 100);
        $("#plt_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Suming up to Annual Premium
        var pl4gl_prem = $("#pl4gl_prem").val(),
            plt_prem = $("#plt_prem").val();
        var add_r = (parseFloat(pl4gl_prem.replace(pattern, '')) + parseFloat(plt_prem.replace(pattern, '')));
        $("#bppl4gl_prem").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val();
        $("#premium_engo_gl").val(bppl4gl_prem);
    })
    //// Pollution Liability
    $("#plll_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var plll_si = $("#plll_si").val(),
            plll_rate = $("#plll_rate").val();
        var result = (parseFloat(plll_si.replace(pattern, '')) * parseFloat(plll_rate.replace(pattern, '')) / 100);
        $("#plll_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Suming up to Annual Premium
        var pl4gl_prem = $("#pl4gl_prem").val(),
            plt_prem = $("#plt_prem").val(),
            plll_prem = $("#plll_prem").val();
        var add_r = (parseFloat(pl4gl_prem.replace(pattern, '')) + parseFloat(plt_prem.replace(pattern, '')) + parseFloat(plll_prem.replace(pattern, '')));
        $("#bppl4gl_prem").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val();
        $("#premium_engo_gl").val(bppl4gl_prem);
    })
    //// Aggregate Limit of Liability
    $("#all4gl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var all4gl_si = $("#all4gl_si").val(),
            all4gl_rate = $("#all4gl_rate").val();
        var result = (parseFloat(all4gl_si.replace(pattern, '')) * parseFloat(all4gl_rate.replace(pattern, '')) / 100);
        $("#all4gl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Suming up to Annual Premium
        var pl4gl_prem = $("#pl4gl_prem").val(),
            plt_prem = $("#plt_prem").val(),
            plll_prem = $("#plll_prem").val(),
            all4gl_prem = $("#all4gl_prem").val();
        var add_r = (parseFloat(pl4gl_prem.replace(pattern, '')) + parseFloat(plt_prem.replace(pattern, '')) + parseFloat(plll_prem.replace(pattern, '')) + parseFloat(all4gl_prem.replace(pattern, '')));
        $("#bppl4gl_prem").val(add_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val();
        $("#premium_engo_gl").val(bppl4gl_prem);
    })
    //EXTENSIONS
    //// Product Liability
    $("#pl24pl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pl24pl_si = $("#pl24pl_si").val(),
            pl24pl_rate = $("#pl24pl_rate").val();
        var result = (parseFloat(pl24pl_si.replace(pattern, '')) * parseFloat(pl24pl_rate.replace(pattern, '')) / 100);
        $("#pl24pl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Product Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pl24pl_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Tenants Liability
    $("#tl4pl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tl4pl_si = $("#tl4pl_si").val(),
            tl4pl_rate = $("#tl4pl_rate").val();
        var result = (parseFloat(tl4pl_si.replace(pattern, '')) * parseFloat(tl4pl_rate.replace(pattern, '')) / 100);
        $("#tl4pl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#tl4pl_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Cross Liability
    $("#cl4pl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cl4pl_si = $("#cl4pl_si").val(),
            cl4pl_rate = $("#cl4pl_rate").val();
        var result = (parseFloat(cl4pl_si.replace(pattern, '')) * parseFloat(cl4pl_rate.replace(pattern, '')) / 100);
        $("#cl4pl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#cl4pl_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Waiver of subrogation
    $("#ws4pl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var ws4pl_si = $("#ws4pl_si").val(),
            ws4pl_rate = $("#ws4pl_rate").val();
        var result = (parseFloat(ws4pl_si.replace(pattern, '')) * parseFloat(ws4pl_rate.replace(pattern, '')) / 100);
        $("#ws4pl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#ws4pl_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Defective Workmanship
    $("#defw_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var defw_si = $("#defw_si").val(),
            defw_rate = $("#defw_rate").val();
        var result = (parseFloat(defw_si.replace(pattern, '')) * parseFloat(defw_rate.replace(pattern, '')) / 100);
        $("#defw_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#defw_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Pure Financial Loss
    $("#pfl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pfl_si = $("#pfl_si").val(),
            pfl_rate = $("#pfl_rate").val();
        var result = (parseFloat(pfl_si.replace(pattern, '')) * parseFloat(pfl_rate.replace(pattern, '')) / 100);
        $("#pfl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pfl_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Personal Injury
    $("#pig_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pig_si = $("#pig_si").val(),
            pig_rate = $("#pig_rate").val();
        var result = (parseFloat(pig_si.replace(pattern, '')) * parseFloat(pig_rate.replace(pattern, '')) / 100);
        $("#pig_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#pig_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Residual Employers Liability
    $("#rel_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rel_si = $("#rel_si").val(),
            rel_rate = $("#rel_rate").val();
        var result = (parseFloat(rel_si.replace(pattern, '')) * parseFloat(rel_rate.replace(pattern, '')) / 100);
        $("#rel_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#rel_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Statutory Legal Defense Costs
    $("#sldc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sldc_si = $("#sldc_si").val(),
            sldc_rate = $("#sldc_rate").val();
        var result = (parseFloat(sldc_si.replace(pattern, '')) * parseFloat(sldc_rate.replace(pattern, '')) / 100);
        $("#sldc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#sldc_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })

    //// Wrongful Arrest &amp; Defamation
    $("#wad_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var wad_si = $("#wad_si").val(),
            wad_rate = $("#wad_rate").val();
        var result = (parseFloat(wad_si.replace(pattern, '')) * parseFloat(wad_rate.replace(pattern, '')) / 100);
        $("#wad_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // Subjecting the Value to Annual Premium
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val(),
            wad_prem = $("#wad_prem").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')) + parseFloat(wad_prem.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#wad_rate").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })
    //// Other GL
    $("#other_rate_gl").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_gl = $("#other_si_gl").val(),
            other_rate_gl = $("#other_rate_gl").val();
        var result = (parseFloat(other_si_gl.replace(pattern, '')) * parseFloat(other_rate_gl.replace(pattern, '')) / 100);
        $("#other_prem_gl").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // 
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val(),
            wad_prem = $("#wad_prem").val(),
            other_prem_gl = $("#other_prem_gl").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')) + parseFloat(wad_prem.replace(pattern, '')) + parseFloat(other_prem_gl.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_gl").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })
    //// Other GL1
    $("#other_rate_gl1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_gl1 = $("#other_si_gl1").val(),
            other_rate_gl1 = $("#other_rate_gl1").val();
        var result = (parseFloat(other_si_gl1.replace(pattern, '')) * parseFloat(other_rate_gl1.replace(pattern, '')) / 100);
        $("#other_prem_gl1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // 
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val(),
            wad_prem = $("#wad_prem").val(),
            other_prem_gl = $("#other_prem_gl").val(),
            other_prem_gl1 = $("#other_prem_gl1").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')) + parseFloat(wad_prem.replace(pattern, '')) + parseFloat(other_prem_gl.replace(pattern, '')) + parseFloat(other_prem_gl1.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_gl1").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })
    //// Other GL2
    $("#other_rate_gl2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_gl2 = $("#other_si_gl2").val(),
            other_rate_gl2 = $("#other_rate_gl2").val();
        var result = (parseFloat(other_si_gl2.replace(pattern, '')) * parseFloat(other_rate_gl2.replace(pattern, '')) / 100);
        $("#other_prem_gl2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // 
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val(),
            wad_prem = $("#wad_prem").val(),
            other_prem_gl = $("#other_prem_gl").val(),
            other_prem_gl1 = $("#other_prem_gl1").val(),
            other_prem_gl2 = $("#other_prem_gl2").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')) + parseFloat(wad_prem.replace(pattern, '')) + parseFloat(other_prem_gl.replace(pattern, '')) + parseFloat(other_prem_gl1.replace(pattern, '')) + parseFloat(other_prem_gl2.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_gl2").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })
    //// Other GL3
    $("#other_rate_gl3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_gl3 = $("#other_si_gl3").val(),
            other_rate_gl3 = $("#other_rate_gl3").val();
        var result = (parseFloat(other_si_gl3.replace(pattern, '')) * parseFloat(other_rate_gl3.replace(pattern, '')) / 100);
        $("#other_prem_gl3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // 
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val(),
            wad_prem = $("#wad_prem").val(),
            other_prem_gl = $("#other_prem_gl").val(),
            other_prem_gl1 = $("#other_prem_gl1").val(),
            other_prem_gl2 = $("#other_prem_gl2").val(),
            other_prem_gl3 = $("#other_prem_gl3").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')) + parseFloat(wad_prem.replace(pattern, '')) + parseFloat(other_prem_gl.replace(pattern, '')) + parseFloat(other_prem_gl1.replace(pattern, '')) + parseFloat(other_prem_gl2.replace(pattern, '')) + parseFloat(other_prem_gl3.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_gl3").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })
    //// Other GL4
    $("#other_rate_gl4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_gl4 = $("#other_si_gl4").val(),
            other_rate_gl4 = $("#other_rate_gl4").val();
        var result = (parseFloat(other_si_gl4.replace(pattern, '')) * parseFloat(other_rate_gl4.replace(pattern, '')) / 100);
        $("#other_prem_gl4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Tenants Liability PREMIUM
        // 
        var bppl4gl_prem = $("#bppl4gl_prem").val(),
            pl24pl_prem = $("#pl24pl_prem").val(),
            tl4pl_prem = $("#tl4pl_prem").val(),
            cl4pl_prem = $("#cl4pl_prem").val(),
            ws4pl_prem = $("#ws4pl_prem").val(),
            defw_prem = $("#defw_prem").val(),
            pfl_prem = $("#pfl_prem").val(),
            pig_prem = $("#pig_prem").val(),
            rel_prem = $("#rel_prem").val(),
            sldc_prem = $("#sldc_prem").val(),
            wad_prem = $("#wad_prem").val(),
            other_prem_gl = $("#other_prem_gl").val(),
            other_prem_gl1 = $("#other_prem_gl1").val(),
            other_prem_gl2 = $("#other_prem_gl2").val(),
            other_prem_gl3 = $("#other_prem_gl3").val();
        other_prem_gl4 = $("#other_prem_gl4").val();
        var ex_r = (parseFloat(bppl4gl_prem.replace(pattern, '')) + parseFloat(pl24pl_prem.replace(pattern, '')) + parseFloat(tl4pl_prem.replace(pattern, '')) + parseFloat(cl4pl_prem.replace(pattern, '')) + parseFloat(ws4pl_prem.replace(pattern, '')) + parseFloat(defw_prem.replace(pattern, '')) + parseFloat(pfl_prem.replace(pattern, '')) + parseFloat(pig_prem.replace(pattern, '')) + parseFloat(rel_prem.replace(pattern, '')) + parseFloat(sldc_prem.replace(pattern, '')) + parseFloat(wad_prem.replace(pattern, '')) + parseFloat(other_prem_gl.replace(pattern, '')) + parseFloat(other_prem_gl1.replace(pattern, '')) + parseFloat(other_prem_gl2.replace(pattern, '')) + parseFloat(other_prem_gl3.replace(pattern, '')) + parseFloat(other_prem_gl4.replace(pattern, '')));
        $("#premium_engo_gl").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    $("#other_rate_gl4").on("blur", () => {
        var premium_engo_gl = $("#premium_engo_gl").val();
        $("#tapg_prem").val(premium_engo_gl);
    })
});


////CALCULATIONS ON DIRECTORS' & OFFICERS LIABILITY
$(document).ready(function () {
    //// All Directors &amp; Officers of the company
    $("#adoc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var adoc_si = $("#adoc_si").val(),
            adoc_rate = $("#adoc_rate").val();
        var result = (parseFloat(adoc_si.replace(pattern, '')) * parseFloat(adoc_rate.replace(pattern, '')) / 100);
        $("#adoc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //All Directors &amp; Officers PREMIUM
        //Subjecting to Annual Premium
        var adoc_prem = $("#adoc_prem").val();
        $("#ap4do_prem").val(adoc_prem);
    })
    //// Limit Per Director
    $("#lpd_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var lpd_si = $("#lpd_si").val(),
            lpd_rate = $("#lpd_rate").val();
        var result = (parseFloat(lpd_si.replace(pattern, '')) * parseFloat(lpd_rate.replace(pattern, '')) / 100);
        $("#lpd_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //All Directors &amp; Officers PREMIUM
        //Subjecting to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Per Incident
    $("#peri_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var peri_si = $("#peri_si").val(),
            peri_rate = $("#peri_rate").val();
        var result = (parseFloat(peri_si.replace(pattern, '')) * parseFloat(peri_rate.replace(pattern, '')) / 100);
        $("#peri_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Aggregate Limit of Liability
    $("#all3_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var all3_si = $("#all3_si").val(),
            all3_rate = $("#all3_rate").val();
        var result = (parseFloat(all3_si.replace(pattern, '')) * parseFloat(all3_rate.replace(pattern, '')) / 100);
        $("#all3_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val(),
            all3_prem = $("#all3_prem").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')) + parseFloat(all3_prem.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others
    $("#other_rate_do").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_do = $("#other_si_do").val(),
            other_rate_do = $("#other_rate_do").val();
        var result = (parseFloat(other_si_do.replace(pattern, '')) * parseFloat(other_rate_do.replace(pattern, '')) / 100);
        $("#other_prem_do").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val(),
            all3_prem = $("#all3_prem").val(),
            other_prem_do = $("#other_prem_do").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')) + parseFloat(all3_prem.replace(pattern, '')) + parseFloat(other_prem_do.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others DO1
    $("#other_rate_do1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_do1 = $("#other_si_do1").val(),
            other_rate_do1 = $("#other_rate_do1").val();
        var result = (parseFloat(other_si_do1.replace(pattern, '')) * parseFloat(other_rate_do1.replace(pattern, '')) / 100);
        $("#other_prem_do1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val(),
            all3_prem = $("#all3_prem").val(),
            other_prem_do = $("#other_prem_do").val(),
            other_prem_do1 = $("#other_prem_do1").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')) + parseFloat(all3_prem.replace(pattern, '')) + parseFloat(other_prem_do.replace(pattern, '')) + parseFloat(other_prem_do1.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others DO2
    $("#other_rate_do2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_do2 = $("#other_si_do2").val(),
            other_rate_do2 = $("#other_rate_do2").val();
        var result = (parseFloat(other_si_do2.replace(pattern, '')) * parseFloat(other_rate_do2.replace(pattern, '')) / 100);
        $("#other_prem_do2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val(),
            all3_prem = $("#all3_prem").val(),
            other_prem_do = $("#other_prem_do").val(),
            other_prem_do1 = $("#other_prem_do1").val(),
            other_prem_do2 = $("#other_prem_do2").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')) + parseFloat(all3_prem.replace(pattern, '')) + parseFloat(other_prem_do.replace(pattern, '')) + parseFloat(other_prem_do1.replace(pattern, '')) + parseFloat(other_prem_do2.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others DO3
    $("#other_rate_do3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_do3 = $("#other_si_do3").val(),
            other_rate_do3 = $("#other_rate_do3").val();
        var result = (parseFloat(other_si_do3.replace(pattern, '')) * parseFloat(other_rate_do3.replace(pattern, '')) / 100);
        $("#other_prem_do3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val(),
            all3_prem = $("#all3_prem").val(),
            other_prem_do = $("#other_prem_do").val(),
            other_prem_do1 = $("#other_prem_do1").val(),
            other_prem_do2 = $("#other_prem_do2").val(),
            other_prem_do3 = $("#other_prem_do3").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')) + parseFloat(all3_prem.replace(pattern, '')) + parseFloat(other_prem_do.replace(pattern, '')) + parseFloat(other_prem_do1.replace(pattern, '')) + parseFloat(other_prem_do2.replace(pattern, '')) + parseFloat(other_prem_do3.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others DO4
    $("#other_rate_do4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_do4 = $("#other_si_do4").val(),
            other_rate_do4 = $("#other_rate_do4").val();
        var result = (parseFloat(other_si_do4.replace(pattern, '')) * parseFloat(other_rate_do4.replace(pattern, '')) / 100);
        $("#other_prem_do4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var lpd_prem = $("#lpd_prem").val(),
            adoc_prem = $("#adoc_prem").val(),
            peri_prem = $("#peri_prem").val(),
            all3_prem = $("#all3_prem").val(),
            other_prem_do = $("#other_prem_do").val(),
            other_prem_do1 = $("#other_prem_do1").val(),
            other_prem_do2 = $("#other_prem_do2").val(),
            other_prem_do3 = $("#other_prem_do3").val(),
            other_prem_do4 = $("#other_prem_do4").val();
        var ex_r = (parseFloat(lpd_prem.replace(pattern, '')) + parseFloat(adoc_prem.replace(pattern, '')) + parseFloat(peri_prem.replace(pattern, '')) + parseFloat(all3_prem.replace(pattern, '')) + parseFloat(other_prem_do.replace(pattern, '')) + parseFloat(other_prem_do1.replace(pattern, '')) + parseFloat(other_prem_do2.replace(pattern, '')) + parseFloat(other_prem_do3.replace(pattern, '')) + parseFloat(other_prem_do4.replace(pattern, '')));
        $("#ap4do_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
});


//// CALCULATIONS ON PROFESSIONAL INDEMNITY /////
$(document).ready(function () {
    //// All Professionals of a Business
    $("#apob_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var apob_si = $("#apob_si").val(),
            apob_rate = $("#apob_rate").val();
        var result = (parseFloat(apob_si.replace(pattern, '')) * parseFloat(apob_rate.replace(pattern, '')) / 100);
        $("#apob_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //All Professionals of a Business PREMIUM
        //Subjecting to Annual Premium
        var apob_prem = $("#apob_prem").val();
        $("#ap4pi_prem").val(apob_prem);
    })
    //// Per Occurrence Limit
    $("#pcl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pcl_si = $("#pcl_si").val(),
            pcl_rate = $("#pcl_rate").val();
        var result = (parseFloat(pcl_si.replace(pattern, '')) * parseFloat(pcl_rate.replace(pattern, '')) / 100);
        $("#pcl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Occurrence Limit PREMIUM
        //Subjecting to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Aggregate Limit of Liability
    $("#allpi_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var allpi_si = $("#allpi_si").val(),
            allpi_rate = $("#allpi_rate").val();
        var result = (parseFloat(allpi_si.replace(pattern, '')) * parseFloat(allpi_rate.replace(pattern, '')) / 100);
        $("#allpi_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val(),
            allpi_prem = $("#allpi_prem").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')) + parseFloat(allpi_prem.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others
    $("#other_rate_pi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pi = $("#other_si_pi").val(),
            other_rate_pi = $("#other_rate_pi").val();
        var result = (parseFloat(other_si_pi.replace(pattern, '')) * parseFloat(other_rate_pi.replace(pattern, '')) / 100);
        $("#other_prem_pi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val(),
            allpi_prem = $("#allpi_prem").val(),
            other_prem_pi = $("#other_prem_pi").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')) + parseFloat(allpi_prem.replace(pattern, '')) + parseFloat(other_prem_pi.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others PI1
    $("#other_rate_pi1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pi1 = $("#other_si_pi1").val(),
            other_rate_pi1 = $("#other_rate_pi1").val();
        var result = (parseFloat(other_si_pi1.replace(pattern, '')) * parseFloat(other_rate_pi1.replace(pattern, '')) / 100);
        $("#other_prem_pi1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val(),
            allpi_prem = $("#allpi_prem").val(),
            other_prem_pi = $("#other_prem_pi").val(),
            other_prem_pi1 = $("#other_prem_pi1").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')) + parseFloat(allpi_prem.replace(pattern, '')) + parseFloat(other_prem_pi.replace(pattern, '')) + parseFloat(other_prem_pi1.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others PI2
    $("#other_rate_pi2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pi2 = $("#other_si_pi2").val(),
            other_rate_pi2 = $("#other_rate_pi2").val();
        var result = (parseFloat(other_si_pi2.replace(pattern, '')) * parseFloat(other_rate_pi2.replace(pattern, '')) / 100);
        $("#other_prem_pi2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val(),
            allpi_prem = $("#allpi_prem").val(),
            other_prem_pi = $("#other_prem_pi").val(),
            other_prem_pi1 = $("#other_prem_pi1").val(),
            other_prem_pi2 = $("#other_prem_pi2").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')) + parseFloat(allpi_prem.replace(pattern, '')) + parseFloat(other_prem_pi.replace(pattern, '')) + parseFloat(other_prem_pi1.replace(pattern, '')) + parseFloat(other_prem_pi2.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others PI3
    $("#other_rate_pi3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pi3 = $("#other_si_pi3").val(),
            other_rate_pi3 = $("#other_rate_pi3").val();
        var result = (parseFloat(other_si_pi3.replace(pattern, '')) * parseFloat(other_rate_pi3.replace(pattern, '')) / 100);
        $("#other_prem_pi3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val(),
            allpi_prem = $("#allpi_prem").val(),
            other_prem_pi = $("#other_prem_pi").val(),
            other_prem_pi1 = $("#other_prem_pi1").val(),
            other_prem_pi2 = $("#other_prem_pi2").val(),
            other_prem_pi3 = $("#other_prem_pi3").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')) + parseFloat(allpi_prem.replace(pattern, '')) + parseFloat(other_prem_pi.replace(pattern, '')) + parseFloat(other_prem_pi1.replace(pattern, '')) + parseFloat(other_prem_pi2.replace(pattern, '')) + parseFloat(other_prem_pi3.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others PI4
    $("#other_rate_pi4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_pi4 = $("#other_si_pi4").val(),
            other_rate_pi4 = $("#other_rate_pi4").val();
        var result = (parseFloat(other_si_pi4.replace(pattern, '')) * parseFloat(other_rate_pi4.replace(pattern, '')) / 100);
        $("#other_prem_pi4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Incident PREMIUM
        //Summing up to Annual Premium
        var apob_prem = $("#apob_prem").val(),
            pcl_prem = $("#pcl_prem").val(),
            allpi_prem = $("#allpi_prem").val(),
            other_prem_pi = $("#other_prem_pi").val(),
            other_prem_pi1 = $("#other_prem_pi1").val(),
            other_prem_pi2 = $("#other_prem_pi2").val(),
            other_prem_pi3 = $("#other_prem_pi3").val(),
            other_prem_pi4 = $("#other_prem_pi4").val();
        var ex_r = (parseFloat(apob_prem.replace(pattern, '')) + parseFloat(pcl_prem.replace(pattern, '')) + parseFloat(allpi_prem.replace(pattern, '')) + parseFloat(other_prem_pi.replace(pattern, '')) + parseFloat(other_prem_pi1.replace(pattern, '')) + parseFloat(other_prem_pi2.replace(pattern, '')) + parseFloat(other_prem_pi3.replace(pattern, '')) + parseFloat(other_prem_pi4.replace(pattern, '')));
        $("#ap4pi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
});


//// CALCULTATIONS ON FIDELITY GUARANTEE
$(document).ready(function () {
    //// Category of Staff
    $("#cos_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cos_si = $("#cos_si").val(),
            cos_rate = $("#cos_rate").val();
        var result = (parseFloat(cos_si.replace(pattern, '')) * parseFloat(cos_rate.replace(pattern, '')) / 100);
        $("#cos_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //All Professionals of a Business PREMIUM
        //Subjecting to Annual Premium
        var apob_prem = $("#apob_prem").val();
        $("#ap4fg_prem").val(apob_prem);
    })
    //// Per Occurrence Limit
    $("#pcl2_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var pcl2_si = $("#pcl2_si").val(),
            pcl2_rate = $("#pcl2_rate").val();
        var result = (parseFloat(pcl2_si.replace(pattern, '')) * parseFloat(pcl2_rate.replace(pattern, '')) / 100);
        $("#pcl2_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Occurrence Limit PREMIUM
        //Subjecting to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Aggregate Limit of Liability
    $("#allfg_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var allfg_si = $("#allfg_si").val(),
            allfg_rate = $("#allfg_rate").val();
        var result = (parseFloat(allfg_si.replace(pattern, '')) * parseFloat(allfg_rate.replace(pattern, '')) / 100);
        $("#allfg_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val(),
            allfg_prem = $("#allfg_prem").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')) + parseFloat(allfg_prem.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other FG
    $("#other_rate_fg").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fg = $("#other_si_fg").val(),
            other_rate_fg = $("#other_rate_fg").val();
        var result = (parseFloat(other_si_fg.replace(pattern, '')) * parseFloat(other_rate_fg.replace(pattern, '')) / 100);
        $("#other_prem_fg").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val(),
            allfg_prem = $("#allfg_prem").val(),
            other_prem_fg = $("#other_prem_fg").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')) + parseFloat(allfg_prem.replace(pattern, '')) + parseFloat(other_prem_fg.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other FG1
    $("#other_rate_fg1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fg1 = $("#other_si_fg1").val(),
            other_rate_fg1 = $("#other_rate_fg1").val();
        var result = (parseFloat(other_si_fg1.replace(pattern, '')) * parseFloat(other_rate_fg1.replace(pattern, '')) / 100);
        $("#other_prem_fg1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val(),
            allfg_prem = $("#allfg_prem").val(),
            other_prem_fg = $("#other_prem_fg").val(),
            other_prem_fg1 = $("#other_prem_fg1").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')) + parseFloat(allfg_prem.replace(pattern, '')) + parseFloat(other_prem_fg.replace(pattern, '')) + parseFloat(other_prem_fg1.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other FG2
    $("#other_rate_fg2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fg2 = $("#other_si_fg2").val(),
            other_rate_fg2 = $("#other_rate_fg2").val();
        var result = (parseFloat(other_si_fg2.replace(pattern, '')) * parseFloat(other_rate_fg2.replace(pattern, '')) / 100);
        $("#other_prem_fg2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val(),
            allfg_prem = $("#allfg_prem").val(),
            other_prem_fg = $("#other_prem_fg").val(),
            other_prem_fg1 = $("#other_prem_fg1").val(),
            other_prem_fg2 = $("#other_prem_fg2").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')) + parseFloat(allfg_prem.replace(pattern, '')) + parseFloat(other_prem_fg.replace(pattern, '')) + parseFloat(other_prem_fg1.replace(pattern, '')) + parseFloat(other_prem_fg2.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other FG3
    $("#other_rate_fg3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fg3 = $("#other_si_fg3").val(),
            other_rate_fg3 = $("#other_rate_fg3").val();
        var result = (parseFloat(other_si_fg3.replace(pattern, '')) * parseFloat(other_rate_fg3.replace(pattern, '')) / 100);
        $("#other_prem_fg3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val(),
            allfg_prem = $("#allfg_prem").val(),
            other_prem_fg = $("#other_prem_fg").val(),
            other_prem_fg1 = $("#other_prem_fg1").val(),
            other_prem_fg2 = $("#other_prem_fg2").val(),
            other_prem_fg3 = $("#other_prem_fg3").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')) + parseFloat(allfg_prem.replace(pattern, '')) + parseFloat(other_prem_fg.replace(pattern, '')) + parseFloat(other_prem_fg1.replace(pattern, '')) + parseFloat(other_prem_fg2.replace(pattern, '')) + parseFloat(other_prem_fg3.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Other FG4
    $("#other_rate_fg4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_si_fg4 = $("#other_si_fg4").val(),
            other_rate_fg4 = $("#other_rate_fg4").val();
        var result = (parseFloat(other_si_fg4.replace(pattern, '')) * parseFloat(other_rate_fg4.replace(pattern, '')) / 100);
        $("#other_prem_fg4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var cos_prem = $("#cos_prem").val(),
            pcl2_prem = $("#pcl2_prem").val(),
            allfg_prem = $("#allfg_prem").val(),
            other_prem_fg = $("#other_prem_fg").val(),
            other_prem_fg1 = $("#other_prem_fg1").val(),
            other_prem_fg2 = $("#other_prem_fg2").val(),
            other_prem_fg3 = $("#other_prem_fg3").val();
        other_prem_fg4 = $("#other_prem_fg4").val();
        var ex_r = (parseFloat(cos_prem.replace(pattern, '')) + parseFloat(pcl2_prem.replace(pattern, '')) + parseFloat(allfg_prem.replace(pattern, '')) + parseFloat(other_prem_fg.replace(pattern, '')) + parseFloat(other_prem_fg1.replace(pattern, '')) + parseFloat(other_prem_fg2.replace(pattern, '')) + parseFloat(other_prem_fg3.replace(pattern, '')) + parseFloat(other_prem_fg4.replace(pattern, '')));
        $("#ap4fg_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
});


//// CALCULATIONS ON BANKERS INDEMNITY ////
$(document).ready(function () {
    //// Fidelity Guarantee
    $("#fge_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fge_limits = $("#fge_limits").val(),
            fge_rate = $("#fge_rate").val();
        var result = (parseFloat(fge_limits.replace(pattern, '')) * parseFloat(fge_rate.replace(pattern, '')) / 100);
        $("#fge_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //All Professionals of a Business PREMIUM
        //Subjecting to Total Sum Insured
        var fge_prem = $("#fge_prem").val();
        $("#tsi4bi_prem").val(fge_prem);
        //Subjecting to Annual Premium
        var fge_prem = $("#fge_prem").val();
        $("#ap4bi_prem").val(fge_prem);
    })
    //// Premises
    $("#premises_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var premises_limits = $("#premises_limits").val(),
            premises_rate = $("#premises_rate").val();
        var result = (parseFloat(premises_limits.replace(pattern, '')) * parseFloat(premises_rate.replace(pattern, '')) / 100);
        $("#premises_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Per Occurrence Limit PREMIUM
        //Subjecting to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Transit
    $("#transit_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var transit_limits = $("#transit_limits").val(),
            transit_rate = $("#transit_rate").val();
        var result = (parseFloat(transit_limits.replace(pattern, '')) * parseFloat(transit_rate.replace(pattern, '')) / 100);
        $("#transit_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Forged Cheques
    $("#fc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fc_limits = $("#fc_limits").val(),
            fc_rate = $("#fc_rate").val();
        var result = (parseFloat(fc_limits.replace(pattern, '')) * parseFloat(fc_rate.replace(pattern, '')) / 100);
        $("#fc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Forged Securities
    $("#fs_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var fs_limits = $("#fs_limits").val(),
            fs_rate = $("#fs_rate").val();
        var result = (parseFloat(fs_limits.replace(pattern, '')) * parseFloat(fs_rate.replace(pattern, '')) / 100);
        $("#fs_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Counterfeit Currency
    $("#cc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var cc_limits = $("#cc_limits").val(),
            cc_rate = $("#cc_rate").val();
        var result = (parseFloat(cc_limits.replace(pattern, '')) * parseFloat(cc_rate.replace(pattern, '')) / 100);
        $("#cc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Damage to Office Contents
    $("#doc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var doc_limits = $("#doc_limits").val(),
            doc_rate = $("#doc_rate").val();
        var result = (parseFloat(doc_limits.replace(pattern, '')) * parseFloat(doc_rate.replace(pattern, '')) / 100);
        $("#doc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Loss Of Subscription
    $("#los_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var los_limits = $("#los_limits").val(),
            los_rate = $("#los_rate").val();
        var result = (parseFloat(los_limits.replace(pattern, '')) * parseFloat(los_rate.replace(pattern, '')) / 100);
        $("#los_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Professional Indemnity
    $("#proi_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var proi_limits = $("#proi_limits").val(),
            proi_rate = $("#proi_rate").val();
        var result = (parseFloat(proi_limits.replace(pattern, '')) * parseFloat(proi_rate.replace(pattern, '')) / 100);
        $("#proi_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Registered Mail
    $("#rem_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var rem_limits = $("#rem_limits").val(),
            rem_rate = $("#rem_rate").val();
        var result = (parseFloat(rem_limits.replace(pattern, '')) * parseFloat(rem_rate.replace(pattern, '')) / 100);
        $("#rem_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Loss Of Documents
    $("#lod_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var lod_limits = $("#lod_limits").val(),
            lod_rate = $("#lod_rate").val();
        var result = (parseFloat(lod_limits.replace(pattern, '')) * parseFloat(lod_rate.replace(pattern, '')) / 100);
        $("#lod_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Customer Safety Deposit Box
    $("#csdb_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var csdb_limits = $("#csdb_limits").val(),
            csdb_rate = $("#csdb_rate").val();
        var result = (parseFloat(csdb_limits.replace(pattern, '')) * parseFloat(csdb_rate.replace(pattern, '')) / 100);
        $("#csdb_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Cash Collection
    $("#ccl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var ccl_limits = $("#ccl_limits").val(),
            ccl_rate = $("#ccl_rate").val();
        var result = (parseFloat(ccl_limits.replace(pattern, '')) * parseFloat(ccl_rate.replace(pattern, '')) / 100);
        $("#ccl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val(),
            ccl_prem = $("#ccl_prem").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')) + parseFloat(ccl_prem.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Others BI
    $("#other_rate_bi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bi = $("#other_limit_bi").val(),
            other_rate_bi = $("#other_rate_bi").val();
        var result = (parseFloat(other_limit_bi.replace(pattern, '')) * parseFloat(other_rate_bi.replace(pattern, '')) / 100);
        $("#other_prem_bi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val(),
            ccl_prem = $("#ccl_prem").val(),
            other_prem_bi = $("#other_prem_bi").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')) + parseFloat(ccl_prem.replace(pattern, '')) + parseFloat(other_prem_bi.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Others BI1
    $("#other_rate_bi1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bi1 = $("#other_limit_bi1").val(),
            other_rate_bi1 = $("#other_rate_bi1").val();
        var result = (parseFloat(other_limit_bi1.replace(pattern, '')) * parseFloat(other_rate_bi1.replace(pattern, '')) / 100);
        $("#other_prem_bi1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val(),
            ccl_prem = $("#ccl_prem").val(),
            other_prem_bi = $("#other_prem_bi").val(),
            other_prem_bi1 = $("#other_prem_bi1").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')) + parseFloat(ccl_prem.replace(pattern, '')) + parseFloat(other_prem_bi.replace(pattern, '')) + parseFloat(other_prem_bi1.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Others BI2
    $("#other_rate_bi2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bi2 = $("#other_limit_bi2").val(),
            other_rate_bi2 = $("#other_rate_bi2").val();
        var result = (parseFloat(other_limit_bi2.replace(pattern, '')) * parseFloat(other_rate_bi2.replace(pattern, '')) / 100);
        $("#other_prem_bi2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val(),
            ccl_prem = $("#ccl_prem").val(),
            other_prem_bi = $("#other_prem_bi").val(),
            other_prem_bi1 = $("#other_prem_bi1").val(),
            other_prem_bi2 = $("#other_prem_bi2").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')) + parseFloat(ccl_prem.replace(pattern, '')) + parseFloat(other_prem_bi.replace(pattern, '')) + parseFloat(other_prem_bi1.replace(pattern, '')) + parseFloat(other_prem_bi2.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Others BI3
    $("#other_rate_bi3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bi3 = $("#other_limit_bi3").val(),
            other_rate_bi3 = $("#other_rate_bi3").val();
        var result = (parseFloat(other_limit_bi3.replace(pattern, '')) * parseFloat(other_rate_bi3.replace(pattern, '')) / 100);
        $("#other_prem_bi3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val(),
            ccl_prem = $("#ccl_prem").val(),
            other_prem_bi = $("#other_prem_bi").val(),
            other_prem_bi1 = $("#other_prem_bi1").val(),
            other_prem_bi2 = $("#other_prem_bi2").val(),
            other_prem_bi3 = $("#other_prem_bi3").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')) + parseFloat(ccl_prem.replace(pattern, '')) + parseFloat(other_prem_bi.replace(pattern, '')) + parseFloat(other_prem_bi1.replace(pattern, '')) + parseFloat(other_prem_bi2.replace(pattern, '')) + parseFloat(other_prem_bi3.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
    //// Others BI4
    $("#other_rate_bi4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bi4 = $("#other_limit_bi4").val(),
            other_rate_bi4 = $("#other_rate_bi4").val();
        var result = (parseFloat(other_limit_bi4.replace(pattern, '')) * parseFloat(other_rate_bi4.replace(pattern, '')) / 100);
        $("#other_prem_bi4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Aggregate Limit of Liability PREMIUM
        //Summing up to Annual Premium
        var fge_prem = $("#fge_prem").val(),
            premises_prem = $("#premises_prem").val(),
            transit_prem = $("#transit_prem").val(),
            fc_prem = $("#fc_prem").val(),
            fs_prem = $("#fs_prem").val(),
            cc_prem = $("#cc_prem").val(),
            doc_prem = $("#doc_prem").val(),
            los_prem = $("#los_prem").val(),
            proi_prem = $("#proi_prem").val(),
            rem_prem = $("#rem_prem").val(),
            lod_prem = $("#lod_prem").val(),
            csdb_prem = $("#csdb_prem").val(),
            ccl_prem = $("#ccl_prem").val(),
            other_prem_bi = $("#other_prem_bi").val(),
            other_prem_bi1 = $("#other_prem_bi1").val(),
            other_prem_bi2 = $("#other_prem_bi2").val(),
            other_prem_bi3 = $("#other_prem_bi3").val(),
            other_prem_bi4 = $("#other_prem_bi4").val();
        var ex_r = (parseFloat(fge_prem.replace(pattern, '')) + parseFloat(premises_prem.replace(pattern, '')) + parseFloat(transit_prem.replace(pattern, '')) + parseFloat(fc_prem.replace(pattern, '')) + parseFloat(fs_prem.replace(pattern, '')) + parseFloat(cc_prem.replace(pattern, '')) + parseFloat(doc_prem.replace(pattern, '')) + parseFloat(los_prem.replace(pattern, '')) + parseFloat(proi_prem.replace(pattern, '')) + parseFloat(rem_prem.replace(pattern, '')) + parseFloat(lod_prem.replace(pattern, '')) + parseFloat(csdb_prem.replace(pattern, '')) + parseFloat(ccl_prem.replace(pattern, '')) + parseFloat(other_prem_bi.replace(pattern, '')) + parseFloat(other_prem_bi1.replace(pattern, '')) + parseFloat(other_prem_bi2.replace(pattern, '')) + parseFloat(other_prem_bi3.replace(pattern, '')) + parseFloat(other_prem_bi4.replace(pattern, '')));
        $("#tsi4bi_prem").val(ex_r.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //Subjecting to Annual Premium
        var tsi4bi_prem = $("#tsi4bi_prem").val();
        $("#ap4bi_prem").val(tsi4bi_prem);
    })
});


//// CALCULATIONS ON BANKERS BLANKET BOND ////
$(document).ready(function () {
    //// Section One - Bond
    $("#sob_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var sob_limits = $("#sob_limits").val(),
            sob_rate = $("#sob_rate").val();
        var result = (parseFloat(sob_limits.replace(pattern, '')) * parseFloat(sob_rate.replace(pattern, '')) / 100);
        $("#sob_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //All Professionals of a Business PREMIUM
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val();
        $("#apremm_prem").val(sob_prem);
    })
    //// Section Two - Computer Crime
    $("#s2cc_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var s2cc_limits = $("#s2cc_limits").val(),
            s2cc_rate = $("#s2cc_rate").val();
        var result = (parseFloat(s2cc_limits.replace(pattern, '')) * parseFloat(s2cc_rate.replace(pattern, '')) / 100);
        $("#s2cc_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Section Three - Professional Indemnity
    $("#s3pi_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var s3pi_limits = $("#s3pi_limits").val(),
            s3pi_rate = $("#s3pi_rate").val();
        var result = (parseFloat(s3pi_limits.replace(pattern, '')) * parseFloat(s3pi_rate.replace(pattern, '')) / 100);
        $("#s3pi_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Per Incident limit
    $("#peril_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var peril_limits = $("#peril_limits").val(),
            peril_rate = $("#peril_rate").val();
        var result = (parseFloat(peril_limits.replace(pattern, '')) * parseFloat(peril_rate.replace(pattern, '')) / 100);
        $("#peril_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Aggregate Limit of Indemnity
    $("#aloi_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var aloi_limits = $("#aloi_limits").val(),
            aloi_rate = $("#aloi_rate").val();
        var result = (parseFloat(aloi_limits.replace(pattern, '')) * parseFloat(aloi_rate.replace(pattern, '')) / 100);
        $("#aloi_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val(),
            aloi_prem = $("#aloi_prem").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')) + parseFloat(aloi_prem.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others BBB
    $("#other_rate_bbb").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bbb = $("#other_limit_bbb").val(),
            other_rate_bbb = $("#other_rate_bbb").val();
        var result = (parseFloat(other_limit_bbb.replace(pattern, '')) * parseFloat(other_rate_bbb.replace(pattern, '')) / 100);
        $("#other_prem_bbb").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val(),
            aloi_prem = $("#aloi_prem").val(),
            other_prem_bbb = $("#other_prem_bbb").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')) + parseFloat(aloi_prem.replace(pattern, '')) + parseFloat(other_prem_bbb.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others BBB1
    $("#other_rate_bbb1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bbb1 = $("#other_limit_bbb1").val(),
            other_rate_bbb1 = $("#other_rate_bbb1").val();
        var result = (parseFloat(other_limit_bbb1.replace(pattern, '')) * parseFloat(other_rate_bbb1.replace(pattern, '')) / 100);
        $("#other_prem_bbb1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val(),
            aloi_prem = $("#aloi_prem").val(),
            other_prem_bbb = $("#other_prem_bbb").val(),
            other_prem_bbb1 = $("#other_prem_bbb1").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')) + parseFloat(aloi_prem.replace(pattern, '')) + parseFloat(other_prem_bbb.replace(pattern, '')) + parseFloat(other_prem_bbb1.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others BBB2
    $("#other_rate_bbb2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bbb2 = $("#other_limit_bbb2").val(),
            other_rate_bbb2 = $("#other_rate_bbb2").val();
        var result = (parseFloat(other_limit_bbb2.replace(pattern, '')) * parseFloat(other_rate_bbb2.replace(pattern, '')) / 100);
        $("#other_prem_bbb2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val(),
            aloi_prem = $("#aloi_prem").val(),
            other_prem_bbb = $("#other_prem_bbb").val(),
            other_prem_bbb1 = $("#other_prem_bbb1").val(),
            other_prem_bbb2 = $("#other_prem_bbb2").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')) + parseFloat(aloi_prem.replace(pattern, '')) + parseFloat(other_prem_bbb.replace(pattern, '')) + parseFloat(other_prem_bbb1.replace(pattern, '')) + parseFloat(other_prem_bbb2.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others BBB3
    $("#other_rate_bbb3").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bbb3 = $("#other_limit_bbb3").val(),
            other_rate_bbb3 = $("#other_rate_bbb3").val();
        var result = (parseFloat(other_limit_bbb3.replace(pattern, '')) * parseFloat(other_rate_bbb3.replace(pattern, '')) / 100);
        $("#other_prem_bbb3").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val(),
            aloi_prem = $("#aloi_prem").val(),
            other_prem_bbb = $("#other_prem_bbb").val(),
            other_prem_bbb1 = $("#other_prem_bbb1").val(),
            other_prem_bbb2 = $("#other_prem_bbb2").val(),
            other_prem_bbb3 = $("#other_prem_bbb3").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')) + parseFloat(aloi_prem.replace(pattern, '')) + parseFloat(other_prem_bbb.replace(pattern, '')) + parseFloat(other_prem_bbb1.replace(pattern, '')) + parseFloat(other_prem_bbb2.replace(pattern, '')) + parseFloat(other_prem_bbb3.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others BBB4
    $("#other_rate_bbb4").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_bbb4 = $("#other_limit_bbb4").val(),
            other_rate_bbb4 = $("#other_rate_bbb4").val();
        var result = (parseFloat(other_limit_bbb4.replace(pattern, '')) * parseFloat(other_rate_bbb4.replace(pattern, '')) / 100);
        $("#other_prem_bbb4").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var sob_prem = $("#sob_prem").val(),
            s2cc_prem = $("#s2cc_prem").val(),
            s3pi_prem = $("#s3pi_prem").val(),
            peril_prem = $("#peril_prem").val(),
            aloi_prem = $("#aloi_prem").val(),
            other_prem_bbb = $("#other_prem_bbb").val(),
            other_prem_bbb1 = $("#other_prem_bbb1").val(),
            other_prem_bbb2 = $("#other_prem_bbb2").val(),
            other_prem_bbb3 = $("#other_prem_bbb3").val(),
            other_prem_bbb4 = $("#other_prem_bbb4").val();
        var res = (parseFloat(sob_prem.replace(pattern, '')) + parseFloat(s2cc_prem.replace(pattern, '')) + parseFloat(s3pi_prem.replace(pattern, '')) + parseFloat(peril_prem.replace(pattern, '')) + parseFloat(aloi_prem.replace(pattern, '')) + parseFloat(other_prem_bbb.replace(pattern, '')) + parseFloat(other_prem_bbb1.replace(pattern, '')) + parseFloat(other_prem_bbb2.replace(pattern, '')) + parseFloat(other_prem_bbb3.replace(pattern, '')) + parseFloat(other_prem_bbb4.replace(pattern, '')));
        $("#apremm_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
});


//// CALCULATIONS ON MONEY ////
$(document).ready(function () {
    //// Per Transit Limit
    $("#ptl_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var ptl_si = $("#ptl_si").val(),
            ptl_rate = $("#ptl_rate").val();
        var result = (parseFloat(ptl_si.replace(pattern, '')) * parseFloat(ptl_rate.replace(pattern, '')) / 100);
        $("#ptl_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Annual Premium
        var ptl_prem = $("#ptl_prem").val();
        $("#ap_money_prem").val(ptl_prem);
    })
    //// Annual Carriage
    $("#ac_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var ac_si = $("#ac_si").val(),
            ac_rate = $("#ac_rate").val();
        var result = (parseFloat(ac_si.replace(pattern, '')) * parseFloat(ac_rate.replace(pattern, '')) / 100);
        $("#ac_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var ptl_prem = $("#ptl_prem").val(),
            ac_prem = $("#ac_prem").val();
        var res = (parseFloat(ptl_prem.replace(pattern, '')) + parseFloat(ac_prem.replace(pattern, '')));
        $("#ap_money_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Cash-in Safe Limit of Indemnity
    $("#loi_cis_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var loi_cis_si = $("#loi_cis_si").val(),
            loi_cis_rate = $("#loi_cis_rate").val();
        var result = (parseFloat(loi_cis_si.replace(pattern, '')) * parseFloat(loi_cis_rate.replace(pattern, '')) / 100);
        $("#loi_cis_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var ptl_prem = $("#ptl_prem").val(),
            ac_prem = $("#ac_prem").val(),
            loi_cis_prem = $("#loi_cis_prem").val();
        var res = (parseFloat(ptl_prem.replace(pattern, '')) + parseFloat(ac_prem.replace(pattern, '')) + parseFloat(loi_cis_prem.replace(pattern, '')));
        $("#ap_money_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Hold-Up Limit of Indemnity
    $("#loi_hp_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var loi_hp_limits = $("#loi_hp_limits").val(),
            loi_hp_rate = $("#loi_hp_rate").val();
        var result = (parseFloat(loi_hp_limits.replace(pattern, '')) * parseFloat(loi_hp_rate.replace(pattern, '')) / 100);
        $("#loi_hp_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var ptl_prem = $("#ptl_prem").val(),
            ac_prem = $("#ac_prem").val(),
            loi_cis_prem = $("#loi_cis_prem").val(),
            loi_hp_prem = $("#loi_hp_prem").val();
        var res = (parseFloat(ptl_prem.replace(pattern, '')) + parseFloat(ac_prem.replace(pattern, '')) + parseFloat(loi_cis_prem.replace(pattern, '')) + parseFloat(loi_hp_prem.replace(pattern, '')));
        $("#ap_money_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others MI
    $("#other_rate_mi").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_mi = $("#other_limit_mi").val(),
            other_rate_mi = $("#other_rate_mi").val();
        var result = (parseFloat(other_limit_mi.replace(pattern, '')) * parseFloat(other_rate_mi.replace(pattern, '')) / 100);
        $("#other_prem_mi").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var ptl_prem = $("#ptl_prem").val(),
            ac_prem = $("#ac_prem").val(),
            loi_cis_prem = $("#loi_cis_prem").val(),
            loi_hp_prem = $("#loi_hp_prem").val(),
            other_prem_mi = $("#other_prem_mi").val();
        var res = (parseFloat(ptl_prem.replace(pattern, '')) + parseFloat(ac_prem.replace(pattern, '')) + parseFloat(loi_cis_prem.replace(pattern, '')) + parseFloat(loi_hp_prem.replace(pattern, '')) + parseFloat(other_prem_mi.replace(pattern, '')));
        $("#ap_money_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others MI
    $("#other_rate_mi1").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_mi1 = $("#other_limit_mi1").val(),
            other_rate_mi1 = $("#other_rate_mi1").val();
        var result = (parseFloat(other_limit_mi1.replace(pattern, '')) * parseFloat(other_rate_mi1.replace(pattern, '')) / 100);
        $("#other_prem_mi1").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var ptl_prem = $("#ptl_prem").val(),
            ac_prem = $("#ac_prem").val(),
            loi_cis_prem = $("#loi_cis_prem").val(),
            loi_hp_prem = $("#loi_hp_prem").val(),
            other_prem_mi = $("#other_prem_mi").val(),
            other_prem_mi1 = $("#other_prem_mi1").val();
        var res = (parseFloat(ptl_prem.replace(pattern, '')) + parseFloat(ac_prem.replace(pattern, '')) + parseFloat(loi_cis_prem.replace(pattern, '')) + parseFloat(loi_hp_prem.replace(pattern, '')) + parseFloat(other_prem_mi.replace(pattern, '')) + parseFloat(other_prem_mi1.replace(pattern, '')));
        $("#ap_money_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
    //// Others MI 2
    $("#other_rate_mi2").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_limit_mi2 = $("#other_limit_mi2").val(),
            other_rate_mi2 = $("#other_rate_mi2").val();
        var result = (parseFloat(other_limit_mi2.replace(pattern, '')) * parseFloat(other_rate_mi2.replace(pattern, '')) / 100);
        $("#other_prem_mi2").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //
        //Subjecting to Total Sum Insured
        var ptl_prem = $("#ptl_prem").val(),
            ac_prem = $("#ac_prem").val(),
            loi_cis_prem = $("#loi_cis_prem").val(),
            loi_hp_prem = $("#loi_hp_prem").val(),
            other_prem_mi = $("#other_prem_mi").val(),
            other_prem_mi1 = $("#other_prem_mi1").val();
        other_prem_mi2 = $("#other_prem_mi2").val();
        var res = (parseFloat(ptl_prem.replace(pattern, '')) + parseFloat(ac_prem.replace(pattern, '')) + parseFloat(loi_cis_prem.replace(pattern, '')) + parseFloat(loi_hp_prem.replace(pattern, '')) + parseFloat(other_prem_mi.replace(pattern, '')) + parseFloat(other_prem_mi1.replace(pattern, '')) + parseFloat(other_prem_mi2.replace(pattern, '')));
        $("#ap_money_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    })
});


//// CALCULATIONS ON GROUP PERSONAL ACCIDENT ////
$(document).ready(function () {
    //// Clerical
    $("#clerical_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var clerical_as = $("#clerical_as").val(),
            clerical_num = $("#clerical_num").val();
        var result = (parseFloat(clerical_as.replace(pattern, '')) * parseFloat(clerical_num.replace(pattern, '')));
        $("#clerical_etas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Equating to Total
        var clerical_etas = $("#clerical_etas").val();
        $("#total_etas").val(clerical_etas);
    });
    //Equating to Temporal Disablement - Capital Sum
    $("#clerical_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td_terms = 1 / 52,
            total_etas = $("#total_etas").val(),
            result = (parseFloat(td_terms) * parseFloat(total_etas.replace(pattern, '')));
        $("#td_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //
        var td_cs = $("#td_cs").val();
        $("#td4_cs").val(td_cs);
    });
    $("#clerical_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var num_asc = $("#num_asc").val(),
            clerical_etas = $("#clerical_etas").val();
        var result = (parseFloat(num_asc.replace(pattern, '')) * parseFloat(clerical_etas.replace(pattern, '')));
        $("#clerical_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Capital Sum

        //Equating to Total
        var clerical_cs = $("#clerical_cs").val();
        $("#total_cs").val(clerical_cs);
    });
    //Equating to Death - Capita Sum
    $("#clerical_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#death_num").val(total_cs);
        $("#death4_num").val(total_cs);
    });
    //Equating to Permanent Disablement - Capita Sum
    $("#clerical_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#pd_cs").val(total_cs);
        $("#pd4_cs").val(total_cs);
    });
    //Equating to Medical Expense - Capita Sum
    $("#clerical_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me_terms = $("#me_terms").val(),
            total_cs = $("#total_cs").val(),
            result = (parseFloat(me_terms.replace(pattern, '') / 100) * parseFloat(total_cs.replace(pattern, '')));
        $("#me_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        //
        var me_cs = $("#me_cs").val();
        $("#me4_cs").val(me_cs);
    });

    //// Non-Clerical
    $("#nc_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            nc_as = $("#nc_as").val(),
            nc_num = $("#nc_num").val(),
            result = (parseFloat(nc_as.replace(pattern, '')) * parseFloat(nc_num.replace(pattern, '')));
        $("#nc_etas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var clerical_etas = $("#clerical_etas").val(),
            nc_etas = $("#nc_etas").val();
        var res = (parseFloat(clerical_etas.replace(pattern, '')) + parseFloat(nc_etas.replace(pattern, '')));
        $("#total_etas").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    })
    //Equating to Temporal Disablement - Capital Sum
    $("#nc_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td_terms = 1 / 52,
            total_etas = $("#total_etas").val(),
            result = (parseFloat(td_terms) * parseFloat(total_etas.replace(pattern, '')));
        $("#td_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var td_cs = $("#td_cs").val();
        $("#td4_cs").val(td_cs);
    });
    $("#nc_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            num_asc = $("#num_asc").val(),
            nc_etas = $("#nc_etas").val(),
            result = (parseFloat(num_asc.replace(pattern, '')) * parseFloat(nc_etas.replace(pattern, '')));
        $("#nc_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Capital Sum
        //Summing and Equating to Total
        var clerical_cs = $("#clerical_cs").val(),
            nc_cs = $("#nc_cs").val();
        var res = (parseFloat(clerical_cs.replace(pattern, '')) + parseFloat(nc_cs.replace(pattern, '')));
        $("#total_cs").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Death - Capita Sum
    $("#nc_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#death_num").val(total_cs);
        $("#death4_num").val(total_cs);
    });
    //Equating to Permanent Disablement - Capita Sum
    $("#nc_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#pd_cs").val(total_cs);
        $("#pd4_cs").val(total_cs);
    });
    //Equating to Medical Expense - Capita Sum
    $("#nc_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me_terms = $("#me_terms").val(),
            total_cs = $("#total_cs").val(),
            result = (parseFloat(me_terms.replace(pattern, '') / 100) * parseFloat(total_cs.replace(pattern, '')));
        $("#me_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var me_cs = $("#me_cs").val();
        $("#me4_cs").val(me_cs);
    });

    //// Managers/Supervisors
    $("#mors_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            mors_as = $("#mors_as").val(),
            mors_num = $("#mors_num").val(),
            result = (parseFloat(mors_as.replace(pattern, '')) * parseFloat(mors_num.replace(pattern, '')));
        $("#mors_etas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var clerical_etas = $("#clerical_etas").val(),
            nc_etas = $("#nc_etas").val(),
            mors_etas = $("#mors_etas").val(),
            res = (parseFloat(clerical_etas.replace(pattern, '')) + parseFloat(nc_etas.replace(pattern, '')) + parseFloat(mors_etas.replace(pattern, '')));
        $("#total_etas").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Temporal Disablement - Capital Sum
    $("#mors_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td_terms = 1 / 52,
            total_etas = $("#total_etas").val(),
            result = (parseFloat(td_terms) * parseFloat(total_etas.replace(pattern, '')));
        $("#td_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var td_cs = $("#td_cs").val();
        $("#td4_cs").val(td_cs);
    });
    $("#mors_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            num_asc = $("#num_asc").val(),
            mors_etas = $("#mors_etas").val(),
            result = (parseFloat(num_asc.replace(pattern, '')) * parseFloat(mors_etas.replace(pattern, '')));
        $("#mors_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Capital Sum
        //Summing and Equating to Total
        var clerical_cs = $("#clerical_cs").val(),
            nc_cs = $("#nc_cs").val(),
            mors_cs = $("#mors_cs").val(),
            res = (parseFloat(clerical_cs.replace(pattern, '')) + parseFloat(nc_cs.replace(pattern, '')) + parseFloat(mors_cs.replace(pattern, '')));
        $("#total_cs").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Death - Capita Sum
    $("#mors_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#death_num").val(total_cs);
        $("#death4_num").val(total_cs);
    });
    //Equating to Permanent Disablement - Capita Sum
    $("#mors_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#pd_cs").val(total_cs);
        $("#pd4_cs").val(total_cs);
    });
    //Equating to Medical Expense - Capita Sum
    $("#mors_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me_terms = $("#me_terms").val(),
            total_cs = $("#total_cs").val(),
            result = (parseFloat(me_terms.replace(pattern, '') / 100) * parseFloat(total_cs.replace(pattern, '')));
        $("#me_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var me_cs = $("#me_cs").val();
        $("#me4_cs").val(me_cs);
    });

    //// Artisans
    $("#artisans_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            artisans_as = $("#artisans_as").val(),
            artisans_num = $("#artisans_num").val(),
            result = (parseFloat(artisans_as.replace(pattern, '')) * parseFloat(artisans_num.replace(pattern, '')));
        $("#artisans_etas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var clerical_etas = $("#clerical_etas").val(),
            nc_etas = $("#nc_etas").val(),
            mors_etas = $("#mors_etas").val(),
            artisans_etas = $("#artisans_etas").val(),
            res = (parseFloat(clerical_etas.replace(pattern, '')) + parseFloat(nc_etas.replace(pattern, '')) + parseFloat(mors_etas.replace(pattern, '')) + parseFloat(artisans_etas.replace(pattern, '')));
        $("#total_etas").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Temporal Disablement - Capital Sum
    $("#artisans_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td_terms = 1 / 52,
            total_etas = $("#total_etas").val(),
            result = (parseFloat(td_terms) * parseFloat(total_etas.replace(pattern, '')));
        $("#td_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var td_cs = $("#td_cs").val();
        $("#td4_cs").val(td_cs);
    });
    $("#artisans_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            num_asc = $("#num_asc").val(),
            artisans_etas = $("#artisans_etas").val(),
            result = (parseFloat(num_asc.replace(pattern, '')) * parseFloat(artisans_etas.replace(pattern, '')));
        $("#artisans_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Capital Sum
        //Summing and Equating to Total
        var clerical_cs = $("#clerical_cs").val(),
            nc_cs = $("#nc_cs").val(),
            mors_cs = $("#mors_cs").val(),
            artisans_cs = $("#artisans_cs").val(),
            res = (parseFloat(clerical_cs.replace(pattern, '')) + parseFloat(nc_cs.replace(pattern, '')) + parseFloat(mors_cs.replace(pattern, '')) + parseFloat(artisans_cs.replace(pattern, '')));
        $("#total_cs").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Death - Capita Sum
    $("#artisans_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#death_num").val(total_cs);
        $("#death4_num").val(total_cs);
    });
    //Equating to Permanent Disablement - Capita Sum
    $("#artisans_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#pd_cs").val(total_cs);
        $("#pd4_cs").val(total_cs);
    });
    //Equating to Medical Expense - Capita Sum
    $("#artisans_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me_terms = $("#me_terms").val(),
            total_cs = $("#total_cs").val(),
            result = (parseFloat(me_terms.replace(pattern, '') / 100) * parseFloat(total_cs.replace(pattern, '')));
        $("#me_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var me_cs = $("#me_cs").val();
        $("#me4_cs").val(me_cs);
    });

    //// Security/Manual Workers
    $("#sormw_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            sormw_as = $("#sormw_as").val(),
            sormw_num = $("#sormw_num").val(),
            result = (parseFloat(sormw_as.replace(pattern, '')) * parseFloat(sormw_num.replace(pattern, '')));
        $("#sormw_etas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var clerical_etas = $("#clerical_etas").val(),
            nc_etas = $("#nc_etas").val(),
            mors_etas = $("#mors_etas").val(),
            artisans_etas = $("#artisans_etas").val(),
            sormw_etas = $("#sormw_etas").val(),
            res = (parseFloat(clerical_etas.replace(pattern, '')) + parseFloat(nc_etas.replace(pattern, '')) + parseFloat(mors_etas.replace(pattern, '')) + parseFloat(artisans_etas.replace(pattern, '')) + parseFloat(sormw_etas.replace(pattern, '')));
        $("#total_etas").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Temporal Disablement - Capital Sum
    $("#sormw_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td_terms = 1 / 52,
            total_etas = $("#total_etas").val(),
            result = (parseFloat(td_terms) * parseFloat(total_etas.replace(pattern, '')));
        $("#td_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var td_cs = $("#td_cs").val();
        $("#td4_cs").val(td_cs);
    });
    $("#sormw_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            num_asc = $("#num_asc").val(),
            sormw_etas = $("#sormw_etas").val(),
            result = (parseFloat(num_asc.replace(pattern, '')) * parseFloat(sormw_etas.replace(pattern, '')));
        $("#sormw_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Capital Sum
        //Summing and Equating to Total
        var clerical_cs = $("#clerical_cs").val(),
            nc_cs = $("#nc_cs").val(),
            mors_cs = $("#mors_cs").val(),
            artisans_cs = $("#artisans_cs").val(),
            sormw_cs = $("#sormw_cs").val(),
            res = (parseFloat(clerical_cs.replace(pattern, '')) + parseFloat(nc_cs.replace(pattern, '')) + parseFloat(mors_cs.replace(pattern, '')) + parseFloat(artisans_cs.replace(pattern, '')) + parseFloat(sormw_cs.replace(pattern, '')));
        $("#total_cs").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //Equating to Death - Capita Sum
    $("#sormw_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#death_num").val(total_cs);
        $("#death4_num").val(total_cs);
    });
    //Equating to Permanent Disablement - Capita Sum
    $("#sormw_num").on("blur", () => {
        var total_cs = $("#total_cs").val();
        $("#pd_cs").val(total_cs);
        $("#pd4_cs").val(total_cs);
    });
    //Equating to Medical Expense - Capita Sum
    $("#sormw_num").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me_terms = $("#me_terms").val(),
            total_cs = $("#total_cs").val(),
            result = (parseFloat(me_terms.replace(pattern, '') / 100) * parseFloat(total_cs.replace(pattern, '')));
        $("#me_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        // Benefit - Selective
        var me_cs = $("#me_cs").val();
        $("#me4_cs").val(me_cs);
    });

    //// Benefit - Selective Death
    $("#death_etas").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            death_num = $("#death_num").val(),
            death_etas = $("#death_etas").val(),
            result = (parseFloat(death_num.replace(pattern, '')) * parseFloat(death_etas.replace(pattern, '')));
        $("#death_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val();
        $("#total_prems").val(death_cs); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#death_etas").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //// Benefit - Selective Permanent Disablement
    $("#pd_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            pd_cs = $("#pd_cs").val(),
            pd_rate = $("#pd_rate").val(),
            result = (parseFloat(pd_cs.replace(pattern, '')) * parseFloat(pd_rate.replace(pattern, '')));
        $("#pd_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#pd_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //// Temporal Disablement
    $("#td_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td_cs = $("#td_cs").val(),
            td_rate = $("#td_rate").val(),
            result = (parseFloat(td_cs.replace(pattern, '')) * parseFloat(td_rate.replace(pattern, '')));
        $("#td_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            td_prem = $("#td_prem").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')) + parseFloat(td_prem.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#td_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //// Medical Expense
    $("#me_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me_cs = $("#me_cs").val(),
            me_rate = $("#me_rate").val(),
            result = (parseFloat(me_cs.replace(pattern, '')) * parseFloat(me_rate.replace(pattern, '')));
        $("#me_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            td_prem = $("#td_prem").val(),
            me_prem = $("#me_prem").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')) + parseFloat(td_prem.replace(pattern, '')) + parseFloat(me_prem.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#me_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });

    //// Benefit - Selective (Death1)
    $("#death4_etas").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            death4_num = $("#death4_num").val(),
            death4_etas = $("#death4_etas").val(),
            result = (parseFloat(death4_num.replace(pattern, '')) * parseFloat(death4_etas.replace(pattern, '')));
        $("#death4_cs").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            td_prem = $("#td_prem").val(),
            me_prem = $("#me_prem").val(),
            death4_cs = $("#death4_cs").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')) + parseFloat(td_prem.replace(pattern, '')) + parseFloat(me_prem.replace(pattern, '')) + parseFloat(death4_cs.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#death4_etas").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //// Benefit - Selective (Permanent Disablement1)
    $("#pd4_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            pd4_cs = $("#pd4_cs").val(),
            pd4_rate = $("#pd4_rate").val(),
            result = (parseFloat(pd4_cs.replace(pattern, '')) * parseFloat(pd4_rate.replace(pattern, '')));
        $("#pd4_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            td_prem = $("#td_prem").val(),
            me_prem = $("#me_prem").val(),
            death4_cs = $("#death4_cs").val(),
            pd4_prem = $("#pd4_prem").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')) + parseFloat(td_prem.replace(pattern, '')) + parseFloat(me_prem.replace(pattern, '')) + parseFloat(death4_cs.replace(pattern, '')) + parseFloat(pd4_prem.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#pd4_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //// Benefit - Selective (Permanent Temporal Disablement1)
    $("#td4_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            td4_cs = $("#td4_cs").val(),
            td4_rate = $("#td4_rate").val(),
            result = (parseFloat(td4_cs.replace(pattern, '')) * parseFloat(td4_rate.replace(pattern, '')));
        $("#td4_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            td_prem = $("#td_prem").val(),
            me_prem = $("#me_prem").val(),
            death4_cs = $("#death4_cs").val(),
            pd4_prem = $("#pd4_prem").val(),
            td4_prem = $("#td4_prem").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')) + parseFloat(td_prem.replace(pattern, '')) + parseFloat(me_prem.replace(pattern, '')) + parseFloat(death4_cs.replace(pattern, '')) + parseFloat(pd4_prem.replace(pattern, '')) + parseFloat(td4_prem.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#td4_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });
    //// Benefit - Selective (Medical Expense1)
    $("#me4_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            me4_cs = $("#me4_cs").val(),
            me4_rate = $("#me4_rate").val(),
            result = (parseFloat(me4_cs.replace(pattern, '')) * parseFloat(me4_rate.replace(pattern, '')));
        $("#me4_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Summing and Equating to Total
        var res = 0,
            death_cs = $("#death_cs").val(),
            pd_prem = $("#pd_prem").val(),
            td_prem = $("#td_prem").val(),
            me_prem = $("#me_prem").val(),
            death4_cs = $("#death4_cs").val(),
            pd4_prem = $("#pd4_prem").val(),
            td4_prem = $("#td4_prem").val(),
            me4_prem = $("#me4_prem").val(),
            res = (parseFloat(death_cs.replace(pattern, '')) + parseFloat(pd_prem.replace(pattern, '')) + parseFloat(td_prem.replace(pattern, '')) + parseFloat(me_prem.replace(pattern, '')) + parseFloat(death4_cs.replace(pattern, '')) + parseFloat(pd4_prem.replace(pattern, '')) + parseFloat(td4_prem.replace(pattern, '')) + parseFloat(me4_prem.replace(pattern, '')));
        $("#total_prems").val(res.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // TOTAL PREMIUM
    });
    //// Premium * Group Discount
    $("#me4_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            total_prems = $("#total_prems").val(),
            gd4gpa_rate = $("#gd4gpa_rate").val(),
            result = (parseFloat(total_prems.replace(pattern, '')) * parseFloat(gd4gpa_rate.replace(pattern, '')) / 100);
        $("#gd4gpa_prem").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Estimated Total Annual Salaries
        //Subtructing and Equating to Total
        var res1 = 0,
            total_prems = $("#total_prems").val(),
            gd4gpa_prem = $("#gd4gpa_prem").val(),
            res1 = (parseFloat(total_prems.replace(pattern, '')) - parseFloat(gd4gpa_prem.replace(pattern, '')));
        $("#ap4gpa_prem").val(res1.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); //Total
    });

    //// Benefit - Selective - Death - Rate - Premium computation

});


//// CALCULATIONS ON WORKMENS' COMPENSATION ////
$(document).ready(function () {
    //// Clerical
    $("#clerical_num_wc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            clerical_num_wc = $("#clerical_num_wc").val(),
            result = (parseFloat(heo.replace(pattern, '')) * parseFloat(clerical_num_wc.replace(pattern, '')));
        $("#clerical_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#clerical_num_wc").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var clerical_asp = $("#clerical_asp").val(),
            clerical_num_wc = $("#clerical_num_wc").val(),
            result = (parseFloat(clerical_asp.replace(pattern, '')) * parseFloat(clerical_num_wc.replace(pattern, '')));
        $("#clerical_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary
    })
    // Basic Computations * Rate
    $("#clerical_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var clerical_bc = $("#clerical_bc").val(),
            clerical_rate = $("#clerical_rate").val();
        var result = parseFloat(clerical_bc.replace(pattern, '')) * parseFloat(clerical_rate.replace(pattern, ''));
        $("#clerical_prem").val(result); // Premium
    }) // Equating Clerical Premium To TOTAL
    $("#clerical_rate").on("blur", () => {
        var clerical_prem = $("#clerical_prem").val();
        $("#total_prem").val(clerical_prem);
    })
    // Total * Medical Expense Loading RATE
    $("#clerical_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2

        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2

        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2

        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })

    //// Non-Clerical
    $("#nonclerical_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            nonclerical_num = $("#nonclerical_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(nonclerical_num.replace(pattern, '')));
        $("#nonclerical_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#nonclerical_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nonclerical_asp = $("#nonclerical_asp").val(),
            nonclerical_num = $("#nonclerical_num").val();
        var result = (parseFloat(nonclerical_asp.replace(pattern, '')) * parseFloat(nonclerical_num.replace(pattern, '')));
        $("#nonclerical_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })
    // Basic Computations * Rate
    $("#nonclerical_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var nonclerical_bc = $("#nonclerical_bc").val(),
            nonclerical_rate = $("#nonclerical_rate").val();
        var result = parseFloat(nonclerical_bc.replace(pattern, '')) * parseFloat(nonclerical_rate.replace(pattern, ''));
        $("#nonclerical_prem").val(result); // Premium
    })
    // Adding Non-Clerical Premium To Clerical Premium
    $("#nonclerical_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, ''));
        $("#total_prem").val(result);

    })
    // Total * Medical Expense Loading RATE
    $("#nonclerical_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })

    //// Managers/Supervisors/Administrative
    $("#msd_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            msd_num = $("#msd_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(msd_num.replace(pattern, '')));
        $("#msd_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#msd_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var msd_asp = $("#msd_asp").val(),
            msd_num = $("#msd_num").val();
        var result = (parseFloat(msd_asp.replace(pattern, '')) * parseFloat(msd_num.replace(pattern, '')));
        $("#msd_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })
    // Basic Computations * Rate
    $("#msd_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var msd_bc = $("#msd_bc").val(),
            msd_rate = $("#msd_rate").val();
        var result = parseFloat(msd_bc.replace(pattern, '')) * parseFloat(msd_rate.replace(pattern, ''));
        $("#msd_prem").val(result); // Premium
    })
    // Summing Up For TOTAL
    $("#msd_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val(),
            msd_prem = $("#msd_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, '')) + parseFloat(msd_prem.replace(pattern, ''));
        $("#total_prem").val(result);

    })
    // Total * Medical Expense Loading RATE
    $("#msd_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })
    //// Technical
    $("#tech_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            tech_num = $("#tech_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(tech_num.replace(pattern, '')));
        $("#tech_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#tech_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tech_asp = $("#tech_asp").val(),
            tech_num = $("#tech_num").val();
        var result = (parseFloat(tech_asp.replace(pattern, '')) * parseFloat(tech_num.replace(pattern, '')));
        $("#tech_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })

    // Basic Computations * Rate
    $("#tech_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var tech_bc = $("#tech_bc").val(),
            tech_rate = $("#tech_rate").val();
        var result = parseFloat(tech_bc.replace(pattern, '')) * parseFloat(tech_rate.replace(pattern, ''));
        $("#tech_prem").val(result); // Premium
    })
    // Summing Up For TOTAL
    $("#tech_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val(),
            msd_prem = $("#msd_prem").val(),
            tech_prem = $("#tech_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, '')) + parseFloat(msd_prem.replace(pattern, '')) + parseFloat(tech_prem.replace(pattern, ''));
        $("#total_prem").val(result);

    })
    // Total * Medical Expense Loading RATE
    $("#tech_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })
    //// Security/Manual Labour/Driver/Mining
    $("#smldm_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            smldm_num = $("#smldm_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(smldm_num.replace(pattern, '')));
        $("#smldm_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#smldm_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var smldm_asp = $("#smldm_asp").val(),
            smldm_num = $("#smldm_num").val();
        var result = (parseFloat(smldm_asp.replace(pattern, '')) * parseFloat(smldm_num.replace(pattern, '')));
        $("#smldm_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })
    // Basic Computations * Rate
    $("#smldm_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var smldm_bc = $("#smldm_bc").val(),
            smldm_rate = $("#smldm_rate").val();
        var result = parseFloat(smldm_bc.replace(pattern, '')) * parseFloat(smldm_rate.replace(pattern, ''));
        $("#smldm_prem").val(result); // Premium
    })
    // Summing Up For TOTAL
    $("#smldm_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val(),
            msd_prem = $("#msd_prem").val(),
            tech_prem = $("#tech_prem").val(),
            smldm_prem = $("#smldm_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, '')) + parseFloat(msd_prem.replace(pattern, '')) + parseFloat(tech_prem.replace(pattern, '')) + parseFloat(smldm_prem.replace(pattern, ''));
        $("#total_prem").val(result);
    })
    // Total * Medical Expense Loading RATE
    $("#smldm_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })
    //// Artisans - Plumbing/Electrcians
    $("#artpe_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            artpe_num = $("#artpe_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(artpe_num.replace(pattern, '')));
        $("#artpe_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#artpe_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var artpe_asp = $("#artpe_asp").val(),
            artpe_num = $("#artpe_num").val();
        var result = (parseFloat(artpe_asp.replace(pattern, '')) * parseFloat(artpe_num.replace(pattern, '')));
        $("#artpe_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })
    // Basic Computations * Rate
    $("#artpe_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var artpe_bc = $("#artpe_bc").val(),
            artpe_rate = $("#artpe_rate").val();
        var result = parseFloat(artpe_bc.replace(pattern, '')) * parseFloat(artpe_rate.replace(pattern, ''));
        $("#artpe_prem").val(result); // Premium
    })
    // Summing Up For TOTAL
    $("#artpe_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val(),
            msd_prem = $("#msd_prem").val(),
            tech_prem = $("#tech_prem").val(),
            smldm_prem = $("#smldm_prem").val(),
            artpe_prem = $("#artpe_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, '')) + parseFloat(msd_prem.replace(pattern, '')) + parseFloat(tech_prem.replace(pattern, '')) + parseFloat(smldm_prem.replace(pattern, '')) + parseFloat(artpe_prem.replace(pattern, ''));
        $("#total_prem").val(result);
    })
    // Total * Medical Expense Loading RATE
    $("#artpe_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })
    //// Other WC
    $("#other_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            other_num = $("#other_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(other_num.replace(pattern, '')));
        $("#other_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#other_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_asp = $("#other_asp").val(),
            other_num = $("#other_num").val();
        var result = (parseFloat(other_asp.replace(pattern, '')) * parseFloat(other_num.replace(pattern, '')));
        $("#other_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })
    // Basic Computations * Rate
    $("#other_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other_bc = $("#other_bc").val(),
            other_rate = $("#other_rate").val();
        var result = parseFloat(other_bc.replace(pattern, '')) * parseFloat(other_rate.replace(pattern, ''));
        $("#other_prem").val(result); // Premium
    })
    // Summing Up For TOTAL
    $("#other_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val(),
            msd_prem = $("#msd_prem").val(),
            tech_prem = $("#tech_prem").val(),
            smldm_prem = $("#smldm_prem").val(),
            artpe_prem = $("#artpe_prem").val(),
            other_prem = $("#other_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, '')) + parseFloat(msd_prem.replace(pattern, '')) + parseFloat(tech_prem.replace(pattern, '')) + parseFloat(smldm_prem.replace(pattern, '')) + parseFloat(artpe_prem.replace(pattern, '')) + parseFloat(other_prem.replace(pattern, ''));
        $("#total_prem").val(result);
    })
    // Total * Medical Expense Loading RATE
    $("#other_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })
    //// Others WC 1
    $("#other1_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var heo = $("#heo").val(),
            other1_num = $("#other1_num").val();
        var result = (parseFloat(heo.replace(pattern, '')) * parseFloat(other1_num.replace(pattern, '')));
        $("#other1_heoc").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // HEO Calculations
    })
    $("#other1_num").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other1_asp = $("#other1_asp").val(),
            other1_num = $("#other1_num").val();
        var result = (parseFloat(other1_asp.replace(pattern, '')) * parseFloat(other1_num.replace(pattern, '')));
        $("#other1_dtas").val(result.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); // Declared Total Annual Salary(s)
    })
    // Basic Computations * Rate
    $("#other1_rate").on("blur", () => {
        var result = 0;
        var pattern = /[^0-9.-]+/g;
        var other1_bc = $("#other1_bc").val(),
            other1_rate = $("#other1_rate").val();
        var result = parseFloat(other1_bc.replace(pattern, '')) * parseFloat(other1_rate.replace(pattern, ''));
        $("#other1_prem").val(result); // Premium
    })
    // Summing Up For TOTAL
    $("#other1_rate").on("blur", () => {
        var result = 0,
            pattern = /[^0-9.-]+/g,
            clerical_prem = $("#clerical_prem").val(),
            nonclerical_prem = $("#nonclerical_prem").val(),
            msd_prem = $("#msd_prem").val(),
            tech_prem = $("#tech_prem").val(),
            smldm_prem = $("#smldm_prem").val(),
            artpe_prem = $("#artpe_prem").val(),
            other_prem = $("#other_prem").val(),
            other1_prem = $("#other1_prem").val();
        var result = parseFloat(clerical_prem.replace(pattern, '')) + parseFloat(nonclerical_prem.replace(pattern, '')) + parseFloat(msd_prem.replace(pattern, '')) + parseFloat(tech_prem.replace(pattern, '')) + parseFloat(smldm_prem.replace(pattern, '')) + parseFloat(artpe_prem.replace(pattern, '')) + parseFloat(other_prem.replace(pattern, '')) + parseFloat(other1_prem.replace(pattern, ''));
        $("#total_prem").val(result);
    })
    // Total * Medical Expense Loading RATE
    $("#other1_rate").on("blur", () => {
        var mel_r = 0;
        var pattern = /[^0-9.-]+/g;
        var total_prem = $("#total_prem").val(),
            mel_rate = $("#mel_rate").val();
        var mel_r = (parseFloat(total_prem.replace(pattern, '')) * parseFloat(mel_rate.replace(pattern, '')) / 100);
        $("#mel_prem").val(mel_r.toFixed(4)); // Medical Expense Loading PREM
        // Tota + Medical Expense Loading PREM
        var total_prem = $("#total_prem").val(),
            mel_prem = $("#mel_prem").val();
        var mel_re = (parseFloat(total_prem.replace(pattern, '')) + parseFloat(mel_prem.replace(pattern, '')));
        $("#mel_prem2").val(mel_re.toFixed(4)); // Medical Expense Loading PREM2
        // Common Law Loading RATE * Medical Expense Loading PREM2
        var mel_prem2 = $("#mel_prem2").val(),
            coll_rate = $("#coll_rate").val();
        var mel_res = (parseFloat(mel_prem2.replace(pattern, '')) * parseFloat(coll_rate.replace(pattern, '')) / 100);
        $("#coll_prem").val(mel_res.toFixed(4)); // Common Law Loading PREM
        // Medical Expense Loading PREM2 + Common Law Loading PREM
        var mel_prem2 = $("#mel_prem2").val(),
            coll_prem = $("#coll_prem").val();
        var mel_resu = (parseFloat(mel_prem2.replace(pattern, '')) + parseFloat(coll_prem.replace(pattern, '')));
        $("#cll_prem222").val(mel_resu.toFixed(4)); //Common Law Loading PREM2
        // Common Law Loading PREM2 * To & Fro Work RATE
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_rate = $("#tfw_rate").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) * parseFloat(tfw_rate.replace(pattern, '')) / 100);
        $("#tfw_prem").val(mel_resul.toFixed(4)); //To & Fro Work PREM
        // Common Law Loading PREM2 + To & Fro Work PREM
        var cll_prem222 = $("#cll_prem222").val(),
            tfw_prem = $("#tfw_prem").val();
        var mel_resul = (parseFloat(cll_prem222.replace(pattern, '')) + parseFloat(tfw_prem.replace(pattern, '')));
        $("#tfw_prem22").val(mel_resul.toFixed(4)); // To & Fro Work PREM2
        // To & Fro Work PREM2 * Group Discount RATE
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_rate = $("#gd_rate").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) * parseFloat(gd_rate.replace(pattern, '')) / 100);
        $("#gd_prem").val(mel_result.toFixed(4)); // Group Discount PREM
        // To & Fro Work PREM2 - Group Discount PREM
        var tfw_prem22 = $("#tfw_prem22").val(),
            gd_prem = $("#gd_prem").val();
        var mel_result = (parseFloat(tfw_prem22.replace(pattern, '')) - parseFloat(gd_prem.replace(pattern, '')));
        $("#dep_prem").val(mel_result.toFixed(4)); //Deposit Premium
        // Equating Deposit Premium to Annual Premium
        var dep_prem = $("#dep_prem").val();
        $("#ap_prem").val(dep_prem); // Annual Premium
    })

});









































// ==============================================================================================================//

//// RE-USABLE CODES /////

$("#edit_value").on("blur", () => {
    var val = $("#edit_value").val(),
        sc = $("#edit_sc").val(),
        cal_process = "cal";

    if (val == "" || val == 0) {
        alert("Value Must Be Greater Than Zero");
    } else {
        $.post("/table/admin/junk/process_vals.php", {
            val: val,
            sc: sc,
            cal_process: cal_process
        }, function (r) {
            console.log(r);
        })
    }
})

///FUNCTION TO CALL THE UPDATE CODE FROM THE DATABASE/////
$("#updatebtn").on("click", () => {
    var rate = $("#rate").val(),
        tp_prem = $("#tp_prem").val(),
        ccl = $("#ccl").val(),
        cc_load = $("#cc_load").val(),
        ncd = $("#ncd").val(),
        fd = $("#fd").val(),
        addl_per = $("#addl_per").val(),
        eco_peril = $("#eco_peril").val(),
        pa = $("#pa").val(),
        pl = $("#pl").val(),
        eib = $("#eib").val(),
        tppdl_1 = $("#tppdl_1").val(),
        tppdl_2 = $("#tppdl_2").val(),
        tppdl_per = $("#tppdl_per").val(),
        levis = $("#levis").val(),
        exit_load_val_1 = $("#exit_load_val_1").val(),
        exit_load_val_2 = $("#exit_load_val_2").val(),
        update_conofig = "updateConf";

    if (rate == "") {

        alert("Rate field can not be empty");

    } else if (tp_prem == "") {

        alert("TP_PREM field can not be empty");
    } else if (ccl == "") {

        alert("CCL field can not be empty");
    } else if (cc_load == "") {

        alert("CC_LOAD field can not be empty");
    } else if (ncd == "") {

        alert("NCD cannot be empty");
    } else if (fd == "") {

        alert("FD cannot be empty");
    } else if (addl_per == "") {

        alert("ADDL_PER field cannot be empty");
    } else if (eco_peril == "") {

        alert("ECO_PERIL cannot be empty");
    } else if (pa == "") {

        alert("PA cannot be empty");
    } else if (pl == "") {

        alert("PL fields cannot be empty");
    } else if (eib == "") {

        alert("EIB fields cannot be empty");
    } else if (tppdl_1 == "") {

        alert("TPPDL fields cannot be empty");
    } else if (tppdl_2 == "") {

        alert("TPPDL fields cannot be empty");
    } else if (tppdl_per == "") {

        alert("TPPDL % fields cannot be empty");
    } else if (levis == "") {

        alert("LEVIES fields cannot be empty");
    } else if (exit_load_val_1 == "") {

        alert("EXT LOAD fields cannot be empty");
    } else if (exit_load_val_2 == "") {

        alert("EXT LOAD fields cannot be empty");
    } else {

        $.post("/table/admin/junk/manage_config.php", {
            rate: rate,
            tp_prem: tp_prem,
            ccl: ccl,
            cc_load: cc_load,
            ncd: ncd,
            fd: fd,
            addl_per: addl_per,
            eco_peril: eco_peril,
            pa: pa,
            pl: pl,
            eib: eib,
            tppdl_1: tppdl_1,
            tppdl_2: tppdl_2,
            tppdl_per: tppdl_per,
            levis: levis,
            exit_load_val_1: exit_load_val_1,
            exit_load_val_2: exit_load_val_2,
            update_conofig: update_conofig,
        }, function (da) {
            console.log(da);
            var da = JSON.parse(da);
            if (da.vSkySuc) {
                alert(da.vSkyNote);
            } else {
                alert(da.vSkyNote);
            }
        });

    }


});

$("#open_modal").on("click", () => {

    var fetch_conf = "conf_fetch";

    $.post("/table/admin/junk/manage_config.php", {
        fetch_conf: fetch_conf
    }, function (da) {

        var da = JSON.parse(da);

        if (da.vSkySuc) {

            $("#edit_rate").val(da.rate);
            $("#edit_tp_prem").val(da.tp_prem);
            $("#edit_ccl").val(da.ccl);
            $("#edit_cc_load").val(da.cc_load);
            $("#edit_ncd").val(da.ncd);
            $("#edit_fd").val(da.fd);
            $("#edit_addl_per").val(da.addl_per);
            $("#edit_eco_peril").val(da.eco_peril);
            $("#edit_pa").val(da.pa);
            $("#edit_pl").val(da.pl);

            $("#addquote").modal("show");

        }
    })

})

$("#user_form").on("submit", (e) => {

    e.preventDefault();

    $("div#alert-box span.note").fadeOut("slow").css("display", "none");

    var docsFile = $('#fileToUpload')[0].files[0],
        insurename = $("#insurename").val(),
        industry = $("#industry").val(),
        intermidiary = $("#intermidiary").val(),
        under_writer = $("#under_writer").val(),
        dateofquotation = $("#dateofquotation").val();

    if (insurename == "") {

        alert("insurename can not be empty")

    } else if (dateofquotation == "") {

        alert("date of quotation can not be empty")

    } else if (under_writer == "") {

        alert("Name of Underwriter can not be empty")

    } else if (docsFile != undefined) {

        var user_form = $("#user_form"),
            form_data = new FormData(user_form[0]);

        form_data.append('fileToUpload', docsFile);

        $.ajax({
            url: "functions.inc.php",
            type: "POST",
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            beforeSend: function () {
                console.log("hi");
            },
            success: function (data) {

                var r = JSON.parse(data);

                if (r.ext_err == "ext_err" && r.ext_err_note != "") {

                    $("div#alert-box span.note").fadeOut("slow").css("display", "none");

                    $("span.note").html(r.ext_err_note);
                    $("div#alert-box span.note").fadeIn("slow").css("display", "block");

                } else if (r.upload_err == "upload_err" && r.upload_err_note != "") {

                    $("div#alert-box span.note").fadeOut("slow").css("display", "none");

                    $("span.note").html(r.upload_err_note);
                    $("div#alert-box span.note").fadeIn("slow").css("display", "block");

                } else if (r.insert_ok == "insert_ok" && r.insert_ok_note != "") {

                    $("div#alert-box span.note").fadeOut("fast").css("display", "none");

                    $("#newUserModal").modal("hide");

                    alert(r.insert_ok_note);

                    setTimeout(function () {
                        document.location.reload(true);
                    }, 1000);

                } else if (r.insert_err == "insert_err" && r.insert_err_note != "") {

                    $("div#alert-box span.note").fadeOut("slow").css("display", "none");

                    $("span.note").html(r.insert_err_note);
                    $("div#alert-box span.note").fadeIn("slow").css("display", "block");

                }

            },
            error: function (err) {
                console.log(err)
            }
        });

    }
});