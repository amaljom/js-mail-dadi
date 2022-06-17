// * PRIMO ESERICIO //
// ! PER PRIMA COSA CHIEDIAMO ALL'UTENTE UNA EMAIL DA INSERIRE
// ! DOPODICHE' CONTROLLIAMO SE TALE E-MAIL SIA PRESENTE NELL'ARRAY DI CUI IL PROGRAMMA E' FORNITO
// ! IN BASE AL FATTO CHE TROVI O NO UN ELEMENTO DELL ARRAY CHE VI CORRISPONDE MANDERMO IN OUTPUT
// ! L' ESITO PER LA RICHIESTA DEL UTENTE DI ENTRARE 

const emailUser= prompt(" inserisci la tua email se desideri effettuare l'accesso'");
console.log(emailUser);

const emailList = ['ciccio@gmail.com', 'mario@gmail.com', 'ermengildo@gmail.com'];
console.log(emailList);

// for (let i = 0; i < emailList.length && !(emailUser==emailList[i])  ; i++) {
//     if(emailUser==emailList[i]){
//         console.log('risulti essere presente nel database');
//     }
//     else{
//         console.log('NON PUOI ENTRARE')
//     }
// }
let risultato = emailList.indexOf(emailUser);
console.log(risultato);
if(risultato != -1){
    console.log('Puoi entrare');
}
else{
    console.log('non risulti presente nel database');
}