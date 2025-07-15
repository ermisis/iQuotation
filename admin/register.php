<?php
    include('includes/header.php');
    include('includes/menubar.php');


	$sql = "SELECT * FROM `register`";
	$user_list = mysqli_query($conn,$sql);
	
	$rowcount=mysqli_num_rows($user_list);
?>



<!-- Modal -->
<div class="modal fade" id="adduser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-purple" id="exampleModalLabel">Add User Profile</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="main-form" action="" method="POST" id="user_form" name="user_form" enctype="multipart/form-data">
                    <section class="main-container">
                        <div class="main-wrapper">
                            <div class="form-group">
                                <input type="text" class="form-control" id="username" name="username" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="fullname" name="fullname" placeholder="Full Name">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="email" name="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="contact" name="contact" placeholder="Contact">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="password" name="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="department" name="department" placeholder="Department">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="branch" name="branch" placeholder="Branch">
                            </div>
                        </div>
                    </section>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-Ored" data-dismiss="modal">Close</button>
                        <button type="submit" name="register_user" id="register_user" class="btn btn-purple">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="container-fluid">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h3><span class="badge badge-secondary float-left">Total List <span class="badge badge-light"><?php echo $rowcount;?></span></span></h3>
            <span class="float-right">
                <h6 class="m-0 font-weight-bold text-primary">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-purple" data-toggle="modal" data-target="#adduser">
                        Add New User
                    </button>
                </h6>
            </span>
        </div>
    </div>
    <div class="card-body">
        <div class="table-responsive" style="text-align: center;">
            <table id="userTb" class="table table-striped table-bordered" width="100%" cellspacing="0" style="text-align: center;">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USERNAME</th>
                        <th>FULL NAME</th>
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                        <th>PASSOWRD</th>
                        <th>DEPARTMENT</th>
                        <th>BRANCH</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>

                    <?php
				  
                    while($row = mysqli_fetch_array($user_list)){
                        
                    $u_id = $row['id'];
                    $username = $row['username'];
                    $fullname = $row['fullname'];
                    $email = $row['email'];
                    $contact = $row['contact'];
                    $password = $row['password'];
                    $department = $row['department'];
                    $branch = $row['branch'];
                    

                if (isset($_SESSION['username'])) {
                            if ($_SESSION['username'] == "Admin") {
                
                        echo "<tr>
                            <td>".$u_id."</td>
                            <td>".$username."</td>
                            <td>".$fullname."</td>
                            <td>".$email."</td>
                            <td>".$contact."</td>
                            <td>".$password."</td>
                            <td>".$department."</td>
                            <td>".$branch."</td>
                            <td><button type='button' class='btn btn-Ored delBtn_user btn-sm' data-placement='top' title='Delete User' id='$u_id' Tooltip on top><i class='fa fa-trash'></i></button>
                                        <button type='button' class='btn btn-gold btn-sm editUser' data-placement='top' title='Edit' data-toggle='modal' data-target='#editModal'><i class='fa fa-edit'></i></button></td>
                            </tr>" ;
                    }
                        else
                        {
                                echo "<tr>
                                    <td>".$u_id."</td>
                                    <td>".$username."</td>
                                    <td>".$fullname."</td>
                                    <td>".$email."</td>
                                    <td>".$contact."</td>
                                    <td>".$password."</td>
                                    <td>".$department."</td>
                                    <td>".$branch."</td>
                                    <td><button type='button' disabled class='btn btn-Ored delBtn_user btn-sm' data-placement='top' title='Delete User' id='$u_id' Tooltip on top><i class='fa fa-trash'></i></button>
                                                <button type='button' disabled class='btn btn-gold btn-sm editUser' data-placement='top' title='Edit' data-toggle='modal' data-target='#editModal'><i class='fa fa-edit'></i></button></td>
                                    </tr>" ;
                        }
                    
                            }
                    }
                                                    
                    ?>

                </tbody>
            </table>

        </div>

    </div>
</div>
<!-- /.container-fluid -->


<!-- Beginning of Update Modal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-purple" id="exampleModalLabel">Edit User Profile</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="main-form" method="POST" enctype="multipart/form-data">
                    <section class="main-container">
                        <div class="main-wrapper">
                            <div>
                                <input type="hidden" id="edit_id" name="edit_id">
                            </div>
                            <div class="form-group">
                                <label>Username</label>
                                <input type="text" class="form-control" id="username_edit" name="username" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <label>Full Name</label>
                                <input type="text" class="form-control" id="fullname_edit" name="fullname_edit" placeholder="Full Name">
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" id="email_edit" name="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label>Contact</label>
                                <input type="text" class="form-control" id="contact_edit" name="contact" placeholder="Contact">
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="text" class="form-control" id="password_edit" name="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label>Department</label>
                                <input type="text" class="form-control" id="department_edit" name="department" placeholder="Department">
                            </div>
                            <div class="form-group">
                                <label>Branch</label>
                                <input type="text" class="form-control" id="branch_edit" name="branch" placeholder="Branch">
                            </div>
                        </div>
                    </section>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-Ored" data-dismiss="modal">Close</button>
                        <button type="submit" name="update_user" id="update_user" class="btn btn-purple">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>




<?php
include('includes/scripts.php');
include('includes/footer.php');
?>
