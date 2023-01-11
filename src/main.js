import './scss/style.scss'
import $ from 'jquery';
//VITE環境変数から読み込む
const FromMail = import.meta.env.VITE_MAIL
const Secure = import.meta.env.VITE_SECURE

function sendEmail(email, text) {
  Email.send({
    SecureToken: Secure,
    To: email,
    From: FromMail,
    Subject: "お問合わせありがとうございます。",
    Body: text,
  }).then((message) => alert(message));
}

const form = document.querySelector(".contact-form");
form.addEventListener("click", (e) => {
  e.preventDefault();
});
const button = document.getElementById("form-submit");
button.addEventListener(
  "click",
  function () {
    let email = document.getElementById("email").value;
    if (email === "") {
      const emailMsg = document.getElementById("email_msg");
      emailMsg.classList.add("shown");
      return;
    }
    let name = document.getElementById("name").value;
    let tel = document.getElementById("tel").value;
    let myCampanyName = "株式会社yuche"
    let myaddres = "〒100-0001 東京都千代田区千代田1-1"
    let text =
      `${name} 様<br><br>
        資料請求ありがとうございます。
        <br><br>
        以下の内容で承りました。<br><br>
        Name:${name}<br>
        Email:${email}<br>
        Tel:${tel}<br>
        Message:${document.getElementById("message").value}
        <br><br>
      ========================<br>
      ${myCampanyName}<br>
      ${myaddres}<br>
      ========================`
    sendEmail(email, text);
    let thanks = document.createElement("div")
    thanks.innerHTML = `
    <div class="c-contact__thanks">お問合わせありがとうございます。</div>
  `
    const contact = document.querySelector(".l-contact h1").nextElementSibling
    contact.appendChild(thanks)

    const fields = document.querySelectorAll(".c-contact__field")
    for (const field of fields) {
      field.value = ""
    }
  },
  false
);

