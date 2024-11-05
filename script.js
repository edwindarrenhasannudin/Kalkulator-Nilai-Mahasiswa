// Konstanta untuk bobot penilaian
const bobotTugas = 0.3; // Bobot nilai tugas (30%)
const bobotUTS = 0.3; // Bobot nilai UTS (30%)
const bobotUAS = 0.4; // Bobot nilai UAS (40%)
const batasKelulusan = 60; // Batas nilai kelulusan

function hitungNilai() {
  // Mengambil nilai dari input dan mengonversinya ke float
  const nilaiTugas = parseFloat(document.getElementById("nilaiTugas").value);
  const nilaiUTS = parseFloat(document.getElementById("nilaiUTS").value);
  const nilaiUAS = parseFloat(document.getElementById("nilaiUAS").value);

  // Validasi input agar berada dalam rentang 0-100
  if (nilaiTugas < 0 || nilaiTugas > 100 || nilaiUTS < 0 || nilaiUTS > 100 || nilaiUAS < 0 || nilaiUAS > 100) {
    alert("Nilai harus di antara 0 dan 100."); // Pesan kesalahan jika nilai tidak valid
    return; // Keluar dari fungsi jika input tidak valid
  }

  // Perhitungan kontribusi nilai berdasarkan bobot
  const kontribusiTugas = nilaiTugas * bobotTugas;
  const kontribusiUTS = nilaiUTS * bobotUTS;
  const kontribusiUAS = nilaiUAS * bobotUAS;

  // Perhitungan nilai akhir
  const nilaiAkhir = kontribusiTugas + kontribusiUTS + kontribusiUAS;
  
  // Menentukan grade berdasarkan nilai akhir
  let grade;
  if (nilaiAkhir >= 90) grade = "A";
  else if (nilaiAkhir >= 80) grade = "B";
  else if (nilaiAkhir >= 70) grade = "C";
  else if (nilaiAkhir >= 60) grade = "D";
  else grade = "E";

  // Menentukan status kelulusan dan warna teks berdasarkan batas kelulusan
  const status = nilaiAkhir >= batasKelulusan ? "Lulus" : "Gagal";
  const warnaStatus = nilaiAkhir >= batasKelulusan ? "green" : "red";

  // Menampilkan hasil perhitungan termasuk kontribusi masing-masing nilai pada elemen dengan id 'hasil'
  document.getElementById("hasil").innerHTML = `
    <p>Kontribusi Tugas (30%): ${kontribusiTugas.toFixed(2)}</p> <!-- Menampilkan kontribusi nilai Tugas -->
    <p>Kontribusi UTS (30%): ${kontribusiUTS.toFixed(2)}</p> <!-- Menampilkan kontribusi nilai UTS -->
    <p>Kontribusi UAS (40%): ${kontribusiUAS.toFixed(2)}</p> <!-- Menampilkan kontribusi nilai UAS -->
    <p>Nilai Akhir: ${nilaiAkhir.toFixed(2)}</p> <!-- Menampilkan nilai akhir dengan dua angka desimal -->
    <p>Grade: ${grade}</p> <!-- Menampilkan grade -->
    <p>Status: <span style="color: ${warnaStatus};">${status}</span></p> <!-- Menampilkan status dengan warna dinamis -->
  `;
}

// Menambahkan event listener pada tombol reset untuk menghapus hasil
document.querySelector('button[type="reset"]').addEventListener('click', function() {
  document.getElementById('hasil').innerHTML = ''; // Menghapus teks di dalam elemen 'hasil'
});
