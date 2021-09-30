const webpush = require('web-push');

//let vapidKeys = webpush.generateVAPIDKeys();
//console.log(vapidKeys);
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BGxoxpakbEPh1xT3LO7xFFtaHlmicfXX0FHuWNX4buDm7zEi7DoXe9GKC8KNSJXqnWdoT8_2Oo-uv40Q8yyTScE',
  privateKey: 'i1O0viWe1jyIa1LVmKISJUgFupy9BL08UujM7CDj0OQ'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const payload = JSON.stringify({
  body: 'Here is a notification body!',
  icon: 'https://apsissolutions.com/wp-content/uploads/2021/02/APSIS-Solutions-Header-Logo.png',
  vibrate: [100, 50, 100],
  data: {
    dateOfArrival: Date.now(),
    primaryKey: 1
  },
  actions: [
    {action: 'explore', title: 'Explore this new world',
      icon: 'images/checkmark.png'},
    {action: 'close', title: 'Close notification',
      icon: 'images/xmark.png'},
  ]
});

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/cZKH0W6WM4Y:APA91bFel9x-qigFIEECNkFNAD6uhDQU_s5YCnrQf01Bh5E9CX93hBNqdii_jQACZiRBacsIdzHhGclKvLtkD7ZTj6E-J0FKaKknVvxBz03cBdQwe8xUdHoAS4fkJ0l1up5zT7xLxfAq","expirationTime":null,"keys":{"p256dh":"BPUSjundJaaF2xZ6aWFVJwARWW5vEupnLg71S_bsW-nH0gZxACvmtR4rc2fXSpwk68TSw4wo5DvjwtIimMMNPs0","auth":"llu_hO59mrBag2JxoZ0Nfg"}};

webpush.sendNotification(pushSubscription, payload);
