// Shared layout wrapper that wraps each page with the exact same header, footer, popups, and CSS/JS
// as the original realestateabbey.com site

export function layout(pageContent: string, options: {
  title: string;
  description: string;
  namespace: string;
  canonical: string;
}) {
  return `<!doctype html>
<html lang="en" class="antialiased">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>

        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <!-- Anime.js for letter animations -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>

        <!-- Lenis smooth scroll (Studio Freight) for horizontal scrolling -->
        <script src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js"></script>

        <!-- Swiper.js -->
        <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css">

        <!-- Main Stylesheets - self-hosted -->
        <link rel="stylesheet" href="/static/style.css" />
        <link rel="stylesheet" href="/static/swiper-custom.css" />

        <!-- Alpine.js -->
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

        <title>${options.title}</title>
        <meta name="description" content="${options.description}">
        <link rel="canonical" href="${options.canonical}">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Real Estate Abbey">
        <meta property="og:locale" content="en-US">
        <meta property="og:title" content="${options.title}">
        <meta property="og:description" content="${options.description}">
        <meta name="twitter:card" content="summary">
        <meta name="twitter:title" content="${options.title}">
        <meta name="twitter:description" content="${options.description}">

        <script type="application/ld+json">{"@context":"https:\\/\\/schema.org","@type":"Organization","name":"Real Estate Abbey","url":"https:\\/\\/realestateabbey.com","logo":{"@type":"ImageObject","url":"https:\\/\\/abbey-real-estate.ams3.cdn.digitaloceanspaces.com\\/website\\/images\\/abbey_black.svg","width":"109.7","height":"155"}}</script>

        <!-- Popup Manager CSS -->
        <link rel="stylesheet" href="/static/popup-manager.css" />

        <style>
          /* Ensure smooth scroll behavior */
          html { scroll-behavior: smooth; }
        </style>
    </head>

    <body class="ohm-body">
        <div data-barba="wrapper">
            <div data-barba="container" data-barba-namespace=${options.namespace}>

                ${headerHTML()}

                <div class="ohm-main-container">
                ${pageContent}

                ${footerHTML()}
                </div>

            ${contactPopupHTML()}
            ${menuPopupHTML()}
            <div id="backdrop-light" class="backdrop"></div>
            <div id="backdrop-dark" class="backdrop"></div>
            </div>
        </div>

        <!-- WhatsApp Floating Widget -->
        ${whatsappWidgetHTML()}

        <!-- Minimal JS for interactivity -->
        <script src="/static/app.js"></script>
    </body>
</html>`;
}

function headerHTML() {
  return `<header class="ohm-component-mainHeader" x-data="header()">
    <div class="ohm-inner">
        <div class="ohm-top">
            <a href="#open-popup-33b0454e-f96d-4be0-97a7-9e0ff396645b" class="ohm-open-popup">
                MENU
            </a>
            <a href="/" class="ohm-middle-logo ohm-desktop-hidden" aria-label="Home page">
                <img src="/static/nambi-n.svg" class="nambi-logo nambi-logo--header-mobile" alt="Nambi">
            </a>
            <a href="#open-popup-a68ee9d4-55f4-49a0-80d9-68bc46af808d" class="ohm-book-button ohm-btn-outline">
                Enquire
            </a>
        </div>
        <a href="/">
        <div class="ohm-bottom ohm-mobile-hidden">
            <img src="/static/nambi-n.svg" class="nambi-logo nambi-logo--header-desktop" alt="Nambi">
        </div>
        </a>
    </div>
</header>`;
}

function footerHTML() {
  return `<footer class="ohm-component-mainFooter" x-data="footer">
    <div class="ohm-inner">
        <div class="ohm-top-footer">
            <div class="ohm-form-title">
                <p>Sign up for our newsletter</p>
            </div>
            <form method="POST" action="#" class="" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
                <div class="ohm-form-field-wrapper hidden">
                    <div><input type="text" name="city"/></div>
                </div>
                <input class="ohm-form-field" id="footer_first_name" name="first_name" type="text" placeholder="First name*" required data-error-message="This field is required" />
                <input class="ohm-form-field" id="footer_last_name" name="last_name" type="text" placeholder="Surname" />
                <input class="ohm-form-field" id="footer_email" name="email" type="email" placeholder="Email*" required data-error-message="This field is required" />
                <div>
                    <button class="ohm-btn ohm-btn-arrow-border ohm-white-btn" type="submit">Send</button>
                </div>
            </form>
        </div>
        <div class="ohm-bottom-footer">
            <div class="ohm-menu">
                <ul class="ohm-menu-list">
                    <li><a href="/apartments-for-rent-in-glyfada-greece">Apartments for Rent in Glyfada Greece</a></li>
                    <li><a href="/luxury-real-estate-in-athens-riviera">Luxury Real Estate in Athens Riviera</a></li>
                    <li><a href="/furnished-apartments-for-rent-in-voula-greece">Furnished Apartments for Rent in Voula, Athens Riviera, Greece</a></li>
                </ul>
            </div>
            <div class="ohm-social-links">
                <p>Follow us<br><a rel="noopener" target="_blank" href="https://www.instagram.com/real_estate_abbey/">@real_estate_abbey</a></p>
            </div>
            <div class="ohm-logo">
                <img src="/static/nambi-full.svg" class="nambi-logo nambi-logo--footer" alt="Nambi">
            </div>
            <div class="ohm-bottom">
                <div class="ohm-credit">
                    <a class="ohm-text" href="https://www.theorangestudio.com" target="_blank">Website by The Orange Studio</a>
                </div>
                <div class="ohm-social-icons"></div>
            </div>
        </div>
    </div>
</footer>`;
}

function contactPopupHTML() {
  return `<div data-type='popup' data-id='a68ee9d4-55f4-49a0-80d9-68bc46af808d' data-blueprint='contact_popup' data-name='contact' data-settings='{"on_page_load":false,"close_on_overlay_click":true,"backdrop":"backdrop-light","close_on_esc_key":true,"disable_scroll":false,"on_scroll":null,"percentage_scroll":50,"on_page_exit_intent":false,"on_click_of_element":null,"after_inactivity":null}'><div class="ohm-inner " x-data="ContactPopup">
    <div class="ohm-content-wrapper">
    <div class="ohm-heading-wrapper">
        <p>Connect with us today</p>
    </div>
    <div class="ohm-text ohm-text-content"></div>
        <div class="ohm-logo ohm-mobile-hidden">
            <a href="/">
                <img src="/static/nambi-full.svg" class="nambi-logo nambi-logo--popup" alt="Nambi">
            </a>
        </div>
    </div>

    <a class="popup-close ohm-text">CLOSE</a>

    <div class="ohm-form-wrapper">
        <form method="POST" action="#" x-ref="contact_form" onsubmit="event.preventDefault(); alert('Thank you! We will get back to you shortly.');">
        <div class="ohm-residence-info">
            <div class="ohm-btn-solid-black active">Home</div>
            <div class="ohm-residence-text">your selection</div>
        </div>
        <input type="hidden" name="residence" value="home">
        <div class="field">
            <div class="font-body text-xs">
                <div class="input-container"><input class="ohm-form-field" id="first_name" name="first_name" type="text" placeholder="First name*" required data-error-message="This field is required" /></div>
            </div>
        </div>
        <div class="field">
            <div class="font-body text-xs">
                <div class="input-container"><input class="ohm-form-field" id="surname" name="surname" type="text" placeholder="Surname*" required data-error-message="This field is required" /></div>
            </div>
        </div>
        <div class="field">
            <div class="font-body text-xs">
                <div class="input-container"><input class="ohm-form-field" id="email_contact" name="email" type="email" placeholder="Email*" required data-error-message="This field is required" /></div>
            </div>
        </div>
        <div class="field">
            <div class="font-body text-xs">
                <div class="input-container"><input class="ohm-form-field" id="telephone" name="telephone" type="tel" placeholder="Telephone*" required data-error-message="This field is required" /></div>
            </div>
        </div>
        <div class="field">
            <div class="font-body text-xs">
                <div class="input-container"><textarea class="ohm-form-field" id="message" name="message" rows="4" placeholder="Message"></textarea></div>
            </div>
        </div>
        <div class="field ohm-checkboxes">
            <div>
                <div class="input-container">
                    <label class="checkbox-label">
                        <input type="checkbox" name="newsletter_signup" value="subscribe">
                        Subscribe to the newsletter
                    </label>
                </div>
            </div>
        </div>

        <div class="ohm-form-field-wrapper middle_name">
            <div><input type="text" name="middle_name" class="middle_name"/></div>
        </div>

        <div class="ohm-notification">
            <span>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
        </div>

        <div class="ohm-form-bottom">
            <button type="submit" class="ohm-btn ohm-submit ohm-btn-arrow-border">
                <span>submit</span>
            </button>
        </div>
        </form>
    </div>

    <div class="ohm-logo-wrapper ohm-desktop-hidden">
        <div class="ohm-logo">
            <a href="/">
                <img src="/static/nambi-full.svg" class="nambi-logo nambi-logo--popup" alt="Nambi">
            </a>
        </div>
    </div>
</div>
</div>`;
}

function menuPopupHTML() {
  return `<div data-type='popup' data-id='33b0454e-f96d-4be0-97a7-9e0ff396645b' data-blueprint='main_menu_popup' data-name='main-menu' data-settings='{"on_page_load":false,"close_on_overlay_click":true,"backdrop":"backdrop-dark","close_on_esc_key":true,"disable_scroll":false,"on_scroll":null,"percentage_scroll":50,"on_page_exit_intent":false,"on_click_of_element":null,"after_inactivity":null}'><div class="ohm-inner">
    <div class="ohm-top-mobile ohm-right-desktop">
    <a class="popup-close ohm-text ohm-desktop-hidden">CLOSE</a>
    <div class="ohm-availability-btn ohm-desktop-hidden">
        <a class="ohm-btn " href="#open-popup-a68ee9d4-55f4-49a0-80d9-68bc46af808d">Enquire</a>
    </div>
    <ul class="ohm-menu-wrapper">
        <li>
            <a href="/about">
                <span class="text-wrapper  ohm-no-wrap "><span class="letters">About Abbey</span></span>
            </a>
            <div class="ohm-background ohm-mobile-hidden" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/argous/drz_abbey_22969.jpg');"></div>
        </li>
        <li>
            <a href="/find">
                <span class="text-wrapper  ohm-no-wrap "><span class="letters">Find your Abbey</span></span>
            </a>
            <div class="ohm-background ohm-mobile-hidden" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/architectural/drz_abbey_22744_1.jpg');"></div>
        </li>
        <li>
            <a href="/why">
                <span class="text-wrapper  ohm-no-wrap "><span class="letters">Why Abbey</span></span>
            </a>
            <div class="ohm-background ohm-mobile-hidden" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/architectural/drz_abbey_22812.jpg');"></div>
        </li>
        <li>
            <a href="/offices">
                <span class="text-wrapper  ohm-no-wrap "><span class="letters">Offices</span></span>
            </a>
            <div class="ohm-background ohm-mobile-hidden" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/offices/singapore/um-6.jpg');"></div>
        </li>
    </ul>
    </div>

    <div class="ohm-bottom-mobile ohm-left-desktop">
        <a class="popup-close ohm-text ohm-mobile-hidden">CLOSE</a>
        <div class="ohm-availability-btn ohm-mobile-hidden">
            <a class="ohm-btn ohm-btn-outline" href="#open-popup-a68ee9d4-55f4-49a0-80d9-68bc46af808d">Enquire</a>
        </div>
        <div class="ohm-contact-container">
            <div class="ohm-contact-wrapper">
                 <p>CONTACT DETAILS<br>Real Estate Abbey</p><p><a target="_blank" href="https://www.google.com/maps/place/Leof.+Dimarchou+Aggelou+Metaxa+27-29,+Glifada+166+74,+Griekenland/@37.8613241,23.7520803,17.25z/data=!4m6!3m5!1s0x14a1bfd1eadcfbab:0x309d8db937988bbe!8m2!3d37.8619767!4d23.7531025!16s%2Fg%2F11nnkndw_h?entry=ttu&amp;g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D">Athens Office- 27-29 Dimarchou Angelou Metaxa, Glyfada Athens</a><br></p><p><a href="https://maps.app.goo.gl/JcScYHBYJ2X3DYYd7">London Office- 1-5 Maple Place, London W1T 4BB</a><br></p><p>EMAIL</p><p><a href="mailto:rentals@realestateabbey.com">rentals@realestateabbey.com</a><br></p><p>INSTAGRAM</p><p><a href="https://www.instagram.com/real_estate_abbey/" target="_blank">@real_estate_abbey</a></p>
            </div>
            <div class="ohm-logo-wrapper">
                <a href="/">
                    <img src="/static/nambi-full.svg" class="nambi-logo nambi-logo--menu" alt="Nambi">
                </a>
            </div>
         </div>
    </div>
</div>
</div>`;
}

function whatsappWidgetHTML() {
  return `<div id="whatsapp-widget" class="whatsapp-widget-container">
    <a href="https://wa.me/50662891096" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="whatsapp-widget-button">
      <span class="whatsapp-btn-inner light-transparent">
        <span class="whatsapp-btn-item">
          <span class="whatsapp-btn-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00067 1.33398C11.6825 1.33398 14.6673 4.31875 14.6673 8.00065C14.6673 11.6825 11.6825 14.6673 8.00067 14.6673C6.77807 14.6673 5.63234 14.3382 4.64724 13.7638L1.33677 14.6673L2.23808 11.355C1.66329 10.3697 1.33398 9.22365 1.33398 8.00065C1.33398 4.31875 4.31875 1.33398 8.00067 1.33398ZM5.59488 4.87287C5.50862 4.87893 5.42404 4.9 5.34704 4.93939C5.28928 4.96894 5.23565 5.01166 5.15139 5.09122C5.07182 5.16635 5.02571 5.23196 4.97712 5.29522C4.73066 5.61612 4.59819 6.01002 4.60065 6.41464C4.60199 6.74172 4.68695 7.05958 4.82112 7.35638C5.09321 7.95825 5.54192 8.59452 6.13462 9.18458C6.277 9.32632 6.41648 9.46958 6.56689 9.60198C7.30253 10.2497 8.1792 10.7168 9.12713 10.9661C9.12713 10.9661 9.50046 11.0235 9.50593 11.0238C9.6296 11.0305 9.75306 11.0215 9.87686 11.0152C10.0711 11.0052 10.2607 10.9526 10.4323 10.8612C10.5426 10.8025 10.5948 10.7733 10.6874 10.7149C10.6874 10.7149 10.7158 10.6957 10.7706 10.6549C10.8606 10.5879 10.9162 10.5407 10.9911 10.4629C11.0463 10.4056 11.0937 10.3379 11.1304 10.2615C11.1825 10.1527 11.235 9.94505 11.2559 9.77258C11.2718 9.64085 11.267 9.56885 11.2653 9.52425C11.2624 9.45252 11.2031 9.37872 11.1382 9.34738L10.7505 9.17312C10.7505 9.17312 10.1709 8.92085 9.81633 8.75912C9.7794 8.74225 9.739 8.73445 9.6984 8.73198C9.60946 8.72652 9.5098 8.74972 9.4464 8.81652C9.44306 8.81518 9.39893 8.85332 8.9166 9.43765C8.89 9.46945 8.82766 9.53858 8.71986 9.53212C8.7036 9.53098 8.6874 9.52865 8.6716 9.52452C8.62793 9.51298 8.5854 9.49778 8.5438 9.48018C8.46133 9.44518 8.4324 9.43192 8.37606 9.40765C7.9912 9.23952 7.638 9.01458 7.3258 8.73932C7.24206 8.66558 7.1642 8.58618 7.08393 8.50838C6.8038 8.23685 6.57446 7.94805 6.40384 7.66318C6.39453 7.64765 6.38018 7.62518 6.36472 7.60005C6.3368 7.55465 6.30602 7.50065 6.29636 7.46358C6.27158 7.36552 6.33732 7.28672 6.33732 7.28672C6.33732 7.28672 6.49959 7.10932 6.57498 7.01285C6.64752 6.91998 6.71013 6.82918 6.75 6.76445C6.82853 6.6382 6.8534 6.50773 6.81213 6.40707C6.62509 5.95108 6.43212 5.49756 6.23324 5.04661C6.19398 4.95762 6.07723 4.89296 5.97106 4.8807C5.9351 4.87654 5.89916 4.87237 5.86306 4.87C5.77368 4.86564 5.68413 4.8666 5.59488 4.87287Z" fill="#DFD8CF"/>
            </svg>
          </span>
          <span class="whatsapp-btn-bg"></span>
        </span>
      </span>
    </a>
  </div>
  <style>
    /*
     * WhatsApp Floating Widget
     * Exact replica of horizonte-village.com icon-button component
     * Theme: light-transparent (circular icon button)
     * Source: /_nuxt/entry.70411ad0.css [data-v-5e38f85f]
     */
    .whatsapp-widget-container {
      position: fixed;
      margin: 0;
      left: 2rem;
      bottom: 10rem;
      z-index: 999999;
    }
    .whatsapp-widget-button {
      display: block;
      text-decoration: none;
      cursor: pointer;
      outline: none;
    }

    /* ---- Icon-button component (exact port of [data-v-5e38f85f]) ---- */
    .whatsapp-btn-inner {
      --easing: cubic-bezier(0.16, 1, 0.3, 1);
      --real-button-size: var(--real-btn-size, 2rem);
      --button-size: var(--btn-size, 2.25rem);
      --color: var(--clr);
      --background: var(--bg-color);
      --border-color: var(--border-clr);
      --hover-color: var(--hover-clr);
      --active-color: var(--clr);
      --icon-color: var(--clr);
      --hover-icon: var(--icon-hover, var(--clr));
      --icn-size: var(--icon-size, 1rem);
      display: flex;
      align-items: center;
      justify-content: center;
      height: var(--real-button-size);
      width: var(--real-button-size);
    }

    /* light-transparent theme (exact from reference) */
    .whatsapp-btn-inner.light-transparent {
      --clr: #fff;
      --border-clr: rgba(255, 255, 255, 0.2);
      --hover-clr: rgba(255, 255, 255, 0.2);
    }

    /* The circle container (button-inner__item) */
    .whatsapp-btn-item {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-color, transparent);
      border: 1px solid var(--border-color);
      border-radius: 50%;
      flex-shrink: 0;
      height: var(--button-size);
      width: var(--button-size);
      position: relative;
      transition-duration: 0.6s;
      transition-property: background-color, color;
      transition-timing-function: var(--easing);
    }

    /* Active state inner border (::after pseudo) */
    .whatsapp-btn-item::after {
      border-color: var(--active-color);
      border-radius: 50%;
      border-style: solid;
      border-width: 0.0625rem;
      content: "";
      display: block;
      height: var(--real-button-size);
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.6s var(--easing);
      width: var(--real-button-size);
    }
    .whatsapp-widget-button:active .whatsapp-btn-item::after {
      opacity: 1;
    }

    /* The SVG icon (button-icon) */
    .whatsapp-btn-icon {
      display: block;
      height: var(--icn-size);
      width: var(--icn-size);
      position: relative;
      z-index: 2;
    }
    .whatsapp-btn-icon svg {
      height: 100%;
      width: 100%;
      display: block;
    }
    .whatsapp-btn-icon svg path {
      fill: var(--icon-color);
      transition: fill 0.6s var(--easing);
    }

    /* Hover background (button-bg) - expands from center as circle */
    .whatsapp-btn-bg {
      background-color: var(--hover-color);
      border-radius: 50%;
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transform: scale(0);
      transition-duration: 0.6s;
      transition-property: opacity, transform;
      transition-timing-function: var(--easing);
      width: 100%;
      will-change: transform, opacity;
      z-index: 1;
    }

    /* Hover: scale bg and swap icon fill */
    @media (hover: hover) {
      .whatsapp-widget-button:hover .whatsapp-btn-bg {
        transform: scale(1);
      }
      .whatsapp-widget-button:hover .whatsapp-btn-icon svg path {
        fill: var(--hover-icon);
      }
    }

    /* Active: hide bg */
    .whatsapp-widget-button:active .whatsapp-btn-bg {
      opacity: 0;
    }

    /* ---- Responsive / position rules ---- */
    /* Desktop - RoomSingle page adjustments */
    @media screen and (min-width: 1041px) {
      body:has(.ohm-component-RoomSingle) .whatsapp-widget-container {
        left: 25%;
        bottom: 2rem;
      }
    }
    @media screen and (min-width: 791px) and (max-width: 1040px) {
      body:has(.ohm-component-RoomSingle) .whatsapp-widget-container {
        left: 27%;
        bottom: 3rem;
      }
    }
    /* Mobile */
    @media (max-width: 790px) {
      .whatsapp-widget-container {
        right: 1rem;
        left: auto;
        bottom: 4rem;
      }
    }
  </style>`;
}
