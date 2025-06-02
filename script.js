// Custom cursor effect
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Digital canvas effect for hero section
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const heroSection = document.querySelector('.hero-section');

canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '1';
heroSection.insertBefore(canvas, heroSection.firstChild);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Particle system for digital canvas
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

animate();

// 3D Tokenomics Model
const tokenomicsModel = document.querySelector('.tokenomics-model');
if (tokenomicsModel) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, tokenomicsModel.clientWidth / tokenomicsModel.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(tokenomicsModel.clientWidth, tokenomicsModel.clientHeight);
    tokenomicsModel.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00,
        wireframe: true
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

// Stories section
const stories = [
    {
        title: "The Birth of $000",
        content: "In the depths of the digital realm, where code meets chaos, $000 was born. Not as a mere token, but as a symbol of digital rebellion. The anonymous creators, inspired by the raw power of the internet and the spirit of decentralization, crafted something that would transcend the boundaries of traditional cryptocurrency."
    },
    {
        title: "The Digital Revolution",
        content: "As the world becomes increasingly digitized, $000 stands as a beacon of hope for those who believe in the power of community-driven projects. Built on Solana's lightning-fast blockchain, it represents the future of decentralized finance and digital freedom."
    },
    {
        title: "The Community",
        content: "The strength of $000 lies not in its code, but in its community. A diverse group of individuals, united by their belief in digital freedom and the power of collective action. Together, they form the backbone of this revolutionary project."
    },
    {
        title: "The Vision",
        content: "More than just a meme coin, $000 represents a vision of a future where financial freedom is accessible to all. Through innovation, community, and a touch of digital anarchy, we're building something that will stand the test of time."
    },
    {
        title: "The Future",
        content: "The journey of $000 is just beginning. With a strong community, innovative technology, and a clear vision, we're poised to make a lasting impact on the world of cryptocurrency and beyond."
    }
];

const storiesGrid = document.querySelector('.stories-grid');
if (storiesGrid) {
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.content}</p>
        `;
        storiesGrid.appendChild(storyCard);
    });
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
}); 