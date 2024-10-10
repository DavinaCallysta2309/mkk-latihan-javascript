// soal 4
let batasAwal = parseInt(prompt("Masukkan batas awal: "));
let batasAkhir = parseInt(prompt("Masukkan batas akhir: "));
for (let a = batasAwal; a <= batasAkhir; a++) {
    if (a % 5 == 0) {
       alert(a);
    }
}