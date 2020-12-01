
/* código retirado do site
https://insideblock.com/blog/criando-barra-de-aviso-de-cookies-para-sites/
*/

if (!localStorage.pureJavaScriptCookies) {
  document.querySelector(".box-cookies").classList.remove('hide');
}

const acceptCookies = () => {
  document.querySelector(".box-cookies").classList.add('hide');
  localStorage.setItem("pureJavaScriptCookies", "accept");
};

const btnCookies = document.querySelector(".btn-cookies");

btnCookies.addEventListener('click', acceptCookies);