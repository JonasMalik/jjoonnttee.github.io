var buttonId = ["one", "two", "three", "four", "five"];
var id = localStorage.getItem("myButtonId");

function getMyId(id) {
    return document.getElementById(id);
}

function changePortions() {
    for (var i = 0; i < 5; i++){
         if (getMyId(buttonId[i]).checked === true) {
             getMyId("butter").innerHTML = Math.round((100 / 30) * getMyId(buttonId[i]).value) + " g smör";
             getMyId("sugar").innerHTML = ((1 / 30) * getMyId(buttonId[i]).value).toFixed(2) + " dl socker";
             getMyId("vanillaSugar").innerHTML = ((1 / 30) * getMyId(buttonId[i]).value).toFixed(2) + " msk vanilj socker";
             getMyId("cocoa").innerHTML = (3 / 30) * getMyId(buttonId[i]).value + " msk kakao";
             getMyId("rolledOats").innerHTML = (3 / 30) * getMyId(buttonId[i]).value + " dl havregryn";
             getMyId("coffee").innerHTML = (3 / 30) * getMyId(buttonId[i]).value + " msk kallt starkt kaffe";
             localStorage.setItem("myButtonId", buttonId[i]);
             break;
         }
    }    
}

function afterLoad() {
    if (typeof (Storage) !== "undefined") {
        getMyId(id).checked = true;
        changePortions();
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}
