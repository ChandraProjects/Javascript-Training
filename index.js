
(async function () {
    await fetch('./menu.json').then(res => res.json())
        .then(response => {
            createList(response);
        })
})();

function createList(response) {
    for (let key in response) {
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3');
        let titleTab = document.createElement('strong');
        titleTab.innerText = key;
        h3.appendChild(titleTab)
        ul.appendChild(h3);
        response[key].map(element => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', element.url);
            a.innerText = element.title;
            li.appendChild(a);
            ul.appendChild(li);
        });
        document.getElementById('menu_list').appendChild(ul);
    }
}
