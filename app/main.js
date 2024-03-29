const {app, BrowserWindow, dialog} = require ('electron')
const fs = require('fs')
const getFileFromUser = exports.getFileFromUser = () =>{
    dialog.showOpenDialog(
        mainW,
        {
            properties: ['openFile'],
            filters: [{name: 'Markdown Files', extensions: ['md', 'markdown']}]
        },
        (files)=>{
            app.addRecentDocument(files[0])
            const content = files? fs.readFileSync(files[0]).toString(): undefined
            content && mainW.webContents.send('file-opened', files[0], content)
        }
    )
}
let mainW = null
app.on('ready', ()=>{
    mainW = new BrowserWindow({show: false})
    mainW.loadFile('./app/index.html')
    mainW.once('ready-to-show', () => {
        mainW.show();
        //getFileFromUser();
    });
    mainW.on('closed',()=>{
        mainW = null
    })
})