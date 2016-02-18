var buttonId = ["one", "two", "three", "four", "five"];


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
             break;
         }
    }    
}
