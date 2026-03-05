import './style.css'

const translations = {
  en: {
    nav_home: 'Home',
    nav_features: 'Features',
    nav_paths: 'Skill Paths',
    nav_pricing: 'Pricing',
    nav_login: 'Login',
    nav_signup: 'Sign Up',
    hero_title: 'Learn. Build. Get Hired.',
    hero_subtitle: 'Master in-demand skills through real-world projects and land your dream tech job',
    hero_cta_start: 'Start Learning Free',
    hero_cta_explore: 'Explore Courses',
    hero_stat_learners: 'Learners',
    hero_stat_courses: 'Courses',
    hero_stat_success: 'Success Rate',
    features_title: 'Why Choose EduCare?',
    features_subtitle: 'Everything you need to succeed in your tech career',
    feature1_title: 'Community-Based Learning',
    feature1_desc: 'Learn alongside thousands of motivated learners. Share knowledge, solve problems together, and grow your network.',
    feature2_title: 'Outcome-Focused Projects',
    feature2_desc: 'Build real-world projects that matter. Create a portfolio that impresses employers and showcases your skills.',
    feature3_title: 'AI Study Assistant',
    feature3_desc: 'Get instant help with our AI-powered assistant. Available 24/7 to answer questions and guide your learning journey.',
    feature4_title: 'Affordable at ₹150/month',
    feature4_desc: 'Quality education shouldn\'t break the bank. Access all courses and features for less than your daily coffee.',
    paths_title: 'Choose Your Path',
    paths_subtitle: 'Structured learning paths designed by industry experts',
    path_badge_popular: 'Popular',
    path_badge_trending: 'Trending',
    path_badge_new: 'New',
    path1_title: 'Full Stack Development',
    path1_desc: 'Master frontend and backend technologies. Build complete web applications from scratch.',
    path2_title: 'Data Science & AI',
    path2_desc: 'Dive into machine learning, data analysis, and artificial intelligence applications.',
    path3_title: 'Cloud & DevOps',
    path3_desc: 'Learn cloud infrastructure, automation, and modern deployment practices.',
    path_cta: 'Learn More →',
    hiw_title: 'How It Works',
    hiw_subtitle: 'Your journey to success in three simple steps',
    step1_title: 'Choose Your Path',
    step1_desc: 'Browse our curated learning paths and select the one that aligns with your career goals.',
    step2_title: 'Learn & Build',
    step2_desc: 'Follow structured curriculum, complete hands-on projects, and get feedback from mentors.',
    step3_title: 'Get Hired',
    step3_desc: 'Showcase your portfolio, get interview prep support, and land your dream job.',
    testimonials_title: 'Success Stories',
    testimonials_subtitle: 'See what our learners have achieved',
    testimonial1_text: '"EduCare transformed my career. The practical projects helped me land a job at a top tech company within 4 months!"',
    testimonial1_name: 'Priya Sharma',
    testimonial1_role: 'Software Engineer at Google',
    testimonial2_text: '"The AI assistant is a game-changer. It\'s like having a personal tutor available 24/7. Best investment I\'ve made!"',
    testimonial2_name: 'Rahul Kumar',
    testimonial2_role: 'Data Scientist at Amazon',
    testimonial3_text: '"Affordable, comprehensive, and effective. EduCare gave me the confidence to switch careers into tech."',
    testimonial3_name: 'Ananya Reddy',
    testimonial3_role: 'Full Stack Developer at Flipkart',
    pricing_title: 'Simple, Transparent Pricing',
    pricing_subtitle: 'Choose the plan that works for you',
    plan1_title: 'Free',
    plan2_title: 'Pro',
    plan3_title: 'Enterprise',
    plan_period: '/month',
    plan3_custom: 'Custom',
    plan1_feature1: '✓ Access to 10 courses',
    plan1_feature2: '✓ Community forum access',
    plan1_feature3: '✓ Basic progress tracking',
    plan1_feature4: '✗ AI Study Assistant',
    plan1_feature5: '✗ Certificate of completion',
    plan2_feature1: '✓ Access to all courses',
    plan2_feature2: '✓ Community forum access',
    plan2_feature3: '✓ Advanced progress tracking',
    plan2_feature4: '✓ AI Study Assistant',
    plan2_feature5: '✓ Certificate of completion',
    plan3_feature1: '✓ Everything in Pro',
    plan3_feature2: '✓ Custom learning paths',
    plan3_feature3: '✓ Dedicated support',
    plan3_feature4: '✓ Team management tools',
    plan3_feature5: '✓ Advanced analytics',
    plan_badge_popular: 'Most Popular',
    plan_cta_start: 'Get Started',
    plan_cta_upgrade: 'Upgrade Now',
    plan_cta_contact: 'Contact Sales',
    footer_tagline: 'Empowering learners to build their future in tech',
    footer_product: 'Product',
    footer_company: 'Company',
    footer_support: 'Support',
    footer_about: 'About Us',
    footer_careers: 'Careers',
    footer_blog: 'Blog',
    footer_help: 'Help Center',
    footer_contact: 'Contact Us',
    footer_privacy: 'Privacy Policy',
    footer_copyright: '© 2024 EduCare. All rights reserved.'
  },
  hi: {
    nav_home: 'होम',
    nav_features: 'विशेषताएं',
    nav_paths: 'स्किल पाथ',
    nav_pricing: 'मूल्य निर्धारण',
    nav_login: 'लॉगिन',
    nav_signup: 'साइन अप',
    hero_title: 'सीखें। बनाएं। नौकरी पाएं।',
    hero_subtitle: 'वास्तविक परियोजनाओं के माध्यम से मांग वाले कौशल में महारत हासिल करें और अपनी सपनों की तकनीकी नौकरी पाएं',
    hero_cta_start: 'मुफ्त में सीखना शुरू करें',
    hero_cta_explore: 'पाठ्यक्रम देखें',
    hero_stat_learners: 'शिक्षार्थी',
    hero_stat_courses: 'पाठ्यक्रम',
    hero_stat_success: 'सफलता दर',
    features_title: 'EduCare क्यों चुनें?',
    features_subtitle: 'अपने तकनीकी करियर में सफल होने के लिए आवश्यक सब कुछ',
    feature1_title: 'समुदाय-आधारित शिक्षा',
    feature1_desc: 'हजारों प्रेरित शिक्षार्थियों के साथ सीखें। ज्ञान साझा करें, समस्याओं को एक साथ हल करें, और अपने नेटवर्क को बढ़ाएं।',
    feature2_title: 'परिणाम-केंद्रित परियोजनाएं',
    feature2_desc: 'वास्तविक दुनिया की परियोजनाएं बनाएं जो मायने रखती हैं। एक पोर्टफोलियो बनाएं जो नियोक्ताओं को प्रभावित करे।',
    feature3_title: 'AI स्टडी असिस्टेंट',
    feature3_desc: 'हमारे AI-संचालित सहायक से तुरंत सहायता प्राप्त करें। आपकी सीखने की यात्रा में मार्गदर्शन के लिए 24/7 उपलब्ध।',
    feature4_title: 'सस्ती ₹150/महीना',
    feature4_desc: 'गुणवत्ता शिक्षा महंगी नहीं होनी चाहिए। अपनी दैनिक कॉफी से कम में सभी पाठ्यक्रमों तक पहुंच प्राप्त करें।',
    paths_title: 'अपना रास्ता चुनें',
    paths_subtitle: 'उद्योग विशेषज्ञों द्वारा डिज़ाइन किए गए संरचित सीखने के रास्ते',
    path_badge_popular: 'लोकप्रिय',
    path_badge_trending: 'ट्रेंडिंग',
    path_badge_new: 'नया',
    path1_title: 'फुल स्टैक डेवलपमेंट',
    path1_desc: 'फ्रंटएंड और बैकएंड तकनीकों में महारत हासिल करें। शुरुआत से पूर्ण वेब एप्लिकेशन बनाएं।',
    path2_title: 'डेटा साइंस और AI',
    path2_desc: 'मशीन लर्निंग, डेटा विश्लेषण और कृत्रिम बुद्धिमत्ता अनुप्रयोगों में गहराई से उतरें।',
    path3_title: 'क्लाउड और DevOps',
    path3_desc: 'क्लाउड इंफ्रास्ट्रक्चर, ऑटोमेशन और आधुनिक परिनियोजन प्रथाओं को सीखें।',
    path_cta: 'और जानें →',
    hiw_title: 'यह कैसे काम करता है',
    hiw_subtitle: 'तीन सरल चरणों में सफलता की आपकी यात्रा',
    step1_title: 'अपना रास्ता चुनें',
    step1_desc: 'हमारे क्यूरेटेड लर्निंग पाथ ब्राउज़ करें और अपने करियर लक्ष्यों के अनुरूप एक चुनें।',
    step2_title: 'सीखें और बनाएं',
    step2_desc: 'संरचित पाठ्यक्रम का पालन करें, व्यावहारिक परियोजनाओं को पूरा करें, और सलाहकारों से प्रतिक्रिया प्राप्त करें।',
    step3_title: 'नौकरी पाएं',
    step3_desc: 'अपने पोर्टफोलियो को प्रदर्शित करें, साक्षात्कार की तैयारी का समर्थन प्राप्त करें, और अपनी सपनों की नौकरी पाएं।',
    testimonials_title: 'सफलता की कहानियां',
    testimonials_subtitle: 'देखें हमारे शिक्षार्थियों ने क्या हासिल किया है',
    testimonial1_text: '"EduCare ने मेरे करियर को बदल दिया। व्यावहारिक परियोजनाओं ने मुझे 4 महीनों में एक शीर्ष तकनीकी कंपनी में नौकरी दिलाने में मदद की!"',
    testimonial1_name: 'प्रिया शर्मा',
    testimonial1_role: 'Google में सॉफ्टवेयर इंजीनियर',
    testimonial2_text: '"AI सहायक एक गेम-चेंजर है। यह 24/7 उपलब्ध व्यक्तिगत ट्यूटर रखने जैसा है। मेरा सबसे अच्छा निवेश!"',
    testimonial2_name: 'राहुल कुमार',
    testimonial2_role: 'Amazon में डेटा साइंटिस्ट',
    testimonial3_text: '"किफायती, व्यापक और प्रभावी। EduCare ने मुझे तकनीक में करियर बदलने का विश्वास दिया।"',
    testimonial3_name: 'अनन्या रेड्डी',
    testimonial3_role: 'Flipkart में फुल स्टैक डेवलपर',
    pricing_title: 'सरल, पारदर्शी मूल्य निर्धारण',
    pricing_subtitle: 'वह योजना चुनें जो आपके लिए काम करे',
    plan1_title: 'मुफ्त',
    plan2_title: 'प्रो',
    plan3_title: 'एंटरप्राइज',
    plan_period: '/महीना',
    plan3_custom: 'कस्टम',
    plan1_feature1: '✓ 10 पाठ्यक्रमों तक पहुंच',
    plan1_feature2: '✓ समुदाय फोरम तक पहुंच',
    plan1_feature3: '✓ बेसिक प्रगति ट्रैकिंग',
    plan1_feature4: '✗ AI स्टडी असिस्टेंट',
    plan1_feature5: '✗ पूर्णता प्रमाणपत्र',
    plan2_feature1: '✓ सभी पाठ्यक्रमों तक पहुंच',
    plan2_feature2: '✓ समुदाय फोरम तक पहुंच',
    plan2_feature3: '✓ उन्नत प्रगति ट्रैकिंग',
    plan2_feature4: '✓ AI स्टडी असिस्टेंट',
    plan2_feature5: '✓ पूर्णता प्रमाणपत्र',
    plan3_feature1: '✓ प्रो में सब कुछ',
    plan3_feature2: '✓ कस्टम लर्निंग पाथ',
    plan3_feature3: '✓ समर्पित समर्थन',
    plan3_feature4: '✓ टीम प्रबंधन उपकरण',
    plan3_feature5: '✓ उन्नत विश्लेषण',
    plan_badge_popular: 'सबसे लोकप्रिय',
    plan_cta_start: 'शुरू करें',
    plan_cta_upgrade: 'अभी अपग्रेड करें',
    plan_cta_contact: 'बिक्री से संपर्क करें',
    footer_tagline: 'शिक्षार्थियों को तकनीक में अपना भविष्य बनाने के लिए सशक्त बनाना',
    footer_product: 'उत्पाद',
    footer_company: 'कंपनी',
    footer_support: 'सहायता',
    footer_about: 'हमारे बारे में',
    footer_careers: 'करियर',
    footer_blog: 'ब्लॉग',
    footer_help: 'सहायता केंद्र',
    footer_contact: 'हमसे संपर्क करें',
    footer_privacy: 'गोपनीयता नीति',
    footer_copyright: '© 2024 EduCare. सर्वाधिकार सुरक्षित।'
  }
}

let currentLanguage = 'en'

function translatePage(language) {
  currentLanguage = language
  const elements = document.querySelectorAll('[data-translate]')

  elements.forEach(element => {
    const key = element.getAttribute('data-translate')
    if (translations[language] && translations[language][key]) {
      element.textContent = translations[language][key]
    }
  })
}

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle')
  const themeIcon = document.querySelector('.theme-icon')

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme')
    themeIcon.textContent = '☀️'
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    if (document.body.classList.contains('dark-theme')) {
      themeIcon.textContent = '☀️'
      localStorage.setItem('theme', 'dark')
    } else {
      themeIcon.textContent = '🌙'
      localStorage.setItem('theme', 'light')
    }
  })
}

function initLanguageSelector() {
  const languageSelector = document.getElementById('languageSelector')

  languageSelector.addEventListener('change', (e) => {
    translatePage(e.target.value)
  })
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger')
  const navLinks = document.querySelector('.nav-links')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('active')
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active')
      navLinks.classList.remove('active')
    })
  })
}

function initScrollAnimations() {
  const animateElements = document.querySelectorAll('.animate-on-scroll')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated')
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  )

  animateElements.forEach(element => {
    observer.observe(element)
  })
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href !== '#') {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle()
  initLanguageSelector()
  initMobileMenu()
  initScrollAnimations()
  initSmoothScroll()
})
