
const datalist = document.getElementById('pacientes')
const registrarLink = document.getElementById('registrar')


try {
	let pacientesString = localStorage.getItem('pacientes');
	let pacientesObject = JSON.parse(pacientesString)
	// Terminar el dataoption
} catch (e) {
	console.log(e)
}

registrarLink.addEventListener('click', async e => {
	e.preventDefault();
	await window.electronAPI.register()
	window.close()
});