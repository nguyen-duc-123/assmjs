var priceRange = document.getElementById("price-range")
var mylist = document.getElementById("mylist")
var rows = mylist.getElementsByTagName("tr")
var cost = document.getElementsByClassName("cost")
var qty = document.getElementsByName("qty")
var checkboxes = document.getElementsByName("checkbox")
var totalcost = document.getElementById("totalcost")

//Hien thi "none" hoac ""
function styleDisplay(mess) { for (e of rows) e.style.display = mess }


//Hien thi theo range, 0 la infinity
function iteratePriceRange(a, b) {
    styleDisplay("none")
    if (b == 0) {
        b = Infinity
    } 
    else if (a == 0 && b == 0) {
        styleDisplay("")
    }
    for (var i = 0; i < rows.length; i++) {
        var price = +rows[i].children[2].innerText.substring(1)
        if (price > a && price <= b) {
            rows[i].style.display = ""
        }
    }
}

//hien thi price theo value cua select
function showEachList() {
    switch (priceRange.value) {
        case "1":
            iteratePriceRange(0, 100)
            break;
        case "2":
            iteratePriceRange(100, 200)
            break;
        case "3":
            iteratePriceRange(200, 300)
            break;
        case "4":
            iteratePriceRange(300, 400)
            break;
        case "5":
            iteratePriceRange(400, 0)
            break;
        case "6":
            iteratePriceRange(0, 0)
            break;
    }
}

function chon(source) {
    var row = source.parentElement.parentElement
    var qtyInput = row.getElementsByTagName("input")[1]
    if (source.checked == true) {
        qtyInput.disabled = false
    } else {
        qtyInput.disabled = true
    }
}

function countCost() {
    var sum = 0;
    for (var i = 0; i < rows.length; i++) {
        var price = +rows[i].getElementsByTagName("td")[2].innerText.substring(1)
        cost[i].innerText = "$" + qty[i].value * price
        sum += +cost[i].innerText.substring(1)
    }
    totalcost.innerHTML = "$" + sum
}
