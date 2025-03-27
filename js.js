// Fungsi untuk menangani klik tombol
function submitForm() {
    // Mengambil nilai dari input nama menggunakan ID
    const nama = document.getElementById('nama').value;
  
    // Mengambil nilai dari input jumlah menggunakan ID
    const jumlah = document.getElementById('jumlah').value;
  
    // Validasi jika nama atau jumlah kosong
    if (!nama || !jumlah) {
      alert('Harap isi semua data!');
      return; // Menghentikan eksekusi jika input kosong
    }
  
    // Menampilkan data yang diinput pengguna menggunakan alert
    alert(`Nama: ${nama}\nJumlah Pilihan: ${jumlah}`);
  }
  
  // Fungsi untuk membuat input pilihan berdasarkan jumlah yang dimasukkan
  function generateChoices() {
    const name = document.getElementById('name').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = ''; // Reset isi choices

    if (!name || isNaN(jumlah) || jumlah <= 0) {
      alert('Masukkan Nama dan Jumlah Pilihan yang valid!');
      return;
    }

    for (let i = 1; i <= jumlah; i++) {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = `Teks Pilihan ${i}`;
      input.id = `choice${i}`;
      choicesDiv.appendChild(document.createTextNode(`Pilihan ${i} : `));
      choicesDiv.appendChild(input);
      choicesDiv.appendChild(document.createElement('br'));
    }

    document.getElementById('choicesContainer').classList.remove('hidden');
  }

  // Fungsi untuk menampilkan opsi dalam bentuk Radio Button dan Dropdown
  function displayOptions() {
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const radioDiv = document.getElementById('radioOptions');
    const dropdown = document.getElementById('dropdown');

    radioDiv.innerHTML = '';
    dropdown.innerHTML = '';

    for (let i = 1; i <= jumlah; i++) {
      const choiceText = document.getElementById(`choice${i}`).value;

      // Radio Button
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'choice';
      radio.value = choiceText;
      if (i === 1) radio.checked = true;
      radioDiv.appendChild(radio);
      radioDiv.appendChild(document.createTextNode(` ${choiceText}`));
      radioDiv.appendChild(document.createElement('br'));

      // Dropdown
      const option = document.createElement('option');
      option.value = choiceText;
      option.text = choiceText;
      dropdown.appendChild(option);
    }

    document.getElementById('optionsContainer').classList.remove('hidden');
  }

  // Fungsi untuk menampilkan dropdown
  function showDropdown() {
    document.getElementById('dropdown').classList.remove('hidden');
  }

  // Fungsi untuk menampilkan hasil akhir
  function showResult() {
    const name = document.getElementById('name').value;
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const radioButtons = document.getElementsByName('choice');
    let selectedChoice = '';

    for (const radio of radioButtons) {
      if (radio.checked) {
        selectedChoice = radio.value;
        break;
      }
    }

    const choices = Array.from(radioButtons).map(r => r.value).join(', ');
    const resultText = `Hallo, nama saya ${name}, saya mempunyai sejumlah ${jumlah} pilihan yaitu ${choices}, dan saya memilih ${selectedChoice}`;
    
    document.getElementById('result').innerText = resultText;
    document.getElementById('resultContainer').classList.remove('hidden');
  }