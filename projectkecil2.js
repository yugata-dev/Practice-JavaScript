// ----> PARAMETER & VARIABEL & LOGIC <---- //

function laporanMontir(namaPelanggan, namaSparepart, apakahSelesai) {
    let status = "";
    if (apakahSelesai === true) {
      status = "BERES"
    }
    else {
      status = "MASIH PROSES"
    }

    console.log(`Laporan: Servis motor ${namaPelanggan} bagian ${namaSparepart} statusnya ${status}`)
}

laporanMontir('Yugata', "Karburator", false)
laporanMontir('Budi', "Karburator", true)