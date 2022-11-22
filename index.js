// fetch https://jsonplaceholder.typicode.com/posts and insert in table body with id tableBody

const tableBody = document.getElementById('tableBody');


// get data from api and store in a global variable then use that variable to fill html and another variable to filter search data
let data = [];
let searchData = [];

// call fetchData function



// fetch data from api
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await response.json();
    searchData = data;
    fillTable(data);
}

// fill table with data
const fillTable = (searchData) => {
    let html = '';
    searchData.forEach((item) => {
        html += `<tr>
            <td>${item.userId}</td>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
        </tr>`
    });
    tableBody.innerHTML = html;
}


// add event listener to search input
document.getElementById('searchBar').addEventListener('keyup', search);


fetchData();


// toggle theme when the label is clicked
const toggleTheme = () => {
    // add delay
    setTimeout(() => {
        const body = document.querySelector("label");
        // select navbar
        const navbar = document.querySelector(".navbar");
        // select table
        const table = document.querySelector("table");
        // select form
        const searchBar = document.querySelector("#searchBar");

        // toggle bootstrap theme of navbar and table
        table.classList.toggle("table-dark");
        navbar.classList.toggle("navbar-dark");
        navbar.classList.toggle("bg-dark");
        searchBar.classList.toggle("bg-dark");
    }, 200);

}

// execute toggleTheme with delay when the label is clicked
document.querySelector("label").addEventListener("click", toggleTheme);


document.getElementById('search').addEventListener('keyup', ()=>{
    const search = document.getElementById('search').value;
    // search by id
    searchData = data.filter((item) => {
        return item.id == search;
    });

    if(search != ''){
        searchData.length == 0 ? fillTable([]) : fillTable(searchData);
    }
    else{
        fillTable(data);
    }
});



