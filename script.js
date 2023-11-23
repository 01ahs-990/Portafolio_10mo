document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        hideSplashScreen();
    }, 2000);
});

function hideSplashScreen(){
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.display = 'none';

    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.remove('hidden');

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function(){
        alert('¡Ha ingresado al portafolio de evidencias!');
    });
}

if('Notification' in window){
    Notification.requestPermission().then(function(permission){
        if(permission === 'granted'){
            new Notification('¡Bienvenido!', {
                body: 'Gracias por visitar nuestro sitio web.'
            });
        }
    });
}