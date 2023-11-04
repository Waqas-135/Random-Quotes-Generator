const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")

const apiURL = "http://api.quotable.io/random"


async function getquotes(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating..."
        authorEl.innerText = "Updating..."

        const response = await fetch(apiURL);
        const data = await response.json(); 
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor
        // console.log(data);
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;

    } catch (error) {
        quoteEl.innerText = "An Error Occured"
        authorEl.innerText = "Networ Problem"

        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;

        
    }

   

}

getquotes()


btnEl.addEventListener("click", ()=>{ 
    
    getquotes()
})