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

  //After DOM Loaded
  document.addEventListener('DOMContentLoaded', function(event) {
    toast("online");
    //On initial load to check connectivity
    if (!navigator.onLine) {
      updateNetworkStatus();
    }

    window.addEventListener('online', updateNetworkStatus, false);
    window.addEventListener('offline', updateNetworkStatus, false);
  });

  //To update network status
  function updateNetworkStatus() {
    let header = document.querySelector('header');
    if (navigator.onLine) {
      header.classList.remove('app__offline');
    }
    else {
      header.classList.add('app__offline');
      toast('You are now offline..');
    }
  }

})();
