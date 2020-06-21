var name = "defaultname";
var email = "defaultemail";
var psw = "defaultpassword";
var userstatus = "defaultstatus";

var checkemail = "default";
var checkpsw = "default";

var statustext = "I'm ok"

var number = 1;

var isLog = 0;

var danger = document.getElementById("no");
danger.style.display = "none";
var warning = document.getElementById("almost");
warning.style.display = "none";
var success = document.getElementById("yes");
success.style.display = "none";
var show = document.getElementById("pswshow");
show.style.display = "none";

document.getElementById("logoutbutton").style.display = "none";

function setData(imi) {
    if (imi == 1) {
        name = document.getElementById("nameinp").value;
        email = document.getElementById("emailinp").value;
        psw = document.getElementById("pasinp").value;
        success.style.display = "block";
        document.getElementById("username").innerHTML = name;
        document.getElementById("e-mail").innerHTML = email;
        document.getElementById("password").innerHTML = "*****";
        show.style.display = "block";
        isLog = 1;
        yesitis();
    } else {
        name = document.getElementById("nameinp").value;
        email = document.getElementById("emailinp").value;
        psw = document.getElementById("pasinp").value;
    }
}

function getData() {
    checkemail = document.getElementById("email").value;
    checkpsw = document.getElementById("pas").value;
    if (checkemail == email) {
        if (checkpsw == psw) {
            success.style.display = "block";
            document.getElementById("username").innerHTML = name;
            document.getElementById("e-mail").innerHTML = email;
            document.getElementById("password").innerHTML = "*****";
            show.style.display = "block";
            isLog = 1;
            yesitis();

        } else {
            warning.style.display = "block";
        }
    } else {
        danger.style.display = "block";
    }
}


function statusnew() {
    userstatus = document.getElementById("status").value;
    document.getElementById("statustext").innerHTML = userstatus;
}

function showpsswd() {
    if (number % 2 != 0) {
        document.getElementById("password").innerHTML = psw;
        show.innerHTML = "[hide]";
    } else {
        document.getElementById("password").innerHTML = "*****";
        show.innerHTML = "[show]";
    }
    number++;
}

function yesitis() {
    document.getElementById("loginbutton").style.display = "none";
    document.getElementById("signinbutton").style.display = "none";
    document.getElementById("logoutbutton").style.display = "inline";
}

function logout() {
    document.getElementById("loginbutton").style.display = "inline";
    document.getElementById("signinbutton").style.display = "inline";
    document.getElementById("logoutbutton").style.display = "none";
    document.getElementById("username").innerHTML = "UserName";
    document.getElementById("e-mail").innerHTML = "YOU ARE NOT LOGGED IN";
    document.getElementById("password").innerHTML = "YOU ARE NOT LOGGED IN";
}