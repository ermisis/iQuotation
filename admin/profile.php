<?php

    include('includes/header.php');
    include('includes/menubar.php');

    $sql = "SELECT * FROM `register` WHERE `id`='".$_SESSION['u_id']."'";
    $profile = mysqli_query($conn,$sql);

?>

<div class="page-wrapper">
    <!-- ============================================================== -->
    <!-- Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-7 align-self-center">
                <!-- <h3 class="page-title text-truncate text-dark font-weight-medium mb-1">My Profile</h3> -->
                <div class="d-flex align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb m-0 p-0">
                            <li class="breadcrumb-item"><a href="register.php">Profile Management Section</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- End Bread crumb and right sidebar toggle -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- Container fluid  -->
    <!-- ============================================================== -->
    <div class="container-fluid">
        <!-- *************************************************************** -->
        <!-- User Input Form Cards Starts Here-->
        <!-- *************************************************************** -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                    <?php 
                        while ($fetch = mysqli_fetch_assoc($profile)) {
                            
                    ?>
                        <h4 class="card-title">My Profile</h4>
                        <hr>
                        <form class="form-body" action="" method="POST" id="profile_form" name="profile_form"
                            enctype="multipart/form-data">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">User
                                                    Name</span>
                                            </div>
                                            <input type="hidden" class="form-control border-1 custom-shadow custom-radius"
                                                id="edit_id" name="id" value="<?= $fetch['id']; ?>">
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="username_edit" name="username" value="<?= $fetch['username']; ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Full
                                                    Name</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="fullname_edit" name="fullname" value="<?= $fetch['fullname']; ?>">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">E-mail</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="email_edit" name="email" value="<?= $fetch['email']; ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Contact</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="contact_edit" name="contact" value="<?= $fetch['contact']; ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Password</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="password_edit" name="password" value="<?= $fetch['password']; ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Department</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="department_edit" name="department" value="<?= $fetch['department']; ?>">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Branch
                                                </span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="branch_edit" name="branch" value="<?= $fetch['branch']; ?>">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="text-right">
                                    <button type="submit" class="btn btn-aqua" id="update_user">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                        <?php }?>
                </div>
            </div>
        </div>
        <!-- *************************************************************** -->
        <!-- User Input Form Cards Ends Here -->
        <!-- *************************************************************** -->
        <!-- </div> -->
        <!-- *************************************************************** -->
        <!-- End User Table -->
        <!-- *************************************************************** -->
        <!-- *************************************************************** -->
        <!-- User Modal Starts Here -->
        <!-- *************************************************************** -->
        <div class="modal fade" id="userEditModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content modal-lg">
                    <div class="modal-header modal-lg">
                        <h5 class="modal-title text-primary" id="exampleModalLabel" style="font-weight:bold;">UPDATE USER</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form class="form-body" action="" method="POST" id="user_form_v" name="user_form_v"
                            enctype="multipart/form-data">
                            <div class="row">
                                <div class="col-md-6">
                                    <input type="hidden" id="userId_v" name="userId_v">
                                    <input type="text" class="custom-select custom-select-set form-control border-2 custom-radius" id="selectedRole_v">
                                </div>
                            </div>
                            <hr>
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">First
                                                    Name</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="userFirstName_v" name="userFirstName_v">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Last
                                                    Name</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="userLastName_v" name="userLastName_v">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Username</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="userName_v" name="userName_v">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">Password</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="userPassword_v" name="userPassword_v">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="input-group form-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text border-0 custom-shadow custom-radius"
                                                    id="inputGroup-sizing-default">User
                                                    Mobile</span>
                                            </div>
                                            <input type="text" class="form-control border-1 custom-shadow custom-radius"
                                                id="userNo_v" name="userNo_v">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions">
                                <div class="text-right">
                                    <button type="button" class="btn btn-outline-danger"
                                        data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-info" id="update_user_btn">Update</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- *************************************************************** -->
        <!-- User Modal Ends Here -->
        <!-- *************************************************************** -->
    </div>
    <!-- ============================================================== -->
    <!-- End Container fluid  -->
    <!-- ============================================================== -->



<?php
include('includes/scripts.php');
include('includes/footer.php');
?>