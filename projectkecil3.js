// ----> Operator + If/Else <---- //

function cekDiskonBengkel(beliOli, totalBelanja, punyaMember) {
    // 1. Definisikan jalur dengan perbandingan yang jelas
    const jalurBelanja = beliOli && totalBelanja > 100000;
    const jalurEvent = beliOli || punyaMember;
    const jalurLoyal = totalBelanja > 500000 || punyaMember; // Pakai angka pembanding!

    let skor = 0; // Khusus buat hitung angka

    if (jalurBelanja) skor++;
    if (jalurEvent) skor++;
    if (jalurLoyal) skor++;

    // 2. Gunakan variabel berbeda untuk pesan
    let hasilPesan = "";
    if (skor >= 3) {
        hasilPesan = "Selamat! Anda berhak mendapatkan diskon.";
    } else {
        hasilPesan = "Maaf, harga normal.";
    }

    console.log(hasilPesan);
}

cekDiskonBengkel(false, 20000, true);

cekDiskonBengkel(true, 150000, true);

cekDiskonBengkel(false, 1000000, false);

function cekBaut(jumlahBaut) {
    for (let i = 1; i <= jumlahBaut; i++) {
        if (i === 3) {
            console.log("Baut nomor 3 RUSAK/SLEK!")
        }
        else {
            console.log(`Baut nomor ${i} sudah kencang`);
        };

    }
}
cekBaut(10)