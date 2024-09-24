let display = document.getElementById('layar');


function appendToDisplay(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = '';
}


function backspace() {
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listeners untuk tombol-tombol
document.getElementById('nol').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('satu').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('dua').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('tiga').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('empat').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('lima').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('enam').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('tujuh').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('delapan').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('sembilan').addEventListener('click', () => appendToDisplay('9'));

document.getElementById('tambah').addEventListener('click', () => appendToDisplay('+'));
document.getElementById('kurang').addEventListener('click', () => appendToDisplay('-'));
document.getElementById('bagi').addEventListener('click', () => appendToDisplay('/'));
document.getElementById('kali').addEventListener('click', () => appendToDisplay('*'));
document.getElementById('titik').addEventListener('click', () => appendToDisplay('.'));

document.getElementById('samaDengan').addEventListener('click', calculateResult);
document.getElementById('hapus').addEventListener('click', clearDisplay);
document.getElementById('hapusTerakhir').addEventListener('click', backspace);
