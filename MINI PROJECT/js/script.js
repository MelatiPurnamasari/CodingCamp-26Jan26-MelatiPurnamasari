// Welcome text
const userName = prompt("Masukkan nama Anda:");
if (userName) {
  document.getElementById("welcome-text").innerText = "Hi, " + userName;
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  const result = `
    <h3>Data Terkirim:</h3>
    <p><b>Nama:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Telepon:</b> ${phone}</p>
    <p><b>Pesan:</b> ${message}</p>
  `;

  document.getElementById("result").innerHTML = result;
});
