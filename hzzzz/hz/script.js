function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
           //element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.05;
    }, 5);
}
function applyFadeOutAndBack(delay){
    fade(document.body);
    console.log("why");
       setTimeout(function() {
        // Nosūta formu, lai pārietu uz citu lapu
        history.go(-1);
    }, delay); // Pagaidām 1000ms (1 sekunde), lai efekts pabeigtos
    
}
// Funkcija, kas pievieno 'fade-out' klasi un pēc tam pāriet uz citu lapu
function applyFadeOutAndNavigate(formId, delay) {
    // Pievieno 'fade-out' klasi ķermenim
    fade(document.body);
    if(window.location.href.indexOf("/hz/sites")>-1){
        formId="../../hz/"+formId;
    }else if(window.location.href.indexOf("/hz/")>-1){
        formId=formId;
    } 
    console.log(formId)
    // Pagaida pāris sekundes, lai efekts pabeigtos
    setTimeout(function() {
        // Nosūta formu, lai pārietu uz citu lapu
        window.location.href  =formId;
    }, delay); // Pagaidām 1000ms (1 sekunde), lai efekts pabeigtos
    
}

// Kad lapa ir pilnībā ielādēta, pievieno 'loaded' klasi ķermenim, lai aktivizētu fade-in
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Kad lapa ir pilnībā ielādēta, novieto lapu uz augšu
    document.documentElement.scrollTop = 0; // Novieto uz augšu

document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('main.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
document.getElementById('palidzibaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('palidziba.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
// Pievieno 'submit' notikumu katram formam, lai aktivizētu fade-out pirms pārejas
document.getElementById('satursForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('saturs.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
if(document.getElementById('cpuForm')!=null){
// Pievieno 'submit' notikumu katram formam, kas veic pāreju uz citu lapu, lai arī aktivizētu fade-out pirms pārejas
document.getElementById('cpuForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/cpu.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('mbForm')!=null){
document.getElementById('mbForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/Mb.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('gpuForm')!=null){
document.getElementById('gpuForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/gpu.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('ramForm')!=null){
document.getElementById('ramForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/ram.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('ssdForm')!=null){
document.getElementById('ssdForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/ssd.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('psuForm')!=null){
document.getElementById('psuForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/psu.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('coolingForm')!=null){
document.getElementById('coolingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/cooling.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('atpakalForm')!=null){
document.getElementById('atpakalForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndBack(1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak1Form')!=null){
document.getElementById('talak1Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/Mb.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak2Form')!=null){
document.getElementById('talak2Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/gpu.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak3Form')!=null){
document.getElementById('talak3Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/ram.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak4Form')!=null){
document.getElementById('talak4Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/ssd.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak5Form')!=null){
document.getElementById('talak5Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/psu.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak6Form')!=null){
document.getElementById('talak6Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('sites/cooling.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak7Form')!=null){
document.getElementById('talak7Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
    applyFadeOutAndNavigate('../hz/noverte.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
});
}if(document.getElementById('talak8Form')!=null){
    document.getElementById('talak8Form').addEventListener('submit', function(event) {
        event.preventDefault(); // Novērš formu noklusējuma iesniegšanu
        applyFadeOutAndNavigate('../hz/saturs.html', 1000); // Pievieno 'fade-out' un pāriet pēc 1000ms
    });
}
});
document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Lai neatsvaidzina lapu
    alert('Jūsu jautājums tika aizsūtīts!');
});