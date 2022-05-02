// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



let data = async (value) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`);
        res = await res.json();
        display(res);
    } catch (err) {
        console.log(err)
    }

}
let display = ({
    articles
}) => {
    let result = document.querySelector("#results");
    result.innerHTML = null;
    articles.map((ele) => {
        let div = document.createElement("div");
        div.setAttribute("class", "news");
        let div1 = document.createElement("div");
        div1.setAttribute("class", "image")
        let img = document.createElement("img");
        img.src = ele.urlToImage;
        div1.append(img);
        let div2 = document.createElement("div");
        div2.setAttribute("class", "dis");
        let title = document.createElement("h3");
        title.innerText = ele.title;
        let discription = document.createElement("p");
        discription.innerText = ele.description;
        div2.append(title, discription);
        div.append(div1, div2)
        result.append(div);
        div.addEventListener("click",function(){
            show_news(ele);
        })
    })
    console.log(articles)
}
data("in");

function country(value) {
    switch (value) {
        case 1:
            data("in");
            break;
        case 2:
            data("ch");
            break;
        case 3:
            data("us");
            break;
        case 4:
            data("uk");
    }
}
// setTimeout(()=>{
//     document.querySelector("#search_input").addEventListener("onclick",submited);
//     function submited(){
//         event.preventDefault();
//         console.log(1);
//     }
// },100)
let data2 = async (value) => {
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`);
        res = await res.json();
        localStorage.setItem("news_data",JSON.stringify(res));
    } catch (err) {
        console.log(err)
    }

}

function enter(event) {
    if (event.key === "Enter") {
        let value = document.querySelector("#search_input").value;
        data2(value);
        window.location.href="search.html"
    }
    
}
function show_news(ele){
    event.preventDefault();
   //localStorage.setItem("news",JSON.stringify(ele));
   console.log(1);
}