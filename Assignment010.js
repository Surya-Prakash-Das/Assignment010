const table= document.getElementById('table');//getting table from html
let data = fetch('https://jsonplaceholder.typicode.com/posts').then(respone=> respone.json().then(result=>{return(result)}));//fetching data from url
const DataTable = async () => { //async function for data and put data in creating table function
    createtable(table,await data);
};
function createtable(table, data){ //define a function with two parameter of table tag from html and data from database
    let thead = table.createTHead();
    let row = thead.insertRow();
    let headings = Object.keys(data[0]);
    for (let key of headings) { //for loop to create headings of tabel
        let th = document.createElement('th');
        th.innerHTML=key;   //heading is key of object
        th.className="title header"; 
        row.appendChild(th);
      }
    for(let keys of data){ //for loop to create each row and cells of tabel
        let roww = table.insertRow();
        roww.className = "each-row";
        for(let key in keys){
            let cell = roww.insertCell();
            cell.className = "title";
            cell.innerHTML=keys[key]; //in each cell we are putting values of key
        }
    }
}
DataTable();