import React from 'react';
import Image from 'next/image';
import ProfileImg from '../../../../public/assets/profile.jpeg';

const NotificationItem = ({ title, details, time }) => (
  <div className="flex space-x-2 mt-2">
    <div>
      <Image src={ProfileImg} alt="profile" className="sm:h-[64px] sm:w-[64px] h-[32px] w-[32px] rounded-full" />
    </div>
    <div>
      <h1 className="sm:text-sm font-bold text-xs">{title}</h1>
      <h1 className="sm:text-sm text-xs">{details}</h1>
    </div>
    <div>
      <h1 className="sm:text-sm text-xs ml-8">{time}</h1>
    </div>
  </div>
);

const Notifications = () => {
  const notificationsToday = [
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    // Add more notifications as needed
  ];

  const notificationsYesterday = [
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },


    // Add more notifications as needed
  ];

  const notificationsTuesday = [
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    { title: 'New Payment - KPLC', details: 'Ksh 450 for account number 08789727', time: '13:23' },
    // Add more notifications as needed
  ];

  return (
    <div className="flex flex-col items-center mx-8 min-h-screen">
      <div>
        <h1 className="font-bold">Today</h1>
        {notificationsToday.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            details={notification.details}
            time={notification.time}
          />
        ))}
      </div>

      <div>
        <h1 className="font-bold mt-2">Yesterday</h1>
        {notificationsYesterday.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            details={notification.details}
            time={notification.time}
          />
        ))}
      </div>

      <div>
        <h1 className="font-bold mt-2">Tuesday</h1>
        {notificationsTuesday.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            details={notification.details}
            time={notification.time}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
