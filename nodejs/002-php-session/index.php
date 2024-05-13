<?php require('pets.php') ?>
<?php require('partials/top.php') ?>

<div class="container">
    <h1>Welcome to PetShop</h1>
    <div class="row">
        <div class="col-6 offset-3">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th>Pet</th>
                        <th>Type</th>
                        <th>Owner</th>
                        <th>Info</th>
                    </tr>
                </thead>
                <tbody>
                   <?php foreach ($pets as $pet):?>
                    <tr>
                        <td>
                            <?php echo $pet['name'] ?>
                        </td>
                        <td>
                            <?php echo $pet['type'] ?>
                        </td>
                        <td>
                            <?php echo $pet['owner'] ?>
                        </td>
                        <td>
                            <a href="process.php" class="btn btn-primary">Info</a>
                        </td>
                    </tr>
                   <?php endforeach ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php require('partials/bottom.php') ?>
