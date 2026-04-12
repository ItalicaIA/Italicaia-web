document.addEventListener('DOMContentLoaded', () => {

    // 1. FAQ Accordion Logic
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('[data-lucide]');

            // Close all others
            faqButtons.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    const otherContent = otherBtn.nextElementSibling;
                    const otherIcon = otherBtn.querySelector('[data-lucide]');
                    otherContent.classList.add('hidden');
                    otherIcon.classList.remove('rotate-180');
                    otherBtn.parentElement.classList.remove('border-brand-indigo/50');
                }
            });

            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
                btn.parentElement.classList.add('border-brand-indigo/50');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
                btn.parentElement.classList.remove('border-brand-indigo/50');
            }
        });
    });



    // 3. Form Submit Simulation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');

    // El formulario de contacto ahora usa el envío nativo de HTML hacia FormSubmit
    // para permitir el proceso de activación inicial (ReCaptcha).
    contactForm.addEventListener('submit', (e) => {
        // Permitimos el envío nativo en lugar de AJAX para la validación inicial
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Redirigiendo...`;
        lucide.createIcons();
        submitBtn.classList.add('opacity-75');
        });

    // 4. Cookie Banner Logic
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const rejectCookiesBtn = document.getElementById('rejectCookies');

    if (cookieBanner && acceptCookiesBtn && rejectCookiesBtn) {
        // Check if consent already exists
        const cookieConsent = localStorage.getItem('cookieConsent');
        
        if (!cookieConsent) {
            // Show banner after a short delay for smooth animation
            setTimeout(() => {
                cookieBanner.classList.remove('translate-y-full');
            }, 500);
        }

        const hideBanner = (status) => {
            localStorage.setItem('cookieConsent', status);
            cookieBanner.classList.add('translate-y-full');
        };

        acceptCookiesBtn.addEventListener('click', () => hideBanner('accepted'));
        rejectCookiesBtn.addEventListener('click', () => hideBanner('rejected'));
    }
});
