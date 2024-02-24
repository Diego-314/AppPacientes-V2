
const datalist = document.getElementById('pacientes')
const registrarLink = document.getElementById('registrar')


try {
	let data = '';
	let pacientesString = localStorage.getItem('pacientes');
	let pacientesObject = JSON.parse(pacientesString)
	for (let i = 0; i < pacientesObject.length; i++) 
		{

			data += `

				<option value="${pacientesObject[i].dni}">${pacientesObject[i].name}</option>

			`

		};
	datalist.innerHTML = data;
} catch (e) {
	console.log(e)
}

registrarLink.addEventListener('click', async e => {
	e.preventDefault();
	await window.electronAPI.register()
	window.close()
});