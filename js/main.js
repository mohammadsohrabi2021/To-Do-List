const todocontainer =document.querySelector('#todocontainer');

let database = [
    {id:1 , title:'پژو پارس' ,state:false},
    {id:2 , title:'دنا پلاس' ,state:true},
    {id:3 , title:'206 تیپ2' ,state:false},
];
const rander = db =>{
    todocontainer.innerHTML = ''
    db.map(item =>(
        todocontainer.innerHTML +=`
        <div class="out">
           <div>id: ${item.id}</div>
           <div>title: ${item.title}</div>
           <div onclick=" checkDatabase(${item.id})"> state:${item.state}</div>
        </div>
        `
    ))
};

const checkDatabase = id=>{
    database=database.map(item=> item.id === id ? {...item,state:!item.state}:item)
    rander(database)
}


rander(database);
