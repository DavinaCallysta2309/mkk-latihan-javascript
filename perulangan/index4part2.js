// soal no 5 perulangan dasar
let batasAwal = parseInt(prompt("Masukkan batas awal: "));
let batasAkhir = parseInt(prompt("Masukkan batas akhir: "));
let count = 0;

for (let i = batasAwal; i <= batasAkhir; i++) {
    if (i % 2 !== 0) {
        count++;
    }
}

alert(count);