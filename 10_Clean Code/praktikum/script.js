const productNameInput = document.getElementById("produk");
      const kategori = document.getElementById("kategori");
      const gambar = document.getElementById("gambar");
      const kualitas = document.getElementsByClassName("form-check-input");
      const deskripsi = document.getElementById("deskripsi");
      const harga = document.getElementById("harga");

      const form = document.getElementById("form");
      const tableBody = document.getElementById("table-body");

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        let selectedKualitas = "";
        for (let i = 0; i < kualitas.length; i++) {
          if (kualitas[i].checked) {
            selectedKualitas = kualitas[i].value;
            break;
          }
        }

        const productName = productNameInput.value;
        const kategoriName = kategori.value;
        const gambarName = gambar.value ? gambar.value : "default.jpg";
        const deskripsiName = deskripsi.value;
        const hargaName = harga.value;

        if (
          productName &&
          kategoriName &&
          gambarName &&
          selectedKualitas &&
          deskripsiName &&
          hargaName
        ) {
          const newRow = document.createElement("tr");
          newRow.innerHTML = `
      <td>${productName}</td>
      <td>${kategoriName}</td>
      <td>${gambarName}</td>
      <td>${selectedKualitas}</td>
      <td>${deskripsiName}</td>
      <td>${hargaName}</td>
      <td><button class="delete-btn btn btn-danger">Hapus</button></td>
    `;
          tableBody.appendChild(newRow);

          document.getElementById("produk").value = "";
          document.getElementById("kategori").value = "";
          document.getElementById("gambar").value = "";
          document.getElementsByClassName("form-check-input").value = "";
          document.getElementById("kategori").value = "";
          document.getElementById("harga").value = "";
        }
      });

      tableBody.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-btn")) {
          const row = event.target.parentNode.parentNode;
          tableBody.removeChild(row);
        }
      });

      (function () {
        "use strict";
        window.addEventListener(
          "load",
          function () {
            var forms = document.getElementsByClassName("needs-validation");
            var validation = Array.prototype.filter.call(
              forms,
              function (form) {
                form.addEventListener(
                  "submit",
                  function (event) {
                    if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                    } else {
                      event.preventDefault();
                      let selectedKualitas = "";
                      for (let i = 0; i < kualitas.length; i++) {
                        if (kualitas[i].checked) {
                          selectedKualitas = kualitas[i].value;
                          break;
                        }
                      }
                      const productName = productNameInput.value;
                      const kategoriName = kategori.value;
                      const gambarName = gambar.value
                        ? gambar.value
                        : "default.jpg";
                      const deskripsiName = deskripsi.value;
                      const hargaName = harga.value;
                      alert(`Nama Produk: ${productName}\nKategori: ${kategoriName}\nGambar : ${gambarName}\nKualitas: ${selectedKualitas}\nDeskripsi: ${deskripsiName}\nHarga: ${hargaName}\n
                      `);
                    }
                    form.classList.add("was-validated");
                  },
                  false
                );
              }
            );
          },
          false
        );
      })();