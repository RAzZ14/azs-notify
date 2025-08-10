const notificationContainer = document.getElementById('notification-container');

const icons = {
    success: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>`,
    error: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`,
    info: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>`,
    warning: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10.297 3.328a1.5 1.5 0 011.406 0l7.399 12.18c.553.91-.01 2.012-1.054 2.012H4.952c-1.045 0-1.607-1.102-1.054-2.012l7.399-12.18z"></path><path d="M12 9v4"></path><path d="M12 16h.01"></path></svg>`
};

window.addEventListener('message', (event) => {
    const { action, type, message, duration, config } = event.data;

    if (action === 'notify') {
        applyPosition(config.position);
        createNotification(type, message, duration, config);
    }
});

function applyPosition(position) {
    if (!position || !notificationContainer) return;

    notificationContainer.style.top = 'auto';
    notificationContainer.style.bottom = 'auto';
    notificationContainer.style.left = 'auto';
    notificationContainer.style.right = 'auto';
    notificationContainer.style.transform = 'none';
    notificationContainer.style.flexDirection = 'column';

    switch (position) {
        case 'top-right':
            notificationContainer.style.top = '30px';
            notificationContainer.style.right = '30px';
            break;
        case 'bottom-right':
            notificationContainer.style.bottom = '30px';
            notificationContainer.style.right = '30px';
            notificationContainer.style.flexDirection = 'column-reverse';
            break;
        case 'top-left':
            notificationContainer.style.top = '30px';
            notificationContainer.style.left = '30px';
            break;
        case 'bottom-left':
            notificationContainer.style.bottom = '30px';
            notificationContainer.style.left = '30px';
            notificationContainer.style.flexDirection = 'column-reverse';
            break;
        case 'top-center':
            notificationContainer.style.top = '30px';
            notificationContainer.style.left = '50%';
            notificationContainer.style.transform = 'translateX(-50%)';
            break;
        case 'bottom-center':
            notificationContainer.style.bottom = '30px';
            notificationContainer.style.left = '50%';
            notificationContainer.style.transform = 'translateX(-50%)';
            notificationContainer.style.flexDirection = 'column-reverse';
            break;
    }
}

function createNotification(type, message, duration, config) {
    if (config.play_sound) {
        const audio = new Audio(`./${config.sound_file}`);
        audio.volume = config.sound_volume;
        audio.play();
    }

    const notif = document.createElement('div');
    notif.classList.add('notification', type);

    notif.innerHTML = `
        <div class="icon-container">${icons[type] || ''}</div>
        <div class="message">${message}</div>
        <div class="progress-bar"></div>
    `;

    notificationContainer.appendChild(notif);

    const progressBar = notif.querySelector('.progress-bar');
    progressBar.style.animation = `progress ${duration}ms linear forwards`;

    setTimeout(() => {
        notif.style.animation = 'slideFadeOut 0.5s ease forwards';
    }, duration);

    notif.addEventListener('animationend', (event) => {
        if (event.animationName === 'slideFadeOut') {
            notif.remove();
        }
    });
}