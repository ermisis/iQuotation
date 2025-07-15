<?php
include('includes/header.php');
include('includes/menubar.php');
date_default_timezone_set('Africa/Accra');
?>


<div class="container-fluid">
    <div class="modal-body">
        <div class="modal-header">
            <h5 class="modal-title" id="quotationConfig">Quotation Field Configurations</h5>
            <form class="config_form" action="" method="POST" id="config_form" name="config_form" enctype="multipart/form-data">
                <section class="main-container">
                    <?php
          
          $getVals = mysqli_query($conn, "SELECT * FROM `config_quote` WHERE `id`='1'");
          
          while($vals = mysqli_fetch_assoc($getVals)){
              
          ?>
                    <div class="main-wrapper">
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">RATE %
                                    <input type="text" class="form-control" id="rate" value="<?= $vals['rate'];  ?>" name="rate" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col">TP PREM
                                    <input type="text" class="form-control" id="tp_prem" value="<?= $vals['tp_prem'];  ?>" name="tp_prem" onkeypress="return numberOnly(event)">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">CCL %
                                    <input type="text" class="form-control" id="ccl" value="<?= $vals['ccl'];  ?>" name="ccl" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col">CC LOAD
                                    <input type="text" readonly class="form-control" id="cc_load" value="<?= $vals['cc_load'];  ?>" name="cc_load" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col">NCD %
                                    <input type="text" class="form-control" id="ncd" value="<?= $vals['ncd'];  ?>" name="ncd" onkeypress="return numberOnly(event)">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">ADDL PER
                                    <input type="text" class="form-control" id="addl_per" value="<?= $vals['addl_per'];  ?>" name="addl_per" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col">ECO PERIL
                                    <input type="text" class="form-control" id="eco_peril" value="<?= $vals['eco_peril'];  ?>" name="eco_peril" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col">EIB (Val %)
                                    <input type="text" class="form-control" id="eib" value="<?= $vals['eib'];  ?>" name="eib" onkeypress="return numberOnly(event)">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-4">TPPDL (val 1)
                                    <input type="text" class="form-control" id="tppdl_1" value="<?= $vals['tppdl_val_1'];  ?>" name="tppdl" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col-md-4">TPPDL (val 2)
                                    <input type="text" class="form-control" id="tppdl_2" value="<?= $vals['tppdl_val_2'];  ?>" name="pl" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col-md-4">TPPDL (val %)
                                    <input type="text" class="form-control" id="tppdl_per" value="<?= $vals['tppdl_val_per'];  ?>" name="eib" onkeypress="return numberOnly(event)">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col">EXT LOAD (Val 1)
                                    <input type="text" class="form-control" id="exit_load_val_1" value="<?= $vals['exit_load_val_1'];  ?>" name="exit_load_val_1" onkeypress="return numberOnly(event)">
                                </div>
                                <div class="col">EXT LOAD (Val 2)
                                    <input type="text" class="form-control" id="exit_load_val_2" value="<?= $vals['exit_load_val_2'];  ?>" name="exit_load_val_2" onkeypress="return numberOnly(event)">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <?php
                        }
                    ?>

                <div class="modal-footer">
                    <button type="button" name="updatebtn" id="updatebtn" class="btn btn-secondary">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php
include('includes/scripts.php');
include('includes/footer.php');
?>
