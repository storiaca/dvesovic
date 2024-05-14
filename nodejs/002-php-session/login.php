<?php 

session_start();

require("admin.php");

$username = $_POST['username'];
$password = $_POST['password'];

if ($admin['username'] === $username && $admin['password'] === $password) {
  
    $_SESSION['pet'] = 'Danilo';
}


header("Location: index.php")
?>