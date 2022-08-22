function myFunc(ev) {
    selectedColor = document.querySelector('input[type="color"]') ? document.querySelector('input[type="color"]').value : 0;
    // console.log(selectedColor);

    // 把顏色轉成rgb形式 (原先是16進位)
    const color = ev.target.value
    const r = parseInt(color.substr(1, 2), 16)
    const g = parseInt(color.substr(3, 2), 16)
    const b = parseInt(color.substr(5, 2), 16)
    // console.log(`${r}, ${g}, ${b}`);

    selectedColor = [r, g, b];

    document.getElementById("mynetwork").style.backgroundColor = "rgb" + "(" + selectedColor.toString() + ")";

    // 開始抓對比色
    const br = 255 - r;
    const bg = 255 - g;
    const bb = 255 - b;
    rvsColor = [br, bg, bb];
    console.log(rvsColor);
}

function addImg() {
    document.getElementById("mynetwork").style.backgroundImage = "url('./img/ocean.jpg')";
}

function toReset() {
    document.getElementById('form').reset();
    document.getElementById("mynetwork").style.backgroundImage = "none";
    document.getElementById("mynetwork").style.backgroundColor  = "#ffffff";
}