import store from './store'
import firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBrrHiibQ9rGf8NdRuNo1nxtMHLVsv_eFE",
    authDomain: "trello-firebase.firebaseapp.com",
    databaseURL: "https://trello-firebase.firebaseio.com",
    projectId: "trello-firebase",
    storageBucket: "trello-firebase.appspot.com",
    messagingSenderId: "424461727247"
};
firebase.initializeApp(config);

export function readBoard() {
    firebase.database().ref('stages').on('value', res => {
        let stages = []
        res.forEach(snap => {
            const stage = snap.val();
            stages.push(stage);
        })
        store.setState({
            stages: stages
        })
    });

    firebase.database().ref('tasks').on('value', res => {
        let tasks = [];
        res.forEach(snap => {
            const task = snap.val();
            tasks.push(task)
        })
        store.setState({
            tasks: tasks
        })
    });
}

export function addStage(text) {
    console.log('text', text)
    let stages = [...store.getState().stages];
    stages.push(text)
    //    store.setState ({
    //       stages : stages
    //    }) 

    firebase.database().ref('stages/').push(text);
}

export function addTask(stage, text) {
    console.log('addTask:', stage + ' - ' + text);

    let tasks = [...store.getState().tasks];

    let newTask = {
        id: store.getState().tasks.length,
        title: text,
        stage: stage
    }

    firebase.database().ref('tasks/' + newTask.id).set(newTask);
    /*
    store.setState ({
       tasks : tasks
    })  */
}



export function signUser(firstName, lastName, email, pass) {
    // creando un usuario nuevo y a la ves autentificandolo.
    firebase.auth().createUserWithEmailAndPassword(email, pass).then(user => {
        let newuser = {
            firstName, lastName, email
        }
        firebase.database().ref('users/' + user.uid).set(newuser);
    })

}

export function signOut() {
    firebase.auth().signOut();
    store.setState({
        user: ''
    })
}

// Autentificando el nombre y pasword del usuario
export function signUserLo(user, pass) {
    firebase.auth().signInWithEmailAndPassword(user, pass).catch(e => {
        store.setState({
            login: true
        })
    })
}











//    let varriable = 'esther'
//   firebase
//   .database()
//   .ref('prueva')
//   .push({ 
//       variable
//   })
//   .then()
//   .catch() 

// Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBrrHiibQ9rGf8NdRuNo1nxtMHLVsv_eFE",
//     authDomain: "trello-firebase.firebaseapp.com",
//     databaseURL: "https://trello-firebase.firebaseio.com",
//     projectId: "trello-firebase",
//     storageBucket: "trello-firebase.appspot.com",
//     messagingSenderId: "424461727247"
//   };
//   firebase.initializeApp(config);


// firebase

// creas tu  ra1 bajo
// intalar firebase  con yarn add firebase 
// inportar firebase
// voy a firebase  y copio el codigo de configuracion de  firebase 

// firebase.database().ref('nombre de mi tabla').push(text)
// firebase.database().ref('task')
// para trasladar ahosting  en la consola 
// 1 yarn build para contruir 
// 2firebase login 
// firebase init   => te crea un archivo jeyson 
// 3 firebase init 
//  selecciono,,,,,,,,,,,,,,,,,
//  4firebase
