document.getElementById('wyslij').addEventListener('click', function () {

    //pobiera wartosci
    var przyjazd = document.getElementById('przyjazd').value;
    var wyjazd = document.getElementById('wyjazd').value;
    var nrp = Math.ceil(document.getElementById('nrp').value);
    var lo = Math.ceil(document.getElementById('liczba-osob').value);

    var dataprzyjazdu = new Date(przyjazd); //stworzenie nowego obiektu daty i ustawienie go do wartości daty przyjazdu
    var datawyjazdu = new Date(wyjazd); //stworzenie nowego obiektu daty i ustawienie go do wartości daty wyjazdu
    
    var dpd = dataprzyjazdu.getDate();
    var dpm = dataprzyjazdu.getMonth()+1;
    var dpy = dataprzyjazdu.getFullYear();

    var dpc = dpd+":"+dpm+":"+dpy;

    var dwd = datawyjazdu.getDate();
    var dwm = datawyjazdu.getMonth()+1;
    var dwy = datawyjazdu.getFullYear();

    var dwc = dwd+":"+dwm+":"+dwy;

    var dzis = new Date();
    var ddz = dzis.getDate();
    var dm = dzis.getMonth()+1;
    var dy = dzis.getFullYear();

    var pelnadzis = ddz+":"+dm+":"+dy;

    console.log('Data przyjazdu: ' + dpc);
    console.log('Data wyjazdu: ' + dwc);
    console.log('Data dzisiejsza: ' + pelnadzis);

    if(przyjazd == '' && wyjazd =='' && nrp =='' && lo =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Nie podałeś żadnych danych. Musisz podać pełne dane';
        wiadomosc.style.display = 'block';
    }

    else if(przyjazd =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać datę przyjazdu';
        wiadomosc.style.display = 'block';
    }

    else if(wyjazd == '')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać datę przyjazdu';
        wiadomosc.style.display = 'block';
    }
    
    else if(nrp == '')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać numer pokoju';
        wiadomosc.style.display = 'block';
    }

    else if(nrp < 0)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Numer pokoju nie może być ujemny';
        wiadomosc.style.display = 'block';
    }

    else if(nrp > 100)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Numer pokoju od 0-100';
        wiadomosc.style.display = 'block';
    }

    else if(lo == '')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać liczbę osób, liczba osób musi być większa od 0';
        wiadomosc.style.display = 'block';
    }

    else if(lo <= 0)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Liczba osób nie może być mniejsza od zera';
        wiadomosc.style.display = 'block';
    }

    else if(lo > 9)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Podaj liczbę osób od 1-9';
        wiadomosc.style.display = 'block';
    }

    else {
    /* if(przyjazd=='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    }

    if(wyjazd =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    }

    if(lo =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    }

    if(nrp =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    } */

   

   

    if(dpy < dy && dwy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok przyjazdu i rok wyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dpy < dy && dwy >= dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok przyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dpy >= dy && dwy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok wyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dpy == dy && dwy == dy) //tu może być bląd bo nawiązanie do roku z daty dzisiejszej a nie porównanie roku przyjazdu i wyjazdu
    {
                        if(dpm < dm && dwm < dm)
                    {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc przyjazdu i miesiąc wyjazdu nie może być wcześniejszy niż ' + dm;
                        wiadomosc.style.display = 'block';
                    }

                        else if(dpm < dm && dwm >= dm)
                        {
                            var wiadomosc = document.getElementById('wiadomosc');
                            wiadomosc.innerHTML = 'Miesiąc przyjazdu wyjazdu nie może być wcześniejszy niż ' + dm;
                            wiadomosc.style.display = 'block';
                        }

                        else if(dpm >= dm && dwm < dm)
                        {
                            var wiadomosc = document.getElementById('wiadomosc');
                            wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż ' + dm;
                            wiadomosc.style.display = 'block';
                        }


                        else if(dpm == dm && dwm == dm)  
                    {
                                                    if(dpd < ddz && dwd < ddz)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień przyjazdu i dzień wyjazdu nie może być wcześniejszy niż ' + ddz;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                    else if(dwd < dpd)
                                                    {

                                                        var wiadomosc = document.getElementById('wiadomosc');
                                                        wiadomosc.innerHTML = 'Dzień wyjazdu nie może być wcześniejszy niż ' + dpd;
                                                        wiadomosc.style.display = 'block';

                                                    }

                                                    else if(dpd >= ddz && dwd >= ddz) // TU będzie to chwytać bo puszcza to szybciej niż to na dole
                                                    {
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul
                                                    }

                                                else if(dpd < ddz)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż ' + ddz;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                else if(dwd < ddz)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień wyjazdu nie może być wcześniejszy niż ' + ddz;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                else if(dwd < dpd)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień wyjazdu nie może być wcześniejszy niż ' + dpd;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                else if(dpd < dwd)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż ' + dwd;
                                                    wiadomosc.style.display = 'block';
                                                }
                    }

                   else if(dpm == dwm || dwm == dpm)
                   {

                                                    if(dwd < dpd)
                                                    {
                                                        var wiadomosc = document.getElementById('wiadomosc');
                                                        wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż ' + dwd;
                                                        wiadomosc.style.display = 'block';
                                                    }

                                                    else if(dwd >= dpd)
                                                    {
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul
                                                    }

                                                    

                   }

                   else if(dwm < dm)
                   {
                    var wiadomosc = document.getElementById('wiadomosc');
                    wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż miesiąc przyjazdu';
                    wiadomosc.style.display = 'block';
                   }

                   else if(dwm > dm)
                   {
                    var wiadomosc = document.getElementById('wiadomosc');
                    wiadomosc.innerHTML = '';
                    wiadomosc.style.display = 'none';
                
                    var ul = document.getElementById("r"); //pobierasz cała listę
                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                    
                    li.appendChild(h3); // w li tworzysz element h3
                    li.appendChild(div); // w li tworzysz element h3
                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                    ul.appendChild(li); //tworzysz nowy element li w ul
                   }


                    else if(dpm < dm)
                    {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc przyjazdu nie może być wcześniejszy niż ' + dm;
                        wiadomosc.style.display = 'block';
                    }

                    else if(dwm < dm)
                    {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż ' + dm;
                        wiadomosc.style.display = 'block';
                    }
    }

    else if(dpy > dy && dwy > dy)

    {

        if(dwm < dpm)
        {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż miesiąc przyjazdu, który zaznaczyłeś: ' + dwm;
                        wiadomosc.style.display = 'block';
        }

        else if(dwm == dpm)
        {
                                if(dwd < dpd)
                                {
                                    var wiadomosc = document.getElementById('wiadomosc');
                                    wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż dzień, który zaznaczyłeś: ' + dpd;
                                    wiadomosc.style.display = 'block';
                                }

                                else if(dwd >= dpd)
                                {
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul
                                }
        }

        else if(dwm > dpm)
        {
            
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul 
        }

    }

    else if(dpy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok przyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dwy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok wyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dwy > dpy)
    {

                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul 
                           

    }

    else if(dwy < dpy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok wyjazdu nie może być wcześniejszy niż przyjazdu';
        wiadomosc.style.display = 'block';
    }

}

});

document.getElementById('wyslij-telefon').addEventListener('click', function () {

    
    //pobiera wartosci
    var przyjazd = document.getElementById('przyjazd-telefon').value;
    var wyjazd = document.getElementById('wyjazd-telefon').value;
    var nrp = Math.ceil(document.getElementById('nrp-telefon').value);
    var lo = Math.ceil(document.getElementById('liczba-osob-telefon').value);

    var dataprzyjazdu = new Date(przyjazd); //stworzenie nowego obiektu daty i ustawienie go do wartości daty przyjazdu
    var datawyjazdu = new Date(wyjazd); //stworzenie nowego obiektu daty i ustawienie go do wartości daty wyjazdu
    
    var dpd = dataprzyjazdu.getDate();
    var dpm = dataprzyjazdu.getMonth()+1;
    var dpy = dataprzyjazdu.getFullYear();

    var dpc = dpd+":"+dpm+":"+dpy;

    var dwd = datawyjazdu.getDate();
    var dwm = datawyjazdu.getMonth()+1;
    var dwy = datawyjazdu.getFullYear();

    var dwc = dwd+":"+dwm+":"+dwy;

    var dzis = new Date();
    var ddz = dzis.getDate();
    var dm = dzis.getMonth()+1;
    var dy = dzis.getFullYear();

    var pelnadzis = ddz+":"+dm+":"+dy;

    console.log('Data przyjazdu: ' + dpc);
    console.log('Data wyjazdu: ' + dwc);
    console.log('Data dzisiejsza: ' + pelnadzis);

    if(przyjazd == '' && wyjazd =='' && nrp =='' && lo =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Nie podałeś żadnych danych. Musisz podać pełne dane';
        wiadomosc.style.display = 'block';
    }

    else if(przyjazd =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać datę przyjazdu';
        wiadomosc.style.display = 'block';
    }

    else if(wyjazd == '')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać datę przyjazdu';
        wiadomosc.style.display = 'block';
    }
    
    else if(nrp == '')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać numer pokoju';
        wiadomosc.style.display = 'block';
    }

    else if(nrp < 0)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Numer pokoju nie może być ujemny';
        wiadomosc.style.display = 'block';
    }

    else if(nrp > 100)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Numer pokoju od 0-100';
        wiadomosc.style.display = 'block';
    }

    else if(lo == '')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać liczbę osób, liczba osób musi być większa od 0';
        wiadomosc.style.display = 'block';
    }

    else if(lo <= 0)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Liczba osób nie może być mniejsza od zera';
        wiadomosc.style.display = 'block';
    }

    else if(lo > 9)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Podaj liczbę osób od 1-9';
        wiadomosc.style.display = 'block';
    }

    else {
    /* if(przyjazd=='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    }

    if(wyjazd =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    }

    if(lo =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    }

    if(nrp =='')
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Musisz podać pełne dane';
        wiadomosc.style.display = 'block'; 
    } */

   

   

    if(dpy < dy && dwy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok przyjazdu i rok wyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dpy < dy && dwy >= dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok przyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dpy >= dy && dwy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok wyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dpy == dy && dwy == dy) //tu może być bląd bo nawiązanie do roku z daty dzisiejszej a nie porównanie roku przyjazdu i wyjazdu
    {
                        if(dpm < dm && dwm < dm)
                    {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc przyjazdu i miesiąc wyjazdu nie może być wcześniejszy niż ' + dm;
                        wiadomosc.style.display = 'block';
                    }

                        else if(dpm < dm && dwm >= dm)
                        {
                            var wiadomosc = document.getElementById('wiadomosc');
                            wiadomosc.innerHTML = 'Miesiąc przyjazdu wyjazdu nie może być wcześniejszy niż ' + dm;
                            wiadomosc.style.display = 'block';
                        }

                        else if(dpm >= dm && dwm < dm)
                        {
                            var wiadomosc = document.getElementById('wiadomosc');
                            wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż ' + dm;
                            wiadomosc.style.display = 'block';
                        }


                        else if(dpm == dm && dwm == dm)  
                    {
                                                    if(dpd < ddz && dwd < ddz)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień przyjazdu i dzień wyjazdu nie może być wcześniejszy niż ' + ddz;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                    else if(dwd < dpd)
                                                    {

                                                        var wiadomosc = document.getElementById('wiadomosc');
                                                        wiadomosc.innerHTML = 'Dzień wyjazdu nie może być wcześniejszy niż ' + dpd;
                                                        wiadomosc.style.display = 'block';

                                                    }

                                                    else if(dpd >= ddz && dwd >= ddz) // TU będzie to chwytać bo puszcza to szybciej niż to na dole
                                                    {
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul
                                                    }

                                                else if(dpd < ddz)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż ' + ddz;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                else if(dwd < ddz)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień wyjazdu nie może być wcześniejszy niż ' + ddz;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                else if(dwd < dpd)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień wyjazdu nie może być wcześniejszy niż ' + dpd;
                                                    wiadomosc.style.display = 'block';
                                                }

                                                else if(dpd < dwd)
                                                {
                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                    wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż ' + dwd;
                                                    wiadomosc.style.display = 'block';
                                                }
                    }

                   else if(dpm == dwm || dwm == dpm)
                   {

                                                    if(dwd < dpd)
                                                    {
                                                        var wiadomosc = document.getElementById('wiadomosc');
                                                        wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż ' + dwd;
                                                        wiadomosc.style.display = 'block';
                                                    }

                                                    else if(dwd >= dpd)
                                                    {
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul
                                                    }

                                                    

                   }

                   else if(dwm < dm)
                   {
                    var wiadomosc = document.getElementById('wiadomosc');
                    wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż miesiąc przyjazdu';
                    wiadomosc.style.display = 'block';
                   }

                   else if(dwm > dm)
                   {
                    var wiadomosc = document.getElementById('wiadomosc');
                    wiadomosc.innerHTML = '';
                    wiadomosc.style.display = 'none';
                
                    var ul = document.getElementById("r"); //pobierasz cała listę
                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                    
                    li.appendChild(h3); // w li tworzysz element h3
                    li.appendChild(div); // w li tworzysz element h3
                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                    ul.appendChild(li); //tworzysz nowy element li w ul
                   }


                    else if(dpm < dm)
                    {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc przyjazdu nie może być wcześniejszy niż ' + dm;
                        wiadomosc.style.display = 'block';
                    }

                    else if(dwm < dm)
                    {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż ' + dm;
                        wiadomosc.style.display = 'block';
                    }
    }

    else if(dpy > dy && dwy > dy)

    {

        if(dwm < dpm)
        {
                        var wiadomosc = document.getElementById('wiadomosc');
                        wiadomosc.innerHTML = 'Miesiąc wyjazdu nie może być wcześniejszy niż miesiąc przyjazdu, który zaznaczyłeś: ' + dwm;
                        wiadomosc.style.display = 'block';
        }

        else if(dwm == dpm)
        {
                                if(dwd < dpd)
                                {
                                    var wiadomosc = document.getElementById('wiadomosc');
                                    wiadomosc.innerHTML = 'Dzień przyjazdu nie może być wcześniejszy niż dzień, który zaznaczyłeś: ' + dpd;
                                    wiadomosc.style.display = 'block';
                                }

                                else if(dwd >= dpd)
                                {
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul
                                }
        }

        else if(dwm > dpm)
        {
            
                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul 
        }

    }

    else if(dpy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok przyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dwy < dy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok wyjazdu nie może być wcześniejszy niż ' + dy;
        wiadomosc.style.display = 'block';
    }

    else if(dwy > dpy)
    {

                                                                    var wiadomosc = document.getElementById('wiadomosc');
                                                                    wiadomosc.innerHTML = '';
                                                                    wiadomosc.style.display = 'none';
                                                                
                                                                    var ul = document.getElementById("r"); //pobierasz cała listę
                                                                    var li = document.createElement("li"); //przypisujesz do zmiennej z nazwą li stworzenie elementu li
                                                                    var div = document.createElement('div'); //przypisanie do zmiennej div tworzenia diva
                                                                    var h3 = document.createElement('h3'); //przypisujesz do zmiennej z nazwą h3 stworzenie elementu h3
                                                                    
                                                                    li.appendChild(h3); // w li tworzysz element h3
                                                                    li.appendChild(div); // w li tworzysz element h3
                                                                    h3.appendChild(document.createTextNode('Pokój nr: '+nrp)); //w h3 tworzysz tekst
                                                                    div.innerHTML = 'Od: '+ przyjazd + '<br><br>' + 'Do: ' + wyjazd +'<br><br>' + 'Liczba osób: ' +lo;
                                                                    li.className = 'lid'; //przypisujesz klasę o nazwie 'wyznaczona' do tworzonego li
                                                                    h3.className = 'nr'; //nadajesz klasę nr, nowemu h3
                                                                    ul.appendChild(li); //tworzysz nowy element li w ul 
                           

    }

    else if(dwy < dpy)
    {
        var wiadomosc = document.getElementById('wiadomosc');
        wiadomosc.innerHTML = 'Rok wyjazdu nie może być wcześniejszy niż przyjazdu';
        wiadomosc.style.display = 'block';
    }

}
    
});


