(function() {
  'use strict';

   self.addEventListener('install', function(event) {
    // Perform some task
    console.log('Service worker');
    console.log(event);
   });

   self.addEventListener('activate', function(event) {
    // Perform some task
    console.log('Service worker activated');
    console.log(event);
   });
  
})();
