
function Check(){
    var tsp = document.querySelector("#tsp").value;
    if (tsp== ""){
        alert("Mời bạn điền tên sản phẩm");
        return false;
    }
    var msp = document.querySelector("#msp").value;
    if (msp== ""){
        alert("Mời bạn điền mã sản phẩm");
        return false;
    }
    var gsp = document.querySelector("#gsp").value;
    if (gsp== ""){
        alert("Mời bạn điền giá sản phẩm");
        return false;
    }
    var nsx = document.querySelector("#nsx").value;
    if (nsx== ""){
        alert("Mời bạn điền nơi sản xuất");
        return false;
    }
    var lha = document.querySelector("#lha").value;
    if (lha== ""){
        alert("Mời bạn điền link hình ảnh");
        return false;
    }
 
}
var products =[];
    function Check(){
    var x={}
    x.tsp = document.getElementById("tsp").value;
    x. msp = document.getElementById("msp").value;
    x.gsp = document.getElementById("gsp").value;
    x.nsx = document.getElementById("nsx").value;
    x.lha = document.getElementById("lha").value;
    products.push(x);

    var iDiv =document.createElement("div");
    iDiv. id =products.length;
    document.getElementsByTagName("body")[0].appendChild (iDiv);
    var element = document.getElementById(products.length);

    var span= document.createElement("span");
    var tspSpan =document.createTextNode("Tên sản phẩm:"+x.tsp+"---");
    span.appendChild(tspSpan);
    element.appendChild(span);

    var span= document.createElement("span");
    var mspSpan= document.createTextNode("Mã sản phẩm"+x.msp+"---");
    span.appendChild(mspSpan);
    element.appendChild(span);

    var span= document.createElement("span");
    var gspSpan= document.createTextNode("Giá sản phẩm"+x.gsp+"---");
    span.appendChild(gspSpan);
    element.appendChild(span);

    var span= document.createElement("span");
    var mspSpan= document.createTextNode("Nơi sản xuất"+x.nsx+"---");
    span.appendChild(nsxSpan);
    element.appendChild(span);

    var span= document.createElement("span");
    var lhaSpan= document.createTextNode("Link hình ảnh"+x.lha+"---");
    span.appendChild(lhaSpan);
    element.appendChild(span);
    }
    