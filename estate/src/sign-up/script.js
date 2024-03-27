// ID,PASSWORD 임시 선언

const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

/*========================================================================*/
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
// 아이디 중복확인 

function onCheckDuplicateClickHandler(event){
    const idValue = document.getElementById('id').value;
    const isDuplicate = idValue === ID;
    const idMessageElement = document.getElementById('id-message');

    if(!idValue){
        return;
    }

    if(isDuplicate){
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디입니다.';
    } else {
        idMessageElement.className = 'input-message primary';
        idMessageElement.textContent = '사용 가능한 아이디입니다.';
    }
}

const checkDuplicateButtonElement = document.getElementById('id-message');
checkDuplicateButtonElement.addEventListener('input', onCheckDuplicateClickHandler);

/*========================================================================*/
// 이메일 중복확인 

function onCheckEmailClickHandeler(event){
    const emailValue = emailInputElement.value;
    const emailMessageElement = document.getElementById('email-message');

    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\\.[a-zA-Z]{2,4}$/;
    const isEmail = emailReg.test(emailValue);

    if(!isEmail){
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';

        return;
    }


    const isDuplicateEmail = emailValue === EMAIL;

    if (isDuplicateEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용 중인 이메일 입니다.';

        return;
    }

    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.';
}

const checkEmailButtonElement = document.getElementById('check-email-button');
checkEmailButtonElement.addEventListener('click', onCheckEmailClickHandeler);

/*========================================================================*/
