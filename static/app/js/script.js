window.addEventListener("load", t => {
    const n = document.getElementById("pasteBtn");
    if (n) {
        n.addEventListener("click", i)
    }
    const e = document.getElementById("clearBtn");
    if (e) {
        e.addEventListener("click", a)
    }
    var o = document.getElementById("myForm");
    if (o) {
        o.addEventListener("submit", c)
    }
}
);
function c() {
    document.cookie = "cloudflares=" + (+new Date / 1e3).toString();
    this.submit();
    event.preventDefault()
}
function i() {
    navigator.permissions.query({
        name: "clipboard-write"
    }).then(t => {
        if (t.state === "granted" || t.state === "prompt") {
            navigator.clipboard.readText().then(t => {
                n.value = t
            }
            )
        }
    }
    )
}
function a() {
    n.value = ""
}
var n = document.getElementById("tweetURL");
