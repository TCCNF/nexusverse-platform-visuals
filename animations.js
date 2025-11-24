// Hero Canvas Animation
const heroCanvas = document.getElementById('heroCanvas');
if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    heroCanvas.width = 600;
    heroCanvas.height = 600;

    function drawHeroAnimation() {
        ctx.fillStyle = '#0a0e27';
        ctx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

        const centerX = heroCanvas.width / 2;
        const centerY = heroCanvas.height / 2;

        // Glowing center
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
        gradient.addColorStop(0, 'rgba(122, 95, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(0, 242, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(122, 95, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
        ctx.fill();

        // Character silhouette
        ctx.fillStyle = '#00f2ff';
        ctx.beginPath();
        ctx.arc(centerX, centerY - 50, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(centerX - 40, centerY, 80, 100);
        ctx.fillRect(centerX - 60, centerY + 20, 30, 80);
        ctx.fillRect(centerX + 30, centerY + 20, 30, 80);
        ctx.fillRect(centerX - 40, centerY + 100, 30, 90);
        ctx.fillRect(centerX + 10, centerY + 100, 30, 90);

        // Platform rings
        const time = Date.now() / 1000;
        const platforms = [
            { angle: time, radius: 250, color: '#ff00ff', icon: '📱' },
            { angle: time + Math.PI * 2/3, radius: 250, color: '#00f2ff', icon: '💻' },
            { angle: time + Math.PI * 4/3, radius: 250, color: '#7a5fff', icon: '🎮' }
        ];

        platforms.forEach(platform => {
            const x = centerX + Math.cos(platform.angle) * platform.radius;
            const y = centerY + Math.sin(platform.angle) * platform.radius;

            ctx.fillStyle = platform.color + '40';
            ctx.strokeStyle = platform.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(x, y, 60, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.font = '40px Arial';
            ctx.fillStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(platform.icon, x, y);
        });

        requestAnimationFrame(drawHeroAnimation);
    }

    drawHeroAnimation();
}

// Showcase Canvas 1: Multi-Platform
const showcase1 = document.getElementById('showcase1');
if (showcase1) {
    const ctx1 = showcase1.getContext('2d');

    function drawShowcase1() {
        ctx1.fillStyle = '#0a0e27';
        ctx1.fillRect(0, 0, 600, 400);

        const centerX = 300;
        const centerY = 200;

        const gradient = ctx1.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150);
        gradient.addColorStop(0, 'rgba(122, 95, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(122, 95, 255, 0)');
        ctx1.fillStyle = gradient;
        ctx1.beginPath();
        ctx1.arc(centerX, centerY, 150, 0, Math.PI * 2);
        ctx1.fill();

        ctx1.fillStyle = '#00f2ff';
        ctx1.beginPath();
        ctx1.arc(centerX, centerY - 30, 40, 0, Math.PI * 2);
        ctx1.fill();
        ctx1.fillRect(centerX - 30, centerY + 10, 60, 80);

        const platforms = [
            { x: centerX - 150, y: centerY, label: '📱' },
            { x: centerX + 150, y: centerY, label: '💻' },
            { x: centerX, y: centerY - 120, label: '🎮' }
        ];

        platforms.forEach(p => {
            ctx1.fillStyle = 'rgba(122, 95, 255, 0.3)';
            ctx1.strokeStyle = '#7a5fff';
            ctx1.lineWidth = 3;
            ctx1.beginPath();
            ctx1.arc(p.x, p.y, 50, 0, Math.PI * 2);
            ctx1.fill();
            ctx1.stroke();

            ctx1.font = '40px Arial';
            ctx1.fillStyle = '#fff';
            ctx1.textAlign = 'center';
            ctx1.fillText(p.label, p.x, p.y + 15);

            ctx1.beginPath();
            ctx1.moveTo(centerX, centerY);
            ctx1.lineTo(p.x, p.y);
            ctx1.strokeStyle = 'rgba(0, 242, 255, 0.5)';
            ctx1.lineWidth = 2;
            ctx1.stroke();
        });
    }

    drawShowcase1();
}

// Showcase Canvas 2: Mobile Episodes
const showcase2 = document.getElementById('showcase2');
if (showcase2) {
    const ctx2 = showcase2.getContext('2d');

    function drawShowcase2() {
        ctx2.fillStyle = '#0a0e27';
        ctx2.fillRect(0, 0, 600, 400);

        const phoneX = 180;
        const phoneY = 30;
        const phoneW = 240;
        const phoneH = 340;

        ctx2.fillStyle = '#1a1f3a';
        ctx2.strokeStyle = '#7a5fff';
        ctx2.lineWidth = 4;
        ctx2.beginPath();
        ctx2.roundRect(phoneX, phoneY, phoneW, phoneH, 20);
        ctx2.fill();
        ctx2.stroke();

        ctx2.fillStyle = '#000';
        ctx2.beginPath();
        ctx2.roundRect(phoneX + 15, phoneY + 40, phoneW - 30, phoneH - 80, 10);
        ctx2.fill();

        const episodes = [
            { title: 'EP 01', color: '#ff00ff', y: phoneY + 70 },
            { title: 'EP 02', color: '#00f2ff', y: phoneY + 150 },
            { title: 'EP 03', color: '#7a5fff', y: phoneY + 230 }
        ];

        episodes.forEach(ep => {
            ctx2.fillStyle = ep.color + '40';
            ctx2.strokeStyle = ep.color;
            ctx2.lineWidth = 2;
            ctx2.beginPath();
            ctx2.roundRect(phoneX + 30, ep.y, phoneW - 60, 60, 8);
            ctx2.fill();
            ctx2.stroke();

            ctx2.font = 'bold 20px Arial';
            ctx2.fillStyle = '#fff';
            ctx2.textAlign = 'center';
            ctx2.fillText(ep.title, phoneX + phoneW/2, ep.y + 30);

            ctx2.font = '12px Arial';
            ctx2.fillText('15-30 min', phoneX + phoneW/2, ep.y + 48);
        });
    }

    drawShowcase2();
}

// Showcase Canvas 3: Open World
const showcase3 = document.getElementById('showcase3');
if (showcase3) {
    const ctx3 = showcase3.getContext('2d');

    function drawShowcase3() {
        ctx3.fillStyle = '#0a0e27';
        ctx3.fillRect(0, 0, 600, 400);

        const gradient = ctx3.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#1a1f3a');
        gradient.addColorStop(1, '#3a3f5a');
        ctx3.fillStyle = gradient;
        ctx3.fillRect(0, 0, 600, 400);

        ctx3.fillStyle = '#0a0e27';
        for (let i = 0; i < 10; i++) {
            const bh = Math.random() * 100 + 100;
            const bw = 50 + Math.random() * 30;
            const bx = i * 60;
            ctx3.fillRect(bx, 400 - bh, bw, bh);

            ctx3.fillStyle = '#00f2ff';
            for (let w = 0; w < 3; w++) {
                for (let h = 0; h < bh / 20; h++) {
                    if (Math.random() > 0.5) {
                        ctx3.fillRect(bx + w * 15 + 5, 400 - bh + h * 20 + 5, 8, 12);
                    }
                }
            }
            ctx3.fillStyle = '#0a0e27';
        }

        const players = [
            { x: 150, y: 320 },
            { x: 300, y: 300 },
            { x: 450, y: 330 }
        ];

        players.forEach(p => {
            const glow = ctx3.createRadialGradient(p.x, p.y, 0, p.x, p.y, 40);
            glow.addColorStop(0, 'rgba(122, 95, 255, 0.6)');
            glow.addColorStop(1, 'rgba(122, 95, 255, 0)');
            ctx3.fillStyle = glow;
            ctx3.beginPath();
            ctx3.arc(p.x, p.y, 40, 0, Math.PI * 2);
            ctx3.fill();

            ctx3.fillStyle = '#ff00ff';
            ctx3.beginPath();
            ctx3.arc(p.x, p.y - 15, 15, 0, Math.PI * 2);
            ctx3.fill();
            ctx3.fillRect(p.x - 10, p.y, 20, 30);
        });
    }

    drawShowcase3();
}

// Showcase Canvas 4: SDK
const showcase4 = document.getElementById('showcase4');
if (showcase4) {
    const ctx4 = showcase4.getContext('2d');

    function drawShowcase4() {
        ctx4.fillStyle = '#0a0e27';
        ctx4.fillRect(0, 0, 600, 400);

        const centerX = 300;
        const centerY = 200;

        ctx4.fillStyle = 'rgba(122, 95, 255, 0.3)';
        ctx4.strokeStyle = '#7a5fff';
        ctx4.lineWidth = 4;
        ctx4.beginPath();
        ctx4.arc(centerX, centerY, 80, 0, Math.PI * 2);
        ctx4.fill();
        ctx4.stroke();

        ctx4.font = 'bold 24px Arial';
        ctx4.fillStyle = '#fff';
        ctx4.textAlign = 'center';
        ctx4.fillText('SDK', centerX, centerY + 8);

        const time = Date.now() / 2000;
        const tools = [
            { angle: time, label: '🎨', color: '#ff00ff' },
            { angle: time + Math.PI * 2/3, label: '💻', color: '#00f2ff' },
            { angle: time + Math.PI * 4/3, label: '🎮', color: '#7a5fff' }
        ];

        tools.forEach(tool => {
            const x = centerX + Math.cos(tool.angle) * 150;
            const y = centerY + Math.sin(tool.angle) * 100;

            ctx4.fillStyle = tool.color + '40';
            ctx4.strokeStyle = tool.color;
            ctx4.lineWidth = 3;
            ctx4.beginPath();
            ctx4.arc(x, y, 60, 0, Math.PI * 2);
            ctx4.fill();
            ctx4.stroke();

            ctx4.beginPath();
            ctx4.moveTo(centerX, centerY);
            ctx4.lineTo(x, y);
            ctx4.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx4.lineWidth = 2;
            ctx4.stroke();

            ctx4.font = '40px Arial';
            ctx4.fillStyle = '#fff';
            ctx4.fillText(tool.label, x, y + 15);
        });

        requestAnimationFrame(drawShowcase4);
    }

    drawShowcase4();
}

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '60px';
        navMenu.style.right = '20px';
        navMenu.style.background = 'rgba(10, 14, 39, 0.98)';
        navMenu.style.padding = '20px';
        navMenu.style.borderRadius = '10px';
        navMenu.style.border = '2px solid rgba(122, 95, 255, 0.3)';
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .problem-card, .feature-card, .market-card').forEach(el => {
    observer.observe(el);
});
