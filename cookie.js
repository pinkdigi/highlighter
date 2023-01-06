var ckBox = document.querySelector("#ckBox"),
    ckAcptBtn = document.querySelector("#ckAcptBtn"),
    ckAccMes = "Ymm! Cookies Accepted",
    ckErrMes = "Dear! Cookies Can't Be Set, Please Allow Cookies From Your Browser Site Settings.";
if (null != ckBox) {
    ckAcptBtn.onclick = () => {
        document.cookie = "CookieConsent=Accepted; max-age=2592000; path=/", alert(ckAccMes), document.cookie ? ckBox.classList.add("acptd") : alert(ckErrMes)
    }
    let e = document.cookie.indexOf("CookieConsent=Accepted"); - 1 != e ? ckBox.classList.add("hidden") : ckBox.classList.remove("hidden")
}
