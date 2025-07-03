<?php 
include('includes/header.php');
include('includes/menubar.php');
date_default_timezone_set('Africa/Accra');
?>



<div class="container-fluid">
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#fleet-form" role="tab"
        aria-controls="pills-home" aria-selected="true">Fleet Quotaions</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
        aria-controls="pills-profile" aria-selected="false">Premium Quotations</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
        aria-controls="pills-contact" aria-selected="false">View Quotations</a>
    </li>
  </ul>

  <div class="tab-content" id="pills-tabContent">

    <!-- BEGINNING OF FLEET QUOTATION FIELD -->
    <div class="tab-pane fade show active" id="fleet-form" role="tabpanel" aria-labelledby="pills-home-tab">
      <div class="container-fluid">

        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Click Here To ->
              <!-- Button trigger modal -->
              <button type="button" id="fleet_add" class="btn btn-primary" data-toggle="modal"
                data-target="#fleet_quotation">
                Add New Quotation
              </button>
            </h6>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="fleet_quotation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add New Quote</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="quote_form" action="" method="POST" id="quote_form" name="quote_form"
                  enctype="multipart/form-data">
                  <section class="main-container">
                    <div class="main-wrapper">
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">REG.NO
                            <input type="text" class="form-control" id="edit_reg_no" name="reg_no">
                          </div>
                          <div class="col">MAKE OF VEH
                            <input type="text" class="form-control" id="edit_make_of_veh" name="make_of_veh">
                          </div>
                          <div class="col">VALUE
                            <input type="text" class="form-control" id="edit_value" name="value"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">RATE %
                            <input type="text" class="form-control" id="edit_rate" name="rate"
                              onkeypress="return numberOnly(event)">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">BASIC PREM
                            <input type="text" class="form-control" id="edit_basic_prem" name="basic_prem"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">SC
                            <input type="text" class="form-control" id="edit_sc" name="sc"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">TP PREM
                            <input type="text" class="form-control" id="edit_tp_prem" name="tp_prem"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">CCL %
                            <input type="text" class="form-control" id="edit_ccl" name="ccl"
                              onkeypress="return numberOnly(event)">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">CC LOAD
                            <input type="text" class="form-control" id="edit_cc_load" name="cc_load"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">GROSS PREM
                            <input type="text" class="form-control" id="edit_gross_prem" name="gross_prem"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">NCD %
                            <input type="text" class="form-control" id="edit_ncd" name="ncd"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">NET AFTER NCD
                            <input type="text" class="form-control" id="edit_net_after_ncd" name="net_after_ncd"
                              onkeypress="return numberOnly(event)">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">FD %
                            <input type="text" class="form-control" id="edit_fd" name="fd"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">NET AFTER FRB
                            <input type="text" class="form-control" id="edit_net_after_frb" name="net_after_frb"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">EXT LOAD
                            <input type="text" class="form-control" id="edit_exit_load" name="exit_load"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">ADDL PER
                            <input type="text" class="form-control" id="edit_addl_per" name="addl_per"
                              onkeypress="return numberOnly(event)">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">ECO PERIL
                            <input type="text" class="form-control" id="edit_eco_peril" name="eco_peril"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">PA
                            <input type="text" class="form-control" id="edit_pa" name="pa"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">PL
                            <input type="text" class="form-control" id="edit_pl" name="pl"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">TPPDL
                            <input type="text" class="form-control" id="edit_tppdl" name="tppdl"
                              onkeypress="return numberOnly(event)">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">EIB
                            <input type="text" class="form-control" id="edit_eib" name="eib"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">U/WPREM
                            <input type="text" class="form-control" id="edit_u_wprem" name="u_wprem"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">LEVIES
                            <input type="text" class="form-control" id="edit_levis" name="levis"
                              onkeypress="return numberOnly(event)">
                          </div>
                          <div class="col">PRE.PAYABLE
                            <input type="text" class="form-control" id="edit_pre_payable" name="pre_payable"
                              onkeypress="return numberOnly(event)">
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div class="modal-footer">
                    <button type="button" name="calcBtn" id="calcBtn" class="btn btn-secondary" disabled>Click to
                      Calculate</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" name="registerbtn" id="registerbtn" class="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="container-fluid">
            <div class="table-responsive">
              <table id="fleetquote" class="table table-striped table-bordered" style="width:120%">
                <thead>
                  <tr>
                    <th>Reg.No.</th>
                    <th>Make of Veh</th>
                    <th>Values</th>
                    <th>Rate</th>
                    <th>Basic Prem</th>
                    <th>SC</th>
                    <th>TP PREM</th>
                    <th>CCL %</th>
                    <th>CC LOAD</th>
                    <th>Gross Prem</th>
                    <th>NCD %</th>
                    <th>Net after NCD</th>
                    <th>FD</th>
                    <th>Net after FRB</th>
                    <th>Ext Load</th>
                    <th>Eco Peril</th>
                    <th>PA</th>
                    <th>PL</th>
                    <th>TPPDL</th>
                    <th>EIB</th>
                    <th>U/WPerm</th>
                    <th>Levies</th>
                    <th>Pre.Payable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>



        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Submit &amp; Sign-Off
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#submit">
                Here
              </button>
            </h6>
          </div>
        </div>
        <div class="modal fade" id="submit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add Reference Name</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="quote_form" action="" method="POST" id="quote_submit" name="quote_submit"
                  enctype="multipart/form-data">
                  <section class="main-container">
                    <div class="main-wrapper">
                      <div class="form-group">
                        <input type="text" class="form-control" id="insured" name="insured" placeholder="INSURED">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" id="industry" name="industry" placeholder="INDUSTRY">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" id="intermediary" name="intermediary"
                          placeholder="INTERMEDIARY">
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" id="line_of_business" name="line_of_business"
                          placeholder="LINE OF BUSINESS">
                      </div>
                      <div class="form-group">
                        <div class="form-row">
                          <div class="col">
                            <input type="text" class="form-control" id="limits" name="limits" placeholder="LIMITS">
                          </div>
                          <div class="col">
                            <input type="date" class="form-control" id="date" name="date" placeholder="DATE OF ISSUE">
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="text" class="form-control" id="underwriter" name="underwriter"
                          placeholder="NAME OF UNDERWRITER">
                      </div>


                    </div>
                  </section>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" name="apply" id="apply" class="btn btn-primary">Apply</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>


    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
  </div>
</div>






<?php

include('includes/scripts.php');
include('includes/footer.php');

?>