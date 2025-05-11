
document.addEventListener('DOMContentLoaded', () => {
    console.log('LongSmart Strategy site loaded.');
});

function animateValue(id, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = range / (duration / 10);
    const obj = document.getElementById(id);
    const timer = setInterval(() => {
        current += increment;
        obj.textContent = "$" + current.toFixed(2);
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            clearInterval(timer);
        }
    }, 10);
}

document.addEventListener('DOMContentLoaded', () => {
    animateValue("roi-value", 0, 14350.76, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const referral = 'LS-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const refSpan = document.getElementById('referral-id');
    if (refSpan) {
        refSpan.textContent = referral;
    }
});
