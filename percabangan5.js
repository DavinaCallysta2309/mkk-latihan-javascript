// percabangan
let x = prompt('masukan angka');
let y = prompt('masukan angka berikutnya');


x = Number(x);
y = Number(y);

if (x >= y && x > 0) {
    if (x % y == 0) {
        alert(`${x} merupakan kelipatan ${y}`);
    } else {
        alert(`${x} bukan kelipatan ${y}`);
    }
} else {
    alert('Pastikan x lebih besar atau sama dengan y dan x lebih besar dari 0');
}
