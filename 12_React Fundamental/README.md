JSX merupakan singkatan dari Javascript XML dan ekstensi dari javascript. Kenapa menggunakan jsx?

- jsx dibuat berdasarkan fakta kalau logika rendering sangat terikat dengan lodic UI
- seperation of technology -> separation of concerns
  spesifikasi jenis element pada react
- Kapitalisasi untuk komponen react
- huruf kecil untuk komponen bawaan

Komponen react adalah bagian kode yang dapat digunakana kembali yang digunakan untuk menentukan tampilan, behavior, dan state.
untuk mempermudah proses react menganjurkan membagi ui menjadi beberapa komponen.

Props singkatan dari properties, membuat kita dapat memberikan argumen/ data pada komponen. Props membantu untuk membuat komponen menjadi dinamis. Props dioper ke komponen sama seperti memberikan atribut pada tag HTMl. Props juga pada komponen adalah read-only dan tidak dapat diubah.
Untuk komposisi komponen itu sendiri ada 2 yaitu Kontainmen dan Spesialisasi

React memiliki siklus hidup yang mengatur bagaimana sebuah komponen berperilaku selama masa hidupnya diaplikasi react. ada 3 fase

- mounting
- Updating
- Unmouting

Pada react kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. lalu kita juga dapat me-render hanya beberapa bagian saja berdasarkan state dari palikasi kita seperti

- menggunakan if
- inline if dan operator &&
- inline if-else dengan ternary operator
- mencegah komponen rendering

Untuk react tidak memiliki pendapat tentang bagaimana cara memasukan file ke folder. tapi ada kriteria umum bagaimana kita memasukan sebuah file kedalam folder

- pengelompokan berdasarkan fitur
- pengelompokan berdasarkan jenis file
