const bobotTugas = 0.3; // Bobot nilai tugas (30%)
const bobotUTS = 0.3; // Bobot nilai UTS (30%)
const bobotUAS = 0.4; // Bobot nilai UAS (40%)
const batasKelulusan = 60; // Batas nilai kelulusan

function hitungNilai() {
  const nilaiTugas = parseFloat(document.getElementById("nilaiTugas").value); // Mengambil nilai tugas dari input dan mengonversinya ke float
  const nilaiUTS = parseFloat(document.getElementById("nilaiUTS").value); // Mengambil nilai UTS dari input dan mengonversinya ke float
  const nilaiUAS = parseFloat(document.getElementById("nilaiUAS").value); // Mengambil nilai UAS dari input dan mengonversinya ke float

  // Validasi input agar berada dalam rentang 0-100
  if (nilaiTugas < 0 || nilaiTugas > 100 || nilaiUTS < 0 || nilaiUTS > 100 || nilaiUAS < 0 || nilaiUAS > 100) {
    alert("Nilai harus di antara 0 dan 100."); // Tampilkan pesan kesalahan jika nilai tidak valid
    return; // Keluar dari fungsi jika input tidak valid
  }

  // Perhitungan nilai akhir berdasarkan bobot
  let nilaiAkhir = (nilaiTugas * bobotTugas) + (nilaiUTS * bobotUTS) + (nilaiUAS * bobotUAS);
  let grade;

  // Menentukan grade berdasarkan nilai akhir
  if (nilaiAkhir >= 90) grade = "A";
  else if (nilaiAkhir >= 80) grade = "B";
  else if (nilaiAkhir >= 70) grade = "C";
  else if (nilaiAkhir >= 60) grade = "D";
  else grade = "E";

  // Menentukan status kelulusan dan warna teks berdasarkan batas kelulusan
  const status = nilaiAkhir >= batasKelulusan ? "Lulus" : "Gagal";
  const warnaStatus = nilaiAkhir >= batasKelulusan ? "green" : "red";

  // Menampilkan hasil perhitungan pada elemen dengan id 'hasil'
  document.getElementById("hasil").innerHTML = `
    <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p> <!-- Menampilkan nilai akhir dengan dua angka desimal -->
    <p>Grade: ${grade}</p> <!-- Menampilkan grade -->
    <p>Status: <span style="color: ${warnaStatus};">${status}</span></p> <!-- Menampilkan status dengan warna dinamis -->
  `;
}

// Menambahkan event listener pada tombol reset untuk menghapus hasil
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  document.getElementById('hasil').innerHTML = ''; // Menghapus teks di dalam elemen 'hasil'
});
