function getLADataFromAPI(){
  
  var imageArray = [
        'https://www.fairobserver.com/wp-content/uploads/2014/05/shutterstock_174099311-938x535.jpg',
        'http://sharing.fox47news.com/sharewxyz/photo/2016/09/28/Generic-gavel-jpg_1475090603693_47061163_ver1.0_640_480.jpg',
        'http://mediaweb.kirotv.com/photo/2017/01/29/air1_20170129223802997_7185113_ver1.0_640_360.jpg',
        'http://www.cartoonistgroup.com/properties/benson/art_images/cg55b990646aec1.jpg',
        'http://ww4.hdnux.com/photos/57/07/73/12353235/3/1024x1024.jpg',
        'https://sunbeamwsvn.files.wordpress.com/2017/02/170211_immigration_workshop.jpg',
        'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F30098009%2F179599972584%2F1%2Foriginal.jpg?w=1000&rect=0%2C114%2C480%2C240&s=60b30a46119171a40ff25caff572993c',
        'http://www.migrationpolicycentre.eu/images/events/MPCseminardiversity.png'
    ]
  
    var endpoint = 'https://data.lacity.org/resource/ghu5-z54x.json'
    var inputEl = document.getElementById('search')
    var searchTerm = inputEl.value
    
    fetch(endpoint) // returns a promise
    .then(function(data){
        return data.json()
    })

    .then(function(json){
        // console.log(json)
        var resultDiv = document.getElementById('result')
        var finalHTML = ''
        var newData = json.filter(function(item){
          return item.location_zip === searchTerm
        })
        
        
        newData.forEach(function(item){
          var randomNumber = Math.floor(Math.random() * imageArray.length);
          
            var cardItem =
            `
            <div class="col s6 m4">
              <div class="card">
                <div class="card-image">
                  <img src=${imageArray[randomNumber]} />
                  <span class="card-title">${item.location_zip}</span>
                </div>
                <div class="card-content">
                  <p>
                  In ${item.location_city}, the organization ${item.organization} listed: ${item.notes}
                  </p>
                  <li>Date: ${item.date_of_event}</li>
                  <li>Language: ${item.language}</li>
                  <li>Contact: ${item.contact}</li>
                </div>
              </div>
            </div>
            `            
             
            
            finalHTML += cardItem
            
        })

        document.getElementById('result').innerHTML = finalHTML
        console.log(newData)
    })
    
    .catch(function(error){
        console.log(error)
    })
}