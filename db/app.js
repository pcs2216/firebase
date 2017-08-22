(function () {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyCPp30qlz1BHN_MtIBc7KN5lXo_7MR0yJY",
        authDomain: "outline1-3e17b.firebaseapp.com",
        databaseURL: "https://outline1-3e17b.firebaseio.com",
        projectId: "outline1-3e17b",
        storageBucket: "outline1-3e17b.appspot.com",
        messagingSenderId: "1064135774643"
    };
    firebase.initializeApp(config);
    //obtener elemntos
    const preObject = document.getElementById('objeto');
    const ulList = document.getElementById('lista');

    //crear referencias
    const dbRefObject = firebase.database().ref().child('objeto');
    const dbRefList = dbRefObject.child('habilidades');
    //sincronizar cambios objeto
    dbRefObject.on('value', snap => {
        preObject.innerText = JSON.stringify(snap.val(), null, 3);
    });

    //sincronizar cambios en la lista
    dbRefList.on('child_added', snap => {
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id = snap.key;
        ulList.appendChild(li);
    });
    dbRefList.on('child_changed', snap => {
        const liChanged = document.getElementById('snap.key');
        liChanged.innerText = snap.val();
    });
    dbRefList.on('child_removed', snap => {
        const liRemove = document.getElementById('snap.key');
        liRemove.remove();
    });

}());


