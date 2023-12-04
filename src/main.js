import '../styles/modernNormalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/featured.css'
import '../styles/components/projects.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/components/mobile-nav.css'
import '../styles/utils.css'


import mobileNav from './utils/mobile-nav.js';
import darkMode from './utils/dark-Mode.js';
import LazyLoading from './utils/lazyLoading'

LazyLoading()
mobileNav()
darkMode()