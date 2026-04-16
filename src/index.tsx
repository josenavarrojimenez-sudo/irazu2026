import { Hono } from 'hono'
import { layout } from './shared/layout'

const app = new Hono()

// ==================== HOMEPAGE ====================
app.get('/', (c) => {
  const mainContent = `<main id="content">
        <section data-id='lxlzjaoa' id='' class='ohm-component-HeroMenu'>
            <div class="ohm-background-container" x-data="{ activeIndex: null }">
    <div class="ohm-background-main-image">
    <picture>
        <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz_abbey_138101.jpg/c321bac74bac6c6ce6d64fa87cb33ebe/drz_abbey_138101.webp" type="image/webp">
        <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz_abbey_138101.jpg/82f6d53faba4a821fefaf165b0048e31/drz_abbey_138101.jpg" alt="." width="5272" height="3948" loading="lazy">
    </picture>
    </div>
    <div class="ohm-inner" x-data="heroMenu()" x-ref="hero_menu" data-delay=" ">
            <div class="ohm-left-col ohm-mobile-hidden">
                <div class="ohm-heading-wrapper ohm-top-heading">
                    <h1>Abbey</h1>
                </div>
                <div class="ohm-heading-wrapper ohm-bottom-heading">
                    <h2>modern day residences</h2>
                </div>
            </div>
            <div class="ohm-right-col">
            <nav class="ohm-menu">
                <ul class="ohm-menu-list">
                    <li @mouseenter="activeIndex = 0" @mouseleave="activeIndex = null">
                        <div class="ohm-line-container ohm-desktop-hidden"><div class="ohm-line growLine"></div></div>
                        <a class="ohm-column-link" href="/about">
                            <span class="text-wrapper  ohm-no-wrap "><span class="letters">About Abbey</span></span>
                            <span class="text-wrapper-big ohm-mobile-hidden"><span class="ohm-big-text">About Abbey</span></span>
                        </a>
                    </li>
                    <li @mouseenter="activeIndex = 1" @mouseleave="activeIndex = null">
                        <div class="ohm-line-container ohm-desktop-hidden"><div class="ohm-line growLine"></div></div>
                        <a class="ohm-column-link" href="/find">
                            <span class="text-wrapper  ohm-no-wrap "><span class="letters">Find your Abbey</span></span>
                            <span class="text-wrapper-big ohm-mobile-hidden"><span class="ohm-big-text">Find your Abbey</span></span>
                        </a>
                    </li>
                    <li @mouseenter="activeIndex = 2" @mouseleave="activeIndex = null">
                        <div class="ohm-line-container ohm-desktop-hidden"><div class="ohm-line growLine"></div></div>
                        <a class="ohm-column-link" href="/why">
                            <span class="text-wrapper  ohm-no-wrap "><span class="letters">Why Abbey</span></span>
                            <span class="text-wrapper-big ohm-mobile-hidden"><span class="ohm-big-text">Why Abbey</span></span>
                        </a>
                    </li>
                    <li @mouseenter="activeIndex = 3" @mouseleave="activeIndex = null">
                        <div class="ohm-line-container ohm-desktop-hidden"><div class="ohm-line growLine"></div></div>
                        <a class="ohm-column-link" href="/offices">
                            <span class="text-wrapper  ohm-no-wrap "><span class="letters">Offices</span></span>
                            <span class="text-wrapper-big ohm-mobile-hidden"><span class="ohm-big-text">Offices</span></span>
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
        <div class="ohm-bottom ohm-desktop-hidden">
            <div class="ohm-bottom-logo">
                <a class="" href="/" aria-label="Home page">
                    <img src="/static/nambi-n.svg" class="nambi-logo nambi-logo--hero" alt="Nambi">
                </a>
            </div>
        </div>
    </div>
</div>
                    </section>
</main>`;

  return c.html(layout(mainContent, {
    title: 'Real Estate Abbey | Athens & London High-End Residences',
    description: 'A boutique collection of modern-day residences & office spaces with a high standard of comfort and elegance. Learn more about our available properties here.',
    namespace: 'home',
    canonical: 'https://realestateabbey.com'
  }));
});

// ==================== ABOUT PAGE ====================
app.get('/about', (c) => {
  const mainContent = `<main id="content">
        <section data-id='lxt2hpw1' id='' class='ohm-component-HeroImage'>
            <div class="ohm-inner ohm-no-overlay" x-data="heroImage()" x-ref="hero_image">
    <div class="ohm-hero-container" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/argous/drz_abbey_22994.jpg');">
        <div class="ohm-heading-wrapper ohm-desktop-hidden"><h1>about ABBEY</h1></div>
        <a class="ohm-scroll-more ohm-desktop-hidden">Scroll for more </a>
    </div>
    <div class="ohm-intro-container">
        <div class="ohm-heading-wrapper"><p>Welcome to Abbey</p></div>
        <div class="ohm-content-wrapper">
            <p>A boutique collection of modern day residences with a high standard of comfort and elegance. We offer effortless living with modern conveniences, concierge-level service, and a sense of belonging in a secure environment. Our mission is to create residences where authenticity is not just welcomed, but celebrated.</p>
        </div>
        <div class="ohm-btn-wrapper">
            <a class="ohm-btn ohm-btn-arrow-border" href="#commitment">Our commitment</a>
        </div>
    </div>
</div>
                    </section>

        <section data-id='lxsv509h' id='commitment' class='ohm-component-SmallTextSlider'>
            <div class="ohm-background-container" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/athens-destination/drz_abbey_138107.jpg');">
    <div class="ohm-inner" x-data="smallTextSlider()" x-ref="small_text_slider">
        <div class="ohm-heading-wrapper"><p>Our Commitment</p></div>
        <div class="ohm-divide-wrapper"></div>
        <div class="ohm-slider-container">
            <div class="ohm-text-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide ohm-text-slide">
                        <div class="ohm-heading-wrapper"><p>INTEGRITY IN ACTION</p></div>
                        <div class="ohm-content-wrapper"><p>Our actions and decisions are measured by a high moral compass, representing the essence of Abbey and its community of residents.</p></div>
                    </div>
                    <div class="swiper-slide ohm-text-slide">
                        <div class="ohm-heading-wrapper"><p>GUIDED EXPLORATION</p></div>
                        <div class="ohm-content-wrapper"><p>Our services are designed to help you navigate the real estate landscape with confidence through our expert insights, prioritising your aspirations.</p></div>
                    </div>
                    <div class="swiper-slide ohm-text-slide">
                        <div class="ohm-heading-wrapper"><p>SEAMLESS EXCELLENCE</p></div>
                        <div class="ohm-content-wrapper"><p>Dedicated to consistently delivering high quality service and living experiences. We aim to uphold the standards of excellence in every aspect of the business, from customer service to the quality of residences offered.</p></div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next" x-ref="nextButton"></div>
            <div class="swiper-button-prev" x-ref="prevButton"></div>
        </div>
    </div>
</div>
                    </section>

        <section data-id='lxynxih9' id='' class='ohm-component-AlternatingCards'>
            <div class="ohm-inner">
    <div class="ohm-left-col  ohm-more-space "></div>
    <div class="ohm-middle-col">
        <picture>
            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/argous/drz_abbey_22969-%281%29.jpg/080de05d3f3f253764fee5a031a2d23f/drz_abbey_22969-%281%29.webp" type="image/webp">
            <img class="ohm-img " style="object-position: 28% 60%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/argous/drz_abbey_22969-%281%29.jpg/580a9552e2db25859d68426a5e14b7fd/drz_abbey_22969-%281%29.jpg" alt="." width="8256" height="6192" loading="lazy">
        </picture>
    </div>
    <div class="ohm-right-col  ohm-more-space ">
        <div class="ohm-heading-wrapper"><h4>Embracing Home</h4></div>
        <div class="ohm-content-wrapper"><p>Discover a place where you can truly embrace home, with spaces designed to reflect your unique lifestyle and aspirations. At Abbey, every residence is a sanctuary that welcomes and celebrates your individuality.</p></div>
        <div class="ohm-btn-wrapper">
            <a class="ohm-btn ohm-btn-underlined" href="/why">discover abbey</a>
        </div>
    </div>
</div>
                    </section>

        <section data-id='mdhj42bn' id='' class='ohm-component-LocationsOverview'>
            <div class="ohm-inner" x-data="LocationsOverview()">
    <div class="ohm-locations-overview-container">
        <div class="ohm-location-item" data-location-slug="athens">
            <div class="ohm-image-container">
                <picture>
                    <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz-abbey_5021.jpg/2cb95862bc00154ff0cffb7bb7c32bbe/drz-abbey_5021.webp" type="image/webp">
                    <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz-abbey_5021.jpg/05178af8d1b28f878798ff8c160725b9/drz-abbey_5021.jpg" alt="." width="5464" height="3640" loading="lazy">
                </picture>
            </div>
            <div class="ohm-content-container">
                <div class="ohm-content-title">
                    <div class="ohm-title ohm-heading-wrapper"><h2>Athens</h2></div>
                    <span class="ohm-residences-count">13 locations</span>
                </div>
                <div class="ohm-text"><p>Abbey Residences offer access to the breathtaking beauty and vibrant lifestyle of this renowned coastal area. Enjoy the perfect blend of serene beachside living and the cultural richness of Athens, right at your doorstep.</p></div>
                <div><div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/athens">View athens apartments</a></div></div>
            </div>
        </div>
        <div class="ohm-location-item" data-location-slug="london">
            <div class="ohm-image-container">
                <picture>
                    <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/london-destination/visualelectric-1753186373261-%281%29.png/62b7c89ad3cddb2a2106903e9a40c669/visualelectric-1753186373261-%281%29.webp" type="image/webp">
                    <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/london-destination/visualelectric-1753186373261-%281%29.png/e1d552d3e8441f1cb59f3b7ec89575ec/visualelectric-1753186373261-%281%29.png" alt="." width="1280" height="896" loading="lazy">
                </picture>
            </div>
            <div class="ohm-content-container">
                <div class="ohm-content-title">
                    <div class="ohm-title ohm-heading-wrapper"><h2>London</h2></div>
                    <span class="ohm-residences-count">5 locations</span>
                </div>
                <div class="ohm-text"><p>Discover the charm of London, where stunning neighborhoods meet a lively atmosphere. Experience the ideal combination of picturesque streets and the vibrant culture that makes this city a fantastic place to call home.</p></div>
                <div><div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/london">View London Apartments</a></div></div>
            </div>
        </div>
    </div>
</div>
                    </section>

        <section data-id='lzjoj4gq' id='' class='ohm-component-Divider'>
            <div class="ohm-inner  ohm-add-space "><div></div></div>
                    </section>
</main>`;

  return c.html(layout(mainContent, {
    title: 'About Abbey | Real Estate Abbey',
    description: 'A boutique collection of modern day residences with a high standard of comfort and elegance.',
    namespace: 'about',
    canonical: 'https://realestateabbey.com/about'
  }));
});

// ==================== FIND PAGE ====================
app.get('/find', (c) => {
  const mainContent = `<main id="content">
        <section data-id='lxyp4125' id='' class='ohm-component-HeroImage'>
            <div class="ohm-inner ohm-no-overlay" x-data="heroImage()" x-ref="hero_image">
    <div class="ohm-hero-container" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/lytous/drz_theabbey-project_5_210553.jpg');">
        <div class="ohm-heading-wrapper ohm-desktop-hidden"><p>Find your ABBEY</p></div>
        <a class="ohm-scroll-more ohm-desktop-hidden">Scroll for more </a>
    </div>
    <div class="ohm-intro-container">
        <div class="ohm-heading-wrapper"><h1>A Curated Collection</h1></div>
        <div class="ohm-content-wrapper"><p>Explore our collection of residences, each designed to offer effortless living in liberating spaces. Our curated homes blend luxury with convenience, ensuring a seamless living experience. Discover a place where every detail is crafted to meet the highest standards of comfort and elegance. Find your perfect sanctuary with Abbey today.</p></div>
        <div class="ohm-extra-content-wrapper">
            <p>Follow us<br><a rel="noopener" target="_blank" href="https://www.instagram.com/real_estate_abbey/">@real_estate_abbey</a></p>
        </div>
        <div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="#locations">Locations</a></div>
    </div>
</div>
                    </section>

        <section data-id='mdhg5m1f' id='locations' class='ohm-component-LocationsOverview'>
            <div class="ohm-inner" x-data="LocationsOverview()">
    <div class="ohm-locations-overview-container">
        <div class="ohm-location-item" data-location-slug="athens">
            <div class="ohm-image-container">
                <picture>
                    <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz-abbey_5021.jpg/2cb95862bc00154ff0cffb7bb7c32bbe/drz-abbey_5021.webp" type="image/webp">
                    <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz-abbey_5021.jpg/05178af8d1b28f878798ff8c160725b9/drz-abbey_5021.jpg" alt="." width="5464" height="3640" loading="lazy">
                </picture>
            </div>
            <div class="ohm-content-container">
                <div class="ohm-content-title">
                    <div class="ohm-title ohm-heading-wrapper"><h2>Athens</h2></div>
                    <span class="ohm-residences-count">13 locations</span>
                </div>
                <div class="ohm-text"><p>Abbey Residences offer access to the breathtaking beauty and vibrant lifestyle of this renowned coastal area. Enjoy the perfect blend of serene beachside living and the cultural richness of Athens, right at your doorstep.</p></div>
                <div><div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/athens">View Athens Apartments</a></div></div>
            </div>
        </div>
        <div class="ohm-location-item" data-location-slug="london">
            <div class="ohm-image-container">
                <picture>
                    <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/grosvenor-sq/screenshot-2025-07-25-at-17.07.22.png/fff5ec401e4ed32fbb80e838b699d65b/screenshot-2025-07-25-at-17.07.22.webp" type="image/webp">
                    <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/grosvenor-sq/screenshot-2025-07-25-at-17.07.22.png/b7a55fedcac96fae5eeeaf097ac92209/screenshot-2025-07-25-at-17.07.22.png" alt="." width="1976" height="1318" loading="lazy">
                </picture>
            </div>
            <div class="ohm-content-container">
                <div class="ohm-content-title">
                    <div class="ohm-title ohm-heading-wrapper"><h2>London</h2></div>
                    <span class="ohm-residences-count">5 locations</span>
                </div>
                <div class="ohm-text"><p>Discover the charm of London, where stunning neighbourhoods meet a lively atmosphere. Experience the ideal combination of picturesque streets and the vibrant culture that makes this city a fantastic place to call home.</p></div>
                <div><div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/london">View London Apartments</a></div></div>
            </div>
        </div>
    </div>
</div>
                    </section>

        <section data-id='lxypfen6' id='map' class='ohm-component-MapSection'>
            <div class="ohm-inner">
    <div class="ohm-top-wrapper">
    <div class="ohm-heading-wrapper"><p>Apartment locations</p></div>
    <div class="ohm-location-buttons">
        <div class="ohm-btn-wrapper">
            <div class="ohm-btn ohm-btn-solid-black location-button active" role="button" tabindex="0">Athens <span>(13)</span></div>
        </div>
        <div class="ohm-btn-wrapper">
            <div class="ohm-btn ohm-btn-solid-black location-button" role="button" tabindex="0">London <span>(5)</span></div>
        </div>
    </div>
    </div>
    <div class="map_container">
        <div class="ohm-mapbox-wrapper active" style="height: 500px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; color: #999; font-family: 'ABC Diatype Light', sans-serif;">
            <p>Map view - Athens & London locations</p>
        </div>
    </div>
</div>
                    </section>

        <section data-id='ly2u5n9o' id='' class='ohm-component-Divider'>
            <div class="ohm-inner  ohm-add-space "><div></div></div>
                    </section>
</main>`;

  return c.html(layout(mainContent, {
    title: 'Find Your Abbey | Real Estate Abbey',
    description: 'Explore our collection of residences, each designed to offer effortless living in liberating spaces.',
    namespace: 'find',
    canonical: 'https://realestateabbey.com/find'
  }));
});

// ==================== WHY PAGE ====================
app.get('/why', (c) => {
  const mainContent = `<main id="content">
        <section data-id='lxypp61l' id='' class='ohm-component-HeroImage'>
            <div class="ohm-inner ohm-light-overlay" x-data="heroImage()" x-ref="hero_image">
    <div class="ohm-hero-container" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/argous/drz_abbey_23015.jpg');">
        <div class="ohm-heading-wrapper ohm-desktop-hidden"><h1>Why ABBEY</h1></div>
        <a class="ohm-scroll-more ohm-desktop-hidden">Scroll for more </a>
    </div>
    <div class="ohm-intro-container">
        <div class="ohm-heading-wrapper"><h2>Experience the Difference</h2></div>
        <div class="ohm-content-wrapper"><p>Choose Abbey for unparalleled excellence and a commitment to your true self. Our residences offer modern conveniences, concierge-level service, and a sense of belonging in a secure environment. Experience the difference with Abbey, where your lifestyle and comfort are our top priorities.</p></div>
        <div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/find">View Residences</a></div>
    </div>
</div>
                    </section>

        <section data-id='lxypzvb4' id='' class='ohm-component-SmallTextSlider'>
            <div class="ohm-background-container" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/panopis/drz_abbey_22812.jpg');">
    <div class="ohm-inner" x-data="smallTextSlider()" x-ref="small_text_slider">
        <div class="ohm-heading-wrapper"><h5>Abbey&#039;s Promise</h5></div>
        <div class="ohm-divide-wrapper"></div>
        <div class="ohm-slider-container">
            <div class="ohm-text-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide ohm-text-slide">
                        <div class="ohm-heading-wrapper"><p>CONCIERGE-LEVEL SERVICE</p></div>
                        <div class="ohm-content-wrapper"><p>Our concierge-level service at Abbey anticipates your every need, offering personalised and efficient solutions to enhance your living experience. From organising events to handling daily errands, our dedicated team ensures that you can enjoy a seamless lifestyle.</p></div>
                    </div>
                    <div class="swiper-slide ohm-text-slide">
                        <div class="ohm-heading-wrapper"><p>MODERN CONVENIENCES</p></div>
                        <div class="ohm-content-wrapper"><p>At Abbey, modern conveniences mean creating spaces that perfectly blend aesthetic beauty with functional design. We carefully consider and harmoniously integrate every aspect of your living experience, ensuring your home is both stunning and practical.</p></div>
                    </div>
                    <div class="swiper-slide ohm-text-slide">
                        <div class="ohm-heading-wrapper"><p>SENSE OF BELONGING</p></div>
                        <div class="ohm-content-wrapper"><p>We understand that our diverse clientele values security and peace of mind. That&#039;s why at Abbey, we are dedicated to creating a safe, welcoming environment that feels like home, no matter where you&#039;re from.</p></div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next" x-ref="nextButton"></div>
            <div class="swiper-button-prev" x-ref="prevButton"></div>
        </div>
    </div>
</div>
                    </section>

        <section data-id='lxypvn9b' id='' class='ohm-component-AlternatingCards'>
            <div class="ohm-inner">
    <div class="ohm-left-col  ohm-more-space "></div>
    <div class="ohm-middle-col">
        <picture>
            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/architectural/drz_abbey_22688_1.jpg/8be4c4781a1a14f9fc5ba60444249b62/drz_abbey_22688_1.webp" type="image/webp">
            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/architectural/drz_abbey_22688_1.jpg/585f49ed7dabf81640d81beeda4f6fa5/drz_abbey_22688_1.jpg" alt="." width="2268" height="1701" loading="lazy">
        </picture>
    </div>
    <div class="ohm-right-col ">
        <div class="ohm-heading-wrapper"><h4>A Safe Haven</h4></div>
        <div class="ohm-content-wrapper"><p>Safety and peace of mind are paramount, which is why we have advanced security systems in place. Our laundry facilities and housekeeping services ensure your home remains immaculate, while our personal chef services and concierge cater to your every need, offering unparalleled convenience.</p></div>
    </div>
</div>
                    </section>

        <section data-id='lxypsm42' id='' class='ohm-component-AlternatingCards'>
            <div class="ohm-inner">
    <div class="ohm-left-col "></div>
    <div class="ohm-middle-col">
        <picture>
            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/old-properties/nireos_53/living-i1-view-1-final-%281%29.jpg/b564ce37c2512edc0c23bce1f8636fc4/living-i1-view-1-final-%281%29.webp" type="image/webp">
            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/old-properties/nireos_53/living-i1-view-1-final-%281%29.jpg/cb672da1909e2cc90638bd80cbc8957b/living-i1-view-1-final-%281%29.jpg" alt="." width="2000" height="1504" loading="lazy">
        </picture>
    </div>
    <div class="ohm-right-col ">
        <div class="ohm-heading-wrapper"><h3>Effortless Living</h3></div>
        <div class="ohm-content-wrapper"><p>Relax in your private garden or yard, and take advantage of on-site parking for your vehicles. At Abbey, every facility is designed to provide a seamless living experience, allowing you to focus on what truly matters.</p></div>
    </div>
</div>
                    </section>

        <section data-id='mdhjhjvf' id='' class='ohm-component-LocationsOverview'>
            <div class="ohm-inner" x-data="LocationsOverview()">
    <div class="ohm-locations-overview-container">
        <div class="ohm-location-item" data-location-slug="athens">
            <div class="ohm-image-container">
                <picture>
                    <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz-abbey_5021.jpg/2cb95862bc00154ff0cffb7bb7c32bbe/drz-abbey_5021.webp" type="image/webp">
                    <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/athens-destination/drz-abbey_5021.jpg/05178af8d1b28f878798ff8c160725b9/drz-abbey_5021.jpg" alt="." width="5464" height="3640" loading="lazy">
                </picture>
            </div>
            <div class="ohm-content-container">
                <div class="ohm-content-title">
                    <div class="ohm-title ohm-heading-wrapper"><h2>Athens</h2></div>
                    <span class="ohm-residences-count">13 locations</span>
                </div>
                <div class="ohm-text"><p>Abbey Residences offer access to the breathtaking beauty and vibrant lifestyle of this renowned coastal area. Enjoy the perfect blend of serene beachside living and the cultural richness of Athens, right at your doorstep.</p></div>
                <div><div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/athens">View athens apartments</a></div></div>
            </div>
        </div>
        <div class="ohm-location-item" data-location-slug="london">
            <div class="ohm-image-container">
                <picture>
                    <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/grosvenor-sq/screenshot-2025-07-25-at-17.07.22.png/fff5ec401e4ed32fbb80e838b699d65b/screenshot-2025-07-25-at-17.07.22.webp" type="image/webp">
                    <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/grosvenor-sq/screenshot-2025-07-25-at-17.07.22.png/b7a55fedcac96fae5eeeaf097ac92209/screenshot-2025-07-25-at-17.07.22.png" alt="." width="1976" height="1318" loading="lazy">
                </picture>
            </div>
            <div class="ohm-content-container">
                <div class="ohm-content-title">
                    <div class="ohm-title ohm-heading-wrapper"><h2>London</h2></div>
                    <span class="ohm-residences-count">5 locations</span>
                </div>
                <div class="ohm-text"><p>Discover the charm of London, where stunning neighborhoods meet a lively atmosphere. Experience the ideal combination of picturesque streets and the vibrant culture that makes this city a fantastic place to call home.</p></div>
                <div><div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="/london">View London Apartments</a></div></div>
            </div>
        </div>
    </div>
</div>
                    </section>

        <section data-id='mdhjkb2m' id='' class='ohm-component-Divider'>
            <div class="ohm-inner  ohm-add-space "><div></div></div>
                    </section>
</main>`;

  return c.html(layout(mainContent, {
    title: 'Why Abbey | Real Estate Abbey',
    description: 'Choose Abbey for unparalleled excellence and a commitment to your true self.',
    namespace: 'why',
    canonical: 'https://realestateabbey.com/why'
  }));
});

// ==================== OFFICES PAGE ====================
app.get('/offices', (c) => {
  const mainContent = `<main id="content">
        <section data-id='lxyp4125' id='' class='ohm-component-HeroImage'>
            <div class="ohm-inner ohm-no-overlay" x-data="heroImage()" x-ref="hero_image">
    <div class="ohm-hero-container" style="background-image: url('https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/images/offices/singapore/um-11.jpg');">
        <div class="ohm-heading-wrapper ohm-desktop-hidden"><h1>Offices</h1></div>
        <a class="ohm-scroll-more ohm-desktop-hidden">Scroll for more </a>
    </div>
    <div class="ohm-intro-container">
        <div class="ohm-heading-wrapper"><h2>Discover more</h2></div>
        <div class="ohm-content-wrapper"><p>Explore our collection of thoughtfully commissioned office spaces by Real Estate Abbey. Designed to elevate the way we work, connect, and create, these environments inspire productivity, foster collaboration, and reflect the spirit of innovation.</p></div>
        <div class="ohm-btn-wrapper"><a class="ohm-btn ohm-btn-arrow-border" href="#offices">Offices</a></div>
    </div>
</div>
                    </section>

        <section data-id='lxyp8nx7' id='offices' class='ohm-component-RoomsBlock'>
            <div class="ohm-inner" x-data="roomsBlock()" x-ref="rooms_block_component">
    <div class="ohm-heading-wrapper"></div>
    <div class="ohm-rooms-container ">
        <div class="ohm-room  ohm-image-top " data-slug="">
            <div class="ohm-image-container">
                <a href="/projects/1-athens">
                    <div class="ohm-content">
                        <div class="ohm-room-title">
                              <h3 class="ohm-text-big">1Athens</h3>
                              <span class="ohm-more-info ohm-mobile-hidden">More information</span>
                        </div>
                        <picture>
                            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/1-athens/drz_the-abbey_142810.jpg/f45cf7636c2700552e8b5af193fe0e99/drz_the-abbey_142810.webp" type="image/webp">
                            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/1-athens/drz_the-abbey_142810.jpg/b178428aa67bfeb56ee756f484f5e47b/drz_the-abbey_142810.jpg" alt="." width="3214" height="2411" loading="lazy">
                        </picture>
                        <div class="ohm-title-overlay"></div>
                    </div>
                </a>
                <div class="ohm-btn-container">
                    <a class="ohm-btn-underlined" href="/projects/1-athens">View</a>
                </div>
            </div>
        </div>

        <div class="ohm-room " data-slug="">
            <div class="ohm-image-container">
                <a href="/projects/2-athens">
                    <div class="ohm-content">
                        <div class="ohm-room-title">
                              <h3 class="ohm-text-big">2Athens</h3>
                              <span class="ohm-more-info ohm-mobile-hidden">More information</span>
                        </div>
                        <picture>
                            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/2-athens/drz_union-athens_5090.jpg/673e0608b8b7fcde1676a4a55bb43f34/drz_union-athens_5090.webp" type="image/webp">
                            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/2-athens/drz_union-athens_5090.jpg/ca97087cda323d112e647f61d85c94b9/drz_union-athens_5090.jpg" alt="." width="3309" height="2480" loading="lazy">
                        </picture>
                        <div class="ohm-title-overlay"></div>
                    </div>
                </a>
                <div class="ohm-btn-container">
                    <a class="ohm-btn-underlined" href="/projects/2-athens">View</a>
                </div>
            </div>
        </div>

        <div class="ohm-room  ohm-image-top " data-slug="">
            <div class="ohm-image-container">
                <a href="/projects/1-london">
                    <div class="ohm-content">
                        <div class="ohm-room-title">
                              <h3 class="ohm-text-big">1London</h3>
                              <span class="ohm-more-info ohm-mobile-hidden">More information</span>
                        </div>
                        <picture>
                            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/1-london/awinship-9575-22.jpg/40473dc3216ce4b00733308f421a68bd/awinship-9575-22.webp" type="image/webp">
                            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/1-london/awinship-9575-22.jpg/8e0c996ff5cbc2bf96d3cd56ed587f20/awinship-9575-22.jpg" alt="." width="1280" height="853" loading="lazy">
                        </picture>
                        <div class="ohm-title-overlay"></div>
                    </div>
                </a>
                <div class="ohm-btn-container">
                    <a class="ohm-btn-underlined" href="/projects/1-london">View</a>
                </div>
            </div>
        </div>

        <div class="ohm-room " data-slug="london">
            <div class="ohm-image-container">
                <a href="/projects/2-london">
                    <div class="ohm-content">
                        <div class="ohm-room-title">
                              <h3 class="ohm-text-big">2London</h3>
                              <span class="ohm-more-info ohm-mobile-hidden">More information</span>
                        </div>
                        <picture>
                            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/2-london/maple-place-6.jpg/29efd3d709732889ddd7e7315990912d/maple-place-6.webp" type="image/webp">
                            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/2-london/maple-place-6.jpg/09f6f84e289b07fc9fe678c75fdfaa79/maple-place-6.jpg" alt="." width="6720" height="4480" loading="lazy">
                        </picture>
                        <div class="ohm-title-overlay"></div>
                    </div>
                </a>
                <div class="ohm-btn-container">
                    <a class="ohm-btn-underlined" href="/projects/2-london">View</a>
                </div>
            </div>
        </div>

        <div class="ohm-room  ohm-image-top " data-slug="">
            <div class="ohm-image-container">
                <a href="/projects/singapore">
                    <div class="ohm-content">
                        <div class="ohm-room-title">
                              <h3 class="ohm-text-big">Singapore</h3>
                              <span class="ohm-more-info ohm-mobile-hidden">More information</span>
                        </div>
                        <picture>
                            <source srcset="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/singapore/um-5.jpg/9d587fcbb19200a50ffc40cddebffd83/um-5.webp" type="image/webp">
                            <img class="ohm-img " style="object-position: 50% 50%;" src="https://abbey-real-estate.ams3.cdn.digitaloceanspaces.com/website/optimized/containers/images/offices/singapore/um-5.jpg/907fd2cfaeb51a4b2909e239f7aa67c4/um-5.jpg" alt="." width="2048" height="1536" loading="lazy">
                        </picture>
                        <div class="ohm-title-overlay"></div>
                    </div>
                </a>
                <div class="ohm-btn-container">
                    <a class="ohm-btn-underlined" href="/projects/singapore">View</a>
                </div>
            </div>
        </div>
    </div>
</div>
                    </section>
</main>`;

  return c.html(layout(mainContent, {
    title: 'Offices | Real Estate Abbey',
    description: 'Explore our collection of thoughtfully commissioned office spaces by Real Estate Abbey.',
    namespace: 'offices',
    canonical: 'https://realestateabbey.com/offices'
  }));
});

// ==================== SEO PAGES (redirect to find) ====================
app.get('/apartments-for-rent-in-glyfada-greece', (c) => c.redirect('/find'));
app.get('/luxury-real-estate-in-athens-riviera', (c) => c.redirect('/find'));
app.get('/furnished-apartments-for-rent-in-voula-greece', (c) => c.redirect('/find'));
app.get('/athens', (c) => c.redirect('/find'));
app.get('/london', (c) => c.redirect('/find'));

// API endpoint for contact form (future use)
app.post('/api/contact', async (c) => {
  const body = await c.req.json();
  return c.json({ success: true, message: 'Thank you! We will get back to you shortly.' });
});

app.post('/api/newsletter', async (c) => {
  const body = await c.req.json();
  return c.json({ success: true, message: 'Thank you for subscribing!' });
});

export default app
