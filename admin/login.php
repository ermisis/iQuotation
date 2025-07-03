<?php 

    include('includes/header.php');
    date_default_timezone_set('Africa/Accra');


?>


<body class="bg-gradient-purple">

    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-sm-3 d-none d-lg-block"></div>
                            <div class="col-lg-6">
                                <div class="p-1">
                                    <div class="text-center">
                                        <img src="/table/admin/img/whiteHollard.jpg" alt="Hollard">
                                        <h1 class="h3 text-purple-900 mb-4">QUOTATION PLATFORM</h1>
                                    </div>
                                    <form class="user" action="junk/access.php" method="POST">
                                        <div class="form-group">
                                            <input type="text" name="username" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Username">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" name="submit" id="submit" class="btn btn-purple btn-user btn-block">LOGIN</button>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Forgot Password?</a>
                                    </div><br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</body>



<?php
include('includes/scripts.php');
?>
