/* ============================================================
   SADAS — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     i18n — Translations
     ---------------------------------------------------------- */
  var TRANSLATIONS = {
    en: {
      'nav-home': 'Home', 'nav-about': 'About',
      'nav-services': 'Services', 'nav-contact': 'Contact',
      'footer-copy': '&copy; {year} SADAS. All rights reserved.',
      /* index */
      'hero-tagline': 'Precious Metals & Financial Services',
      'hero-btn': 'Our Services', 'hero-scroll': 'Scroll',
      'home-about-label': 'Who We Are',
      'home-about-title': 'A Family of Trust,<br>Built Over Generations',
      'home-about-p': 'SADAS is a family-run precious metals and financial services firm rooted in Tripoli, Lebanon. For decades, we have served individuals, businesses, and institutions with integrity, expertise, and the quiet confidence of a house that honours its word.',
      'home-about-btn': 'Our Story',
      'home-svc-label': 'What We Do', 'home-svc-title': 'Our Services',
      'home-svc1-title': 'Precious Metals Trading',
      'home-svc1-p': 'Buying and selling gold and silver bullion, coins, and scrap at competitive, transparent rates — with same-day valuation on request.',
      'home-svc2-title': 'Financial Services',
      'home-svc2-p': 'Discreet wealth advisory, currency exchange, and structured financial solutions tailored to the needs of private clients and business partners.',
      'home-svc3-title': 'Valuation & Authentication',
      'home-svc3-p': 'Expert appraisal of gold, silver, and precious-metal jewellery — accurate, independent, and conducted with the utmost discretion.',
      'home-svc4-title': 'Whish Money Agent',
      'home-svc4-p': 'Fast, reliable domestic and international money transfers processed directly from our Tripoli office as an authorised Whish Money agent.',
      /* about */
      'about-page-label': 'About Us',
      'about-page-title': 'A Heritage of Precision<br>and Trust',
      'about-page-lead': 'Generations of expertise. A single, unwavering standard. SADAS has been a name synonymous with integrity in Tripoli\'s precious metals and financial landscape.',
      'about-story-label': 'Our Story',
      'about-story-title': 'Rooted in Tripoli,<br>Trusted Across the Region',
      'about-story-p1': 'SADAS — Saadeddine Abdulrahman Dannaoui & Sons — was founded in Tripoli, Lebanon with a simple but enduring conviction: that trust is the only real currency in this business. From its earliest days, the firm built its reputation one transaction at a time, earning the confidence of merchants, families, and institutions across the region.',
      'about-story-p2': 'Over the decades, we have grown alongside our clients — expanding our capabilities in precious metals, broadening our financial services, and deepening our understanding of the markets that matter most to the people we serve. Yet throughout all of this, the firm has remained what it has always been: a family business, guided by family values.',
      'about-story-p3': 'Today, SADAS continues to operate from Tripoli — the north\'s historic commercial heart — and stands as one of the region\'s most respected names in gold, silver, and specialist financial counsel. Our clients return not only for our expertise, but for the peace of mind that comes with knowing exactly who they are dealing with.',
      'about-pillars-label': 'Why SADAS', 'about-pillars-title': 'What Sets Us Apart',
      'about-pillars-p': 'Four principles have guided every decision since the firm\'s founding — and they guide every decision we make today.',
      'about-p1-title': 'Expertise', 'about-p1-desc': 'Decades of hands-on experience in gold and silver markets give our team an edge that no software can replicate — and our clients know it.',
      'about-p2-title': 'Integrity', 'about-p2-desc': 'Every valuation, every transaction, every recommendation is delivered with the same honesty we would expect for our own family.',
      'about-p3-title': 'Local Roots', 'about-p3-desc': 'Born and built in Tripoli, we understand the rhythms of this market — its people, its relationships, and its unique dynamics — better than anyone.',
      'about-p4-title': 'Discretion', 'about-p4-desc': 'Client privacy is not a policy — it is a founding value. Every engagement with SADAS is treated with absolute confidentiality as a matter of principle.',
      /* services */
      'svc-page-label': 'What We Offer', 'svc-page-title': 'Our Services',
      'svc-page-lead': 'Whether you are buying, selling, or seeking independent counsel, SADAS brings decades of specialist knowledge to every engagement — with rates and advice you can trust.',
      'svc1-aside-label': 'Core Service', 'svc1-title': 'Precious Metals Trading',
      'svc1-p1': 'At the heart of SADAS is the trading of gold and silver in all its forms — from international standard bullion bars and sovereign coins to jewellery and industrial scrap. We offer competitive buy and sell rates benchmarked daily against global spot prices, ensuring our clients always receive fair value.',
      'svc1-p2': 'Transactions are conducted with complete transparency. Every piece is weighed and assessed on-site in the presence of the client, and our pricing methodology is explained clearly at every step. There are no hidden fees, no surprises — only the straightforward dealing that has defined this firm for generations.',
      'svc1-tag1': 'Gold Bullion & Bars', 'svc1-tag2': 'Silver Bullion', 'svc1-tag3': 'Sovereign Coins',
      'svc1-tag4': 'Jewellery Purchase', 'svc1-tag5': 'Scrap Metal', 'svc1-tag6': 'Same-Day Settlement',
      'svc2-aside-label': 'Financial', 'svc2-title': 'Financial Services',
      'svc2-p1': 'Beyond metals, SADAS provides a suite of specialist financial services designed for private clients and businesses navigating complex or sensitive financial situations. Our approach is personal, discreet, and built on a deep understanding of the local and regional market environment.',
      'svc2-p2': 'Services include currency exchange at preferential rates, structured financial planning for asset preservation, and access to a trusted network of professional partners across banking, legal, and advisory disciplines.',
      'svc2-tag1': 'Currency Exchange', 'svc2-tag2': 'Asset Preservation', 'svc2-tag3': 'Private Advisory',
      'svc2-tag4': 'Wealth Planning', 'svc2-tag5': 'Confidential Transactions',
      'svc3-aside-label': 'Specialist', 'svc3-title': 'Valuation & Authentication',
      'svc3-p1': 'We offer independent, professional valuation of gold and silver items — whether for sale, insurance, estate settlement, or simple peace of mind. Our assessments are conducted by experienced specialists using calibrated, certified equipment and current market data.',
      'svc3-p2': 'Authentication services are available for coins, antique jewellery, and hallmarked precious-metal pieces. Results are provided verbally on the day or, where required, in a formal written report.',
      'svc3-tag1': 'Gold Purity Testing', 'svc3-tag2': 'Silver Assay', 'svc3-tag3': 'Jewellery Appraisal',
      'svc3-tag4': 'Coin Authentication', 'svc3-tag5': 'Written Reports', 'svc3-tag6': 'Insurance Valuation',
      'svc4-aside-label': 'Transfers', 'svc4-title': 'Whish Money Agent',
      'svc4-p1': 'SADAS is an authorised Whish Money agent, offering fast, reliable domestic and international money transfers directly from our Tripoli office. Whish Money is one of Lebanon\'s leading licensed electronic payment networks, trusted by hundreds of thousands of users across the country.',
      'svc4-p2': 'Whether you are sending money to family, settling a business obligation, or receiving funds from abroad, our team processes transactions quickly and securely — with the added assurance of dealing with a firm you already know and trust.',
      'svc4-tag1': 'Domestic Transfers', 'svc4-tag2': 'International Transfers', 'svc4-tag3': 'Licensed Agent',
      'svc4-tag4': 'Fast Settlement', 'svc4-tag5': 'In-Branch Service',
      'svc-cta-title': 'Ready to Get Started?',
      'svc-cta-p': 'Reach out to our team directly — we are available via WhatsApp or email, and happy to answer questions before any commitment is made.',
      'svc-cta-btn': 'Contact Us',
      /* contact */
      'contact-page-label': 'Get In Touch', 'contact-page-title': 'Contact Us',
      'contact-page-lead': 'We welcome enquiries by phone, WhatsApp, or email. No forms, no wait — just a direct conversation with our team in Tripoli.',
      'contact-find-us': 'Find Us',
      'contact-address-label': 'Address',
      'contact-address-val': '[Street Name], [District]<br>Tripoli, North Lebanon<br>Lebanon',
      'contact-phone-label': 'Phone',
      'contact-wa-label': 'WhatsApp',
      'contact-email-label': 'Email',
      'contact-hours-label': 'Business Hours',
      'contact-hours-val': 'Monday – Saturday: 8:00 am – 8:00 pm<br>Sunday: Closed',
      'contact-wa-cta-title': 'Prefer to Message Us?',
      'contact-wa-cta-p': 'WhatsApp is the fastest way to reach us. Send us a message and we will get back to you as quickly as possible.',
      'contact-wa-btn': 'Message on WhatsApp',
      /* page titles */
      'pt-index': 'SADAS — Precious Metals & Financial Services | Tripoli, Lebanon',
      'pt-about': 'About — SADAS | Tripoli, Lebanon',
      'pt-services': 'Services — SADAS | Tripoli, Lebanon',
      'pt-contact': 'Contact — SADAS | Tripoli, Lebanon'
    },
    ar: {
      'nav-home': 'الرئيسية',
      'nav-about': 'من نحن',
      'nav-services': 'خدماتنا',
      'nav-contact': 'تواصل معنا',
      'footer-copy': '&copy; {year} سادس. جميع الحقوق محفوظة.',
      /* index */
      'hero-tagline': 'المعادن الثمينة والخدمات المالية',
      'hero-btn': 'خدماتنا',
      'hero-scroll': 'مرّر',
      'home-about-label': 'من نحن',
      'home-about-title': 'عائلة من الثقة،<br>بُنيت عبر الأجيال',
      'home-about-p': 'سادس شركة عائلية متخصصة في تجارة المعادن الثمينة والخدمات المالية، متجذرة في طرابلس، لبنان. نخدم منذ عقود الأفراد والشركات والمؤسسات بنزاهة وخبرة، وبالثقة الهادئة لبيت يحترم كلمته.',
      'home-about-btn': 'قصتنا',
      'home-svc-label': 'ما نقدمه',
      'home-svc-title': 'خدماتنا',
      'home-svc1-title': 'تجارة المعادن الثمينة',
      'home-svc1-p': 'شراء وبيع سبائك الذهب والفضة والعملات والخردة بأسعار تنافسية وشفافة — مع تقييم فوري عند الطلب.',
      'home-svc2-title': 'الخدمات المالية',
      'home-svc2-p': 'استشارات ثروات سرية، وصرف عملات، وحلول مالية منظمة مصممة لاحتياجات العملاء الخاصين وشركاء الأعمال.',
      'home-svc3-title': 'التقييم والتوثيق',
      'home-svc3-p': 'تقييم احترافي للذهب والفضة والمجوهرات — دقيق، مستقل، ويجري بالغ من التكتم.',
      'home-svc4-title': 'وكيل ويش موني',
      'home-svc4-p': 'تحويلات مالية محلية ودولية سريعة وموثوقة، تُعالَج مباشرة من مكتبنا في طرابلس بوصفنا وكيلاً معتمداً لويش موني.',
      /* about */
      'about-page-label': 'عن الشركة',
      'about-page-title': 'إرث من الدقة والثقة',
      'about-page-lead': 'أجيال من الخبرة. معيار واحد لا يتزعزع. كانت سادس دائماً اسماً مرادفاً للنزاهة في مشهد المعادن الثمينة والمال في طرابلس.',
      'about-story-label': 'قصتنا',
      'about-story-title': 'متجذرون في طرابلس،<br>موثوقون في المنطقة',
      'about-story-p1': 'سادس — سعد الدين عبد الرحمن دنّاوي وأبناؤه — تأسست في طرابلس، لبنان، بقناعة بسيطة راسخة: أن الثقة هي العملة الحقيقية الوحيدة في هذا العمل. منذ أيامها الأولى، بنت الشركة سمعتها صفقة تلو الأخرى، مكتسبةً ثقة التجار والعائلات والمؤسسات في جميع أنحاء المنطقة.',
      'about-story-p2': 'على مدى العقود، نمونا جنباً إلى جنب مع عملائنا — موسّعين قدراتنا في المعادن الثمينة، ومطوّرين خدماتنا المالية، ومعمّقين فهمنا للأسواق الأكثر أهمية للناس الذين نخدمهم. ومع ذلك، ظلت الشركة طوال الوقت ما كانت عليه دائماً: شركة عائلية، تهتدي بقيم العائلة.',
      'about-story-p3': 'اليوم، تواصل سادس عملها من طرابلس — قلب الشمال التجاري العريق — وتقف كأحد أكثر الأسماء موثوقيةً في المنطقة في مجال الذهب والفضة والاستشارات المالية المتخصصة. يعود عملاؤنا ليس لخبرتنا فحسب، بل لراحة البال التي تأتي من معرفة من يتعاملون معه بالضبط.',
      'about-pillars-label': 'لماذا سادس',
      'about-pillars-title': 'ما يميزنا',
      'about-pillars-p': 'أربعة مبادئ وجّهت كل قرار منذ تأسيس الشركة — وتوجّه كل قرار نتخذه اليوم.',
      'about-p1-title': 'الخبرة',
      'about-p1-desc': 'عقود من الخبرة العملية في أسواق الذهب والفضة تمنح فريقنا ميزة لا يمكن لأي برنامج أن يحاكيها — وعملاؤنا يعرفون ذلك.',
      'about-p2-title': 'النزاهة',
      'about-p2-desc': 'كل تقييم، وكل صفقة، وكل توصية تُقدَّم بالأمانة ذاتها التي نتوقعها لعائلتنا.',
      'about-p3-title': 'الجذور المحلية',
      'about-p3-desc': 'وُلدنا وبُنينا في طرابلس، نفهم إيقاع هذا السوق — بشره وعلاقاته وديناميكياته الفريدة — أكثر من أي طرف آخر.',
      'about-p4-title': 'السرية',
      'about-p4-desc': 'خصوصية العميل ليست سياسة — بل هي قيمة تأسيسية. كل تعامل مع سادس يُعالَج بسرية تامة مبدأً لا قاعدة.',
      /* services */
      'svc-page-label': 'ما نقدمه',
      'svc-page-title': 'خدماتنا',
      'svc-page-lead': 'سواء كنت تشتري أو تبيع أو تسعى للحصول على مشورة مستقلة، تجلب سادس عقوداً من المعرفة المتخصصة لكل تعامل — بأسعار ونصائح يمكنك الوثوق بها.',
      'svc1-aside-label': 'الخدمة الأساسية',
      'svc1-title': 'تجارة المعادن الثمينة',
      'svc1-p1': 'في قلب سادس تجارة الذهب والفضة بكل أشكالها — من سبائك المعايير الدولية والعملات السيادية إلى المجوهرات والخردة الصناعية. نقدم أسعار شراء وبيع تنافسية محددة يومياً وفق أسعار السوق العالمية، لضمان حصول عملائنا دائماً على قيمة عادلة.',
      'svc1-p2': 'تُجرى الصفقات بشفافية تامة. كل قطعة تُوزن وتُقيَّم في الموقع بحضور العميل، ومنهجية التسعير لدينا موضّحة بوضوح في كل خطوة. لا رسوم خفية، لا مفاجآت — فقط التعامل المباشر الذي ميّز هذه الشركة على مدى أجيال.',
      'svc1-tag1': 'سبائك الذهب والقضبان',
      'svc1-tag2': 'سبائك الفضة',
      'svc1-tag3': 'العملات السيادية',
      'svc1-tag4': 'شراء المجوهرات',
      'svc1-tag5': 'الخردة المعدنية',
      'svc1-tag6': 'التسوية الفورية',
      'svc2-aside-label': 'المالية',
      'svc2-title': 'الخدمات المالية',
      'svc2-p1': 'بعيداً عن المعادن، تقدم سادس مجموعة من الخدمات المالية المتخصصة للعملاء الخاصين والشركات. نهجنا شخصي، سري، ومبني على فهم عميق للبيئة الاقتصادية المحلية والإقليمية.',
      'svc2-p2': 'تشمل الخدمات صرف العملات بأسعار مميزة، والتخطيط المالي الهيكلي للحفاظ على الأصول، والوصول إلى شبكة موثوقة من الشركاء المهنيين في القطاعات المصرفية والقانونية والاستشارية.',
      'svc2-tag1': 'صرف العملات',
      'svc2-tag2': 'الحفاظ على الأصول',
      'svc2-tag3': 'الاستشارات الخاصة',
      'svc2-tag4': 'تخطيط الثروات',
      'svc2-tag5': 'المعاملات السرية',
      'svc3-aside-label': 'متخصص',
      'svc3-title': 'التقييم والتوثيق',
      'svc3-p1': 'نقدم تقييماً مستقلاً واحترافياً لقطع الذهب والفضة — سواء للبيع أو التأمين أو تسوية التركات أو الاطمئنان. تُجرى تقييماتنا من قبَل متخصصين ذوي خبرة باستخدام معدات معايَرة ومعتمدة وبيانات السوق الحالية.',
      'svc3-p2': 'خدمات التوثيق متاحة للعملات والمجوهرات القديمة والقطع المعدنية الثمينة المختومة. تُقدَّم النتائج شفهياً في اليوم ذاته أو، عند الاقتضاء، في تقرير مكتوب رسمي.',
      'svc3-tag1': 'اختبار نقاء الذهب',
      'svc3-tag2': 'فحص الفضة',
      'svc3-tag3': 'تقييم المجوهرات',
      'svc3-tag4': 'توثيق العملات',
      'svc3-tag5': 'التقارير المكتوبة',
      'svc3-tag6': 'تقييم التأمين',
      'svc4-aside-label': 'التحويلات',
      'svc4-title': 'وكيل ويش موني',
      'svc4-p1': 'سادس وكيل معتمد لويش موني، تقدم تحويلات مالية محلية ودولية سريعة وموثوقة مباشرة من مكتبنا في طرابلس. ويش موني هي إحدى شبكات الدفع الإلكتروني المرخصة الرائدة في لبنان.',
      'svc4-p2': 'سواء كنت ترسل أموالاً للعائلة، أو تسدد التزاماً تجارياً، أو تستقبل أموالاً من الخارج، يعالج فريقنا المعاملات بسرعة وأمان — مع ضمان التعامل مع شركة تعرفها وتثق بها.',
      'svc4-tag1': 'التحويلات المحلية',
      'svc4-tag2': 'التحويلات الدولية',
      'svc4-tag3': 'وكيل معتمد',
      'svc4-tag4': 'تسوية سريعة',
      'svc4-tag5': 'خدمة في الفرع',
      'svc-cta-title': 'هل أنت مستعد للبدء؟',
      'svc-cta-p': 'تواصل مع فريقنا مباشرة — نحن متاحون عبر واتساب أو البريد الإلكتروني، وسعداء بالإجابة على استفساراتك قبل أي التزام.',
      'svc-cta-btn': 'تواصل معنا',
      /* contact */
      'contact-page-label': 'تواصل معنا',
      'contact-page-title': 'اتصل بنا',
      'contact-page-lead': 'نرحب بالاستفسارات عبر الهاتف أو واتساب أو البريد الإلكتروني. بدون نماذج، بدون انتظار — محادثة مباشرة مع فريقنا في طرابلس.',
      'contact-find-us': 'موقعنا',
      'contact-address-label': 'العنوان',
      'contact-address-val': '[اسم الشارع]، [الحي]<br>طرابلس، شمال لبنان<br>لبنان',
      'contact-phone-label': 'الهاتف',
      'contact-wa-label': 'واتساب',
      'contact-email-label': 'البريد الإلكتروني',
      'contact-hours-label': 'ساعات العمل',
      'contact-hours-val': 'الاثنين – السبت: 8:00 صباحاً – 8:00 مساءً<br>الأحد: مغلق',
      'contact-wa-cta-title': 'تفضل بمراسلتنا؟',
      'contact-wa-cta-p': 'واتساب هو أسرع وسيلة للتواصل معنا. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.',
      'contact-wa-btn': 'راسلنا على واتساب',
      /* page titles */
      'pt-index': 'سادس — المعادن الثمينة والخدمات المالية | طرابلس، لبنان',
      'pt-about': 'عن الشركة — سادس | طرابلس، لبنان',
      'pt-services': 'خدماتنا — سادس | طرابلس، لبنان',
      'pt-contact': 'تواصل معنا — سادس | طرابلس، لبنان'
    }
  };

  function setLanguage(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;
    var year = new Date().getFullYear();

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key].replace('{year}', year);
    });

    /* Page title */
    var page = (window.location.pathname.split('/').pop() || 'index.html').replace('.html', '');
    if (t['pt-' + page]) document.title = t['pt-' + page];

    /* Direction + lang attribute */
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    /* Toggle button label */
    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'ar' ? 'EN' : 'ع';

    localStorage.setItem('sadas-lang', lang);

    /* Keep year fresh for non-i18n footer copy */
    var yr = document.getElementById('year');
    if (yr) yr.textContent = year;
  }

  /* Language toggle click */
  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var current = localStorage.getItem('sadas-lang') || 'en';
      setLanguage(current === 'en' ? 'ar' : 'en');
    });
  }

  /* Apply saved language on every page load */
  setLanguage(localStorage.getItem('sadas-lang') || 'en');

  /* ----------------------------------------------------------
     1. NAVBAR — scroll-triggered frosted glass
     ---------------------------------------------------------- */
  var navbar = document.querySelector('.navbar');

  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  if (navbar && navbar.dataset.alwaysScrolled === 'true') {
    navbar.classList.add('scrolled');
  } else {
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();
  }

  /* ----------------------------------------------------------
     2. ACTIVE NAV LINK
     ---------------------------------------------------------- */
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
    if (link.getAttribute('href') === currentFile) link.classList.add('active');
  });

  /* ----------------------------------------------------------
     3. MOBILE NAV
     ---------------------------------------------------------- */
  var hamburger  = document.querySelector('.nav-hamburger');
  var mobileNav  = document.querySelector('.nav-mobile');
  var mobileClose = document.querySelector('.nav-mobile-close');

  function openMobileNav()  { if (!mobileNav || !hamburger) return; hamburger.classList.add('open'); mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function closeMobileNav() { if (!mobileNav || !hamburger) return; hamburger.classList.remove('open'); mobileNav.classList.remove('open'); document.body.style.overflow = ''; }

  if (hamburger) hamburger.addEventListener('click', function () { mobileNav.classList.contains('open') ? closeMobileNav() : openMobileNav(); });
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  document.querySelectorAll('.nav-mobile a').forEach(function (l) { l.addEventListener('click', closeMobileNav); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMobileNav(); });

  /* ----------------------------------------------------------
     4. SCROLL REVEAL
     ---------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  /* ----------------------------------------------------------
     5. HERO CANVAS
     ---------------------------------------------------------- */
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var GOLD_R = 201, GOLD_G = 168, GOLD_B = 76;
  var PARTICLE_COUNT = 55, CONNECT_DIST = 130, MOUSE_DIST = 160;
  var W, H, particles, mouse = { x: null, y: null };

  function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
  window.addEventListener('resize', resize, { passive: true });
  canvas.addEventListener('mousemove', function (e) { var r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  canvas.addEventListener('mouseleave', function () { mouse.x = null; mouse.y = null; });

  function Particle() {
    this.reset = function () { this.x = Math.random() * W; this.y = Math.random() * H; this.vx = (Math.random() - 0.5) * 0.25; this.vy = (Math.random() - 0.5) * 0.25; this.r = Math.random() * 1.2 + 0.5; this.alpha = Math.random() * 0.35 + 0.1; };
    this.update = function () {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -5) this.x = W + 5; if (this.x > W + 5) this.x = -5;
      if (this.y < -5) this.y = H + 5; if (this.y > H + 5) this.y = -5;
      if (mouse.x !== null) { var dx = mouse.x - this.x, dy = mouse.y - this.y, dist = Math.sqrt(dx*dx+dy*dy); if (dist < MOUSE_DIST) { var f = (MOUSE_DIST-dist)/MOUSE_DIST*0.012; this.vx += dx*f/dist; this.vy += dy*f/dist; } }
      var spd = Math.sqrt(this.vx*this.vx+this.vy*this.vy); if (spd > 0.6) { this.vx = this.vx/spd*0.6; this.vy = this.vy/spd*0.6; }
    };
    this.draw = function () { ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI*2); ctx.fillStyle = 'rgba('+GOLD_R+','+GOLD_G+','+GOLD_B+','+this.alpha+')'; ctx.fill(); };
    this.reset();
  }

  function drawConnections() {
    for (var i = 0; i < particles.length; i++) for (var j = i+1; j < particles.length; j++) {
      var dx = particles[i].x-particles[j].x, dy = particles[i].y-particles[j].y, dist = Math.sqrt(dx*dx+dy*dy);
      if (dist < CONNECT_DIST) { var a = (1-dist/CONNECT_DIST)*0.07; ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(particles[j].x,particles[j].y); ctx.strokeStyle='rgba('+GOLD_R+','+GOLD_G+','+GOLD_B+','+a+')'; ctx.lineWidth=0.5; ctx.stroke(); }
    }
  }

  function animate() { ctx.clearRect(0,0,W,H); particles.forEach(function(p){p.update();p.draw();}); drawConnections(); requestAnimationFrame(animate); }
  function init() { resize(); particles = []; for (var i=0;i<PARTICLE_COUNT;i++) particles.push(new Particle()); animate(); }
  init();

})();
