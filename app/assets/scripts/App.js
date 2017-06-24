import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import HighlightSection from './modules/HighlightSection';
import SmoothScrolling from './modules/SmoothScrolling';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
const stickyHeader = new StickyHeader();
const highlightSection = new HighlightSection();
const smoothScrolling = new SmoothScrolling();
