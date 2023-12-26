function validate() {
    var name = document.getElementById("name").value;
    var gender = document.getElementsByName("gender");
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if (name.trim().length == "") {
        text = "Vui lòng không để trống tên!";
        error_message.innerHTML = text;
        return false;
    } else if (name.trim().length < 5 || name.trim().length > 30) {
        text = "Vui lòng nhập tên từ 5 - 30 kí tự!";
        error_message.innerHTML = text;
        return false;
    }

    if (!gender[0].checked && !gender[1].checked) {
        text = "Vui lòng chọn giới tính";
        error_message.innerHTML = text;
        return false;
    }

    if (phone.trim() == "") {
        text = "Vui lòng không để trống số điện thoại!";
        error_message.innerHTML = text;
        return false;
    } else if (isNaN(Number(phone))) {
        text = "Vui lòng nhập số điện thoại đúng định dạng!";
        error_message.innerHTML = text;
        return false;
    } else if (phone.trim().length != 10) {
        text = "Vui lòng nhập số điện thoại có 10 số!";
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Vui lòng nhập email!";
        error_message.innerHTML = text;
        return false;
    }

    if (message.trim().length == "") {
    text = "Vui lòng nhập nội dung!";
    error_message.innerHTML = text;
    return false;
    } else if (message.length <= 20) {
        text = "Vui lòng nhập lời nhắn nhiều hơn 20 kí tự!";
        error_message.innerHTML = text;
        return false;
    }
    alert("Gửi dữ liệu thành công!");
    return true;
}