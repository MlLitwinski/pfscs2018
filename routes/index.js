//pobranie pliku jason do zmiennej
var techJson = require('../data/technology.json');
var calcJson = require('../data/kalkulator.json');
//pobieranie tabeli z wcześniej pobranej zmiennej
var kalkulator = calcJson.kalkulator; // przekazuje pozycje kalukatra
var stawkiLata = calcJson.stawki; //przekazuje aplikacji lata stawek
var kodyKreskowe = calcJson.kodyKreskowe; //przekazywanie kodów kreskowych
// przesyłanie do templatóów najnowszych stawek
var stawkiJson = require('../data/stawki' + stawkiLata[0] + '.json');
var stawki = stawkiJson.stawki;
//Start
exports.home = function (req, res) {
    // przekazywanie zmiennych do ścieżki
    var tech = techJson.techchnology;
    res.render("home", {
        tech: tech,
    });
};
//Kalkulator
exports.kalkulator = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "intro",
        kalkulator: kalkulator,
    });
};
exports.papierosy = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "papierosy",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
        kodyKreskowe: kodyKreskowe,
    });
};
exports.tyton = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "tyton",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
        kodyKreskowe: kodyKreskowe,
    });
};
exports.susz = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "susz",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
        kodyKreskowe: kodyKreskowe,
    });
};
exports.spirytus = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "spirytus",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
        kodyKreskowe: kodyKreskowe,
    });
};
exports.wodka = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "wodka",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
        kodyKreskowe: kodyKreskowe,
    });
};
// Zliczanie funkcjonlalności Add
exports.zlicz = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "zlicz",
        kalkulator: kalkulator
    });
};
// Pojazdy
exports.pojazdy = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "pojazdy",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
    });
};
// Pojazdy Komis
exports.pojazdykomis = function (req, res) {
    res.render("kalkulator", {
        kalkulator_typ: "pojazdykomis",
        kalkulator: kalkulator,
        stawkiLata: stawkiLata,
        stawki: stawki,
    });
};
// wysyłanie jeson z nrvin GENERATOR i KOMIS
exports.nrvin = function (req, res) {
    var nrVinJson = require('../data/vin.json');
    res.setHeader('Content-Type', 'application/json');
    res.json(nrVinJson);
};
// Generator
exports.generator = function (req, res) {
    var kodyKas = require('../data/kodyKas.json');
    var nrVinJson = require('../data/vin.json');
    var marki = [];
    for (var i = 0; i < nrVinJson.length; i++) {
        if (marki.indexOf(nrVinJson[i].marka) < 0) {
            marki.push(nrVinJson[i].marka);
        }
    }
    marki = marki.sort();
    res.render("generator", {
        marki: marki,
        kodyKas: kodyKas
    });
};
// kody kas
exports.kodyKas = function (req, res) {
    var kodyKas = require('../data/kodyKas.json');
    // To być może trzeba będzie zkasować









};
// kody pocztowe
var kodyPocztoweJson = require('../data/kodyP.json');
exports.kodyP = function (req, res) {
    var kod = req.params.kod;
    if (kod != null) {
        if (!isNaN(kod[0])) {
            // Gdy zapytanie z kodem pocztowym
            var zap = kod[0];
            var tab = [];
            function znajdzKodP(tablica) {
                return tablica.kod === kod;
            }
            if (zap == 0) tab = kodyPocztoweJson.A;
            if (zap == 1) tab = kodyPocztoweJson.B;
            if (zap == 2) tab = kodyPocztoweJson.C;
            if (zap == 3) tab = kodyPocztoweJson.D;
            if (zap == 4) tab = kodyPocztoweJson.E;
            if (zap == 5) tab = kodyPocztoweJson.F;
            if (zap == 6) tab = kodyPocztoweJson.G;
            if (zap == 7) tab = kodyPocztoweJson.H;
            if (zap == 8) tab = kodyPocztoweJson.I;
            if (zap == 9) tab = kodyPocztoweJson.J;
            var odp = tab.filter(znajdzKodP);
        } else {
            // Gdy zapytanie z województwem
            function znajdzWoj(tablica) {
                return tablica.woj === kod;
            }
            if (kod == 'dolnośląskie') {
                var tab = kodyPocztoweJson.F.filter(znajdzWoj);
                var odp = tab.concat(kodyPocztoweJson.G.filter(znajdzWoj));
            }
            if (kod == 'kujawsko-pomorskie') {
                var odp = kodyPocztoweJson.I.filter(znajdzWoj);
            }
            if (kod == 'lubelskie') {
                var tab = kodyPocztoweJson.A.filter(znajdzWoj);
                var odp = tab.concat(kodyPocztoweJson.C.filter(znajdzWoj));
            }
            if (kod == 'lubuskie') {
                var odp = kodyPocztoweJson.G.filter(znajdzWoj);
            }
            if (kod == 'łódzkie') {
                var tab = kodyPocztoweJson.C.filter(znajdzWoj);
                tab = tab.concat(kodyPocztoweJson.I.filter(znajdzWoj));
                var odp = tab.concat(kodyPocztoweJson.J.filter(znajdzWoj));
            }
            if (kod == 'małopolskie' || kod == 'opolskie' || kod == 'podkarpackie') {
                var odp = kodyPocztoweJson.D.filter(znajdzWoj);
            }
            if (kod == 'mazowieckie') {
                var tab = kodyPocztoweJson.A.filter(znajdzWoj);
                tab = tab.concat(kodyPocztoweJson.C.filter(znajdzWoj));
                tab = tab.concat(kodyPocztoweJson.I.filter(znajdzWoj));
                var odp = tab.concat(kodyPocztoweJson.J.filter(znajdzWoj));
            }
            if (kod == 'opolskie') {
                var odp = kodyPocztoweJson.E.filter(znajdzWoj);
            }
            if (kod == 'podlaskie') {
                var odp = kodyPocztoweJson.B.filter(znajdzWoj);
            }
            if (kod == 'pomorskie') {
                var tab = kodyPocztoweJson.H.filter(znajdzWoj);
                var odp = tab.concat(kodyPocztoweJson.I.filter(znajdzWoj));
            }
            if (kod == 'śląskie') {
                var tab = kodyPocztoweJson.D.filter(znajdzWoj);
                var odp = tab.concat(kodyPocztoweJson.E.filter(znajdzWoj));
            }
            if (kod == 'świętokrzyskie') {
                var odp = kodyPocztoweJson.C.filter(znajdzWoj);
            }
            if (kod == 'warmińsko-mazurskie') {
                var tab = kodyPocztoweJson.B.filter(znajdzWoj);
                var odp = tab.concat(kodyPocztoweJson.I.filter(znajdzWoj));
            }
            if (kod == 'wielkopolskie') {
                var tab = kodyPocztoweJson.G.filter(znajdzWoj);
                tab = tab.concat(kodyPocztoweJson.H.filter(znajdzWoj));
                var odp = tab.concat(kodyPocztoweJson.I.filter(znajdzWoj));
            }
            if (kod == 'zachodniopomorskie') {
                var odp = kodyPocztoweJson.H.filter(znajdzWoj);
            }
        }
    } else {
        var odp = [];
    }
    res.setHeader('Content-Type', 'application/json');
    res.json(odp);
}
// kody terytorialne
exports.kodyT = function (req, res) {
    var kodyTerytorialneJson = require('../data/kodyT.json');
    var zap = req.params.kod;
    var odp = [];
    if (zap != null) {
        if (!isNaN(zap)) {
            function znajdzKodT(tablica) {
                return tablica.kod === zap;
            }
            odp = kodyTerytorialneJson.find(znajdzKodT);
            if (odp == null) {
                odp = 'brak';
            } else {
                odp = odp.organ;
            }
        }
        // Część odpowiadająca za odesłanie jednostki policji
        if (isNaN(zap)) {
            function znajdzKodJ(tablica) {
                return tablica.pow === zap;
            }
            odp = kodyTerytorialneJson.filter(znajdzKodJ);
            if (odp.length == 1) {
                odp = odp[0].jP;
            } else {
                if (odp == null || req.params.woj == null) {
                    odp = 'brak';
                } else {
                    function znajdzPoWoj(tablica) {
                        return tablica.woj === req.params.woj;
                    }
                    odp = odp.find(znajdzPoWoj);
                    if (odp == null) odp = 'brak';
                    else odp = odp.jP;      
                }
            }
        }
        res.setHeader('Content-Type', 'application/json');
        res.json(odp);
    }
}
// wysyłanie jason z stawkami
exports.wysylanieStawek = function (req, res) {
    var stawkiOdpJson = require('../data/stawki' + req.params.rok + '.json');
    res.setHeader('Content-Type', 'application/json');
    res.json(stawkiOdpJson);
    /*
        Napisać tak rok pobierał odpowiednią część jednego pliku 
    */
};
// Koniec Kalkulator
//Sent
exports.sent = function (req, res) {
    var sentJson = require('../data/sent.json');
    var sent = sentJson;
    res.render("sent", {
        sent: sent
    });
};
//Kw-kks
exports.kw_kks = function (req, res) {
    res.render("kwkks");
};
exports.kw = function (req, res) {
    var kwJson = require('../data/kw.json');
    var kw = kwJson;
    res.render("partials/kw", {
        kw: kw
    });
}
// Przesyłanie minimalnej pęsji do kks
exports.kks = function (req, res) {
    var kksJson = require('../data/stawki2018.json');
    var kksStawka = kksJson.stawki.min_pensja;
    res.render("partials/kks", {
        min_pensja: kksStawka
    });
}
//Transport
exports.transport = function (req, res) {
    res.render("construction");
};
// Protokoły edytowalne
exports.protar = function (req, res) {
    res.render("edit/protar", {
        kodyKreskowe: kodyKreskowe
    })
}
exports.proogl = function (req, res) {
    res.render("edit/proogl", {
        kodyKreskowe: kodyKreskowe
    })
}
exports.kalkspis = function (req, res) {
    res.render("edit/kalkspis", {
        kodyKreskowe: kodyKreskowe
    })
}
exports.mrd = function (req, res) {
    res.render("edit/mrd");
}
// Koniec edytowalnych
//notFound
exports.notFound = function (req, res) {
    res.send("To nie jest strona, której szukacie");
};