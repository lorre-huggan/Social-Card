const user = {
  firstName: 'David',
  lastName: 'Adjojo',
  occupation: 'Software Developer',
  userImg: 'https://uifaces.co/our-content/donated/LgPx_hOQ.jpg',
  userBackground:
    'https://images.unsplash.com/photo-1615150044410-3d9bb804959e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  socials: [
    {
      id: 'fb',
      service: 'Facebook',
      url: 'https://www.facebook.com',
      icon: 'fab fa-facebook-f',
    },
    {
      id: 'ig',
      service: 'Instagram',
      url: 'https://www.instagram.com',
      icon: 'fab fa-instagram',
    },
    {
      id: 'gh',
      service: 'GitHub',
      url: 'https://www.github.com',
      icon: 'fab fa-github-alt',
    },
    {
      id: 'db',
      service: 'Dribble',
      url: 'https://www.dribbble.com',
      icon: 'fab fa-dribbble',
    },
  ],
};

let cardApp = (user) => {
  let body = document.getElementsByTagName('body')[0];
  let root = document.createElement('div');
  let card = document.createElement('section');
  let style = document.createElement('style');
  let name = user.firstName + ' ' + user.lastName;
  let html = `  <div class="card__wrapper">
          <img
            src="${user.userImg}"
            alt="my-face"
            class="card__user-img"
          />
          <div class="card__info">
            <span class="card__name">${name}</span>
            <span class="card__title">${user.occupation}</span>
          </div>
          <div class="card__socials">
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
  height: 500px;
  padding: 20px;
  max-width: 370px;
  width: 100%;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 62px 0px rgba(0, 0, 0, 0.22);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card__user-img {
  border: 3px solid #636363;
  height: 120px;
  width: 120px;
  margin: 3rem auto 1.5rem auto;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 1px;
  
  transition: all 0.5s ease-in-out;
  
}

.card__user-img:hover {
  transform: scale(1.2);
  border: 6px solid #3e5d95;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.52);
  
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
  transform: scale(1.05);
}

.card__icon--ig {
  color: #dd2a7b;
  border: 1px solid #dd2a7b;
  transition: all 0.5s ease;
}

.card__icon--ig:hover {
  background: #dd2a7b;
  color: white;
  transform: scale(1.05);
}

.card__icon--gh {
  color: #383838;
  border: 1px solid #383838;
  transition: all 0.5s ease;
}

.card__icon--gh:hover {
  background: #383838;
  color: white;
  transform: scale(1.05);
}

.card__icon--db {
  color: #d00000;
  border: 1px solid #d00000;
  transition: all 0.5s ease;
}

.card__icon--db:hover {
  background: #d00000;
  color: white;
  transform: scale(1.05);
}
a {
    text-decoration: none;
    
}
// a:visited{
//     color: black;
// }
`;

  root.classList.add('root');
  body.prepend(root);
  root.style.cssText = `
background: url('${user.userBackground}');
background-size: cover;
background-position: center;
`;
  root.prepend(card);
  root.append(style);

  card.classList.add('card');
  style.prepend(cssStyles);
  document.getElementsByClassName('card')[0].innerHTML = html;

  let cardSocials = card.getElementsByClassName('card__socials')[0];

  user.socials.forEach((item) => {
    let tempNode = document.createElement('a');
    tempNode.href = `${item.url}`;
    tempNode.classList.add('card__icon', `card__icon--${item.id}`);

    tempNode.innerHTML = `
            
              <span class="card__icon-box">
                <i class="${item.icon}"></i>
              </span>
              <span class="card__icon--title">${item.service}</span>
            `;

    cardSocials.append(tempNode);
  });
};

cardApp(user);
