var images = [];
for (var i = 0; i < 5; i++) {
    images[i] = new Image();
    images[i].src = i + ".jpg";
}
var img = document.getElementById('pic');
var count = document.getElementById('count')
var slide = 0;
function next() {
    slide++;
    if (slide >= images.length) {
        slide = 0;
    }
    count.innerHTML = "Image " + ( slide + 1 )+ "/5";
    var anh = img;
    anh.src = images[slide].src;
}
function prev() {
    slide--;
    if (slide < 0) {
        slide = images.length - 1;
    }
    count.innerHTML = "Image " + ( slide + 1 )+ "/5"
    var anh = img;
    anh.src = images[slide].src;
}
var dsdk = document.getElementById('dsdk');
var totalcost = document.getElementById('totalcost')
var tongtien = 0;
function subscribe(btn) {
    var row = btn.parentElement.parentElement.cloneNode(true);
    dsdk.appendChild(row);
    var btnHuy = row.getElementsByTagName('button')[0];
    btnHuy.innerText= "Huỷ đăng ký";
    btnHuy.setAttribute('onclick','Unsubscribe(this)');
    var td_row = row.getElementsByTagName('td');
    tongtien += Number(td_row[3].innerText);
    totalcost.innerText = tongtien;
}
function Unsubscribe(btn) {
    var row = btn.parentElement.parentElement;
    var td_row = row.getElementsByTagName('td');
    tongtien = tongtien - Number(td_row[3].innerText);
    totalcost.innerText = tongtien;
    dsdk.removeChild(row);
}




