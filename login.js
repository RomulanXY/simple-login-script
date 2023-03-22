function random(params1, params2) {
    if (document.getElementById(params1).type == "password") {
        document.getElementById(params1).type = "text";
        document.getElementById(params2).innerHTML = 'Hide';
    }
    else {
        document.getElementById(params1).type = "password";
        document.getElementById(params2).innerHTML = 'Show';
    }
}
function show() {
    random('inp1', 'btn1');
}
function display() {
    random('inp2', 'btn2');
}



function login() {
    let pass1 = document.getElementById('inp1');
    let pass2 = document.getElementById('inp2');

    if (pass1.value === '' && pass2.value === '') {
        alert('Please enter your password')
    } else if (pass1.value == pass2.value) {
        alert('Login Successful');
        
    } else {
        alert('Your password does not matched');
    }
}
