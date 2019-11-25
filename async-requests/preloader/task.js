let xhr = new XMLHttpRequest();

xhr.open('GET', ' https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', event => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        let loader = document.getElementById('loader');
        loader.classList.remove('loader_active');
        
        let data = JSON.parse(xhr.responseText);
        let currencies = data.response.Valute;
        let values = Array.from(Object.values(currencies));
        
        let items = document.querySelector('#items');
        for(let i = 0; i < values.length; i++) {
            items.insertAdjacentHTML('beforeend', `   
            <div class="item">       
            <div class="item__code">
                ${values[i].CharCode}
            </div>
            <div class="item__value">
                ${values[i].Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
            </div>
            
            `);

        };
        

       
    
        

        };
    });