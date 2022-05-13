function enviar() {
    let numero01 = parseInt(prompt("digite primeiro valor"));
    let numero02 = parseInt(prompt("digite segundo valor"));
    let numero03 = parseInt(prompt("digite terceiro valor"));
    if (!numero01 || !numero02 || !numero03) {
        alert('prencha todos os campos');
        return;
    }
    let maximo = Math.max(numero01, numero02, numero03,);
    let minimo = Math.min(numero01, numero02, numero03,);


    alert("maior numero è " + maximo);
    alert("menor numero è " + minimo);
}
