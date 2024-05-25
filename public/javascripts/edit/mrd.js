// FUNKCJONALOŃĆ ZAPISUJĄCA OBIEKTY W SESSIONSTORAGE
function zapiszTabele(obiekt) {
    var str = JSON.stringify(obiekt);
    sessionStorage.setItem('generatorDane', str);
}
// FUNKCJONALOŃĆ POBIERAJĄCA OBIEKTY W SESSIONSTORAGE (generatorDane generatorKwIn)
function pobierzTabele(ktoryZapis) {
    var pobranyObiekt = sessionStorage.getItem(ktoryZapis);
    return JSON.parse(pobranyObiekt);
}
// FUNKCJONALOŃĆ POBIERAJĄCA FUNKCJONARISZA Z LOCALSTORAGE
function pobierzFk() {
    var pobranyObiekt = localStorage.getItem('funkcjonariusz');
    return JSON.parse(pobranyObiekt);
}
// WSZYSTKIE EDYTOWALNE Divy i Pola
var divyEdytowalne = document.querySelectorAll('.tabe');
var polaEdytowalne = document.querySelectorAll('.pole');
// nadawanie add event
// funkcjonalność przenosząca do kolejnego diva
divyEdytowalne.forEach(function (element, index, tab) {
    element.addEventListener('input', function (event) {
        if (element.innerHTML.length == 1) {
            if (tab[index + 1] != null) {
                tab[index + 1].focus();
            }
        };
        if (element.innerHTML.length > 1) {
            element.innerHTML = element.innerHTML.slice(0, element.innerHTML.length - 1);
        };
    }, false);
    element.addEventListener('keydown', function (event) {
        if (event.key == 'ArrowLeft') {
            if (tab[index - 1] != null) {
                tab[index - 1].focus();
            }
        };
        if (event.code == 'Space') {
            if (tab[index + 1] != null) {
                tab[index + 1].focus();
                event.preventDefault();
            }
        };
        if (event.code == 'Backspace') {
            if (tab[index - 1] != null) {
                if (element.innerHTML.length == 0) {
                    tab[index - 1].innerHTML = '';
                    tab[index - 1].focus();
                }
            }
        }
    }, false);
});
// funkcjonalność zarządzająca pustymi polami
polaEdytowalne.forEach(function (element) {
    element.puste_pole = element.innerHTML;
    element.puste_szerokość = element.offsetWidth;
    element.addEventListener('focus', function () {
        if (element.innerHTML === element.puste_pole) {
            element.innerHTML = '';
            element.style.minWidth = element.puste_szerokość + "px";
        }
    }, false);
    element.addEventListener('blur', function () {
        if (element.innerHTML === '') {
            element.innerHTML = element.puste_pole;
        }
    }, false);
});
//KONIEC WSZYSTKICH PÓL EDYTOWALNYCH
// ZMIIENNE POSZCZGÓLNYCH PÓL
var nazwisko_input = document.querySelectorAll('.nazwisko');
var imiona_input = document.querySelectorAll('.imiona');
var im_ojca = document.querySelectorAll('.im_ojca');
var im_matki = document.querySelectorAll('.im_matki');
var pesel_ur = document.querySelectorAll('.pesel_ur');
var nazw_matki = document.querySelectorAll('.nazw_matki');
var obywatelstwo = document.getElementById('mrdR8t');
var plec_input = document.getElementById('plec_input');
var zam_kraj = document.getElementById('zam_kraj');
var zam_powiat = document.getElementById('zam_powiat');
var zam_gmina = document.getElementById('zam_gmina');
var zam_miejscowosc = document.getElementById('zam_miejscowosc');
var zam_ulica = document.getElementById('zam_ulica');
var zam_nr = document.getElementById('zam_nr');
var typ_dokumentu_to = document.getElementById('nrDow0');
var nr_dokumentu_input = document.querySelectorAll('.nr_dokumentu_tu');
var typ_pj = document.getElementById('typ_pj');
var nr_blankietu_pj = document.querySelectorAll('.nr_blankietu_pj');
var nr_pj = document.querySelectorAll('.nr_pj');
var data_wydania = document.querySelectorAll('.data_wydania');
var data_wydania_p = document.querySelectorAll('.data_wydania_p');
var pj_szer = document.querySelectorAll('.pj_szer');
var pj_katA = document.getElementById('pj_katA');
var pj_katB = document.getElementById('pj_katB');
var pj_katC = document.getElementById('pj_katC');
var pj_katD = document.getElementById('pj_katD');
var pj_katT = document.getElementById('pj_katT');
var pj_katA1 = document.getElementById('pj_katA1');
var pj_katB1 = document.getElementById('pj_katB1');
var pj_katC1 = document.getElementById('pj_katC1');
var pj_katD1 = document.getElementById('pj_katD1');
var pj_katE = document.getElementById('pj_katE');
var pj_organ = document.getElementById('pj_organ');
var zd_data = document.querySelectorAll('.zd_data');
var zd_czas = document.querySelectorAll('.zd_czas');
var zd_powiat = document.getElementById('zd_powiat');
var zd_gmina = document.getElementById('zd_gmina');
var zd_miejscowosc = document.getElementById('zd_miejscowosc');
var zd_ul_droga = document.getElementById('zd_ul_droga');
var mrdWykroczenie = document.querySelectorAll('.mrdWykroczenie');
var mrdKwota = document.getElementById('mrdKwota');
var mrdNrSeria = document.getElementById('mrdNrSeria');
var mrd_pkt = document.querySelectorAll('.mrd_pkt');
var fk_nr_leg = document.querySelectorAll('.fk_nr_leg');
var mrdJednostka = document.getElementById('mrdJednostka');
var mrdFkStopien = document.getElementById('mrdFkStopien');
var mrdFkImie = document.getElementById('mrdFkImie');
var mrdFkNazwisko = document.getElementById('mrdFkNazwisko');
var pojRodzaj = document.getElementById('pojRodzaj');
var pojMarka = document.getElementById('pojMarka');
var pojKrajRej = document.getElementById('pojKrajRej');
var mrdNrRej = document.querySelectorAll('.mrdNrRej');
// Zmiana pierwszej litery na wielką
function PierwszA(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// funkcjonalność zaznaczająca pkt
mrd_pkt.forEach(function (element) {
    element.addEventListener('click', function () {
        element.classList.toggle('circle');
    }, false);
});
// ---- FUNKCJONALNOŚĆ WYPISUJĄCA DANE -----
// Funkcje wypisujące pętlami
function wypiszNazwisko(nazw) {
    for (var i = 0; i < nazw.length; i++) {
        nazwisko_input[i].innerHTML = nazw[i].toUpperCase();
    }
}
function wypiszImiona(pImie, dImie) {
    var imoina = pImie;
    if (dImie != '') {
        imoina = pImie + " " + dImie;
    }
    for (var i = 0; i < imoina.length; i++) {
        imiona_input[i].innerHTML = imoina[i].toUpperCase();
    }
}
function wypiszImieOjca(im_o) {
    for (var i = 0; i < im_o.length; i++) {
        im_ojca[i].innerHTML = im_o[i].toUpperCase();
    }
}
function wypiszPesel_ur(dane) {
    for (var i = 0; i < dane.length; i++) {
        pesel_ur[i].innerHTML = dane[i];
    }
}
function wypiszImieMatki(im_m) {
    for (var i = 0; i < im_m.length; i++) {
        im_matki[i].innerHTML = im_m[i].toUpperCase();
    }
}
function wypiszNazwiskoMatki(na_m) {
    for (var i = 0; i < na_m.length; i++) {
        nazw_matki[i].innerHTML = na_m[i].toUpperCase();
    }
}
function wypiszNrDokumentuTo(dane) {
    for (var i = 0; i < dane.length; i++) {
        nr_dokumentu_input[i].innerHTML = dane[i];
    }
}
function wypiszNrBalnkietuPj(nrBlank) {
    var j = 2;
    for (var i = 0; i < nrBlank.length; i++) {
        if (isNaN(nrBlank[i])) {
            nr_blankietu_pj[i].innerHTML = nrBlank[i];
        }
        if (!isNaN(nrBlank[i])) {
            nr_blankietu_pj[j].innerHTML = nrBlank[i];
            j++;
        }
    }
}
function wypiszNrPj(nrPj) {
    if (nrPj.length == 13) {
        nr_pj[14].classList.remove('tabe');
        nr_pj[13].classList.remove('tabe');
        for (var i = 0; i < pj_szer.length; i++) {
            // --- tu można odjąć jak trzeba więcej szerokości dla miejsca e dabeli
            pj_szer[i].classList.add('spce20');
        }
    }
    for (var i = 0; i < nrPj.length; i++) {
        nr_pj[i].innerHTML = nrPj[i];
        if (nrPj[i] == '/') {
            nr_pj[i].classList.remove('tabe');
        }
    }
}
function wypiszPjDataW(data) {
    var tab = [];
    for (var i = 2; i < data.length; i++) {
        if (data[i] != '-') {
            tab.push(data[i]);
        }
    }
    for (var i = 0; i < tab.length; i++) {
        data_wydania[i].innerHTML = tab[i];
    }
}
function wypiszPjDataPW(data) {
    if (data != '') {
        var tab = [];
        for (var i = 2; i < data.length; i++) {
            if (data[i] != '-') {
                tab.push(data[i]);
            }
        }
        for (var i = 0; i < tab.length; i++) {
            data_wydania_p[i].innerHTML = tab[i];
        }
    }
}
function wypiszKatDodatkowa(kat) {
    pj_katE.innerHTML = kat;
    if (kat.length > 3) {
        pj_szer[1].classList.remove('spce20');
    }
}
function wypiszCzasZdarzenia(data, godz, min) {
    // wypisywanie daty 
    var tabD = [];
    for (var i = 2; i < data.length; i++) {
        if (data[i] != '-') {
            tabD.push(data[i]);
        }
    }
    for (var i = 0; i < tabD.length; i++) {
        zd_data[i].innerHTML = tabD[i];
    }
    if (godz < 10) {
        godz = '0' + godz;
    }
    if (min < 10) {
        min = '0' + min;
    }
    var tabC = godz.concat(min);
    for (var i = 0; i < tabC.length; i++) {
        zd_czas[i].innerHTML = tabC[i];
    }
}
function wypiszUlCzyDroga(rodzaj, ulica, droga) {
    switch (rodzaj) {
        case 'ulica':
            zd_ul_droga.innerHTML = ulica;
            break;
        case 'miejscowość':
            break;
        case 'autostrada':
            zd_ul_droga.innerHTML = droga;
            break;
        case 'droga krajowa':
            zd_ul_droga.innerHTML = droga;
            break;
        case 'droga wojewódzka':
            zd_ul_droga.innerHTML = droga;
            break;
        case 'droga gminna':
            zd_ul_droga.innerHTML = droga;
            break;
        default:
            break;
    }
}
function wypiszMandat(kwota, mandatNr) {
    if (kwota != '') {
        mrdKwota.innerHTML = kwota + ' złotych';
    }
    if (mandatNr != '') {
        mrdNrSeria.innerHTML = mandatNr;
    }
}
function wypiszNrRej(rej) {
    for (var i = 0; i < rej.length; i++) {
        mrdNrRej[i].innerHTML = rej[i];
    }
}
function wypiszNrLeg(nr) {
    for (var i = 0; i < nr.length; i++) {
        fk_nr_leg[i].innerHTML = nr[i];
    }
}
// koniec funkcji wypełniających pętlami
// Zapytanie i wypisanue jednostki policji
function zapWypiszJednostkęPolicaji(pow,woj){
    var req = new XMLHttpRequest();
    req.open('GET', '/kodyterytorialne/' + pow + '/'+ woj , true);
    req.send(); 
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var doc = "(" + req.responseText + ")";
            var text = eval(doc);
            if (text != 'brak') {
                mrdJednostka.innerHTML = text;
            }
        };
    };
}
// zapytanie i wypisanie jednoostki policji
// Funkcjonalność zarządzająca wypełnieniem wszystkich pól 
function wypelnijWszystkiePola() {
    var dane = pobierzTabele('generatorDane');
    var wykroczenie = pobierzTabele('generatorKwIn');
    // wypisywanie danych osoby
    wypiszNazwisko(dane.osoba.nazwisko);
    wypiszImiona(dane.osoba.imie, dane.osoba.drugieImie);
    wypiszImieOjca(dane.osoba.imieOjca);
    if (dane.osoba.obywatelstwo == 'polskie') {
        wypiszPesel_ur(dane.osoba.pesel);
    } else {
        wypiszPesel_ur(dane.osoba.dataUrodzenia);
        obywatelstwo.innerHTML = dane.osoba.obywatelstwo;
    }
    if (dane.osoba.imieMatki != '') {
        wypiszImieMatki(dane.osoba.imieMatki);
    }
    if (dane.osoba.nazwiskoRodoweMatki != '') {
        wypiszNazwiskoMatki(dane.osoba.nazwiskoRodoweMatki);
    }
    if (dane.osoba.plec == 'kobieta') {
        plec_input.innerHTML = '2';
    } else {
        plec_input.innerHTML = '1';
    }
    // wypisywanie zamieszkania
    zam_kraj.innerHTML = PierwszA(dane.zam.kraj);
    if (dane.zam.pow != '') {
        zam_powiat.innerHTML = PierwszA(dane.zam.pow);
    }
    if (dane.zam.gmina != '') {
        zam_gmina.innerHTML = PierwszA(dane.zam.gmina);
    }
    if (dane.zam.miejscowosc != '') {
        zam_miejscowosc.innerHTML = PierwszA(dane.zam.miejscowosc);
    }
    if (dane.zam.ulica != '') {
        zam_ulica.innerHTML = dane.zam.ulica;
    }
    if (dane.zam.nrDomu != '') {
        zam_nr.innerHTML = dane.zam.nrDomu;
    }
    // Dokument torzsamości
    switch (dane.dokument.typ) {
        case 'dowód osobisty':
            typ_dokumentu_to.innerHTML = '1';
            break;
        case 'paszport':
            typ_dokumentu_to.innerHTML = '2';
            break;
        case 'karta pobytu na osiedlenie':
            typ_dokumentu_to.innerHTML = '3';
            break;
        case 'karta pobytu na zam':
            typ_dokumentu_to.innerHTML = '4';
            break;
        default:
            break;
    }
    wypiszNrDokumentuTo(dane.dokument.nrDow);
    //prawo jazdy
    switch (dane.pj.balnkiet) {
        case 'oryginał':
            typ_pj.innerHTML = '1';
            break;
        case 'wtórnik':
            typ_pj.innerHTML = '2';
            break;
        default:
            break;
    }
    wypiszNrBalnkietuPj(dane.pj.nrBlankietu);
    wypiszNrPj(dane.pj.nrPj);
    wypiszPjDataW(dane.pj.dataWydania);
    if (dane.pj.kategoria.a) pj_katA.classList.remove('cross');
    if (dane.pj.kategoria.b) pj_katB.classList.remove('cross');
    if (dane.pj.kategoria.c) pj_katC.classList.remove('cross');
    if (dane.pj.kategoria.d) pj_katD.classList.remove('cross');
    if (dane.pj.kategoria.t) pj_katT.classList.remove('cross');
    if (dane.pj.kategoria.a1) pj_katA1.classList.remove('cross');
    if (dane.pj.kategoria.b1) pj_katB1.classList.remove('cross');
    if (dane.pj.kategoria.c1) pj_katC1.classList.remove('cross');
    if (dane.pj.kategoria.d1) pj_katD1.classList.remove('cross');
    // regulacja szerokością
    wypiszKatDodatkowa(dane.pj.kategoria.katDodatkowa);
    wypiszPjDataPW(dane.pj.dataPierwszychUprawnien);
    if (dane.pj.organ != '') {
        pj_organ.innerHTML = dane.pj.organ;
    }
    // miejsce i czas zdarzenia
    wypiszCzasZdarzenia(dane.czas.data, dane.czas.godz, dane.czas.min);
    zd_powiat.innerHTML = PierwszA(dane.miejsce.powiat);
    zd_gmina.innerHTML = PierwszA(dane.miejsce.gmina);
    zd_miejscowosc.innerHTML = PierwszA(dane.miejsce.miejscowosc);
    // wypisywanie miejscowości
    wypiszUlCzyDroga(dane.miejsce.rodzaj, dane.miejsce.ulica, dane.miejsce.nrDrogi);
    // Wykroczenie
    if (wykroczenie != null) {
        wykroczenie.forEach(function (element, index) {
            mrdWykroczenie[index].innerHTML = element.opis + " Kod czynu: " + element.kod;

        });
    }
    switch (dane.wynik.rodzaj) {
        case 'mandat kredytowy':
            wypiszMandat(dane.wynik.kwota, dane.wynik.mandatNr);
            mrd_pkt[1].classList.add('circle');
            break;
        case 'mandat gotówkowy':
            wypiszMandat(dane.wynik.kwota, dane.wynik.mandatNr);
            mrd_pkt[0].classList.add('circle');
            break;
        case 'mandat zaoczny':
            wypiszMandat(dane.wynik.kwota, dane.wynik.mandatNr);
            mrd_pkt[2].classList.add('circle');
            break;
        case 'wniosek o ukaranie':
            mrd_pkt[3].classList.add('circle');
            break;
        default:
            break;
    }
    // Funkcjonariusz
    if (pobierzFk()) {
        var funk = pobierzFk();
        wypiszNrLeg(funk.nr_leg);
        mrdFkStopien.innerHTML = funk.stopien;
        mrdFkImie.innerHTML = funk.imie;
        mrdFkNazwisko.innerHTML = funk.nazwisko;
    }
    //pojazd
    pojRodzaj.innerHTML = dane.pojazd.rodzaj;
    pojMarka.innerHTML = dane.pojazd.marka;
    pojKrajRej.innerHTML = dane.pojazd.krajRejestracji;
    wypiszNrRej(dane.pojazd.nrRej);
    zapWypiszJednostkęPolicaji(dane.miejsce.powiat, dane.miejsce.wojewodztwo);
};
// Koniec Funkcjonalności zarządzającej wypełnieniem wszystkich pól
// !!! FUNKCJONALNOŚĆ MENU
function zazadzajMenu(){
    document.getElementById('btn_kody').style.display = "none";
}
//funkcjonalność druku i powroty
document.getElementById('btn_powrot').addEventListener('click', function () {
    window.history.back();
}, false);
document.getElementById('btn_print').addEventListener('click', function () {
    window.print();
}, false);
// funkcjonalość zmieniająca szerokość menu
window.onresize = function () {
    var menu = document.getElementById('proMenu');
    var szer = (window.innerWidth - 40) + "px"
    menu.style.width = szer;
}
// KONIEC FUNKCJONALNOŚCI MENU






window.onload = function () {
    zazadzajMenu();
    wypelnijWszystkiePola();
}