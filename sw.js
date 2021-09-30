self.addEventListener('push', function(e) {
  var options = {
    body: 'A This notification was generated from a push!',
    icon: 'https://apsissolutions.com/wp-content/uploads/2021/02/APSIS-Solutions-Header-Logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {action: 'explore', title: 'Explore this new world',
        icon: 'https://apsissolutions.com/wp-content/uploads/2021/02/APSIS-Solutions-Header-Logo.png'},
      {action: 'close', title: 'Close',
        icon: 'https://apsissolutions.com/wp-content/uploads/2021/02/APSIS-Solutions-Header-Logo.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});