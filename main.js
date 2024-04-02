
function calcular() {

    // const real = document.getElementById("real").value;

    const real = parseFloat(document.getElementById("real").value);

    const moeda = parseFloat(document.getElementById("moeda").value);

    const resultado = real / moeda;

    alert(resultado )


}
