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
      saveDate(result.user);
      // var name = `<p>${result.user.displayName}</p>`;
      /* muestra el nombre al terminar de inciar sesión */
      // $('#root').append(name);
    });
  });

  /* guardando datos del logeo */

  function saveDate(user) {
    var dataUser = {
      name: user.displayName,
      mail: user.email,
      uid: user.uid,

    };
    /* se aplica push para agregar a cada usuario, genera otro usuario con el mismo nombre */
    // firebase.database().ref('usuarios').push(dataUser);
    /* se aplica para que solo actualice el usuario correspondiente */
    firebase.database().ref('usuarios/' + user.uid).set(dataUser);
  };
  /* guardando los datos */
  $('#save').click(function() {
    alert('listo');
    /* Los datos se almacenan en la rama prueba */
    /* set actualzia toda la rama */
    firebase.database().ref('prueba').set({
      nombre: 'melissa',
      edad: '27 años',
      profesion: 'electrónica'
    });
  });
  /* imprimiendo cada usuario */
  firebase.database().ref('usuarios').on('child_added', function(userInfo) {
    var users = userInfo.val();
    /*var names = `<div>${users.name}</div>`;
    $('#root').append(names);*/
  });
});