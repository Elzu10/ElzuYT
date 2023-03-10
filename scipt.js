var button = document.getElementById("klik"),
count = 0;
button.onclick = function() {
    count += 1;
    button.innerHTML = "Nappulaa klikattu: " + count;
};