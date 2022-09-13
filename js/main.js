const todocontainer = document.querySelector('#todocontainer');
const todocartcontainer = document.querySelector('#todoCart');

let database = [
    {id:1 , title:'پژو پارس' ,state:false},
    {id:2 , title:'دنا پلاس' ,state:false},
    {id:3 , title:'206 تیپ2' ,state:false},
];
const rander = db =>{
    todocart(db.filter(item => item.state))
    todocontainer.innerHTML = ''
   
    db.map(item =>(
        todocontainer.innerHTML +=`
        <tr>
           <td class="col-xs- col-lg-2 col-xl-2"> ${item.id}</td>
           <td class="col-lg-4 col-xl-4"> ${item.title}</td>
           <td class="col-lg-4 col-xl-4" onclick=" checkDatabase(${item.id})"> ${item.state}</td>
           <td class="col-lg-2 col-xl-2"><button class="btn  border-0 m-2" onclick="deletetodo(${item.id})"><i class="fa-solid fa-trash"></i>  </button></td>
        </tr>
        
        `
    ))
};
const todocart = db =>{
    todocartcontainer.innerHTML = ''
    db.map(item =>(
        todocartcontainer.innerHTML +=`
        <tr>
         <td> ${item.id}</td>
         <td> ${item.title}</td>
         <td><button class="btn  border-0 m-2"onclick=" checkDatabase(${item.id})""><i class="fa-solid fa-trash"></i> </button></td>
        </tr>
        `
    ))
}

const checkDatabase = id=>{
    database=database.map(item=> item.id === id ? {...item,state:!item.state}:item)
    rander(database)
}

const deletetodo= id =>{
    database=database.filter(item =>item.id !== id)
    rander(database)
}



rander(database);
