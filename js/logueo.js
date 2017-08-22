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

    //Añadir Evento login
    btnLogin.addEventListener('click', e => {
        //obtener email y pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    //añadir evento a signup
    btnSignUp.addEventListener('click', e => {
        //obtener email y pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });
    
    btnLogout.addEventListener('click',e=>{
        firebase.auth().signOut();
    });
    //añadir un listener en tiemnpo real
    firebase.auth().onAuthStateChanged(firebaseUser =>{
        if(firebaseUser){
            console.log(firebaseUser);
            btnLogout.classList.add('hide');
        }else{
            console.log('no logueado');
            btnLogout.classList.add('hide');
        }
    });

}());