// 12-05-2014
// Torben Knulst©

var arrayList = [];
var tabId = 0;

// Haal string op uit index.html na druk op knop
function wishCreate()
{
    var getString = document.getElementById("string").value;

    addToWishList(getString);
}

function getWishList()
{

}

// Voeg wish toe aan wishlist
function addToWishList(str)
{
    var wishList = str;
    tabId++;
    arrayList.push(str);

    var wishTable = document.getElementById("wishList");
    var row = wishTable.insertRow(0);
    row.id = "t" + tabId;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = "<input type='button' onclick='deleteFromWishList(this)' id='" + tabId + "' value='Ungrant little wish'>";
    cell2.innerHTML = wishList;

    console.log("[Wishlist array]: " + arrayList);
    console.log(arrayList.length);
}

// Haal wish van de wishlist af
function deleteFromWishList(e)
{
    var toDelete = e.id;
    var wishTable = document.getElementById("wishList");
    var wishRow = document.getElementById("t" + toDelete);

    console.log();
}