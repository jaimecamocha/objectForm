/**
 * @author Jaime Fernández Calvo
 * @github https://github.com/jaimecamocha/objectForm.git
 */

// Método 1: acceder a los formularios

const formulario = document.getElementById('contactar')

// Método 2: acceder a los formularios

const formularios = document.getElementsByTagName('form');
const primerFormulario = formularios[0];	// primer formulario del documento

// Método 3: acceder a los formularios

// la referencia a todos los formularios del documento
const misFormularios = document.forms;

// primer formulario del documento
const miPrimerFormulario1 = misFormularios[0];

// o bien primer formulario del documento
const miPrimerFormulario2 = document.forms[0];

// o bien referenciamos al formulario con name "contactar"
const miPrimerFormulario3 = miPrimerFormulario2["contactar"];

