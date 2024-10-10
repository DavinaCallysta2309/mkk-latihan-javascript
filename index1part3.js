// membuat menu luas lingkaran
function showMenu() {
    let pilihan;

    do {
        // Menampilkan menu pilihan
        pilihan = prompt(
            "MENU UTAMA\n" +
            "[1] Luas Segitiga\n" +
            "[2] Luas Persegi Panjang\n" +
            "[3] Exit\n" +
            "Masukkan pilihan No.:"
        );

        switch (pilihan) {
            case '1':
                // Menghitung luas segitiga
                const alas = parseFloat(prompt("Masukkan alas segitiga:"));
                const tinggi = parseFloat(prompt("Masukkan tinggi segitiga:"));
                const luasSegitiga = 0.5 * alas * tinggi;
                alert("Luas segitiga adalah: " + luasSegitiga);
                break;
            case '2':
                // Menghitung luas persegi panjang
                const panjang = parseFloat(prompt("Masukkan panjang persegi panjang:"));
                const lebar = parseFloat(prompt("Masukkan lebar persegi panjang:"));
                const luasPersegiPanjang = panjang * lebar;
                alert("Luas persegi panjang adalah: " + luasPersegiPanjang);
                break;
            case '3':
                alert("tengkyuu guys.");
                break;
            default:
                alert("Pilihan tidak valid. Silakan pilih lagi.");
                break;
        }
    } while (pilihan !== '3');
}

// Memanggil fungsi untuk menampilkan menu
showMenu();
