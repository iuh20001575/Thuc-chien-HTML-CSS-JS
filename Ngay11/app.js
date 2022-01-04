const toasts = {
    success: {
        megs: 'This is a success message !',
        icon: 'fa-check-circle'
    },
    warning: {
        megs: 'This is a warning message !',
        icon: 'fa-exclamation-circle'
    },
    error: {
        megs: 'This is a error message !',
        icon: 'fa-exclamation-triangle'
    }
};

const btns = $('.btn');
const notification = $('.notification');

btns.on('click', function() {
    const type = $(this).data('type');
    const toast = toasts[type];

    notification.append(`
        <div class="toast ${type}"> 
            <div class="icon">
                <i class="fas ${toast.icon}"></i>
            </div>
            <div class="messenger">${toast.megs}</div>
        </div>
    `);
    setTimeout(() => $('.toast:first-child').remove(), 5500);
})