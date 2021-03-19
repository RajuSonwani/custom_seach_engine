function get() {
    let val = document.getElementById("input").value;
    if(val.length == 0){
        alert("Please Type Something in Input")
    }
    else if (val.includes(".com", ".in", ".org", ".gmail")) {
        document.getElementById("embed").setAttribute("src", "https://" + val);
        // console.log(v)
    } else {
        document.getElementById("embed").setAttribute("src", "https://www.google.com/search?igu=1&q=" + val)
    }
}
