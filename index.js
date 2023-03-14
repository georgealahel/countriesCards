fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {


        
        json.forEach(element => {

        
          
    

                let _Card = `

                    <div class="card h-100 justify-content-center">
                    <img src="${element.flags.png}" class="card-img-top" alt="NoFlag">
                    <div class="card-body">
                      <h5 class="card-title">${element.name.common}</h5>
                      <ul class="list-group list-group-flush">
                     <li class="list-group-item">Capital: ${element.capital && element.capital[0]}</li>
                     <li class="list-group-item">Area: ${element.area} km²</li>
                     <li class="list-group-item">Population: ${element.population}</li>
                    
                      <p class="card-text">
                      </p>
                      <div class="card-footer text-muted">
                    

                      <a href="${element.maps.googleMaps}" class="btn btn-success">Location</a>
      
        </script>
                      </div>
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



