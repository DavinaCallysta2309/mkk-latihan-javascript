// soal no 3 perulangan dasar
let batasAwal = parseInt(prompt("Masukkan batas awal: "));
let batasAkhir = parseInt(prompt("Masukkan batas akhir: "));

for (let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }
}

