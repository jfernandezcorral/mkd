const {app, BrowserWindow} = require ('electron')
let mainW = null
app.on('ready', ()=>{
    mainW = new BrowserWindow()
    mainW.loadFile('./app/index.html')
    mainW.on('closed',()=>{
        mainW = null
    })
})