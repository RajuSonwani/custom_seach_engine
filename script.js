function get() {
    let value = document.getElementById("input").value;
    console.log(value);
    if (value.includes(".com", ".in", ".org", ".gmail")) {
        document.getElementById("embed").setAttribute("src", "https://" + value);
        // console.log(v)
    } else {
        document.getElementById("embed").setAttribute("src", "https://www.google.com/search?igu=1&q=" + value)
    }
}