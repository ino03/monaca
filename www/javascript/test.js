window.onload = function hoge(){
    var imglist = new Array(
        "omikuji-daikichi.png",
        "omikuji-chuukichi.png",
        "omikuji-hei.png",
        "f-syoukichi.jpg",
        "y-kichi.jpg"
        );
        
    var selectnum = Math.floor(Math.random() * imglist.length);
    document.getElementById("imgname").src = "images/" + imglist[selectnum];
}