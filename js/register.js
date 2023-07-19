const onRegister = ()=>{
  let emailInput = document.querySelector('#email');
  // 사용자가 email입 input태그에 입력한 값은 
  // emailInput.value 에 들어있다

  let userNameInput = document.querySelector('#username');
  // userNameInput.value에

  let passwordInput = document.querySelector('#password');

  let passwordCheckInput = document.querySelector('#password-check');

  // check에는 true가 들어있다
  let check = true;

  // console.log(emailInput.value);
  // console.log(userNameInput.value);
  // console.log(passwordInput.value);
  // console.log(passwordCheckInput.value);
  let emailErrMsg = document.querySelector('#email-err-msg');

  // 이메일 입력 여부
  if(emailInput.value === ''){ // 이메일을 입력하지 않았다는 소리
    // emailInput.value === '' 가 true 일때 실행되는 공간
    emailErrMsg.style.display = 'block';
    check = false;
  }else{ // 이메일이 입력 되었다는 소리
    emailErrMsg.style.display = 'none';
  }

  // 이름 입력 여부
  let userNameErrMsg = document.querySelector('#username-err-msg');
  if(userNameInput.value === ''){
    userNameErrMsg.style.display = 'block';
    check = false;
  }else{
    userNameErrMsg.style.display = 'none';
  }
  // 비밀번호 입력 여부
  let passwordErrMsg = document.querySelector('#password-err-msg');
  if(passwordInput.value === ''){
    passwordErrMsg.style.display = 'block';
    check = false;
  }else{
    passwordErrMsg.style.display = 'none';
  }
  // 비밀번호 확인 입력 여부
  let passwordCheckErrMsg = document.querySelector('#password-check-err-msg');
  if(passwordCheckInput.value === ''){
    passwordCheckErrMsg.textContent = '비밀번호확인은 필수 입력값입니다.';
    passwordCheckErrMsg.style.display = 'block';
    check = false;
  }else if(passwordCheckInput.value !== passwordInput.value){
    passwordCheckErrMsg.textContent = '비밀번호에 입력된 값가 다릅니다.';
    passwordCheckErrMsg.style.display = 'block';
    check = false;
  }else{
    passwordCheckErrMsg.style.display = 'none';
  }
  
  // if 영역으로 한번도 들어간적이 없다면(모든 값들이 정상적으로 입력되었다는소리)
  // 
  if(check){
    // 모달창을 보여줘
    // alert('회원가입이 성공했습니다!');
    let modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.style.display = 'flex';
  }
}

const moveTo= ()=>{
  // console.log('확인');
  // 메인화면으로 이동시켜줘
  location.replace('../pages/index.html');
}