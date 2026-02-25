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

        <!-- Swiper.js -->
        <script async src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
        <link rel='preload' href='https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css' as='style' onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"></noscript>

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
                </div>

                ${footerHTML()}

            ${contactPopupHTML()}
            ${menuPopupHTML()}
            <div id="backdrop-light" class="backdrop"></div>
            <div id="backdrop-dark" class="backdrop"></div>
            </div>
        </div>

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
                <svg xmlns="http://www.w3.org/2000/svg" width="121" height="23" viewBox="0 0 121 23" fill="none">
                    <g clip-path="url(#clip0_126_584)">
                        <path d="M10.0366 0H12.5735L22.3902 23H19.8533L16.8752 15.7593H5.62452L2.7567 23H0.330078L10.0366 0ZM16.1031 14.0556L12.022 4.36574C11.8014 3.72685 11.4705 2.875 11.1396 2.23611C10.8087 2.875 10.5881 3.72685 10.2572 4.47222L6.28632 14.162H16.1031V14.0556Z" fill="#1D1D1B"/>
                        <path d="M29.4492 0H38.4939C43.0162 0 45.884 2.02315 45.884 5.64352C45.884 9.26389 44.0089 10.2222 41.472 10.8611C44.4501 11.6065 46.4355 13.7361 46.4355 16.6111C46.4355 21.0833 42.7956 23 38.0527 23H29.4492V0ZM38.2733 10.0093C41.5823 10.0093 43.5677 8.30556 43.5677 5.75C43.5677 3.19444 41.9132 1.7037 38.3836 1.7037H31.6552V9.90278H38.2733V10.0093ZM38.3836 21.1898C42.3544 21.1898 44.1192 19.4861 44.1192 16.6111C44.1192 13.7361 42.1338 11.9259 38.163 11.9259H31.6552V21.1898H38.3836Z" fill="#1D1D1B"/>
                        <path d="M55.1504 0H64.1951C68.7174 0 71.5852 2.02315 71.5852 5.64352C71.5852 9.26389 69.7101 10.2222 67.1732 10.8611C70.1513 11.6065 72.1367 13.7361 72.1367 16.6111C72.1367 21.0833 68.4968 23 63.7539 23H55.1504V0ZM63.8642 10.0093C67.1732 10.0093 69.1586 8.30556 69.1586 5.75C69.1586 3.19444 67.5041 1.7037 63.9745 1.7037H57.2461V9.90278H63.8642V10.0093ZM64.0848 21.1898C68.0556 21.1898 69.8204 19.4861 69.8204 16.6111C69.8204 13.7361 67.835 11.9259 63.8642 11.9259H57.3564V21.1898H64.0848Z" fill="#1D1D1B"/>
                        <path d="M80.8505 0H95.9618V1.91667H83.0566V10.5417H95.4102V12.4583H83.0566V21.4028H96.2927V23.3194H80.7402V0.106481H80.8505V0Z" fill="#1D1D1B"/>
                        <path d="M110.411 12.9918L101.918 -0.105469H104.455L109.86 8.62601C110.301 9.37138 110.742 10.3297 111.294 11.0751C111.845 10.3297 112.286 9.47787 112.948 8.62601L118.463 -0.105469H121L112.617 12.9918V23.001H110.301V12.9918H110.411Z" fill="#1D1D1B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_126_584">
                            <rect width="121" height="23" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </a>
            <a href="#open-popup-a68ee9d4-55f4-49a0-80d9-68bc46af808d" class="ohm-book-button ohm-btn-outline">
                Enquire
            </a>
        </div>
        <a href="/">
        <div class="ohm-bottom ohm-mobile-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="83" height="111" viewBox="0 0 83 111" fill="none">
                <g class="part part1">
                    <path d="M6.81031 94.4297H8.55059L15.2847 110.773H13.5444L11.5015 105.628H3.78374L1.81647 110.773H0.151855L6.81031 94.4297ZM10.9718 104.417L8.17227 97.5319C8.02094 97.0779 7.79394 96.4726 7.56695 96.0186C7.33996 96.4726 7.18863 97.0779 6.96164 97.6076L4.23772 104.493H10.9718V104.417Z" fill="white"/>
                    <path d="M20.1265 94.4297H26.3309C29.4332 94.4297 31.4004 95.8673 31.4004 98.4399C31.4004 101.012 30.1141 101.693 28.3739 102.147C30.4168 102.677 31.7788 104.19 31.7788 106.233C31.7788 109.411 29.2818 110.773 26.0283 110.773H20.1265V94.4297ZM26.1796 101.618C28.4495 101.618 29.8115 100.407 29.8115 98.5912C29.8115 96.7753 28.6765 95.716 26.2553 95.716H21.6397V101.542H26.1796V101.618ZM26.2553 109.487C28.9792 109.487 30.1898 108.276 30.1898 106.233C30.1898 104.19 28.8279 102.904 26.1039 102.904H21.6397V109.487H26.2553Z" fill="white"/>
                    <path d="M37.7568 94.4297H43.9613C47.0635 94.4297 49.0308 95.8673 49.0308 98.4399C49.0308 101.012 47.7445 101.693 46.0042 102.147C48.0472 102.677 49.4091 104.19 49.4091 106.233C49.4091 109.411 46.9122 110.773 43.6586 110.773H37.7568V94.4297ZM43.7343 101.618C46.0042 101.618 47.3662 100.407 47.3662 98.5912C47.3662 96.7753 46.2312 95.716 43.81 95.716H39.1944V101.542H43.7343V101.618ZM43.8856 109.487C46.6095 109.487 47.8202 108.276 47.8202 106.233C47.8202 104.19 46.4582 102.904 43.7343 102.904H39.2701V109.487H43.8856Z" fill="white"/>
                </g>
                <g class="part part2">
                    <path d="M55.3857 94.4297H65.7517V95.7916H56.899V101.92H65.3734V103.282H56.899V109.638H65.9787V111H55.3101V94.6567V94.4297H55.3857Z" fill="white"/>
                    <path d="M75.665 103.736L69.9146 94.4297H71.6548L75.3624 100.634C75.665 101.164 75.9677 101.845 76.346 102.374C76.7243 101.845 77.027 101.239 77.481 100.634L81.2642 94.4297H83.0045L77.254 103.736V110.849H75.665V103.736Z" fill="white"/>
                </g>
                <g class="part part3">
                    <path d="M82.928 0H80.6581V40.4047H66.7359V0H0V83.0037H2.26993V42.599H16.1921V80.7337V83.0037H82.8523V81.8687V0H82.928ZM64.6172 40.4047H50.695V2.26993H64.6172V40.4047ZM34.5786 2.26993H48.5008V40.4047H34.5786V2.26993ZM32.3086 40.4047H18.3864V2.26993H32.3086V40.4047ZM2.26993 40.4047V2.26993H16.1921V40.4047H2.26993ZM18.4621 42.6746H32.3843V80.8094H18.4621V42.6746ZM34.5786 80.8094V42.6746H48.5008V80.8094H34.5786ZM50.695 80.8094V42.6746H80.7337V80.8094H50.695Z" fill="white"/>
                </g>
            </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="111" viewBox="0 0 83 111" fill="none">
                    <g class="part part1">
                        <path d="M6.81031 94.4297H8.55059L15.2847 110.773H13.5444L11.5015 105.628H3.78374L1.81647 110.773H0.151855L6.81031 94.4297ZM10.9718 104.417L8.17227 97.5319C8.02094 97.0779 7.79394 96.4726 7.56695 96.0186C7.33996 96.4726 7.18863 97.0779 6.96164 97.6076L4.23772 104.493H10.9718V104.417Z" fill="white"/>
                        <path d="M20.1265 94.4297H26.3309C29.4332 94.4297 31.4004 95.8673 31.4004 98.4399C31.4004 101.012 30.1141 101.693 28.3739 102.147C30.4168 102.677 31.7788 104.19 31.7788 106.233C31.7788 109.411 29.2818 110.773 26.0283 110.773H20.1265V94.4297ZM26.1796 101.618C28.4495 101.618 29.8115 100.407 29.8115 98.5912C29.8115 96.7753 28.6765 95.716 26.2553 95.716H21.6397V101.542H26.1796V101.618ZM26.2553 109.487C28.9792 109.487 30.1898 108.276 30.1898 106.233C30.1898 104.19 28.8279 102.904 26.1039 102.904H21.6397V109.487H26.2553Z" fill="white"/>
                        <path d="M37.7568 94.4297H43.9613C47.0635 94.4297 49.0308 95.8673 49.0308 98.4399C49.0308 101.012 47.7445 101.693 46.0042 102.147C48.0472 102.677 49.4091 104.19 49.4091 106.233C49.4091 109.411 46.9122 110.773 43.6586 110.773H37.7568V94.4297ZM43.7343 101.618C46.0042 101.618 47.3662 100.407 47.3662 98.5912C47.3662 96.7753 46.2312 95.716 43.81 95.716H39.1944V101.542H43.7343V101.618ZM43.8856 109.487C46.6095 109.487 47.8202 108.276 47.8202 106.233C47.8202 104.19 46.4582 102.904 43.7343 102.904H39.2701V109.487H43.8856Z" fill="white"/>
                    </g>
                    <g class="part part2">
                        <path d="M55.3857 94.4297H65.7517V95.7916H56.899V101.92H65.3734V103.282H56.899V109.638H65.9787V111H55.3101V94.6567V94.4297H55.3857Z" fill="white"/>
                        <path d="M75.665 103.736L69.9146 94.4297H71.6548L75.3624 100.634C75.665 101.164 75.9677 101.845 76.346 102.374C76.7243 101.845 77.027 101.239 77.481 100.634L81.2642 94.4297H83.0045L77.254 103.736V110.849H75.665V103.736Z" fill="white"/>
                    </g>
                    <g class="part part3">
                        <path d="M82.928 0H80.6581V40.4047H66.7359V0H0V83.0037H2.26993V42.599H16.1921V80.7337V83.0037H82.8523V81.8687V0H82.928ZM64.6172 40.4047H50.695V2.26993H64.6172V40.4047ZM34.5786 2.26993H48.5008V40.4047H34.5786V2.26993ZM32.3086 40.4047H18.3864V2.26993H32.3086V40.4047ZM2.26993 40.4047V2.26993H16.1921V40.4047H2.26993ZM18.4621 42.6746H32.3843V80.8094H18.4621V42.6746ZM34.5786 80.8094V42.6746H48.5008V80.8094H34.5786ZM50.695 80.8094V42.6746H80.7337V80.8094H50.695Z" fill="white"/>
                    </g>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="111" viewBox="0 0 83 111" fill="none">
                    <path d="M6.8108 94.4297H8.55107L15.2852 110.773H13.5449L11.502 105.628H3.78423L1.81696 110.773H0.152344L6.8108 94.4297ZM10.9723 104.417L8.17275 97.5319C8.02142 97.0779 7.79443 96.4726 7.56744 96.0186C7.34045 96.4726 7.18912 97.0779 6.96213 97.6076L4.23821 104.493H10.9723V104.417Z" fill="black"/>
                    <path d="M20.1289 94.4297H26.3334C29.4356 94.4297 31.4029 95.8673 31.4029 98.4399C31.4029 101.012 30.1166 101.693 28.3763 102.147C30.4192 102.677 31.7812 104.19 31.7812 106.233C31.7812 109.411 29.2843 110.773 26.0307 110.773H20.1289V94.4297ZM26.182 101.618C28.452 101.618 29.8139 100.407 29.8139 98.5912C29.8139 96.7753 28.679 95.716 26.2577 95.716H21.6422V101.542H26.182V101.618ZM26.2577 109.487C28.9816 109.487 30.1922 108.276 30.1922 106.233C30.1922 104.19 28.8303 102.904 26.1064 102.904H21.6422V109.487H26.2577Z" fill="black"/>
                    <path d="M37.7554 94.4297H43.9598C47.0621 94.4297 49.0293 95.8673 49.0293 98.4399C49.0293 101.012 47.743 101.693 46.0028 102.147C48.0457 102.677 49.4076 104.19 49.4076 106.233C49.4076 109.411 46.9107 110.773 43.6572 110.773H37.7554V94.4297ZM43.7328 101.618C46.0028 101.618 47.3647 100.407 47.3647 98.5912C47.3647 96.7753 46.2297 95.716 43.8085 95.716H39.193V101.542H43.7328V101.618ZM43.8842 109.487C46.6081 109.487 47.8187 108.276 47.8187 106.233C47.8187 104.19 46.4567 102.904 43.7328 102.904H39.2686V109.487H43.8842Z" fill="black"/>
                    <path d="M55.3882 94.4297H65.7542V95.7916H56.9015V101.92H65.3758V103.282H56.9015V109.638H65.9812V111H55.3125V94.6567V94.4297H55.3882Z" fill="black"/>
                    <path d="M75.6645 103.736L69.9141 94.4297H71.6543L75.3619 100.634C75.6645 101.164 75.9672 101.845 76.3455 102.374C76.7238 101.845 77.0265 101.239 77.4805 100.634L81.2637 94.4297H83.004L77.2535 103.736V110.849H75.6645V103.736Z" fill="black"/>
                    <path d="M82.928 0H80.6581V40.4047H66.7359V0H0V83.0037H2.26993V42.599H16.1921V80.7337V83.0037H82.8523V81.8687V0H82.928ZM64.6172 40.4047H50.695V2.26993H64.6172V40.4047ZM34.5786 2.26993H48.5008V40.4047H34.5786V2.26993ZM32.3086 40.4047H18.3864V2.26993H32.3086V40.4047ZM2.26993 40.4047V2.26993H16.1921V40.4047H2.26993ZM18.4621 42.6746H32.3843V80.8094H18.4621V42.6746ZM34.5786 80.8094V42.6746H48.5008V80.8094H34.5786ZM50.695 80.8094V42.6746H80.7337V80.8094H50.695Z" fill="black"/>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="83" height="111" viewBox="0 0 83 111" fill="none">
                    <path d="M6.8108 94.4297H8.55107L15.2852 110.773H13.5449L11.502 105.628H3.78423L1.81696 110.773H0.152344L6.8108 94.4297ZM10.9723 104.417L8.17275 97.5319C8.02142 97.0779 7.79443 96.4726 7.56744 96.0186C7.34045 96.4726 7.18912 97.0779 6.96213 97.6076L4.23821 104.493H10.9723V104.417Z" fill="black"/>
                    <path d="M20.1289 94.4297H26.3334C29.4356 94.4297 31.4029 95.8673 31.4029 98.4399C31.4029 101.012 30.1166 101.693 28.3763 102.147C30.4192 102.677 31.7812 104.19 31.7812 106.233C31.7812 109.411 29.2843 110.773 26.0307 110.773H20.1289V94.4297ZM26.182 101.618C28.452 101.618 29.8139 100.407 29.8139 98.5912C29.8139 96.7753 28.679 95.716 26.2577 95.716H21.6422V101.542H26.182V101.618ZM26.2577 109.487C28.9816 109.487 30.1922 108.276 30.1922 106.233C30.1922 104.19 28.8303 102.904 26.1064 102.904H21.6422V109.487H26.2577Z" fill="black"/>
                    <path d="M37.7554 94.4297H43.9598C47.0621 94.4297 49.0293 95.8673 49.0293 98.4399C49.0293 101.012 47.743 101.693 46.0028 102.147C48.0457 102.677 49.4076 104.19 49.4076 106.233C49.4076 109.411 46.9107 110.773 43.6572 110.773H37.7554V94.4297ZM43.7328 101.618C46.0028 101.618 47.3647 100.407 47.3647 98.5912C47.3647 96.7753 46.2297 95.716 43.8085 95.716H39.193V101.542H43.7328V101.618ZM43.8842 109.487C46.6081 109.487 47.8187 108.276 47.8187 106.233C47.8187 104.19 46.4567 102.904 43.7328 102.904H39.2686V109.487H43.8842Z" fill="black"/>
                    <path d="M55.3882 94.4297H65.7542V95.7916H56.9015V101.92H65.3758V103.282H56.9015V109.638H65.9812V111H55.3125V94.6567V94.4297H55.3882Z" fill="black"/>
                    <path d="M75.6645 103.736L69.9141 94.4297H71.6543L75.3619 100.634C75.6645 101.164 75.9672 101.845 76.3455 102.374C76.7238 101.845 77.0265 101.239 77.4805 100.634L81.2637 94.4297H83.004L77.2535 103.736V110.849H75.6645V103.736Z" fill="black"/>
                    <path d="M82.928 0H80.6581V40.4047H66.7359V0H0V83.0037H2.26993V42.599H16.1921V80.7337V83.0037H82.8523V81.8687V0H82.928ZM64.6172 40.4047H50.695V2.26993H64.6172V40.4047ZM34.5786 2.26993H48.5008V40.4047H34.5786V2.26993ZM32.3086 40.4047H18.3864V2.26993H32.3086V40.4047ZM2.26993 40.4047V2.26993H16.1921V40.4047H2.26993ZM18.4621 42.6746H32.3843V80.8094H18.4621V42.6746ZM34.5786 80.8094V42.6746H48.5008V80.8094H34.5786ZM50.695 80.8094V42.6746H80.7337V80.8094H50.695Z" fill="black"/>
                </svg>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                    <path d="M130 0H126.442V63.2817H104.617V0H0V130H3.55839V66.7183H25.3832V126.445V130H129.881V128.222V0H130ZM101.296 63.2817H79.4708V3.55515H101.296V63.2817ZM54.2062 3.55515H76.031V63.2817H54.2062V3.55515ZM50.6478 63.2817H28.823V3.55515H50.6478V63.2817ZM3.55839 63.2817V3.55515H25.3832V63.2817H3.55839ZM28.9416 66.8368H50.7664V126.563H28.9416V66.8368ZM54.2062 126.563V66.8368H76.031V126.563H54.2062ZM79.4708 126.563V66.8368H126.56V126.563H79.4708Z" fill="black"/>
                </svg>
                </a>
            </div>
         </div>
    </div>
</div>
</div>`;
}
