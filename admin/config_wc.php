<?php
include('includes/header.php');
include('includes/menubar.php');
date_default_timezone_set('Africa/Accra');
?>

<div class="container"><h5 class="modal-title" id="quotationConfig">QUOTATION CONFIGURATIONS</h5></div>
<div class="container-fluid">
    <div class="modal-body">
        <div class="modal-header">
            <form class="config_form" action="" method="POST" id="config_form" name="config_form" enctype="multipart/form-data">
                <section class="container-fluid">
                <?php
          
                    $getVals = mysqli_query($conn, "SELECT * FROM `config_wc` WHERE `id`='1'");
          
                        while($vals = mysqli_fetch_assoc($getVals)){
              
                  ?>
                    <div class="label label-primary label-outlined">WORKMENS' COMPENSATION</div><hr><br>
                      <div class="form-group">
                        <div class="form-row">
                         <div class="col-xs-2" style="font-weight: bold;"><br>
                           <label for="terms">Rate</label>
                         </div>
                           <div class="col-md-3">Medical Expense Loading
                               <input type="text" class="form-control" id="mel_rate_edit" value="<?= $vals['mel_rate']; ?>" name="mel_rate_edit">
                           </div>
                            <div class="col-md-3">Common Law Loading
                                <input type="text" class="form-control" id="cll_rate_edit" value="<?= $vals['cll_rate']; ?>" name="cll_rate_edit">
                            </div>
                             <div class="col-md-2">To &amp; Fro Work
                                <input type="text" class="form-control" id="tfw_rate_edit" value="<?= $vals['tfw_rate']; ?>" name="tfw_rate_edit">
                            </div>
                            <div class="col-md-2">Group Discount
                                <input type="text" class="form-control" id="gd_rate_edit" value="<?= $vals['gd_rate']; ?>" name="gd_rate_edit">
                            </div>
                         </div>
                        </div>
                    <?php
                        }
                    ?>
                </section>
                <div class="modal-footer">
                    <button type="button" name="updatebtn_wc" id="updatebtn_wc" class="btn btn-purple">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php
include('includes/scripts.php');
include('includes/footer.php');
?>
