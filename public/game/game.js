// ==================== GAME CONFIGURATION ====================
const CONFIG = {
    canvas: {
        width: 600,
        height: 600
    },
    car: {
        width: 50,
        height: 70,
        speed: 10
    },
    obstacle: {
        width: 50,
        height: 50,
        initialSpeed: 4,
        speedIncrement: 0.5,
        spawnRate: 100
    },
    kommaatje: {
        width: 30,
        height: 30,
        speed: 3.5,
        spawnRate: 180,
        points: 5
    },
    boss: {
        speed: 2.5
    },
    lanes: 3,
    colors: {
        kommaBlue: '#2C3E73',
        kommaMagenta: '#E91E8C',
        neonCyan: '#00FFFF',
        neonYellow: '#FFFF00',
        neonPink: '#FF00FF',
        neonGreen: '#00FF00'
    }
};

// Business obstacles for Komma Consult
const OBSTACLES = [
    { emoji: '🏛️', text: 'Nieuwe\nWetgeving' },
    { emoji: '💸', text: 'Stijgende\nKosten' },
    { emoji: '📋', text: 'Administratie\nChaos' },
    { emoji: '⚠️', text: 'Schijn-\nzelfstandigheid' },
    { emoji: '📊', text: 'Complexe\nCompliance' },
    { emoji: '💰', text: 'Budget\nDruk' },
    { emoji: '🔍', text: 'Onverwachte\nAudits' },
    { emoji: '📄', text: 'Contract\nChaos' }
];

// Boss Challenges - Triggered at specific score milestones
// Boss Challenges - Triggered at specific score milestones
const BOSS_CHALLENGES = {
    50: { name: 'AUDIT BOSS', emoji: '🔍', color: '#FF6B6B', size: 1.6 },
    100: { name: 'BUDGET CRISIS', emoji: '💸', color: '#FFA500', size: 1.8 },
    150: { name: 'COMPLIANCE', emoji: '📊', color: '#9B59B6', size: 2.0 },
    250: { name: 'BIG DATA', emoji: '💾', color: '#4ECDC4', size: 2.2, movement: 'browse' },
    500: { name: 'AI TAKEOVER', emoji: '🤖', color: '#FF0000', size: 1.5, movement: 'horizontal' },
    1000: { name: 'FINAL AUDIT', emoji: '⚖️', color: '#FFFFFF', size: 2.5, movement: 'shake' }
};

// ==================== HIGH SCORES MANAGER ====================
class HighScoresManager {
    constructor() {
        this.scores = this.loadScores();
    }

    loadScores() {
        const saved = localStorage.getItem('kommaRacingScores');
        if (saved) {
            return JSON.parse(saved);
        }
        // Default leaderboard scores
        return [
            { name: 'REV', score: 500 },
            { name: 'LEN', score: 450 },
            { name: 'LEN', score: 400 },
            { name: 'LEN', score: 350 },
            { name: 'LEN', score: 300 },
            { name: 'LEN', score: 250 },
            { name: 'LEN', score: 200 },
            { name: 'LEN', score: 150 },
            { name: 'LEN', score: 100 },
            { name: 'LEN', score: 50 }
        ];
    }

    saveScores() {
        localStorage.setItem('kommaRacingScores', JSON.stringify(this.scores));
    }

    isHighScore(score) {
        return this.scores.length < 10 || score > this.scores[this.scores.length - 1].score;
    }

    addScore(name, score) {
        this.scores.push({
            name: name.toUpperCase().padEnd(3, ' ').slice(0, 3),
            score: score
        });
        this.scores.sort((a, b) => b.score - a.score);
        this.scores = this.scores.slice(0, 10);
        this.saveScores();
        return this.scores.findIndex(s => s.score === score && s.name === name.toUpperCase().padEnd(3, ' ').slice(0, 3));
    }

    getScores() {
        return this.scores;
    }

    getHighScore() {
        return this.scores[0]?.score || 0;
    }

    displayScores(newScoreIndex = -1) {
        const table = document.getElementById('scoresTable');
        table.innerHTML = '';

        this.scores.forEach((entry, index) => {
            const row = document.createElement('div');
            row.className = 'score-entry';
            if (index === newScoreIndex) {
                row.classList.add('player-score');
            }

            row.innerHTML = `
                <span class="score-rank">${(index + 1).toString().padStart(2, '0')}:</span>
                <span class="score-name">${entry.name}</span>
                <span class="score-value">${entry.score}</span>
            `;

            table.appendChild(row);
        });
    }
}

// ==================== AUDIO ENGINE ====================
class AudioEngine {
    constructor() {
        this.audioContext = null;
        this.isMuted = false;
        this.initialized = false;
    }

    init() {
        if (!this.initialized && !this.isMuted) {
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this.initialized = true;
            } catch (e) {
                console.warn('Web Audio API not supported');
            }
        }
    }

    playTone(frequency, duration, type = 'square', volume = 0.3) {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = type;

        gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    playEngineSound() {
        if (this.isMuted || !this.audioContext) return;

        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        oscillator.frequency.value = 55 + Math.random() * 10;
        oscillator.type = 'sawtooth';
        gainNode.gain.value = 0.05;

        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }

    playCollectSound() {
        this.playTone(523, 0.08, 'sine', 0.2);
        setTimeout(() => this.playTone(659, 0.08, 'sine', 0.2), 50);
        setTimeout(() => this.playTone(784, 0.08, 'sine', 0.2), 100);
    }

    playMoveSound() {
        this.playTone(300, 0.05, 'square', 0.1);
    }

    playScoreSound() {
        this.playTone(440, 0.08, 'sine', 0.2);
        setTimeout(() => this.playTone(550, 0.08, 'sine', 0.2), 80);
    }

    playCrashSound() {
        if (this.isMuted || !this.audioContext) return;

        const duration = 0.5;
        const noise = this.audioContext.createBufferSource();
        const buffer = this.audioContext.createBuffer(1, this.audioContext.sampleRate * duration, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < buffer.length; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        noise.buffer = buffer;

        const filter = this.audioContext.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 1000;

        const gainNode = this.audioContext.createGain();
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        noise.start(this.audioContext.currentTime);
        noise.stop(this.audioContext.currentTime + duration);
    }

    playBossWarning() {
        this.playTone(200, 0.2, 'square', 0.3);
        setTimeout(() => this.playTone(150, 0.3, 'square', 0.3), 200);
        setTimeout(() => this.playTone(100, 0.4, 'sawtooth', 0.4), 400);
    }

    playGameMusic() {
        if (this.isMuted || !this.audioContext) return;

        const melody = [
            { freq: 523, dur: 0.2 },
            { freq: 659, dur: 0.2 },
            { freq: 784, dur: 0.2 },
            { freq: 1047, dur: 0.4 }
        ];

        let time = 0;
        melody.forEach(note => {
            setTimeout(() => this.playTone(note.freq, note.dur, 'square', 0.05), time * 1000);
            time += note.dur;
        });
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }
}

// ==================== GAME OBJECTS ====================
class Car {
    constructor() {
        this.lane = 1;
        this.x = 0;
        this.y = 0;
        this.width = CONFIG.car.width;
        this.height = CONFIG.car.height;
    }

    moveLeft() {
        if (this.lane > 0) {
            this.lane--;
            return true;
        }
        return false;
    }

    moveRight() {
        if (this.lane < CONFIG.lanes - 1) {
            this.lane++;
            return true;
        }
        return false;
    }

    updatePosition(canvasWidth, canvasHeight) {
        const laneWidth = canvasWidth / CONFIG.lanes;
        this.x = this.lane * laneWidth + (laneWidth - this.width) / 2;
        this.y = canvasHeight - this.height - 30;
    }

    draw(ctx) {
        // NIEUWE GEDETAILLEERDE AUTO SPRITE
        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
        gradient.addColorStop(0, CONFIG.colors.kommaMagenta);
        gradient.addColorStop(0.5, CONFIG.colors.neonPink);
        gradient.addColorStop(1, CONFIG.colors.kommaMagenta);

        // Auto body - lijkt nu meer op een auto
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x + 10, this.y + 20, this.width - 20, this.height - 20);

        // Voorkant/neus van auto
        ctx.beginPath();
        ctx.moveTo(this.x + 10, this.y + 20);
        ctx.lineTo(this.x + this.width / 2, this.y);
        ctx.lineTo(this.x + this.width - 10, this.y + 20);
        ctx.fillStyle = CONFIG.colors.neonPink;
        ctx.fill();

        // Windshield/cockpit
        ctx.fillStyle = CONFIG.colors.neonCyan;
        ctx.fillRect(this.x + 15, this.y + 25, this.width - 30, 15);

        // Spoiler
        ctx.fillStyle = CONFIG.colors.kommaMagenta;
        ctx.fillRect(this.x + 5, this.y + this.height - 5, this.width - 10, 5);

        // Wielen (4 stuks)
        ctx.fillStyle = '#222';
        // Linksvoor
        ctx.fillRect(this.x, this.y + 20, 8, 15);
        // Rechtsvoor
        ctx.fillRect(this.x + this.width - 8, this.y + 20, 8, 15);
        // Linksachter
        ctx.fillRect(this.x, this.y + this.height - 25, 8, 15);
        // Rechtsachter
        ctx.fillRect(this.x + this.width - 8, this.y + this.height - 25, 8, 15);

        // Wielen highlights
        ctx.fillStyle = '#555';
        ctx.fillRect(this.x + 2, this.y + 22, 4, 4);
        ctx.fillRect(this.x + this.width - 6, this.y + 22, 4, 4);
        ctx.fillRect(this.x + 2, this.y + this.height - 23, 4, 4);
        ctx.fillRect(this.x + this.width - 6, this.y + this.height - 23, 4, 4);

        // Koplamp highlights
        ctx.fillStyle = CONFIG.colors.neonYellow;
        ctx.fillRect(this.x + 12, this.y + 2, 6, 4);
        ctx.fillRect(this.x + this.width - 18, this.y + 2, 6, 4);

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = CONFIG.colors.kommaMagenta;
        ctx.strokeStyle = CONFIG.colors.neonPink;
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x + 10, this.y + 20, this.width - 20, this.height - 20);
        ctx.shadowBlur = 0;
    }
}

class Kommaatje {
    constructor(lane, speed, canvasWidth) {
        this.lane = lane;
        this.x = 0;
        this.y = -CONFIG.kommaatje.height;
        this.width = CONFIG.kommaatje.width;
        this.height = CONFIG.kommaatje.height;
        this.speed = speed;
        this.collected = false;
        this.pulse = 0;

        const laneWidth = canvasWidth / CONFIG.lanes;
        this.x = lane * laneWidth + (laneWidth - this.width) / 2;
    }

    update() {
        this.y += this.speed;
        this.pulse += 0.1;
    }

    draw(ctx) {
        const glowSize = 5 + Math.sin(this.pulse) * 3;

        ctx.shadowBlur = glowSize * 2;
        ctx.shadowColor = CONFIG.colors.kommaMagenta;

        const gradient = ctx.createRadialGradient(
            this.x + this.width / 2, this.y + this.height / 2, 0,
            this.x + this.width / 2, this.y + this.height / 2, this.width / 2
        );
        gradient.addColorStop(0, CONFIG.colors.kommaMagenta);
        gradient.addColorStop(1, CONFIG.colors.neonPink);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(',', this.x + this.width / 2, this.y + this.height / 2);

        ctx.font = 'bold 8px Arial';
        ctx.fillStyle = CONFIG.colors.neonGreen;
        ctx.fillText('+' + CONFIG.kommaatje.points, this.x + this.width / 2, this.y + this.height + 10);
    }

    isOffScreen(canvasHeight) {
        return this.y > canvasHeight;
    }

    collidesWith(car) {
        return !(
            this.x + this.width < car.x ||
            this.x > car.x + car.width ||
            this.y + this.height < car.y ||
            this.y > car.y + car.height
        );
    }
}

class Obstacle {
    constructor(lane, speed, canvasWidth) {
        this.lane = lane;
        this.x = 0;
        this.y = -CONFIG.obstacle.height;
        this.width = CONFIG.obstacle.width;
        this.height = CONFIG.obstacle.height;
        this.speed = speed;
        this.data = OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)];
        this.scored = false;

        const laneWidth = canvasWidth / CONFIG.lanes;
        this.x = lane * laneWidth + (laneWidth - this.width) / 2;
    }

    update() {
        this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = CONFIG.colors.neonYellow;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        ctx.strokeStyle = CONFIG.colors.kommaBlue;
        ctx.lineWidth = 3;
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#000';
        ctx.fillText(this.data.emoji, this.x + this.width / 2, this.y + 20);

        ctx.font = 'bold 8px Arial';
        const lines = this.data.text.split('\n');
        lines.forEach((line, i) => {
            ctx.fillText(line, this.x + this.width / 2, this.y + 32 + i * 10);
        });

        ctx.shadowBlur = 10;
        ctx.shadowColor = CONFIG.colors.neonYellow;
        ctx.strokeStyle = CONFIG.colors.neonYellow;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.shadowBlur = 0;
    }

    isOffScreen(canvasHeight) {
        return this.y > canvasHeight;
    }

    collidesWith(car) {
        return !(
            this.x + this.width < car.x ||
            this.x > car.x + car.width ||
            this.y + this.height < car.y ||
            this.y > car.y + car.height
        );
    }
}

class BossObstacle extends Obstacle {
    constructor(config, gameWidth, gameHeight) {
        super(1, CONFIG.boss.speed, gameWidth); // Always start in center
        this.width = CONFIG.obstacle.width * config.size;
        this.height = CONFIG.obstacle.height * config.size;
        this.x = (gameWidth - this.width) / 2;
        this.color = config.color;
        this.emoji = config.emoji;
        this.name = config.name;
        this.hp = 100; // Not used yet but good for future features

        // Recalculate x based on new width
        this.x = (gameWidth - this.width) / 2;
        // Recalculate y to start fully off-screen
        this.y = -this.height;

        this.movement = config.movement || 'static';
        this.initialX = this.x;
        this.gameWidth = gameWidth;
        this.time = 0;
    }

    update() {
        super.update();
        this.time += 0.05;

        if (this.movement === 'horizontal') {
            this.x = this.initialX + Math.sin(this.time) * (this.gameWidth / 4);
        } else if (this.movement === 'shake') {
            this.x = this.initialX + (Math.random() * 10 - 5);
        } else if (this.movement === 'browse') {
            this.x = this.initialX + Math.sin(this.time / 2) * (this.gameWidth / 6);
        }

        // Ensure bounds
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > this.gameWidth) this.x = this.gameWidth - this.width;
    }

    draw(ctx) {
        // Boss glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;

        // Main body
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Border
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 4;
        ctx.strokeRect(this.x, this.y, this.width, this.height);

        // Emoji
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.emoji, this.x + this.width / 2, this.y + this.height / 2);

        // Name tag
        ctx.shadowBlur = 0;
        ctx.font = 'bold 10px "Press Start 2P"';
        ctx.fillStyle = this.color;
        ctx.fillText("BOSS", this.x + this.width / 2, this.y - 15);

        ctx.font = 'bold 8px Arial';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(this.name, this.x + this.width / 2, this.y + this.height + 15);
    }
}

class Particle {
    constructor(x, y, color, type) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.type = type;
        this.size = Math.random() * 3 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.life = 1.0;
        this.decay = Math.random() * 0.03 + 0.02;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.95; // Shrink over time
    }

    draw(ctx) {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;

        if (this.type === 'sparkle') {
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    createSparkles(x, y, count = 10) {
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(x, y, CONFIG.colors.neonYellow, 'sparkle'));
        }
    }

    createExplosion(x, y, count = 30) {
        for (let i = 0; i < count; i++) {
            this.particles.push(new Particle(x, y, CONFIG.colors.neonPink, 'explosion'));
        }
    }

    update() {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].update();
            if (this.particles[i].life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw(ctx) {
        this.particles.forEach(p => p.draw(ctx));
    }
}

class FloatingText {
    constructor(x, y, text, color) {
        this.x = x;
        this.y = y;
        this.text = text;
        this.color = color;
        this.life = 1.0;
        this.velocity = -1.5;
    }

    update() {
        this.y += this.velocity;
        this.life -= 0.02;
    }

    draw(ctx) {
        if (this.life <= 0) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.font = 'bold 16px "Arial"';
        ctx.textAlign = 'center';
        ctx.fillStyle = this.color;
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 3;
        ctx.strokeText(this.text, this.x, this.y);
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}

// ==================== GAME ENGINE ====================
class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.audio = new AudioEngine();
        this.highScoresManager = new HighScoresManager();
        this.particles = new ParticleSystem();

        this.canvas.width = CONFIG.canvas.width;
        this.canvas.height = CONFIG.canvas.height;

        this.isRunning = false;
        this.isPaused = false;
        this.firstRun = true;
        this.score = 0;
        this.combo = 0;
        this.floatingTexts = [];
        this.highScore = this.highScoresManager.getHighScore();
        this.frameCount = 0;
        this.roadOffset = 0;

        this.car = new Car();
        this.obstacles = [];
        this.kommaatjes = [];
        this.currentSpeed = CONFIG.obstacle.initialSpeed;
        this.kommaatjeSpeed = CONFIG.kommaatje.speed;
        this.bossMode = false;
        this.bossWarningActive = false;
        this.bossSpawned = false;

        this.keys = {};
        this.setupEventListeners();

        document.getElementById('highScoreDisplay').textContent = this.highScore;
        document.getElementById('gameOverHighScore').textContent = this.highScore;
    }

    setupEventListeners() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P' || e.key === ' ') {
                if (this.isRunning) this.togglePause();
            }

            if (!this.isRunning || this.isPaused) return;

            if (e.key === 'ArrowLeft' && !this.keys['ArrowLeft']) {
                this.keys['ArrowLeft'] = true;
                if (this.car.moveLeft()) {
                    this.audio.playMoveSound();
                }
            }
            if (e.key === 'ArrowRight' && !this.keys['ArrowRight']) {
                this.keys['ArrowRight'] = true;
                if (this.car.moveRight()) {
                    this.audio.playMoveSound();
                }
            }
        });

        document.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });

        document.getElementById('startBtn').addEventListener('click', () => this.start());

        // Touch controls for mobile
        this.canvas.addEventListener('touchstart', (e) => {
            if (!this.isRunning || this.isPaused) return;
            e.preventDefault(); // Prevent scrolling

            const rect = this.canvas.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;

            if (touchX < rect.width / 2) {
                if (this.car.moveLeft()) this.audio.playMoveSound();
            } else {
                if (this.car.moveRight()) this.audio.playMoveSound();
            }
        }, { passive: false });
        document.getElementById('restartBtn').addEventListener('click', () => this.restart());

        const muteBtn = document.getElementById('muteBtn');
        muteBtn.addEventListener('click', () => {
            const isMuted = this.audio.toggleMute();
            muteBtn.textContent = isMuted ? '🔇' : '🔊';
            muteBtn.classList.toggle('muted', isMuted);
        });

        // High Scores buttons
        document.getElementById('viewScoresBtn').addEventListener('click', () => this.showHighScores());
        document.getElementById('backFromScoresBtn').addEventListener('click', () => this.backFromScores());

        // Name entry
        const nameInput = document.getElementById('nameInput');
        const submitNameBtn = document.getElementById('submitNameBtn');

        nameInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
        });

        nameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && nameInput.value.length > 0) {
                this.submitHighScore();
            }
        });

        submitNameBtn.addEventListener('click', () => this.submitHighScore());
    }

    start() {
        this.audio.init();
        document.getElementById('startScreen').classList.add('hidden');

        this.isRunning = true;
        this.score = 0;
        this.combo = 0;
        document.getElementById('comboValue').textContent = '0';
        this.frameCount = 0;
        this.obstacles = [];
        this.kommaatjes = [];
        this.currentSpeed = CONFIG.obstacle.initialSpeed;
        this.kommaatjeSpeed = CONFIG.kommaatje.speed;
        this.bossMode = false;
        this.bossWarningActive = false;
        this.bossSpawned = false;
        this.car.lane = 1;
        this.particles.particles = [];
        this.floatingTexts = [];

        this.audio.playGameMusic();

        if (this.firstRun) {
            this.showTutorial();
        } else {
            this.gameLoop();
        }
    }

    restart() {
        document.getElementById('gameOverScreen').classList.add('hidden');
        this.start();
    }

    togglePause() {
        if (!this.isRunning) return;

        this.isPaused = !this.isPaused;
        const pauseOverlay = document.getElementById('pauseOverlay');
        const bgMusic = document.getElementById('bgMusic');

        if (this.isPaused) {
            pauseOverlay.classList.remove('hidden');
            if (bgMusic) bgMusic.pause();
        } else {
            pauseOverlay.classList.add('hidden');
            if (bgMusic && !this.audio.isMuted) bgMusic.play();
            this.gameLoop();
        }
    }

    showTutorial() {
        const tutorial = document.getElementById('tutorialOverlay');
        tutorial.classList.remove('hidden');
        this.isRunning = true; // Allow rendering but hold updates
        this.isPaused = true;

        // Render initial frame
        this.draw();

        // Wait for keypress
        const dismissTutorial = (e) => {
            if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
                document.removeEventListener('keydown', dismissTutorial);
                tutorial.classList.add('hidden');
                this.isPaused = false;
                this.firstRun = false;
                this.gameLoop();
            }
        };

        document.addEventListener('keydown', dismissTutorial);
    }

    incrementCombo() {
        this.combo++;
        document.getElementById('comboValue').textContent = this.combo;

        // Visual feedback
        const comboText = document.getElementById('comboText');
        comboText.textContent = `${this.combo}x COMBO!`;
        const comboDisplay = document.getElementById('comboDisplay');
        comboDisplay.classList.remove('hidden');

        // Play combo sound if combo > 1
        if (this.combo > 1) {
            // We can add a specific combo sound later if needed
            this.audio.playTone(400 + (this.combo * 50), 0.1, 'sine', 0.1);
        }

        setTimeout(() => {
            comboDisplay.classList.add('hidden');
        }, 1000);
    }

    resetCombo() {
        if (this.combo > 0) {
            this.combo = 0;
            document.getElementById('comboValue').textContent = this.combo;
        }
    }

    addFloatingText(x, y, text, color = '#FFFFFF') {
        this.floatingTexts.push(new FloatingText(x, y, text, color));
    }

    spawnObstacle() {
        const lane = Math.floor(Math.random() * CONFIG.lanes);
        const obstacle = new Obstacle(lane, this.currentSpeed, this.canvas.width);
        this.obstacles.push(obstacle);
    }

    spawnKommaatje() {
        const lane = Math.floor(Math.random() * CONFIG.lanes);
        const kommaatje = new Kommaatje(lane, this.kommaatjeSpeed, this.canvas.width);
        this.kommaatjes.push(kommaatje);
    }

    addScore(points) {
        const oldScore = this.score;
        this.score += points;
        document.getElementById('score').textContent = this.score;

        // Update high score
        if (this.score > this.highScore) {
            this.highScore = this.score;
            document.getElementById('highScoreDisplay').textContent = this.highScore;
        }

        // Check Boss Thresholds
        this.checkBossThresholds(oldScore, this.score);
    }

    checkBossThresholds(oldScore, newScore) {
        Object.keys(BOSS_CHALLENGES).forEach(key => {
            const threshold = parseInt(key);
            if (oldScore < threshold && newScore >= threshold) {
                this.triggerBossChallenge(threshold);
            }
        });
    }

    passObstacle() {
        this.addScore(1);
        this.audio.playScoreSound();

        if (this.score % 5 === 0 && this.score > 0) {
            this.currentSpeed += CONFIG.obstacle.speedIncrement;
            this.kommaatjeSpeed += 0.3;
        }
    }

    triggerBossChallenge(score) {
        this.bossMode = true;
        this.bossWarningActive = true;
        this.audio.playBossWarning();

        // Show warning UI
        const bossData = BOSS_CHALLENGES[score];
        const warning = document.getElementById('bossWarning');
        document.getElementById('bossName').textContent = bossData.name;
        warning.classList.remove('hidden');

        // Hide warning and spawn boss after 3 seconds
        setTimeout(() => {
            warning.classList.add('hidden');
            this.bossWarningActive = false;
            this.forceSpawnBoss(bossData);
        }, 3000);
    }

    forceSpawnBoss(bossData) {
        if (!this.isRunning) return;
        this.bossSpawned = true;
        const boss = new BossObstacle(bossData, this.canvas.width, this.canvas.height);
        this.obstacles.push(boss);
    }

    gameOver() {
        this.isRunning = false;
        this.resetCombo();
        this.audio.playCrashSound();
        this.particles.createExplosion(this.car.x + this.car.width / 2, this.car.y + this.car.height / 2);

        // Check if this is a high score
        if (this.highScoresManager.isHighScore(this.score)) {
            // Show name entry screen
            document.getElementById('newHighScore').textContent = this.score;
            document.getElementById('nameInput').value = '';
            document.getElementById('nameEntryScreen').classList.remove('hidden');
            document.getElementById('nameInput').focus();
        } else {
            // Show regular game over screen
            document.getElementById('finalScore').textContent = this.score;
            document.getElementById('gameOverHighScore').textContent = this.highScore;
            document.getElementById('gameOverScreen').classList.remove('hidden');
        }
    }

    submitHighScore() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();

        if (name.length === 0) return;

        // Add score to leaderboard
        const scoreIndex = this.highScoresManager.addScore(name, this.score);

        // Update high score if needed
        this.highScore = this.highScoresManager.getHighScore();

        // Hide name entry, show leaderboard
        document.getElementById('nameEntryScreen').classList.add('hidden');
        this.highScoresManager.displayScores(scoreIndex);
        document.getElementById('highScoresScreen').classList.remove('hidden');
    }

    showHighScores() {
        document.getElementById('gameOverScreen').classList.add('hidden');
        this.highScoresManager.displayScores();
        document.getElementById('highScoresScreen').classList.remove('hidden');
    }

    backFromScores() {
        document.getElementById('highScoresScreen').classList.add('hidden');
        document.getElementById('startScreen').classList.remove('hidden');
    }

    drawRoad() {
        const ctx = this.ctx;

        const gradient = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient.addColorStop(0, '#000428');
        gradient.addColorStop(1, '#004e92');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.strokeStyle = CONFIG.colors.neonCyan;
        ctx.lineWidth = 3;
        ctx.setLineDash([20, 20]);
        ctx.lineDashOffset = -this.roadOffset;

        const laneWidth = this.canvas.width / CONFIG.lanes;
        for (let i = 1; i < CONFIG.lanes; i++) {
            ctx.beginPath();
            ctx.moveTo(i * laneWidth, 0);
            ctx.lineTo(i * laneWidth, this.canvas.height);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        ctx.shadowBlur = 15;
        ctx.shadowColor = CONFIG.colors.kommaMagenta;
        ctx.strokeStyle = CONFIG.colors.kommaMagenta;
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.shadowBlur = 0;
    }

    update() {
        this.frameCount++;
        this.roadOffset = (this.roadOffset + this.currentSpeed) % 40;

        if (!this.bossWarningActive) {
            if (!this.bossMode && this.frameCount % CONFIG.obstacle.spawnRate === 0) {
                this.spawnObstacle();
            }

            const spawnRate = this.bossMode ? CONFIG.kommaatje.spawnRate * 2 : CONFIG.kommaatje.spawnRate;
            if (this.frameCount % spawnRate === 0) {
                this.spawnKommaatje();
            }
        }

        this.particles.update();
        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            this.floatingTexts[i].update();
            if (this.floatingTexts[i].life <= 0) {
                this.floatingTexts.splice(i, 1);
            }
        }

        this.car.updatePosition(this.canvas.width, this.canvas.height);

        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obstacle = this.obstacles[i];
            obstacle.update();

            if (obstacle.collidesWith(this.car)) {
                this.gameOver();
                return;
            }

            if (!obstacle.scored && obstacle.y > this.car.y + this.car.height) {
                obstacle.scored = true;
                this.passObstacle();
            }

            if (obstacle.isOffScreen(this.canvas.height)) {
                if (obstacle instanceof BossObstacle) {
                    this.bossMode = false;
                    this.bossSpawned = false;
                }
                this.obstacles.splice(i, 1);
            }
        }

        for (let i = this.kommaatjes.length - 1; i >= 0; i--) {
            const kommaatje = this.kommaatjes[i];
            kommaatje.update();

            if (!kommaatje.collected && kommaatje.collidesWith(this.car)) {
                kommaatje.collected = true;
                this.audio.playCollectSound();
                this.incrementCombo();

                // Bonus score for combo
                const bonus = this.combo * 5;
                const totalPoints = CONFIG.kommaatje.points + bonus;
                this.addScore(totalPoints);
                this.addFloatingText(this.car.x + this.car.width / 2, this.car.y, `+${totalPoints}`, CONFIG.colors.neonYellow);

                this.particles.createSparkles(kommaatje.x + kommaatje.width / 2, kommaatje.y + kommaatje.height / 2);
                this.kommaatjes.splice(i, 1);
                continue;
            }

            if (kommaatje.isOffScreen(this.canvas.height)) {
                if (!kommaatje.collected) this.resetCombo();
                this.kommaatjes.splice(i, 1);
            }
        }

        if (this.frameCount % 30 === 0) {
            this.audio.playEngineSound();
        }
    }

    draw() {
        this.drawRoad();
        this.obstacles.forEach(obstacle => obstacle.draw(this.ctx));
        this.kommaatjes.forEach(kommaatje => kommaatje.draw(this.ctx));
        this.particles.draw(this.ctx);
        this.floatingTexts.forEach(t => t.draw(this.ctx));
        this.car.draw(this.ctx);
    }

    gameLoop() {
        if (!this.isRunning || this.isPaused) return;

        this.update();
        this.draw();

        requestAnimationFrame(() => this.gameLoop());
    }
}

// ==================== INITIALIZE GAME ====================
let game;

window.addEventListener('load', () => {
    game = new Game();
});
