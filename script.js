const form = document.getElementById('absensiForm');
const tabelBody = document.querySelector('#tabelAbsensi tbody');
let counter = 1;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value.trim();
    const kelas = document.getElementById('kelas').value.trim();
    const tanggal = document.getElementById('tanggal').value;
    const status = document.getElementById('status').value;
    let time = new Date().toLocaleTimeString();

    if (nama === '' || kelas === '' || tanggal === '' || status === '') {
        alert('Harap isi semua!');
        return;
    }

    const row=tabelBody.insertRow();

    row.insertCell(0).textContent = counter++;
    row.insertCell(1).textContent = nama;
    row.insertCell(2).textContent = kelas;
    row.insertCell(3).textContent = tanggal;
    row.insertCell(4).textContent = status;
    row.insertCell(5).textContent = time;
    form.reset();
    
});

function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}


document.getElementById("absensiForm").addEventListener("submit", function(e) {
    const waktuInput = document.getElementById("time").value;
    if (!waktuInput) return; // kalau kosong, biarkan required yang jalan

    const [jam, menit] = waktuInput.split(":").map(Number);
    const totalMenit = (jam * 60) + menit;
    const batasMenit = 7 * 60;

    if (totalMenit > batasMenit) {
        alert("Waktu melebihi batas jam 07:00. Absen tidak bisa dilakukan.");
        e.preventDefault();
    }
});

