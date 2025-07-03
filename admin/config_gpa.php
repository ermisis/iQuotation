<?php
include('includes/header.php');
include('includes/menubar.php');
date_default_timezone_set('Africa/Accra');
?>

<div class="container"><h5 class="modal-title" id="quotationConfig">Quotation Field Configurations</h5></div>
<div class="container-fluid">
    <div class="modal-body">
        <div class="modal-header">
            <form class="config_form" action="" method="POST" id="config_form" name="config_form" enctype="multipart/form-data">
                <section class="main-container">
            <?php
          
          $getVals = mysqli_query($conn, "SELECT * FROM `config_gpa` WHERE `id`='1'");
          
          while($vals = mysqli_fetch_assoc($getVals)){
              
          ?>
        <div class="label label-primary label-outlined">Benefit - Standard</div>
          <div class="form-group">
           <hr>
            <div class="form-row">
             <div class="col" style="font-weight: bold;">Category - Clerical
              <hr>
               <label for="terms">Terms</label>
             </div>
             <div class="col-sm-2" style="font-weight: bold;">Death<hr>
              <input type="text" class="form-control" id="death_as" name="death_as" value="<?= $vals['death_as']; ?>" onkeypress="return numberOnly(event)">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Permanent Disablement<hr>
              <input type="text" class="form-control" id="pd_terms" name="pd_terms" value="<?= $vals['pd_terms']; ?>" onkeypress="return">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Temporal Disablement<hr>
              <input type="text" class="form-control" id="td_terms" name="td_terms" value="<?= $vals['td_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
             <div class="col-md-2" style="font-weight: bold;">Medical Expense<hr>
              <input type="text" class="form-control" id="me_terms" name="me_terms" value="<?= $vals['me_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
              </div>
               </div>
               <hr><br>
               <div class="label label-primary label-outlined">Benefit - Standard</div>
          <div class="form-group">
           <hr>
            <div class="form-row">
             <div class="col" style="font-weight: bold;">Category - Clerical
              <hr>
               <label for="terms">Terms</label>
             </div>
             <div class="col-sm-2" style="font-weight: bold;">Death<hr>
              <input type="text" class="form-control" id="death2_as" name="death2_as" value="<?= $vals['death2_as']; ?>" onkeypress="return numberOnly(event)">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Permanent Disablement<hr>
              <input type="text" class="form-control" id="pd2_terms" name="pd2_terms" value="<?= $vals['pd2_terms']; ?>" onkeypress="return">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Temporal Disablement<hr>
              <input type="text" class="form-control" id="td2_terms" name="td2_terms" value="<?= $vals['td2_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
             <div class="col-md-2" style="font-weight: bold;">Medical Expense<hr>
              <input type="text" class="form-control" id="me2_terms" name="me2_terms" value="<?= $vals['me2_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
              </div>
               </div>
               <div class="label label-primary label-outlined">Benefit - Standard</div>
          <div class="form-group">
           <hr>
            <div class="form-row">
             <div class="col" style="font-weight: bold;">Category - Clerical
              <hr>
               <label for="terms">Terms</label>
             </div>
             <div class="col-sm-2" style="font-weight: bold;">Death<hr>
              <input type="text" class="form-control" id="death4_as" name="death4_as" value="<?= $vals['death4_as']; ?>" onkeypress="return numberOnly(event)">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Permanent Disablement<hr>
              <input type="text" class="form-control" id="pd4_terms" name="pd4_terms" value="<?= $vals['pd4_terms']; ?>" onkeypress="return">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Temporal Disablement<hr>
              <input type="text" class="form-control" id="td4_terms" name="td4_terms" value="<?= $vals['td4_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
             <div class="col-md-2" style="font-weight: bold;">Medical Expense<hr>
              <input type="text" class="form-control" id="me4_terms" name="me4_terms" value="<?= $vals['me4_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
              </div>
               </div>
               <hr><br>
               <div class="label label-primary label-outlined">Benefit - Standard</div>
          <div class="form-group">
           <hr>
            <div class="form-row">
             <div class="col" style="font-weight: bold;">Category - Clerical
              <hr>
               <label for="terms">Terms</label>
             </div>
             <div class="col-sm-2" style="font-weight: bold;">Death<hr>
              <input type="text" class="form-control" id="death5_as" name="death5_as" value="<?= $vals['death5_as']; ?>" onkeypress="return numberOnly(event)">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Permanent Disablement<hr>
              <input type="text" class="form-control" id="pd5_terms" name="pd5_terms" value="<?= $vals['pd5_terms']; ?>" onkeypress="return">
             </div>
                 <div class="col-md-3" style="font-weight: bold;">Temporal Disablement<hr>
              <input type="text" class="form-control" id="td5_terms" name="td5_terms" value="<?= $vals['td5_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
             <div class="col-md-2" style="font-weight: bold;">Medical Expense<hr>
              <input type="text" class="form-control" id="me5_terms" name="me5_terms" value="<?= $vals['me5_terms']; ?>" onkeypress="return numberOnly(event)">
             </div>
              </div>
               </div><hr>
                  <div class="form-group">
           <hr>
            <div class="form-row">
             <div class="col-xs-2" style="font-weight: bold;">TOTAL PREMIUM
              <hr>
               <label for="terms">Group Discount </label>
             </div><br>
             <div class="col-md-3">Estimated Total Annual Salaries<hr>
              <input type="text" class="form-control" id="gd4gpa_rate" name="gd4gpa_rate" value="<?= $vals['gd4gpa_rate']; ?>" onkeypress="return numberOnly(event)">
             </div>
              </div>
               </div>
                </section>
                <?php
                        }
                    ?>
                <div class="modal-footer">
                    <button type="button" name="updatebtn_gpa" id="updatebtn_gpa" class="btn btn-secondary">Update</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php
include('includes/scripts.php');
include('includes/footer.php');
?>
