document.addEventListener('DOMContentLoaded', function() {
    const contactContainer = document.querySelector('.contact-container');
    contactContainer.style.opacity = '0';
    contactContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        contactContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        contactContainer.style.opacity = '1';
        contactContainer.style.transform = 'translateY(0)';
    }, 100);

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // يمكنك إضافة كود الإرسال هنا (مثل استخدام AJAX)
        console.log({
            name,
            email,
            subject,
            message
        });

        alert('تم استلام رسالتك بنجاح! سأتواصل معك قريبًا.');
        this.reset();
    });
});