handling event adalah suatu netode untuk menangani sebuah event atau aksi yang diberikan pengguna kepada suatu komponen sedangkan event adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen misalnya tombol ditekan ada banyak list event diantaranya

- clipboard event
- form event
- mouse event
- generic event

Statefull component adalah memiliki state. component ini dibuat dengan class, kelebihan dari class component adalah memiliki lifecycle. Sedangkan Stateless component adalah tidak memiliki state hanya prop. umumnya component ini dibuat dengan function karena codenya lebih ringkas.
Komponen stateful dan stateless memilliki banyak nama berbeda seperti

1. smart component dan dump component
2. container component dan presentational component
   Perbedaan antara komponen stateful dan stateless
   stateful

- tidak tahu tentang aplikasi
- tidak melakukan data fecthing
- tujuan utamanya visualisasi
- dapat digunakan kembali
- hanya berkomunikasi dengan induk secara langsung

stateless

- tahu tentang aplikasi
- melakukan data fecthing
- berinteraksi dengan aplikasi
- tidak dapat digunakan kembali
- meneruskan status dan data ke anak-anaknya
