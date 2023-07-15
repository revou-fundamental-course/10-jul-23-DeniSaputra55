// Fungsi untuk menghitung BMI
function calculateBMI() {
  // Ambil nilai dari input
  var weightInput = document.getElementById('weight').value;
  var heightInput = document.getElementById('height').value;

  // Konversi ke satuan metrik
  var weight = parseFloat(weightInput);
  var height = parseFloat(heightInput) / 100; // Konversi tinggi menjadi meter

  // Hitung BMI
  var bmi = weight / (height * height);

  // Tampilkan hasil BMI
  var bmiResultElement = document.getElementById('bmiResult');
  bmiResultElement.textContent = bmi.toFixed(2); // Menampilkan BMI dengan 2 angka di belakang koma

  // Tentukan status berdasarkan kategori BMI
  var bmiDescriptionElement = document.getElementById('bmiDescription');
  var bmiDescription = "";

  if (bmi < 18.5) {
    bmiDescription = "Anda Memiliki Berat badan kekurangan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiDescription = " Anda Memiliki Berat badan normal (ideal)";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    bmiDescription = " Anda Memiliki Berat badan kelebihan";
  } else {
    bmiDescription = " Anda Memiliki Berat badan kegemukan (obesitas)";
  }

  bmiDescriptionElement.textContent = bmiDescription;

  // Tampilkan hasil
  var resultSection = document.getElementById('result');
  resultSection.style.display = 'block'; // Tampilkan bagian hasil
}

// Fungsi untuk mereset form
function resetForm() {
  // Reset nilai input
  document.getElementById('weight').value = "";
  document.getElementById('height').value = "";

  // Sembunyikan bagian hasil
  var resultSection = document.getElementById('result');
  resultSection.style.display = 'none';
}

// Event listener untuk tombol "Hitung BMI"
var bmiForm = document.getElementById('bmiForm');
bmiForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah submit form secara default
  calculateBMI();
});

// Event listener untuk tombol "Reset"
var resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', resetForm);
