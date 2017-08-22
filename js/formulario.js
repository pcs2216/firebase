(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyBbvG3LeBKL-LQ_sOejvGEVAgyDurwjJsc",
        authDomain: "outline2-346bf.firebaseapp.com",
        databaseURL: "https://outline2-346bf.firebaseio.com",
        projectId: "outline2-346bf",
        storageBucket: "",
        messagingSenderId: "907920703332"
    };
    firebase.initializeApp(config);

    //Obtener elementos
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    var referencia = firebase.database();
    //Añadir Evento login
    btnSignUp.addEventListener('click', e => {
        referencia.ref('Usuario').push({
            email: txtEmail.value,
            password: txtPassword.value
        });
        
    });



}());