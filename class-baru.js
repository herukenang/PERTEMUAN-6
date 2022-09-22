class Bola {
    constructor(){
        if(this.constructor === Bola) throw new Error({message: 'harus lebih terperinci bola yang mau diambil'});
    }
    bola_basket(){
        console.log('ini bola basket');
    }
    bola_sepak(){
        console.log('ini bola sepak');
    }
    bola_kasti(){
        console.log('ini bola kasti');
    }
    bola_dunia(){
        console.log('ini bola dunia');
    }
   async hitung(s) {
        var hasil = s.angka1 + s.angka2;
        console.log(hasil);
    }

}

class Bola_kasti extends Bola {
    fun(){
        console.log("ini data");
    }
}

class Bola_basket extends Bola {
       fun(){
        console.log("ini data");
    }
}

class Bola_dunia extends Bola {
    fun(){
     console.log("ini data");
 }
}

class Bola_sepak extends Bola {}
class Hitung extends Bola {}

var basket = new Bola_basket()
basket.bola_basket();
basket.fun();
var hitung = new Hitung()
var s = {"angka1" : 1, "angka2" : 5} 
hitung.hitung(s);

var kasti = new Bola_kasti()
kasti.bola_kasti();
kasti.fun();
var hitung = new Hitung()
var s = {"angka1" : 1, "angka2" : 5} 
hitung.hitung(s);


var dunia = new Bola_dunia()
dunia.bola_dunia();
dunia.fun();
var hitung = new Hitung()
var s = {"angka1" : 1, "angka2" : 5} 
hitung.hitung(s);