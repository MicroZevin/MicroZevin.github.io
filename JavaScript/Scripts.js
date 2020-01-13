// GGD Wed Dev 2
function runFunctionWD2() {
    const a = document.getElementById("a-value").value
    const b = document.getElementById("b-value").value
    const result = ggDeler(a, b)[0]
    const runs = ggDeler(a, b)[1]
    document.getElementById("result").innerHTML = result
    document.getElementById("runs").innerHTML = runs
}

function ggDeler(a, b) {
    let d = Math.max(a)
    let dd = Math.min(b)
    let r = d%dd
    let i = 0
    
    while(r > 0) {
    r = d%dd
    d = dd
    dd = r
    i++
    }
    return [d, i, a, b]
}
// End GGD Web Dev 2



// Database Web Dev 3
firebase.initializeApp({
    apiKey: 'AIzaSyC-KYB7Q1KN-88561O3GHLZdF9BxXbjO4M',
    authDomain: 'smart-connection-dw.firebaseapp.com',
    projectId: 'smart-connection-dw'
  });
  
var db = firebase.firestore();

function runFunctionWD3() {
    document.getElementById("demo").innerHTML = "Bericht succesvol verstuurd!";
    const n = document.getElementById("n-value").value
    const m = document.getElementById("m-value").value
    writeFunction()
}
  
function writeFunction(naam, bericht) {
    // Add a new document in collection "cities"
    db.collection("berichten").add({
        naam: naam,
        bericht: bericht
    })
    .then(function() {
        console.log("Bericht succesvol verstuurd!");
    })
    .catch(function(error) {
        console.error("Fout: ", error);
    });
  }
// End Database Web Dev 3