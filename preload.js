const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('electronAPI', {
	register: (callback) => ipcRenderer.send('register'),
	search: (callback) => ipcRenderer.send('search')
	});
