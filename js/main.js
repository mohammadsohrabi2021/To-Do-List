const todocontainer = document.querySelector('#todocontainer');
const todocartcontainer = document.querySelector('#todoCart');
const input =document.querySelector('#input');
const Search =document.querySelector('#Search');
// const SearchtodoCart =document.querySelector('#SearchtodoCart')

// SearchtodoCart.addEventListener('keyup',(e)=>{
//    searchtodoCart=e.target.value;
//     rander(database)
// })
// let searchtodoCart ='';

Search.addEventListener('keyup',(e)=>{
    search=e.target.value;
    rander(database)
})
let search ='';

let database = [
    {id:Math.floor(Math.random()*1000), title:'پژو پارس' ,state:false},
    {id:Math.floor(Math.random()*1000) , title:'دنا پلاس' ,state:false},
    {id:Math.floor(Math.random()*1000) , title:'206 تیپ2' ,state:false},
];
const rander = db =>{
    todocart(db.filter(item => item.state))
    todocontainer.innerHTML = ''
   
    db.filter(item =>item.title.toUpperCase().includes(search.toUpperCase())).map(item =>(
        todocontainer.innerHTML +=`
        <tr>
           <td> ${item.id}</td>
           <td> ${item.title}</td>
           <td onclick=" checkDatabase(${item.id})"> <i class="fa-solid fa-cart-shopping"></i></td>
           <td ><button class="btn  border-0 m-2" onclick="deletetodo(${item.id})"><i class="fa-solid fa-trash"></i>  </button></td>
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

const addtodo = () =>{
  database =[...database ,{id:Math.floor(Math.random()*1000),title:input.value,state:false}]
  input.value=''
   rander(database)
}
const deleteall =()=>{
    database =[]
    rander(database);
}

// const remainingItems = ()=>{

// }
rander(database);
