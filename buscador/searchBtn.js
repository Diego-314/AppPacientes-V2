const searchBtn = document.getElementById('searchBtn');



searchBtn.addEventListener('click', e => {
	e.preventDefault();
	const dni = document.getElementById('nombrePaciente').value;
	let pacientesObj = JSON.parse(localStorage.getItem('pacientes'));
	for (let i = 0; i < pacientesObj.length; i++) 
		{
			if (pacientesObj[i].dni == dni) 
				{
					console.log(pacientesObj[i])
					window.electronAPI.view(pacientesObj[i]);
				}; 
		};
});