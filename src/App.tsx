import { useEffect, useMemo, useState } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays,
  ChefHat, Clock3, Heart, Images, Instagram, MapPin, Menu, Phone,
  Sparkles, Utensils, X,
} from 'lucide-react';
import heroImage from '@/assets/hero-feast.jpg';
import vegImage from '@/assets/veg-feast.jpg';
import stageImage from '@/assets/event-stage.jpg';
import nonvegImage from '@/assets/nonveg-feast.jpg';
import birthdayImage from '@/assets/birthday-party.jpg';
import ssLogo from '@/assets/logo-ss.png';
import menuStarters from '@/assets/menu/starters.jpeg';
import menuSnacks from '@/assets/menu/snacks.jpeg';
import menuVegCurries from '@/assets/menu/vegetarian-curries.jpeg';
import menuRiceBiryani from '@/assets/menu/rice-and-biryani.jpeg';
import menuTiffins from '@/assets/menu/tiffins-and-chutneys.jpeg';
import menuNonVegCurries from '@/assets/menu/non-veg-curries.jpeg';
import menuNonVegBiryani from '@/assets/menu/non-veg-biryani.jpeg';
import menuIceCream from '@/assets/menu/ice-cream.jpeg';

const PHONE_ONE = '+918877884459';
const PHONE_TWO = '+917674898788';
const FORM_URL = 'https://forms.gle/XGRXKpLgZ39KQja86';
const INSTAGRAM_URL = 'https://www.instagram.com/ss_catering_vizag/';
const ADDRESS = 'Sarada Street, Beside Sai Deepthi School, Visakhapatnam-20, Andhra Pradesh';
const BUSINESS_HOURS_LABEL = 'Mon–Sat, 9:00 am–6:00 pm';
const BUSINESS_HOURS_SCHEMA = 'Mo-Sa 09:00-18:00';
const WHATSAPP_MESSAGE = 'Hello, I would like to enquire about catering and event services. Please share availability and details.';

const services = [
  { title: 'Vegetarian Catering', group: 'Catering', copy: 'A generous spread of vegetarian favourites, planned for your gathering.', icon: Utensils },
  { title: 'Non-Vegetarian Catering', group: 'Catering', copy: 'A celebratory non-vegetarian menu prepared with care for your guests.', icon: ChefHat },
  { title: 'Wedding Catering', group: 'Catering', copy: 'Thoughtful menus and generous service for your most memorable day.', icon: Heart },
  { title: 'Birthday Party Catering', group: 'Catering', copy: 'A joyful table for little ones, milestone birthdays and every year between.', icon: CalendarDays },
  { title: 'Engagement and Reception Events', group: 'Events', copy: 'A celebratory setting for the first chapter of a new story.', icon: Sparkles },
  { title: 'Corporate Events', group: 'Events', copy: 'Dependable food and event arrangements for organisations and teams.', icon: ChefHat },
  { title: 'Housewarming Ceremonies', group: 'Catering', copy: 'Warm hospitality as you open the doors to a new home.', icon: Heart },
  { title: 'Traditional and Religious Functions', group: 'Catering', copy: 'Familiar hospitality for meaningful family and community occasions.', icon: Sparkles },
  { title: 'Buffet Arrangements', group: 'Catering', copy: 'A welcoming, well-presented service flow, planned for your guest count.', icon: Utensils },
  { title: 'Wedding Stage Decoration', group: 'Events', copy: 'A graceful focal point shaped around your celebration and setting.', icon: Sparkles },
  { title: 'Event Decoration and Management', group: 'Events', copy: 'Decor and practical coordination from setup through event day.', icon: CalendarDays },
  { title: 'Customized Catering Packages', group: 'Catering', copy: 'Bring your menu and occasion together with a plan shaped around you.', icon: Heart },
];

const gallery = [
  { title: 'A table full of colour', kind: 'Vegetarian Food', image: vegImage, alt: 'Traditional Andhra vegetarian feast served on banana leaf' },
  { title: 'A celebratory spread', kind: 'Non-Vegetarian Food', image: nonvegImage, alt: 'Andhra biryani and catering dishes in brass servingware' },
  { title: 'Gathered around the buffet', kind: 'Buffet Setup', image: heroImage, alt: 'Festive buffet with brass vessels and warm event lighting' },
  { title: 'A day made together', kind: 'Wedding Events', image: stageImage, alt: 'Wedding reception stage styled in plum, gold and flowers' },
  { title: 'A little more sparkle', kind: 'Birthday Parties', image: birthdayImage, alt: 'Warmly decorated Indian birthday party with gold and pastel details' },
  { title: 'The celebration centrepiece', kind: 'Stage Decorations', image: stageImage, alt: 'Elegant event stage with plum draping and flowers' },
];

const galleryFilters = ['All', 'Vegetarian Food', 'Non-Vegetarian Food', 'Buffet Setup', 'Wedding Events', 'Birthday Parties', 'Stage Decorations'];

const menus = [
  { title: 'Starters', kind: 'Starters', image: menuStarters, alt: 'SS Catering menu poster listing vegetarian starters such as gobi 65, paneer 65 and crispy corn' },
  { title: 'Snacks', kind: 'Snacks', image: menuSnacks, alt: 'SS Catering menu poster listing snacks including samosas, rolls, fries and chaat' },
  { title: 'Vegetarian Curries', kind: 'Vegetarian', image: menuVegCurries, alt: 'SS Catering menu poster listing vegetarian curries including paneer, mushroom and traditional Andhra curries' },
  { title: 'Rice, Biryani & Fried Rice', kind: 'Vegetarian', image: menuRiceBiryani, alt: 'SS Catering menu poster listing flavoured rice, vegetarian biryanis and fried rice' },
  { title: 'Tiffins & Chutneys', kind: 'Breakfast', image: menuTiffins, alt: 'SS Catering menu poster listing tiffins and chutneys' },
  { title: 'Non-Vegetarian Curries', kind: 'Non-Vegetarian', image: menuNonVegCurries, alt: 'SS Catering menu poster listing chicken, mutton, fish and prawn curries' },
  { title: 'Non-Veg Biryani', kind: 'Non-Vegetarian', image: menuNonVegBiryani, alt: 'SS Catering menu poster listing egg, chicken, mutton and prawn biryani and pulao' },
  { title: 'Ice Creams', kind: 'Desserts', image: menuIceCream, alt: 'SS Catering menu poster listing ice cream and kulfi flavours' },
];

const menuFilters = ['All Menus', 'Vegetarian', 'Non-Vegetarian', 'Starters', 'Snacks', 'Breakfast', 'Desserts'];

const navItems = [
  ['Our story', '#about'], ['Services', '#services'], ['Menu', '#menu'], ['Gallery', '#gallery'], ['Contact', '#contact'],
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeMenuFilter, setActiveMenuFilter] = useState('All Menus');
  const [menuLightboxIndex, setMenuLightboxIndex] = useState<number | null>(null);
  const visibleGallery = useMemo(() => activeFilter === 'All' ? gallery : gallery.filter((item) => item.kind === activeFilter), [activeFilter]);
  const visibleMenus = useMemo(() => activeMenuFilter === 'All Menus' ? menus : menus.filter((item) => item.kind === activeMenuFilter), [activeMenuFilter]);

  useEffect(() => {
    document.title = 'Catering Services & Event Management | Visakhapatnam';
    const description = 'Vegetarian and non-vegetarian catering and event arrangements in Visakhapatnam. Family-run service for weddings, celebrations and all occasions.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:title' }));
    ogTitle.setAttribute('content', 'Catering Services & Event Management | Visakhapatnam');
    const ogDescription = document.querySelector('meta[property="og:description"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:description' }));
    ogDescription.setAttribute('content', description);
    const ogType = document.querySelector('meta[property="og:type"]') ?? document.head.appendChild(Object.assign(document.createElement('meta'), { property: 'og:type' }));
    ogType.setAttribute('content', 'website');
    const data = {
      '@context': 'https://schema.org', '@type': 'Caterer', name: 'Catering Services & Event Management',
      slogan: 'Your Satisfaction Is Our Priority.', telephone: [PHONE_ONE, PHONE_TWO],
      address: { '@type': 'PostalAddress', streetAddress: 'Sarada Street, Beside Sai Deepthi School, Visakhapatnam-20', addressLocality: 'Visakhapatnam', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
      openingHours: BUSINESS_HOURS_SCHEMA, servesCuisine: ['Vegetarian', 'Non-vegetarian'],
    };
    let script = document.getElementById('local-business-schema');
    if (!script) { script = document.createElement('script'); script.id = 'local-business-schema'; script.setAttribute('type', 'application/ld+json'); document.head.appendChild(script); }
    script.textContent = JSON.stringify(data);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
      if (event.key === 'ArrowRight') setLightboxIndex((index) => index === null ? 0 : (index + 1) % visibleGallery.length);
      if (event.key === 'ArrowLeft') setLightboxIndex((index) => index === null ? 0 : (index - 1 + visibleGallery.length) % visibleGallery.length);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [lightboxIndex, visibleGallery.length]);

  useEffect(() => {
    if (menuLightboxIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuLightboxIndex(null);
      if (event.key === 'ArrowRight') setMenuLightboxIndex((index) => index === null ? 0 : (index + 1) % visibleMenus.length);
      if (event.key === 'ArrowLeft') setMenuLightboxIndex((index) => index === null ? 0 : (index - 1 + visibleMenus.length) % visibleMenus.length);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [menuLightboxIndex, visibleMenus.length]);

  const moveToForm = () => {
    setMobileOpen(false);
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceWhatsApp = (service: string) => `https://wa.me/${PHONE_ONE.replace('+', '')}?text=${encodeURIComponent(`Hello, I would like to enquire about ${service} for my event. Please share availability and details.`)}`;

  return (
    <main>
      <div className="topline">
        <span>Visakhapatnam, Andhra Pradesh</span>
        <span className="topline-hours"><Clock3 size={13} /> {BUSINESS_HOURS_LABEL}</span>
        <a href={`tel:${PHONE_ONE}`} data-testid="link-top-call"><Phone size={13} /> Speak with our team <ArrowUpRight size={13} /></a>
      </div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Catering Services & Event Management, home" data-testid="link-brand-home">
          <img className="brand-logo" src={ssLogo} alt="SS logo" />
          <span className="brand-name">Catering Services<br /><b>& Event Management</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, target]) => <a key={target} href={target} data-testid={`link-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="#inquiry" onClick={() => moveToForm()} data-testid="button-nav-inquiry">Plan your occasion <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} data-testid="button-mobile-menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
        {mobileOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, target]) => <a key={target} href={target} onClick={() => setMobileOpen(false)} data-testid={`mobile-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}<ArrowUpRight size={15} /></a>)}<a href="#inquiry" className="mobile-nav-cta" onClick={() => moveToForm()}>Plan your occasion <ArrowUpRight size={15} /></a></nav>}
      </header>

      <section className="hero" id="home">
        <img className="hero-image" src={heroImage} alt="Festive catering buffet arranged for a special celebration" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light-eyebrow"><span /> Catering &amp; event care in Visakhapatnam</p>
          <h1>Making Every<br /><em>Occasion</em> Special.</h1>
          <p className="hero-tagline">All Kinds of Veg &amp; Non-Veg Catering<br className="desktop-break" /> for All Occasions.</p>
          <div className="hero-actions">
            <a href="#inquiry" className="button button-gold" onClick={() => moveToForm()} data-testid="button-hero-inquiry">Book Your Event <ArrowRight size={17} /></a>
            <a className="hero-telephone" href={`tel:${PHONE_ONE}`} data-testid="link-hero-call"><span className="phone-circle"><Phone size={16} /></span><span><small>Call Now</small><b>+91 88778 84459</b></span></a>
          </div>
        </div>
        <div className="hero-note"><span className="note-rule" />Made with care, served with warmth</div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to our story"><ArrowDown size={16} /> <span>Discover</span></a>
      </section>

      <section className="promise-strip" aria-label="Our approach">
        <span>Food for every kind of gathering</span><i />
        <span>Vegetarian &amp; non-vegetarian menus</span><i />
        <span>Your Satisfaction Is Our Priority.</span>
      </section>

      <section className="story section-pad" id="about">
        <div className="story-photo">
          <img src={vegImage} alt="Colourful Andhra vegetarian dishes presented for a family gathering" />
          <div className="photo-caption"><span>Made for sharing</span><b>Warmth at every table.</b></div>
          <div className="photo-stamp"><span>Serving</span><b>Vizag</b><span>with care</span></div>
        </div>
        <div className="story-copy">
          <p className="eyebrow"><span /> A little about us</p>
          <h2>Every occasion<br />deserves <em>a good table.</em></h2>
          <p className="story-lead">Some of life’s best moments happen around a meal. We help Visakhapatnam families and organisations bring people together with thoughtful food and event arrangements.</p>
          <p>From choosing a vegetarian, non-vegetarian or mixed menu to planning the practical details, we listen first and shape the day around what matters to you.</p>
          <div className="owner-note"><span className="owner-initial">M</span><span><b>V. Maheshwara Rao</b><small> with P. Govind · Your local catering &amp; events team</small></span></div>
          <a href="#services" className="text-link" data-testid="link-story-services">Get to know what we do <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Here for the whole occasion</p><h2>Good planning.<br /><em>Generous serving.</em></h2></div>
          <p>One gathering or a full celebration, we’ll help you work through the details and find the right fit for your event.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return <article className="service-item" key={service.title} data-testid={`card-service-${index + 1}`}>
              <span className="service-index">0{index + 1}</span><Icon className="service-icon" size={22} strokeWidth={1.5} />
              <p className="service-group">{service.group}</p><h3>{service.title}</h3><p className="service-copy">{service.copy}</p>
              <a className="service-link" href={serviceWhatsApp(service.title)} target="_blank" rel="noreferrer" data-testid={`link-enquire-service-${index + 1}`}>Ask about {service.title} <ArrowUpRight size={15} /></a>
            </article>;
          })}
        </div>
      </section>

      <section className="menu-section section-pad" id="menu" aria-labelledby="menu-title">
        <div className="menu-heading">
          <div>
            <p className="eyebrow"><span /> Fresh from our kitchen</p>
            <h2 id="menu-title">Explore the <em>menu.</em></h2>
          </div>
          <p>Browse our catering selections by category. Choose a menu to see the complete poster, then contact us to plan your spread.</p>
        </div>
        <div className="menu-controls" role="group" aria-label="Filter menus">
          {menuFilters.map((filter) => <button type="button" key={filter} className={activeMenuFilter === filter ? 'menu-filter-chip active' : 'menu-filter-chip'} aria-pressed={activeMenuFilter === filter} onClick={() => { setActiveMenuFilter(filter); setMenuLightboxIndex(null); }} data-testid={`button-menu-filter-${filter.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}>{filter}</button>)}
          <span className="menu-count">{visibleMenus.length} menus</span>
        </div>
        <div className="menu-grid">
          {visibleMenus.map((item, index) => <button type="button" className="menu-card" key={item.title} onClick={() => setMenuLightboxIndex(index)} aria-label={`View full ${item.title} menu`} data-testid={`button-menu-poster-${index + 1}`}>
            <img src={item.image} alt={item.alt} loading="lazy" />
            <span className="menu-card-info"><span><b>{item.title}</b><small>{item.kind} menu</small></span><span className="menu-card-open"><ArrowUpRight size={17} /></span></span>
          </button>)}
        </div>
        <div className="menu-contact">
          <p>Planning a gathering? We can help you combine dishes and tailor a menu for your occasion.</p>
          <a className="button button-gold" href={`https://wa.me/${PHONE_ONE.replace('+', '')}?text=${encodeURIComponent('Hello, I would like to ask about your catering menu for my event. Please share details.')}`} target="_blank" rel="noreferrer" data-testid="link-menu-whatsapp">Ask about the menu <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="gallery-header">
          <div><p className="eyebrow light-eyebrow"><span /> A glimpse of the day</p><h2>Made to be <em>remembered.</em></h2></div>
          <p>Food, flowers, and all the little details that help an occasion feel special.</p>
        </div>
        <div className="gallery-controls" role="group" aria-label="Filter gallery">
          {galleryFilters.map((filter) => <button type="button" key={filter} className={activeFilter === filter ? 'filter-chip active' : 'filter-chip'} aria-pressed={activeFilter === filter} onClick={() => { setActiveFilter(filter); setLightboxIndex(null); }} data-testid={`button-gallery-filter-${filter.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`}>{filter}</button>)}
          <span className="gallery-count"><Images size={15} /> {visibleGallery.length} moments</span>
        </div>
        <div className="gallery-grid">
          {visibleGallery.map((item, index) => <button type="button" className={`gallery-tile gallery-tile-${index + 1}`} key={item.title} onClick={() => setLightboxIndex(index)} aria-label={`Open image: ${item.title}`} data-testid={`button-gallery-image-${index + 1}`}>
            <img src={item.image} alt={item.alt} loading="lazy" /><span className="gallery-tile-overlay"><small>{item.kind}</small><b>{item.title}</b><span className="gallery-open"><ArrowUpRight size={17} /></span></span>
          </button>)}
        </div>
        <p className="gallery-note">A few inspirations to start the conversation. Every event is planned around your preferences.</p>
      </section>

      <section className="testimonial section-pad" aria-labelledby="kind-words-title">
        <div className="quote-mark">“</div><p className="eyebrow"><span /> A note on trust</p>
        <h2 id="kind-words-title">Your Satisfaction<br /><em>Is Our Priority.</em></h2>
        <p className="testimonial-copy">We believe care is shown in the listening, the preparation and the way every guest is welcomed.</p>
        <div className="placeholder-note"><span className="placeholder-dot" /><span><b>Customer stories coming soon</b><small>We’ll share verified feedback here when customers give permission.</small></span></div>
      </section>

      <section className="inquiry-section section-pad" id="inquiry">
        <div className="inquiry-intro">
          <p className="eyebrow"><span /> Let’s start with your plans</p>
          <h2>Tell us what<br />you’re <em>celebrating.</em></h2>
          <p>Send your enquiry through our official form below. It currently collects seven details only; menu and service-specific requests can be discussed directly with our team by phone or WhatsApp.</p>
          <div className="inquiry-contact-card"><span className="contact-card-icon"><Phone size={18} /></span><span><small>Call our team directly</small><a href={`tel:${PHONE_ONE}`} data-testid="link-inquiry-phone">+91 88778 84459</a></span></div>
          <a className="whatsapp-link inquiry-whatsapp" href={`https://wa.me/${PHONE_ONE.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer" data-testid="link-inquiry-whatsapp">Ask us on WhatsApp <ArrowUpRight size={15} /></a>
        </div>
        <div className="booking-form official-google-form" data-testid="section-official-enquiry-form">
          <div className="form-heading"><span>OFFICIAL EVENT ENQUIRY</span><span>GOOGLE FORM</span></div>
          <h3>Let’s make a plan</h3>
          <p className="form-explainer">This form records only: customer name, mobile number, event type, venue, event date, food preference, and consent to be contacted. It does not collect service selections, guest count, budget, menu preferences, or extra requirements.</p>
          <div className="form-access-notice" role="note" data-testid="notice-google-form-signin">
            <span className="form-access-label">Google form access</span>
            <h4>Sign-in is still required</h4>
            <p>You chose public responses, but Google currently asks visitors to sign in. The form owner must allow anyone with the link to respond without signing in. Until that setting is changed, visitors can open the official form separately or contact us by phone or WhatsApp.</p>
            <a className="button button-outline" href={FORM_URL} target="_blank" rel="noreferrer" data-testid="link-official-google-form">Open official form <ArrowUpRight size={15} /></a>
          </div>
          <p className="form-footnote">The website does not store or confirm form submissions. For details not covered by these seven fields, call or WhatsApp our team directly.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-art"><img src={stageImage} alt="Elegant event decor with plum draping and warm golden lights" loading="lazy" /><div className="contact-art-shade" /><div className="contact-art-copy"><p className="eyebrow light-eyebrow"><span /> Your occasion, our care</p><h2>We’d love to<br /><em>hear your plans.</em></h2><a href={`https://wa.me/${PHONE_ONE.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer" className="button button-gold" data-testid="link-contact-whatsapp">Message us on WhatsApp <ArrowUpRight size={16} /></a></div></div>
        <div className="contact-details">
          <p className="eyebrow"><span /> Come say hello</p>
          <h2>Local to<br /><em>Visakhapatnam.</em></h2>
          <div className="contact-info-row"><MapPin size={19} /><p><b>Find us</b><span>{ADDRESS}</span><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer" data-testid="link-map-directions">Search this address on Maps <ArrowUpRight size={13} /></a></p></div>
          <div className="contact-info-row"><Phone size={18} /><p><b>Call our team</b><a href={`tel:${PHONE_ONE}`} data-testid="link-contact-phone-maheshwara">V. Maheshwara Rao · +91 88778 84459</a><a href={`tel:${PHONE_TWO}`} data-testid="link-contact-phone-govind">P. Govind · +91 76748 98788</a></p></div>
          <div className="contact-info-row"><Clock3 size={18} /><p><b>Opening hours</b><span>{BUSINESS_HOURS_LABEL}</span></p></div>
          <a href={`https://wa.me/${PHONE_ONE.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer" className="whatsapp-link" data-testid="link-contact-whatsapp-text">Start a WhatsApp enquiry <ArrowUpRight size={15} /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-link instagram-link" aria-label="Follow SS Catering Services on Instagram" data-testid="link-contact-instagram"><Instagram size={15} /> Follow us on Instagram <ArrowUpRight size={15} /></a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand-block">
          <a href="#home" className="footer-brand" data-testid="link-footer-home"><img className="brand-logo" src={ssLogo} alt="SS logo" /><span>Catering Services<br />&amp; Event Management</span></a>
          <p className="footer-tagline">Good food. Beautiful gatherings.<br /><small>Your Satisfaction Is Our Priority.</small></p>
        </div>
        <div className="footer-column">
          <b>Quick links</b>
          <div className="footer-nav">{navItems.map(([label, target]) => <a key={target} href={target} data-testid={`footer-nav-${label.toLowerCase().replaceAll(' ', '-')}`}>{label}</a>)}</div>
        </div>
        <div className="footer-column footer-services">
          <b>Our services</b>
          <a href="#services">Vegetarian &amp; non-vegetarian catering</a>
          <a href="#services">Weddings &amp; family celebrations</a>
          <a href="#services">Buffets, decor &amp; event management</a>
        </div>
        <div className="footer-column footer-contact">
          <b>Contact</b>
          <a href={`tel:${PHONE_ONE}`} data-testid="link-footer-phone-maheshwara">V. Maheshwara Rao · +91 88778 84459</a>
          <a href={`tel:${PHONE_TWO}`} data-testid="link-footer-phone-govind">P. Govind · +91 76748 98788</a>
          <a href={`https://wa.me/${PHONE_ONE.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noreferrer" data-testid="link-footer-whatsapp">WhatsApp enquiries</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="footer-instagram" data-testid="link-footer-instagram"><Instagram size={13} /> Follow us on Instagram</a>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noreferrer">Sarada Street, Visakhapatnam-20</a>
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} Catering Services &amp; Event Management · {BUSINESS_HOURS_LABEL}</span>
      </footer>

      {menuLightboxIndex !== null && visibleMenus[menuLightboxIndex] && <div className="lightbox menu-lightbox" role="dialog" aria-modal="true" aria-label="Menu poster viewer" onClick={() => setMenuLightboxIndex(null)} data-testid="dialog-menu-lightbox">
        <button type="button" className="lightbox-close" onClick={() => setMenuLightboxIndex(null)} aria-label="Close menu viewer" data-testid="button-menu-lightbox-close"><X /></button>
        <button type="button" className="lightbox-arrow lightbox-prev" onClick={(event) => { event.stopPropagation(); setMenuLightboxIndex((menuLightboxIndex - 1 + visibleMenus.length) % visibleMenus.length); }} aria-label="Previous menu" data-testid="button-menu-lightbox-previous"><ArrowLeft /></button>
        <figure onClick={(event) => event.stopPropagation()}><img src={visibleMenus[menuLightboxIndex].image} alt={visibleMenus[menuLightboxIndex].alt} /><figcaption><span>{visibleMenus[menuLightboxIndex].kind}</span>{visibleMenus[menuLightboxIndex].title}</figcaption></figure>
        <button type="button" className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); setMenuLightboxIndex((menuLightboxIndex + 1) % visibleMenus.length); }} aria-label="Next menu" data-testid="button-menu-lightbox-next"><ArrowRight /></button>
        <span className="lightbox-counter" data-testid="text-menu-lightbox-counter">{String(menuLightboxIndex + 1).padStart(2, '0')} / {String(visibleMenus.length).padStart(2, '0')}</span>
      </div>}

      {lightboxIndex !== null && visibleGallery[lightboxIndex] && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setLightboxIndex(null)} data-testid="dialog-gallery-lightbox">
        <button type="button" className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close image viewer" data-testid="button-lightbox-close"><X /></button>
        <button type="button" className="lightbox-arrow lightbox-prev" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + visibleGallery.length) % visibleGallery.length); }} aria-label="Previous image" data-testid="button-lightbox-previous"><ArrowLeft /></button>
        <figure onClick={(event) => event.stopPropagation()}><img src={visibleGallery[lightboxIndex].image} alt={visibleGallery[lightboxIndex].alt} /><figcaption><span>{visibleGallery[lightboxIndex].kind}</span>{visibleGallery[lightboxIndex].title}</figcaption></figure>
        <button type="button" className="lightbox-arrow lightbox-next" onClick={(event) => { event.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % visibleGallery.length); }} aria-label="Next image" data-testid="button-lightbox-next"><ArrowRight /></button>
        <span className="lightbox-counter" data-testid="text-lightbox-counter">{String(lightboxIndex + 1).padStart(2, '0')} / {String(visibleGallery.length).padStart(2, '0')}</span>
      </div>}
    </main>
  );
}

export default App;
