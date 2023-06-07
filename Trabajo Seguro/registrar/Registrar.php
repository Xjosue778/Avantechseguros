<?php

    $Nombre = $_POST['usuario'];
    $Apellido = $_POST['Apellido'];
    $Correo = $_POST['Correo'];
    $password = $_POST['password'];




$servidor = "localhost";
$usuario = "root";
$clave = "";
$DB ="ab_seguros";

$conexion = mysqli_connect($servidor, $usuario, $clave, $DB);

if(!$conexion) {
    die("Error de conexion-->".mysqli_connect_error());
}



$sql = "INSERT INTO personal(Usuario, Apellido, Correo, password ) VALUES ('$Nombre', '$Apellido', '$Correo', '$password')";

$Resultado = mysqli_query($conexion, $sql);

if($Resultado) {
    echo "Los datos se han registrado";
} else {
    echo "Error al insertar los datos-->".mysqli_error($conexion);
}
?>

