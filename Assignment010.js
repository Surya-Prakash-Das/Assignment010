const table= document.getElementById('table');
table.className
let data = fetch('https://jsonplaceholder.typicode.com/posts').then(respone=> respone.json().then(result=>{return(result)}));
const DataTable = async () => {
    createtable(table,await data);
};
function createtable(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    let headings = Object.keys(data[0]);
    for (let key of headings) {
        let th = document.createElement('th');
        th.innerHTML=key;
        th.className="title header";
        row.appendChild(th);
      }
    for(let keys of data){
        let roww = table.insertRow();
        roww.className = "each-row";
        for(let key in keys){
            let cell = roww.insertCell();
            cell.className = "title";
            cell.innerHTML=keys[key];
        }
    }
}
DataTable();