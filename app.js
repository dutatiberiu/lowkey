// Subtle parallax on mouse move (desktop only)
const cards = document.querySelectorAll('.card');
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

document.addEventListener('mousemove', (e) => {
    if (isTouchDevice) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    cards.forEach((card, i) => {
        const factor = (i === 0) ? 1 : -1;
        card.style.transform = `translate(${x * 3 * factor}px, ${y * 3 * factor}px)`;
    });
});

// Reset transform on mouse leave
document.body.addEventListener('mouseleave', () => {
    cards.forEach(card => {
        card.style.transform = '';
    });
});
