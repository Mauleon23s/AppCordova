<?php 
include '../../xampp/htdocs/admin/sql/conexion.php';

    $json = file_get_contents('php://input');
    $obj = json_decode($json,true);

    $usuario = $obj['user'];
    $password = $obj['password'];

    if($obj['user'] != "")
    {
        $sql="Select * from usuarios where login='$user' and password='$password'";
        $query = $conn->query($sql);  

        if($query->num_rows == 0){
            echo json_encode("Wrong Details");
        }
        else{
            echo json_encode('ok');
        }
    }
    else{
        echo json_encode('try again');
    }

?>