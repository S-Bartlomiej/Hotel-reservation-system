document.getElementById('p').addEventListener('click', function(){

    var podpis = document.getElementById('wiadomosc');
    if(podpis.style.opacity == 0)
    {
        podpis.style.opacity = 1;
    }

    else
    {
        podpis.style.opacity = 0;
    }

});