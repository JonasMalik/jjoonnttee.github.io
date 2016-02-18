function $(id) {
    return document.getElementById(id);
}

function changePortions() {
    if ($("one").checked === true) {
        $("demo").innerHTML = $("one").value * (100 / 30).toFixed(2);
    } else if ($("two").checked === true) {
        $("demo").innerHTML = $("two").value;
    } else if ($("three").checked === true) {
        $("demo").innerHTML = $("three").value;
    } else if ($("four").checked === true) {
        $("demo").innerHTML = $("four").value;
    } else if ($("five").checked === true) {
        $("demo").innerHTML = $("five").value;
    }
}