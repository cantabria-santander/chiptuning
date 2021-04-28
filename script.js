var nameUser = document.getElementById('name_lex');
var email = document.getElementById('email_lex');
var commnt = document.getElementById('message_lex');
var sent = document.getElementById('sent_lex');
var div_list_comment = document.getElementById('list_comment');

var database = firebase.database();
var resultMessages = [];
var message = {};


sent.addEventListener('click', function(){
    var cat = window.localStorage.getItem('gato');
    if(cat == 'juan'){
        alert('you already wrote a comment');
        window.location.href = 'https://play.google.com/store/apps/dev?id=8185819019973346070';
        return;
    }


    if(nameUser.value.length < 3 || nameUser.value.length > 44 ){
        alert('name error'); return;
    }

    if(email.value.length < 3 || nameUser.value.length > 44 || !email.value.includes('.') || !email.value.includes('@') ){
        alert('email error'); return;
    }

    if(commnt.value.length < 3 || nameUser.value.length > 300 ){
        alert('message error'); return;
    }

	database.ref('chiptuning').push({
		username: nameUser.value,
		email: email.value,
		message : commnt.value
	  });  

    window.localStorage.setItem('gato', 'juan');
    alert('you already wrote a comment');
    window.location.href = 'https://play.google.com/store/apps/dev?id=8185819019973346070';  
});



    var starCountRef = firebase.database().ref('chiptuning');
    starCountRef.on('value', (snapshot) => {
      resultMessages = []; //    
      snapshot.forEach(function(x){  
        message = {};  
        message.username = x.val().username;
        message.email = x.val().email;
        message.message = x.val().message;//    
        resultMessages.push(message);
      });//    
      let result = resultMessages.reverse();
      createMessagesList(result);
    });


function createMessagesList(x){
    div_list_comment.innerHTML = '';

    for(let i = 0; i < x.length; i++){
        console.log('cirk' , x);
        let spanName = document.createElement("span");
            spanName.innerText = x[i].username;
            spanName.style.marginRight = '22px';
            spanName.style.fontSize = '11px';
        let spanEmail = document.createElement("span");
            spanEmail.innerText = x[i].email;
            spanEmail.style.fontSize = '11px';
        let divNameEmail =  document.createElement("div");
            divNameEmail.appendChild(spanName);
            divNameEmail.appendChild(spanEmail);
        let divMessage = document.createElement("div");
            divMessage.innerText = x[i].message;
            divMessage.style.fontSize = '15px';
        let divComment = document.createElement("div");
        let hr = document.createElement("hr");
            hr.style.width = '33%';
            hr.style.marginLeft = '33%';

        divComment.appendChild(divMessage);
        divComment.appendChild(divNameEmail);
        divComment.appendChild(hr);
    
        div_list_comment.appendChild(divComment);
    }
   
}