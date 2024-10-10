// soal 5
let x = prompt('masukan angka pertama');
let y = prompt('masukan angka kedua');

if(x > 0 && y > 0){
  alert('berada di kuadran 1');
} else if (x < 0 && y > 0){
    alert('berada di kuadran 2');
}else if(x < 0 && y < 0){
    alert('berada di kuaran 3');
}else if(x > 0 && y < 0){
    alert('berada di kuadran 4');
} else{
    alert('masukan angka yang valid');
}