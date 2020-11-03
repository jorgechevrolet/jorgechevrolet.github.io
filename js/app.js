// define DOM elements
const btnCotizarAveo = document.getElementById('cotizar-aveo');
const btnCotizarOnix = document.getElementById('cotizar-onix');
const btnCotizarBeat = document.getElementById('cotizar-beat');
let subject = document.getElementById('subject');

// add "cotizar" function
btnCotizarAveo.addEventListener('click', () => subject.value = "Deseo cotizar un Aveo");
btnCotizarOnix.addEventListener('click', () => subject.value = "Deseo cotizar un Onix");
btnCotizarBeat.addEventListener('click', () => subject.value = "Deseo cotizar un Beat");