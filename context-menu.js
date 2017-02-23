const contextMenu = require('electron-contextmenu-middleware');
const debugMenu = require('debug-menu').middleware;

function setupContextMenu(webview) {
  const openDevTools = () => {
    try {
      webview.openDevTools();
    } catch (ex) {
      alert(`Can't open DevTools: ${ex.message}`);
    }
  };

  contextMenu.use((ctx, next) => {
    ctx.menu.push({
      label: 'webview devTools',
      click: () => openDevTools()
    });
    next();
  });

  contextMenu.use(debugMenu);

  contextMenu.activate();
}

module.exports = setupContextMenu;
