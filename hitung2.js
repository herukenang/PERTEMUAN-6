class Hitung2 {
    constructor() {
        if(this.constructor === Hitung2) throw new Error({message:'ga bisa ngambil langsung'});
    }
   async hitungSegitiga(r) {
        console.log(r);
        var hasil = r.setengah * r.alas * r.tinggi;
        console.log(hasil);
        return hasil
    }
    hitungLingkaran(r) {
        console.log(r);
        var hasil = r.phi * r.jari2 * r.jari2;
        console.log(hasil);
        return hasil
    }
    hitungKubus(r) {
        var hasil =r.sisi*r.sisi*r.sisi;
        console.log(hasil);
        return hasil
    }
}

class HitungSegitiga extends Hitung2 {}
class HitungLingkaran extends Hitung2 {}
class HitungKubus extends Hitung2 {}

// HitungSegitiga()
var x = {"setengah" : 1.2, "alas": 10, "tinggi" : 20} 
var c = new HitungSegitiga()
c.hitungSegitiga(x);

// HitungLingkaran()
var l = {"jari2" : 10, "phi": 3.14}
var j = new HitungLingkaran()
j.hitungLingkaran(l)

// HitungKubus()
var k = { "sisi": 10}
var b = new HitungKubus();
b.hitungKubus(k)

// HitungKubus()
var k = { "sisi": 5}
var b = new HitungKubus();
b.hitungKubus(k)