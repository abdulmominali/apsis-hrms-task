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
const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/d9TKlMpNN8g:APA91bEN__AI_JUXseRSFVj7N5qQ9Gij_8V6IMdJEJMLFY5BokVvtF5fUU2qevfWzwr9Jk0lw_9MZXucKKbNqr7c3V_zUw7xS3Dc8rWGRvHlAnpquqpbghDgLntQIV3t1Fpk-b1ILfUT","expirationTime":null,"keys":{"p256dh":"BA6X9TJhwqWFfh2CDa8lbu7U3LK4E7eK4NtayF4yUIhGJRiluklIHHQ85KvFmsKaNTQSHfHnXKsd2gmNx8tOrSs","auth":"LEbRY-pJGwmWvPm1s-flLQ"}};


webpush.sendNotification(pushSubscription, payload);
