const {app, BrowserWindow, Menu} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'New Todo' }
    ]
  }
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}
