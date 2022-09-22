class Hero { //ini class prarent / induk
 constructor() {
    if(this.constructor == Hero) throw new Error({message: 'error kalo manggil indukannya aja'})
 }
    hari() { // dan ini function didalam class Hero
        console.log("ini isi hari");
        var i = 'kuku';
        this.heri(i);
    }
    
    hari1() { // dan ini function didalam class Hero
        console.log("heru");
        var i = 'kenang';
        this.heri1(i);
    }
    
    heri(i) {
        console.log(i);
        // console.log("ini isi hari");
    }
    
    heri1(i) {
        console.log(i);
        // console.log("ini isi hari");
    }
}

class AnakHero extends Hero {
}

// var  panggil_hari = new Hero();
// panggil_hari.hari();
var panggil_anak = new AnakHero();
panggil_anak.hari();

var panggil_bapak = new AnakHero();
panggil_bapak.hari1();