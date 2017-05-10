(function() {
  'use strict';

  let toastContainer = document.createElement('div');
  let toastBody = document.createElement('div');

  if (!document.body.querySelector('.toast__container')) {
    addToastToDocument();
  }

  function addToastToDocument() {
    // let toastHtml = `
    //     <div class='toast'>
    //       <div class='toast__container'> Hye! </div>
    //     </div> 
    //   `;    
    
    toastContainer.setAttribute('class', 'toast__container toast_container--hide');
    toastBody.setAttribute('class', 'toast__body');
    toastContainer.appendChild(toastBody);
    document.body.appendChild(toastContainer);
  }

  function toast(message, options) {
    toastContainer.classList.remove('toast_container--hide');
    toastBody.innerHTML = message;

    setTimeout(() => {
      toastContainer.classList.add('toast_container--hide');
    }, 3000);
  }

  window.toast = toast;

})();
