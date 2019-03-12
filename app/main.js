const {app, BrowserWindow, dialog} = require ('electron')
const getFileFromUser = () =>{
    dialog.showOpenDialog(
        mainW,{
        properties: ['openFile']},
        console.log
    )
}
let mainW = null
app.on('ready', ()=>{
    mainW = new BrowserWindow({show: false})
    mainW.loadFile('./app/index.html')
    mainW.once('ready-to-show', () => {
        mainW.show();
        getFileFromUser();
    });
    mainW.on('closed',()=>{
        mainW = null
    })
})