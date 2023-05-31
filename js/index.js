const accountOpener = document.querySelector('.account-info ');
const accountInfoDrop = document.querySelector('.account-info-menu ');

accountOpener.addEventListener('click'  , ()=>{
    accountInfoDrop.classList.toggle('close-account');
})

function inputPrevent(e){
    console.log(e)
  
}
