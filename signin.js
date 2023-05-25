function sign_in() {
    var cb = document.getElementById("check_box").checked;
    var name = document.getElementById("name");
    var numberphone = document.getElementById("numberphone");
    var email = document.getElementById("email");
    var passWord1 = document.getElementById("passwordnew").value;
    var passWord2 = document.getElementById("passwordold").value;
    var kq = passWord1.localeCompare(passWord2);
    var mess = document.getElementById("messenger");
    if (name.length == 0 || numberphone.length == 0 || email.length == 0 || passWord1 == 0) {
        mess.innerHTML = "Không được để trống thông tin ";
    } else {

        if (kq === 0) {

            if (cb) {
                
                window.location.href = "login.html";
                
            }
            else {
                mess.innerHTML = "Vui lòng xác nhận điều khoản"
            }
        }
        else {
            passWord2.value ="123";
            mess.innerHTML = "Hai mật khẩu không giống nhau";
        }

    }
}