(function() {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js',{
        scope: '/'
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
