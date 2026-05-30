/* ============================================================
   PROJECTS DATA
   ============================================================ */
const PROJECTS = [
    {
        icon: 'fa-robot',
        name: 'Grimoire Bot',
        status: { label: 'В разработке', cls: 's-active' },
        desc: 'Полностью автономный бот для прохождения событийной 2048-подобной мини-игры «Герой на полставки». Работает без участия пользователя — подключается к эмулятору, видит экран, думает, играет.',
        sections: [
            {
                title: 'Как это работает',
                type: 'list',
                items: [
                    'Подключается к эмулятору <strong>MuMu Player</strong> через ADB',
                    'Делает скриншоты в реальном времени',
                    'Распознаёт фишки на поле через <strong>OpenCV</strong> (шаблонное сопоставление)',
                    'Принимает оптимальное решение с помощью <strong>N-Tuple Network</strong>',
                    'Отправляет свайп обратно в эмулятор'
                ]
            },
            {
                title: 'AI-движок — N-Tuple Network',
                type: 'list',
                items: [
                    '<strong>v5</strong>: 4 базовых паттерна × 8 симметрий = 32 эффективных паттерна',
                    '<strong>v6</strong>: 8 паттернов × 8 симметрий = 64 паттерна (в обучении)',
                    'Метод: <strong>TD(λ)</strong> — агент играет сам с собой миллионы партий',
                    'Поддержка Easy / Normal / Hard режимов'
                ]
            }
        ],
        stats: [
            { value: '1.5M+', label: 'партий обучено' },
            { value: '86к', label: 'avg score v6' },
            { value: '3', label: 'режима игры' }
        ],
        tags: ['Python', 'N-Tuple Network', 'TD(λ)', 'OpenCV', 'ADB', 'NumPy', 'MuMu Player']
    },
    {
        icon: 'fa-window-maximize',
        name: 'Grimoire App',
        status: { label: 'Готов', cls: 's-done' },
        desc: 'Desktop-приложение для управления ботом и визуализации игрового процесса. Красивый интерфейс, 5 тем, статистика в реальном времени.',
        sections: [
            {
                title: 'Возможности',
                type: 'list',
                items: [
                    'Живое игровое поле — видишь каждый ход бота',
                    '5 визуальных тем оформления',
                    'Статистика сессий: очки, ходы, скорость',
                    'Настройки режима, скорости и модели AI',
                    'Сохранение и загрузка сессий',
                    'Модульная архитектура: core, ui, pages'
                ]
            }
        ],
        tags: ['Python', 'tkinter', 'NumPy']
    },
    {
        icon: 'fa-brain',
        name: 'Grimoire Training',
        status: { label: 'Активно', cls: 's-active' },
        desc: 'Система обучения N-Tuple сетей методом TD(λ). Агент играет против себя, постепенно улучшая оценочные таблицы. Весовые файлы достигают 95–155 MB.',
        sections: [
            {
                title: 'Архитектура обучения',
                type: 'list',
                items: [
                    '<strong>Numba JIT</strong> — критические функции компилируются для скорости',
                    'Симулятор игры на NumPy — сотни тысяч ходов в секунду',
                    'Раздельные скрипты для Normal и Hard режимов',
                    'Оценщики v5/v6 для сравнения поколений',
                    'Сохранение контрольных точек каждые N партий'
                ]
            },
            {
                title: 'Веса',
                type: 'list',
                items: [
                    'ntuple_v6_normal.pkl — 95 MB',
                    'ntuple_v6_easy.pkl — 95 MB',
                    'ntuple_v6_hard.pkl — 154 MB',
                    'Обучение продолжается'
                ]
            }
        ],
        stats: [
            { value: '~10M', label: 'партий v6 normal' },
            { value: '95MB', label: 'размер весов' },
            { value: 'Numba', label: 'JIT ускорение' }
        ],
        tags: ['Python', 'NumPy', 'Numba', 'TD(λ)', 'N-Tuple v6']
    },
    {
        icon: 'fa-table-cells',
        name: 'Life Tracker',
        status: { label: 'Готов', cls: 's-done' },
        desc: 'Автоматизированный трекер задач и целей в Google Sheets. Разворачивается одной командой — таблица создаётся, меню появляется, триггеры ставятся.',
        sections: [
            {
                title: 'Как работает',
                type: 'list',
                items: [
                    'Python-скрипт создаёт таблицу через <strong>Google Sheets API</strong>',
                    'Автоматически заливает <strong>Apps Script</strong> с кастомным меню',
                    'Устанавливает временны́е триггеры через Apps Script',
                    'Доступ через браузер — дополнительного ПО не нужно',
                    'Одна команда: <code>python tracker_setup.py</code>'
                ]
            }
        ],
        tags: ['Python', 'Google Sheets API', 'Google Drive API', 'Apps Script', 'gspread']
    },
    {
        icon: 'fa-globe',
        name: 'Веб-проекты',
        status: { label: 'В процессе', cls: 's-wip' },
        desc: 'Коллекция экспериментальных сайтов с разными концепциями дизайна и интерактивности.',
        sections: [
            {
                title: 'ProjectSite — CRT Cyberpunk',
                type: 'text',
                text: 'Портфолио в стиле Ultra-Premium CRT Cyberpunk. ASCII-арт логотип, экран загрузки Win95, эффекты CRT-монитора (scanlines, vignette, flicker), глитч через SVG-фильтры. Несколько полноценных секций, retro-шрифты VT323 + JetBrains Mono.'
            },
            {
                title: 'SSSite — Premium Interactive',
                type: 'text',
                text: 'Экспериментальная страница с glassmorphism-дизайном, кастомными CSS-анимациями, современной палитрой (purple + cyan), шрифтами Outfit + Plus Jakarta Sans.'
            },
            {
                title: 'MySite — этот сайт',
                type: 'text',
                text: 'Личное портфолио: canvas-анимация частиц, GSAP-анимации при загрузке, AOS scroll-анимации, glassmorphism-карточки, кастомный курсор, полностью адаптивный.'
            }
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Canvas API', 'AOS']
    }
];

/* ============================================================
   CANVAS — PARTICLE NETWORK
   ============================================================ */
class ParticleNet {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.pts = [];
        this.mouse = { x: null, y: null };
        this.N = 55;
        this.D = 130;
        this.resize();
        this.spawn();
        this.listen();
        this.loop();
    }

    spawn() {
        for (let i = 0; i < this.N; i++) {
            this.pts.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.8 + 0.8,
                a: Math.random() * 0.5 + 0.2
            });
        }
    }

    resize() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    listen() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            this.mouse.x = null; this.mouse.y = null;
        });
    }

    update() {
        this.pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > this.canvas.width)  p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
            if (this.mouse.x !== null) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const d  = Math.sqrt(dx * dx + dy * dy);
                if (d < 180) { p.x += dx * 0.0015; p.y += dy * 0.0015; }
            }
        });
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.pts.length; i++) {
            for (let j = i + 1; j < this.pts.length; j++) {
                const dx = this.pts[i].x - this.pts[j].x;
                const dy = this.pts[i].y - this.pts[j].y;
                const d  = Math.sqrt(dx * dx + dy * dy);
                if (d < this.D) {
                    const op = (1 - d / this.D) * 0.38;
                    const g  = ctx.createLinearGradient(
                        this.pts[i].x, this.pts[i].y,
                        this.pts[j].x, this.pts[j].y
                    );
                    g.addColorStop(0, `rgba(139,92,246,${op})`);
                    g.addColorStop(1, `rgba(57,197,187,${op})`);
                    ctx.beginPath();
                    ctx.moveTo(this.pts[i].x, this.pts[i].y);
                    ctx.lineTo(this.pts[j].x, this.pts[j].y);
                    ctx.strokeStyle = g; ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
            ctx.beginPath();
            ctx.arc(this.pts[i].x, this.pts[i].y, this.pts[i].r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139,92,246,${this.pts[i].a})`;
            ctx.fill();
        }

        if (this.mouse.x !== null) {
            this.pts.forEach(p => {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const d  = Math.sqrt(dx * dx + dy * dy);
                if (d < 160) {
                    const op = (1 - d / 160) * 0.55;
                    ctx.beginPath();
                    ctx.moveTo(this.mouse.x, this.mouse.y);
                    ctx.lineTo(p.x, p.y);
                    ctx.strokeStyle = `rgba(139,92,246,${op})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            });
        }
    }

    loop() {
        this.update(); this.draw();
        requestAnimationFrame(() => this.loop());
    }
}

/* ============================================================
   TYPER — no external lib
   ============================================================ */
class Typer {
    constructor(el, strings, opts = {}) {
        this.el = el;
        this.strings = strings;
        this.speed  = opts.speed  || 65;
        this.del    = opts.del    || 38;
        this.pause  = opts.pause  || 1900;
        this.idx    = 0;
        this.ci     = 0;
        this.isdel  = false;
        this.tick();
    }
    tick() {
        const s = this.strings[this.idx];
        if (!this.isdel) {
            this.el.textContent = s.slice(0, ++this.ci);
            if (this.ci === s.length) {
                this.isdel = true;
                setTimeout(() => this.tick(), this.pause);
                return;
            }
            setTimeout(() => this.tick(), this.speed);
        } else {
            this.el.textContent = s.slice(0, --this.ci);
            if (this.ci === 0) {
                this.isdel = false;
                this.idx = (this.idx + 1) % this.strings.length;
            }
            setTimeout(() => this.tick(), this.del);
        }
    }
}

/* ============================================================
   PAGE REVEAL
   ============================================================ */
function initReveal() {
    const el = document.getElementById('reveal');
    gsap.to(el, {
        scaleY: 0,
        duration: 1.1,
        ease: 'power4.inOut',
        delay: 0.15,
        transformOrigin: 'top',
        onComplete: () => el.remove()
    });
}

/* ============================================================
   MOUSE SPOTLIGHT
   ============================================================ */
function initSpotlight() {
    const el = document.getElementById('spotlight');
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let cx = tx, cy = ty;
    let visible = false;

    document.addEventListener('mousemove', e => {
        tx = e.clientX; ty = e.clientY;
        if (!visible) { el.style.opacity = '1'; visible = true; }
    });

    const lerp = (a, b, t) => a + (b - a) * t;
    (function tick() {
        cx = lerp(cx, tx, 0.07);
        cy = lerp(cy, ty, 0.07);
        el.style.left = cx + 'px';
        el.style.top  = cy + 'px';
        requestAnimationFrame(tick);
    })();
}

/* ============================================================
   3D CARD TILT
   ============================================================ */
function init3DTilt() {
    const isMobile = window.matchMedia('(pointer:coarse)').matches;
    if (isMobile) return;

    document.querySelectorAll('.proj-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            card.style.transform =
                `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-6px) scale(1.01)`;
            card.style.transition = 'transform .1s ease, box-shadow .3s, border-color .3s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = '';
        });
    });
}

/* ============================================================
   MAGNETIC BUTTONS
   ============================================================ */
function initMagnetic() {
    const isMobile = window.matchMedia('(pointer:coarse)').matches;
    if (isMobile) return;

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width  / 2) * 0.28;
            const y = (e.clientY - r.top  - r.height / 2) * 0.28;
            btn.style.transform = `translate(${x}px, ${y}px)`;
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1, 0.4)' });
            btn.style.transform = '';
        });
    });
}

/* ============================================================
   GLITCH ON HERO NAME
   ============================================================ */
function initGlitch() {
    const el = document.querySelector('.glitch-name');
    if (!el || window.matchMedia('(pointer:coarse)').matches) return;

    const fire = () => {
        el.classList.add('do-glitch');
        setTimeout(() => el.classList.remove('do-glitch'), 400);
        setTimeout(fire, 5000 + Math.random() * 7000);
    };
    setTimeout(fire, 3500);
}

/* ============================================================
   SCROLL PROGRESS BAR
   ============================================================ */
function initProgressBar() {
    const bar = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const total    = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
    }, { passive: true });
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackTop() {
    const btn = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
}

/* ============================================================
   ANIMATED COUNTERS
   ============================================================ */
function initCounters() {
    const els = document.querySelectorAll('.stat-val[data-count]');
    if (!els.length) return;

    const animate = (el) => {
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (isNaN(target)) return; // ∞ — пропускаем

        const duration = 1200;
        const start    = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = target + suffix;
        };
        requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    els.forEach(el => observer.observe(el));
}

/* ============================================================
   CURSOR
   ============================================================ */
function initCursor() {
    const el = document.getElementById('cursor');
    if (!el || window.matchMedia('(pointer:coarse)').matches) {
        if (el) el.style.display = 'none';
        document.body.style.cursor = 'auto';
        return;
    }
    document.addEventListener('mousemove', e => {
        el.style.left = e.clientX + 'px';
        el.style.top  = e.clientY + 'px';
    });
    const hover = 'a, button, .proj-card, .skill-item, .contact-card, .skill-cat';
    document.querySelectorAll(hover).forEach(node => {
        node.addEventListener('mouseenter', () => el.classList.add('big'));
        node.addEventListener('mouseleave', () => el.classList.remove('big'));
    });
}

/* ============================================================
   NAV
   ============================================================ */
function initNav() {
    const nav    = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const links  = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        nav.classList.toggle('on', window.scrollY > 50);
    });

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            burger.classList.remove('open');
        });
    });
}

/* ============================================================
   HERO GSAP
   ============================================================ */
function initHero() {
    gsap.registerPlugin(ScrollTrigger);

    const ids = ['#hero-tag','#hero-title','#hero-typed-wrap','#hero-desc','#hero-cta','#hero-scroll'];
    gsap.set(ids, { opacity: 0 });
    gsap.set('#hero-title', { y: 40 });
    gsap.set(['#hero-tag','#hero-desc','#hero-cta'], { y: 22 });

    const tl = gsap.timeline({ delay: 0.35 });
    tl.to('#hero-tag',        { opacity:1, y:0, duration:.7,  ease:'power2.out' })
      .to('#hero-title',      { opacity:1, y:0, duration:.85, ease:'power2.out' }, '-=.45')
      .to('#hero-typed-wrap', { opacity:1,      duration:.55, ease:'power2.out' }, '-=.4')
      .to('#hero-desc',       { opacity:1, y:0, duration:.7,  ease:'power2.out' }, '-=.35')
      .to('#hero-cta',        { opacity:1, y:0, duration:.7,  ease:'power2.out' }, '-=.45')
      .to('#hero-scroll',     { opacity:1,      duration:.55, ease:'power2.out' }, '-=.3');
}

/* ============================================================
   PROJECT MODAL
   ============================================================ */
function openProject(i) {
    const p    = PROJECTS[i];
    const secs = p.sections.map(s => {
        if (s.type === 'list') {
            return `<div class="m-sec"><h4>${s.title}</h4><ul>${s.items.map(it => `<li>${it}</li>`).join('')}</ul></div>`;
        }
        return `<div class="m-sec"><h4>${s.title}</h4><p>${s.text}</p></div>`;
    }).join('');

    const stats = p.stats ? `<div class="m-stats">${
        p.stats.map(st => `<div class="mst"><span>${st.value}</span><small>${st.label}</small></div>`).join('')
    }</div>` : '';

    openModal(`
        <div class="m-header">
            <div class="m-icon"><i class="fas ${p.icon}"></i></div>
            <div>
                <h2>${p.name}</h2>
                <span class="proj-status ${p.status.cls}">${p.status.label}</span>
            </div>
        </div>
        <p class="m-desc">${p.desc}</p>
        ${secs}${stats}
        <div class="m-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `);
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProject(); });

/* ============================================================
   SKILLS DATA
   ============================================================ */
const SKILLS = {
    python: {
        icon: 'fab fa-python', name: 'Python', cat: 'Языки',
        desc: 'Мой основной язык. Знаю его достаточно хорошо чтобы писать быстрый и читаемый код — от одноразовых скриптов до многопоточных приложений с GUI.',
        points: [
            'AI и ML: реализация N-Tuple сетей, TD(λ) алгоритм, симуляторы',
            'Автоматизация: ADB-скрипты, работа с Google API',
            'GUI: tkinter-приложение с темами, сессиями и статистикой',
            'Работа с изображениями: OpenCV + NumPy'
        ],
        used: ['Grimoire Bot', 'Grimoire App', 'Grimoire Training', 'Life Tracker']
    },
    js: {
        icon: 'fab fa-js', name: 'JavaScript', cat: 'Языки',
        desc: 'Использую для интерактивности и анимаций в браузере. Canvas API, GSAP, кастомные анимации без лишних библиотек.',
        points: [
            'Canvas API: анимация частиц в hero-секции',
            'GSAP: плавные анимации при загрузке страницы',
            'DOM-манипуляции: модалки, навигация, scroll-эффекты',
            'Кастомный Typer без Typed.js — написал сам'
        ],
        used: ['Веб-проекты', 'MySite']
    },
    html: {
        icon: 'fab fa-html5', name: 'HTML / CSS', cat: 'Языки',
        desc: 'Вёрстка и дизайн-системы. Люблю делать красиво — от ретро CRT-эффектов до современного glassmorphism.',
        points: [
            'CSS-переменные, кастомные дизайн-системы',
            'Анимации: keyframes, transitions, transform',
            'Glassmorphism, градиенты, backdrop-filter',
            'Адаптивная вёрстка: grid, flexbox, media queries'
        ],
        used: ['Все веб-проекты']
    },
    ntuple: {
        icon: 'fas fa-brain', name: 'N-Tuple Networks', cat: 'AI / ML',
        desc: 'Архитектура оценочных таблиц для игровых позиций. Вместо нейросети — большая таблица весов, проиндексированная по паттернам доски.',
        points: [
            'v5: 4 базовых паттерна × 8 симметрий = 32 эффективных',
            'v6: 8 паттернов × 8 симметрий = 64 эффективных',
            'Оценка позиции — сумма весов по всем паттернам',
            'Выбор хода: minimax по 4 направлениям'
        ],
        used: ['Grimoire Bot', 'Grimoire Training']
    },
    tdl: {
        icon: 'fas fa-graduation-cap', name: 'TD(λ) Learning', cat: 'AI / ML',
        desc: 'Метод обучения с подкреплением. Агент играет сам с собой миллионы партий и постепенно улучшает оценки позиций через ошибку TD.',
        points: [
            'Temporal Difference — обновление весов после каждого хода',
            'Eligibility traces (λ) — распространение ошибки назад по истории',
            'Нет размеченных данных — агент учится только из игр',
            '~1.5М партий для v5 Normal, ~10М для v6'
        ],
        used: ['Grimoire Training']
    },
    opencv: {
        icon: 'fas fa-eye', name: 'OpenCV', cat: 'AI / ML',
        desc: 'Компьютерное зрение для бота. Делает скриншот эмулятора и распознаёт все фишки на поле за миллисекунды.',
        points: [
            'Шаблонное сопоставление (template matching)',
            'Поиск каждой фишки на поле 4×4',
            'Набор шаблонов для каждого ранга фишки',
            'Работает с скриншотами через ADB pipe'
        ],
        used: ['Grimoire Bot']
    },
    numpy: {
        icon: 'fas fa-calculator', name: 'NumPy', cat: 'AI / ML',
        desc: 'Основа всех вычислений. Симулятор игры, таблицы весов, векторизованные операции — всё на NumPy.',
        points: [
            'Симулятор ходов: поле как массив uint8',
            'Хранение и обновление весовых таблиц',
            'Быстрые операции без Python-циклов',
            'В связке с Numba JIT для максимальной скорости'
        ],
        used: ['Grimoire Training', 'Grimoire Bot']
    },
    adb: {
        icon: 'fab fa-android', name: 'ADB', cat: 'Инструменты',
        desc: 'Android Debug Bridge — мост между Python-скриптом и эмулятором. Через него бот «видит» экран и отправляет команды.',
        points: [
            'Скриншоты экрана эмулятора через screencap',
            'Отправка свайпов: adb shell input swipe',
            'Подключение к MuMu Player на 127.0.0.1:16384',
            'Асинхронный worker для непрерывной работы'
        ],
        used: ['Grimoire Bot']
    },
    git: {
        icon: 'fab fa-github', name: 'Git / GitHub', cat: 'Инструменты',
        desc: 'Версионирование и управление кодом. Без этого никуда — особенно когда эксперименты ломают рабочий код.',
        points: [
            'Ветки для экспериментов (v5 → v6)',
            'История изменений как дневник проекта',
            'GitHub для хранения и доступа с разных машин'
        ],
        used: ['Все проекты']
    },
    gapi: {
        icon: 'fab fa-google', name: 'Google APIs', cat: 'Инструменты',
        desc: 'Sheets + Drive API для автоматизации таблиц. Python создаёт структуру, Apps Script добавляет интерактивность.',
        points: [
            'Google Sheets API: создание, форматирование, запись данных',
            'Google Drive API: управление доступом к файлам',
            'gspread — удобная обёртка над Sheets API',
            'Service Account аутентификация'
        ],
        used: ['Life Tracker']
    },
    tkinter: {
        icon: 'fas fa-desktop', name: 'tkinter (GUI)', cat: 'Инструменты',
        desc: 'Стандартная библиотека Python для десктопных интерфейсов. Grimoire App — полноценное приложение с темами и модульной архитектурой.',
        points: [
            '5 визуальных тем оформления',
            'Модульная структура: core/, ui/, pages/',
            'Живое игровое поле с обновлением в реальном времени',
            'Многопоточность: бот в отдельном треде'
        ],
        used: ['Grimoire App']
    },
    ramoc: {
        icon: 'fas fa-memory', name: 'RAM Overclocking', cat: 'Железо',
        desc: 'Ручной разгон DDR5. Не просто включить XMP — понимать что за каждым таймингом стоит и почему одни значения стабильны, а другие нет.',
        points: [
            'Ручная настройка таймингов — без XMP',
            'Подбор напряжений под конкретный чип',
            'Стресс-тестирование на стабильность',
            'Понимание зависимостей между подтаймингами'
        ],
        used: ['Личный ПК']
    },
    gputune: {
        icon: 'fas fa-microchip', name: 'GPU Tuning', cat: 'Железо',
        desc: 'Разгон и андервольтинг видеокарт. Меньше температура, тише, производительнее — без дополнительных затрат.',
        points: [
            'Андервольтинг: снижение нагрева при той же мощности',
            'Разгон памяти и ядра',
            'Чистая установка/удаление драйверов',
            'Стресс-тестирование стабильности'
        ],
        used: ['Личный ПК']
    },
    winopt: {
        icon: 'fab fa-windows', name: 'Windows Optimization', cat: 'Железо',
        desc: 'Системная оптимизация Windows на низком уровне. Отклик, латентность, автозагрузка — всё под контролем.',
        points: [
            'Отключение энергосбережения на уровне устройств',
            'Настройка сетевых адаптеров для минимальной латентности',
            'Контроль автозагрузки и фоновых процессов',
            'Тонкая настройка планов питания'
        ],
        used: ['Личный ПК']
    },
    hwdiag: {
        icon: 'fas fa-gauge-high', name: 'HW Diagnostics', cat: 'Железо',
        desc: 'Полный мониторинг и диагностика системы. Умею читать показания сенсоров и понимать что они значат.',
        points: [
            'Мониторинг температур, частот и напряжений',
            'Верификация и анализ стабильности системы',
            'Стресс-тестирование RAM и GPU',
            'Диагностика узких мест производительности'
        ],
        used: ['Личный ПК']
    }
};

/* ============================================================
   MODAL (общая)
   ============================================================ */
function openModal(html) {
    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

/* ============================================================
   SKILL MODAL
   ============================================================ */
function openSkill(key) {
    const s = SKILLS[key];
    if (!s) return;

    const points = s.points.map(p => `<li>${p}</li>`).join('');
    const used   = s.used.map(u => `<span class="tag">${u}</span>`).join('');

    openModal(`
        <div class="m-header">
            <div class="m-icon"><i class="${s.icon}"></i></div>
            <div>
                <h2>${s.name}</h2>
                <span class="proj-status s-done">${s.cat}</span>
            </div>
        </div>
        <p class="m-desc">${s.desc}</p>
        <div class="m-sec">
            <h4>Как использую</h4>
            <ul>${points}</ul>
        </div>
        <div class="m-tags">${used}</div>
    `);
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    new ParticleNet(document.getElementById('hero-canvas'));

    new Typer(document.getElementById('typed-out'), [
        'пишу AI-ботов',
        'строю инструменты',
        'люблю красивый код',
        'учусь на 3 курсе',
        'автоматизирую рутину',
        'решаю нестандартные задачи'
    ]);

    initCursor();
    initNav();
    initHero();

    AOS.init({ duration: 680, once: true, offset: 75, easing: 'ease-out-cubic' });

    initProgressBar();
    initBackTop();
    initCounters();
    initReveal();
    initSpotlight();
    init3DTilt();
    initMagnetic();
    initGlitch();
});
