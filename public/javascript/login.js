async function loginFormHandler(event) {
  event.preventDefault();
  
  const password = document.querySelector('#password-login').value.trim();
  const username = document.querySelector('#username-login').value.trim();
  if (username && password) {  
     if (event.target.textContent=="Login"){
        const response = await fetch('/api/users/login', {
          method: 'post',
          body: JSON.stringify({
            username,
            password
          }),
          headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
          document.location.replace('/dashboard/');
        } else {
          alert(response.statusText);
        }
    }
    else{
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
    }
  }
}

function btnHandler(event) {
if (event.target.textContent=="Sign up instead"){
  event.target.textContent="Login instead";
  document.getElementById('btn_submit').textContent="Sign up";
}
else{
  event.target.textContent="Sign up instead";
  document.getElementById('btn_submit').textContent="Login";
}
}


document.getElementById('btn_submit').addEventListener('click', loginFormHandler);
document.getElementById('btn_type').addEventListener('click', btnHandler);

//document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
