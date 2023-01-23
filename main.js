const markAsRead = document.querySelector('.mark-read')
const notificationCounter = document.getElementById('notification-counter')
const notificationTag = document.querySelectorAll(".user-notification")
const unreadMessages = document.querySelectorAll('.unread');

console.log(unreadMessages)

// // // On clicking each notification, remove unread styles and update

notificationTag.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.toggle('unread')
        const newUnreadMessages = document.querySelectorAll(".unread")
        notificationCounter.innerText = newUnreadMessages.length
    })
})



// // on clicking mark as read, remove unread styles

notificationTag.forEach(notification => {
    markAsRead.addEventListener('click', () => {
        notification.classList.remove('unread');
    })
})


