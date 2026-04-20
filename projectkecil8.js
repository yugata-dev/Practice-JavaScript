// ----> Projek 10: Sistem Diskon Member Bengkel <---- //

function hitungServis(harga, statusMember) {
    if (statusMember === true) {
        return harga * 0.9; // Potong 10%
    } else {
        return (`${harga} Harga Normal`); // Kembalikan harga aslinya (nggak dipotong)
    }
}

let totalBayar = hitungServis(100000, false);
console.log(`Tagihan akhir: ${totalBayar}`); 