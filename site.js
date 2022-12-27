function A_dangnhap() {
    var txt1 = document.getElementById('textA');
    var txt2 = document.getElementById('textB');
    if(txt1.value == "mmx2003" && txt2.value == "mmx2003") {
        window.location.href='./webpage1.html';
    }
    else {
        alert("sai tài khoản và mật khẩu");
    }
}
function Xoa() {
    var txt1 = document.getElementById('textA');
    var txt2 = document.getElementById('textB');
    txt1.value = "";
    txt2.value = "";
}