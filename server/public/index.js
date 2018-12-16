
const url = 'http://localhost:3000/adduser'
var div = document.getElementsByClassName('users')[0],
mdiv = document.getElementsByClassName('search')[0],
frag = document.createDocumentFragment();

fetch("http://localhost:3000/getusers")
.then((response) => response.json())
  .then((json) => {
    for(var i=0; i<json.length; i++){
        
        frag.appendChild(document.createElement('IMG')).src = 'default_profile_img.png'
        frag.appendChild( document.createElement('h5') ).innerHTML =json[i].username;
        frag.appendChild( document.createElement('p') ).innerHTML = json[i].email
        frag.appendChild( document.createElement('p') ).innerHTML = json[i].address
        frag.appendChild(document.createElement('hr'))
        
     }
     div.appendChild(frag)
    console.log(json)
  })
.catch((err) => console.log("Oops, error :("));

    

fetch(url, {
        method: 'post',
        body: JSON.stringify(opts)
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
        console.log("user saved successfully");
});

fetch("http://localhost:3000/findUser")
.then((response) => response.json())
  .then((json) => {
    for(var i=0; i<json.length; i++){
        
        frag.appendChild(document.createElement('IMG')).src = 'default_profile_img.png'
        frag.appendChild( document.createElement('h5') ).innerHTML =json[i].username;
        frag.appendChild( document.createElement('p') ).innerHTML = json[i].email
        frag.appendChild( document.createElement('p') ).innerHTML = json[i].address
        frag.appendChild(document.createElement('hr'))
        
     }
     mdiv.appendChild(frag)
    console.log(json)
  })
.catch((err) => console.log("Oops, error :("));
    