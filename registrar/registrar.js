const btn = document.getElementById('btn');

btn.addEventListener('click', e => {
	e.preventDefault();

	const textarea = document.getElementById('notas');


	let inputs = document.querySelectorAll('input');
	
	let newInputs = [];



	for (let i = 0; i < inputs.length; i++) 
		{
			if (inputs[i].value !== "") {
				newInputs.push(inputs[i].value)
			}
			if (inputs[i].checked) {
				newInputs.push(true)
			}
		};

	if (textarea.value !== '') 
		{
			newInputs.push(textarea.value)
		};

	// newInputs contiene todos los datos del formulario en un Array ordenado tal cual aparece en el formulario

});