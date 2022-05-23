const username=document.getElementById('username');
const password=document.getElementById('userpassword');
const login=document.querySelector('form .submit');

const username_pattrern=/^[a-z0-9_-]{3,16}$/;
const password_pattrern=/^[A-Za-z0-9_\.]{6,32}$/;

const username_erro=document.querySelector('form .username_erro');
const userpassword_erro=document.querySelector('form .userpassword_erro');

login.addEventListener('click',(event)=>{
    let value_username=username.value;
    let value_password=password.value;
    if(value_username.length==0)
    {
        username_erro.style.display='block';
    }
    else
    {
        if(!value_username.match(username_pattrern))
        {
            username_erro.style.display='block';
            username_erro.textContent='Tài khoản không đúng dịnh dạng';
        }
        else
        {
            username_erro.style.display='none';
        }
    }
    if(value_password.length==0)
    {
        userpassword_erro.style.display='block';
    }
    else
    {
        userpassword_erro.style.display='none';
    }
    event.preventDefault();
})











