import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.info('service worker registered'))
    .catch(error => { 
      console.log('ServiceWorker registration failed: ', error)
    })
})
// import { Meteor } from 'meteor/meteor'

// Meteor.startup(() => {
//   // navigator.serviceWorker
//   // .register('/sw.js')
//   // .then(() => console.info('service worker registered'))
//   // .catch(error => { 
//   //   console.log('ServiceWorker registration failed: ', error)
//   // })
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js');
//     console.log('posi');
//   }
//   console.log('nega');

//   // if ("serviceWorker" in navigator) {
//   //   navigator.serviceWorker.register('./sw.js', { scope: "./"    }) //setting scope of sw
//   //     .then(function(registration) {
//   //       // console.info('Service worker is registered!');
//   //     })
//   //     .catch(function(error) {
//   //       // console.error('Service worker failed ', error);
//   //     });
//   // }
//   // console.log('nega');
//   // navigator.serviceWorker
//   //   .register('/sw.js')
//   //   .then(() => console.info('service worker registered'))
//   //   .catch(error => { 
//   //     console.log('ServiceWorker registration failed: ', error)
//   //   })
// })
