console.log('ok');

function kirim() {
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "Desember"];

  let date = new Date();
  let tanggal = date.getDate()+" "+(bulan[date.getMonth()])+" "+ date.getFullYear();
  let jam = date.getHours() +":"+ date.getMinutes();

  waktuIni = jam+", "+tanggal

  // today = tanggal;


  // mengambil data input fom
  let nama = document.forms["message-form"]["nama"].value;
  console.log(nama);


  // DOM element lalu diberi isi dari form
  document.getElementById("waktu").innerText = waktuIni;
  document.getElementById("nama2").innerText = nama;
}