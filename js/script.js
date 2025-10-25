const name = prompt("Masukkan nama Anda: ");
if( name == null){
    document.getElementById("perkenalan").innerText = "Halo Guest, selamat menjelajahi website ini."
}
else{
    document.getElementById("perkenalan").innerText = "Halo " + name + ", selamat menjelajahi website ini.";
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pesan = document.getElementById("pesan").value.trim();

    if (!name || !dob || !gender || !pesan) {
      alert("Harap isi semua kolom terlebih dahulu!");
      return;
    }

    const selectedDate = new Date(dob);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate > today) {
      alert("Tanggal lahir tidak boleh melebihi tanggal hari ini!");
      return;
    }

    output.innerHTML = `
      <h3>Hasil Input:</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${new Date(dob).toLocaleString()}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
    `;

    form.reset();
  });
});
