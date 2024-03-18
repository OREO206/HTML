/* 
    데이터 타입

    원시 타입
    - number
    - string
    - boolean
    - null
    - undefined
    - sybol

    객체 타입
    - object
*/

/*
    number : 정수 및 실수를 모두 포함하는 타입
*/
var integer = 10;
var double = 10.0;


/* 
    - number 값들은 표기법만 다르고 값은 같을 수 있음
    데이터 타입까지 비교하기 위해서는 '==='을 씀
    '=='를 쓰면 값만 비교하기 때문에 정수-문자열 타입도 true가 뜰 수 있음
*/
//console.log(integer === double); // type까지 같은 건 ===


/*
    Infinity : 양의 무한대
    -Infinity : 음의 무한대
    NaN : 숫자가 아님
*/
var plus_inf = 1 / 0; // 양의 무한대
//console.log(plus_inf);
var mainus_inf = -1 / 0; // 음의 무한대
//console.log(mainus_inf);
var nan = 1 * 'string';
//console.log(nan);


/*
    string : 문자열 텍스트 타입
    - "", '', ``으로 표현 가능
    - 일반적으로 javascript에서는 ''으로 문자열을 표기
    변수 선언 시 java에서는 lowerCamelCase를 쓰지만 javascript에서는 lower_snake_case를 사용
    값 할당 시 java에서는 ""(쌍따옴표)를 쓰지만 javascript에서는 ''(홑따옴표)를 사용
*/
var name_ = "홍길동";
name_ = '홍길동';
name_ = `홍길동`;


/*
    - javascript의 문자열은 배열처럼 인덱스를 이용해서 접근할 수 있음(유사 배열)
    - javascript는 따로 에러를 출력해주지 않기 때문에 원하는 결과가 출력되지 않을 경우 코드를 봐야 함
*/
for(var index = 0; index < name_.length; index++) {
    // console.log(name_[index]);
}

/*
    - 문자열 데이터는 불변성을 가짐 (변경 불가능)
*/
name_[0] = '고';
// console.log(name_);


/*
    boolean : 논리 참, 거짓을 나타내는 타입
    - 빈 문자열, null, undefined, 0은 false로 간주됨
*/
name_ = [];
if(name_) {
    // console.log('name은 빈 문자열이 아닙니다.')
} // 빈 배열은 true로 인식됨
// ''글자가 아예 없는거고 []는 배열로 돼있는데 값만 없는 것


/*
    undefined : 선언 이후에 값을 초기화 하지 않은 변수는 undefined를 가짐
    - 선언은 되었지만 값을 할당하지 않은 변수
    - 존재하지 않는 객체 속성
*/
var variable;
// console.log(variable);
var obj = {}; // 속성이나 값이 아무것도 없는 빈 객체
// console.log(obj.age);


// javascript는 컴파일 언어가 아니기 때문에 변수 내부의 값에 접근하려는 시도를 함 그때 값이 초기화 되어있지 않으면 undefined라고 출력됨

/*
    null : 의도적으로 변수에 값이 없다는 것을 명시하는 타입
    - 변수에 저장된 메모리 주소를 제거하는 용도
    - 함수의 반환값으로 유효한 값이 없을 때 반환하는 용도
    - null 값은 typeof 타입확인 연산자로 확인하면 object 타입이 반환됨 (단순 자바스크립트 자체의 문제)
*/
obj = null;

// document 스크립트에서 특정한 값을 찾을 때 사용
// var element = document.getElementsByClassName('.class') // class라는 이름을 찾겠다
console.log(element);