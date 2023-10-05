import {initializeApp}  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings={
    databaseURL:"https://edwin-85bb6-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app= initializeApp(appSettings)
const database= app(getDatabase)
const itemsIndb= ref(app,"items") 

console.log(itemsIndb)

const addBtn =document.getElementById("add-btn")
const inputField =document.getElementById("input-field")

addBtn.addEventListener("click", function(){
    let inputValue=inputField.value
    push(itemsIndb,inputValue)
    console.log(`${inputValue} added successfully`)
})
