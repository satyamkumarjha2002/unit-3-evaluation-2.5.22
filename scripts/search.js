// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {display} from "../components/import.js"
let data = JSON.parse(localStorage.getItem("news_data"));
data = data;
display(data);
function enter(event){
    console.log(event)
}
