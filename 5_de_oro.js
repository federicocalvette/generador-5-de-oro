$(() => {
    
    let cantBolasASortear = 6; //Cantidad de bolas que voy a sortear
    let maxCantBolas = 50; //Numero mas alto que puede tener una bola del 5 de Oro
    let bolas = []; //Arreglo con las 50 bolas 
    let bolasSorteadasResultado = []; //Arreglo donde se cargan las 6 bolas que salieron sorteadas

    $('.container').fadeIn(1000); //desvanecer el contenedor
    $('.container button').hide().delay(1000).fadeIn(2000);
    $('.container button').click(function () { //espera que se haga click en el botón

        for (i = 0; i < cantBolasASortear; i++) {
            //Animaciones 
            $('.ball' + i).addClass('addanimation');
        };
        $('.container button').hide(500); //ocultar cuando se hace click
        $('.goodluck').delay(3000).fadeIn(1000); //Mostrar el mensaje de suerte!
    });

    //Generar los números deL 5 de Oro, cargandolos en el arreglo de bolas 
    for (i = 0; i < maxCantBolas; i++) {
        bolas[i] = i + 1;
    };

    //Sacar una bola y eliminarla para que no se repita
    for (j = 0; j < cantBolasASortear; j++) {
        let selector = (Math.floor(Math.random() * bolas.length));
        bolasSorteadasResultado[j] = bolas[selector];
        bolas.splice(selector, 1);
    };

    //Cargar las bolas que salieron en los divs
    for (i = 0; i < cantBolasASortear; i++) {
        let resultadoBola = bolasSorteadasResultado[i];
        $('div.ball' + i).text(resultadoBola);
    }
});