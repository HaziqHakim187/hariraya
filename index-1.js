gsap.registerPlugin(Draggable);

    const root = document.documentElement;
    const body = document.body;
    const loginForm = document.querySelector('.login-form');
    const cordBead = document.querySelector('.cord-bead');
    const cordLine = document.querySelector('.cord-line');
    const hitArea = document.querySelector('.cord-hit');
    
    let isOn = false;
    const clickSound = new Audio("https://assets.codepen.io/605876/click.mp3");

    Draggable.create(hitArea, {
        type: "y",
        bounds: { minY: 0, maxY: 60 },
        onDrag: function() {
            gsap.set(cordBead, { y: this.y });
            gsap.set(cordLine, { attr: { y2: 180 + this.y } });
        },
        onRelease: function() {
            if (this.y > 30) {
                toggleLamp();
            }
            
            gsap.to([cordBead, hitArea], { y: 0, duration: 0.5, ease: "back.out(2.5)" });
            gsap.to(cordLine, { attr: { y2: 180 }, duration: 0.5, ease: "back.out(2.5)" });
        }
    });

    function toggleLamp() {
        isOn = !isOn;
        clickSound.play();
        
        body.setAttribute('data-on', isOn);
        root.style.setProperty('--on', isOn ? 1 : 0);
        
        if (isOn) {
            loginForm.classList.add('active');
            gsap.to(body, { backgroundColor: "#1c1f24", duration: 0.6 });
        } else {
            loginForm.classList.remove('active');
            gsap.to(body, { backgroundColor: "#121417", duration: 0.6 });
        }
    }

    function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = "najlacute";
    const correctPassword = "selamathariraya";

    if (username === "" || password === "") {
        alert("Sila isi username dan password!");
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        alert("Hai Najla! Selamat Hari Raya! " + username + "!");
        window.location.href = "raya-1.html";
    } else {
        alert("Sorry Najla username atau password salah, CubaLagi.");
    }
}

function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeOpen = document.querySelector('.eye-open');
    const eyeClosed = document.querySelectorAll('.eye-closed');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.forEach(el => el.style.display = 'inline');
    } else {
        passwordInput.type = 'password';
        eyeOpen.style.display = 'inline';
        eyeClosed.forEach(el => el.style.display = 'none');
    }
}

function checkPasswordStrength(password) {
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.password-strength span');
    
    if (!strengthBar) return;
    
    let strength = 0;
    
    if (password.length > 0) strength += 10;
    if (password.length >= 8) strength += 30;
    if (password.match(/[a-z]+/)) strength += 20;
    if (password.match(/[A-Z]+/)) strength += 20;
    if (password.match(/[0-9]+/)) strength += 20;
    if (password.match(/[$@#&!]+/)) strength += 20;
    
    strength = Math.min(strength, 100);
    
    strengthBar.style.width = strength + '%';
    
    if (strength < 40) {
        strengthText.textContent = 'Lemah';
    } else if (strength < 70) {
        strengthText.textContent = 'Sederhana';
    } else {
        strengthText.textContent = 'Kuat';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('input', function(e) {
        });
    }
});

