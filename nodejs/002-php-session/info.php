<?php require('pets.php') ?>
<?php 
    $index = $_GET['index'];
    $one_pet = $pets[$index];
?>
<?php require('partials/top.php') ?>

<div class="container">
    <h1><?php echo $one_pet['name'] ?> Info</h1>
    <div class="row">
        <div class="col-6 offset-3">
            <p><?php echo $one_pet['info'] ?></p>
        </div>
    </div>
</div>
<?php require('partials/bottom.php') ?>
