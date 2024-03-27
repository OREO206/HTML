// 아이디 입력 시 중복확인 버튼 색 변화

function onIdInputHandler(event){
    const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
    const value = event.target.value;

    if(value){
        checkDuplicateButtonElement.className = 'input-primary-button';
    } else {
        checkDuplicateButtonElement.className = 'input-disable-button';
    }
}

const idInputElement = document.getElementById('id');
idInputElement.addEventListener('input', onIdInputHandler);

/*========================================================================*/
// 이메일 입력 시 이메일인증 버튼 색 변화

function onEmailInputHandler(event){
    const checkEmailButtonElement = document.getElementById('check-email-button');
    const value = event.target.value;

    if(value){
        checkEmailButtonElement.className = 'input-primary-button';
    } else {
        checkEmailButtonElement.className = 'input-disable-button';
    }
}

const emailInputElement = document.getElementById('email');
emailInputElement.addEventListener('input', onEmailInputHandler);

/*========================================================================*/
// 인증번호 입력 시 인증확인 버튼 색 변화

function onAuthNumberHandler(event){
    const authButtonElement = document.getElementById('check-auth-number-button');
    const value = event.target.value;

    if(value){
        authButtonElement.className = 'input-primary-button';
    } else {
        authButtonElement.className = 'input-disable-button';
    }
}

const authNumberElement = document.getElementById('auth-number');
authNumberElement.addEventListener('input', onAuthNumberHandler);

/*========================================================================*/