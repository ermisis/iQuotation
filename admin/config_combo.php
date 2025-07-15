<?php
include('includes/header.php');
include('includes/menubar.php');
date_default_timezone_set('Africa/Accra');
?>


<div class="container-fluid">
    <div class="modal-body">
        <div class="modal-header">
            <h5 class="modal-title" id="quotationConfig">QUOTATION CONFIGURATIONS</h5>
            <form class="config_form" action="" method="POST" id="config_form" name="config_form" enctype="multipart/form-data">
                <section class="container-fluid">
                <?php
          
                    $getVals = mysqli_query($conn, "SELECT * FROM `config_combo` WHERE `id`='1'");
          
                        while($vals = mysqli_fetch_assoc($getVals)){
              
                  ?>
                  <div class="main-wrapper">
                    <div class="label label-primary label-outlined">ASSETS ALL RISKS</div><hr><br>
                      <div class="form-group">
                        <div class="form-row">
                         <div class="col"><br>
                           <label for="src" style="font-weight: bold;">Sum Insured</label>
                         </div>
                           <div class="col">FEA Discount
                               <input type="text" class="form-control" id="edit_fea_dscut_si" value="<?= $vals['fea_dscut_si']; ?>" name="edit_fea_dscut_si">
                           </div>
                            <div class="col">Hydrant Discount
                                <input type="text" class="form-control" id="edit_hd_si" value="<?= $vals['hd_si'];  ?>" name="edit_hd_si">
                            </div>
                             <div class="col">LTA Discount
                                <input type="text" class="form-control" id="edit_ltad_si" value="<?= $vals['ltad_si'];  ?>" name="edit_ltad_si">
                            </div>
                         </div>
                        </div>
                        <br><hr>
                    </div>
                    <div class="main-wrapper">
                    <div class="label label-primary label-outlined">FIRE &amp; ALLIED PERILS</div><hr><br>
                      <div class="form-group">
                        <div class="form-row">
                         <div class="col"><br>
                           <label for="src" style="font-weight: bold;">Sum Insured</label>
                         </div>
                           <div class="col">FEA Discount
                               <input type="text" class="form-control" id="edit_fea_dscut_si2" value="<?= $vals['fea_dscut_si2']; ?>" name="edit_fea_dscut_si2">
                           </div>
                            <div class="col">Hydrant Discount
                                <input type="text" class="form-control" id="edit_hd_si2" value="<?= $vals['hd_si2'];  ?>" name="edit_hd_si2">
                            </div>
                             <div class="col">LTA Discount
                                <input type="text" class="form-control" id="edit_ltad_si2" value="<?= $vals['ltad_si2'];  ?>" name="edit_ltad_si2">
                            </div>
                         </div>
                        </div>
                        <br><hr>
                    </div>
                    <div class="main-wrapper">
                    <div class="label label-primary label-outlined">HOME INSURANCE</div><hr><br>
                      <div class="form-group">
                        <div class="form-row">
                         <div class="col"><br>
                           <label for="src" style="font-weight: bold;">Sum Insured</label>
                         </div>
                           <div class="col">FEA Discount
                               <input type="text" class="form-control" id="edit_fea_dscut_si3" value="<?= $vals['fea_dscut_si3']; ?>" name="edit_fea_dscut_si3">
                           </div>
                            <div class="col">Hydrant Discount
                                <input type="text" class="form-control" id="edit_hd_si3" value="<?= $vals['hd_si3'];  ?>" name="edit_hd_si3">
                            </div>
                             <div class="col">LTA Discount
                                <input type="text" class="form-control" id="edit_ltad_si3" value="<?= $vals['ltad_si3'];  ?>" name="edit_ltad_si3">
                            </div>
                         </div>
                        </div>
                    </div>
                    <br><hr>
                    <div class="main-wrapper">
                    <div class="label label-primary label-outlined">COMBINED FIRE &amp; BURGLARY</div><hr><br>
                      <div class="form-group">
                        <div class="form-row">
                         <div class="col"><br>
                           <label for="src" style="font-weight: bold;">Sum Insured</label>
                         </div>
                           <div class="col">FEA Discount
                               <input type="text" class="form-control" id="edit_fea_dscut_si4" value="<?= $vals['fea_dscut_si4']; ?>" name="edit_fea_dscut_si4">
                           </div>
                            <div class="col">Hydrant Discount
                                <input type="text" class="form-control" id="edit_hd_si4" value="<?= $vals['hd_si4'];  ?>" name="edit_hd_si4" onkeypress="return numberOnly(event)">
                            </div>
                             <div class="col">LTA Discount 
                                <input type="text" class="form-control" id="edit_ltad_si4" value="<?= $vals['ltad_si4'];  ?>" name="edit_ltad_si4">
                            </div>
                         </div>
                        </div>
                    </div>
                    <?php
                        }
                    ?>
                </section>
                <div class="modal-footer">
                    <button type="button" name="updatebtn_combo" id="updatebtn_combo" class="btn btn-purple">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php
include('includes/scripts.php');
include('includes/footer.php');
?>
