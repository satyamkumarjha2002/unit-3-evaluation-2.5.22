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
        div.addEventListener("onclick",function(){
            show_news(ele);
        })
    })
    console.log(articles)
}
export {display}