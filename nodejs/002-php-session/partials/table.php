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
                   <?php foreach ($pets as $key => $pet):?>
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
                            <a href="info.php?index=<?php echo $key?>" class="btn btn-primary">Info</a>
                        </td>
                    </tr>
                   <?php endforeach ?>
                </tbody>
            </table>