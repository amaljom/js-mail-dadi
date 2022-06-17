// * PRIMO ESERICIO //
// ! PER PRIMA COSA CHIEDIAMO ALL'UTENTE UNA EMAIL DA INSERIRE
// ! DOPODICHE' CONTROLLIAMO SE TALE E-MAIL SIA PRESENTE NELL'ARRAY DI CUI IL PROGRAMMA E' FORNITO
// ! IN BASE AL FATTO CHE TROVI O NO UN ELEMENTO DELL ARRAY CHE VI CORRISPONDE MANDERMO IN OUTPUT
// ! L' ESITO PER LA RICHIESTA DEL UTENTE DI ENTRARE 

const emailUser= prompt(" inserisci la tua email se desideri effettuare l'accesso");
console.log(emailUser);

const emailList = ['ciccio@gmail.com', 'mario@gmail.com', 'ermengildo@gmail.com'];
console.log(emailList);

let trovato=false;

for(let i = 0; i < emailList.length; i++){
     if(emailUser==emailList[i]){
        trovato=true;
     }  
 }
 if(trovato==true){
    console.log('puoi entrare!');
 }
 else{
    console.log('non risulti presente nel database')
 }
// ! possibile altra risuluzione dell'esercizio della mail
// let risultato = emailList.indexOf(emailUser);
// console.log(risultato);
// if(risultato != -1){
//     console.log('Puoi entrare');
// }
// else{
//     console.log('non risulti presente nel database');
// }


// * SECONDO ESERCIZIO //

let numeroUtente = Math.floor((Math.random() * 6)+1);
console.log(numeroUtente);

let numeroCalcolatore = Math.floor((Math.random() * 6)+1);
console.log(numeroCalcolatore);

if(numeroUtente == numeroCalcolatore){
   console.log('siete entrambi fortunati!');
}
else if(numeroUtente > numeroCalcolatore){
   console.log("l'utente ha vinto!");
}else if(numeroUtente < numeroCalcolatore){
   console.log('il computer ha vinto!');
}