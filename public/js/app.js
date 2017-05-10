(function() {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(window.location.pathname + 'service-worker.js',{
        scope: window.location.pathname
      }).then( registration => {
        console.log(registration);
      })
      .catch(error => {
        console.log('Registration failed ' + error);
      });
  } else {
    console.log('Update to a modern browser!');
  }

})();
