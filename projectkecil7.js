// ----> Function dengan Return Value <---- //

// Contoh Benar Pake Return

function totalHargaOli(jumlahBotol){
    return( jumlahBotol * 50000)
} 
let tagihan = totalHargaOli(3)
console.log(`Total yang harus dibayar: ${tagihan}`);

// Contoh Salah Pake Console.log

function hitungHarga(jumlah) {
    console.log(jumlah * 10000);
}
// Hasilnya muncul di layar, tapi variabel 'bayar' di bawah ini bakal KOSONG (undefined)
let bayar = hitungHarga(2);
console.log(`Total yang harus dibayar: ${bayar}`);