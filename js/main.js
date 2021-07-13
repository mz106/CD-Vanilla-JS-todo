// console.log('hi')
// const entryForm = document.getElementById('entry-form');
// const entryTextbox = document.getElementById('entrytextbox');
// const submit = document.getElementById('submit');
// const entries = document.getElementById('entries');

// const makeEntry = (event) => {
//     console.log('works')
//     event.preventDefault;
//     const entryDiv = document.createElement('div');
//     entryDiv.className = 'single-entry';
//     entryDiv.innerHTMl = entryTextbox.value;
//     entries.appendChild(entryDiv);
//     entryTextbox.value = '';
//     console.log('still works')
// };

// entryForm.addEventListener('submit', makeEntry);

// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const entries = document.getElementById('entries');
// const entryHolder = document.getElementsByClassName('entry--holder');
// let index = 0;

// const makeEntry = (event) => {
//     event.preventDefault;
//     const entryDiv = document.createElement('div');
//     entryDiv.className = 'list__entry';
//     entryDiv.id = 'listEntry';
//     entryDiv.innerHTML = input.value;
//     entryHolder[index].appendChild(entryDiv);
//     index++;
//     input.value = '';
// }; 

// btn.addEventListener('click', makeEntry)


// const findEntry = () => {
    
//     for (let i = 0; i < entryHolder.length; i++) {
//         entryHolder[i].addEventListener('click', function() {
//             entryHolder[i].remove(entryHolder[i].childNodes[entryHolder[i].childNodes.length - 1])
//             console.log('Clicked index:' + ' ' + i)
//         })
//     }
// };

// findEntry()

const input = document.getElementById('input');
const btn = document.getElementById('btn');
const entries = document.getElementById('entries');
const entryHolder = document.getElementsByClassName('entry--holder');
let index = 0;

const makeEntry = (event) => {
    console.log(index)
    entryHolder[index].innerHTML += `${input.value}`
    if (index === 4) {
        index = 0;
    } else {
        index ++;
    }
    console.log(index)
    input.value = '';
}; 

btn.addEventListener('click', makeEntry)


const findEntry = () => {
    
    for (let i = 0; i < entryHolder.length; i++) {
        entryHolder[i].addEventListener('click', function() {
            entryHolder[i].innerHTML = ' ';
            console.log('Clicked index:' + ' ' + i)
        })
    }
};

findEntry()


  


