document.addEventListener('DOMContentLoaded', () => {
    
    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            
            // Toggle current item
            const isActive = item.classList.contains('active');
            
            // Close all others (optional - good for focus)
            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.accordion-icon').textContent = '+';
            });

            if (!isActive) {
                item.classList.add('active');
                header.querySelector('.accordion-icon').textContent = '−'; // minus sign
            }
        });
    });

    // Sticky Header Scroll Effect (Optional enhancement)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 0';
            header.style.background = 'rgba(35, 19, 12, 0.98)';
        } else {
            header.style.padding = '1rem 0';
            header.style.background = 'rgba(35, 19, 12, 0.95)';
        }
    });

});
