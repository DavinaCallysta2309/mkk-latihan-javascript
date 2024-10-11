// soal no 3 percabangan menengah
let uts = prompt('masukan nilai uts');
let uas = prompt('masukan nilai uas');
let tugas = prompt('masukan nilai tugas');

uts = parseFloat(uts);
uas= parseFloat(uas);
tugas = parseFloat(tugas);

let hasil = (uts * 0.35) + (uas * 0.45) + (tugas * 0.20);
let hasilakhir;

if (hasil >= 80 && hasil <=100){
    hasilakhir = "A+ MEMUASKAN";
} else if (hasil >= 70 && hasil <= 80){
    hasilakhir = "A SANGAT BAGUS";
} else if (hasil >=50 && hasil <= 70){
    hasilakhir = "B BAIK";
} else if (hasil >=40 && hasil <= 50){
    hasilakhir = "C CUKUP";
} else{
    hasilakhir = "D HARUS REMEDIAL";
}

alert('Nilai akhir: ' + hasil.toFixed(2));
alert('Hasil anda: ' + hasilakhir);