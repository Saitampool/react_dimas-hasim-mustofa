Router adalah modul dalam react yang berfungsi untuk melakukan proses navigasi pada spa (single page application)
Multi Page Aplication adalah jenis aplikasi dimana perlu memuat ulang seluruh halam web setiap kali membuat permintaan baru, sedangkan Single Page Aplication adalah jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktifitas yang terjadi dalam aplikasi tersebut
Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman

perbedaan antara link dan redirect
link

- dapat digunakan pada kondisi apapun
- memberikan history baru pada browser
- bereaksi dengan click seperti a href
  redirect
- lebih sering digunakan pada halaman 404
- menimpa history pada browser
- bereaksi dengan suatu kondisi

macam - macam Hook routing

- useHistory = memberikan kita akses ke instance riwayat yang dapat digunakan untuk bernavigasi
- useLocation
- useParams= mengembalikan objek pasangan kunci/nilai parameter url
- useRouteMatch = mencocokan url saat ini dengan cara sama seperti <Route>
