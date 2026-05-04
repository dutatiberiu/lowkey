const cards = document.querySelectorAll('.card');
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (!isTouchDevice) {
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const r  = card.getBoundingClientRect();
            const cx = r.left + r.width  / 2;
            const cy = r.top  + r.height / 2;
            const dx = (e.clientX - cx) / (r.width  / 2);
            const dy = (e.clientY - cy) / (r.height / 2);

            card.style.transform =
                `perspective(700px) rotateX(${-dy * 10}deg) rotateY(${dx * 10}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}
