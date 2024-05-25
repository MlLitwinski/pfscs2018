// Tworzenie nowego obiektu żądania
function createObject() {
    return new XMLHttpRequest();
};
// Funkcjonalność rozwijania kategorji
function odkryjKat(kategoria) {
    kategoria.nextElementSibling.classList.toggle("ukryj");
    wysrodkujSelecty();
    wysrodkujDaty();
}
// FUNKCJONALOŃĆ ZAPISUJĄCA OBIEKTY W SESSIONSTORAGE
function zapiszTabele(obiekt, ktoryZapis) {
    var str = JSON.stringify(obiekt);
    sessionStorage.setItem(ktoryZapis, str);
}
// FUNKCJONALOŃĆ POBIERAJĄCA OBIEKTY W SESSIONSTORAGE
function pobierzTabele(ktoryZapis) {
    var pobranyObiekt = sessionStorage.getItem(ktoryZapis);
    return JSON.parse(pobranyObiekt);
}
// Funkcja zmiany rozmiaru okna i wyśrodkowywania selectów 
window.addEventListener('resize', function () {
    wysrodkujSelecty();
    wysrodkujDaty();
}, false);
function wysrodkujSelecty() {
    if (navigator.userAgent.indexOf("Firefox") == -1) {
        var obSelect = document.getElementsByTagName('select');
        for (var i = 0; i < obSelect.length; i++) {
            var wartosc = obSelect[i].value.length;
            var sPola = obSelect[i].offsetWidth;
            if (obSelect[i].getAttribute('id') == 'osoba_plec') {
                wartosc *= 1.2;
            }
            if (obSelect[i].getAttribute('id') == 'osoba_czy_posiada_pj') {
                wartosc *= 1.1;
            }
            if (obSelect[i].getAttribute('id') == 'pj_kat_select') {
                wartosc = 6;
            }
            var odstep = (sPola / 2) - wartosc * 5;
            obSelect[i].style.textIndent = odstep + "px";
        }
    }
}
// Wyśrodkowywanie daty dla FireFox i Chroma i ustawianie daty maksymalnej
var inputDate = document.querySelectorAll("input[type='date']");
function wysrodkujDaty() {
    for (var i = 0; i < inputDate.length; i++) {
        if (navigator.userAgent.indexOf("Firefox") != -1) {
            inputDate[i].style.height = "29px"
            var szer = (inputDate[i].offsetWidth / 2) - 65;
            inputDate[i].style.textIndent = szer + "px";
        }
        if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
            inputDate[i].style.textIndent = "20px";
        }
    }
}
function ustawDateGranDlaAll(data) {
    for (var i = 0; i < inputDate.length; i++) {
        inputDate[i].setAttribute('max', data);
    }
}
// usuwanie spacji
function usunSpacje(string) {
    var dlu = string.length;
    for (var i = 0; i < dlu; i++) {
        if (string[i] == " ") {
            string = string.slice(0, i);
        }
    }
    return string;
}
// Przypisywanie zmiennych
var generatorAuto = document.getElementById('generatorAuto');
// Przypisywanie pól !!!!! Przejżeć czy pola są potrzebne
// OSOBA !
var osoba_imie = document.getElementById('osoba_imie');
var osoba_nazwisko = document.getElementById('osoba_nazwisko');
var osoba_drugie_imie = document.getElementById('osoba_drugie_imie');
var osoba_obywatelstwo = document.getElementById('osoba_obywatelstwo');
var osoba_pesel = document.getElementById('osoba_pesel');
var osoba_plec = document.getElementById('osoba_plec');
var osoba_data_ur = document.getElementById('osoba_data_ur');
var osoba_imie_ojca = document.getElementById('osoba_imie_ojca');
var osoba_imie_matki = document.getElementById('osoba_imie_matki');
var osoba_nazwisko_matki = document.getElementById('osoba_nazwisko_matki');
// Zamieszkanie
var osoba_kraj = document.getElementById('osoba_kraj');
var osoba_kod_pocztowy = document.getElementById('osoba_kod_pocztowy');
var osoba_kod_pocztowy_err = document.getElementById('osoba_kod_pocztowy_err');
var osoba_kod_pocztowy_zag = document.getElementById('osoba_kod_pocztowy_zag');
var osoba_powiat = document.getElementById('osoba_powiat');
var osoba_gmina = document.getElementById('osoba_gmina');
var osoba_miejscowosc = document.getElementById('osoba_miejscowosc');
var osoba_ulica = document.getElementById('osoba_ulica');
var osoba_nr_domu = document.getElementById('osoba_nr_domu');
var osoba_wojewodstwo = document.getElementById('osoba_wojewodstwo');
var osoba_wojewodstwo_zag = document.getElementById('osoba_wojewodstwo_zag');
// zmienne list rozwijanych
var osoba_ulica_option = document.getElementById('osoba_ulica_option');
var osoba_miejscowosc_option = document.getElementById('osoba_miejscowosc_option');
var osoba_powiat_option = document.getElementById('osoba_powiat_option');
var osoba_gmina_option = document.getElementById('osoba_gmina_option');
// Dokumenty
// Dowód trzsamości
var osoba_dowod = document.getElementById('osoba_dowod');
var osoba_nr_dokumentu = document.getElementById('osoba_nr_dokumentu');
var osoba_dowod_jest = document.getElementById('osoba_dowod_jest');
var osoba_dowod_brak = document.getElementById('osoba_dowod_brak');
// Prawo jazdy
var osoba_czy_posiada_pj = document.getElementById('osoba_czy_posiada_pj');
var osoba_nr_pj = document.getElementById('osoba_nr_pj');
var osoba_pj_jest = document.getElementById('osoba_pj_jest');
var osoba_pj_brak = document.getElementById('osoba_pj_brak');
var osoba_data_wydania_pj = document.getElementById('osoba_data_wydania_pj');
var osoba_data_pierwszego_pj = document.getElementById('osoba_data_pierwszego_pj');
var osoba_pj_nr_blankietu = document.getElementById('osoba_pj_nr_blankietu');
var osoba_pj_organ_wydający = document.getElementById('osoba_pj_organ_wydający');
var osoba_pj_rodzaj = document.getElementById('osoba_pj_rodzaj');
var osoba_pj_mial = document.getElementById('osoba_pj_mial');
var osoba_pj_nie_mial = document.getElementById('osoba_pj_nie_mial');
var pj_kat_a = document.getElementById('pj_kat_a');
var pj_kat_a1 = document.getElementById('pj_kat_a1');
var pj_kat_b = document.getElementById('pj_kat_b');
var pj_kat_b1 = document.getElementById('pj_kat_b1');
var pj_kat_c = document.getElementById('pj_kat_c');
var pj_kat_c1 = document.getElementById('pj_kat_c1');
var pj_kat_d = document.getElementById('pj_kat_d');
var pj_kat_d1 = document.getElementById('pj_kat_d1');
var pj_kat_t = document.getElementById('pj_kat_t');
var pj_kat_select = document.getElementById('pj_kat_select');
// Koniec Dokumenty
// Pojazd
var pojazd_czy_zarejestrowanyA = document.getElementById('pojazd_czy_zarejestrowanyA');
var pojazd_kraj_rejA = document.getElementById('pojazd_kraj_rejA');
var pojazd_czy_zarejestrowanyB = document.getElementById('pojazd_czy_zarejestrowanyB');
var pojazd_kraj_rejB = document.getElementById('pojazd_kraj_rejB');
var pojazd_nr_vinA = document.getElementById('pojazd_nr_vinA');
var pojazd_nr_vinB = document.getElementById('pojazd_nr_vinB');
var pojazd_nr_rejA = document.getElementById('pojazd_nr_rejA');
var pojazd_nr_rejB = document.getElementById('pojazd_nr_rejB');
var pojazd_rodzajA = document.getElementById('pojazd_rodzajA');
var pojazd_rodzajB = document.getElementById('pojazd_rodzajB');
var pojazd_markaA = document.getElementById('pojazd_markaA');
var pojazd_markaB = document.getElementById('pojazd_markaB');
// Miejsce
var miejsce_rodzaj = document.getElementById('miejsce_rodzaj');
var miejsce_nazwa_ul = document.getElementById('miejsce_nazwa_ul');
var miejsce_nr_drogi = document.getElementById('miejsce_nr_drogi');
var miejsce_wojewodstwo = document.getElementById('miejsce_wojewodstwo');
var miejsce_miejscowosc = document.getElementById('miejsce_miejscowosc');
var miejsce_miejscowosc_w = document.getElementById('miejsce_miejscowosc_w');
var miejsce_miejscowosc_obok = document.getElementById('miejsce_miejscowosc_obok');
var miejsce_powiat = document.getElementById('miejsce_powiat');
var miejsce_gmina = document.getElementById('miejsce_gmina');
//Czas
var miejsce_dzien = document.getElementById('miejsce_dzien');
var miejsce_godziny_input = document.getElementById('miejsce_godziny_input');
var miejsce_minuty_input = document.getElementById('miejsce_minuty_input');
// Wynik
var wynik_rodzaj = document.getElementById('wynik_rodzaj');
var wynik_nr_mandat = document.getElementById('wynik_nr_mandat');
var wynik_kwota = document.getElementById('wynik_kwota');
var fk_jednostka = document.getElementById('fk_jednostka');
var fk_referat = document.getElementById('fk_referat');
var fk_sygnatura = document.getElementById('fk_sygnatura');
var wynik_nr_sprawy = document.getElementById('wynik_nr_sprawy');
// Funkcjonariusz
var fk_imie = document.getElementById('fk_imie');
var fk_nazwisko = document.getElementById('fk_nazwisko');
var fk_stopien = document.getElementById('fk_stopien');
var fk_stanowisko = document.getElementById('fk_stanowisko');
var fk_nr_leg = document.getElementById('fk_nr_leg');
// WALIDACJA PÓL !!!
// Funkcjonalność walidacji pól wpisanych i drobne zadania
// Osoba
// Rzpoznawanie płci po imieniu
osoba_imie.addEventListener('blur', function () {
    var len = osoba_imie.value.length;
    if (osoba_imie.value != "") {
        if (osoba_imie.value[len - 1].toLowerCase() == 'a') {
            osoba_plec.value = 'kobieta';
            plecZienForm();
        } else {
            osoba_plec.value = 'mężczyzna';
            plecZienForm();
        }
    }
});
osoba_nazwisko.addEventListener('input', function () {
    osoba_nazwisko.style.backgroundColor = "white";
}, false)
osoba_imie_ojca.addEventListener('input', function () {
    osoba_imie_ojca.style.backgroundColor = "white";
}, false)
// Walidacja PESEL POCZĄTEK
osoba_pesel.addEventListener('focus', function () {
    osoba_pesel_err.innerHTML = "<i>PESEL</i>";
});
osoba_pesel.addEventListener('input', testPesel, false);
function testPesel() {
    if (osoba_pesel.value.length <= 11) {
        osoba_pesel.style.backgroundColor = "white";
    }
    var osoba_pesel_err = document.getElementById('osoba_pesel_err');
    var wynik = false;
    if (osoba_pesel.value.length == 11) {
        wynik = sprawdzNrPesel();
    } else if (osoba_pesel.value.length < 11) {
        osoba_pesel_err.innerHTML = "za mało cyfr";
    } else {
        osoba_pesel.value = osoba_pesel.value.slice(0, osoba_pesel.value.length - 1);
    }
    return wynik;
}
osoba_pesel.addEventListener('blur', sprawdzNrPesel, false);
function sprawdzNrPesel() {
    if (osoba_pesel.value.length != 11) {
        osoba_pesel_err.innerHTML = "nr PESEL błędny";
        osoba_pesel.style.backgroundColor = "#d87886";
        return false;
    } else {
        var pesel = ("" + osoba_pesel.value).split("");
        var miesiac = '';
        var dzien = '';
        for (var i = 2; i < 6; i++) {
            if (i == 2 || i == 3) {
                miesiac += pesel[i];
            }
            if (i == 4 || i == 5) {
                dzien += pesel[i];
            }
        }
        if (parseInt(miesiac) > 12 || parseInt(dzien) > 31) {
            osoba_pesel_err.innerHTML = "nr PESEL błędny (pierwsz 6 cyfr)";
            osoba_pesel.style.backgroundColor = "#d87886";
            return false;
        } else {
            var sumakontrolna = (1 * parseInt(pesel[0]) + 3 * parseInt(pesel[1]) + 7 * parseInt(pesel[2]) + 9 * parseInt(pesel[3]) + 1 * parseInt(pesel[4]) + 3 * parseInt(pesel[5]) + 7 * parseInt(pesel[6]) + 9 * parseInt(pesel[7]) + 1 * parseInt(pesel[8]) + 3 * parseInt(pesel[9])) % 10;
            if (sumakontrolna == 0) {
                sumakontrolna = 10;
            }
            sumakontrolna = 10 - sumakontrolna;
            if (parseInt(pesel[10]) == sumakontrolna) {
                osoba_pesel_err.innerHTML = "<i>PESEL</i>";
                osoba_pesel.style.backgroundColor = "white";
                return true;
            } else {
                osoba_pesel_err.innerHTML = "nr PESEL błędny (suma kontrolna)";
                osoba_pesel.style.backgroundColor = "#d87886";
                return false;
            }
        }
    }
}
// Koniec Walidacji nr PESEL
// Input dla płeć
osoba_plec.addEventListener('input', function () {
    wysrodkujSelecty();
    plecZienForm();
}, false);
// funkcja zmieniająca wszystkie radio
function plecZienForm() {
    var wszystkieRadio = document.getElementById('btn_gen_dokumenty').nextElementSibling.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < wszystkieRadio.length; i++) {
        if (i % 2 == 0) {
            if (osoba_plec.value == 'kobieta') {
                wszystkieRadio[i].nextElementSibling.lastElementChild.innerHTML = 'posiadała';
            } else {
                wszystkieRadio[i].nextElementSibling.lastElementChild.innerHTML = 'posiadał';
            }
        } else {
            if (osoba_plec.value == 'kobieta') {
                wszystkieRadio[i].nextElementSibling.lastElementChild.innerHTML = 'nie posiadała';
            } else {
                wszystkieRadio[i].nextElementSibling.lastElementChild.innerHTML = 'nie posiadał';
            }
        }
    }
}
// Zmiana pól w zależności od obywatelstwa
osoba_obywatelstwo.addEventListener('focus', function () {
    osoba_obywatelstwo.value = "";
});
osoba_obywatelstwo.addEventListener('input', polaObywatelstwo, false);
function polaObywatelstwo() {
    osoba_obywatelstwo.value = osoba_obywatelstwo.value.toLowerCase();
    var tabCzyRp = document.getElementById('czyObywatelRP').getElementsByTagName('div');
    if (osoba_obywatelstwo.value != 'polskie') {
        osoba_pesel.parentNode.setAttribute('class', 'ukryj');
        osoba_data_ur.parentNode.setAttribute('class', 'genFormDivInput');
        for (var i = 0; i < tabCzyRp.length; i++) {
            tabCzyRp[i].setAttribute('class', 'ukryj');
        }
    } else {
        osoba_pesel.parentNode.setAttribute('class', 'genFormDivInput');
        osoba_data_ur.parentNode.setAttribute('class', 'ukryj');
        for (var j = 0; j < tabCzyRp.length; j++) {
            tabCzyRp[j].setAttribute('class', 'genFormDivInput');
        }
    }
}
osoba_obywatelstwo.addEventListener('blur', function () {
    ustawPoleNrDowodu();
    if (osoba_obywatelstwo.value == 'polskie') {
        osoba_czy_posiada_pj.value = 'posiada (polskie)';
    } else {
        osoba_czy_posiada_pj.value = 'posiada';
    }
    wysrodkujSelecty();
}, false);
// Koniec osoby
// Zamieszkanie
osoba_kraj.addEventListener('focus', function () {
    osoba_kraj.value = "";
});
osoba_kraj.addEventListener('input', function () {
    var txt = osoba_kraj.value.toLowerCase();
    txt = txt.charAt(0).toUpperCase() + txt.slice(1);
    osoba_kraj.value = txt;
}, false);
osoba_kraj.addEventListener('blur', krajPola, false);
function krajPola() {
    if (osoba_kraj.value != 'Polska') {
        osoba_kod_pocztowy.parentNode.setAttribute('class', 'ukryj');
        osoba_kod_pocztowy_zag.parentNode.setAttribute('class', 'genFormDivInput');
        osoba_wojewodstwo.parentNode.setAttribute('class', 'ukryj');
        osoba_wojewodstwo_zag.parentNode.setAttribute('class', 'genFormDivInput');
        osoba_powiat.removeAttribute('required');
        osoba_gmina.removeAttribute('required');
    } else {
        osoba_kod_pocztowy_zag.parentNode.setAttribute('class', 'ukryj');
        osoba_kod_pocztowy.parentNode.setAttribute('class', 'genFormDivInput');
        osoba_wojewodstwo_zag.parentNode.setAttribute('class', 'ukryj');
        osoba_wojewodstwo.parentNode.setAttribute('class', 'genFormDivInput');
        osoba_powiat.setAttribute('required', true);
        osoba_gmina.setAttribute('required', true);
    }
}
// Walidacja Kodu pocztowego
osoba_kod_pocztowy.addEventListener('focus', function () {
    osoba_kod_pocztowy_err.innerHTML = '<i>format (dd-ddd)</i>'
}, false);
// Input dla kodu pocztowego
osoba_kod_pocztowy.addEventListener('input', function () {
    var kod = usunSpacje(osoba_kod_pocztowy.value);
    var dlu = kod.length;
    if (dlu <= 6) {
        if (isNaN(kod[dlu - 1])) {
            kod = kod.slice(0, dlu - 1);
        } else {
            osoba_kod_pocztowy.value = kod;
        }
        if (dlu == 2) {
            kod += '-';
        }
        osoba_kod_pocztowy.value = kod;
    } else {
        kod = kod.slice(0, dlu - 1);
        osoba_kod_pocztowy.value = kod;
    }
}, false);
osoba_kod_pocztowy.addEventListener('blur', function () {
    if (sprawdzKodPocztowy(osoba_kod_pocztowy.value)) {
        pobierzLiKody(osoba_kod_pocztowy.value);
    };
}, false);
// POCZĄTEK DANYCH PO KODACH POCZTOWYCH
function stworzOpcje(zaw) {
    var opcja = document.createElement('option');
    opcja.setAttribute('value', zaw.toLowerCase());
    opcja.innerHTML = zaw.toLowerCase();
    return opcja;
}
function wypiszDanePoKody(kody) {
    console.log(kody);
    var tab = kody;
    tabKodyDlaWyboru = kody;
    if (tab.length == 1) {
        czyscPodKody();
        osoba_wojewodstwo.value = tab[0].woj.toLowerCase();
        osoba_ulica.value = tab[0].ul.toLowerCase();
        osoba_miejscowosc.value = tab[0].m.toLowerCase();
        osoba_gmina.value = tab[0].gm.toLowerCase();
        osoba_powiat.value = tab[0].pow.toLowerCase();
    } else if (tab.length > 1) {
        czyscPodKody();
        osoba_wojewodstwo.value = tab[0].woj.toLowerCase();
        var tabUlice = [];
        var tabMiasta = [];
        var tabGminy = [];
        var tabPowiaty = [];
        for (var i = 0; i < tab.length; i++) {
            if (tab[i].ul != "") {
                if (tabUlice.includes(tab[i].ul) == false) {
                    tabUlice.push(tab[i].ul);
                }
            }
            if (tab[i].m != "") {
                if (tabMiasta.includes(tab[i].m) == false) {
                    tabMiasta.push(tab[i].m);
                }
            }
            if (tab[i].gm != "") {
                if (tabGminy.includes(tab[i].gm) == false) {
                    tabGminy.push(tab[i].gm);
                }
            }
            if (tab[i].pow != "") {
                if (tabPowiaty.includes(tab[i].pow) == false) {
                    tabPowiaty.push(tab[i].pow);
                }
            }
        }
        if (tabUlice.length == 1) {
            osoba_ulica.value = tabUlice[0].toLowerCase();
        } else if (tabUlice.length > 1) {
            for (var i = 0; i < tabUlice.length; i++) {
                osoba_ulica_option.appendChild(new stworzOpcje(tabUlice[i]));
            }
        }
        if (tabMiasta.length == 1) {
            osoba_miejscowosc.value = tabMiasta[0].toLowerCase();
        } else if (tabMiasta.length > 1) {
            for (var i = 0; i < tabMiasta.length; i++) {
                osoba_miejscowosc_option.appendChild(new stworzOpcje(tabMiasta[i]));
            }
        }
        if (tabGminy.length == 1) {
            osoba_gmina.value = tabGminy[0].toLowerCase();
        } else if (tabGminy.length > 1) {
            for (var i = 0; i < tabGminy.length; i++) {
                osoba_gmina_option.appendChild(new stworzOpcje(tabGminy[i]));
            }
        }
        if (tabPowiaty.length == 1) {
            osoba_powiat.value = tabPowiaty[0].toLowerCase();
        } else if (tabPowiaty.length > 1) {
            for (var i = 0; i < tabPowiaty.length; i++) {
                osoba_powiat_option.appendChild(new stworzOpcje(tabPowiaty[i]));
            }
        }
    } else {
        osoba_kod_pocztowy_err.innerHTML = "kod niezgodny";
    }
    wysrodkujSelecty();
};
// Czyszczenie pół i opcji po uzyskaniu wyniku
function czyscPodKody() {
    osoba_ulica.value = "";
    osoba_miejscowosc.value = "";
    osoba_gmina.value = "";
    osoba_powiat.value = "";
    osoba_ulica_option.innerHTML = "";
    osoba_miejscowosc_option.innerHTML = "";
    osoba_gmina_option.innerHTML = "";
    osoba_powiat_option.innerHTML = "";
    osoba_miejscowosc.style.backgroundColor = "white";
    osoba_gmina.style.backgroundColor = "white";
    osoba_powiat.style.backgroundColor = "white";
}
// FUNKCJONALNOŚĆ ZAWĘŻAJĄCA DOKŁADNOŚĆ WYSZUKIWANIA
var tabKodyDlaWyboru = [];
osoba_miejscowosc.addEventListener('blur', wyszukajPonownie, false);
function wyszukajPonownie() {
    var tabPon = [];
    if (osoba_miejscowosc.value != "") {
        if (tabKodyDlaWyboru.length > 1) {
            if (tabKodyDlaWyboru[0].kod == osoba_kod_pocztowy.value) {
                for (var i = 0; i < tabKodyDlaWyboru.length; i++) {
                    if (tabKodyDlaWyboru[i].m.toLowerCase() == osoba_miejscowosc.value)
                        tabPon.push(tabKodyDlaWyboru[i]);
                }
                wypiszDanePoKody(tabPon);
            }
        }
    }
}
// KONIEC WYPISYWANIE DANYCH PO KODACH POCZTOWYCH
//funkcja sprawdzająca kod pocztowy
function sprawdzKodPocztowy(kod) {
    var wyrazenie = /^[0-9]{2}-[0-9]{3}$/;
    if (kod.match(wyrazenie)) {
        osoba_kod_pocztowy_err.innerHTML = '<i>kod pocztowy</i>';
        return true;
    } else {
        osoba_kod_pocztowy_err.innerHTML = '<i>wpisz poprawny kod pocztowy!</i>';
        return false;
    }
}
// Koniec walidacji kodu pocztowego
// POCZĄTEK FUNKCJONALNOŚCI POBIERANIA KODÓW POCZTOWYCH
function pobierzLiKody(kod) {
    var req = createObject();
    req.open('GET', '/kodypocztowe/' + kod, true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var doc = "(" + req.responseText + ")";
            var tablicaKodPocztowe = eval(doc);
            wypiszDanePoKody(tablicaKodPocztowe);
        }
    };
}
// KONIEC POBIERANIA KODÓW POCZTOWYCH
// Input dla województwa
osoba_wojewodstwo.addEventListener('input', wysrodkujSelecty, false);
// Koniec Osoba
// Początek Dokumenty
osoba_dowod.addEventListener('input', wysrodkujSelecty, false);
osoba_dowod.addEventListener('blur', ustawPoleNrDowodu, false);
function ustawPoleNrDowodu() {
    if (osoba_obywatelstwo.value == 'polskie' && osoba_dowod.value == 'dowód osobisty') {
        osoba_nr_dokumentu.setAttribute('pattern', '^[A-Z]{3}[0-9]{6}$')
    } else {
        osoba_nr_dokumentu.removeAttribute('pattern')
    }
}
// Początek walidacji nr dowodu
osoba_nr_dokumentu.addEventListener('input', function () {
    if (osoba_obywatelstwo.value == 'polskie' && osoba_dowod.value == 'dowód osobisty') {
        var osoba_dowod_err = document.getElementById('osoba_dowod_err');
        osoba_nr_dokumentu.style.backgroundColor = "white";
        var dlu = osoba_nr_dokumentu.value.length;
        var nrDow = usunSpacje(osoba_nr_dokumentu.value.toUpperCase());
        var wynik = false;
        if (dlu == 9) {
            wynik = sprawdzNrDow();
        }
        else if (dlu < 9) {
            if (dlu <= 3 && (!isNaN(nrDow[dlu - 1])) || nrDow[dlu - 1] == 'O' || nrDow[dlu - 1] == 'Q') {
                nrDow = nrDow.slice(0, dlu - 1);
            }
            if (dlu > 3) {
                if (!isNaN(nrDow[dlu - 1]) == false) {
                    nrDow = nrDow.slice(0, dlu - 1);
                }
            }
            osoba_dowod_err.innerHTML = "za mało znaków";
        } else {
            nrDow = nrDow.slice(0, dlu - 1);
        }
        osoba_nr_dokumentu.value = nrDow;
        return wynik;
    }
}, false);
function sprawdzWaroscZnaku(znak) {
    var wartosciZnakow = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return wartosciZnakow.indexOf(znak);
}
function sprawdzNrDow() {
    var nrDow = osoba_nr_dokumentu.value.toUpperCase();
    for (i = 0; i < 3; i++)
        if (sprawdzWaroscZnaku(nrDow[i]) < 10 || nrDow[i] == 'O' || nrDow == 'Q') {
            osoba_dowod_err.innerHTML = "nr dokumentu błędny";
            osoba_nr_dokumentu.style.backgroundColor = "#d87886";
            return false;
        };
    for (i = 3; i < 9; i++)
        if (sprawdzWaroscZnaku(nrDow[i]) < 0 || sprawdzWaroscZnaku(nrDow[i]) > 9) {
            osoba_dowod_err.innerHTML = "nr dokumentu błędny";
            osoba_nr_dokumentu.style.backgroundColor = "#d87886";
            return false;
        };
    //sprawdź cyfrę kontrolną
    var sum = 7 * sprawdzWaroscZnaku(nrDow[0]) +
        3 * sprawdzWaroscZnaku(nrDow[1]) +
        1 * sprawdzWaroscZnaku(nrDow[2]) +
        7 * sprawdzWaroscZnaku(nrDow[4]) +
        3 * sprawdzWaroscZnaku(nrDow[5]) +
        1 * sprawdzWaroscZnaku(nrDow[6]) +
        7 * sprawdzWaroscZnaku(nrDow[7]) +
        3 * sprawdzWaroscZnaku(nrDow[8]);
    sum %= 10;
    if (sum != sprawdzWaroscZnaku(nrDow[3])) {
        osoba_dowod_err.innerHTML = "nr dokumentu błędny";
        osoba_nr_dokumentu.style.backgroundColor = "#d87886";
        return false;
    };
    osoba_dowod_err.innerHTML = "nr dokumentu";
    osoba_nr_dokumentu.style.backgroundColor = "white";
    return true;
}
osoba_nr_dokumentu.addEventListener('blur', function () {
    if (osoba_obywatelstwo.value == 'polskie' && osoba_dowod.value == 'dowód osobisty') {
        if (sprawdzNrDow()) {
            osoba_dowod_err.innerHTML = "nr dokumentu";
        }
    } else {
        osoba_dowod_err.innerHTML = "nr dokumentu";
    }
}, false);
// Koniec walidacji dowodu osobistego
// Początek walidacji i zarządzania polami w prawie jazdy
// sprawdzenie czy zaznaczono kategorie pj
function sprawdzCzyZazaczonoPj() {
    var ch_pj = document.querySelectorAll('.ch_pj');
    var pj_kat_error = document.getElementById('pj_kat_error');
    var odkryjKat = document.getElementById('btn_gen_dokumenty').nextElementSibling;
    var wynik = false;
    for (var i = 0; i < ch_pj.length; i++) {
        if (ch_pj[i].checked) wynik += true;
    }
    if (wynik == false) {
        btn_gen_dokumenty
        pj_kat_error.innerHTML = "Wypełnij posiadane kategorie prawa jazdy!!!";
        odkryjKat.classList.remove('ukryj');
        var pos = pj_kat_error.offsetTop;
        window.scrollTo(0, pos - 100);
    } else {
        pj_kat_error.innerHTML = "posiadane kategorie prawa jazdy";
    }
    return wynik;
}
// Funkcjonalność gdy nie posiada uprawnień
osoba_czy_posiada_pj.addEventListener('input', osobaPosiadaPola, false);
function osobaPosiadaPola() {
    var pjNiePosiada = document.getElementById('pjNiePosiada').getElementsByTagName('div');
    var genBox_pj_kat = document.getElementById('genBox_pj_kat');
    for (var i = 0; i < pjNiePosiada.length; i++) {
        if (osoba_czy_posiada_pj.value == 'posiada (polskie)') {
            pjNiePosiada[i].setAttribute('class', 'genFormDivInput');
            if (pjNiePosiada[i].getAttribute('id') == 'osoba_pj_przy_kontroli') {
                pjNiePosiada[i].setAttribute('class', 'genFormDivInput genFormRadio');
            }
            if (pjNiePosiada[i].getAttribute('id') == 'osoba_pj_odebrano') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
        } else if (osoba_czy_posiada_pj.value == 'posiada') {
            pjNiePosiada[i].setAttribute('class', 'genFormDivInput');
            if (pjNiePosiada[i].getAttribute('id') == 'osoba_pj_przy_kontroli') {
                pjNiePosiada[i].setAttribute('class', 'genFormDivInput genFormRadio');
            }
            if (pjNiePosiada[i].getAttribute('id') == 'osoba_pj_odebrano') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            if (pjNiePosiada[i].getAttribute('id') == 'pj_info') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            if (pjNiePosiada[i].getAttribute('name') == 'osoba_data_pierwszego_pj') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            if (pjNiePosiada[i].getAttribute('name') == 'osoba_pj_rodzaj') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            if (pjNiePosiada[i].getAttribute('name') == 'osoba_pj_nr_blankietu') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            if (pjNiePosiada[i].getAttribute('name') == 'osoba_pj_organ_wydający') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            osoba_nr_pj.removeAttribute('pattern');
        } else {
            pjNiePosiada[i].setAttribute('class', 'ukryj');
            if (pjNiePosiada[i].getAttribute('id') == 'osoba_pj_przy_kontroli') {
                pjNiePosiada[i].setAttribute('class', 'ukryj');
            }
            if (pjNiePosiada[i].getAttribute('id') == 'osoba_pj_odebrano') {
                pjNiePosiada[i].setAttribute('class', 'genFormDivInput genFormRadio');
            }
        }
    }
    if (osoba_czy_posiada_pj.value == 'posiada (polskie)' || osoba_czy_posiada_pj.value == 'posiada') {
        genBox_pj_kat.setAttribute('class', '');
    } else {
        genBox_pj_kat.setAttribute('class', 'ukryj');
    }
    wysrodkujSelecty();
}
osoba_nr_pj.addEventListener('input', function () {
    var osoba_nr_pj_err = document.getElementById('osoba_nr_pj_err');
    if (osoba_czy_posiada_pj.value == 'posiada (polskie)') {
        var dlu = osoba_nr_pj.value.length;
        var numer = usunSpacje(osoba_nr_pj.value);
        if (!isNaN(numer[dlu - 1]) == false && numer[dlu - 1] != '/') {
            numer = numer.slice(0, dlu - 1);
        }
        if (dlu < 13) {
            osoba_nr_pj_err.innerHTML = '12345/12/1234';
        } else if (dlu == 13) {
            osoba_nr_pj_err.innerHTML = 'nr dokumentu';
        }
        if (dlu == 16) {
            numer = numer.slice(0, dlu - 1);
        }
        osoba_nr_pj.value = numer;
    }
}, false);
// Funkcjonalność wyboru kodu terytorialnego i przesłyłania go do bazy
osoba_nr_pj.addEventListener('blur', function () {
    var input = osoba_nr_pj.value.split("");
    var dlu = input.length;
    var sprawdzenie = 0;
    if (dlu == 13 || dlu == 15) {
        for (var i = 0; i < dlu; i++) {
            if (input[i] == '/') {
                sprawdzenie += 1;
            }
        };
    };
    if (sprawdzenie == 2) {
        var output = [];
        for (var i = dlu; i > dlu - 7; i--) {
            if (input[i] == '/') break;
            output.push(input[i]);
        }
        output = output.reverse().join('');
        if (output.length == 4 || output.length == 6) {
            ZdobodzIWyswietlOrgan(output);
        }
        osoba_nr_pj_err.innerHTML = 'nr dokumentu';
    };
}, false);
// funkcjonalość pobierająca i wyświetlająca organ
function ZdobodzIWyswietlOrgan(kod) {
    var req = createObject();
    req.open('GET', '/kodyterytorialne/' + kod, true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var doc = "(" + req.responseText + ")";
            var text = eval(doc);
            if (text != 'brak') {
                osoba_pj_organ_wydający.value = text;
                osoba_pj_organ_wydający.style.backgroundColor = "white";
            }
        };
    };
}
// funkcjonalność zmiany rekuaierd na brak balnkietu i etykiet
osoba_pj_jest.addEventListener('click', pjPrzyOsobie, false);
osoba_pj_brak.addEventListener('click', pjPrzyOsobie, false);
function pjPrzyOsobie() {
    if (osoba_pj_jest.checked) {
        osoba_data_wydania_pj.setAttribute('required', true);
        osoba_pj_nr_blankietu.setAttribute('required', true);
        osoba_pj_organ_wydający.setAttribute('required', true);
    } else {
        osoba_data_wydania_pj.removeAttribute('required');
        osoba_pj_nr_blankietu.removeAttribute('required');
        osoba_pj_organ_wydający.removeAttribute('required');
    }
}
osoba_pj_rodzaj.addEventListener('input', wysrodkujSelecty, false);
osoba_pj_mial.addEventListener('click', pjNigdy, false);
osoba_pj_nie_mial.addEventListener('click', pjNigdy, false);
function pjNigdy() {
    var osoba_pj_odebrano_err = document.getElementById('osoba_pj_odebrano_err');
    if (osoba_pj_mial.checked) {
        if (osoba_plec.value == 'kobieta') {
            osoba_pj_odebrano_err.innerHTML = 'lecz utraciła uprawnienia';
        } else {
            osoba_pj_odebrano_err.innerHTML = 'lecz utracił uprawnienia';
        }
    } else {
        osoba_pj_odebrano_err.innerHTML = 'nigdy uprawniań do kierowania';
    }
}
osoba_pj_nr_blankietu.addEventListener('input', function () {
    var input = osoba_pj_nr_blankietu.value.toUpperCase();
    var dlu = input.length;
    var exp1 = /[A-Z]/;
    var exp2 = /[0-9]/;
    if (dlu <= 2) {
        if (!input.match(exp1)) {
            input = input.slice(0, dlu - 1);
        }
    } else if (dlu >= 2) {
        if (!input[dlu - 1].match(exp2)) {
            input = input.slice(0, dlu - 1);
        }
    }
    if (dlu == 9) {
        input = input.slice(0, dlu - 1);
    }
    input = usunSpacje(input);
    osoba_pj_nr_blankietu.value = input;
}, false);
// KONIEC OSOBY
// POJAZDY POCZĄTEK
pojazd_czy_zarejestrowanyA.addEventListener('input', function () {
    if (pojazd_czy_zarejestrowanyA.value == 'nie zarejestrowany') {
        pojazd_kraj_rejA.parentNode.setAttribute('class', 'ukryj');
    } else {
        pojazd_kraj_rejA.parentNode.setAttribute('class', 'genFormDivInput');
    }
    wysrodkujSelecty();
}, false);
pojazd_kraj_rejA.addEventListener('focus', function () {
    pojazd_kraj_rejA.value = "";
}, true);
pojazd_czy_zarejestrowanyB.addEventListener('input', function () {
    if (pojazd_czy_zarejestrowanyB.value == 'nie zarejestrowany') {
        pojazd_kraj_rejB.parentNode.setAttribute('class', 'ukryj');
    } else {
        pojazd_kraj_rejB.parentNode.setAttribute('class', 'genFormDivInput');
    }
    wysrodkujSelecty();
}, false);
pojazd_kraj_rejB.addEventListener('focus', function () {
    pojazd_kraj_rejB.value = "";
}, true);
// Funkcjonalność pobierająca tablicę nr VIN, validująca pole oraz wypisująca markę
var pojazd_nr_vinA_err = document.getElementById('pojazd_nr_vinA_err');
var pojazd_nr_vinB_err = document.getElementById('pojazd_nr_vinB_err');
pojazd_nr_vinA.addEventListener('focus', pobierzVin, true);
pojazd_nr_vinB.addEventListener('focus', pobierzVin, true);
var tablicaVin = [];
function pobierzVin() {
    if (tablicaVin.length == 0) {
        var req = createObject();
        req.open('GET', '/nrvin', true);
        req.send();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                var doc = "(" + req.responseText + ")";
                tablicaVin = eval(doc);
            }
        }
    }
}
pojazd_nr_vinA.addEventListener('input', function () {
    var input = walidujVin(pojazd_nr_vinA.value);
    pojazd_nr_vinA.value = input;
}, true);
pojazd_nr_vinB.addEventListener('input', function () {
    var input = walidujVin(pojazd_nr_vinB.value);
    pojazd_nr_vinB.value = input;
}, true);
pojazd_nr_vinA.addEventListener('blur', function () {
    var input = pojazd_nr_vinA.value;
    if (input.length == 17 || input.length == 12) {
        var marka = wypiszMarkePoVin(input);
        if (marka != null) {
            pojazd_markaA.value = marka;
        }
    }
    if (input.length == 0 || input.length == 17 || input.length == 12) {
        pojazd_nr_vinA_err.innerHTML = 'nr VIN';
    } else {
        pojazd_nr_vinA_err.innerHTML = 'błędna długość nr VIN';
    }
}, false);
pojazd_nr_vinB.addEventListener('blur', function () {
    var input = pojazd_nr_vinB.value;
    if (input.length == 17 || input.length == 12) {
        var marka = wypiszMarkePoVin(input);
        if (marka != null) {
            pojazd_markaB.value = marka;
        }
    }
    if (input.length == 0 || input.length == 17 || input.length == 12) {
        pojazd_nr_vinB_err.innerHTML = 'nr VIN';
    } else {
        pojazd_nr_vinB_err.innerHTML = 'błędna długość nr VIN';
    }
}, false);
function walidujVin(vin) {
    vin = usunSpacje(vin.toUpperCase());
    if (vin.length == 18) {
        vin = vin.slice(0, vin.length - 1);
    }
    var dlu = vin.length;
    for (var i = 0; i < dlu; i++) {
        if (vin[i] == 'O' || vin[i] == 'I' || vin[i] == 'Q') {
            vin = vin.slice(0, i);
        }
    }
    return vin;
}
function wypiszMarkePoVin(vin) {
    var markapojazdu = null;
    if (tablicaVin.length != 0) {
        for (var i = 0; i < tablicaVin.length; i++) {
            if (tablicaVin[i].kod == vin.substring(0, 2)) {
                markapojazdu = tablicaVin[i].marka;
            }
        }
        for (var j = 0; j < tablicaVin.length; j++) {
            if (tablicaVin[j].kod == vin.substring(0, 3)) {
                markapojazdu = tablicaVin[j].marka;
            }
        }
    }
    return markapojazdu;
}
// Koniec pola VIN (walidacja, pozyskanie oraz wypisanie marki);
pojazd_nr_rejA.addEventListener('input', function () {
    pojazd_nr_rejA.value = walidujNrRej(pojazd_nr_rejA.value);
}, false);
pojazd_nr_rejB.addEventListener('input', function () {
    pojazd_nr_rejB.value = walidujNrRej(pojazd_nr_rejB.value);
}, false);
function walidujNrRej(nr) {
    nr = usunSpacje(nr.toUpperCase());
    return nr;
}
// Funkcjonalność dodająca przyczepę
var btnPrzyczepaNaczepa = document.getElementById('btnPrzyczepaNaczepa');
var spanPrzyczepaNaczepa = document.getElementById('spanPrzyczepaNaczepa').getElementsByTagName('div');
var opisPrzyczepaNaczepa = document.getElementById('opisPrzyczepaNaczepa');
spanPrzyczepaNaczepa.ukryte = true;
btnPrzyczepaNaczepa.addEventListener('click', pojazdCzyZestaw, false);
function pojazdCzyZestaw() {
    if (spanPrzyczepaNaczepa.ukryte) {
        btnPrzyczepaNaczepa.innerHTML = 'Pojazd samodzielny';
        opisPrzyczepaNaczepa.classList.remove('ukryj');
        for (var i = 0; i < spanPrzyczepaNaczepa.length; i++) {
            spanPrzyczepaNaczepa[i].setAttribute('class', 'genFormDivInput');
        }
        spanPrzyczepaNaczepa.ukryte = false;
    } else {
        btnPrzyczepaNaczepa.innerHTML = 'Przyczepa/Naczepa';
        opisPrzyczepaNaczepa.classList.add('ukryj');
        for (var i = 0; i < spanPrzyczepaNaczepa.length; i++) {
            spanPrzyczepaNaczepa[i].setAttribute('class', 'ukryj');
        }
        spanPrzyczepaNaczepa.ukryte = true;
    }
    wysrodkujSelecty();
    zapiszDane();
};
// KONEC POJAZDÓW
// POCZĄTEK MIEJSCA I CZASU
// CZAS
function pobierzCzasDoPola() {
    var curentDate = new Date(),
        d = curentDate.getDate(),
        m = curentDate.getMonth() + 1,
        y = curentDate.getFullYear(),
        h = curentDate.getHours(),
        mi = curentDate.getMinutes(),
        data;
    if (d < 10) {
        d = "0" + d;
    };
    if (m < 10) {
        m = "0" + m;
    };
    data = y + "-" + m + "-" + d;
    miejsce_dzien.value = data;
    miejsce_godziny_input.value = h;
    miejsce_minuty_input.value = mi;
};
miejsce_godziny_input.addEventListener('input', function () {
    if (miejsce_godziny_input.value > 24) {
        miejsce_godziny_input.value = 24;
    }
    if (miejsce_godziny_input.value < 0) {
        miejsce_godziny_input.value = 0;
    }
}, false);
miejsce_minuty_input.addEventListener('input', function () {
    if (miejsce_minuty_input.value > 60) {
        miejsce_minuty_input.value = 60;
    }
    if (miejsce_minuty_input.value < 0) {
        miejsce_minuty_input.value = 0;
    }
}, false);
// Miejsce
miejsce_rodzaj.addEventListener('input', miejscePola, false);
function miejscePola() {
    var miejsce_miejscowosc_obok_radio = document.getElementById('miejsce_miejscowosc_obok_radio');
    var value = miejsce_rodzaj.value;
    if (value == 'ulica') {
        miejsce_nazwa_ul.parentNode.setAttribute('class', 'genFormDivInput');
        miejsce_nr_drogi.parentNode.setAttribute('class', 'ukryj');
        miejsce_miejscowosc.parentNode.setAttribute('class', 'genFormDivInput');
        miejsce_miejscowosc_obok_radio.setAttribute('class', 'ukryj');
    }
    if (value == 'miejscowość') {
        miejsce_nazwa_ul.parentNode.setAttribute('class', 'ukryj');
        miejsce_nr_drogi.parentNode.setAttribute('class', 'ukryj');
        miejsce_miejscowosc.parentNode.setAttribute('class', 'genFormDivInput');
        miejsce_miejscowosc_obok_radio.setAttribute('class', 'ukryj');
    }
    if (value == 'autostrada' || value == 'droga krajowa' || value == 'droga wojewódzka') {
        miejsce_nazwa_ul.parentNode.setAttribute('class', 'ukryj');
        miejsce_nr_drogi.parentNode.setAttribute('class', 'genFormDivInput');
        miejsce_miejscowosc.parentNode.setAttribute('class', 'genFormDivInput');
        miejsce_miejscowosc_obok_radio.setAttribute('class', 'genFormDivInput genFormRadio');
    }
    if (value == 'droga gminna') {
        miejsce_nazwa_ul.parentNode.setAttribute('class', 'ukryj');
        miejsce_nr_drogi.parentNode.setAttribute('class', 'ukryj');
        miejsce_miejscowosc.parentNode.setAttribute('class', 'genFormDivInput');
        miejsce_miejscowosc_obok_radio.setAttribute('class', 'genFormDivInput genFormRadio');
    }
    wysrodkujSelecty();
};
miejsce_wojewodstwo.addEventListener('input', function () {
    miejsce_powiat.value = '';
    miejsce_gmina.value = '';
    miejsce_miejscowosc.value = '';
    miejsce_nazwa_ul.value = '';
    pobierzWoj();
    wysrodkujSelecty();
}, false);
// !!! Funkcjonalność popierająca i wypisująca możliwości miejsca
// Zapytanie o obiekt województwa
// W przypadku mazowieckiego pobiera 2.2MB
function pobierzWoj() {
    var req = createObject();
    req.open('GET', '/kodypocztowe/' + miejsce_wojewodstwo.value, true);
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var doc = "(" + req.responseText + ")";
            tablicaWoj = eval(doc);
            podzielTablice(tablicaWoj, 'woj');
        };
    };
};
var miejsce_nazwa_ul_option = document.getElementById('miejsce_nazwa_ul_option');
var miejsce_miejscowosc_option = document.getElementById('miejsce_miejscowosc_option');
var miejsce_powiat_option = document.getElementById('miejsce_powiat_option');
var miejsce_gmina_option = document.getElementById('miejsce_gmina_option');
var tablicaWoj = [];
var tablicaUlica = [];
var tablicaMiejscowosci = [];
var tablicaPowiaty = [];
var tablicaGminy = [];
function podzielTablice(tab, zmienna) {
    var zm = zmienna;
    console.log(zm);
    tablicaUlica = [];
    if (zm != 'pow') tablicaPowiaty = [];
    if (zm != 'gmi') tablicaGminy = [];
    if (zm != 'mie') tablicaMiejscowosci = [];
    for (var i = 0; i < tab.length; i++) {
        if (tablicaUlica.indexOf(tab[i].ul) < 0) {
            tablicaUlica.push(tab[i].ul);
        }
        if (zm != 'pow') {
            if (tablicaPowiaty.indexOf(tab[i].pow) < 0) {
                tablicaPowiaty.push(tab[i].pow);
            }
        }
        if (zm != 'gmi') {
            if (tablicaGminy.indexOf(tab[i].gm) < 0) {
                tablicaGminy.push(tab[i].gm);
            }
        }
        if (zm != 'mie') {
            if (tablicaMiejscowosci.indexOf(tab[i].m) < 0) {
                tablicaMiejscowosci.push(tab[i].m);
            }
        }
    }
    if (zm != 'pow') wypiszPowiat(tablicaPowiaty);
    if (zm != 'gmi') wypiszGmine(tablicaGminy);
    if (zm != 'mie') wypiszMiejscowosci(tablicaMiejscowosci);
    wypiszUlice(tablicaUlica);
};
// Funkcjonalość przeszukująca tablicę w poszukiwaniu inputu
function znajdzPow(tablica) {
    return tablica.pow === miejsce_powiat.value;
};
miejsce_powiat.addEventListener('input', function () {
    if (miejsce_powiat.value == '') wyzerujWyszukiwanie();
    if (miejsce_powiat.value.length > 3) {
        if (tablicaPowiaty.includes(miejsce_powiat.value)) {
            var przeszukanaTab = tablicaWoj.filter(znajdzPow);
            podzielTablice(przeszukanaTab, 'pow');
        }
    };
}, false);
function znajdzGm(tablica) {
    return tablica.gm === miejsce_gmina.value;
};
miejsce_gmina.addEventListener('input', function () {
    if (miejsce_gmina.value == '') wyzerujWyszukiwanie();
    if (miejsce_gmina.value.length > 3) {
        if (tablicaGminy.includes(miejsce_gmina.value)) {
            var przeszukanaTab = tablicaWoj.filter(znajdzGm);
            podzielTablice(przeszukanaTab, 'gmi');
        }
    };
}, false);
function znajdzM(tablica) {
    return tablica.m === miejsce_miejscowosc.value;
};
miejsce_miejscowosc.addEventListener('input', function () {
    if (miejsce_miejscowosc.value == '') wyzerujWyszukiwanie();
    if (miejsce_miejscowosc.value.length > 3) {
        if (tablicaMiejscowosci.includes(miejsce_miejscowosc.value)) {
            var przeszukanaTab = tablicaWoj.filter(znajdzM);
            podzielTablice(przeszukanaTab, 'mie');
        }
    };
}, false);
// Wyzerowywanie pól w przypadku usuniia wszystkich wartości
function wyzerujWyszukiwanie() {
    if (miejsce_powiat.value == '' && miejsce_gmina.value == '' && miejsce_miejscowosc.value == '') {
        podzielTablice(tablicaWoj, 'zeruj');
    }
}
// Funkcjonalonści wypisująca poszczególne pola
function storzOption(option) {
    nowyElement = document.createElement('option');
    nowyElement.innerHTML = option;
    return nowyElement;
}
function wypiszPowiat(powiat) {
    miejsce_powiat_option.innerHTML = "";
    if (powiat.length == 1) {
        miejsce_powiat.value = powiat[0];
        miejsce_powiat.style.backgroundColor = 'white';
    } else {
        for (var i = 0; i < powiat.length; i++) {
            miejsce_powiat_option.appendChild(new storzOption(powiat[i]));
        }
    }
}
function wypiszGmine(gmina) {
    miejsce_gmina_option.innerHTML = "";
    if (gmina.length == 1) {
        miejsce_gmina.value = gmina[0];
        miejsce_gmina.style.backgroundColor = 'white';
    } else {
        for (var i = 0; i < gmina.length; i++) {
            miejsce_gmina_option.appendChild(new storzOption(gmina[i]));
        };
    }
};
function wypiszMiejscowosci(miejscowosci) {
    miejsce_miejscowosc_option.innerHTML = "";
    for (var i = 0; i < miejscowosci.length; i++) {
        miejsce_miejscowosc_option.appendChild(new storzOption(miejscowosci[i]));
    };
};
function wypiszUlice(ulice) {
    miejsce_nazwa_ul_option.innerHTML = "";
    for (var i = 0; i < ulice.length; i++) {
        miejsce_nazwa_ul_option.appendChild(new storzOption(ulice[i]));
    };
};
// !!! KONIEC FUNKCJONALNOŚCI POMOCY W OKREŚLENIU MIEJSCA
// KONEC MIEJSCA I CZASU
// POCZĄTEK WYNIKU
wynik_rodzaj.addEventListener('input', wynikPola, false);
function wynikPola() {
    if (wynik_rodzaj.value == 'mandat kredytowy') {
        wynik_nr_mandat.parentNode.setAttribute('class', 'genFormDivInput');
        wynik_kwota.parentNode.setAttribute('class', 'genFormDivInput');
    }
    if (wynik_rodzaj.value == 'mandat gotówkowy') {
        wynik_nr_mandat.parentNode.setAttribute('class', 'genFormDivInput');
        wynik_kwota.parentNode.setAttribute('class', 'genFormDivInput');
    }
    if (wynik_rodzaj.value == 'wniosek o ukaranie') {
        wynik_nr_mandat.parentNode.setAttribute('class', 'ukryj');
        wynik_kwota.parentNode.setAttribute('class', 'ukryj');
    }
    wysrodkujSelecty();
};
wynik_nr_mandat.addEventListener('input', function () {
    var input = wynik_nr_mandat.value.toUpperCase();
    var dlu = input.length;
    var exp1 = /[A-Z]/;
    var exp2 = /[0-9]/;
    var typ = 10;
    if (input[2]) {
        if (isNaN(input[2])) {
            typ = 12;
        }
    }
    if (dlu <= 3) {
        if (!input.match(exp1)) {
            input = input.slice(0, dlu - 1);
        }
    } else if (dlu >= 3) {
        if (!input[dlu - 1].match(exp2)) {
            input = input.slice(0, dlu - 1);
        }
    }
    if (dlu == typ) {
        input = input.slice(0, dlu - 1);
    }
    input = usunSpacje(input);
    wynik_nr_mandat.value = input;
}, false);
fk_jednostka.addEventListener('focus', function () {
    fk_jednostka.value = '';
}, false);
fk_jednostka.addEventListener('input', function () {
    var option = document.getElementById('fk_jednostka_option').children;
    var input = fk_jednostka.value;
    if (input != '') {
        for (var i = 0; i < option.length; i++) {
            if (option[i].innerHTML == input && fk_sygnatura.value == '') {
                fk_sygnatura.value = option[i].getAttribute('name');
            }
        }
    }
}, false);
// KONEC WYNIKU
// POCZĄTEK FUNKCJONARIUSZ
// Funkcjonalość onload funkcjonariusz
function fkLocalStorage() {
    var pobranyObiekt = localStorage.getItem('funkcjonariusz');
    var obiekt = JSON.parse(pobranyObiekt);
    if (obiekt == null) {
        obiekt = {
            "imie": "",
            "nazwisko": "",
            "stopien": "",
            "stanowisko": "",
            "nr_leg": "",
            "jednostka": "",
            "referat": "",
            "sygnatura": "",
        }
        var str = JSON.stringify(obiekt);
        localStorage.setItem('funkcjonariusz', str);
    } else {
        fkLocalStorageWypisz(obiekt);
    }
};
function fkLocalStorageWypisz(obiekt) {
    fk_imie.value = obiekt.imie;
    fk_nazwisko.value = obiekt.nazwisko;
    fk_stopien.value = obiekt.stopien;
    fk_stanowisko.value = obiekt.stanowisko;
    fk_nr_leg.value = obiekt.nr_leg;
    fk_jednostka.value = obiekt.jednostka;
    fk_referat.value = obiekt.referat;
    fk_sygnatura.value = obiekt.sygnatura;
    
    //fk_sygnatura.value = obiekt.sygnatura;
};
// funkcjonalość pól funkcjonariusz
fk_stopien.addEventListener('focus', function () {
    fk_stopien.value = '';
}, false);
fk_stanowisko.addEventListener('focus', function () {
    fk_stanowisko.value = '';
}, false);
fk_nr_leg.addEventListener('input', function () {
    var dlu = fk_nr_leg.value.length;
    var input = fk_nr_leg.value;
    if (isNaN(input[dlu-1])){
        input = input.slice(0, dlu - 1);
    }
    if (dlu == 7) {
        input = input.slice(0, dlu - 1);
    }
    fk_nr_leg.value = input;
}, false);
// funkcjonalność zapisywania do LocalStorage
var fk_input = document.querySelectorAll('.fk_input');
fk_input.forEach(function (element) {
    element.addEventListener('input', function () {
        var pobranyObiekt = localStorage.getItem('funkcjonariusz');
        var obiekt = JSON.parse(pobranyObiekt);
        obiekt.imie = fk_imie.value;
        obiekt.nazwisko = fk_nazwisko.value;
        obiekt.stopien = fk_stopien.value;
        obiekt.stanowisko = fk_stanowisko.value;
        obiekt.nr_leg = fk_nr_leg.value;
        obiekt.jednostka = fk_jednostka.value;
        obiekt.referat = fk_referat.value;
        obiekt.sygnatura = fk_sygnatura.value;
        var str = JSON.stringify(obiekt);
        localStorage.setItem('funkcjonariusz', str);
    }, false);
});
// KONIEC FUNKCJONARIUSZA
// FUNKCJONALNOŚĆ WALIDUJĄCA WSZYSTKIE POLA
// Walidacja wstępna
function validacjaCzyPolaWypelnione() {
    var elementyInput = document.getElementsByTagName('input');
    var wynik = 0;
    // Szczegółowa walidacja w zależności od poszczególnych pól
    if (osoba_pesel.parentNode.classList.contains('genFormDivInput')) {
        if (sprawdzNrPesel() == false) {
            wynik += 1;
        }
    }
    if (osoba_kod_pocztowy.parentNode.classList.contains('genFormDivInput')) {
        if (sprawdzKodPocztowy(osoba_kod_pocztowy.value) == false) {
            wynik += 1;
        }
    }
    if (osoba_obywatelstwo.value == 'polskie' && osoba_dowod.value == 'dowód osobisty') {
        if (sprawdzNrDow() == false) {
            wynik += 1;
        }
    }
    // Ogólna Walidacja wszystkich pól
    for (var i = 0; i < elementyInput.length; i++) {
        if (elementyInput[i].checkValidity() == false) {
            elementyInput[i].style.backgroundColor = "#d87886";
            elementyInput[i].setAttribute('placeholder', 'pole wymagane');
            elementyInput[i].addEventListener('click', function () {
                this.style.backgroundColor = "white";
                this.setAttribute('placeholder', '');
            });
            elementyInput[i].addEventListener('input', function () {
                this.style.backgroundColor = "white";
                this.setAttribute('placeholder', '');
            });
        }
        if (elementyInput[i].checkValidity() == false && elementyInput[i].parentNode.classList.contains('ukryj') == false) {
            wynik += 1;
        }
    }
    if (wynik == 0) {
        return true;
    } else {
        console.log(wynik);
        return false;
    }
}
// Koniec walidacji wstępnej
// Funkcjonalność rozwijająca pozycje divów, które nie przeszły walidacji
function pokarzNiePoprawne() {
    var wszystkieKat = document.getElementsByClassName('genf');
    // zamykaniw poprawnie wypełnionych
    for (var j = 0; j < wszystkieKat.length; j++) {
        wszystkieKat[j].firstElementChild.nextElementSibling.classList.add('ukryj');
    }
    // właściwa funkcjonalność
    var elementyInput = document.getElementsByTagName('input');
    var pierwszyElement = '';
    for (var i = 0; i < elementyInput.length; i++) {
        if (elementyInput[i].checkValidity() == false && elementyInput[i].parentNode.classList.contains('ukryj') == false) {
            elementyInput[i].closest(".genf").firstElementChild.nextElementSibling.classList.remove('ukryj');
            if (pierwszyElement == '') {
                pierwszyElement = elementyInput[i].closest(".genf");
            }
        }
    }
    // wyśrodkowywanie na niewypełnionej kategorii
    if (pierwszyElement != '') {
        var pos = pierwszyElement.offsetTop;
        window.scrollTo(0, pos - 5);
    }
    wysrodkujSelecty();
}
// koniec walidacji drugiego stopnia
// KONIEC FUNKCJONALNOŚCI WALIDUJĄCEJ WSZYSTKIE POLA
// POCZĄTEK PRZYCISKÓW DLA KODEKSU WYKROCZEŃ
// Przycisk MRD
var gen_kw_btn_mrd = document.getElementById('gen_kw_btn_mrd');
gen_kw_btn_mrd.addEventListener('click', function () {
    // miejsce na zmianę atrybutu reqired dla pól

    // Zdjąć requierd z sygnatury wyniku i jednostki









    if (validacjaCzyPolaWypelnione()) {
        // Sprawdzenie czy zaznaczono kategorie prawajazdy
        if (sprawdzCzyZazaczonoPj()) window.location.href = "/mrd";
    } else {
        pokarzNiePoprawne();
    }
}, false);
function pokarzBtnDlaMrd() {
    if (osoba_czy_posiada_pj.value == 'posiada (polskie)') {
        gen_kw_btn_mrd.setAttribute('class', 'generatorBtnDocPrd border light cursor');
    } else {
        gen_kw_btn_mrd.setAttribute('class', 'ukryj');
    }
};
// Przycisk Notatki
var gen_kw_btn_not = document.getElementById('gen_kw_btn_not');
gen_kw_btn_not.addEventListener('click', function () {
    // miejsce na zmianę atrybutu reqired dla pól












    if (validacjaCzyPolaWypelnione()) {
        alert('Notatka służbowa');
    } else {
        pokarzNiePoprawne();
    }
}, false);
// Przycisk od funduszu gwarancyjnego
var gen_kw_btn_oc = document.getElementById('gen_kw_btn_oc');
gen_kw_btn_oc.addEventListener('click', function () {
    // miejsce na zmianę atrybutu reqired dla pól











    if (validacjaCzyPolaWypelnione()) {
        alert('Fundusz gwarancyjny');
    } else {
        pokarzNiePoprawne();
    }
}, false);


//przycisk test do skasowania
var testBtn = document.getElementById('testBtn');
testBtn.addEventListener('click', function () {
    //console.log(tablicaKodPocztowe);
    //wypiszDanePoKodzie(tablicaKodPocztowe);
    //validacjaCzyPolaWypelnione();
    //pokarzNiePoprawne();
    //wysrodkujDaty();
    //sprawdzPolaMiejsce();

    testFunction();
});
function testFunction() {
    osoba_imie.value = 'Michał';
    osoba_nazwisko.value = 'Litwiński';
    osoba_drugie_imie.value = 'Teofil';
    osoba_pesel.value = 64071310989;
    osoba_imie_ojca.value = 'Stach';
    osoba_kod_pocztowy.value = '70-473';
    pobierzLiKody(osoba_kod_pocztowy.value);
    osoba_nr_domu.value = '113';
    osoba_nr_dokumentu.value = 'CAG341129';
    osoba_nr_pj.value = '01809/01/3210';
    ZdobodzIWyswietlOrgan(3262);
    osoba_data_wydania_pj.value = '2004-10-05';
    osoba_pj_nr_blankietu.value = 'SA123456';
    pj_kat_b.checked = true;
    pojazd_nr_rejA.value = 'ZS12345';
    pojazd_rodzajA.value = 'osobowy';
    pojazd_markaA.value = 'Mercedes';
    miejsce_miejscowosc.value = 'Szczecin';
    miejsce_nazwa_ul.value = 'Cicha';
    miejsce_powiat.value = 'Szczecin';
    miejsce_gmina.value = 'Szczecin';
    wynik_nr_mandat.value = 'BC1234567';
    wynik_kwota.value = 500;
}
// Tymczasowa funkcjonalość wypełniania danych











































// Funkcjonalność pokazywania i zamykania diva na całą stronę z artKW
var kwGenBox = document.getElementById('kwGenBox');
function genPokazWyswietl(poz) {
    // Funkcjonalność wypełniająca tabelę
    var tabelaPoz = [poz.opis, poz.artKw, poz.artPrd, poz.kwota, poz.punkty, poz.kod];
    var tabelaDiv = document.getElementsByClassName('genKwTabelaTd');
    for (var i = 0; i < tabelaDiv.length; i++) {
        tabelaDiv[i].innerHTML = tabelaPoz[i];
    };
    kwGenBox.style.display = "block";
    document.documentElement.style.overflow = 'hidden';
}
document.getElementById('genBoxExit').addEventListener('click', function () {
    document.documentElement.style.overflow = 'auto';
    kwGenBox.style.display = "none";
}, false);
// Koniec funkcjonalności zamykającej i otrierającej divy z Tabelą
// funkcja tworząca div KW (w pryszłości można dodać podoby kod dla transportu)
function stworzKw(obiekt, i) {
    idWykroczenia = "idKw_" + i; // dodać id wykroczenia
    nowyElement = document.createElement('div');
    nowyElement.setAttribute('class', 'genfDiv border light');
    divOpis = document.createElement('div');
    divOpis.setAttribute('class', 'genfsrodek')
    divOpis.innerHTML = obiekt.opis;
    // Przyciski
    divMenu = document.createElement('div');
    btn_wyswietl = document.createElement('div');
    btn_wyswietl.setAttribute('class', 'btn_gen border light');
    btn_wyswietl.innerHTML = 'Pokaż';
    divMenu.appendChild(btn_wyswietl);
    btn_usun = document.createElement('div');
    btn_usun.setAttribute('class', 'btn_gen border light');
    btn_usun.innerHTML = 'Usuń';
    //Funkcjonalność przycisków
    btn_wyswietl.addEventListener('click', function () {
        genPokazWyswietl(obiekt);
    }, true);
    btn_usun.addEventListener('click', function () {
        var tab = pobierzTabele('generatorKwIn');
        for (var i = 0; i < tab.length; i++) {
            if (tab[i].pozycja == obiekt.pozycja) {
                tab.splice(i, 1);
            }
        }
        zapiszTabele(tab, 'generatorKwIn');
        wyswietlKwAuto();
    }, true);
    nowyElement.appendChild(divOpis);
    divMenu.appendChild(btn_usun);
    nowyElement.appendChild(divMenu);
    return nowyElement;
};
// funkcja autowypełniania nagłówka strony
function wyswietlKwAuto() {
    generatorAuto.innerHTML = "";
    var tab = pobierzTabele('generatorKwIn');
    if (tab != null) {
        for (var i = 0; i < tab.length; i++) {
            generatorAuto.appendChild(new stworzKw(tab[i], i));
        }
    } else {
        tab = [];
    }
};
// Koniec tworzenia divów KW w nagłówku


















// FUNKCJONALNOSC ZAPISUJĄCA WARTOSCI DO SESIONSTORAGE
// funkcja zwracająca wszystkie edytowalne elementy
function wszystkiEdytowalne() {
    var wszystko = [];
    var inputy = document.getElementsByTagName('input');
    var select = document.getElementsByTagName('select');
    for (var i = 0; i < inputy.length; i++) {
        wszystko.push(inputy[i]);
    }
    for (var i = 0; i < select.length; i++) {
        wszystko.push(select[i]);
    }
    return wszystko;
}
// dodanie zdarzenie do wszystkich pul
function wszystkiEdytowalneAddEvent() {
    var wszystkiePola = wszystkiEdytowalne();
    for (var i = 0; i < wszystkiePola.length; i++) {
        wszystkiePola[i].addEventListener('input', zapiszDane, false);
        wszystkiePola[i].addEventListener('blur', function () {
            zapiszDane();
            pokarzBtnDlaMrd();
        }, false);
    }
}
// zapisywanie danych z form do session
function zapiszDane() {
    var obiekt = pobierzTabele('generatorDane');
    obiekt.osoba.imie = osoba_imie.value;
    obiekt.osoba.nazwisko = osoba_nazwisko.value;
    obiekt.osoba.drugieImie = osoba_drugie_imie.value;
    obiekt.osoba.obywatelstwo = osoba_obywatelstwo.value;
    obiekt.osoba.pesel = osoba_pesel.value;
    obiekt.osoba.dataUrodzenia = osoba_data_ur.value;
    obiekt.osoba.plec = osoba_plec.value;
    obiekt.osoba.imieOjca = osoba_imie_ojca.value;
    obiekt.osoba.imieMatki = osoba_imie_matki.value;
    obiekt.osoba.nazwiskoRodoweMatki = osoba_nazwisko_matki.value;
    obiekt.zam.kraj = osoba_kraj.value;
    if (osoba_kraj.value == 'Polska') {
        obiekt.zam.kodPocztowy = osoba_kod_pocztowy.value;
        obiekt.zam.woj = osoba_wojewodstwo.value;
    } else {
        obiekt.zam.kodPocztowy = osoba_kod_pocztowy_zag.value;
        obiekt.zam.woj = osoba_wojewodstwo_zag.value;
    }
    obiekt.zam.miejscowosc = osoba_miejscowosc.value;
    obiekt.zam.ulica = osoba_ulica.value;
    obiekt.zam.nrDomu = osoba_nr_domu.value;
    obiekt.zam.pow = osoba_powiat.value;
    obiekt.zam.gmina = osoba_gmina.value;
    obiekt.dokument.typ = osoba_dowod.value;
    obiekt.dokument.nrDow = osoba_nr_dokumentu.value;
    if (osoba_dowod_jest.checked) obiekt.dokument.czyMialDowod = true;
    if (osoba_dowod_brak.checked) obiekt.dokument.czyMialDowod = false;
    obiekt.pj.uprawnienia = osoba_czy_posiada_pj.value;
    obiekt.pj.nrPj = osoba_nr_pj.value;
    if (osoba_pj_jest.checked) obiekt.pj.czyMialPjPrzySobie = true;
    if (osoba_pj_brak.checked) obiekt.pj.czyMialPjPrzySobie = false;
    if (osoba_pj_mial.checked) obiekt.pj.czyMialUprawnienia = true;
    if (osoba_pj_nie_mial.checked) obiekt.pj.czyMialUprawnienia = false;
    obiekt.pj.dataWydania = osoba_data_wydania_pj.value;
    obiekt.pj.dataPierwszychUprawnien = osoba_data_pierwszego_pj.value;
    obiekt.pj.balnkiet = osoba_pj_rodzaj.value;
    obiekt.pj.nrBlankietu = osoba_pj_nr_blankietu.value;
    obiekt.pj.organ = osoba_pj_organ_wydający.value;
    if (pj_kat_a.checked) obiekt.pj.kategoria.a = true;
    else obiekt.pj.kategoria.a = false;
    if (pj_kat_a1.checked) obiekt.pj.kategoria.a1 = true;
    else obiekt.pj.kategoria.a1 = false;
    if (pj_kat_b.checked) obiekt.pj.kategoria.b = true;
    else obiekt.pj.kategoria.b = false;
    if (pj_kat_b1.checked) obiekt.pj.kategoria.b1 = true;
    else obiekt.pj.kategoria.b1 = false;
    if (pj_kat_c.checked) obiekt.pj.kategoria.c = true;
    else obiekt.pj.kategoria.c = false;
    if (pj_kat_c1.checked) obiekt.pj.kategoria.c1 = true;
    else obiekt.pj.kategoria.c1 = false;
    if (pj_kat_d.checked) obiekt.pj.kategoria.d = true;
    else obiekt.pj.kategoria.d = false;
    if (pj_kat_d1.checked) obiekt.pj.kategoria.d1 = true;
    else obiekt.pj.kategoria.d1 = false;
    if (pj_kat_t.checked) obiekt.pj.kategoria.t = true;
    else obiekt.pj.kategoria.t = false;
    obiekt.pj.kategoria.katDodatkowa = pj_kat_select.value;
    obiekt.pojazd.czyZarejestrowany = pojazd_czy_zarejestrowanyA.value;
    obiekt.pojazd.krajRejestracji = pojazd_kraj_rejA.value;
    obiekt.pojazd.nrVin = pojazd_nr_vinA.value;
    obiekt.pojazd.nrRej = pojazd_nr_rejA.value;
    obiekt.pojazd.rodzaj = pojazd_rodzajA.value;
    obiekt.pojazd.marka = pojazd_markaA.value;
    obiekt.pojazd.czyZestaw = !spanPrzyczepaNaczepa.ukryte;
    obiekt.pojazd.przyczepaNaczepa.czyZarejestrowany = pojazd_czy_zarejestrowanyB.value;
    obiekt.pojazd.przyczepaNaczepa.krajRejestracji = pojazd_kraj_rejB.value;
    obiekt.pojazd.przyczepaNaczepa.nrVin = pojazd_nr_vinB.value;
    obiekt.pojazd.przyczepaNaczepa.nrRej = pojazd_nr_rejB.value;
    obiekt.pojazd.przyczepaNaczepa.rodzaj = pojazd_rodzajB.value;
    obiekt.pojazd.przyczepaNaczepa.marka = pojazd_markaB.value;
    obiekt.czas.data = miejsce_dzien.value;
    obiekt.czas.godz = miejsce_godziny_input.value;
    obiekt.czas.min = miejsce_minuty_input.value;
    obiekt.miejsce.rodzaj = miejsce_rodzaj.value;
    obiekt.miejsce.ulica = miejsce_nazwa_ul.value;
    obiekt.miejsce.nrDrogi = miejsce_nr_drogi.value;
    obiekt.miejsce.miejscowosc = miejsce_miejscowosc.value;
    if (miejsce_miejscowosc_w.checked) obiekt.miejsce.czyWMiejscowosci = true;
    if (miejsce_miejscowosc_obok.checked) obiekt.miejsce.czyWMiejscowosci = false;
    obiekt.miejsce.wojewodztwo = miejsce_wojewodstwo.value;
    obiekt.miejsce.powiat = miejsce_powiat.value;
    obiekt.miejsce.gmina = miejsce_gmina.value;
    obiekt.wynik.rodzaj = wynik_rodzaj.value;
    obiekt.wynik.mandatNr = wynik_nr_mandat.value;
    obiekt.wynik.kwota = wynik_kwota.value;
    obiekt.wynik.nrSprawy = wynik_nr_sprawy.value;
    zapiszTabele(obiekt, 'generatorDane');
}
function zazrzadznieDanymiSession() {
    var obiekt = pobierzTabele('generatorDane');
    if (obiekt == null) {
        obiekt = {
            "osoba": {
                "imie": "",
                "nazwisko": "",
                "drugieImie": "",
                "obywatelstwo": "",
                "pesel": "",
                "dataUrodzenia": "",
                "plec": "",
                "imieOjca": "",
                "imieMatki": "",
                "nazwiskoRodoweMatki": ""
            },
            "zam": {
                "kraj": "",
                "kodPocztowy": "",
                "miejscowosc": "",
                "ulica": "",
                "nrDomu": "",
                "woj": "",
                "pow": "",
                "gmina": ""
            },
            "dokument": {
                "typ": "",
                "nrDow": "",
                "czyMialDowod": ""
            },
            "pj": {
                "uprawnienia": "",
                "nrPj": "",
                "czyMialPjPrzySobie": "",
                "czyMialUprawnienia": "",
                "dataWydania": "",
                "dataPierwszychUprawnien": "",
                "balnkiet": "",
                "nrBlankietu": "",
                "organ": "",
                "kategoria": {
                    "a": false,
                    "a1": false,
                    "b": false,
                    "b1": false,
                    "c": false,
                    "c1": false,
                    "d": false,
                    "d1": false,
                    "t": false,
                    "katDodatkowa": ""
                }
            },
            "pojazd": {
                "czyZarejestrowany": "",
                "krajRejestracji": "",
                "nrVin": "",
                "nrRej": "",
                "rodzaj": "",
                "marka": "",
                "czyZestaw": false,
                "przyczepaNaczepa": {
                    "czyZarejestrowany": "",
                    "krajRejestracji": "",
                    "nrVin": "",
                    "nrRej": "",
                    "rodzaj": "",
                    "marka": "",
                }
            },
            "czas": {
                "data": "",
                "godz": "",
                "min": ""
            },
            "miejsce": {
                "rodzaj": "",
                "ulica": "",
                "nrDrogi": "",
                "miejscowosc": "",
                "czyWMiejscowosci": false,
                "wojewodztwo": "",
                "powiat": "",
                "gmina": ""
            },
            "wynik": {
                "rodzaj": "",
                "mandatNr": "",
                "kwota": "",
                "nrSprawy": "",
            }
        };
        zapiszTabele(obiekt, 'generatorDane');
        pobierzCzasDoPola();
        zapiszDane();
    } else {
        wypiszFormZSession(obiekt);
    }
};
function wypiszFormZSession(obiekt) {
    osoba_imie.value = obiekt.osoba.imie
    osoba_nazwisko.value = obiekt.osoba.nazwisko;
    osoba_drugie_imie.value = obiekt.osoba.drugieImie;
    osoba_obywatelstwo.value = obiekt.osoba.obywatelstwo;
    polaObywatelstwo();
    osoba_pesel.value = obiekt.osoba.pesel;
    osoba_data_ur.value = obiekt.osoba.dataUrodzenia;
    osoba_plec.value = obiekt.osoba.plec;
    osoba_imie_ojca.value = obiekt.osoba.imieOjca;
    osoba_imie_matki.value = obiekt.osoba.imieMatki;
    osoba_nazwisko_matki.value = obiekt.osoba.nazwiskoRodoweMatki;
    osoba_kraj.value = obiekt.zam.kraj;
    krajPola();
    osoba_kod_pocztowy.value = obiekt.zam.kodPocztowy;
    osoba_wojewodstwo.value = obiekt.zam.woj;
    osoba_kod_pocztowy_zag.value = obiekt.zam.kodPocztowy;
    osoba_wojewodstwo_zag.value = obiekt.zam.woj;
    osoba_miejscowosc.value = obiekt.zam.miejscowosc;
    osoba_ulica.value = obiekt.zam.ulica;
    osoba_nr_domu.value = obiekt.zam.nrDomu;
    osoba_powiat.value = obiekt.zam.pow;
    osoba_gmina.value = obiekt.zam.gmina;
    osoba_dowod.value = obiekt.dokument.typ;
    osoba_nr_dokumentu.value = obiekt.dokument.nrDow;
    if (obiekt.dokument.czyMialDowod == true) osoba_dowod_jest.checked = true;
    if (obiekt.dokument.czyMialDowod == false) osoba_dowod_brak.checked = true;
    osoba_czy_posiada_pj.value = obiekt.pj.uprawnienia;
    osobaPosiadaPola();
    osoba_nr_pj.value = obiekt.pj.nrPj;
    if (obiekt.pj.czyMialPjPrzySobie == true) osoba_pj_jest.checked = true;
    if (obiekt.pj.czyMialPjPrzySobie == false) osoba_pj_brak.checked = true;
    if (obiekt.pj.czyMialUprawnienia == true) osoba_pj_mial.checked = true;
    if (obiekt.pj.czyMialUprawnienia == false) osoba_pj_nie_mial.checked = true;
    osoba_data_wydania_pj.value = obiekt.pj.dataWydania;
    osoba_data_pierwszego_pj.value = obiekt.pj.dataPierwszychUprawnien;
    osoba_pj_rodzaj.value = obiekt.pj.balnkiet;
    osoba_pj_nr_blankietu.value = obiekt.pj.nrBlankietu;
    osoba_pj_organ_wydający.value = obiekt.pj.organ;
    if (obiekt.pj.kategoria.a) pj_kat_a.checked = true;
    else pj_kat_a.checked = false;
    if (obiekt.pj.kategoria.a1) pj_kat_a1.checked = true;
    else pj_kat_a1.checked = false;
    if (obiekt.pj.kategoria.b) pj_kat_b.checked = true;
    else pj_kat_b.checked = false;
    if (obiekt.pj.kategoria.b1) pj_kat_b1.checked = true;
    else pj_kat_b1.checked = false;
    if (obiekt.pj.kategoria.c) pj_kat_c.checked = true;
    else pj_kat_c.checked = false;
    if (obiekt.pj.kategoria.c1) pj_kat_c1.checked = true;
    else pj_kat_c1.checked = false;
    if (obiekt.pj.kategoria.d) pj_kat_d.checked = true;
    else pj_kat_d.checked = false;
    if (obiekt.pj.kategoria.d1) pj_kat_d1.checked = true;
    else pj_kat_d1.checked = false;
    if (obiekt.pj.kategoria.t) pj_kat_t.checked = true;
    else pj_kat_t.checked = false;
    pj_kat_select.value = obiekt.pj.kategoria.katDodatkowa;
    pojazd_czy_zarejestrowanyA.value = obiekt.pojazd.czyZarejestrowany;
    pojazd_kraj_rejA.value = obiekt.pojazd.krajRejestracji;
    pojazd_nr_vinA.value = obiekt.pojazd.nrVin;
    pojazd_nr_rejA.value = obiekt.pojazd.nrRej;
    pojazd_rodzajA.value = obiekt.pojazd.rodzaj;
    pojazd_markaA.value = obiekt.pojazd.marka;
    spanPrzyczepaNaczepa.ukryte = obiekt.pojazd.czyZestaw;
    pojazd_czy_zarejestrowanyB.value = obiekt.pojazd.przyczepaNaczepa.czyZarejestrowany;
    pojazd_kraj_rejB.value = obiekt.pojazd.przyczepaNaczepa.krajRejestracji;
    pojazd_nr_vinB.value = obiekt.pojazd.przyczepaNaczepa.nrVin;
    pojazd_nr_rejB.value = obiekt.pojazd.przyczepaNaczepa.nrRej;
    pojazd_rodzajB.value = obiekt.pojazd.przyczepaNaczepa.rodzaj;
    pojazd_markaB.value = obiekt.pojazd.przyczepaNaczepa.marka;
    miejsce_dzien.value = obiekt.czas.data;
    miejsce_godziny_input.value = obiekt.czas.godz;
    miejsce_minuty_input.value = obiekt.czas.min;
    ustawDateGranDlaAll(obiekt.czas.data);
    miejsce_rodzaj.value = obiekt.miejsce.rodzaj;
    miejsce_nazwa_ul.value = obiekt.miejsce.ulica;
    miejsce_nr_drogi.value = obiekt.miejsce.nrDrogi;
    miejsce_miejscowosc.value = obiekt.miejsce.miejscowosc;
    if (obiekt.miejsce.czyWMiejscowosci == true) miejsce_miejscowosc_w.checked = true;
    if (obiekt.miejsce.czyWMiejscowosci == false) miejsce_miejscowosc_obok.checked = true;
    miejsce_wojewodstwo.value = obiekt.miejsce.wojewodztwo;
    miejsce_powiat.value = obiekt.miejsce.powiat;
    miejsce_gmina.value = obiekt.miejsce.gmina;
    miejscePola();
    wynik_rodzaj.value = obiekt.wynik.rodzaj;
    wynik_nr_mandat.value = obiekt.wynik.mandatNr;
    wynik_kwota.value = obiekt.wynik.kwota;
    wynik_nr_sprawy.value = obiekt.wynik.nrSprawy;
    wynikPola();
    wysrodkujSelecty();
    pojazdCzyZestaw();
};
// KONEC FUNKCJONALNOŚĆ DZIAŁAJĄCEJ Z SESSION DLA DANYCH
// FUNKCJONALNOŚĆ ONLOAD
window.onload = function () {
    wysrodkujDaty(); // Firefox wyśrodkowanie daty
    wysrodkujSelecty(); // Wyśrodkowywanie selektów
    zazrzadznieDanymiSession(); //tworzenie nowego obiektu i zapisywanie go do session storage
    wszystkiEdytowalneAddEvent(); // addevent dla wszystkich input
    fkLocalStorage(); // onload funkcjonariusz LocalStorage

    // niapisać funkcje sprawdzającą ile kw przesyła wykroczęń i ograniczyć liczbę do 3
    wyswietlKwAuto();
    pobierzWoj(); // Wgrywanie list z województwa
}