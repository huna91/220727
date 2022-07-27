// function join_Btn(){
//     let textEmail=input_email.value;
//     let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
//     if (regEmail.test(textEmail) === false) {
//         alert('이메일을 다시 입력해 주세요.');
//     }
// }

//----------------------------content left active--------------------------------
let body = document.querySelector("body");
input_email.addEventListener("click", function () {
  document.querySelector(".sign_email>label").className +=
    " join_box_label_active";
});
input_password.addEventListener("click", function () {
  document.querySelector(".sign_password>label").className +=
    " join_box_label_active";
});
input_password_chk.addEventListener("click", function () {
  document.querySelector(".sign_password_chk>label").className +=
    " join_box_label_active";
});
input_id.addEventListener("click", function () {
  document.querySelector(".sign_id>label").className +=
    " join_box_label_active";
});
body.addEventListener("click", function (event) {
  if (event.target == document.querySelector("#input_email")) {
    document
      .querySelector(".sign_password>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password_chk>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_id>label")
      .classList.remove("join_box_label_active");
    return;
  } else if (event.target == document.querySelector("#input_password")) {
    document
      .querySelector(".sign_email>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password_chk>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_id>label")
      .classList.remove("join_box_label_active");
  } else if (event.target == document.querySelector("#input_password_chk")) {
    document
      .querySelector(".sign_email>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_id>label")
      .classList.remove("join_box_label_active");
  } else if (event.target == document.querySelector("#input_id")) {
    document
      .querySelector(".sign_email>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password_chk>label")
      .classList.remove("join_box_label_active");
  } else {
    document
      .querySelector(".sign_email>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_password_chk>label")
      .classList.remove("join_box_label_active");
    document
      .querySelector(".sign_id>label")
      .classList.remove("join_box_label_active");
  }
});

//----------------------------content right active--------------------------------
document
  .querySelector(".facebook_hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".facebook_span").className += " social_icon_active";
  });
document
  .querySelector(".facebook_hover")
  .addEventListener("mouseleave", function () {
    document
      .querySelector(".facebook_span")
      .classList.remove("social_icon_active");
  });
document
  .querySelector(".kakao_hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".kakao_span").className += " social_icon_active";
  });
document
  .querySelector(".kakao_hover")
  .addEventListener("mouseleave", function () {
    document
      .querySelector(".kakao_span")
      .classList.remove("social_icon_active");
  });
document
  .querySelector(".naver_hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".naver_span").className += " social_icon_active";
  });
document
  .querySelector(".naver_hover")
  .addEventListener("mouseleave", function () {
    document
      .querySelector(".naver_span")
      .classList.remove("social_icon_active");
  });
document
  .querySelector(".google_hover")
  .addEventListener("mouseenter", function () {
    document.querySelector(".google_span").className += " social_icon_active";
  });
document
  .querySelector(".google_hover")
  .addEventListener("mouseleave", function () {
    document
      .querySelector(".google_span")
      .classList.remove("social_icon_active");
  });

//-----------------------------회원가입-----------------------------------
function User(email, password, id) {
  this.email = email;
  this.password = password;
  this.id = id;
}
join_sub_btn.addEventListener("click", join_Btn);
function join_Btn() {
  let textEmail = input_email.value;
  let textPassword = input_password.value;
  let textPasswordChk = input_password_chk.value;
  let textId = input_id.value;

  let regEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  let regPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  // let regPasswordChk = //;
  let regId = /[a-zA-Zㄱ-ㅎ가-힣0-9_]{3,20}/; //3자 이상20자 이내

  if (regEmail.test(textEmail) === false) {
    console.log("이메일을 다시 입력해 주세요.");
  }
  if (regPassword.test(textPassword) === false) {
    console.log("비밀번호를 다시 입력해 주세요.");
  }
  if (textPassword !== textPasswordChk) {
    console.log("입력하신 비밀번호와 다릅니다.");
  }
  if (regId.test(textId) === false) {
    console.log("아이디를 다시 입력해 주세요.");
  }
}
