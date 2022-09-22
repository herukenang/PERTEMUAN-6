class Data {
    constructor(){
        if(this.constructor === Data) throw new Error({message: 'harus lebih terperinci bola yang mau diambil'});
    }
    data_nama(){
        console.log('Nama:');
    }
    data_nama_lengkap(){
        console.log('Nama Lengkap:');
    }
    data_alamat(){
        console.log('Alamat:');
    }
    data_no_hp(){
        console.log('No Hp:');
    }
    data_email(){
        console.log('Email:');
    }
}


class nama extends Data {
       fun(){
        console.log("-Heru");
    }
}

class nama_lengkap extends Data {
    fun(){
     console.log("-Heru Kenang");
 }

}

class alamat extends Data {
    fun(){
     console.log("-Karawang");
 }
 
}

class no_hp extends Data {
    fun(){
     console.log("-083153262231");
 }
 
}

class email extends Data {
    fun(){
     console.log("-heruxke@gmail.com");
 }
 
}

var id = new nama()
id.data_nama();
id.fun();

var id = new nama_lengkap()
id.data_nama_lengkap();
id.fun();

var id = new alamat()
id.data_alamat();
id.fun();

var id = new no_hp()
id.data_no_hp();
id.fun();

var id = new email()
id.data_email();
id.fun();
