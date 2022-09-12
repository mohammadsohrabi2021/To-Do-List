const todocontainer =document.querySelector('#todocontainer');

const database = [
    {id:1 , name:'ali',state:false},
    {id:2 , name:'reza',state:false},
    {id:3 , name:'mohammad',state:false},
]
const rander = db =>{
    database.map(item =>(
        todocontainer.innerHTML +=`
        <div class="out">
           <div>id: ${item.id}</div>
           <div>name: ${item.name}</div>
           <div> state:${item.state}</div>
        </div>
        `
    ))
}
rander()
