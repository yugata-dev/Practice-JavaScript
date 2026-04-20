// ---- IF ELSE & LOOP ---- //

//Menggabungkan Loop dan Kondisional//

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