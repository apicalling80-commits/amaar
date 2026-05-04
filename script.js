/**
 * AMOR EVENTZ — Master Interaction Script
 * Robust Reveal Animations, Cinematic Sliders, and Stat Counters
 */

// Translations are handled in translations.js

function setLanguage(lang) {
    // Translate text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update active state in switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('amor-eventz-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    const savedLang = localStorage.getItem('amor-eventz-lang') || 'en';
    setLanguage(savedLang);

    // Language Toggle Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // 1. CINEMATIC HERO SLIDER
    const slider = document.getElementById('heroSlider');
    const thumbs = document.getElementById('heroThumbs');
    if (slider) {
        const slides = slider.querySelectorAll('.hero-slide');
        const thumbItems = thumbs ? thumbs.querySelectorAll('.hero-thumb') : [];
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            const prevIndex = currentSlide;
            currentSlide = index;

            slides.forEach((s, i) => {
                s.classList.remove('previous');
                if (i === prevIndex) {
                    s.classList.remove('active');
                    s.classList.add('previous');
                } else if (i === currentSlide) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            if (thumbItems.length > 0) {
                thumbItems.forEach(t => t.classList.remove('active'));
                thumbItems[currentSlide].classList.add('active');
            }
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        // Auto-advance
        slideInterval = setInterval(nextSlide, 6000);

        // Thumbnail Clicks (if they exist)
        if (thumbItems.length > 0) {
            thumbItems.forEach((thumb, idx) => {
                thumb.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    showSlide(idx);
                    slideInterval = setInterval(nextSlide, 6000);
                });
            });
        }
    }

    // 2. ROBUST COUNTER ANIMATIONS (IntersectionObserver)
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 2000; // 2 seconds
                const frameRate = 1000 / 60; // 60 FPS
                const totalFrames = Math.round(duration / frameRate);
                let frame = 0;

                const animate = () => {
                    frame++;
                    const progress = frame / totalFrames;
                    // Ease out expo
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    const current = Math.floor(easeProgress * target);
                    
                    el.textContent = current + suffix;

                    if (frame < totalFrames) {
                        requestAnimationFrame(animate);
                    } else {
                        el.textContent = target + suffix;
                    }
                };

                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // 3. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. SMOOTH ANCHOR SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 6. GALLERY FILTERING
    const galleryFilters = document.querySelectorAll('.gallery-filter');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (galleryFilters.length > 0 && galleryItems.length > 0) {
        galleryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Update Active State
                galleryFilters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');

                const category = filter.textContent.trim();

                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    if (category === 'ALL' || itemCategory === category) {
                        item.style.display = ''; // Restore default grid/block display
                        setTimeout(() => {
                            item.classList.remove('hidden');
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                        setTimeout(() => {
                            if (item.classList.contains('hidden')) {
                                item.style.display = 'none';
                            }
                        }, 600); // Match transition duration
                    }
                });
            });
        });
    }

    // 7. SEAMLESS AJAX FORM SUBMISSION
    const handleFormSubmit = (form) => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // UI Feedback
            btn.innerHTML = 'SENDING...';
            btn.disabled = true;

            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.innerHTML = 'SUCCESS ✓';
                    if (btn.classList.contains('pill-btn')) {
                        btn.style.backgroundColor = '#28a745';
                    } else {
                        btn.style.backgroundColor = '#28a745';
                        btn.style.borderColor = '#28a745';
                    }
                    form.reset();
                    
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.style.backgroundColor = '';
                        btn.style.borderColor = '';
                    }, 5000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Submission error:', error);
                btn.innerHTML = 'FAILED (TRY AGAIN)';
                btn.style.backgroundColor = '#dc3545';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                    btn.style.borderColor = '';
                }, 3000);
            }
        });
    };

    const cForm = document.getElementById('contactForm');
    if (cForm) handleFormSubmit(cForm);

    document.querySelectorAll('.newsletter-form').forEach(f => handleFormSubmit(f));


    // 8. MOBILE MENU TOGGLE
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
});

/* ============================================================
   VIDEO GALLERY — Lazy Load, Hover Preview, Lightbox
   ============================================================ */
(function initVideoGallery() {
    const cards    = document.querySelectorAll('.vg-card');
    if (!cards.length) return;

    const lightbox = document.getElementById('vgLightbox');
    const lbVideo  = document.getElementById('vgVideo');
    const lbTitle  = document.getElementById('vgTitle');
    const lbClose  = document.getElementById('vgClose');
    const backdrop = document.getElementById('vgBackdrop');

    // ── Lazy-load hover preview videos with IntersectionObserver ──
    // Apply thumbnails immediately on page load (no observer needed — just iterate)
    cards.forEach(card => {
        const thumb = card.dataset.thumb;
        if (thumb) {
            card.querySelector('.vg-thumb').style.backgroundImage = `url('${thumb}')`;
        }
    });

    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const card  = entry.target;
            const src   = card.dataset.src;
            const thumb = card.querySelector('.vg-thumb');
            if (!src || thumb.querySelector('video')) return;

            const vid = document.createElement('video');
            vid.className   = 'vg-preview';
            vid.src         = src;
            vid.muted       = true;
            vid.loop        = true;
            vid.preload     = 'none';
            vid.playsInline = true;

            vid.addEventListener('canplay', () => vid.classList.add('loaded'), { once: true });
            thumb.insertBefore(vid, thumb.firstChild);

            card.addEventListener('mouseenter', () => { vid.play().catch(() => {}); });
            card.addEventListener('mouseleave', () => {
                vid.pause();
                vid.currentTime = 0;
                vid.classList.remove('loaded');
            });

            cardObserver.unobserve(card);
        });
    }, { rootMargin: '200px' });

    cards.forEach(card => cardObserver.observe(card));

    // ── Open lightbox on click ──
    function openLightbox(card) {
        lbVideo.src          = card.dataset.src;
        lbTitle.textContent  = card.dataset.label || '';
        lightbox.classList.add('open');
        document.body.classList.add('no-scroll');
        lbVideo.play().catch(() => {});
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.classList.remove('no-scroll');
        lbVideo.pause();
        lbVideo.src = '';
    }

    cards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') openLightbox(card);
        });
    });

    if (lbClose)  lbClose.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) closeLightbox();
    });
})();

/* ============================================================
   VENUE GRID — Drag to scroll + 3D tilt on hover
   ============================================================ */
(function initVenueDrag() {
    const grids = document.querySelectorAll('.venue-grid-new');
    if (!grids.length) return;

    grids.forEach(grid => {
        let isDown  = false;
        let startX  = 0;
        let scrollL = 0;
        let moved   = false;

        grid.addEventListener('mousedown', e => {
            isDown  = true;
            moved   = false;
            startX  = e.pageX - grid.offsetLeft;
            scrollL = grid.scrollLeft;
            grid.classList.add('is-dragging');
        });

        grid.addEventListener('mouseleave', () => {
            isDown = false;
            grid.classList.remove('is-dragging');
        });

        grid.addEventListener('mouseup', () => {
            isDown = false;
            grid.classList.remove('is-dragging');
        });

        grid.addEventListener('mousemove', e => {
            if (!isDown) return;
            e.preventDefault();
            const x    = e.pageX - grid.offsetLeft;
            const walk = (x - startX) * 1.4;   // scroll speed multiplier
            grid.scrollLeft = scrollL - walk;
            if (Math.abs(walk) > 4) moved = true;
        });

        // Prevent click-through when user just dragged
        grid.addEventListener('click', e => {
            if (moved) e.stopPropagation();
        }, true);

        // Touch support
        let touchStartX  = 0;
        let touchScrollL = 0;
        grid.addEventListener('touchstart', e => {
            touchStartX  = e.touches[0].pageX;
            touchScrollL = grid.scrollLeft;
        }, { passive: true });
        grid.addEventListener('touchmove', e => {
            const dx = touchStartX - e.touches[0].pageX;
            grid.scrollLeft = touchScrollL + dx;
        }, { passive: true });
    });

    // ── 3-D tilt on individual cards ──
    const cards = document.querySelectorAll('.venue-card-new');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            if (card.closest('.venue-grid-new').classList.contains('is-dragging')) return;
            const rect   = card.getBoundingClientRect();
            const cx     = rect.left + rect.width  / 2;
            const cy     = rect.top  + rect.height / 2;
            const dx     = (e.clientX - cx) / (rect.width  / 2);   // -1 … 1
            const dy     = (e.clientY - cy) / (rect.height / 2);   // -1 … 1
            const tiltX  = dy * -8;   // max ±8 deg vertical
            const tiltY  = dx *  8;   // max ±8 deg horizontal
            card.style.transform = `translateY(-14px) scale(1.02) perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

/* ============================================================
   HOME VENUE SLIDER — Drag to scroll + 3D tilt on hover
   ============================================================ */
(function initVenueSlider() {
    const slider = document.querySelector('.venues-slider');
    if (!slider) return;

    let isDown  = false;
    let startX  = 0;
    let scrollL = 0;
    let moved   = false;

    slider.addEventListener('mousedown', e => {
        isDown  = true;
        moved   = false;
        startX  = e.pageX - slider.offsetLeft;
        scrollL = slider.scrollLeft;
        slider.classList.add('is-dragging');
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('is-dragging');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('is-dragging');
    });

    slider.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x    = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.6;
        slider.scrollLeft = scrollL - walk;
        if (Math.abs(walk) > 4) moved = true;
    });

    // Block link/click-through after drag
    slider.addEventListener('click', e => {
        if (moved) e.stopPropagation();
    }, true);

    // Touch
    let tx = 0, tl = 0;
    slider.addEventListener('touchstart', e => {
        tx = e.touches[0].pageX;
        tl = slider.scrollLeft;
    }, { passive: true });
    slider.addEventListener('touchmove', e => {
        slider.scrollLeft = tl + (tx - e.touches[0].pageX);
    }, { passive: true });

    // ── 3-D tilt on each .venue-card ──
    slider.querySelectorAll('.venue-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            if (slider.classList.contains('is-dragging')) return;
            const r   = card.getBoundingClientRect();
            const dx  = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
            const dy  = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
            card.style.transform =
                `translateY(-16px) scale(1.03) perspective(900px) rotateX(${dy * -7}deg) rotateY(${dx * 7}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
})();

/* ============================================================
   VIDEO SHOWCASE MAGAZINE — Hover autoplay + Lightbox
   ============================================================ */
(function initVideoShowcase() {
    const cards = document.querySelectorAll('.vs-card');
    if (!cards.length) return;

    const lightbox = document.getElementById('vsLightbox');
    const lbVideo  = document.getElementById('vsVideo');
    const lbTitle  = document.getElementById('vsTitle');
    const lbClose  = document.getElementById('vsClose');
    const backdrop = document.getElementById('vsBackdrop');

    cards.forEach(card => {
        const vid = card.querySelector('.vs-vid');
        const playBtn = card.querySelector('.vs-play');

        // Hover: play muted preview
        card.addEventListener('mouseenter', () => {
            if (vid) { 
                vid.play().catch(() => {}); 
            }
        });
        card.addEventListener('mouseleave', () => {
            if (vid) { 
                vid.pause(); 
                vid.currentTime = 0; 
            }
        });

        // Open Lightbox
        function openLb() {
            if (!lightbox || !lbVideo) return;
            const src = card.getAttribute('data-src');
            const label = card.getAttribute('data-label');
            
            lbVideo.src = src || '';
            lbTitle.textContent = label || '';
            
            lightbox.classList.add('open');
            document.body.classList.add('no-scroll');
            lbVideo.play().catch(() => {});
        }

        if (playBtn) playBtn.addEventListener('click', e => { 
            e.stopPropagation(); 
            openLb(); 
        });
        card.addEventListener('click', openLb);

        // Keyboard a11y
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { 
                e.preventDefault(); 
                openLb(); 
            }
        });
    });

    function closeLb() {
        if (!lightbox) return;
        lightbox.classList.remove('open');
        document.body.classList.remove('no-scroll');
        if (lbVideo) { 
            lbVideo.pause(); 
            lbVideo.src = ''; 
        }
    }

    if (lbClose)  lbClose.addEventListener('click', closeLb);
    if (backdrop) backdrop.addEventListener('click', closeLb);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
            closeLb();
        }
    });
})();

/* ============================================================
   YOUTUBE CINEMATIC SLIDER
   ============================================================ */
(function initYouTubeSlider() {
    const slider = document.getElementById('ytSlider');
    const slides = document.querySelectorAll('.yt-slide');
    const nextBtn = document.getElementById('ytNext');
    const prevBtn = document.getElementById('ytPrev');
    const dots = document.querySelectorAll('.yt-dot');

    if (!slider || slides.length < 2) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        // Update transform
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function goToNext() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function goToPrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    if (nextBtn) nextBtn.addEventListener('click', goToNext);
    if (prevBtn) prevBtn.addEventListener('click', goToPrev);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateSlider();
        });
    });

    // Auto-swipe every 8 seconds (optional)
    let autoPlay = setInterval(goToNext, 8000);

    // Pause autoPlay on interaction
    const container = document.querySelector('.yt-slider-container');
    if (container) {
        container.addEventListener('mouseenter', () => clearInterval(autoPlay));
        container.addEventListener('mouseleave', () => autoPlay = setInterval(goToNext, 8000));
    }
})();
