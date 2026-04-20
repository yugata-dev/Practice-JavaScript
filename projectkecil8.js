// ----> Projek 10: Sistem Diskon Member Bengkel <---- //

function hitungServis(harga, statusMember) {
    if (statusMember === true) {
        return harga * 0.9; // Potong 10%
    } else {
        return (`${harga} Harga Normal`); // Kembalikan harga aslinya (nggak dipotong)
    }
}

let totalBayar = hitungServis(100000, true);
console.log(`Tagihan akhir: ${totalBayar}`);

// -------------------->  Object (KTP Barang)  <------------------------- //

let pelanggan = {
    nama: 'Budi',
    member: true,
    uang: 150000,
    biayaServis: 100000 // <--- Tambahkan data tagihannya di sini
};

function cekDompet(uangTersedia, totalTagihan) {
    if (uangTersedia >= totalTagihan) {
        return "Pembayaran Berhasil!";
    } else {
        // Kita modifikasi biar laporannya makin keren pakai nama
        return `Maaf ${pelanggan.nama}, uang kurang bos!`; 
    }
}

// Panggil fungsinya pakai data dari object
let statusTransaksi = cekDompet(pelanggan.uang, pelanggan.biayaServis);

console.log(statusTransaksi);


