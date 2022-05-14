async function getData (){
    let response = await fetch("https://hn.algolia.com/api/v1/search?query=redux")
     data = await response.json()
     console.log(data);
  
    const app = document.getElementById('app');
   
   
    for(let i = 0; i < data.hits.length; i++){
        const cards = document.createElement("div");
        cards.className = "card"
        const card = `
                <div>
                <p>created: <b> ${data.hits[i].created_at}</b></p>
                <p>author: <b> ${data.hits[i].author}</b></p>
                <p>title: <b>${data.hits[i].title}</b></p>
                <p>points:<b>${data.hits[i].points}</b></p>
                </div>
        `

        cards.innerHTML = card; 
        app.appendChild(cards);
    }

}
getData()   





