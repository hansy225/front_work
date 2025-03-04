function validata() {
    const idInput = document.getElementById('userId').value;
    const pwInput = document.getElementById('userPw').value;
    const checkPw = document.getElementById('userPw').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // id
    let regExp = /^[a-z][a-z0-9][3,11]$/i;
    if (!regExp.test(idInput)) {
        alert('유효한 아이디를 입력하세요.');
        idInput.value = "";
        idInput.select();
        return false;
    }

    // pw
    regExp = /^[a-z0-9!@#$%^&*]{8,15}$/i;
    if (!regExp.test(pwInput)) {
        alert('유효한 비밀번호를 입력하세요.');
        pwInput.value = "";
        pwInput.focus();
        return false;
    }

    // pw 일치 여부
    if(pwInput != checkPw) {
        alert('위와 동일한 비밀번호를 입력하세요.');
        checkPw = "";
        pwInput.focus();
        return false;
    }

    // 이름
    regExp= /^[가-힣]{2,}$/;
    if (!regExp.text(name)) {
        alert('유효한 이름을 넣어주세요.');
        name.value = "";
        name.focus();
        return false;
    }

    // 이메일(
    // regExp = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;  // .을 쓰려면 \(역슬래시)를 앞에 붙임
    regExp = /^\w+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?$/;
    if (!regExp.test(email)) {
        alert('유효한 이메일을 입력해주세요.');
        email.value = '';
        email.focus();
        return false;
    }


}