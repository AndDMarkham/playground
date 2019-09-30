const users = [
  ['John', 12345],
  ['Jane', 11111],
  ['Allen', 54321],
  ['Andrea', 80808],
  ['Lacie', 55555]];

const message = document.querySelector('#access');

const checkUser = () => {
  const getUserName = document.querySelector('#user-name');
  const userName = getUserName.value;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i][0] === userName) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

const checkPassword = (num) => {
  const getPassword = document.querySelector('#password');
  const password = getPassword.value;
  if (num === -1) {
    message.className = 'wrong-username';
    message.textContent = `Wrong username.`;
  } else if (users[num][1] === parseInt(password)) {
    message.className = 'access-granted';
    message.textContent = `Welcome!`;
  } else {
      message.className = 'wrong-password';
      message.textContent = `Fuck you.`;
  }
};





document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#btn');
  btn.addEventListener('click', () => {
    const userID = checkUser();
    console.log(userID);
    checkPassword(checkUser());
  });
});
