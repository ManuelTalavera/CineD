window.addEventListener("DOMContentLoaded", () => {
  ;
});

const cant_filas=10;
const cant_asientos =10;
let filas = armarAsientos(cant_filas,cant_asientos);
console.log("filas", filas);
let asientosOcupados = 0;
let valorActual = 0;
let maxCheckboxes = 12;
let checkboxes = document.querySelectorAll(".custom-checkbox input[type='checkbox']");
addCheckboxesListener();
console.log("se ejecuto");
let asiento = document.getElementById("asiento");
let sala = document.getElementById("elegir");
let botonesHora = document.getElementsByClassName("hora");
let decrementarActivado = true;
const boton1 = document.getElementsByClassName("nuentradas1");

function incrementar() {
  valorActual++;
  actualizarValor();
}
function decrementar() {
  if (valorActual > 0 && decrementarActivado) {
    valorActual--;
    actualizarValor();
  }
}
function armarAsientos(filas,asientos){
  let _filas = [];
  for(let i=0;i<filas; i++ ){
    let fila = new Array (asientos);
    for(let j=0; j<asientos; j++)
      fila[j] =false
    _filas.push(fila)
  }
  return _filas;
}

function actualizarValor() {
  const valorElemento = document.getElementById("valor");
  valorElemento.textContent = valorActual;
}
function mapeoCheckbox(checkbox){
  let idCheckbox=checkbox.id;
  let fila= Math.floor( idCheckbox / cant_filas);
  let asiento = idCheckbox % cant_asientos;
  actualizarAsiento(fila,asiento,checkbox.checked);
  console.log(filas);
}
function actualizarAsiento(fila,asiento,valor){
  filas [fila][asiento]=valor;

}


function addCheckboxesListener(){

  checkboxes.forEach((checkbox) =>{
    checkbox.addEventListener('change', function() {
      mapeoCheckbox(this);
      if (this.checked) {
        asientosOcupados++;
        console.log("Checkbox is checked..", asientosOcupados);
      } else {
        asientosOcupados--;
        console.log("Checkbox is not checked..", asientosOcupados);
      }
      if (asientosOcupados>valorActual){
        this.checked=false;
        asientosOcupados--;
        boton1.disabled= true;
      }
    });
  })}

  for (let i = 0; i < botonesHora.length; i++) {
    botonesHora[i].addEventListener("click", function() {
        sala.style.display = "block";
    });
}
