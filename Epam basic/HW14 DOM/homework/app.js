const appRoot = document.getElementById('app-root');
appRoot.insertAdjacentHTML('afterbegin', '<header><h1 class="header">Countries Search</h1></header>' +
'<form class="form-wrap"><div><p>Please choose type of search:</p><div>' +
'<label><input type="radio" class="searchType" name="search" value="region" onclick="fun1()">By Region</label><br>' +
'<label><input type="radio" class="searchType" name="search" value="language" onclick="fun1()">By Language</label>'+
'</div></div><div><p>Please choose your search query:</p>'+
'<select id="select" disabled="disabled"><option>Select value</option></select></div><form>' +
'<p class="no_items" id="no_items">No items, please choose search quary</p>');

const rad = document.getElementsByName('search'); 
const parent = document.getElementById('select');
const noItem = document.getElementById('no_items');
const mainTable = document.getElementById('countries');

function fun1(){
    parent.setAttribute('onchange','selectOption()');
    noItem.className = 'items'
    parent.disabled = false;
    while (parent.childNodes.length>1) {
        parent.removeChild(parent.lastChild);
    }
    while (appRoot.childNodes.length>2) {
        appRoot.removeChild(appRoot.lastChild);
    }
    if (rad[0].checked) {
        let reglist = externalService.getRegionsList();
        reglist.forEach(element => {
            let opt = document.createElement('option');
            parent.appendChild(opt).innerHTML = element;
        });
    } else if (rad[1].checked){
        let lanlist = externalService.getLanguagesList();
        lanlist.forEach(element => {
            let opt = document.createElement('option');
            parent.appendChild(opt).innerHTML = element;
        }); 
    }
}

function selectOption() {
    while (appRoot.childNodes.length>2) {
        appRoot.removeChild(appRoot.lastChild);   
    }
    noItem.className = 'no_items';
    let tbl = document.createElement('table');
    tbl.setAttribute('id','countries')
    let regions = externalService.getCountryListByRegion(parent.value);
    let languages = externalService.getCountryListByLanguage(parent.value);
    let a = [0,4,2,5,3,1];
    if (Number(regions)===0){
        let headerRow = document.createElement('tr'); 
        for (let i = 0; i<6; i++) { 
            let cell = document.createElement('th');
            if (a[i]===0 || a[i]===3){
                cell.setAttribute('onclick',`sorting(${[i]})`);
                cell.className = 'non';
            } 
            if (a[i]===0){
                cell.appendChild(document.createTextNode('Country name'))
            } else if (a[i]===2){
                cell.appendChild(document.createTextNode('World region'))
            } else if (a[i]===1){
                cell.appendChild(document.createTextNode('Flag'))
            } else{
                cell.appendChild(document.createTextNode(Object.keys(languages[0])[a[i]]))
            }
            headerRow.appendChild(cell);
        }
        tbl.appendChild(headerRow);
        for (let i = 0; i<languages.length; i++) { 
            let row = document.createElement('tr'); 
                for (let y = 0; y<6; y++) { 
                    let cell = document.createElement('td'); 
                    if(a[y]===5){
                        let cellText = document.createTextNode(Object.values(Object.values(languages[i])[a[y]]));
                        cell.appendChild(cellText);
                    } else if (a[y] === 1) {
                        let img = document.createElement('img')
                        img.setAttribute('src',`${Object.values(languages[i])[a[y]]}`)
                        cell.appendChild(img);
                    } else {
                        let cellText = document.createTextNode(Object.values(languages[i])[a[y]]);
                        cell.appendChild(cellText);
                    }
                    row.appendChild(cell);
                }
            tbl.appendChild(row);
          }
        appRoot.appendChild(tbl);
        tbl.setAttribute('border', '2');
    } else {
        let headerRow = document.createElement('tr'); 
        for (let i = 0; i<6; i++) { 
            let cell = document.createElement('th');
            if (a[i]===0 || a[i]===3){
                cell.setAttribute('onclick',`sorting(${[i]})`);
                cell.className = 'non';
            }
            if (a[i]===0){
                cell.appendChild(document.createTextNode('Country name'))
            } else if (a[i]===2){
                cell.appendChild(document.createTextNode('World region'))
            } else if (a[i]===1){
                cell.appendChild(document.createTextNode('Flag'))
            } else{
                cell.appendChild(document.createTextNode(Object.keys(regions[0])[a[i]]))
            }
            headerRow.appendChild(cell);
        }
        tbl.appendChild(headerRow);
        for (let i = 0; i<regions.length; i++) { 
            let row = document.createElement('tr'); 
                for (let y = 0; y<6; y++) { 
                    let cell = document.createElement('td'); 
                    if(a[y]===5){
                        let cellText = document.createTextNode(Object.values(Object.values(regions[i])[a[y]]));
                        cell.appendChild(cellText);
                    } else if (a[y] === 1) {
                        let img = document.createElement('img')
                        img.setAttribute('src',`${Object.values(regions[i])[a[y]]}`)
                        cell.appendChild(img);
                    } else {
                        let cellText = document.createTextNode(Object.values(regions[i])[a[y]]);
                        cell.appendChild(cellText);
                    }
                    row.appendChild(cell);
                }
            tbl.appendChild(row);
          }
        appRoot.appendChild(tbl);
        tbl.setAttribute('border', '2');
    }  
}

function sorting(n) {
    let rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    th = document.getElementsByTagName('th');
    if(n===4){
        th[0].className = 'non'
    }else{
        th[4].className = 'non'
    }
    dir = 'asc';
    while (switching) {
        switching = false;
        rows = document.getElementById('countries').rows;
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[n];
            y = rows[i + 1].getElementsByTagName('td')[n];
            if (dir === 'asc') { 
                if (!isNaN(x.innerHTML) && !isNaN(y.innerHTML)){
                    if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        th[n].className = 'desc';
                        break;   
                    } 
                } else if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        th[n].className = 'desc';
                        break;   
                    } 
            } else if (dir === 'desc') {
                if (!isNaN(x.innerHTML) && !isNaN(y.innerHTML)){
                    if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
                        shouldSwitch = true;
                        th[n].className = 'asc';
                        break;   
                    } 
                }else if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    th[n].className = 'asc';
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}
// list of all regions
externalService.getRegionsList();
// list of all languages
externalService.getLanguagesList();
// get countries list by language
externalService.getCountryListByLanguage()
// get countries list by region
externalService.getCountryListByRegion()