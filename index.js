fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {

        json.forEach(element => {

                let _Card = `

                    <div class="card h-100">
                    <img src="${element.flags.png}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${element.name.common}</h5>
                      <p class="card-text">
                      Capital: ${element.capital && element.capital[0]}<br>
                      Area: ${element.area} km²<br>
                      Population: ${element.population}<br></p>
                    </div>
                  </div>
                </div>
  
  ` 

 
                let cardColumns = document.createElement('div');
                cardColumns.className = 'col-lg-3 col-sm-5';
                cardColumns.innerHTML = _Card;

                let card = document.createElement('div');
                card.className='col-lg-1 col-sm-1'
                
                document.getElementById('cards').appendChild(card);
                document.getElementById('cards').appendChild(cardColumns);

});



})



