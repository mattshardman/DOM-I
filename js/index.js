const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png',
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png',
  },
  mainContent: {
    'features-h4': 'Features',
    'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io',
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018',
  },
};

const {
  nav, cta, mainContent, contact, footer,
} = siteContent;

function addChild(addTo, elementType, text, prepend) {
  const child = document.createElement(elementType);
  const t = document.createTextNode(text);
  child.appendChild(t);
  if (prepend) {
    return addTo.prepend(child);
  }
  return addTo.appendChild(child);
}

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.nav['img-src']);

// UPDATE NAV TEXT AND CLASSNAMES
const navigation = document.querySelector('nav');
const navElements = navigation.querySelectorAll('a');
const navClasses = Object.keys(nav);
const navText = Object.values(nav);

[...navElements].map((each, index) => {
  each.className = navClasses[index];
  each.textContent = navText[index];
});

addChild(navigation, 'a', 'Party');
addChild(navigation, 'a', 'Fish', true);

const newElements = navigation.querySelectorAll('a');
[...newElements].map((each, index) => {
  each.style.color = 'green';
});


// UPDATE CALL TO ACTION
const { h1, button } = siteContent.cta;
const ctaSection = document.querySelector('.cta-text');
const ctaHeader = ctaSection.querySelector('h1');
const ctaButton = ctaSection.querySelector('button');
const ctaImage = document.getElementById('cta-img');

ctaHeader.textContent = h1;
ctaButton.textContent = button;
ctaImage.setAttribute('src', siteContent.cta['img-src']);

// UPDATE MAIN CONTENT SECTION

// update text-content

// filter main content for h4s and paras
const mainContentArray = Object.values(mainContent)
  .filter((each, index) => index !== 4);

const parasContent = mainContentArray
  .filter((each, index) => index % 2 !== 0);

const h4Content = mainContentArray
  .filter((each, index) => index % 2 === 0);

// select h4s and paras from DOM
const mainContentSection = document.querySelector('.main-content');
const h4s = mainContentSection.querySelectorAll('h4');
const paras = mainContentSection.querySelectorAll('p');

// set h4s and paras from JSON
[...h4s].map((h4, index) => {
  h4.textContent = h4Content[index];
});

[...paras].map((para, index) => {
  para.textContent = parasContent[index];
});

// update main content image
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', mainContent['middle-img-src']);

// UPDATE CONTACT SECTION
const contactSection = document.querySelector('.contact');
const contactContent = Object.values(siteContent.contact);

[...contactSection.children].map((each, index) => {
  each.textContent = contactContent[index];
});

// UPDATE FOOTER SECTION
const footerSection = document.querySelector('footer');
footerSection.children[0].textContent = footer.copyright;
