
let gudang = ["Ban", "Oli", "Busi", "Kampas"]

for (let i = 0; i < gudang.length; i++) {
    console.log(`Barang di rak ini adalah: ${gudang[i]}`);
};

//// ------------------------------------------------------------ ////

let rak = ["Ban", "Baut", "Oli", "Baut", "Busi"];

let totalBaut = 0; // 1. Papan skor di luar, mulai dari 0

for (let i = 0; i < rak.length; i++) { // 2. "i" adalah jari yang menunjuk nomor laci
    if (rak[i] === "Baut") { // 3. Cek barang di laci nomor i
        totalBaut++; // 4. Kalau ketemu, papan skor tambah 1
    }
}

// 5. Setelah semua laci dicek, baru lapor hasil akhirnya
console.log(`Total baut yang ditemukan: ${totalBaut}`);

// ---- LOGIKA I++ ---- //


let rakBan = ["Bagus", "Botak", "Bagus", "Bagus", "Botak"]
let jumlahBotak = 0;

for (let a = 0; a < rakBan.length; a++) {
    // Sensor cuma ngecek satu kondisi: "Botak" atau bukan?
    if (rakBan[a] === "Botak") {
        jumlahBotak++; // Skor nambah
        console.log(`Ban nomor ${a} BOTAK! Ganti baru.`); // Laporan 1
    } else {
        console.log(`Ban nomor ${a} masih bagus, aman!`); // Laporan 2
    }
}

// Laporan 3 (Hasil akhir di luar loop)
console.log(`Total ban rusak: ${jumlahBotak}`);