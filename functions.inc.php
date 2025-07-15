<?php

    include 'dbh.inc.php';

    if (isset($_POST['insurename']) && !empty($_POST['insurename']) &&
        isset($_POST['dateofquotation']) && !empty($_POST['dateofquotation']) &&
        isset($_POST['under_writer']) && !empty($_POST['under_writer']) &&
        isset($_FILES['fileToUpload'])){

        
        $insurename = mysqli_real_escape_string($conn, $_POST['insurename']);
        $industry = mysqli_real_escape_string($conn, $_POST['industry']);
        $intermidiary = mysqli_real_escape_string($conn, $_POST['intermidiary']);
        $under_writer = mysqli_real_escape_string($conn, $_POST['under_writer']);
        
        $date =(date_format(date_create($_POST['dateofquotation']),"Y-m-d h:i:s"));

        if(!empty($_FILES['fileToUpload'])){
            
            // valid extensions .doc .pdf .docx .ppt .xlsx
            $valid_exts = array('doc', 'pdf', 'docx', 'ppt', 'xlsx');
            
            $docs = $_FILES['fileToUpload']['name'];
            $tmp = $_FILES['fileToUpload']['tmp_name'];
            
            // get uploaded file's extention
            $ext = strtolower(pathinfo($docs, PATHINFO_EXTENSION));
            
            if(in_array($ext, $valid_exts)){
                
                $newFileName = $insurename."_".time().'.'.$ext;
                
                if(move_uploaded_file($tmp, 'uploads/'.$newFileName)){

                                    
                    if (mysqli_query($conn, sprintf("INSERT INTO `user`(`insurename`, `industry`, `intermidiary`, `dateofquotation`, `afile`, `under_writer`) VALUES ('%s', '%s', '%s', '%s', '%s','%s')", $insurename, $industry, $intermidiary, $date, $newFileName, $under_writer))){

                            $jk['insert_ok_note'] = "Data Added Successfully";
                            $jk['insert_ok'] = "insert_ok";

                    }else{

                        $jk['insert_err_note'] = "Error Adding Data";
                        $jk['insert_err'] = "insert_err";

                    }

                }else{

                     $jk['upload_err_note'] = "Error Uploading File Please Try Again Later";
                     $jk['upload_err'] = "upload_err";

                }

                
            }else{
                
                $jk['ext_err_note'] = "File Selected Is Not Allowed";
                $jk['ext_err'] = "ext_err";
                
            }
            
         echo json_encode($jk);


        }

    }else{

        echo "All Fields Are Required";

    }

