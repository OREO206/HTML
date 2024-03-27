// kakao = https://developers.kakao.com/
function onKakaoButtonClickHandler(event) {
    window.location.href = 'https://developers.kakao.com/';
}

const kakaoButtonElement = document.getElementById('kakao-button');
kakaoButtonElement.addEventListener('click', onKakaoButtonClickHandler);


// naver = https://developers.naver.com/main/
function onNaverButtonClickHandler(event) {
    window.location.href = 'https://developers.naver.com/';
}

const naverButtonElement = document.getElementById('naver-button');
naverButtonElement.addEventListener('click', onNaverButtonClickHandler);