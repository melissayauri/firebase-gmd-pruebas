$(document).ready(function() {
  /* Inicializando firebase*/
  var config = {
    apiKey: 'AIzaSyBBur9iGdP0N0vlWlRnWxPjyMGR2nnPV90',
    authDomain: 'fir-gmd-pruebas.firebaseapp.com',
    databaseURL: 'https://fir-gmd-pruebas.firebaseio.com',
    projectId: 'fir-gmd-pruebas',
    storageBucket: 'fir-gmd-pruebas.appspot.com',
    messagingSenderId: '701971426047'
  };
  firebase.initializeApp(config);
  /* Inicializando el logeo mediante gmail */
  var provider = new firebase.auth.GoogleAuthProvider();
  /* evento para el botón logeo */
  $('#login').click(function() {
  /* Aparece la ventana del logueo */
    firebase.auth().signInWithPopup(provider).then(function(result) {
    // console.log(result.user);
      $('#login').hide();
      console.log(result.user);
      var name = `<p>${result.user.displayName}</p>`;
      /* muestra el nombre al terminar de inciar sesión */
      $('#root').append(name);
    });
  });
  /* guardando los datos */
  $('#save').click(function() {
    alert('listo');
    /* Los datos se almacenan en la rama prueba */
    firebase.database().ref('prueba').set({
      nombre: 'melissa',
      edad: '27 años',
      profesion: 'electrónica'
    });
  });
});