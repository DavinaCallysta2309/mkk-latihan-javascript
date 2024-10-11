// soal 4 percabangan menengah
let x = prompt('masukan angka pertama');
let y = prompt('masukan angka kedua');
let z = prompt('masukan angka ketiga');

if (x > y && x > z) {
    alert(`${x} adalah angka terbesar`);
}
else if(x < y && z < y){
    alert(`${y} adalah angka terbesar`)
}
else if(x < z && y < z){
    alert(`${z} adalah angka terbesar`);
} else {
    alert(`angka tersebut sama besar`);
}
