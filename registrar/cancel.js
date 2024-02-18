const cancelBtn = document.getElementById('btnCancel');


cancelBtn.addEventListener('click', async e => {
	e.preventDefault()


	await window.electronAPI.search();
	window.close();
});