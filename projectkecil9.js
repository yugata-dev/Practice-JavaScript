
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

// Tantangan Mandor: "Audit Harga Promo"
// Tiba-tiba bos bengkel bilang: "Yugata, tolong dong cek layanan apa saja yang harganya di bawah 100 ribu! Kasih label 'PROMO'."

// Tugasmu:

// Buat let menuLayanan seperti contoh di atas (boleh tambah menu lain kalau mau).

// Bikin for loop buat menyisir semua menunya.

// Di dalam loop, pasang sensor if.

// Logikanya: * Jika menuLayanan[i].harga kurang dari (<) 100000, tampilkan: [PROMO] [Nama Layanan] - Rp[Harga].

// Jika tidak, tampilkan normal: [Nama Layanan] - Rp[Harga].

