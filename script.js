/**
 * AMOR EVENTZ — Master Interaction Script
 * Robust Reveal Animations, Cinematic Sliders, and Stat Counters
 */

const translations = {
    'en': {
        'nav-home': 'HOME',
        'nav-about': 'ABOUT',
        'nav-venues': 'VENUES',
        'nav-services': 'SERVICES',
        'nav-gallery': 'GALLERY',
        'nav-contact': 'CONTACT',
        'nav-reserve': 'RESERVE NOW',
        'hero-subtitle': 'Mumbai\'s Premier Event Management',
        'hero-title': 'Crafting Celebrations with <span class="txt-gold">Love & Elegance</span>',
        'hero-description': 'From intimate gatherings to grand celebrations — we bring your vision to life beautifully and effortlessly.',
        'hero-btn-explore': 'EXPLORE OUR VENUES',
        'hero-btn-enquire': 'ENQUIRE NOW',
        
        /* About Section */
        'about-subtitle': 'EVERY EVENT TELLS A STORY',
        'about-title': 'Every event tells a story <br><span class="txt-gold" style="white-space: nowrap;">we make yours unforgettable.</span>',
        'about-description': 'Amor Eventz is a full-service event management company established in 2025, born out of a passion for creating unforgettable celebrations filled with love, elegance, and seamless execution.',
        'about-btn': 'KNOW MORE',

        /* Our Services */
        'services-subtitle': 'What We Offer',
        'services-title': 'Our Services',
        'srv-corp-h': 'Corporate Events',
        'srv-wed-h': 'Wedding & Social Events',
        'srv-birth-h': 'Birthdays & Anniversaries',
        'srv-ent-h': 'Entertainment & Themed Events',
        'srv-view-all': 'View All Services',

        /* Why Choose Us */
        'why-subtitle': 'WHY CHOOSE US',
        'why-title': 'Experience the Excellence',
        'why-venue-h': '50+ Venue Options',
        'why-venue-p': 'across prime locations',
        'why-catering-h': '50+ Catering Options',
        'why-catering-p': 'with diverse cuisines',
        'why-makeup-h': 'Professional Makeup',
        'why-makeup-p': 'Artists & Decor Options',
        'why-staff-h': 'Trained Support Staff',
        'why-staff-p': 'for smooth coordination',

        /* Stats */
        'stat-venues': 'Venue Options',
        'stat-catering': 'Catering Options',
        'stat-satisfaction': 'Client Satisfaction',
        'stat-events': 'Events Planned',

        /* Our Spaces / Venues Page */
        'spaces-subtitle': 'OUR SPACES',
        'spaces-title': 'Discover the Venues',
        'venue-catalog-subtitle': 'EXCLUSIVE SELECTION',
        'venue-catalog-title': 'Our Signature Venues',
        'venue-cat-1': '5-Star luxury Hotels',
        'venue-cat-2': 'Premium Banquet Halls',
        'venue-cat-3': 'Convention Centres',
        'venue-itc-title': 'ITC Grand Central',
        'venue-itc-desc': 'Luxury 5-star venue in Mumbai',
        'venue-itc-desc-long': 'Heritage luxury with timeless ballrooms in the heart of Mumbai.',
        'venue-taj-title': 'Taj Santacruz',
        'venue-taj-desc': 'Premium modern luxury',
        'venue-taj-desc-long': 'Luxury hotel with large, magnificent banquet spaces located near the airport.',
        'venue-sahara-title': 'Sahara Star',
        'venue-sahara-desc': 'Iconic dome architecture',
        'venue-sahara-desc-long': 'Premium 5-star hotel offering state-of-the-art event spaces and grand ambiance.',
        'venue-westin-title': 'The Westin Mumbai',
        'venue-westin-desc': 'Scenic lake views',
        'venue-radisson-title': 'Radisson Blu',
        'venue-radisson-desc': 'Modern premium events',
        'venue-radisson-desc-long': 'Large hotel banquets and modern meeting halls for corporate and social events.',
        'venue-nesco-title': 'NESCO Centre',
        'venue-nesco-desc': 'Large-scale event space',
        'venue-nesco-desc-long': 'Mumbai\'s premier multi-purpose venue for massive exhibitions and events.',
        'venue-marriott-title': 'Courtyard by Marriott',
        'venue-marriott-desc': 'Modern business & weddings',
        'venue-marriott-desc-long': 'Modern luxury banquet and meeting rooms perfect for weddings and corporate gatherings.',
        'venue-orchid-title': 'The Orchid Hotel',
        'venue-orchid-desc': 'Eco-luxury excellence',
        'venue-orchid-desc-long': 'Eco-friendly luxury hotel with multiple banquets and majestic ballrooms.',
        'venue-hilton-title': 'Hilton Mumbai',
        'venue-hilton-desc': 'Elegant heritage style',
        'venue-hilton-desc-long': 'Spacious banquet and function rooms with premium international standards.',
        'venue-holiday-inn-title': 'Holiday Inn Mumbai',
        'venue-holiday-inn-desc': 'Full-service hotel with versatile meeting rooms and elegant banquet facilities.',
        'venue-view-all': 'VIEW ALL VENUES',
        'venue-enquire': 'ENQUIRE NOW →',

        /* Services Page Specifics */
        'srv-corp-desc': 'From high-stakes board meetings to grand annual galas, we deliver precision, professionalism, and prestige to every corporate milestone.',
        'srv-wed-desc': 'Bespoke weddings that capture your unique love story. We handle everything from venue selection to the final farewell, ensuring a timeless celebration.',
        'srv-birth-desc': 'Celebrate life\'s milestones with flair. Our personalized themes and vibrant decor make every birthday and anniversary a legendary event.',
        'srv-ent-desc': 'Immersive entertainment and themed experiences that wow your guests. From celebrity performances to innovative conceptual parties.',
        'srv-decor-h': 'Decor & Design',
        'srv-decor-desc': 'Transforming spaces into enchanting realms. Our designers blend contemporary trends with luxury aesthetics to create breathtaking visual narratives.',
        'srv-cat-h': 'Catering & Logistics',
        'srv-cat-desc': 'A culinary journey tailored to your palate. From global cuisines to local delicacies, served with impeccable hospitality and logistical precision.',
        'srv-photo-h': 'Photography & Videography',
        'srv-photo-desc': 'Preserving your most precious moments through the lens of artistry. Our award-winning team captures the emotions and details that tell your story.',
        'srv-makeup-h': 'Makeup artist',
        'srv-makeup-desc': 'Radiance redefined for your most precious moments. Our celebrity-tier artists use premium artistry to enhance your natural beauty.',

        /* Services Page Long Descriptions */
        'srv-page-subtitle': 'TAILORED FOR YOU',
        'srv-page-title': 'Comprehensive Event Solutions',
        'srv-page-desc': 'From concept to completion, we handle every aspect of your event with care, creativity, and professionalism.',
        'srv-pre-wed-h': 'Pre-Wedding Events',
        'srv-pre-wed-desc': 'Mehendi, Sangeet, Haldi, or an intimate engagement — we plan and manage every pre-wedding function with creativity and flair.',
        'srv-wed-desc-long': 'Your wedding is the most cherished day of your life. We craft every detail — from the decor and flowers to the venue and catering — to mirror your love story perfectly.',
        'srv-corp-desc-long': 'From annual meetings and product launches to award nights and team outings, we deliver seamless corporate events that reflect your brand\'s vision.',
        'srv-birth-desc-long': 'Whether it\'s a first birthday or a milestone 50th, our team creates personalized birthday celebrations filled with joy and stunning decor.',
        'srv-anniv-h': 'Anniversary Celebrations',
        'srv-anniv-desc': 'Celebrate years of love with an anniversary event as special as your bond. We curate intimate dinners, grand parties, and everything in between.',
        'srv-social-h': 'Social Gatherings',
        'srv-social-desc': 'House warmings, baby showers, kitty parties, reunion dinners — no gathering is too big or too small for us. We bring warmth and elegance to every occasion.',
        'srv-lic-h': 'Licensing',
        'srv-lic-desc': 'Navigating the complexities of event legalities with ease. We handle alcohol licenses and local clearances, ensuring your celebration remain compliant.',
        'srv-cat-desc-long': 'A gastronomic journey tailored to your palate. Our master chefs curate exquisite menus featuring global cuisines and bespoke dining concepts.',
        'srv-photo-desc-long': 'Preserving your legacy through the cinematic lens. Our elite team captures the raw emotion and timeless elegance of your celebration.',
        'srv-makeup-desc-long': 'Radiance redefined for your most precious moments. Our celebrity-tier artists use premium artistry to ensure you look breathtaking under every spotlight.',

        /* About Page Specifics */
        'about-hero-sub': 'ESTABLISHED 2025',
        'about-hero-title': 'About Amor Eventz',
        'about-story-sub': 'OUR STORY',
        'about-story-title': 'Born from Passion',
        'about-story-p1': 'Amor Eventz is a full-service event management company born out of a passion for creating unforgettable celebrations filled with love, elegance, and seamless execution. True to our name “Amor”, meaning love, we believe every event tells a story.',
        'about-story-p2': 'From intimate gatherings to grand celebrations, we specialize in planning and managing weddings, pre-wedding functions, birthdays, anniversaries, corporate events, and social gatherings.',
        'about-approach-sub': 'OUR APPROACH',
        'about-approach-title': 'End-to-End Excellence',
        'about-approach-p1': 'We offer comprehensive event solutions, handling everything from concept to completion so you can relax and truly enjoy your special moments. Our experienced team pays attention to the smallest details.',
        'about-approach-p2': 'Whether you dream of a traditional celebration, a modern aesthetic, or a fusion of both, we make it happen with creativity, precision, and care.',
        'about-mission-sub': 'THE GOAL',
        'about-mission-title': 'Our Mission',
        'about-mission-p': 'Our mission is to transform your ideas into extraordinary experiences by delivering personalized, stress-free, and high-quality event management services.',
        'about-vision-sub': 'THE FUTURE',
        'about-vision-title': 'Our Vision',
        'about-vision-p': 'Our vision is to become a trusted and leading name in the event management industry, known for innovation, reliability, and excellence.',

        /* Contact Page specifics */
        'contact-subtitle': 'CONCIERGE',
        'contact-title': 'Begin Your Legendary Event',
        'contact-desc': 'Step into a world of bespoke elegance. Our team are ready to curate every detail of your vision.',
        'contact-addr-h': 'OUR OFFICE',
        'contact-addr-v': 'Alura, B-202, Lodha Casa Bella Gold,<br>Behind Xperia Mall, Dombivali,<br>Thane – 421204, Maharashtra, India',
        'contact-phone-h': 'PHONE',
        'contact-phone-v': '+91 77770 60321',
        'contact-email-h': 'EMAIL',
        'contact-email-v': 'info@amoreventz.com',
        'contact-hours-h': 'OFFICE HOURS',
        'contact-hours-v': 'Monday – Saturday: 10:00 AM – 7:00 PM<br>Sunday: By Appointment Only',
        'contact-enq-h': 'ENQUIRIES',
        'contact-form-name': 'FULL NAME',
        'contact-form-email': 'EMAIL ADDRESS',
        'contact-form-type': 'EVENT TYPE',
        'contact-form-guests': 'ESTIMATED GUESTS',
        'contact-form-date': 'PREFERRED DATE',
        'contact-form-vision': 'TELL US ABOUT YOUR VISION',
        'contact-form-submit': 'SUBMIT ENQUIRY',
        'contact-op-wedding': 'Wedding',
        'contact-op-gala': 'Corporate Gala',
        'contact-op-soiree': 'Private Soiree',
        'contact-op-other': 'Other Celebration',
        'contact-ph-name': 'Your Name',
        'contact-ph-vision': 'How can we make your event legendary?',

        /* Gallery Page specifics */
        'gallery-subtitle': 'CAPTURED MOMENTS',
        'gallery-all': 'ALL',
        'gallery-weddings': 'WEDDINGS',
        'gallery-corporate': 'CORPORATE',
        'gallery-decor': 'DECOR',
        'gallery-culinary': 'CULINARY',

        'gallery-hero-title': 'The Art of Celebration',
        'gallery-hero-subtitle': 'A cinematic collection of our most prestigious work.',
        'gallery-hero-cta': 'PLAN YOUR EVENT',

        /* Testimonials */
        'testi-subtitle': 'WORDS FROM OUR FAMILIES',
        'testi-title': 'Stories That Stay Forever',
        'testi-1-text': 'Amor Eventz turned our dream wedding into something far beyond what we imagined. Every flower, every light, every moment — absolute perfection.',
        'testi-1-author': 'Priya & Arjun Shah',
        'testi-1-meta': 'Wedding · March 2024',
        'testi-2-text': 'The Grand Ballroom was breathtaking. From the moment we walked in, we knew this was the place. The team handled everything — we just celebrated.',
        'testi-2-author': 'Meera & Rahul Kapoor',
        'testi-2-meta': 'Reception · Nov 2023',
        'testi-3-text': 'Professional, warm, and absolutely detail-oriented. Our corporate gala was flawlessly executed. The AV setup and catering exceeded expectations.',
        'testi-3-author': 'Sneha Desai',
        'testi-3-meta': 'Corporate Gala · Jan 2024',
        'review-stats': 'Rated 4.9 / 5 on Google Reviews · 120+ verified reviews',
        'read-reviews': 'READ ALL REVIEWS →',

        /* Boutique Footer */
        'footer-tagline': 'CRAFTING CELEBRATIONS WITH LOVE & ELEGANCE.',
        'footer-book': 'BOOK A VENUE',
        'footer-email': 'EMAIL US',
        'footer-linkedin': 'LINKEDIN',
        'footer-x': 'X',
        'footer-privacy': 'PRIVACY POLICY',
        'footer-terms': 'TERMS AND CONDITIONS',
        'footer-collection': 'COLLECTION STATEMENT',
        'footer-cookies': 'COOKIE SETTINGS',
        'footer-copyright': 'COPYRIGHT © AMOR EVENTZ LIMITED 2025',
        'footer-news-text': 'Get curated event inspiration & venue insights that you won\'t find anywhere else, delivered straight to your inbox.',
        'footer-first-name': 'First name*',
        'footer-last-name': 'Last name*',
        'footer-email-field': 'Email*',
        'footer-subscribe': 'SUBSCRIBE'
    },
    'hi': {
        'nav-home': 'होम',
        'nav-about': 'हमारे बारे में',
        'nav-venues': 'स्थान',
        'nav-services': 'सेवाएं',
        'nav-gallery': 'गैलरी',
        'nav-contact': 'संपर्क',
        'nav-reserve': 'बुक करें',
        'hero-subtitle': 'मुंबई का प्रमुख इवेंट मैनेजमेंट',
        'hero-title': '<span class="txt-gold">प्यार और लालित्य</span> के साथ उत्सवों को संवारना',
        'hero-description': 'छोटे समारोहों से लेकर भव्य उत्सवों तक — हम आपके विज़न को खूबसूरती और सहजता से जीवंत करते हैं।',
        'hero-btn-explore': 'हमारे स्थानों को देखें',
        'hero-btn-enquire': 'पूछताछ करें',
        
        /* About Section */
        'about-subtitle': 'हर आयोजन एक कहानी कहता है',
        'about-title': 'हर आयोजन एक कहानी कहता है, हम आपके आयोजन को अविस्मरणीय बनाते हैं।',
        'about-description': 'अमोर इवेंट्स 2025 में स्थापित एक पूर्ण-सेवा इवेंट मैनेजमेंट कंपनी है, जो प्यार, लालित्य और निर्बाध निष्पादन से भरे अविस्मरणीय उत्सव बनाने के जुनून से पैदा हुई है।',
        'about-btn': 'अधिक जानें',

        /* Our Services */
        'services-subtitle': 'हम क्या प्रदान करते हैं',
        'services-title': 'हमारी सेवाएं',
        'srv-corp-h': 'कॉर्पोरेट कार्यक्रम',
        'srv-wed-h': 'शादी और सामाजिक कार्यक्रम',
        'srv-birth-h': 'जन्मदिन और सालगिरह',
        'srv-ent-h': 'मनोरंजन और थीम वाले कार्यक्रम',
        'srv-view-all': 'सभी सेवाएं देखें',

        /* Why Choose Us */
        'why-subtitle': 'हमें क्यों चुनें',
        'why-title': 'उत्कृष्टता का अनुभव करें',
        'why-venue-h': '50+ स्थान विकल्प',
        'why-venue-p': 'प्रमुख स्थानों पर',
        'why-catering-h': '50+ खानपान विकल्प',
        'why-catering-p': 'विविध व्यंजनों के साथ',
        'why-makeup-h': 'पेशेवर मेकअप',
        'why-makeup-p': 'कलाकार और सजावट विकल्प',
        'why-staff-h': 'प्रशिक्षित सहायक कर्मचारी',
        'why-staff-p': 'सुचारू समन्वय के लिए',

        /* Stats */
        'stat-venues': 'स्थान विकल्प',
        'stat-catering': 'खानपान विकल्प',
        'stat-satisfaction': 'ग्राहक संतुष्टि',
        'stat-events': 'नियोजित कार्यक्रम',

        /* Our Spaces / Venues Page */
        'spaces-subtitle': 'हमारे स्थान',
        'spaces-title': 'स्थानों की खोज करें',
        'venue-catalog-subtitle': 'विशेष चयन',
        'venue-catalog-title': 'हमारे सिग्नेचर स्थान',
        'venue-cat-1': '5-सितारा लक्जरी होटल',
        'venue-cat-2': 'प्रीमियम बैंक्वेट हॉल',
        'venue-cat-3': 'कन्वेंशन सेंटर',
        'venue-itc-title': 'आईटीसी ग्रैंड सेंट्रल',
        'venue-itc-desc': 'मुंबई में लक्जरी 5-सितारा स्थान',
        'venue-itc-desc-long': 'मुंबई के केंद्र में कालातीत बॉलरूम के साथ विरासत विलासिता।',
        'venue-taj-title': 'ताज सांताक्रूज',
        'venue-taj-desc': 'प्रीमियम आधुनिक विलासिता',
        'venue-taj-desc-long': 'हवाई अड्डे के पास स्थित बड़े, शानदार बैंक्वेट स्पेस वाला लक्जरी होटल।',
        'venue-sahara-title': 'सहारा स्टार',
        'venue-sahara-desc': 'प्रतिष्ठित गुंबद वास्तुकला',
        'venue-sahara-desc-long': 'अत्याधुनिक इवेंट स्पेस और भव्य माहौल प्रदान करने वाला प्रीमियम 5-सितारा होटल।',
        'venue-westin-title': 'द वेस्टिन मुंबई',
        'venue-westin-desc': 'मंजमदार झील के दृश्य',
        'venue-radisson-title': 'रेडिसन ब्लू',
        'venue-radisson-desc': 'आधुनिक प्रीमियम कार्यक्रम',
        'venue-radisson-desc-long': 'कॉर्पोरेट और सामाजिक कार्यक्रमों के लिए बड़े होटल भोज और आधुनिक मीटिंग हॉल।',
        'venue-nesco-title': 'नेस्को केंद्र',
        'venue-nesco-desc': 'बड़े पैमाने पर आयोजन स्थल',
        'venue-nesco-desc-long': 'बड़े पैमाने पर प्रदर्शनियों और कार्यक्रमों के लिए मुंबई का प्रमुख बहुउद्देशीय स्थल।',
        'venue-marriott-title': 'कोर्टयार्ड बाय मैरियट',
        'venue-marriott-desc': 'आधुनिक व्यापार और शादियाँ',
        'venue-marriott-desc-long': 'शादियों और कॉर्पोरेट सभाओं के लिए आधुनिक लक्जरी भोज और बैठक कक्ष।',
        'venue-orchid-title': 'दी ऑर्चीड होटल',
        'venue-orchid-desc': 'इको-लक्जरी उत्कृष्टता',
        'venue-orchid-desc-long': 'कई बैंक्वेट और राजसी बॉलरूम वाला पर्यावरण अनुकूल लक्जरी होटल।',
        'venue-hilton-title': 'हिल्टन मुंबई',
        'venue-hilton-desc': 'शानदार विरासत शैली',
        'venue-hilton-desc-long': 'प्रीमियम अंतरराष्ट्रीय मानकों के साथ विशाल भोज और समारोह कक्ष।',
        'venue-holiday-inn-title': 'हॉलिडे इन मुंबई',
        'venue-holiday-inn-desc': 'बहुमुखी बैठक कक्षों और सुरुचिपूर्ण बैंक्वेट सुविधाओं वाला पूर्ण-सेवा होटल।',
        'venue-view-all': 'सभी स्थान देखें',
        'venue-enquire': 'पूछताछ करें →',

        /* Services Page Specifics */
        'srv-corp-desc': 'हाई-स्टेक बोर्ड मीटिंग्स से लेकर भव्य वार्षिक समारोहों तक, हम हर कॉर्पोरेट मील के पत्थर पर सटीकता, व्यावसायिकता और प्रतिष्ठा प्रदान करते हैं।',
        'srv-wed-desc': 'अनुकूलित शादियाँ जो आपकी अनूठी प्रेम कहानी को दर्शाती हैं। हम कार्यक्रम स्थल के चयन से लेकर अंतिम विदाई तक सब कुछ संभालते हैं।',
        'srv-birth-desc': 'जीवन के मील के पत्थर को उत्साह के साथ मनाएं। हमारे व्यक्तिगत थीम और जीवंत सजावट हर जन्मदिन और सालगिरह को एक यादगार कार्यक्रम बनाती हैं।',
        'srv-ent-desc': 'इमर्सिव मनोरंजन और थीम वाले अनुभव जो आपके मेहमानों को विस्मित कर देते हैं। सेलिब्रिटी प्रदर्शन से लेकर अभिनव वैचारिक पार्टियों तक।',
        'srv-decor-h': 'सजावट और डिजाइन',
        'srv-decor-desc': 'स्थानों को करामाती क्षेत्रों में बदलना। हमारे डिजाइनर लुभावनी दृश्य कथाएँ बनाने के लिए लक्जरी सौंदर्यशास्त्र के साथ समकालीन रुझानों का मिश्रण करते हैं।',
        'srv-cat-h': 'खानपान और रसद',
        'srv-cat-desc': 'आपके स्वाद के अनुरूप एक पाक यात्रा। वैश्विक व्यंजनों से लेकर स्थानीय व्यंजनों तक, त्रुटिहीन आतिथ्य और रसद सटीकता के साथ परोसा जाता है।',
        'srv-photo-h': 'फोटोग्राफी और वीडियोग्राफी',
        'srv-photo-desc': 'कलात्मकता के लेंस के माध्यम से आपके सबसे अनमोल क्षणों को सुरक्षित रखना। हमारी पुरस्कार विजेता टीम उन भावनाओं और विवरणों को कैद करती है जो आपकी कहानी बताते हैं।',
        'srv-makeup-h': 'मेकअप आर्टिस्ट',
        'srv-makeup-desc': 'आपके सबसे कीमती पलों के लिए चमक को फिर से परिभाषित किया गया। हमारे सेलिब्रिटी-स्तरीय कलाकार आपकी प्राकृतिक सुंदरता को बढ़ाने के लिए प्रीमियम कलात्मकता का उपयोग करते हैं।',

        /* Services Page Long Descriptions */
        'srv-page-subtitle': 'आपके लिए तैयार',
        'srv-page-title': 'व्यापक इवेंट समाधान',
        'srv-page-desc': 'अवधारणा से लेकर पूर्णता तक, हम आपके कार्यक्रम के हर पहलू को देखभाल, रचनात्मकता और व्यावसायिकता के साथ संभालते हैं।',
        'srv-pre-wed-h': 'शादी से पहले के कार्यक्रम',
        'srv-pre-wed-desc': 'मेहंदी, संगीत, हल्दी, या एक अंतरंग सगाई — हम रचनात्मकता और स्वभाव के साथ शादी से पहले के हर समारोह की योजना बनाते हैं और प्रबंधन करते हैं।',
        'srv-wed-desc-long': 'आपकी शादी आपके जीवन का सबसे यादगार दिन है। हम आपके प्रेम कहानी को पूरी तरह से प्रतिबिंबित करने के लिए हर विवरण — सजावट और फूलों से लेकर कार्यक्रम स्थल और खानपान तक — तैयार करते हैं।',
        'srv-corp-desc-long': 'वार्षिक बैठकों और उत्पाद लॉन्च से लेकर पुरस्कार रातों और टीम आउटिंग तक, हम निर्बाध कॉर्पोरेट कार्यक्रम प्रदान करते हैं जो आपके ब्रांड की दृष्टि को दर्शाते हैं।',
        'srv-birth-desc-long': 'चाहे वह पहला जन्मदिन हो या मील का पत्थर 50 वां, हमारी टीम खुशी और शानदार सजावट से भरे व्यक्तिगत जन्मदिन समारोह बनाती है।',
        'srv-anniv-h': 'वर्षगांठ समारोह',
        'srv-anniv-desc': 'अपने बंधन की तरह ही विशेष वर्षगांठ समारोह के साथ प्यार के वर्षों का जश्न मनाएं। हम अंतरंग रात्रिभोज, भव्य पार्टियों और उनके बीच सब कुछ क्यूरेट करते हैं।',
        'srv-social-h': 'सामाजिक समारोह',
        'srv-social-desc': 'गृह प्रवेश, बेबी शावर, किटी पार्टियाँ, पुनर्मिलन रात्रिभोज — हमारे लिए कोई भी सभा बहुत बड़ी या बहुत छोटी नहीं है। हम हर अवसर पर गर्मजोशी और भव्यता लाते हैं।',
        'srv-lic-h': 'लाइसेंसिंग',
        'srv-lic-desc': 'इवेंट की कानूनी जटिलताओं को आसानी से नेविगेट करना। हम शराब लाइसेंस और स्थानीय मंजूरी संभालते हैं, यह सुनिश्चित करते हुए कि आपका उत्सव अनुपालन बना रहे।',
        'srv-cat-desc-long': 'आपके स्वाद के अनुरूप एक गैस्ट्रोनोमिक यात्रा। हमारे मास्टर शेफ वैश्विक व्यंजनों और विशेष भोजन अवधारणाओं की विशेषता वाले उत्कृष्ट मेनू तैयार करते हैं।',
        'srv-photo-desc-long': 'सिनेमैटिक लेंस के माध्यम से आपकी विरासत को सुरक्षित रखना। हमारी संभ्रांत टीम आपके उत्सव की कच्ची भावना और कालातीत भव्यता को कैद करती है।',
        'srv-makeup-desc-long': 'आपके सबसे कीमती पलों के लिए चमक को फिर से परिभाषित किया गया। हमारे सेलिब्रिटी-स्तर के कलाकार प्रीमियम कलात्मकता का उपयोग करते हैं ताकि आप हर स्पॉटलाइट के नीचे लुभावनी दिखें।',

        /* About Page Specifics */
        'about-hero-sub': '2025 में स्थापित',
        'about-hero-title': 'अमोर इवेंट्स के बारे में',
        'about-story-sub': 'हमारी कहानी',
        'about-story-title': 'जुनून से जन्मे',
        'about-story-p1': 'अमोर इवेंट्स एक पूर्ण-सेवा इवेंट मैनेजमेंट कंपनी है जो प्यार, लालित्य और निर्बाध निष्पादन से भरे अविस्मरणीय उत्सव बनाने के जुनून से पैदा हुई है। हमारे नाम "अमोर" के अनुरूप, जिसका अर्थ है प्यार, हमारा मानना है कि हर घटना एक कहानी बताती है।',
        'about-story-p2': 'अंतरंग सभाओं से लेकर भव्य समारोहों तक, हम शादियों, प्री-वेडिंग फंक्शन, जन्मदिन, वर्षगाँठ, कॉर्पोरेट कार्यक्रमों और सामाजिक समारोहों की योजना बनाने और प्रबंधन करने में माहिर हैं।',
        'about-approach-sub': 'हमारा दृष्टिकोण',
        'about-approach-title': 'एंड-टू-एंड उत्कृष्टता',
        'about-approach-p1': 'हम व्यापक इवेंट समाधान पेश करते हैं, अवधारणा से लेकर पूर्णता तक सब कुछ संभालते हैं ताकि आप आराम कर सकें और वास्तव में अपने विशेष क्षणों का आनंद ले सकें। हमारी अनुभवी टीम छोटी से छोटी बातों पर ध्यान देती है।',
        'about-approach-p2': 'चाहे आप एक पारंपरिक उत्सव, एक आधुनिक सौंदर्य, या दोनों के संलयन का सपना देखते हों, हम इसे रचनात्मकता, सटीकता और देखभाल के साथ पूरा करते हैं।',
        'about-mission-sub': 'लक्ष्य',
        'about-mission-title': 'हमारा मिशन',
        'about-mission-p': 'हमारा मिशन व्यक्तिगत, तनाव मुक्त और उच्च गुणवत्ता वाली इवेंट मैनेजमेंट सेवाएं प्रदान करके आपके विचारों को असाधारण अनुभवों में बदलना है।',
        'about-vision-sub': 'भविष्य',
        'about-vision-title': 'हमारा दृष्टिकोण',
        'about-vision-p': 'हमारा दृष्टिकोण इवेंट मैनेजमेंट उद्योग में एक विश्वसनीय और अग्रणी नाम बनना है, जो नवाचार, विश्वसनीयता और उत्कृष्टता के लिए जाना जाता है।',

        /* Contact Page specifics */
        'contact-subtitle': 'कंसीयर्ज',
        'contact-title': 'अपने महान कार्य की शुरुआत करें',
        'contact-desc': 'बेस्पोक लालित्य की दुनिया में कदम रखें। हमारी टीम आपकी दृष्टि के हर विवरण को क्यूरेट करने के लिए तैयार है।',
        'contact-addr-h': 'हमारा कार्यालय',
        'contact-addr-v': 'अलुरा, बी-202, लोढ़ा कासा बेला गोल्ड,<br>एक्सपेरिया मॉल के पीछे, डोंबिवली,<br>ठाणे - 421204, महाराष्ट्र, भारत',
        'contact-phone-h': 'फोन',
        'contact-phone-v': '+91 77770 60321',
        'contact-email-h': 'ईमेल',
        'contact-email-v': 'info@amoreventz.com',
        'contact-hours-h': 'कार्यालय का समय',
        'contact-hours-v': 'सोमवार - शनिवार: सुबह 10:00 - शाम 7:00<br>रविवार: केवल अपॉइंटमेंट द्वारा',
        'contact-enq-h': 'पूछताछ',
        'contact-form-name': 'पूरा नाम',
        'contact-form-email': 'ईमेल पता',
        'contact-form-type': 'ईवेंट का प्रकार',
        'contact-form-guests': 'अनुमानित अतिथि',
        'contact-form-date': 'पसंदीदा तारीख',
        'contact-form-vision': 'हमें अपनी दृष्टि के बारे में बताएं',
        'contact-form-submit': 'पूछताछ जमा करें',
        'contact-op-wedding': 'शादी',
        'contact-op-gala': 'कॉर्पोरेट गाला',
        'contact-op-soiree': 'निजी पार्टी',
        'contact-op-other': 'अन्य उत्सव',
        'contact-ph-name': 'आपका नाम',
        'contact-ph-vision': 'हम आपके कार्यक्रम को शानदार कैसे बना सकते हैं?',

        /* Gallery Page specifics */
        'gallery-subtitle': 'कैद किए गए पल',
        'gallery-all': 'सभी',
        'gallery-weddings': 'शादियाँ',
        'gallery-corporate': 'कॉर्पोरेट',
        'gallery-decor': 'सजावट',
        'gallery-culinary': 'पाक कला',

        'gallery-hero-title': 'उत्सव की कला',
        'gallery-hero-subtitle': 'हमारे सबसे प्रतिष्ठित कार्यों का एक सिनेमाई संग्रह।',
        'gallery-hero-cta': 'अपना ईवेंट प्लान करें',

        /* Testimonials */
        'testi-subtitle': 'हमारे परिवारों के शब्द',
        'testi-title': 'कहानियाँ जो हमेशा याद रहती हैं',
        'testi-1-text': 'अमोर इवेंट्स ने हमारी सपनों की शादी को उस चीज़ में बदल दिया जिसकी हमने कल्पना भी नहीं की थी। हर फूल, हर रोशनी, हर पल — पूर्णता।',
        'testi-1-author': 'प्रिया और अर्जुन शाह',
        'testi-1-meta': 'शादी · मार्च 2024',
        'testi-2-text': 'ग्रैंड बॉलरूम लुभावना था। जैसे ही हमने कदम रखा, हमें पता चला कि यही वह जगह है। टीम ने सब कुछ संभाला — हमने बस जश्न मनाया।',
        'testi-2-author': 'मीरा और राहुल कपूर',
        'testi-2-meta': 'रिसेप्शन · नवंबर 2023',
        'testi-3-text': 'पेशेवर, मिलनसार और बिल्कुल विस्तार-उन्मुख। हमारा कॉर्पोरेट गाला त्रुटिहीन रूप से निष्पादित किया गया था। एवी सेटअप और खानपान उम्मीदों से अधिक था।',
        'testi-3-author': 'स्नेहा देसाई',
        'testi-3-meta': 'कॉर्पोरेट गाला · जनवरी 2024',
        'review-stats': 'गूगल रिव्यू पर 4.9 / 5 रेटिंग · 120+ सत्यापित समीक्षाएं',
        'read-reviews': 'सभी समीक्षाएं पढ़ें →',

        /* Boutique Footer */
        'footer-tagline': 'प्यार और लालित्य के साथ उत्सव तैयार करना।',
        'footer-book': 'स्थान बुक करें',
        'footer-email': 'हमें ईमेल करें',
        'footer-linkedin': 'लिंक्डइन',
        'footer-x': 'एक्स',
        'footer-privacy': 'गोपनीयता नीति',
        'footer-terms': 'नियम और शर्तें',
        'footer-collection': 'संग्रह विवरण',
        'footer-cookies': 'कुकी सेटिंग्स',
        'footer-copyright': 'कॉपीराइट © अमोर इवेंट्स लिमिटेड 2025',
        'footer-news-text': 'क्यूरेटेड इवेंट प्रेरणा और स्थान अंतर्दृष्टि प्राप्त करें जो आपको कहीं और नहीं मिलेगी, सीधे आपके इनबॉक्स में।',
        'footer-first-name': 'पहला नाम*',
        'footer-last-name': 'अंतिम नाम*',
        'footer-email-field': 'ईमेल*',
        'footer-subscribe': 'सब्सक्राइब करें'
    }
};

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
    }, { threshold: 0.15 });

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

    // 7. CONTACT FORM ENHANCEMENT
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'ENQUIRY SENT ✓';
                btn.style.backgroundColor = '#28a745';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
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
