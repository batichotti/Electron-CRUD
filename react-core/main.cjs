const { app, BrowserWindow} = require("electron");
const path = require("path");

function createWindow(){
    const win = new BrowserWindow({
        width: 1080,
        height: 720,
        resizable:false,
        webPreferences:{
            preload: path.join(__dirname, "preloader.cjs"),
            nodeIntegration: true,
        },
    });
    win.loadURL("http://localhost:5173");
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", ()=>{
        if(BrowserWindow.getAllWindows().length === 0){createWindow()}
    });
});

app.on("window-all-closed", ()=>{
    if(process.platform !== "darwin") app.quit();
})