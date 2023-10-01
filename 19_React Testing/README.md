1. Testing adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa palikasi, test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.
2. manfaat testing

- mengurangi bug pada aplikasi
- merasa percaya diri jika harus mengubah suatu bagian pada aplikasi

3. kategori testing secara umum ada 2

- rendering component trees
- menjalankan palikasi lengkap

4. Tools yang digunakan dalam testing diantaranya

- Jest
- React Testing Library
- Install

5. RTL (React Testing Library) menawarkan fungsi mendapatkan element, element ini digunakan sebagai interaksi untuk pengguna contoh kategori testing

- labeltext
- PlaceholderText
- AltText
- Display Value

6. Untuk handle asynchronous digunakan ketika hendak mengetes fetch sebuah API, untuk kasus ini memerlukan sebuah mock untuk axios, selanjutnya kita membuat mock promise hasilnya ketika ressolve atau reject
7. Unutk mengetes sebuah custom hooks digunakan React Hooks Testing Libary, yg memberikan alat-alat untuk mengetes hooks tanpa merender suatu komponen.
