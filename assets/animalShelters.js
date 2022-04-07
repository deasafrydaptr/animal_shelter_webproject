let donate = document.getElementsByClassName('money');
for(let i = 0; i < donate.length; i++) {

    donate[i].addEventListener('click', function(){
        let metode = prompt("Pilih metode pembayaran (BNI/BRI/MANDIRI/DANA/GOJEK) : ")
        if (metode === "DANA"){
            let contact = prompt("Masukan nomor telepon anda : ")
            if (contact != null){
                confirm("Donasi anda sebesar "+this.value+" melalui "+metode+" harap segera lakukan pembayaran dengan KODE: 004"+contact+", agar proses donasi dapat terselesaikan. Terima kasih.");            
            }else {
                alert("Proses donasi gagal. Harap isi nomor telepon dengan benar.")
            }
        }else if (metode === "BNI"){
            let contact = prompt("Masukan nomor telepon anda : ")
            if (contact != null){
                confirm("Donasi anda sebesar "+this.value+" melalui "+metode+" harap segera lakukan pembayaran dengan KODE: 004"+contact+", agar proses donasi dapat terselesaikan. Terima kasih.");            
            }else {
                alert("Proses donasi gagal. Harap isi nomor telepon dengan benar.")
            }
        }else if (metode === "MANDIRI"){
            let contact = prompt("Masukan nomor telepon anda : ")
            if (contact != null){
                confirm("Donasi anda sebesar "+this.value+" melalui "+metode+" harap segera lakukan pembayaran dengan KODE: 004"+contact+", agar proses donasi dapat terselesaikan. Terima kasih.");            
            }
            else {
                alert("Proses donasi gagal. Harap isi nomor telepon dengan benar.")
            }
        }else if (metode === "BRI"){
            let contact = prompt("Masukan nomor telepon anda : ")
            if (contact != null){
                confirm("Donasi anda sebesar "+this.value+" melalui "+metode+" harap segera lakukan pembayaran dengan KODE: 004"+contact+", agar proses donasi dapat terselesaikan. Terima kasih.");            
            }else {
                alert("Proses donasi gagal. Harap isi nomor telepon dengan benar.")
            }
        }else if (metode === "GOJEK"){
            let contact = prompt("Masukan nomor telepon anda : ")
            if (contact != null){
                confirm("Donasi anda sebesar "+this.value+" melalui "+metode+" harap segera lakukan pembayaran dengan KODE: 004"+contact+", agar proses donasi dapat terselesaikan. Terima kasih.");            
            }else {
                alert("Proses donasi gagal. Harap isi nomor telepon dengan benar.")
            }
        }
        else {
            alert("Tidak valid! Input anda salah. Harap masukan metode pembayaran yang tersedia dengan sesuai.")
        }
    }, false);
}


let adoption = document.getElementsByClassName('adopt');
for(let i = 0; i < adoption.length; i++) {
    adoption[i].addEventListener('click', function(){
        let adoptConfirm = confirm ("Anda yakin ingin mengadopsi "+this.value+" ?")
        if (adoptConfirm == true){
            let name = prompt("Masukan nama anda : ")
            if (name != null){
                let email = prompt("Masukan email anda : ")
                if(email != null){
                    alert("Harap periksa email anda untuk melanjutkan prosedur adopsi selanjutnya.")
                }else{
                    alert("Proses adopsi gagal/batal, harap isi data dengan benar.")
                }            
            }else {
                alert("Permohonan adopsi gagal/batal.")
            }
        }else {
            alert("Proses adopsi gagal/batal.")
        }
    }, false);
}
