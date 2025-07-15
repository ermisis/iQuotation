<?php
    include('includes/header.php');
    include('includes/menubar.php');


	$sql = "SELECT * FROM `register`";
	$user_list = mysqli_query($conn,$sql);
	
	$rowcount=mysqli_num_rows($user_list);
?>



<!-- Table container -->
<div class="container-fluid">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h3><span class="badge badge-secondary float-left">Total Logs <span class="badge badge-light"><?php echo $rowcount;?></span></span></h3>
            <span class="float-right">
                <h6 class="m-0 font-weight-bold text-primary">
                    <!-- Button trigger modal -->
                    <!-- <button type="button" class="btn btn-purple" data-toggle="modal" data-target="#adduser">
                        Add New User
                    </button> -->
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
                        <th>EMAIL</th>
                        <th>CONTACT</th>
                        <th>PASSOWRD</th>
                        <th>DEPARTMENT</th>
                        <th>BRANCH</th>
                    </tr>
                </thead>
                <tbody>

                    <?php
				  
		while($row = mysqli_fetch_array($user_list)){
            
		$u_id = $row['id'];
        $username = $row['username'];
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
                <td>".$email."</td>
                <td>".$contact."</td>
                <td>".$password."</td>
                <td>".$department."</td>
                <td>".$branch."</td>
                </tr>" ;
        }
    else
    {
            echo "<tr>
                <td>".$u_id."</td>
                <td>".$username."</td>
                <td>".$email."</td>
                <td>".$contact."</td>
                <td>".$password."</td>
                <td>".$department."</td>
                <td>".$branch."</td>
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


<!-- Underwriter Log Modal -->





<?php
include('includes/scripts.php');
include('includes/footer.php');
?>
