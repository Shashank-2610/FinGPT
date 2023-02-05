var BoxMassage = document.getElementsByClassName('BoxMassage');

// ---------------- Massage User ----------------

document.getElementsByClassName('send')[0].addEventListener('click', SendmsgUser);

function SendmsgUser() {
    document.getElementsByClassName('SendmsgNow')[0].style.display = "none";
    let msg = document.getElementById('msgUser');
    let Boxmsg = document.createElement('div');
    Boxmsg.className = "msgUser massage";
    let TextUser = document.createElement('p');
    TextUser.innerHTML = msg.value;
    Boxmsg.appendChild(TextUser);
    BoxMassage[0].appendChild(Boxmsg);
    SendmsgBot(msg.value);
    msg.value = "";
}

// ---------------- Massage Bot ----------------

//--- List Default msg 

var ListMassageHi = ['hello', 'Hello', 'Hello!', 'hello!', 'Hello?', 'hello?', 'hi', 'hi', 'hi!', 'hi!', 'hi?', 'hi?'];
var ListMassageHow = ['How are you', 'how are you', 'how', 'How', 'How are you!', 'how are you!', 'How are you?', 'how are you?'];



function SendmsgBot(msgUser) {

    let Boxmsg = document.createElement('div');
    setTimeout(function() {
        Boxmsg.className = "msgBot massage";
        Boxmsg.innerHTML = '<div class="BoxLoader"><div class="Loader"></div><div class="Loader"></div><div class="Loader"></div></div>';
        BoxMassage[0].appendChild(Boxmsg);
    }, 1000)

    var msgBotNear = "";
    for (let i of ListMassageHi) {
        if (i == msgUser) msgBotNear = "hi baby...";
    }
    for (let i of ListMassageHow) {
        if (i == msgUser) msgBotNear = "Yes, thank's...";
    }

    if (msgBotNear == "") {
        msgBotNear = "i don't understand!";
    }
    setTimeout(function() {
        Boxmsg.innerHTML = msgBotNear;
    }, 3000)
}


var menu_ = document.getElementsByClassName('Menu')[0].addEventListener('click', function() {
    BoxMassage[0].innerHTML = '<div class="SendmsgNow">send now Massage (hello , how are you,...)</div>';
    document.getElementsByClassName('SendmsgNow')[0].style.display = "block";

});