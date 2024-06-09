import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css'
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
 

import '../styles/util.css' ;
import mobileNav from './utils/mobile-nav';
import darkMode from './utils/darkmode';
import LazyLoading from './utils/lazy';

mobileNav();
darkMode();
LazyLoading();

