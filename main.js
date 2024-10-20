function hitung(operator) {
    const angka1 = parseFloat(document.getElementById('angka1').value);
    const angka2 = parseFloat(document.getElementById('angka2').value);
    var hasil;

    if(isNaN(angka1) || isNaN(angka2)){
        hasil = 'Masukkan Angka';
    }else{
    switch(operator) {
        case '+':
            hasil = angka1 + angka2;
            break;
        case '-':
            hasil = angka1 - angka2;
            break;
        case '*':
            hasil = angka1 * angka2;
            break;
        case '/':
            hasil = angka1 / angka2;
            break;
        default:
            hasil = 'Operasi tidak valid';
    }
}
    document.getElementById('hasil').value = hasil;
}
