// let input = document.getElementById("input");
// let ol = document.getElementById("ol")
// let x = 0;
// function add() {
//     if (input.value != " " ) {
//      ol.innerHTML += `
//     <li> ${++x} - ${input.value}     <button class="btn btn-danger" onclick="remove()"> x </button>
// </li> 
//     `
//         input.value = " ";
//     } else {
//         Swal.fire('Empty TexT')
//     }

// }
// function next() {

//     ol.innerHTML = `
//     <li> 
// </li> 
//     `
//     x=0;
//     // window.location.href = "./index2.html"
//     // window.location.assign("https://www.w3schools.com")
// }

// function remove() {

// }

// let tasks=[]
// let ol=document.querySelector("ol");
// let input=document.querySelector("input")


// function rendertasks(){
//     ol.innerHTML=""
//     for (let index = 0; index < tasks.length; index++) {
//         ol.innerHTML+=`<li> 
//        <p onblur="savenewvalue(this,${index})"> ${tasks[index]} </p>
//         <button onclick="update(${index})"> EDIt</button> 
//         <button onclick="deleteelemnt(${index})"> DELETE</button></li>`
//         input.value=""
//     }
// }


// function add(){
// tasks.push(input.value)
// rendertasks()

// }


// function deleteelemnt(taskindex){
// tasks.splice(taskindex,1)
// rendertasks()

// }

// function update(taskindex){
// let lis=document.querySelectorAll("li")
// let li=lis[taskindex]
// li.children[0].setAttribute("contenteditable","true");
// }

// function savenewvalue(el,taskindex){
// el.setAttribute("contenteditable","false")
// tasks[taskindex]=el.innerText;
// rendertasks()

// }


let tasks=[]
let ol=document.querySelector("ol")
let input =document.querySelector("input")

function render(){
    ol.innerHTML=""
    for (let index = 0; index < tasks.length; index++) {
       ol.innerHTML+= `<li>
        <p  onblur="save(this,${index})">${tasks[index]} </p>
        <button onclick="deletee(${index})"> delete </button>
        <button onclick="update(${index})"> edit </button>
        </li>
        `
        input.value=""
    }
}

function add(){
    tasks.push(input.value)
    render()
}


function deletee(taskindex){
    tasks.splice(taskindex,1)
    render()
}


function update(taskindex){
let lis=document.querySelectorAll("li")
let li=lis[taskindex]
li.children[0].setAttribute("contenteditable","true")
}


function save (el,taskindex){
el.setAttribute("contenteditable","false")
tasks[taskindex]=el.innerText;
render()
}

function next(){
  tasks.splice(tasks[0],tasks.length)
  render()
}