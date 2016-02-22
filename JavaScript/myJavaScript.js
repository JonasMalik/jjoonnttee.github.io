var buttonId = ["one", "two", "three", "four", "five"];
var id = localStorage.getItem("myButtonId");

function $(id) {
    return document.getElementById(id);
}

function changePortions() {
    for (var i = 0; i < 5; i++){
         if ($(buttonId[i]).checked === true) {
             $("butter").innerHTML = Math.round((100 / 30) * $(buttonId[i]).value) + " g smör";
             $("sugar").innerHTML = ((1 / 30) * $(buttonId[i]).value).toFixed(2) + " dl socker";
             $("vanillaSugar").innerHTML = ((1 / 30) * $(buttonId[i]).value).toFixed(2) + " msk vanilj socker";
             $("cocoa").innerHTML = (3 / 30) * $(buttonId[i]).value + " msk kakao";
             $("rolledOats").innerHTML = (3 / 30) * $(buttonId[i]).value + " dl havregryn";
             $("coffee").innerHTML = (3 / 30) * $(buttonId[i]).value + " msk kallt starkt kaffe";
             localStorage.setItem("myButtonId", buttonId[i]);
             break;
         }
    }    
}

function afterLoad() {
    if (typeof (Storage) !== "undefined") {
        $(id).checked = true;
        changePortions();
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
