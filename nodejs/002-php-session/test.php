<?php 
    $name = 'Aleksandar';
    // var_dump($name)
    $num = 34;
    $nista = null;
    $istina = true;

    $names = ['Ana', 'Marija'];
    $person = [
        "name" => "Aleksandar",
        "age" => 42
    ];

    echo $names[0];
    echo $person['name'];

    for ($i=0; $i < 10; $i++) { 
        # code...
    }

    foreach ($person as $key => $value) {
        # code...
    }

    $car = 'Skoda';

    function info($car) {
        echo $car;
    }

    info($car)

?>