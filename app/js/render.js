'use strict';

let notify = function() {
  let myNotification = new Notification('Title', {
      body: 'Lorem Ipsum Dolor Sit Amet'
  });
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
  console.log('Notification');
}
