let body = document.getElementsByTagName('body')[0];
let root = document.createElement('div');
let card = document.createElement('section');
let style = document.createElement('style');
let html = `  <div class="card__wrapper">
          <img
            src="https://uifaces.co/our-content/donated/LgPx_hOQ.jpg"
            alt="my-face"
            class="card__user-img"
          />
          <div class="card__info">
            <span class="card__name">David Ajojo</span>
            <span class="card__title">Web Developer</span>
          </div>
          <div class="card__socials">
            <div class="card__icon card__icon--fb">
              <span class="card__icon-box">
                <i class="fab fa-facebook-f"></i>
              </span>
              <span class="card__icon--title">Facebook</span>
            </div>
            <div class="card__icon card__icon--ig">
              <span class="card__icon-box">
                <i class="fab fa-instagram"></i>
              </span>
              <span class="card__icon--title">Instagram</span>
            </div>
            <div class="card__icon card__icon--gh">
              <span class="card__icon-box">
                <i class="fab fa-github-alt"></i>
              </span>
              <span class="card__icon--title">GitHub</span>
            </div>
          </div>
        </div>`;
let cssStyles = `
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Noto Sans JP', sans-serif;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

.card {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(50px);
}

.card__wrapper {
  height: 400px;
  padding: 20px;
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__user-img {
  border: 2px solid #636363;
  height: 70px;
  width: 70px;
  margin: 1.5rem auto 1.5rem auto;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 1px;
  transition: all 0.5s ease-in-out;
}

.card__user-img:hover {
  transform: scale(1.2);
}

.card__info {
  margin-bottom: 0rem;
}

.card__name {
  text-align: center;
  display: block;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #383838;
}

.card__title {
  display: block;
  font-size: 0.7rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #636363;
}

.card__icon {
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  margin-bottom: 0.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
}

.card__icon-box {
  width: 25px;
  display: inline-block;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__icon--title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card__icon--fb {
  color: #3e5d95;
  border: 1px solid #3e5d95;
  transition: all 0.5s ease;
}

.card__icon--fb:hover {
  background: #3e5d95;
  color: white;
  transform: scale(1.03);
}

.card__icon--ig {
  color: #dd2a7b;
  border: 1px solid #dd2a7b;
  transition: all 0.5s ease;
}

.card__icon--ig:hover {
  background: #dd2a7b;
  color: white;
  transform: scale(1.03);
}

.card__icon--gh {
  color: #383838;
  border: 1px solid #383838;
  transition: all 0.5s ease;
}

.card__icon--gh:hover {
  background: #383838;
  color: white;
  transform: scale(1.03);
}
`;

root.classList.add('root');
body.prepend(root);
root.style.cssText = `
background: url('https://images.unsplash.com/photo-1500817904307-e664893dcbab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
background-size: cover;
background-position: center;
`;

card.classList.add('card');
root.prepend(card);

root.append(style);
style.prepend(cssStyles);

document.getElementsByClassName('card')[0].innerHTML = html;
