const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
  "piangere", "ridere", "amare", "amare1", "spavento", "shock"
];
var numeriMix;

function randomizza() {
  var arrayNumeri = Array.from(Array(16).keys());

  function shuffle(numero) {
    for (var j, x, i = numero.length; i; j = parseInt(Math.random() * i), x = numero[--i], numero[i] = numero[j], numero[j] = x);
    return numero;
  };
  numeriMix = shuffle(arrayNumeri);

  var b = 0;
  var flag = 0;
  for (let a = 0; a < 4; a++) {
    $('.gioco').append("<div id='row" + a + "'></div>");
    if (flag == 1) {
      b = b + 4;
      flag = 0;
    }
    for (let i = b; i < 4 + b; i++) {
      $('#row' + a).append("<div id='" + i + "' class='cards'><img class='images' src='img/" + mieImg[numeriMix[i]] + ".png' width='130' height='130'></div>")
      flag = 1;
    }
  }
}



$(() => {
  randomizza();
  $('.images').hide();

  var clicks = 0;
  var card1, card2, posCard1, posCard2;
  var passaggio = 0;
  var conteggioFinale = 0;
  var opacity;


  $('.cards').click(function() {
    opacity = $(this).css('opacity');
    $(this).children().show();

    if (passaggio == 0 && opacity != 0.5) {
      card1 = $(this).children().prop('src');
      posCard1 = $(this).prop('id');
      card1 = card1.substr(48);
      console.log(card1);
      clicks++;
      passaggio++;
    } else if (passaggio == 1 && opacity != 0.5) {
      posCard2 = $(this).prop('id');
      console.log(posCard2);
      if (posCard2 != posCard1) {
        card2 = $(this).children().prop('src');
        card2 = card2.substr(48);
        clicks++;
        passaggio++;
      }
    }
    $('#clicks').text(clicks);

    if (passaggio == 2) {
      if (card1 == card2) {
        passaggio = 0;
        $('img[src="img/' + card1 + '"]').parent().css({
          'opacity': '0.5'
        });
        console.log('uguaglianza ' + card2);
        console.log(passaggio);
        conteggioFinale++;
      } else {
        passaggio = 0;
        console.log('disuguaglianza carta1 ' + card1 + ' carta2 ' + card2);
        console.log(passaggio);
        setTimeout(() => {
          $('img[src="img/' + card1 + '"]').hide();
          $('img[src="img/' + card2 + '"]').hide();
        }, 600)
      }
    }
    console.log('numero coppie azzeccate ' + conteggioFinale);


    if (conteggioFinale == 8) {
      $(".gioco").remove();
      $('<p>Complimenti hai concluso il gioco in '+ clicks +' CLICK!! premi ricomincia per giocare di nuovo</p>').insertAfter('.ricomincia').css({
        'font-size':'3rem',
        'color':'green'
      });
      $('.ricomincia').css('background','green');
    }
  });

  $('.ricomincia').click(function(){
    location.reload();
  })
});

// quando il documento è pronto...vado a selezionare casualmente una immagine dalla cartella.

// creo una variabile "images" che contiene il selettore della classe "images".
// così ho un oggetto jQuery e metto gli elementi corrispondenti nell'oggetto jQuery.

// creo un ciclo for sull'oggetto creato per ottenere poi un'immagine random.

// prendo a caso un elemento dalla mia lista.

// vado a prendere il file localizzato nella directory img e creo il tag html e lo inserisco nella pagina.
//images.eq(e).html("<img id='" + e + "' src='images/" + randomImg + ".png' width='130' height='130' />");

// creo la funzione principale "mostraImg"

// creo l'oggetto jQuery per i clicks e lo chiamo "tuttiIClick" e prendo il valore e poi incremento.

// ora visualizzo l'emoji (l'immagine) a due a due se sono diverse le nascondo altrimenti le lascio visibili.

// se non sono due visualizzo l'emoji e la inserisco in "clickImgs".

// se sono uguali azzero la mia lista.

// se sono diverse nascondo le due immagini.
