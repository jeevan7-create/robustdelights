var animation = bodymovin.loadAnimation ({
    container: document.getElementById('anim'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json'
})

document.getElementById("demo").addEventListener("click", brandTab);

function brandTab() {
    location.href = "home.html";
}
