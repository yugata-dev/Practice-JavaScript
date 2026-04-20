
// ----> Materi 12: Array of Objects <---- //

let menuLayanan = [
    { nama: "Ganti Oli", harga: 50000, label: "PROMO" },  // Ini laci index 0
    { nama: "Ganti Ban", harga: 150000, }, // Ini laci index 1
    { nama: "Servis Rem", harga: 75000, label: "PROMO" }
    // Ini laci index 2
];
// Kita suruh si "i" jalan dari laci 0 sampai laci terakhir
for (let i = 0; i < menuLayanan.length; i++) {
    if (menuLayanan[i].harga <= 100000) {
        console.log(`${menuLayanan[i].nama} - Rp${menuLayanan[i].harga} ${menuLayanan[i].label}`);
    } else {
        console.log(`${menuLayanan[i].nama} - Rp${menuLayanan[i].harga}`);
    }
}

