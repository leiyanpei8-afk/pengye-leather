/* ============================================================
   Pengye Leather — Independent Site App
   SPA with hash routing, data-driven views
   ============================================================ */

'use strict';

/* ---------- Data ---------- */

/* ---------- i18n: EN / 中文 ---------- */
var LANG = 'en';
try { LANG = localStorage.getItem('pl-lang') || 'en'; } catch (e) {}
function T(en, zh) { return LANG === 'zh' ? zh : en; }
function setLang(l) {
  LANG = l;
  try { localStorage.setItem('pl-lang', l); } catch (e) {}
  updateNavLang();
  router();
}
function updateNavLang() {
  var map = { home: T('Home', '\u9996\u9875'), products: T('Products', '\u4ea7\u54c1'), about: T('About', '\u5173\u4e8e\u6211\u4eec'), certifications: T('Certifications', '\u8ba4\u8bc1'), track: T('Track Order', '\u7269\u6d41\u8ddf\u8e2a'), contact: T('Contact', '\u8054\u7cfb\u6211\u4eec') };
  var links = document.querySelectorAll('#siteNav .nav-link');
  for (var i = 0; i < links.length; i++) {
    var k = links[i].getAttribute('data-nav');
    if (k && map[k]) links[i].textContent = map[k];
  }
  var cta = document.querySelector('#siteNav .nav-cta');
  if (cta) cta.textContent = T('Start an Order', '\u5728\u7ebf\u4e0b\u5355');
  var btns = document.querySelectorAll('.lang-btn');
  for (var j = 0; j < btns.length; j++) {
    btns[j].classList.toggle('active', btns[j].getAttribute('data-lang') === LANG);
  }
}

/* Post-render dictionary translation (exact text-node match) for static copy.
   Bidirectional: zh translates matched nodes and remembers their original text;
   back to en restores those originals so static copy is never left in Chinese. */
var I18N_ORIG = (typeof WeakMap !== 'undefined') ? new WeakMap() : null;
function applyLang() {
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  var stack = [];
  while (walker.nextNode()) stack.push(walker.currentNode);
  for (var i = 0; i < stack.length; i++) {
    var n = stack[i];
    var key = n.nodeValue.trim();
    if (!key) continue;
    if (LANG === 'zh') {
      if (I18N_ZH.hasOwnProperty(key)) {
        if (I18N_ORIG && !I18N_ORIG.has(n)) I18N_ORIG.set(n, n.nodeValue);
        n.nodeValue = I18N_ZH[key];
      }
    } else {
      if (I18N_ORIG && I18N_ORIG.has(n)) n.nodeValue = I18N_ORIG.get(n);
    }
  }
}

/* Rendered-text -> Chinese dictionary for static copy (exact text-node match). */
var I18N_ZH = {
  /* nav / generic */
  'Home': '\u9996\u9875',
  'Products': '\u4ea7\u54c1',
  'About': '\u5173\u4e8e\u6211\u4eec',
  'Certifications': '\u8ba4\u8bc1',
  'Track Order': '\u7269\u6d41\u8ddf\u8e2a',
  'Contact': '\u8054\u7cfb\u6211\u4eec',
  'Start an Order': '\u5728\u7ebf\u4e0b\u5355',
  'Request a Sample': '\u7533\u8bf7\u6837\u54c1',
  'Fee policy on inquiry': '\u6837\u54c1\u8d39\u7528\u54a8\u8be2\u786e\u8ba4',
  'Chat on WhatsApp': 'WhatsApp \u5728\u7ebf\u54a8\u8be2',
  'Instant Reply': '\u5b9e\u65f6\u56de\u590d',
  'View details': '\u67e5\u770b\u8be6\u60c5',
  'Browse All Products': '\u6d4f\u89c8\u5168\u90e8\u4ea7\u54c1',
  'Shop on Amazon': '\u5728\u4e9a\u9a6c\u900a\u8d2d\u4e70',
  'Shop on Amazon →': '\u5728\u4e9a\u9a6c\u900a\u8d2d\u4e70 →',
  'Wholesale Quote on WhatsApp': 'WhatsApp \u6279\u53d1\u8be2\u4ef7',
  'WhatsApp Us': 'WhatsApp \u8054\u7cfb\u6211\u4eec',
  'Add to Order': '\u52a0\u5165\u8ba2\u5355',
  'Track Now': '\u7acb\u5373\u67e5\u8be2',
  'Ask on WhatsApp': 'WhatsApp \u54a8\u8be2',
  'Copy': '\u590d\u5236',
  'WeChat': '\u5fae\u4fe1',
  'Email': '\u90ae\u7bb1',
  'Tel': '\u7535\u8bdd',
  '(tap to copy)': '(\u70b9\u51fb\u590d\u5236)',
  'Years Experience': '\u4ece\u4e1a\u7ecf\u9a8c',
  'Real-Time Quote': '\u5b9e\u65f6\u62a5\u4ef7',
  'Product Lines': '\u4ea7\u54c1\u7cfb\u5217',
  'Pre-Shipment Inspection': '\u51fa\u8d27\u524d\u5168\u68c0',
  'Premium Leather Materials': '\u9ad8\u7aef\u76ae\u9769\u6750\u6599',
  'Your Trusted Leather Sourcing Partner in China': '\u4e2d\u56fd\u503c\u5f97\u4fe1\u8d56\u7684\u76ae\u9769\u91c7\u8d2d\u5408\u4f5c\u4f19\u4f34',
  /* hero */
  '20 years of one-stop leather supply \u2014 genuine, PU, PVC, microfiber, bio-based and recycled eco materials. Low MOQ, verified quality and on-time delivery for global buyers.': '20 \u5e74\u4e00\u7ad9\u5f0f\u76ae\u9769\u4f9b\u5e94\u2014\u2014\u771f\u76ae\u3001PU\u3001PVC\u3001\u8d85\u7ea4\u3001\u751f\u7269\u57fa\u3001\u518d\u751f\u73af\u4fdd\u6750\u6599\u3002\u4f4e\u8d77\u8ba2\u91cf\u3001\u54c1\u8d28\u53ef\u9760\u3001\u51c6\u65f6\u4ea4\u4ed8\uff0c\u670d\u52a1\u5168\u7403\u4e70\u5bb6\u3002',
  'Samples available \u2014 genuine leather & microfiber samples are charged, others advised on inquiry. Contact us first and we\u2019ll arrange the right sample.': '\u6837\u54c1\u653f\u7b56\uff1a\u771f\u76ae\u4e0e\u8d85\u7ea4\u6837\u54c1\u6536\u8d39\uff0c\u5176\u4ed6\u6750\u6599\u54a8\u8be2\u786e\u8ba4\u3002\u8bf7\u5148\u8054\u7cfb\u6211\u4eec\uff0c\u4e3a\u60a8\u5b89\u6392\u5408\u9002\u7684\u6837\u54c1\u3002',
  /* scope cards */
  'Shoe Material Specialist': '\u9774\u6750\u76ae\u9769\u4e13\u5bb6',
  'We focus on leather for footwear \u2014 uppers, linings and more. Every series below is built for shoe production.': '\u6211\u4eec\u4e13\u6ce8\u4e8e\u978b\u6750\u76ae\u9769\u2014\u2014\u9762\u6599\u3001\u91cc\u6599\u7b49\u3002\u4e0b\u9762\u6bcf\u4e2a\u7cfb\u5217\u90fd\u4e3a\u5236\u978b\u800c\u751f\u3002',
  'Sofa & Automotive Leather': '\u6c99\u53d1\u4e0e\u6c7d\u8f66\u76ae\u9769',
  'Need upholstery-grade leather for sofas or car interiors? We source it too \u2014 just mention your application in advance.': '\u9700\u8981\u6c99\u53d1\u6216\u6c7d\u8f66\u5185\u9970\u7528\u76ae\u9769\uff1f\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e3a\u60a8\u5bfb\u627e\u2014\u2014\u53ea\u9700\u63d0\u524d\u544a\u8bc9\u7528\u9014\u5373\u53ef\u3002',
  'Visit Our Showroom': '\u53c2\u89c2\u6211\u4eec\u7684\u95e8\u5e97',
  'Buyers and partners are welcome to visit our showroom & office in Huidong, Guangdong. Book a visit on WhatsApp.': '\u6b22\u8fce\u4e70\u5bb6\u4e0e\u5408\u4f5c\u4f19\u4f34\u524d\u5f80\u5e7f\u4e1c\u60e0\u4e1c\u7684\u95e8\u5e97\u4e0e\u529e\u516c\u5ba4\u53c2\u89c2\u3002\u53ef\u901a\u8fc7 WhatsApp \u9884\u7ea6\u3002',
  'Retail on Amazon': '\u4e9a\u9a6c\u900a\u96f6\u552e',
  'Need a small quantity fast? Our Amazon store sells hydrolysis-resistant PU leather for retail buyers.': '\u9700\u8981\u5c0f\u6279\u91cf\u5feb\u901f\u8d2d\u4e70\uff1f\u6211\u4eec\u7684\u4e9a\u9a6c\u900a\u5e97\u9488\u5bf9\u96f6\u552e\u4e70\u5bb6\u9500\u552e\u8010\u6c34\u89e3 PU \u76ae\u9769\u3002',
  /* value prop */
  'We solve all your leather sourcing headaches: no high MOQ, no limited styles, no quality issues, no delayed delivery.': '\u6211\u4eec\u89e3\u51b3\u60a8\u6240\u6709\u76ae\u9769\u91c7\u8d2d\u7684\u75db\u70b9\uff1a\u6ca1\u6709\u9ad8\u8d77\u8ba2\u91cf\u3001\u6ca1\u6709\u6837\u5f0f\u9650\u5236\u3001\u6ca1\u6709\u8d28\u91cf\u95ee\u9898\u3001\u6ca1\u6709\u5ef6\u8bef\u4ea4\u8d27\u3002',
  'One supplier, every leather you need \u2014 matched to your specification, budget and timeline.': '\u4e00\u4e2a\u4f9b\u5e94\u5546\uff0c\u6ee1\u8db3\u60a8\u6240\u9700\u7684\u4e00\u5207\u76ae\u9769\u2014\u2014\u6309\u60a8\u7684\u89c4\u683c\u3001\u9884\u7b97\u548c\u65f6\u95f4\u8868\u5339\u914d\u3002',
  '20 Years Proven Experience': '20 \u5e74\u4e1a\u754c\u7ecf\u9a8c',
  'Specialized leather sourcing since 2006.': '\u81ea 2006 \u5e74\u4e13\u6ce8\u76ae\u9769\u91c7\u8d2d\u3002',
  'Flexible MOQ \u2014 Real-Time': '\u7075\u6d3b\u4f4e\u8d77\u8ba2\u91cf\u2014\u2014\u5b9e\u65f6\u786e\u8ba4',
  'MOQ and pricing confirmed live with our sales team.': '\u8d77\u8ba2\u91cf\u4e0e\u4ef7\u683c\u7531\u6211\u4eec\u7684\u9500\u552e\u56e2\u961f\u5b9e\u65f6\u786e\u8ba4\u3002',
  'One-Stop Full Range Supply': '\u4e00\u7ad9\u5f0f\u5168\u54c1\u7c7b\u4f9b\u5e94',
  'All leather categories from a single partner.': '\u6240\u6709\u76ae\u9769\u54c1\u7c7b\u6765\u81ea\u5355\u4e00\u5408\u4f5c\u4f19\u4f34\u3002',
  /* why pengye */
  'Why Pengye': '\u4e3a\u4f55\u9009\u9e4f\u4e1a',
  'Why Choose Pengye Over Direct Factories?': '\u4e3a\u4ec0\u4e48\u9009\u9e4f\u4e1a\u800c\u4e0d\u662f\u76f4\u63a5\u627e\u5de5\u5382\uff1f',
  'We sit between global buyers and China\u2019s best leather factories \u2014 so you get factory-direct prices with none of the sourcing headaches.': '\u6211\u4eec\u8de8\u5728\u5168\u7403\u4e70\u5bb6\u4e0e\u4e2d\u56fd\u4f18\u8d28\u76ae\u9769\u5de5\u5382\u4e4b\u95f4\u2014\u2014\u60a8\u53ef\u4ee5\u62ff\u5230\u5de5\u5382\u76f4\u4f9b\u4ef7\u683c\uff0c\u5374\u65e0\u9700\u627f\u62c5\u4efb\u4f55\u91c7\u8d2d\u9ebb\u70e6\u3002',
  /* range */
  'Our Range': '\u4ea7\u54c1\u4f18\u52bf',
  'Full Leather Series': '\u5168\u7cfb\u5217\u76ae\u9769',
  'Nine product lines, hundreds of textures and colors. The displayed styles are only a small part of our inventory.': '\u4e5d\u5927\u4ea7\u54c1\u7cfb\u5217\uff0c\u6570\u767e\u79cd\u7eb9\u7406\u4e0e\u989c\u8272\u3002\u5c55\u793a\u7684\u6b3e\u5f0f\u4ec5\u662f\u6211\u4eec\u5e93\u5b58\u7684\u4e00\u5c0f\u90e8\u5206\u3002',
  /* factory */
  'Factory & Quality': '\u5de5\u5382\u4e0e\u54c1\u8d28',
  'Leather Factory Production Process': '\u76ae\u9769\u5de5\u5382\u751f\u4ea7\u6d41\u7a0b',
  'From raw material to finished leather, strict quality control at every step.': '\u4ece\u539f\u6599\u5230\u6210\u54c1\u76ae\u9769\uff0c\u6bcf\u4e2a\u73af\u8282\u4e25\u683c\u54c1\u63a7\u3002',
  'Factory Tour Video': '\u5de5\u5382\u5b9e\u62cd\u89c6\u9891',
  'Cooperative Factories & Quality Certificates': '\u5408\u4f5c\u5de5\u5382\u4e0e\u8d28\u91cf\u8ba4\u8bc1',
  'Long-term stable cooperative leather factories, complete international test certificates to guarantee product quality.': '\u957f\u671f\u7a33\u5b9a\u5408\u4f5c\u7684\u76ae\u9769\u5de5\u5382\uff0c\u5b8c\u6574\u7684\u56fd\u9645\u68c0\u6d4b\u8bc1\u4e66\uff0c\u786e\u4fdd\u4ea7\u54c1\u54c1\u8d28\u3002',
  /* trust */
  'Track Record': '\u4e1a\u7ee9\u8ffd\u8e2a',
  'Proven Trust in Global Leather Sourcing': '\u5168\u7403\u76ae\u9769\u91c7\u8d2d\u7684\u8bc1\u660e\u4fe1\u4efb',
  'Integrity, transparency and reliability \u2014 the way we have done business since 2006.': '\u8bda\u4fe1\u3001\u900f\u660e\u4e0e\u53ef\u9760\u2014\u2014\u8fd9\u662f\u6211\u4eec\u81ea 2006 \u5e74\u4ee5\u6765\u7684\u7ecf\u8425\u4e4b\u9053\u3002',
  /* partners */
  'Who We Supply': '\u6211\u4eec\u670d\u52a1\u8c01',
  'Trusted by Global Brands & Platforms': '\u53d7\u5168\u7403\u54c1\u724c\u4e0e\u5e73\u53f0\u4fe1\u8d56',
  'Our materials reach end products sold through leading global retail and e-commerce channels.': '\u6211\u4eec\u7684\u6750\u6599\u8fdb\u5165\u5168\u7403\u4e3b\u6d41\u96f6\u552e\u4e0e\u7535\u5546\u6e20\u9053\u9500\u552e\u7684\u6700\u7ec8\u4ea7\u54c1\u3002',
  /* amazon band */
  'Need a Small Quantity Fast? We\u2019re on Amazon.': '\u9700\u8981\u5c0f\u6279\u91cf\u5feb\u901f\u8d2d\u4e70\uff1f\u6211\u4eec\u5728\u4e9a\u9a6c\u900a\u4e0a\u3002',
  'Our hydrolysis-resistant PU leather is available on Amazon for retail and small-quantity buyers. Wholesale buyers: same material, better price \u2014 request a real-time quote on WhatsApp.': '\u6211\u4eec\u7684\u8010\u6c34\u89e3 PU \u76ae\u9769\u5728\u4e9a\u9a6c\u900a\u4e0a\u5bf9\u96f6\u552e\u4e0e\u5c0f\u6279\u91cf\u4e70\u5bb6\u9500\u552e\u3002\u6279\u53d1\u4e70\u5bb6\uff1a\u540c\u6837\u6750\u6599\u66f4\u4f18\u4ef7\u683c\u2014\u2014\u901a\u8fc7 WhatsApp \u83b7\u53d6\u5b9e\u65f6\u62a5\u4ef7\u3002',
  'Only the hydrolysis-resistant PU leather is sold on Amazon (retail, small quantity). All other series on this website \u2014 genuine leather, PU, PVC, microfiber, bio-based, recycled \u2014 are wholesale only: order or request a quote here.': '\u4e9a\u9a6c\u900a\u4e0a\u4ec5\u9500\u552e\u8010\u6c34\u89e3 PU \u76ae\u9769\uff08\u96f6\u552e\u3001\u5c0f\u6279\u91cf\uff09\u3002\u672c\u7f51\u7ad9\u5176\u4ed6\u6240\u6709\u7cfb\u5217\u2014\u2014\u771f\u76ae\u3001PU\u3001PVC\u3001\u8d85\u7ea4\u3001\u751f\u7269\u57fa\u3001\u518d\u751f\u2014\u2014\u4ec5\u63d0\u4f9b\u6279\u53d1\uff1a\u5728\u6b64\u4e0b\u5355\u6216\u8be2\u4ef7\u3002',
  /* cta band */
  'Need a material that isn\u2019t listed?': '\u9700\u8981\u672a\u5217\u51fa\u7684\u6750\u6599\uff1f',
  'Tell us your specification \u2014 we\u2019ll match the right leather and send you samples (sample fee advised on inquiry).': '\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u89c4\u683c\u2014\u2014\u6211\u4eec\u5c06\u4e3a\u60a8\u5339\u914d\u5408\u9002\u7684\u76ae\u9769\u5e76\u5bc4\u9001\u6837\u54c1\uff08\u6837\u54c1\u8d39\u7528\u54a8\u8be2\u786e\u8ba4\uff09\u3002',
  'Looking for something specific?': '\u5728\u627e\u67d0\u79cd\u7279\u5b9a\u6750\u6599\uff1f',
  'Tell us your application, texture or color requirement \u2014 we\u2019ll match the best material and send samples.': '\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u7528\u9014\u3001\u7eb9\u7406\u6216\u989c\u8272\u8981\u6c42\u2014\u2014\u6211\u4eec\u5c06\u5339\u914d\u6700\u5408\u9002\u7684\u6750\u6599\u5e76\u5bc4\u9001\u6837\u54c1\u3002',
  /* about */
  'About Us': '\u5173\u4e8e\u6211\u4eec',
  '20 Years of Trusted Leather Sourcing': '20 \u5e74\u503c\u5f97\u4fe1\u8d56\u7684\u76ae\u9769\u91c7\u8d2d',
  'Pengye Leather connects global buyers with China\u2019s best leather factories \u2014 with integrity, transparency and quality you can verify.': '\u9e4f\u4e1a\u76ae\u9769\u5c06\u5168\u7403\u4e70\u5bb6\u4e0e\u4e2d\u56fd\u4f18\u8d28\u76ae\u9769\u5de5\u5382\u8fde\u63a5\u8d77\u6765 \u2014 \u4ee5\u8bda\u4fe1\u3001\u900f\u660e\u4e0e\u53ef\u9a8c\u8bc1\u7684\u54c1\u8d28\u3002',
  'A Sourcing Partner, Not Just Another Supplier': '\u662f\u91c7\u8d2d\u4f19\u4f34\uff0c\u800c\u4e0d\u53ea\u662f\u53c8\u4e00\u4e2a\u4f9b\u5e94\u5546',
  'By the Numbers': '\u6570\u636e\u4e00\u89c8',
  'Experience You Can Measure': '\u53ef\u8861\u91cf\u7684\u7ecf\u9a8c',
  'Years in Leather Sourcing': '\u76ae\u9769\u91c7\u8d2d\u5e74\u9650',
  'Utility Patents': '\u5b9e\u7528\u65b0\u578b\u4e13\u5229',
  'Invention Patents': '\u53d1\u660e\u4e13\u5229',
  'Our Values': '\u6211\u4eec\u7684\u4ef7\u503c\u89c2',
  'What We Stand For': '\u6211\u4eec\u7684\u575a\u5b88',
  'Integrity First': '\u8bda\u4fe1\u4e3a\u672c',
  'Veteran discipline in every order \u2014 honest pricing, honest materials, honest timelines.': '\u6bcf\u4e00\u7b14\u8ba2\u5355\u90fd\u4f53\u73b0\u519b\u4eba\u7eaa\u5f8b \u2014 \u4ef7\u683c\u8bda\u5b9e\u3001\u6750\u6599\u8bda\u5b9e\u3001\u65f6\u95f4\u8bda\u5b9e\u3002',
  'Full Transparency': '\u5168\u9762\u900f\u660e',
  'Daily production and inspection videos shared with you, so quality is always visible.': '\u4e0e\u60a8\u5206\u4eab\u6bcf\u65e5\u751f\u4ea7\u4e0e\u68c0\u9a8c\u89c6\u9891\uff0c\u54c1\u8d28\u59cb\u7ec8\u53ef\u89c1\u3002',
  'Global Reliability': '\u5168\u7403\u53ef\u9760',
  'Stable stock access, competitive prices and on-time delivery for buyers worldwide.': '\u7a33\u5b9a\u7684\u8d27\u6e90\u3001\u6709\u7ade\u4e89\u529b\u7684\u4ef7\u683c\u4e0e\u51c6\u65f6\u4ea4\u4ed8\uff0c\u670d\u52a1\u5168\u7403\u4e70\u5bb6\u3002',
  'Let\u2019s build your material plan together': '\u4e00\u8d77\u5236\u5b9a\u60a8\u7684\u6750\u6599\u65b9\u6848\u5427',
  'Tell us what you need \u2014 we\u2019ll match the right leather and arrange samples (fee advised on inquiry).': '\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u9700\u6c42 \u2014 \u6211\u4eec\u5c06\u5339\u914d\u5408\u9002\u7684\u76ae\u9769\u5e76\u5b89\u6392\u6837\u54c1\uff08\u8d39\u7528\u54a8\u8be2\u786e\u8ba4\uff09\u3002',
  'Contact Us': '\u8054\u7cfb\u6211\u4eec',
  /* certifications */
  'Quality & Compliance': '\u54c1\u8d28\u4e0e\u5408\u89c4',
  'Certifications & Patents': '\u8ba4\u8bc1\u4e0e\u4e13\u5229',
  'Independent test reports, international compliance standards and 40+ patents \u2014 proof of quality you can check before you order.': '\u72ec\u7acb\u68c0\u6d4b\u62a5\u544a\u3001\u56fd\u9645\u5408\u89c4\u6807\u51c6\u4e0e 40+ \u9879\u4e13\u5229 \u2014 \u4e0b\u5355\u524d\u5373\u53ef\u6838\u9a8c\u7684\u54c1\u8d28\u8bc1\u660e\u3002',
  'Test Reports': '\u68c0\u6d4b\u62a5\u544a',
  'Environmental & Safety Testing': '\u73af\u4fdd\u4e0e\u5b89\u5168\u68c0\u6d4b',
  'Product Description Sheet': '\u4ea7\u54c1\u8bf4\u660e\u8868',
  'Environmental & Physical Test Results': '\u73af\u4fdd\u4e0e\u7269\u7406\u68c0\u6d4b\u7ed3\u679c',
  'Our standard product description sheet \u2014 environmental and physical test values as supplied on inquiry.': '\u6211\u4eec\u7684\u6807\u51c6\u4ea7\u54c1\u8bf4\u660e\u8868 \u2014 \u73af\u4fdd\u4e0e\u7269\u7406\u68c0\u6d4b\u503c\uff0c\u8be2\u4ef7\u65f6\u63d0\u4f9b\u3002',
  'Full description sheet as printed \u2014 click to enlarge.': '\u5b8c\u6574\u8bf4\u660e\u8868\u539f\u6837\u5c55\u793a \u2014 \u70b9\u51fb\u653e\u5927\u3002',
  'ECO-Friendly Standards': '\u73af\u4fdd\u6807\u51c6',
  'Physical Property': '\u7269\u7406\u6027\u80fd',
  /* contact */
  'Request a Sample or Quotation': '\u7533\u8bf7\u6837\u54c1\u6216\u8be2\u4ef7',
  'Tell us what you need and we\u2019ll reply within one business day. Samples available \u2014 genuine leather & microfiber charged, other materials advised on inquiry. Contact us first.': '\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u9700\u6c42\uff0c\u6211\u4eec\u5c06\u5728\u4e00\u4e2a\u5de5\u4f5c\u65e5\u5185\u56de\u590d\u3002\u6837\u54c1\u653f\u7b56\uff1a\u771f\u76ae\u4e0e\u8d85\u7ea4\u6536\u8d39\uff0c\u5176\u4ed6\u6750\u6599\u54a8\u8be2\u786e\u8ba4\u3002\u8bf7\u5148\u8054\u7cfb\u6211\u4eec\u3002',
  'Factory, Office & Showroom': '\u5de5\u5382\u3001\u529e\u516c\u5ba4\u4e0e\u5c55\u5385',
  'Buyers and partners are welcome to visit \u2014 book a visit on WhatsApp and we\u2019ll be ready for you.': '\u6b22\u8fce\u4e70\u5bb6\u4e0e\u5408\u4f5c\u4f19\u4f34\u5230\u8bbf \u2014 \u901a\u8fc7 WhatsApp \u9884\u7ea6\uff0c\u6211\u4eec\u968f\u65f6\u606d\u5019\u3002',
  'Phone / WhatsApp': '\u7535\u8bdd / WhatsApp',
  'Chat with us instantly': '\u7acb\u5373\u4e0e\u6211\u4eec\u804a\u5929',
  'Retail on Amazon': '\u4e9a\u9a6c\u900a\u96f6\u552e',
  'Need a small quantity? Our Amazon store sells hydrolysis-resistant PU leather for retail buyers.': '\u9700\u8981\u5c0f\u6279\u91cf\uff1f\u6211\u4eec\u7684\u4e9a\u9a6c\u900a\u5e97\u9488\u5bf9\u96f6\u552e\u4e70\u5bb6\u9500\u552e\u8010\u6c34\u89e3 PU \u76ae\u9769\u3002',
  'Copy WeChat Number': '\u590d\u5236\u5fae\u4fe1\u53f7',
  'Send Your Inquiry': '\u53d1\u9001\u60a8\u7684\u8be2\u76d8',
  'Fields marked * are required. Your inquiry goes directly to our sales team.': '\u5e26 * \u4e3a\u5fc5\u586b\u9879\u3002\u60a8\u7684\u8be2\u76d8\u5c06\u76f4\u63a5\u53d1\u9001\u81f3\u6211\u4eec\u7684\u9500\u552e\u56e2\u961f\u3002',
  'Full Name *': '\u59d3\u540d *',
  'Company': '\u516c\u53f8',
  'Leather Type *': '\u76ae\u9769\u7c7b\u578b *',
  'Estimated Quantity': '\u9884\u8ba1\u6570\u91cf',
  'Requirements': '\u9700\u6c42\u63cf\u8ff0',
  'Send by Email': '\u90ae\u4ef6\u53d1\u9001',
  'Send via Email': '\u90ae\u4ef6\u53d1\u9001',
  'Send via WhatsApp': '\u901a\u8fc7 WhatsApp \u53d1\u9001',
  'Prefer instant chat? The WhatsApp button opens a pre-filled message to our sales line.': '\u66f4\u559c\u6b22\u5373\u65f6\u6c9f\u901a\uff1fWhatsApp \u6309\u94ae\u4f1a\u6253\u5f00\u9884\u586b\u6d88\u606f\u53d1\u9001\u81f3\u6211\u4eec\u7684\u9500\u552e\u8d26\u53f7\u3002',
  'FAQ': '\u5e38\u89c1\u95ee\u9898',
  'Frequently Asked Questions': '\u5e38\u89c1\u95ee\u9898\u89e3\u7b54',
  /* sample page */
  'Sample Service': '\u6837\u54c1\u670d\u52a1',
  'Tell us which material and what you need \u2014 we confirm the sample fee and shipping with you before sending.': '\u544a\u8bc9\u6211\u4eec\u60a8\u9700\u8981\u7684\u6750\u6599\u4e0e\u8981\u6c42 \u2014 \u5bc4\u51fa\u524d\u6211\u4eec\u4f1a\u4e0e\u60a8\u786e\u8ba4\u6837\u54c1\u8d39\u7528\u4e0e\u8fd0\u8d39\u3002',
  'Sample Request Form': '\u6837\u54c1\u7533\u8bf7\u8868',
  'Choose the material category first \u2014 genuine leather and other leathers are filled in differently.': '\u8bf7\u5148\u9009\u62e9\u6750\u6599\u7c7b\u522b \u2014 \u771f\u76ae\u4e0e\u5176\u4ed6\u76ae\u9769\u7684\u586b\u5199\u65b9\u5f0f\u4e0d\u540c\u3002',
  'Genuine Leather': '\u771f\u76ae',
  'Priced per Chi. Fill in grade, thickness, texture \u2014 1 hide \u2248 13\u201314 Chi.': '\u6309\u5c3a\u8ba1\u4ef7\u3002\u586b\u5199\u7b49\u7ea7\u3001\u539a\u5ea6\u3001\u7eb9\u7406 \u2014 \u6bcf\u5f20\u76ae\u7ea6 13\u201314 \u5c3a\u3002',
  'Synthetic & Other Leather': '\u5408\u6210\u9769\u4e0e\u5176\u4ed6\u76ae\u9769',
  'Priced per Yard. PU, PVC, microfiber, bio-based, recycled \u2014 1 Yard = 0.9 m \u00d7 1.37 m.': '\u6309\u7801\u8ba1\u4ef7\u3002PU\u3001PVC\u3001\u8d85\u7ea4\u3001\u751f\u7269\u57fa\u3001\u518d\u751f \u2014 1 \u7801 = 0.9 \u7c73 \u00d7 1.37 \u7c73\u3002',
  'Name *': '\u59d3\u540d *',
  'Company (optional)': '\u516c\u53f8\uff08\u9009\u586b\uff09',
  'Your Country': '\u60a8\u7684\u56fd\u5bb6',
  'Genuine Leather Specs': '\u771f\u76ae\u89c4\u683c',
  'Synthetic Leather Specs': '\u5408\u6210\u9769\u89c4\u683c',
  'Free text \u2014 type what you need. No fixed choices.': '\u81ea\u7531\u586b\u5199 \u2014 \u8f93\u5165\u60a8\u9700\u8981\u7684\u89c4\u683c\uff0c\u65e0\u56fa\u5b9a\u9009\u9879\u3002',
  'Domestic (CN) standard by default. International tests (REACH, FDA, OEKO-TEX, EN71-3...) are extra and must be requested in advance \u2014 mention your target country.': '\u9ed8\u8ba4\u4e2d\u56fd\u56fd\u5185\u6807\u51c6\u3002\u56fd\u9645\u68c0\u6d4b\uff08REACH\u3001FDA\u3001OEKO-TEX\u3001EN71-3\u2026\uff09\u989d\u5916\u6536\u8d39\uff0c\u5fc5\u987b\u63d0\u524d\u7533\u8bf7 \u2014 \u8bf7\u6ce8\u660e\u76ee\u6807\u56fd\u5bb6\u3002',
  'Domestic (CN) standard by default. International tests (REACH, FDA, OEKO-TEX, EN71-3\u2026) are extra and must be requested in advance \u2014 mention your target country.': '\u9ed8\u8ba4\u4e2d\u56fd\u56fd\u5185\u6807\u51c6\u3002\u56fd\u9645\u68c0\u6d4b\uff08REACH\u3001FDA\u3001OEKO-TEX\u3001EN71-3\u2026\uff09\u989d\u5916\u6536\u8d39\uff0c\u5fc5\u987b\u63d0\u524d\u7533\u8bf7 \u2014 \u8bf7\u6ce8\u660e\u76ee\u6807\u56fd\u5bb6\u3002',
  'Leather Grade': '\u76ae\u9769\u7b49\u7ea7',
  'Thickness (mm)': '\u539a\u5ea6\uff08\u6beb\u7c73\uff09',
  'Texture / Finish': '\u7eb9\u7406 / \u8868\u9762',
  'Color / Article No.': '\u989c\u8272 / \u8d27\u53f7',
  'Quantity (Chi)': '\u6570\u91cf\uff08\u5c3a\uff09',
  'Eco-Friendly Requirement': '\u73af\u4fdd\u8981\u6c42',
  'Backing Material': '\u5e95\u9762\u6750\u6599',
  'Material Type': '\u6750\u6599\u7c7b\u578b',
  'Quantity (Yard)': '\u6570\u91cf\uff08\u7801\uff09',
  'Special Properties / Other Requirements': '\u7279\u6b8a\u6027\u80fd / \u5176\u4ed6\u8981\u6c42',
  'Anything else (testing, target price, documents)': '\u5176\u4ed6\u9700\u6c42\uff08\u68c0\u6d4b\u3001\u76ee\u6807\u4ef7\u683c\u3001\u6587\u4ef6\uff09',
  'Sample fee: genuine leather & microfiber samples are charged (material cost). For other materials we\u2019ll advise on inquiry \u2014 we confirm the fee and shipping with you before sending.': '\u6837\u54c1\u8d39\u7528\uff1a\u771f\u76ae\u4e0e\u8d85\u7ea4\u6837\u54c1\u6536\u8d39\uff08\u6750\u6599\u6210\u672c\uff09\u3002\u5176\u4ed6\u6750\u6599\u54a8\u8be2\u786e\u8ba4 \u2014 \u5bc4\u51fa\u524d\u6211\u4eec\u4f1a\u4e0e\u60a8\u786e\u8ba4\u8d39\u7528\u4e0e\u8fd0\u8d39\u3002',
  'Copy Request': '\u590d\u5236\u7533\u8bf7',
  'Email button opens <strong>your own</strong> email app with the request addressed to <strong>sales@pengye-leather.com</strong> \u2014 just press send. Or tap Copy Request and paste it into any email or chat.': '\u90ae\u4ef6\u6309\u94ae\u4f1a\u6253\u5f00\u60a8\u81ea\u5df1\u7684\u90ae\u4ef6\u5e94\u7528\uff0c\u6536\u4ef6\u4eba\u5df2\u9884\u586b\u4e3a sales@pengye-leather.com \u2014 \u70b9\u51fb\u53d1\u9001\u5373\u53ef\u3002\u6216\u70b9\u51fb\u590d\u5236\u7533\u8bf7\uff0c\u7c98\u8d34\u5230\u4efb\u4f55\u90ae\u4ef6\u6216\u804a\u5929\u5e94\u7528\u3002',
  'Sample fee policy.': '\u6837\u54c1\u8d39\u7528\u653f\u7b56\u3002',
  'Real-time quote.': '\u5b9e\u65f6\u62a5\u4ef7\u3002',
  'Testing.': '\u68c0\u6d4b\u6807\u51c6\u3002',
  'Receive by email.': '\u90ae\u4ef6\u63a5\u6536\u3002',
  'Units.': '\u5355\u4f4d\u8bf4\u660e\u3002',
  'Material Specifications': '\u6750\u6599\u89c4\u683c',
  'Type in what you need so we can quote accurately \u2014 fields are free text. Optional ones can be left blank.': '\u8f93\u5165\u60a8\u7684\u9700\u6c42\uff0c\u65b9\u4fbf\u6211\u4eec\u7cbe\u51c6\u62a5\u4ef7 \u2014 \u6240\u6709\u5b57\u6bb5\u5747\u81ea\u7531\u586b\u5199\uff0c\u53ef\u9009\u9879\u53ef\u4ee5\u7559\u7a7a\u3002',
  'Target Country': '\u76ee\u6807\u56fd\u5bb6',
  'Testing Standard': '\u68c0\u6d4b\u6807\u51c6',
  'Domestic (CN) standard by default. International tests (REACH, FDA, OEKO-TEX, EN71-3\u2026) are extra and must be requested': '\u9ed8\u8ba4\u91c7\u7528\u4e2d\u56fd\u56fd\u5185\u6807\u51c6\u3002\u56fd\u9645\u68c0\u6d4b\uff08REACH\u3001FDA\u3001OEKO-TEX\u3001EN71-3\u2026\uff09\u53e6\u6536\u8d39\uff0c\u4e14\u5fc5\u987b\u7533\u8bf7',
  'in advance': '\u63d0\u524d',
  '\u2014 mention your target country.': '\u2014 \u8bf7\u6ce8\u660e\u76ee\u6807\u56fd\u5bb6\u3002',
  'Domestic (CN) standard by default. International tests (REACH, FDA, OEKO-TEX, EN71-3\u2026) are extra \u2014 request in advance and tell us your target country.': '\u9ed8\u8ba4\u91c7\u7528\u4e2d\u56fd\u56fd\u5185\u6807\u51c6\u3002\u56fd\u9645\u68c0\u6d4b\uff08REACH\u3001FDA\u3001OEKO-TEX\u3001EN71-3\u2026\uff09\u989d\u5916\u6536\u8d39 \u2014 \u8bf7\u63d0\u524d\u7533\u8bf7\u5e76\u544a\u77e5\u76ee\u6807\u56fd\u5bb6\u3002',
  'Key Features': '\u4e3b\u8981\u7279\u70b9',
  'Typical Applications': '\u5178\u578b\u7528\u9014',
  'Real-time price.': '\u5b9e\u65f6\u4ef7\u683c\u3002',
  'Material prices move with the market \u2014 no fixed list price. Share your spec & quantity and we quote today.': '\u6750\u6599\u4ef7\u683c\u968f\u5e02\u573a\u6ce2\u52a8 \u2014 \u65e0\u56fa\u5b9a\u4ef7\u683c\u8868\u3002\u63d0\u4ea4\u60a8\u7684\u89c4\u683c\u4e0e\u6570\u91cf\uff0c\u6211\u4eec\u5f53\u5929\u62a5\u4ef7\u3002',
  'Keep Exploring': '\u7ee7\u7eed\u6d4f\u89c8',
  'Other Leather Series': '\u5176\u4ed6\u76ae\u9769\u7cfb\u5217',
  'Product Range': '\u4ea7\u54c1\u8303\u56f4',
  'Nine product lines from natural genuine leather to recycled eco materials. If none of these match your need, contact us \u2014 we customize textures, colors and formulas.': '\u4ece\u5929\u7136\u771f\u76ae\u5230\u518d\u751f\u73af\u4fdd\u6750\u6599\u5171\u4e5d\u5927\u4ea7\u54c1\u7cfb\u5217\u3002\u5982\u679c\u6ca1\u6709\u7b26\u5408\u60a8\u7684\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec \u2014 \u6211\u4eec\u53ef\u4ee5\u5b9a\u5236\u7eb9\u7406\u3001\u989c\u8272\u4e0e\u914d\u65b9\u3002',
  /* checkout */
  'Order': '\u8ba2\u5355',
  'Checkout & Shipping': '\u7ed3\u7b97\u4e0e\u8fd0\u8f93',
  'Submit your order \u2014 we confirm the real-time freight quote and send a payment link within one business day.': '\u63d0\u4ea4\u60a8\u7684\u8ba2\u5355 \u2014 \u6211\u4eec\u5c06\u5728\u4e00\u4e2a\u5de5\u4f5c\u65e5\u5185\u786e\u8ba4\u5b9e\u65f6\u8fd0\u8d39\u62a5\u4ef7\u5e76\u53d1\u9001\u4ed8\u6b3e\u94fe\u63a5\u3002',
  'Your order is empty. Add leather materials from the product pages first.': '\u60a8\u7684\u8ba2\u5355\u4e3a\u7a7a\u3002\u8bf7\u5148\u4ece\u4ea7\u54c1\u9875\u6dfb\u52a0\u76ae\u9769\u6750\u6599\u3002',
  'Genuine Leather Total': '\u771f\u76ae\u5408\u8ba1',
  'Synthetic Leather Total': '\u5408\u6210\u9769\u5408\u8ba1',
  'Phone / WhatsApp *': '\u7535\u8bdd / WhatsApp *',
  'WeChat (optional)': '\u5fae\u4fe1\uff08\u9009\u586b\uff09',
  'Country *': '\u56fd\u5bb6 *',
  'City': '\u57ce\u5e02',
  'Address *': '\u5730\u5740 *',
  'Postal / ZIP Code': '\u90ae\u653f\u7f16\u7801',
  'Shipping Method': '\u8fd0\u8f93\u65b9\u5f0f',
  'International freight is charged at the real-time carrier rate.': '\u56fd\u9645\u8fd0\u8d39\u6309\u627f\u8fd0\u5546\u5b9e\u65f6\u8d39\u7387\u6536\u53d6\u3002',
  'Pengye arranges shipping (recommended)': '\u9e4f\u4e1a\u5b89\u6392\u8fd0\u8f93\uff08\u63a8\u8350\uff09',
  'We book the best carrier and confirm the real-time freight quote with you before payment \u2014 no hidden fees.': '\u6211\u4eec\u9884\u8ba2\u6700\u5408\u9002\u7684\u627f\u8fd0\u5546\uff0c\u5e76\u5728\u4ed8\u6b3e\u524d\u4e0e\u60a8\u786e\u8ba4\u5b9e\u65f6\u8fd0\u8d39\u62a5\u4ef7 \u2014 \u65e0\u9690\u85cf\u8d39\u7528\u3002',
  'I will use my own carrier / forwarder': '\u6211\u4f7f\u7528\u81ea\u5df1\u7684\u8d27\u4ee3 / \u627f\u8fd0\u5546',
  'You have a preferred logistics provider \u2014 tell us the carrier and account, we prepare the goods for pickup.': '\u60a8\u6709\u504f\u597d\u7684\u7269\u6d41\u5546 \u2014 \u544a\u8bc9\u6211\u4eec\u627f\u8fd0\u5546\u548c\u8d26\u53f7\uff0c\u6211\u4eec\u5907\u8d27\u4f9b\u60a8\u63d0\u8d27\u3002',
  'Your Carrier / Forwarder *': '\u60a8\u7684\u627f\u8fd0\u5546 / \u8d27\u4ee3 *',
  'Account No. / Collection Method': '\u8d26\u53f7 / \u53d6\u4ef6\u65b9\u5f0f',
  'Payment': '\u4ed8\u6b3e\u65b9\u5f0f',
  'We arrange the payment method for you based on order size \u2014 no need to choose now.': '\u6211\u4eec\u4f1a\u6839\u636e\u8ba2\u5355\u5927\u5c0f\u4e3a\u60a8\u5b89\u6392\u4ed8\u6b3e\u65b9\u5f0f \u2014 \u73b0\u5728\u65e0\u9700\u9009\u62e9\u3002',
  'Large orders \u2014 T/T Bank Transfer': '\u5927\u5355 \u2014 T/T \u94f6\u884c\u8f6c\u8d26',
  'Corporate account, standard for international trade \u2014 proforma invoice & contract with full documents.': '\u5bf9\u516c\u8d26\u6237\uff0c\u56fd\u9645\u8d38\u6613\u6807\u51c6 \u2014 \u5f62\u5f0f\u53d1\u7968\u4e0e\u5408\u540c\u53ca\u5168\u5957\u5355\u636e\u3002',
  'Small orders \u2014 Tenpay Global': '\u5c0f\u5355 \u2014 Tenpay Global\uff08\u817e\u8baf\u667a\u6c47\u9e45\uff09',
  'Tencent\u2019s licensed cross-border payment \u2014 simple and low-fee for small amounts, settles to CNY.': '\u817e\u8baf\u6301\u724c\u8de8\u5883\u652f\u4ed8 \u2014 \u5c0f\u989d\u7b80\u5355\u4f4e\u8d39\uff0c\u7ed3\u7b97\u4e3a\u4eba\u6c11\u5e01\u3002',
  'Alternative \u2014 PayPal': '\u5907\u9009 \u2014 PayPal',
  'Convenient for small orders when you prefer it.': '\u5c0f\u5355\u65b9\u4fbf\uff0c\u6309\u60a8\u7684\u504f\u597d\u9009\u62e9\u3002',
  'Payment happens only after you approve the quotation. We never ask for cash \u2014 every payment is matched to your order with a proforma invoice and shipping documents, clean and traceable for customs and banks.': '\u4ec5\u5728\u60a8\u786e\u8ba4\u62a5\u4ef7\u540e\u624d\u4f1a\u6536\u6b3e\u3002\u6211\u4eec\u4ece\u4e0d\u8981\u6c42\u73b0\u91d1 \u2014 \u6bcf\u7b14\u4ed8\u6b3e\u90fd\u4e0e\u60a8\u7684\u8ba2\u5355\u5339\u914d\uff0c\u9644\u5f62\u5f0f\u53d1\u7968\u4e0e\u8fd0\u8f93\u5355\u636e\uff0c\u5bf9\u6d77\u5173\u548c\u94f6\u884c\u6e05\u6670\u53ef\u6eaf\u3002',
  'Order Notes (colors, specs, documents needed)': '\u8ba2\u5355\u5907\u6ce8\uff08\u989c\u8272\u3001\u89c4\u683c\u3001\u6240\u9700\u6587\u4ef6\uff09',
  'Send Order via WhatsApp': '\u901a\u8fc7 WhatsApp \u53d1\u9001\u8ba2\u5355',
  'Copy Order': '\u590d\u5236\u8ba2\u5355',
  'Order Summary': '\u8ba2\u5355\u6458\u8981',
  'Material price: quoted by our team based on type, quantity and specification \u2014 usually within 24 hours.': '\u6750\u6599\u4ef7\u683c\uff1a\u7531\u6211\u4eec\u56e2\u961f\u6839\u636e\u7c7b\u578b\u3001\u6570\u91cf\u4e0e\u89c4\u683c\u62a5\u4ef7 \u2014 \u901a\u5e38\u5728 24 \u5c0f\u65f6\u5185\u3002',
  'Freight: real-time carrier rate, confirmed before payment.': '\u8fd0\u8d39\uff1a\u5b9e\u65f6\u627f\u8fd0\u5546\u8d39\u7387\uff0c\u4ed8\u6b3e\u524d\u786e\u8ba4\u3002',
  'Genuine leather priced per Chi; synthetic leather per Yard.': '\u771f\u76ae\u6309\u5c3a\u8ba1\u4ef7\uff1b\u5408\u6210\u9769\u6309\u7801\u8ba1\u4ef7\u3002',
  'Testing: domestic (CN) standard by default \u2014 international tests (REACH, FDA, OEKO-TEX\u2026) must be requested in advance.': '\u68c0\u6d4b\uff1a\u9ed8\u8ba4\u4e2d\u56fd\u56fd\u5185\u6807\u51c6 \u2014 \u56fd\u9645\u68c0\u6d4b\uff08REACH\u3001FDA\u3001OEKO-TEX\u2026\uff09\u5fc5\u987b\u63d0\u524d\u7533\u8bf7\u3002',
  /* track */
  'Order Tracking': '\u8ba2\u5355\u8ddf\u8e2a',
  'Track Your Shipment in Real Time': '\u5b9e\u65f6\u8ddf\u8e2a\u60a8\u7684\u8d27\u7269',
  'Once your order ships, we send your tracking number and carrier by WhatsApp and email. Enter it below to follow your shipment live \u2014 status updates come straight from the carrier in real time.': '\u60a8\u7684\u8ba2\u5355\u53d1\u8d27\u540e\uff0c\u6211\u4eec\u4f1a\u901a\u8fc7 WhatsApp \u548c\u90ae\u4ef6\u5c06\u8fd0\u5355\u53f7\u4e0e\u627f\u8fd0\u5546\u53d1\u7ed9\u60a8\u3002\u5728\u4e0b\u65b9\u8f93\u5165\u5373\u53ef\u5b9e\u65f6\u8ddf\u8e2a\u8d27\u7269 \u2014 \u72b6\u6001\u66f4\u65b0\u76f4\u63a5\u6765\u81ea\u627f\u8fd0\u5546\u3002',
  'Tracking Number *': '\u8fd0\u5355\u53f7 *',
  'Carrier': '\u627f\u8fd0\u5546',
  'Track Now \u2192': '\u7acb\u5373\u67e5\u8be2 \u2192',
  'Covers 1,200+ carriers (DHL, FedEx, UPS, TNT, EMS, China Post, SF Express, USPS, air & ocean freight). Not sure which carrier? Leave Auto Detect selected \u2014 the tracking number identifies it automatically. Sea freight (FCL/LCL) is tracked via the shipping line\u2019s bill of lading \u2014 we send you the vessel tracking link with your booking. If a number shows no result or stops updating, message us on WhatsApp and we\u2019ll check it with the carrier for you.': '\u8986\u76d6 1,200+ \u5bb6\u627f\u8fd0\u5546\uff08DHL\u3001FedEx\u3001UPS\u3001TNT\u3001EMS\u3001\u4e2d\u56fd\u90ae\u653f\u3001\u987a\u4e30\u3001USPS\u3001\u7a7a\u8fd0\u4e0e\u6d77\u8fd0\uff09\u3002\u4e0d\u786e\u5b9a\u627f\u8fd0\u5546\uff1f\u4fdd\u7559\u81ea\u52a8\u8bc6\u522b\u5373\u53ef \u2014 \u8fd0\u5355\u53f7\u4f1a\u81ea\u52a8\u5339\u914d\u3002\u6d77\u8fd0\uff08FCL/LCL\uff09\u901a\u8fc7\u8239\u53f8\u63d0\u5355\u8ddf\u8e2a \u2014 \u6211\u4eec\u4f1a\u968f\u9884\u5b9a\u4fe1\u606f\u53d1\u7ed9\u60a8\u8239\u53ea\u8ddf\u8e2a\u94fe\u63a5\u3002\u5982\u679c\u8fd0\u5355\u53f7\u67e5\u4e0d\u5230\u6216\u505c\u6b62\u66f4\u65b0\uff0c\u8bf7\u5728 WhatsApp \u4e0a\u544a\u8bc9\u6211\u4eec\uff0c\u6211\u4eec\u4f1a\u5e2e\u60a8\u4e0e\u627f\u8fd0\u5546\u6838\u5b9e\u3002',
  'Prefer the carrier\u2019s own site?': '\u66f4\u60f3\u7528\u627f\u8fd0\u5546\u5b98\u7f51\u67e5\u8be2\uff1f',
  'Number not working or lost?': '\u8fd0\u5355\u53f7\u67e5\u4e0d\u5230\u6216\u4e22\u5931\uff1f',
  'Message us on WhatsApp with your order number \u2014 we\u2019ll confirm your tracking number, carrier and live shipment status within minutes.': '\u5728 WhatsApp \u4e0a\u53d1\u6d88\u606f\u5e76\u9644\u4e0a\u60a8\u7684\u8ba2\u5355\u53f7 \u2014 \u6211\u4eec\u5c06\u5728\u51e0\u5206\u949f\u5185\u4e3a\u60a8\u786e\u8ba4\u8fd0\u5355\u53f7\u3001\u627f\u8fd0\u5546\u4e0e\u5b9e\u65f6\u7269\u6d41\u72b6\u6001\u3002',
  'Questions about delivery?': '\u8fd0\u8f93\u95ee\u9898\uff1f',
  /* FAQ */
  'What is your minimum order quantity (MOQ)?': '\u8d77\u8ba2\u91cf\u662f\u591a\u5c11\uff1f',
  'MOQ is flexible \u2014 confirmed in real time based on current stock and market conditions. Genuine leather is priced per Chi; synthetic leather per Yard. Samples are available \u2014 fee policy advised on inquiry.': '\u8d77\u8ba2\u91cf\u7075\u6d3b \u2014 \u6839\u636e\u5f53\u524d\u5e93\u5b58\u4e0e\u5e02\u573a\u884c\u60c5\u5b9e\u65f6\u786e\u8ba4\u3002\u771f\u76ae\u6309\u5c3a\u8ba1\u4ef7\uff1b\u5408\u6210\u9769\u6309\u7801\u8ba1\u4ef7\u3002\u53ef\u63d0\u4f9b\u6837\u54c1 \u2014 \u8d39\u7528\u653f\u7b56\u54a8\u8be2\u786e\u8ba4\u3002',
  'How are materials priced and measured?': '\u6750\u6599\u5982\u4f55\u8ba1\u4ef7\u4e0e\u8ba1\u91cf\uff1f',
  'Genuine leather is priced per Chi; synthetic leather is priced per Yard. For reference: 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d), and an average genuine hide is about 13\u201314 Chi. Your quotation always states the unit clearly.': '\u771f\u76ae\u6309\u5c3a\u8ba1\u4ef7\uff1b\u5408\u6210\u9769\u6309\u7801\u8ba1\u4ef7\u3002\u53c2\u8003\uff1a1 \u7801 = 0.9 \u7c73\u957f \u00d7 1.37 \u7c73\u5bbd\uff0854\u82f1\u5bf8\uff09\uff0c\u5e73\u5747\u6bcf\u5f20\u771f\u76ae\u7ea6 13\u201314 \u5c3a\u3002\u60a8\u7684\u62a5\u4ef7\u5355\u59cb\u7ec8\u4f1a\u6807\u660e\u5355\u4f4d\u3002',
  'How is genuine leather classified?': '\u771f\u76ae\u5982\u4f55\u5206\u7ea7\uff1f',
  'Genuine leather comes in three grades: full grain, split (second layer) and reconstituted (bonded). We supply all three \u2014 tell us the grade, thickness and finish you need.': '\u771f\u76ae\u5206\u4e3a\u4e09\u79cd\u7b49\u7ea7\uff1a\u5168\u7c92\u9762\u3001\u4e8c\u5c42\u76ae\u3001\u518d\u751f\u76ae\u3002\u4e09\u79cd\u6211\u4eec\u90fd\u63d0\u4f9b \u2014 \u544a\u8bc9\u6211\u4eec\u60a8\u9700\u8981\u7684\u7b49\u7ea7\u3001\u539a\u5ea6\u548c\u8868\u9762\u5904\u7406\u3002',
  'Which testing standards do you use?': '\u4f60\u4eec\u91c7\u7528\u54ea\u4e9b\u68c0\u6d4b\u6807\u51c6\uff1f',
  'Domestic (CN) standard by default. International tests such as REACH, FDA, OEKO-TEX and EN71-3 are available \u2014 please request them in advance and tell us your target country.': '\u9ed8\u8ba4\u4e2d\u56fd\u56fd\u5185\u6807\u51c6\u3002\u53ef\u63d0\u4f9b REACH\u3001FDA\u3001OEKO-TEX\u3001EN71-3 \u7b49\u56fd\u9645\u68c0\u6d4b \u2014 \u8bf7\u63d0\u524d\u7533\u8bf7\u5e76\u544a\u77e5\u76ee\u6807\u56fd\u5bb6\u3002',
  'How are samples handled and priced?': '\u6837\u54c1\u5982\u4f55\u5904\u7406\u4e0e\u6536\u8d39\uff1f',
  'Samples for genuine leather and microfiber are charged (material cost). For other materials we\u2019ll advise whether a sample fee applies \u2014 please contact us first so we can arrange the right sample and quote the shipping.': '\u771f\u76ae\u4e0e\u8d85\u7ea4\u6837\u54c1\u6536\u8d39\uff08\u6750\u6599\u6210\u672c\uff09\u3002\u5176\u4ed6\u6750\u6599\u662f\u5426\u6536\u53d6\u6837\u54c1\u8d39\u7528\u6211\u4eec\u4f1a\u544a\u77e5 \u2014 \u8bf7\u5148\u8054\u7cfb\u6211\u4eec\uff0c\u65b9\u4fbf\u5b89\u6392\u5408\u9002\u7684\u6837\u54c1\u5e76\u62a5\u51fa\u8fd0\u8d39\u3002',
  'How is the international freight charged?': '\u56fd\u9645\u8fd0\u8d39\u5982\u4f55\u6536\u8d39\uff1f',
  'Freight is charged at the real-time carrier rate (DHL, FedEx, UPS, sea freight, etc.) and confirmed with you before payment \u2014 no hidden fees. If you have your own carrier or forwarder, we can prepare the goods for your nominated pickup instead.': '\u8fd0\u8d39\u6309\u627f\u8fd0\u5546\u5b9e\u65f6\u8d39\u7387\u6536\u53d6\uff08DHL\u3001FedEx\u3001UPS\u3001\u6d77\u8fd0\u7b49\uff09\uff0c\u5e76\u5728\u4ed8\u6b3e\u524d\u4e0e\u60a8\u786e\u8ba4 \u2014 \u65e0\u9690\u85cf\u8d39\u7528\u3002\u5982\u679c\u60a8\u6709\u81ea\u5df1\u7684\u627f\u8fd0\u5546\u6216\u8d27\u4ee3\uff0c\u6211\u4eec\u53ef\u4ee5\u5907\u8d27\u4f9b\u60a8\u6307\u5b9a\u63d0\u8d27\u3002',
  'How do I pay?': '\u5982\u4f55\u4ed8\u6b3e\uff1f',
  'Send your order first \u2014 we reply with a real-time quotation within 24 hours. Once you approve the material and freight quote, we arrange the payment method for you based on order size: large orders via T/T bank transfer (corporate account, standard for international trade); small orders via Tenpay Global (Tencent\u2019s licensed cross-border payment, settles to CNY) or PayPal. Every payment is matched to your order with a proforma invoice and full documents \u2014 clean and traceable for customs and banks.': '\u5148\u63d0\u4ea4\u8ba2\u5355 \u2014 \u6211\u4eec\u5c06\u5728 24 \u5c0f\u65f6\u5185\u56de\u590d\u5b9e\u65f6\u62a5\u4ef7\u3002\u60a8\u786e\u8ba4\u6750\u6599\u4e0e\u8fd0\u8d39\u62a5\u4ef7\u540e\uff0c\u6211\u4eec\u4f1a\u6839\u636e\u8ba2\u5355\u89c4\u6a21\u4e3a\u60a8\u5b89\u6392\u4ed8\u6b3e\u65b9\u5f0f\uff1a\u5927\u5355\u8d70 T/T \u94f6\u884c\u8f6c\u8d26\uff08\u5bf9\u516c\u8d26\u6237\uff0c\u56fd\u9645\u8d38\u6613\u6807\u51c6\uff09\uff1b\u5c0f\u5355\u8d70 Tenpay Global\uff08\u817e\u8baf\u6301\u724c\u8de8\u5883\u652f\u4ed8\uff0c\u7ed3\u7b97\u4e3a\u4eba\u6c11\u5e01\uff09\u6216 PayPal\u3002\u6bcf\u7b14\u4ed8\u6b3e\u90fd\u4e0e\u8ba2\u5355\u5339\u914d\uff0c\u9644\u5f62\u5f0f\u53d1\u7968\u53ca\u5168\u5957\u5355\u636e \u2014 \u5bf9\u6d77\u5173\u548c\u94f6\u884c\u6e05\u6670\u53ef\u6eaf\u3002',
  'How long is the delivery time?': '\u4ea4\u8d27\u5468\u671f\u591a\u957f\uff1f',
  'Lead time depends on stock and your specifications \u2014 we confirm the exact timing in the quotation for every order, so there are no surprises.': '\u4ea4\u8d27\u5468\u671f\u53d6\u51b3\u4e8e\u5e93\u5b58\u4e0e\u60a8\u7684\u89c4\u683c \u2014 \u6bcf\u7b14\u8ba2\u5355\u7684\u7cbe\u786e\u65f6\u95f4\u6211\u4eec\u4f1a\u5728\u62a5\u4ef7\u4e2d\u786e\u8ba4\uff0c\u65e0\u610f\u5916\u3002',
  'Can I get production videos before shipping?': '\u53d1\u8d27\u524d\u53ef\u4ee5\u83b7\u53d6\u751f\u4ea7\u89c6\u9891\u5417\uff1f',
  'Yes. We share daily production and quality-inspection videos so you can see the progress and quality of your order anytime.': '\u53ef\u4ee5\u3002\u6211\u4eec\u4f1a\u5206\u4eab\u6bcf\u65e5\u751f\u4ea7\u4e0e\u8d28\u91cf\u68c0\u9a8c\u89c6\u9891\uff0c\u60a8\u53ef\u4ee5\u968f\u65f6\u770b\u5230\u8ba2\u5355\u7684\u8fdb\u5ea6\u4e0e\u8d28\u91cf\u3002',
  'Do you support custom colors, textures and formulas?': '\u652f\u6301\u5b9a\u5236\u989c\u8272\u3001\u7eb9\u7406\u548c\u914d\u65b9\u5417\uff1f',
  'Yes. Special textures, colors, thickness, backing materials and properties (high elasticity, high scratch resistance, hydrolysis resistance\u2026) can be developed to your specification.': '\u652f\u6301\u3002\u7279\u6b8a\u7eb9\u7406\u3001\u989c\u8272\u3001\u539a\u5ea6\u3001\u5e95\u9762\u6750\u6599\u4ee5\u53ca\u7279\u6b8a\u6027\u80fd\uff08\u9ad8\u5f39\u6027\u3001\u9ad8\u8010\u5212\u3001\u8010\u6c34\u89e3\u7b49\uff09\u53ef\u6309\u60a8\u7684\u89c4\u683c\u5f00\u53d1\u3002',
  'Do you supply sofa or automotive leather?': '\u63d0\u4f9b\u6c99\u53d1\u6216\u6c7d\u8f66\u76ae\u9769\u5417\uff1f',
  'Yes \u2014 we can source upholstery-grade leather for sofas and car interiors through our factory network. Please mention your application when you inquire.': '\u63d0\u4f9b \u2014 \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5de5\u5382\u7f51\u7edc\u4e3a\u6c99\u53d1\u548c\u6c7d\u8f66\u5185\u9970\u5bfb\u627e\u88c5\u9970\u7ea7\u76ae\u9769\u3002\u8be2\u4ef7\u65f6\u8bf7\u6ce8\u660e\u7528\u9014\u3002',
  'Can I buy small quantities online?': '\u53ef\u4ee5\u5728\u7ebf\u4e70\u5c0f\u6279\u91cf\u5417\uff1f',
  'Yes. Our Amazon retail store sells hydrolysis-resistant PU leather for retail and small-quantity buyers \u2014 shop directly at https://www.amazon.com/dp/B0G6V586N1 (hydrolysis-resistant PU leather).': '\u53ef\u4ee5\u3002\u6211\u4eec\u7684\u4e9a\u9a6c\u900a\u96f6\u552e\u5e97\u9488\u5bf9\u96f6\u552e\u4e0e\u5c0f\u6279\u91cf\u4e70\u5bb6\u9500\u552e\u8010\u6c34\u89e3 PU \u76ae\u9769 \u2014 \u76f4\u63a5\u8d2d\u4e70\uff1ahttps://www.amazon.com/dp/B0G6V586N1\uff08\u8010\u6c34\u89e3 PU \u76ae\u9769\uff09\u3002',
  'Do you provide test reports and certificates?': '\u63d0\u4f9b\u68c0\u6d4b\u62a5\u544a\u4e0e\u8ba4\u8bc1\u5417\uff1f',
  'Yes. We provide environmental and safety test reports (CTI) covering heavy metals, formaldehyde, phthalates, FDA 21 CFR 177.2600 and more. See our Certifications page.': '\u63d0\u4f9b\u3002\u6211\u4eec\u63d0\u4f9b\u8986\u76d6\u91cd\u91d1\u5c5e\u3001\u7532\u919b\u3001\u90bb\u82ef\u4e8c\u7532\u9178\u916f\u3001FDA 21 CFR 177.2600 \u7b49\u7684\u73af\u4fdd\u4e0e\u5b89\u5168\u68c0\u6d4b\u62a5\u544a\uff08CTI\uff09\u3002\u8bf7\u67e5\u770b\u8ba4\u8bc1\u9875\u3002',
  'Can I contact you on WeChat?': '\u53ef\u4ee5\u901a\u8fc7\u5fae\u4fe1\u8054\u7cfb\u4f60\u4eec\u5417\uff1f',
  'Yes, our WeChat number is +86 190 3739 0132 \u2014 tap the copy button on this page to save it.': '\u53ef\u4ee5\uff0c\u6211\u4eec\u7684\u5fae\u4fe1\u53f7\u662f +86 190 3739 0132 \u2014 \u70b9\u51fb\u672c\u9875\u590d\u5236\u6309\u94ae\u5373\u53ef\u4fdd\u5b58\u3002',
  /* cart drawer / topbar / footer / fab */
  'Your Order': '\u60a8\u7684\u8ba2\u5355',
  'Your order is empty.': '\u60a8\u7684\u8ba2\u5355\u4e3a\u7a7a\u3002',
  'Browse the leather series and add materials you need.': '\u6d4f\u89c8\u76ae\u9769\u7cfb\u5217\uff0c\u6dfb\u52a0\u60a8\u9700\u8981\u7684\u6750\u6599\u3002',
  'Browse Products': '\u6d4f\u89c8\u4ea7\u54c1',
  'No fixed prices \u2014 material & freight are quoted at real-time rates and confirmed with you before payment.': '\u65e0\u56fa\u5b9a\u4ef7\u683c \u2014 \u6750\u6599\u4e0e\u8fd0\u8d39\u6309\u5b9e\u65f6\u884c\u60c5\u62a5\u4ef7\uff0c\u4ed8\u6b3e\u524d\u4e0e\u60a8\u786e\u8ba4\u3002',
  'Checkout \u2192': '\u53bb\u7ed3\u7b97 \u2192',
  'Continue Browsing': '\u7ee7\u7eed\u6d4f\u89c8',
  'Sample Service \u00b7 Flexible MOQ \u00b7 Real-Time Quote': '\u6837\u54c1\u670d\u52a1 \u00b7 \u7075\u6d3b\u8d77\u8ba2\u91cf \u00b7 \u5b9e\u65f6\u62a5\u4ef7',
  'Live WhatsApp': 'WhatsApp \u5728\u7ebf',
  'Premium leather materials from China. 20 years of trusted sourcing for global buyers \u2014 genuine, synthetic and eco leathers with low MOQ and verified quality.': '\u6765\u81ea\u4e2d\u56fd\u7684\u9ad8\u7aef\u76ae\u9769\u6750\u6599\u300220 \u5e74\u670d\u52a1\u5168\u7403\u4e70\u5bb6\u7684\u53ef\u9760\u91c7\u8d2d\u7ecf\u9a8c \u2014 \u771f\u76ae\u3001\u5408\u6210\u9769\u4e0e\u73af\u4fdd\u9769\uff0c\u4f4e\u8d77\u8ba2\u91cf\u3001\u54c1\u8d28\u53ef\u9760\u3002',
  'All Products': '\u5168\u90e8\u4ea7\u54c1',
  'Get in Touch': '\u8054\u7cfb\u6211\u4eec',
  'WeChat: +86 190 3739 0132 (tap to copy)': '\u5fae\u4fe1\uff1a+86 190 3739 0132\uff08\u70b9\u51fb\u590d\u5236\uff09',
  '\u00a9 2026 Pengye Leather. Your Trusted Leather Sourcing Partner in China. All Rights Reserved.': '\u00a9 2026 \u9e4f\u4e1a\u76ae\u9769\u3002\u4e2d\u56fd\u503c\u5f97\u4fe1\u8d56\u7684\u76ae\u9769\u91c7\u8d2d\u5408\u4f5c\u4f19\u4f34\u3002\u7248\u6743\u6240\u6709\u3002',
  '24h reply \u2014 quote in real time': '24 \u5c0f\u65f6\u56de\u590d \u2014 \u5b9e\u65f6\u62a5\u4ef7',
  '+86 190 3739 0132 \u00b7 tap to copy': '+86 190 3739 0132 \u00b7 \u70b9\u51fb\u590d\u5236',
  'Phone': '\u7535\u8bdd',
  /* footer product links */
  'Water-Based PU': '\u6c34\u6027PU\u76ae\u9769',
  'Eco-Friendly PU': '\u73af\u4fddPU\u76ae\u9769',
  'Microfiber Leather': '\u8d85\u7ea4\u76ae\u9769',
  'Recycled PET Leather': '\u518d\u751fPET\u76ae\u9769',
  /* split-node fragments */
  'Shipping &amp; Contact Details': '\u8fd0\u8f93\u4e0e\u8054\u7cfb\u4fe1\u606f',
  'Shipping & Contact Details': '\u8fd0\u8f93\u4e0e\u8054\u7cfb\u4fe1\u606f',
  '* Required. Your order is sent directly to our sales team via WhatsApp / email.': '* \u5fc5\u586b\u3002\u60a8\u7684\u8ba2\u5355\u5c06\u76f4\u63a5\u901a\u8fc7 WhatsApp / \u90ae\u4ef6\u53d1\u9001\u7ed9\u6211\u4eec\u7684\u9500\u552e\u56e2\u961f\u3002',
  'Email *': '\u90ae\u7bb1 *',
  'Email button opens': '\u90ae\u4ef6\u6309\u94ae\u4f1a\u6253\u5f00',
  'your own': '\u60a8\u81ea\u5df1\u7684',
  'email app with the request addressed to': '\u90ae\u4ef6\u5e94\u7528\uff0c\u6536\u4ef6\u4eba\u5df2\u586b\u4e3a',
  '\u2014 just press send. Or tap Copy Request and paste it into any email or chat.': '\u2014 \u70b9\u51fb\u53d1\u9001\u5373\u53ef\u3002\u6216\u70b9\u51fb\u590d\u5236\u7533\u8bf7\uff0c\u7c98\u8d34\u5230\u4efb\u4f55\u90ae\u4ef6\u6216\u804a\u5929\u5e94\u7528\u3002',
  'email app with the order addressed to': '\u90ae\u4ef6\u5e94\u7528\uff0c\u8ba2\u5355\u6536\u4ef6\u4eba\u5df2\u586b\u4e3a',
  '\u2014 just press send (no login needed by us). If you\u2019d rather not use email, tap Copy Order and paste the message into WhatsApp or any chat.': '\u2014 \u70b9\u51fb\u53d1\u9001\u5373\u53ef\uff08\u65e0\u9700\u6211\u4eec\u767b\u5f55\uff09\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u7528\u90ae\u4ef6\uff0c\u70b9\u51fb\u590d\u5236\u8ba2\u5355\uff0c\u5c06\u6d88\u606f\u7c98\u8d34\u5230 WhatsApp \u6216\u4efb\u4f55\u804a\u5929\u5e94\u7528\u3002'
};

var CONTACT = {
  address: 'Aoding Plot, Shaliyuan Industrial Zone, Daling Town, Huidong County, Huizhou City, Guangdong Province, China 516321',
  email: 'sales@pengye-leather.com',
  phone: '+86 189 4808 8736',
  whatsapp: '8618948088736'
};

var PRODUCTS = [
  {
    id: 'genuine',
    no: 'PL-01',
    name: 'Genuine Leather for Shoes & Bags - Full Grain, Split & Reconstituted Cowhide, Sold Per Chi',
    tagline: 'Natural cow, sheep and goat hides. Priced per Chi - sold per hide, ~13-14 Chi each.',
    zhName: '鞋与箱包用真皮 - 全粒面、二层与再生牛皮，按尺销售',
    zhTagline: '天然牛、羊、山羊皮，按尺计价 - 按张销售，每张约 13-14 尺。',
    zhApplications: ['鞋类', '箱包配饰', '家具', '服装'],
    desc: 'Genuine leather is natural leather made from processed animal hides, distinct from man-made synthetic materials. Per light industry standards, only leather with 90%+ top-grain leather in the surface layer may be labeled \u201cgenuine leather\u201d. Raw materials mainly come from cowhide, sheepskin and pigskin. It can be identified by observing natural pore patterns, touching for softness and elasticity, and smelling for the characteristic animal hide scent. Daily care requires avoiding high temperatures and harsh chemicals, and keeping it ventilated and moisture-proof.',
    zhDesc: '真皮是由动物皮加工而成的天然皮革，与人工合成材料不同。按轻工行业标准，只有表面层90%以上为头层革的皮革才能标注“真皮”。原料主要来自牛皮、羊皮和猪皮。可通过观察天然毛孔纹路、触摸柔软度与弹性、闻动物皮革特有的气味来鉴别。日常保养需避免高温与强化学试剂，保持通风防潮。',
    features: ['Natural grain and texture', 'Breathable and durable', 'Premium hand-feel', 'Timeless, high-end look'],
    zhFeatures: ['天然粒面纹理', '透气耐用', '高级手感', '经典高端外观'],
    applications: ['Footwear', 'Bags & accessories', 'Furniture', 'Garments'],
    unit: 'ft',
    subtypes: ['Full Grain Leather', 'Split Leather', 'Reconstituted / Bonded'],
    cover: 'images/zhenpi.jpg',
    images: ['images/zhenpi.jpg', 'images/zhenpi-hd-1.jpg', 'images/zhenpi-hd-2.jpg', 'images/zhenpi-hd-3.jpg', 'images/zhenpi-hd-4.jpg', 'images/zhenpi-hd-5.jpg', 'images/np.jpg', 'images/np1.jpg', 'images/np2.jpg', 'images/np3.jpg', 'images/np4.jpg', 'images/np5.jpg', 'images/np6.jpg', 'images/np7.jpg', 'images/np8.jpg', 'images/np9.jpg']
  },
  {
    id: 'water-based-pu',
    no: 'PL-02',
    name: 'Water-Based PU Leather for Shoe Upper - Eco-Friendly Solvent-Free Synthetic Leather, Scratch & Hydrolysis Resistant, Sold by Yard',
    tagline: 'Solvent-free, low-VOC eco polyurethane. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '鞋面用水性PU皮革 - 环保无溶剂合成革，耐划耐水解，按码销售',
    zhTagline: '无溶剂、低VOC环保聚氨酯，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['鞋类', '沙发', '箱包', '汽车内饰'],
    desc: 'Water-based PU leather is an eco-friendly polyurethane synthetic leather using water as the medium with no added solvents, different from traditional solvent-based PU. Its production process features low VOC emissions and no toxic solvent residues, making it safe for humans and the environment. Made from water-based polyurethane resin via wet film-forming technology, it offers good scratch resistance and breathability. It can be identified by its lack of irritating odors, no pungent black smoke when burned, and a smooth, non-sticky feel. Daily care allows direct wiping with a damp cloth; avoid prolonged soaking and direct sunlight.',
    zhDesc: '水性PU皮革是以水为介质、不添加溶剂的环保聚氨酯合成革，区别于传统溶剂型PU。生产过程VOC排放低、无有毒溶剂残留，对人体和环境安全。由水性聚氨酯树脂经湿法成膜工艺制成，耐刮性好、透气舒适。鉴别特征：无刺激性气味，燃烧无刺鼻黑烟，触感光滑不粘腻。日常保养可用湿布直接擦拭，避免长时间浸泡和暴晒。',
    features: ['No added solvents, low VOC', 'Safe for people and environment', 'Good scratch resistance', 'Breathable and smooth feel'],
    zhFeatures: ['无溶剂添加、低VOC', '对人与环境安全', '耐刮性好', '透气光滑触感'],
    applications: ['Footwear', 'Upholstery', 'Bags', 'Auto interior'],
    unit: 'yd',
    cover: 'images/shuixin.jpg',
    images: ['images/shuixin.jpg', 'images/sx.jpg', 'images/sx1.jpg', 'images/sx2.jpg', 'images/sx3.jpg', 'images/sx4.jpg']
  },
  {
    id: 'eco-pu',
    no: 'PL-03',
    name: 'Eco-Friendly PU Leather - REACH Compliant Low-Carbon Synthetic Leather for Shoes & Furniture, Sold by Yard',
    tagline: 'Low-carbon, REACH-compliant synthetic PU. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '环保PU皮革 - 符合REACH低碳合成革，适用于鞋类与家具，按码销售',
    zhTagline: '低碳、符合REACH的合成PU，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['鞋类', '家具', '箱包', '环保产品线'],
    desc: 'Eco-friendly PU leather is a low-carbon compliant synthetic PU leather, produced with eco-friendly resins and additives, resulting in a significantly lower carbon footprint than standard PU. Its manufacturing strictly controls harmful substance emissions, meeting international environmental regulations like EU REACH, making it suitable for footwear and furniture with high environmental requirements. Made from modified polyurethane resin with eco-friendly additives, it offers stable physical properties and weather resistance. It can be verified via environmental test reports, lack of irritating odors when burned, and no harmful coating leaching.',
    zhDesc: '环保PU皮革是一款低碳合规的合成PU，采用环保树脂与助剂生产，碳足迹显著低于标准PU。生产严格控制有害物质排放，符合欧盟REACH等国际环保法规，适用于环保要求高的鞋类与家具。由改性聚氨酯树脂配环保助剂制成，物理性能稳定、耐候性好。可通过环保检测报告、燃烧无刺激气味、涂层无有害物质析出等验证。',
    features: ['Lower carbon footprint', 'REACH & EU compliant', 'Stable physical properties', 'Verified via test reports'],
    zhFeatures: ['更低碳足迹', '符合REACH与欧盟法规', '物理性能稳定', '检测报告可验证'],
    applications: ['Footwear', 'Furniture', 'Bags', 'Eco product lines'],
    unit: 'yd',
    cover: 'images/huanbaoq.jpg',
    images: ['images/huanbaoq.jpg', 'images/huanbao.jpg', 'images/huanbao1.jpg', 'images/huanbao2.jpg', 'images/huanbao3.jpg', 'images/huanbao4.jpg', 'images/huanbao5.jpg', 'images/huanbao6.jpg', 'images/huanbao7.jpg', 'images/huanbao8.jpg', 'images/huanbao9.jpg', 'images/huanbao10.jpg', 'images/huanbao11.jpg']
  },
  {
    id: 'standard-pu',
    no: 'PL-04',
    name: 'Standard PU Leather for Shoes, Bags & Furniture - Versatile Polyurethane Synthetic Leather, Sold by Yard',
    tagline: 'Balanced, versatile everyday polyurethane. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '标准PU皮革 - 多用途聚氨酯合成革，适用于鞋、箱包与家具，按码销售',
    zhTagline: '性能均衡的多用途聚氨酯，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['鞋类', '箱包', '家具', '文具'],
    desc: 'Standard PU leather is a synthetic leather based on conventional polyurethane resin, one of the most widely used artificial leather types. Composed of polyurethane resin, base fabric and additives, made via dry or wet processes, it offers stable wear resistance, flex resistance and easy processability. With moderate cost and balanced performance, it is widely used in footwear, bags, furniture and more. It can be identified by a slight plastic odor when burned, a uniform surface without natural pores, and a relatively firm feel. Daily care can use neutral cleaners; keep away from sharp objects to prevent scratches.',
    zhDesc: '标准PU皮革是基于常规聚氨酯树脂的合成革，是应用最广泛的人造革之一。由聚氨酯树脂、基布和助剂组成，经干法或湿法工艺制成，耐磨、耐折性能稳定，易于加工。成本适中、性能均衡，广泛用于鞋类、箱包、家具等。鉴别特征：燃烧有轻微塑料气味，表面均匀无天然毛孔，手感较紧实。日常保养可用中性清洁剂，远离尖锐物防刮伤。',
    features: ['Stable wear and flex resistance', 'Easy to process', 'Moderate cost, balanced performance', 'Wide color and grain range'],
    zhFeatures: ['耐磨耐折稳定', '易于加工', '成本适中、性能均衡', '颜色与纹路选择广'],
    applications: ['Footwear', 'Bags', 'Furniture', 'Stationery'],
    unit: 'yd',
    cover: 'images/main-banner5.jpg',
    images: ['images/main-banner5.jpg', 'images/p.jpg', 'images/p1.jpg', 'images/p2.jpg', 'images/p3.jpg', 'images/p4.jpg', 'images/p5.jpg', 'images/p6.jpg', 'images/p7.jpg', 'images/p8.jpg']
  },
  {
    id: 'pvc',
    no: 'PL-05',
    name: 'PVC Leather - Waterproof Vinyl Synthetic Leather for Bags, Furniture & Outdoor Use, Sold by Yard',
    tagline: 'Economical, waterproof vinyl-based leather. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: 'PVC皮革 - 防水乙烯基合成革，适用于箱包、家具与户外，按码销售',
    zhTagline: '经济实惠的防水乙烯基皮革，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['户外产品', '家具', '平价鞋类', '箱包护套'],
    desc: 'PVC leather is a cost-effective synthetic leather mainly made of polyvinyl chloride resin, featuring excellent water resistance and easy maintenance. Composed of PVC resin, plasticizers, stabilizers and base fabric, made via calendering or coating processes, it is low-cost and highly cost-effective. With a smooth, dense surface and excellent water and moisture resistance, it is often used in outdoor products, furniture and budget-friendly footwear. It can be identified by the pungent hydrogen chloride odor when burned, self-extinguishing when removed from flame, and a relatively hard, plastic-like feel. Daily care allows direct washing; avoid high temperatures to prevent softening and deformation.',
    zhDesc: 'PVC皮革是以聚氯乙烯树脂为主要原料的经济型合成革，具有优异的防水性和易维护性。由PVC树脂、增塑剂、稳定剂与基布组成，经压延或涂布工艺制成，成本低、性价比高。表面光滑致密，防水防潮性能优异，常用于户外产品、家具和平价鞋类。鉴别特征：燃烧有刺激性氯化氢气味，离火自熄，手感偏硬、似塑料。日常保养可直接水洗；避免高温以防软化变形。',
    features: ['Excellent waterproofing', 'Easy to clean and maintain', 'Low cost, high value', 'Dense, smooth surface'],
    zhFeatures: ['优异防水性能', '易清洁易保养', '低成本高性价比', '致密光滑表面'],
    applications: ['Outdoor products', 'Furniture', 'Budget footwear', 'Cases & covers'],
    unit: 'yd',
    cover: 'images/pvc.jpg',
    images: ['images/pvc.jpg', 'images/pv.jpg', 'images/pv1.jpg', 'images/pv2.jpg', 'images/pv3.jpg', 'images/pv4.jpg', 'images/pv5.jpg', 'images/pv6.jpg', 'images/pv7.jpg']
  },
  {
    id: 'bio-based',
    no: 'PL-06',
    name: 'Bio-Based Leather - Plant-Derived Sustainable Eco Leather for Footwear & Bags, Sold by Yard',
    tagline: 'Plant-derived sustainable material. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '生物基皮革 - 植物来源可持续环保革，适用于鞋类与箱包，按码销售',
    zhTagline: '植物来源可持续材料，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['鞋类', '箱包', '汽车内饰', '环保品牌'],
    desc: 'Bio-based leather is a sustainable eco-leather based on plant-derived raw materials, different from traditional petroleum-based synthetic leather. Raw materials mainly come from plant fibers, starch-based or bio-based polyurethane resins, reducing reliance on fossil resources and carbon emissions during production. Combining eco-friendliness with leather-like texture, it is biodegradable or recyclable, making it a future-oriented sustainable material. It can be verified via bio-based content test reports, slight plant fiber odor when burned, and a feel close to natural leather. Daily care requires avoiding prolonged moisture and keeping it ventilated and dry.',
    zhDesc: '生物基皮革是基于植物来源原料的可持续环保革，区别于传统石油基合成革。原料主要来自植物纤维、淀粉基或生物基聚氨酯树脂，减少化石资源依赖与生产碳排放。兼具环保性与类皮革质感，可生物降解或回收再利用，是面向未来的可持续材料。可通过生物基含量检测报告、燃烧轻微植物纤维气味、手感接近天然皮革等验证。日常保养需避免长时间受潮，保持通风干燥。',
    features: ['Plant-derived raw materials', 'Lower carbon footprint', 'Biodegradable or recyclable', 'Leather-like texture'],
    zhFeatures: ['植物来源原料', '更低碳足迹', '可生物降解或回收', '类皮革质感'],
    applications: ['Footwear', 'Bags', 'Auto interior', 'Eco brands'],
    unit: 'yd',
    cover: 'images/shengwu.jpg',
    images: ['images/shengwu.jpg', 'images/sw.jpg', 'images/sw1.jpg', 'images/sw2.jpg', 'images/sw3.jpg', 'images/sw4.jpg', 'images/sw5.jpg', 'images/sw6.jpg']
  },
  {
    id: 'microfiber',
    no: 'PL-07',
    name: 'Microfiber Leather for Shoes, Bags & Sports - Ultra-Durable Premium Synthetic Leather, Sold by Yard',
    tagline: 'High-performance ultra-fine fiber leather. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '超纤皮革 - 超耐用高端合成革，适用于鞋、箱包与运动用品，按码销售',
    zhTagline: '高性能超细纤维皮革，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['鞋类', '箱包', '运动用品', '汽车内饰'],
    desc: 'Microfiber leather is a synthetic leather made from high-performance microfiber base fabric composite with polyurethane resin, with performance close to or even better than natural genuine leather. Composed of island-in-sea microfiber base fabric and high-performance PU resin, made via impregnation, coagulation and buffing processes, it offers excellent wear resistance, tear strength and aging resistance. The surface texture can highly simulate natural leather, with a soft, delicate feel, making it a premium alternative to high-end genuine leather. It can be identified by its uniform, fine microfiber texture, soft elasticity close to genuine leather when touched, and no obvious wear after abrasion tests.',
    zhDesc: '超纤皮革是由高性能超细纤维基布复合聚氨酯树脂制成的合成革，性能接近甚至优于天然真皮。由海岛型超细纤维基布与高性能PU树脂组成，经浸渍、凝固、磨皮等工艺制成，耐磨性、撕裂强度和抗老化性出色。表面纹理可高度仿真天然皮革，手感柔软细腻，是高端真皮的优质替代品。鉴别特征：纤维纹理均匀细腻，触摸弹性接近真皮，耐磨测试无明显磨损。',
    features: ['Wear, tear and aging resistant', 'Highly simulates natural leather', 'Soft, delicate hand-feel', 'Premium genuine-leather alternative'],
    zhFeatures: ['耐磨抗撕裂抗老化', '高度仿真天然皮革', '柔软细腻手感', '高端真皮替代品'],
    applications: ['Footwear', 'Bags', 'Sports goods', 'Auto interior'],
    unit: 'yd',
    cover: 'images/chaoqian.jpg',
    images: ['images/chaoqian.jpg', 'images/cq.jpg', 'images/cq1.jpg', 'images/cq2.jpg', 'images/cq3.jpg', 'images/cq4.jpg', 'images/cq5.jpg', 'images/cq6.jpg', 'images/cq7.jpg', 'images/cq8.jpg', 'images/cq9.jpg', 'images/cq11.jpg', 'images/cq12.jpg', 'images/cq13.jpg', 'images/cq14.jpg', 'images/cq15.jpg', 'images/cq16.jpg', 'images/cq17.jpg', 'images/cq18.jpg', 'images/cq19.jpg', 'images/cq20.jpg', 'images/cq21.jpg', 'images/cq22.jpg', 'images/cq23.jpg', 'images/cq24.jpg']
  },
  {
    id: 'specialty',
    no: 'PL-08',
    name: 'Specialty Leather - Custom Embossed, Printed & Finished Leather for Fashion & Luxury, Sold by Yard',
    tagline: 'Custom embossed, printed and finished leather. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '特种皮革 - 定制压花、印花与后整理皮革，适用于时尚与高端，按码销售',
    zhTagline: '定制压花、印花与后整理皮革，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['高端时尚', '奢侈品', '定制家具', '时尚配饰'],
    desc: 'Specialty leather is functional or decorative leather processed with custom patterns and special crafts, enabling personalized appearance and performance per customer requirements. Based on various substrates like genuine leather, PU or microfiber, it is treated with special processes such as embossing, hot stamping, lamination and flocking to create unique textures, lusters and feels \u2014 e.g., crocodile pattern, snake pattern, metallic finish and matte effect. Suitable for high-end fashion, luxury goods, custom furniture and other special applications. Identification requires combining process features with customer requirements, checking pattern consistency, craft details and special performance test reports.',
    zhDesc: '特种皮革是按客户需求经定制图案与特殊工艺加工的装饰性或功能性皮革。基于真皮、PU或超纤等不同基材，通过压花、烫金、复合、植绒等特殊工艺处理，形成独特纹理、光泽与手感——如鳄鱼纹、蛇纹、金属质感、哑光效果。适用于高端时尚、奢侈品、定制家具等特殊应用。鉴别需结合工艺特征与客户要求，核对图案一致性、工艺细节与特殊性能检测报告。',
    features: ['Custom patterns and textures', 'Hot stamping, embossing, flocking', 'Unique luster and hand-feel', 'Made to your specification'],
    zhFeatures: ['定制图案与纹理', '烫金、压花、植绒工艺', '独特光泽与手感', '按您的规格定制'],
    applications: ['High-end fashion', 'Luxury goods', 'Custom furniture', 'Fashion accessories'],
    unit: 'yd',
    cover: 'images/teshu.jpg',
    images: ['images/teshu.jpg', 'images/ts.jpg', 'images/ts1.jpg', 'images/ts2.jpg', 'images/ts3.jpg', 'images/ts4.jpg', 'images/ts5.jpg', 'images/ts6.jpg', 'images/ts7.jpg', 'images/ts8.jpg']
  },
  {
    id: 'recycled-pet',
    no: 'PL-09',
    name: 'Recycled PET Bottle Leather - Sustainable Eco Material for Bags & Footwear, Sold by Yard',
    tagline: 'Bottle-to-leather circular material. Priced per Yard (1 Yard = 0.9 m x 1.37 m).',
    zhName: '再生PET瓶皮革 - 可持续环保材料，适用于箱包与鞋类，按码销售',
    zhTagline: '瓶到皮革的循环材料，按码计价（1码=0.9米×1.37米）。',
    zhApplications: ['箱包', '鞋类', '家具', '户外产品'],
    desc: 'Recycled PET bottle leather is a sustainable eco-friendly material produced from recycled waste plastic bottles. Through crushing, granulation, fiber spinning and lamination processes, waste plastic resources are reused effectively, reducing plastic pollution and reliance on petroleum raw materials. This material features high toughness, strong tensile strength, excellent wear resistance and stable color fastness. With reliable performance similar to microfiber leather, it is highly recognized in the global market and widely used in bags, footwear, furniture and outdoor products.',
    zhDesc: '再生PET瓶皮革是由回收废弃塑料瓶生产的可持续环保材料。通过破碎、造粒、纺丝与复合等工艺，有效再利用废塑料资源，减少塑料污染和对石油原料的依赖。该材料韧性高、抗拉强度大、耐磨性好、色牢度稳定。性能可靠，与超纤皮革相近，在全球市场认可度高，广泛用于箱包、鞋类、家具和户外产品。',
    features: ['Made from recycled bottles', 'High toughness and tensile strength', 'Stable color fastness', 'Globally recognized eco material'],
    zhFeatures: ['由回收塑料瓶制成', '高韧性与抗拉强度', '色牢度稳定', '全球认可的环保材料'],
    applications: ['Bags', 'Footwear', 'Furniture', 'Outdoor products'],
    unit: 'yd',
    cover: 'images/huanbaopu.jpg',
    images: ['images/huanbaopu.jpg', 'images/pz.jpg', 'images/pz1.jpg', 'images/pz2.jpg', 'images/pz3.jpg', 'images/pz4.jpg', 'images/pz5.jpg', 'images/pz6.jpg', 'images/pz7.jpg']
  }
];

var BENEFITS = [
  {
    icon: 'box',
    title: 'Flexible MOQ \u2014 Real-Time',
    desc: 'MOQ confirmed in real time with our sales team \u2014 genuine leather priced per Chi, synthetics per Yard. No forced stockpiling \u2014 perfect for sampling and small batches.',
    zhTitle: '\u7075\u6d3b\u4f4e\u8d77\u8ba2\u91cf \u2014 \u5b9e\u65f6\u786e\u8ba4',
    zhDesc: '\u8d77\u8ba2\u91cf\u7531\u9500\u552e\u56e2\u961f\u5b9e\u65f6\u786e\u8ba4 \u2014 \u771f\u76ae\u6309\u5c3a\u8ba1\u4ef7\u3001\u5408\u6210\u9769\u6309\u7801\u8ba1\u4ef7\u3002\u4e0d\u5f3a\u8feb\u79ef\u538b\u5e93\u5b58 \u2014 \u9002\u5408\u6837\u54c1\u4e0e\u5c0f\u6279\u91cf\u8ba2\u5355\u3002'
  },
  {
    icon: 'layers',
    title: 'One-Stop Full Range Supply',
    desc: 'Access to a broad network of quality factories \u2014 one stop for all your leather materials.',
    zhTitle: '\u4e00\u7ad9\u5f0f\u5168\u54c1\u7c7b\u4f9b\u5e94',
    zhDesc: '\u62e5\u6709\u5e7f\u6cdb\u7684\u4f18\u8d28\u5de5\u5382\u7f51\u7edc \u2014 \u4e00\u7ad9\u5f0f\u6ee1\u8db3\u60a8\u6240\u6709\u76ae\u9769\u6750\u6599\u9700\u6c42\u3002'
  },
  {
    icon: 'shield',
    title: '100% Pre-Shipment Inspection',
    desc: 'Full quality control before shipping, so you don\u2019t need to fly to China to check every order.',
    zhTitle: '100% \u51fa\u8d27\u524d\u5168\u68c0',
    zhDesc: '\u53d1\u8d27\u524d\u8fdb\u884c\u5168\u9762\u8d28\u91cf\u63a7\u5236\uff0c\u60a8\u65e0\u9700\u98de\u5230\u4e2d\u56fd\u68c0\u67e5\u6bcf\u4e00\u7b14\u8ba2\u5355\u3002'
  },
  {
    icon: 'truck',
    title: 'Real-Time Quote',
    desc: 'Prices and freight are quoted in real time based on current market rates \u2014 send your spec &amp; quantity and we confirm today.',
    zhTitle: '\u5b9e\u65f6\u62a5\u4ef7',
    zhDesc: '\u4ef7\u683c\u4e0e\u8fd0\u8d39\u6839\u636e\u5f53\u524d\u5e02\u573a\u884c\u60c5\u5b9e\u65f6\u62a5\u4ef7 \u2014 \u53d1\u9001\u89c4\u683c\u4e0e\u6570\u91cf\uff0c\u5f53\u5929\u7ed9\u60a8\u786e\u8ba4\u3002'
  },
  {
    icon: 'tag',
    title: 'Competitive Factory-Direct Prices',
    desc: '20+ years of deep partnerships secure better pricing than sourcing from factories directly.',
    zhTitle: '\u5177\u7ade\u4e89\u529b\u7684\u5de5\u5382\u76f4\u4f9b\u4ef7\u683c',
    zhDesc: '20+ \u5e74\u6df1\u5ea6\u5408\u4f5c\u5173\u7cfb\u6bd4\u76f4\u63a5\u4ece\u5de5\u5382\u91c7\u8d2d\u66f4\u4f18\u4ef7\u3002'
  },
  {
    icon: 'file',
    title: 'Custom Development Support',
    desc: 'Special textures, colors and formulas developed to your exact specification, with samples first.',
    zhTitle: '\u5b9a\u5236\u5f00\u53d1\u652f\u6301',
    zhDesc: '\u6309\u60a8\u7684\u7cbe\u786e\u89c4\u683c\u5f00\u53d1\u7279\u6b8a\u7eb9\u7406\u3001\u989c\u8272\u4e0e\u914d\u65b9\uff0c\u5148\u63d0\u4f9b\u6837\u54c1\u3002'
  }
];

var TRUST = [
  {
    icon: 'shield',
    title: 'Veteran-Owned & Operated',
    desc: 'We run our business with military discipline and integrity. No hidden fees, no quality cutting, no broken promises.',
    zhTitle: '\u9000\u4f0d\u4eba\u58eb\u521b\u4e1a\u4e0e\u7ecf\u8425',
    zhDesc: '\u6211\u4eec\u4ee5\u519b\u4eba\u7684\u7eaa\u5f8b\u4e0e\u8bda\u4fe1\u7ecf\u8425\u4e1a\u52a1\u3002\u65e0\u9690\u85cf\u8d39\u7528\u3001\u65e0\u8d28\u91cf\u7f29\u6c34\u3001\u65e0\u8fdd\u80cc\u627f\u8bfa\u3002'
  },
  {
    icon: 'video',
    title: 'Transparent Production & QC',
    desc: 'We share daily production and quality-inspection videos with you. See the quality and progress clearly, anytime.',
    zhTitle: '\u900f\u660e\u7684\u751f\u4ea7\u4e0e\u54c1\u63a7',
    zhDesc: '\u6211\u4eec\u4e0e\u60a8\u5206\u4eab\u6bcf\u65e5\u751f\u4ea7\u4e0e\u8d28\u91cf\u68c0\u9a8c\u89c6\u9891\u3002\u968f\u65f6\u6e05\u6670\u770b\u5230\u8d28\u91cf\u4e0e\u8fdb\u5ea6\u3002'
  },
  {
    icon: 'clock',
    title: '20 Years Industry Experience',
    desc: 'Since 2006 we have specialized in leather sourcing. We know every factory, every material and every trick of the trade.',
    zhTitle: '20 \u5e74\u884c\u4e1a\u7ecf\u9a8c',
    zhDesc: '\u81ea 2006 \u5e74\u4ee5\u6765\u4e13\u6ce8\u76ae\u9769\u91c7\u8d2d\u3002\u6211\u4eec\u4e86\u89e3\u6bcf\u5bb6\u5de5\u5382\u3001\u6bcf\u79cd\u6750\u6599\u3001\u6bcf\u4e2a\u884c\u4e1a\u95e8\u9053\u3002'
  },
  {
    icon: 'handshake',
    title: 'Long-Term Factory Partnerships',
    desc: 'Long-term partnerships with top Chinese leather factories ensure stable stock access and competitive prices.',
    zhTitle: '\u957f\u671f\u5de5\u5382\u5408\u4f5c\u4f19\u4f34',
    zhDesc: '\u4e0e\u4e2d\u56fd\u9876\u7ea7\u76ae\u9769\u5de5\u5382\u7684\u957f\u671f\u5408\u4f5c\uff0c\u4fdd\u969c\u7a33\u5b9a\u8d27\u6e90\u4e0e\u7ade\u4e89\u529b\u4ef7\u683c\u3002'
  }
];

var PARTNERS = [
  'COSTCO WHOLESALE', 'Walmart', 'amazon', 'Alibaba', 'Lazada', 'TEMU',
  'TikTok', 'ebay', 'mercado libre', 'fruugo', 'Sanquan', 'Zhanyi',
  'Anjoy', 'amfori BSCI', 'Babi', 'Synear', 'Wan Chai Ferry', 'ISO 9001',
  'OXO', 'LIFETIME', 'ISO 14001', 'tescoma', 'IKEA', 'ALDI',
  'Huiyoude', 'cotta', 'wish'
];

var CERTS = {
  eco: [
    ['Lead (Pb)', '< 90 ppm'],
    ['Formaldehyde', '< 75 ppm'],
    ['Phenol', '< 9 ppm'],
    ['Azo Dyes', 'N.D.'],
    ['Hexavalent Chromium Cr(VI)', 'N.D.'],
    ['Phthalates', '16P \u2014 100 ppm'],
    ['European Heavy Metals', 'EN71-3 compliant'],
    ['Chlorinated Paraffins (SCCP)', '< 1000 ppm'],
    ['Organotin Compounds', '< 10 ppm'],
    ['DMFU', '< 10 ppm'],
    ['APEO / NPEO', '< 1000 ppm'],
    ['Peeling Strength', '\u2265 2.0 kg/cm\u00b2 / 0.2']
  ],
  cti: [
    ['Lead (Pb)', 'N.D.', '2 mg/kg', '1000 mg/kg'],
    ['Cadmium (Cd)', 'N.D.', '2 mg/kg', '100 mg/kg'],
    ['Mercury (Hg)', 'N.D.', '2 mg/kg', '1000 mg/kg'],
    ['Hexavalent Chromium Cr(VI)', 'N.D.', '8 mg/kg', '1000 mg/kg'],
    ['Polybrominated Biphenyls (PBBs)', 'N.D.', '5 mg/kg', '1000 mg/kg'],
    ['Polybrominated Diphenyl Ethers (PBDEs)', 'N.D.', '5 mg/kg', '1000 mg/kg'],
    ['Phthalates (DBP, BBP, DEHP, DIBP)', 'N.D.', '50 mg/kg', '1000 mg/kg']
  ],
  fda: [
    ['Distilled water \u2014 first 7 hours', '\u2264 20', 'mg/in\u00b2'],
    ['Distilled water \u2014 subsequent 2 hours', '\u2264 1', 'mg/in\u00b2'],
    ['n-Hexane \u2014 first 7 hours', '\u2264 175', 'mg/in\u00b2'],
    ['n-Hexane \u2014 subsequent 2 hours', '\u2264 4', 'mg/in\u00b2']
  ]
};

var TEST_DESC = {
  eco: [
    ['Lead (Pb)', '< 90 PPM'],
    ['Formaldehyde', '\u2264 75 PPM'],
    ['Phenol', '< 5 PPM'],
    ['Azo Dyes', 'N.D.'],
    ['Hexavalent Chromium Cr(VI)', 'N.D.'],
    ['Phthalates (16P)', '< 100 PPM'],
    ['EN71-3 European Heavy Metals', 'Fully compliant'],
    ['Carcinogenic Dyes', 'N.D.'],
    ['Short Chain Chlorinated Paraffins (SCCP)', '< 100 PPM'],
    ['Organotin Compounds', '\u2264 1 PPM'],
    ['DMFU', '< 0.1 PPM'],
    ['APEO (OPEO + NPEO)', '< 100 PPM'],
    ['California 65', 'Fully compliant']
  ],
  phys: [
    ['Peeling Strength', '2.0 KG / 3 CM \u00b1 0.2']
  ],
  disclaimer: 'The test is conducted by our company. We do not guarantee that the product can meet all the above-mentioned requirements. Physical properties may vary with storage environment, time and processing techniques. Please run a strict feasibility test before applying new processing techniques to ensure the best result.',
  notes: [
    'We do not guarantee that dyeing or color-transfer will not occur when dark and light materials are used together. To avoid color transfer, separate parts with soft plastic film or soft paper.',
    'Processing with reactive chemicals or adhesives may cause discoloration or peeling. Test your process on samples first to confirm it causes no damage.',
    'Due to the nature of raw materials, color and grain may vary slightly between batches. We suggest not mixing different batches on the same product.',
    'We are responsible only for the quality of the raw material, not for downstream processing costs or finished goods. If you find any anomaly (short quantity, color difference, mismatch), contact us before cutting \u2014 if it is our fault we will refund or replace. We take no responsibility for material cut without inspection.',
    'Customized production follows strictly the environmental parameters provided by the customer. Environmental testing is required before cutting to guarantee stability and reliability. We are not liable for materials cut before testing.',
    'If any issue arises, please contact our manager immediately and inform us in writing.',
    'All rights of explanation are reserved by our company.'
  ]
};

var FACTORY_IMAGES = ['images/a1.jpg', 'images/a2.jpg', 'images/a3.jpg', 'images/a4.jpg', 'images/a5.jpg', 'images/a6.jpg', 'images/a7.jpg'];

var HERO_SLIDES = ['images/main-banner1.jpg', 'images/main-banner2.jpg', 'images/main-banner3.jpg'];

/* ---------- Icons (inline SVG) ---------- */

var ICONS = {
  check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z"/></svg>',
  whatsappLg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z"/></svg>',
  wechatLg: '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M9.04 3C5.16 3 2 5.78 2 9.21c0 1.9 1 3.6 2.57 4.72L4 16.1l2.23-1.14c.7.2 1.44.3 2.21.3h.37a4.6 4.6 0 0 1-.22-1.43c0-2.84 2.7-5.15 6.02-5.15h.3C14.43 6.1 12 3 9.04 3zM6.5 6.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zm5.04 0c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9zM14.5 9.1c-2.9 0-5.24 2.06-5.24 4.6 0 1.27.6 2.41 1.57 3.24L10 18.5l1.94-.99c.5.15 1.03.23 1.58.23 2.9 0 5.25-2.06 5.25-4.6s-2.35-4.6-5.25-4.6zm-1.85 2.6c.4 0 .7.33.7.73s-.31.73-.7.73-.7-.33-.7-.73.31-.73.7-.73zm3.7 0c.4 0 .7.33.7.73s-.31.73-.7.73-.7-.33-.7-.73.31-.73.7-.73z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  video: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  clock: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 7 2 19h3l.7-4"/></svg>',
  box: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
  layers: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 5-10 5L2 7l10-5Z"/><path d="m2 12 10 5 10-5"/><path d="m2 17 10 5 10-5"/></svg>',
  truck: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18h-5"/><path d="M14 8h4l4 4v5a1 1 0 0 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  tag: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1" fill="currentColor"/></svg>',
  file: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>',
  award: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  factory: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  recycle: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 7.196 9.5 3.1 10.598"/><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"/><path d="m13.378 9.633 4.096 1.098 1.097-4.096"/></svg>',
  globe: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  chevL: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  close: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  zoom: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>'
};

/* ---------- Helpers ---------- */

function icon(name, cls) {
  var svg = ICONS[name] || '';
  return '<span class="' + (cls || '') + '">' + svg + '</span>';
}

function esc(s) {
  var d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}

function getProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}

function waLink(text) {
  return 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(text || 'Hi, I want to consult about leather products quotation.');
}

function mailtoInquiry(data) {
  var subject = 'Leather Inquiry from ' + (data.name || 'Website Visitor');
  var body = [
    'Name: ' + (data.name || ''),
    'Company: ' + (data.company || ''),
    'Email: ' + (data.email || ''),
    'Phone: ' + (data.phone || ''),
    'Leather Type: ' + (data.leatherType || ''),
    'Quantity: ' + (data.quantity || ''),
    '',
    'Details:',
    data.details || ''
  ].join('\n');
  return 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

/* ---------- Order cart (localStorage) ---------- */

var CART_KEY = 'pengye_cart_v1';

function getCart() {
  try {
    var raw = localStorage.getItem(CART_KEY);
    var cart = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(cart)) return [];
    for (var i = 0; i < cart.length; i++) {
      var p = getProduct(cart[i].id);
      if (p && !cart[i].unit) cart[i].unit = p.unit || 'yd';
      if (!cart[i].specs) cart[i].specs = {};
    }
    return cart;
  } catch (e) { return []; }
}

function saveCart(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {}
  updateCartBadge();
}

function cartTotalQty() {
  var cart = getCart();
  var n = 0;
  for (var i = 0; i < cart.length; i++) n += (parseInt(cart[i].qty, 10) || 0);
  return n;
}

function updateCartBadge() {
  var badge = document.getElementById('cartCount');
  if (!badge) return;
  var n = cartTotalQty();
  badge.textContent = n;
  badge.classList.toggle('show', n > 0);
}

function addToCart(id, qty, priceIn, specs) {
  var p = getProduct(id);
  if (!p) return;
  var cart = getCart();
  qty = Math.max(1, parseInt(qty, 10) || 1);
  var unit = p.unit || 'yd';
  var found = null;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === id) { found = cart[i]; break; }
  }
  if (found) {
    found.qty = Math.min(99999, found.qty + qty);
    if (priceIn) found.priceIn = priceIn;
    if (specs) found.specs = specs;
  } else {
    cart.push({ id: p.id, no: p.no, name: p.name, cover: p.cover, qty: qty, priceIn: priceIn || '', unit: unit, specs: specs || {} });
  }
  saveCart(cart);
  renderCartDrawer();
  openCart();
  showToast(p.name + ' added to your order');
}

function unitLabel(u) {
  if (LANG === 'zh') return u === 'ft' ? '尺' : '码';
  if (u === 'ft') return 'Chi';
  return 'Yard';
}

function specsSummary(specs) {
  if (!specs) return '';
  var parts = [];
  if (specs.grade) parts.push(specs.grade);
  if (specs.thickness) parts.push(specs.thickness + ' mm');
  if (specs.texture) parts.push(specs.texture);
  if (specs.eco && specs.eco !== 'Standard') parts.push(specs.eco);
  if (specs.country) parts.push('for ' + specs.country);
  if (specs.backing) parts.push(specs.backing + ' back');
  if (specs.props && specs.props.length) parts.push(specs.props.join(', '));
  return parts.join(' \u00b7 ');
}

function setCartQty(index, qty) {
  var cart = getCart();
  if (!cart[index]) return;
  qty = parseInt(qty, 10);
  if (isNaN(qty) || qty < 1) qty = 1;
  if (qty > 99999) qty = 99999;
  cart[index].qty = qty;
  saveCart(cart);
  renderCartDrawer();
}

function setCartPrice(index, val) {
  var cart = getCart();
  if (!cart[index]) return;
  cart[index].priceIn = val;
  saveCart(cart);
}

function removeCartItem(index) {
  var cart = getCart();
  if (!cart[index]) return;
  cart.splice(index, 1);
  saveCart(cart);
  renderCartDrawer();
}

function clearCart() {
  try { localStorage.removeItem(CART_KEY); } catch (e) {}
  updateCartBadge();
}

/* ---------- Cart drawer UI ---------- */

function openCart() {
  var drawer = document.getElementById('cartDrawer');
  var overlay = document.getElementById('cartOverlay');
  if (!drawer) return;
  renderCartDrawer();
  drawer.classList.add('open');
  if (overlay) overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  var drawer = document.getElementById('cartDrawer');
  var overlay = document.getElementById('cartOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
  document.body.style.overflow = '';
}

function renderCartDrawer() {
  var body = document.getElementById('cartBody');
  var foot = document.getElementById('cartFoot');
  if (!body) return;
  var cart = getCart();

  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty">' +
      '<div class="icon"><svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg></div>' +
      '<p>Your order is empty.<br>Browse the leather series and add materials you need.</p>' +
      '<a class="btn btn-primary" href="#/products">Browse Products</a>' +
    '</div>';
    if (foot) foot.innerHTML = '';
    return;
  }

  var html = '';
  for (var i = 0; i < cart.length; i++) {
    var it = cart[i];
    var ul = unitLabel(it.unit);
    var spec = specsSummary(it.specs);
    html +=
      '<div class="cart-item">' +
        '<img src="' + it.cover + '" alt="' + esc(it.name) + '">' +
        '<div class="cart-item-info">' +
          '<div class="no">' + esc(it.no) + '</div>' +
          '<h4>' + esc(it.name) + '</h4>' +
          (spec ? '<div class="cart-item-specs">' + esc(spec) + '</div>' : '') +
          '<div class="cart-qty">' +
            '<button type="button" data-cart-dec="' + i + '" aria-label="Decrease quantity">\u2212</button>' +
            '<input type="text" inputmode="numeric" value="' + it.qty + '" data-cart-qty="' + i + '" aria-label="Quantity">' +
            '<button type="button" data-cart-inc="' + i + '" aria-label="Increase quantity">+</button>' +
            '<span class="unit">' + ul + '</span>' +
          '</div>' +
          '<div class="price-in"><input type="text" placeholder="Target price (optional), e.g. $2.5/' + (it.unit === 'ft' ? 'Chi' : 'Yard') + '" value="' + esc(it.priceIn || '') + '" data-cart-price="' + i + '" aria-label="Target price"></div>' +
        '</div>' +
        '<button class="cart-item-remove" data-cart-del="' + i + '" aria-label="Remove item">' + ICONS.close + '</button>' +
      '</div>';
  }
  body.innerHTML = html;
  if (foot) {
    foot.innerHTML =
      '<div class="cart-summary">No fixed prices \u2014 material &amp; freight are quoted at real-time rates and confirmed with you before payment.</div>' +
      '<a class="btn btn-primary" href="#/checkout">Checkout \u2192</a>' +
      '<a class="btn btn-outline-dark" href="#/products">Continue Browsing</a>';
  }
  applyLang();
}

/* ---------- Checkout ---------- */

function renderCheckout() {
  var cart = getCart();

  var itemsHtml;
  var total = 0;
  if (!cart.length) {
    itemsHtml = '<div class="co-empty">Your order is empty. Add leather materials from the product pages first.</div>';
  } else {
    var rows = '';
    var ftTotal = 0, ydTotal = 0, hasFt = false, hasYd = false;
    for (var i = 0; i < cart.length; i++) {
      var it = cart[i];
      var ul = unitLabel(it.unit);
      if (it.unit === 'ft') { ftTotal += (parseInt(it.qty, 10) || 0); hasFt = true; }
      else { ydTotal += (parseInt(it.qty, 10) || 0); hasYd = true; }
      var spec = specsSummary(it.specs);
      rows += '<div class="co-item"><span class="nm">' + esc(it.no) + ' ' + esc(it.name) + (spec ? '<small>' + esc(spec) + '</small>' : '') + '</span><span class="qt">' + it.qty + ' ' + ul + '</span></div>';
    }
    var totHtml = '';
    if (hasFt) totHtml += '<div class="co-total"><span>Genuine Leather Total</span><span>' + ftTotal + ' Chi</span></div>';
    if (hasYd) totHtml += '<div class="co-total"><span>Synthetic Leather Total</span><span>' + ydTotal + ' Yard</span></div>';
    itemsHtml = rows + totHtml;
  }

  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / Checkout</div>' +
        '<span class="kicker">Order</span>' +
        '<h1>Checkout &amp; Shipping</h1>' +
        '<p>Submit your order \u2014 we confirm the real-time freight quote and send a payment link within one business day.</p>' +
      '</div>' +
    '</div>' +
    '<section class="section">' +
      '<div class="container">' +
        '<div class="checkout-layout">' +
          '<div class="form-card">' +
            '<h3>Shipping &amp; Contact Details</h3>' +
            '<p class="form-sub">* Required. Your order is sent directly to our sales team via WhatsApp / email.</p>' +
            '<form id="checkoutForm">' +
              '<div class="form-row"><label for="cName">Full Name *</label><input id="cName" type="text" required placeholder="Your full name"></div>' +
              '<div class="form-row"><label for="cCompany">Company</label><input id="cCompany" type="text" placeholder="Your company name"></div>' +
              '<div class="form-row"><label for="cEmail">Email *</label><input id="cEmail" type="email" required placeholder="Your email"></div>' +
              '<div class="form-row"><label for="cPhone">Phone / WhatsApp *</label><input id="cPhone" type="text" required placeholder="Your phone / WhatsApp number"></div>' +
              '<div class="form-row"><label for="cWechat">WeChat (optional)</label><input id="cWechat" type="text" placeholder="Your WeChat ID"></div>' +
              '<div class="form-row"><label for="cCountry">Country *</label><input id="cCountry" type="text" required placeholder="Your country"></div>' +
              '<div class="form-row"><label for="cCity">City</label><input id="cCity" type="text" placeholder="Your city"></div>' +
              '<div class="form-row"><label for="cAddress">Address *</label><input id="cAddress" type="text" required placeholder="Street address, warehouse, port, etc."></div>' +
              '<div class="form-row"><label for="cZip">Postal / ZIP Code</label><input id="cZip" type="text" placeholder="e.g. 90001"></div>' +

              '<div style="margin: 26px 0 14px;"><h4 style="font-size:15px;margin-bottom:4px;">Shipping Method</h4><p style="font-size:13px;color:var(--stone);">International freight is charged at the real-time carrier rate.</p></div>' +

              '<label class="radio-card" id="shipPengyeCard">' +
                '<input type="radio" name="shipMethod" value="pengye" checked>' +
                '<div><h4>Pengye arranges shipping (recommended)</h4><p>We book the best carrier and confirm the real-time freight quote with you before payment \u2014 no hidden fees.</p></div>' +
              '</label>' +

              '<label class="radio-card" id="shipOwnCard">' +
                '<input type="radio" name="shipMethod" value="own">' +
                '<div><h4>I will use my own carrier / forwarder</h4><p>You have a preferred logistics provider \u2014 tell us the carrier and account, we prepare the goods for pickup.</p></div>' +
              '</label>' +

              '<div class="ship-fields hidden" id="ownShipFields">' +
                '<div class="form-row"><label for="cCarrier">Your Carrier / Forwarder *</label><input id="cCarrier" type="text" placeholder="e.g. DHL, FedEx, UPS, freight forwarder name"></div>' +
                '<div class="form-row"><label for="cAccount">Account No. / Collection Method</label><input id="cAccount" type="text" placeholder="Your account number or pickup instruction"></div>' +
              '</div>' +

              '<div style="margin: 26px 0 14px;"><h4 style="font-size:15px;margin-bottom:4px;">Payment</h4><p style="font-size:13px;color:var(--stone);">We arrange the payment method for you based on order size \u2014 no need to choose now.</p></div>' +

              '<div class="pay-methods">' +
                '<div class="pay-method"><h5>Large orders \u2014 T/T Bank Transfer</h5><p>Corporate account, standard for international trade \u2014 proforma invoice &amp; contract with full documents.</p></div>' +
                '<div class="pay-method"><h5>Small orders \u2014 Tenpay Global</h5><p>Tencent\u2019s licensed cross-border payment \u2014 simple and low-fee for small amounts, settles to CNY.</p></div>' +
                '<div class="pay-method"><h5>Alternative \u2014 PayPal</h5><p>Convenient for small orders when you prefer it.</p></div>' +
              '</div>' +
              '<p class="pay-note">Payment happens only after you approve the quotation. We never ask for cash \u2014 every payment is matched to your order with a proforma invoice and shipping documents, clean and traceable for customs and banks.</p>' +

              '<div class="form-row"><label for="cDetails">Order Notes (colors, specs, documents needed)</label><textarea id="cDetails" placeholder="Color / article numbers, thickness, target price, packing, certificates, etc."></textarea></div>' +

              '<div class="form-actions">' +
                '<button type="submit" class="btn btn-primary" id="coWaBtn">' + ICONS.whatsapp + 'Send Order via WhatsApp</button>' +
                '<button type="button" class="btn btn-outline-dark" id="coMailBtn">Send via Email</button>' +
                '<button type="button" class="btn btn-outline-dark" id="coCopyBtn">Copy Order</button>' +
              '</div>' +
              '<p class="form-hint">Email button opens <strong>your own</strong> email app with the order addressed to <strong>sales@pengye-leather.com</strong> \u2014 just press send (no login needed by us). If you\u2019d rather not use email, tap Copy Order and paste the message into WhatsApp or any chat.</p>' +
            '</form>' +
          '</div>' +

          '<aside class="checkout-summary">' +
            '<h3>Order Summary</h3>' +
            itemsHtml +
            '<p class="co-note">Material price: quoted by our team based on type, quantity and specification \u2014 usually within 24 hours.<br>Freight: real-time carrier rate, confirmed before payment.<br>Genuine leather priced per Chi; synthetic leather per Yard.<br>Testing: domestic (CN) standard by default \u2014 international tests (REACH, FDA, OEKO-TEX\u2026) must be requested in advance.</p>' +
          '</aside>' +
        '</div>' +
      '</div>' +
    '</section>';
}

function collectCheckout() {
  return {
    name: document.getElementById('cName').value,
    company: document.getElementById('cCompany').value,
    email: document.getElementById('cEmail').value,
    phone: document.getElementById('cPhone').value,
    wechat: document.getElementById('cWechat').value,
    country: document.getElementById('cCountry').value,
    city: document.getElementById('cCity').value,
    address: document.getElementById('cAddress').value,
    zip: document.getElementById('cZip').value,
    method: document.querySelector('input[name="shipMethod"]:checked') ? document.querySelector('input[name="shipMethod"]:checked').value : 'pengye',
    carrier: document.getElementById('cCarrier') ? document.getElementById('cCarrier').value : '',
    account: document.getElementById('cAccount') ? document.getElementById('cAccount').value : '',
    details: document.getElementById('cDetails').value
  };
}

function buildOrderMessage(d) {
  var cart = getCart();
  var lines = [];
  lines.push('\u2605 NEW ORDER \u2014 PENGYE LEATHER \u2605');
  lines.push('From: ' + (d.name || '-') + (d.company ? ' (' + d.company + ')' : ''));
  lines.push('Email: ' + (d.email || '-') + ' | Phone/WA: ' + (d.phone || '-'));
  if (d.wechat) lines.push('WeChat: ' + d.wechat);
  lines.push('Ship to: ' + (d.address || '-') + ', ' + (d.city || '') + ', ' + (d.country || '') + ' ' + (d.zip || ''));
  lines.push('');
  lines.push('ORDER ITEMS:');
  for (var i = 0; i < cart.length; i++) {
    var it = cart[i];
    var line = (i + 1) + '. ' + it.no + ' ' + it.name + ' \u00d7 ' + it.qty + ' ' + unitLabel(it.unit);
    if (it.priceIn) line += ' (target: ' + it.priceIn + ')';
    lines.push(line);
    var spec = specsSummary(it.specs);
    if (spec) lines.push('     Specs: ' + spec);
  }
  lines.push('');
  lines.push('SHIPPING: ' + (d.method === 'own'
    ? 'Customer\u2019s own carrier \u2014 ' + (d.carrier || '-') + (d.account ? ' | Account: ' + d.account : '')
    : 'Pengye arranges \u2014 real-time freight quote to be confirmed before payment.'));
  lines.push('PAYMENT: Arranged by Pengye based on order size \u2014 T/T (corporate) for large orders; Tenpay Global or PayPal for small orders. Confirmed on the quotation.');
  lines.push('TESTING: Domestic (CN) standard by default. International tests (REACH / FDA / OEKO-TEX / EN71-3 etc.) requested in advance \u2014 ' + (d.details ? 'see notes.' : 'not required.'));
  if (d.details) {
    lines.push('');
    lines.push('NOTES: ' + d.details);
  }
  return lines.join('\n');
}

function submitCheckout(useEmail) {
  var form = document.getElementById('checkoutForm');
  if (!form) return;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  var d = collectCheckout();
  if (d.method === 'own' && !d.carrier) {
    showToast('Please enter your carrier / forwarder name');
    return;
  }
  var msg = buildOrderMessage(d);
  var cart = getCart();
  if (!cart.length) { showToast('Your order is empty'); return; }

  if (useEmail) {
    var subject = 'New Order from ' + (d.name || 'Website') + ' \u2014 ' + cartTotalQty() + ' yds';
    window.location.href = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(msg);
  } else {
    window.open(waLink(msg), '_blank');
  }

  clearCart();
  showCheckoutSuccess(d.name);
}

function showCheckoutSuccess(name) {
  var app = document.getElementById('app');
  app.innerHTML =
    '<section class="section">' +
      '<div class="container">' +
        '<div class="form-card" style="max-width:640px;margin:0 auto;">' +
          '<div class="success-box">' +
            '<div class="icon"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>' +
            '<h2>Order Sent' + (name ? ', ' + esc(name.split(' ')[0]) : '') + '!</h2>' +
            '<p>Your order has been sent to our sales team. We will reply within one business day with the material quotation and the real-time freight rate.</p>' +
            '<a class="btn btn-primary" href="#/products">Continue Browsing</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  updateCartBadge();
  window.scrollTo(0, 0);
}

/* ---------- Toast ---------- */

var toastTimer = null;
function showToast(msg) {
  var t = document.getElementById('toastBox');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.id = 'toastBox';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
}

/* ---------- Copy helper (WeChat) ---------- */

function copyText(text, btn) {
  function done() {
    if (btn) { btn.classList.add('copied'); btn.textContent = 'Copied \u2713'; setTimeout(function () { btn.classList.remove('copied'); btn.textContent = 'Copy WeChat Number'; }, 2000); }
    showToast('WeChat number copied: ' + text);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  var ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); done(); } catch (e) {}
  document.body.removeChild(ta);
}

/* ---------- View: Home ---------- */

function renderHome() {
  var heroSlides = HERO_SLIDES.map(function (src, i) {
    return '<div class="hero-bg' + (i === 0 ? ' active' : '') + '" data-slide="' + i + '" style="background-image:url(\'' + src + '\');' + (i === 0 ? '' : 'display:none;') + '"></div>';
  }).join('');

  var benefits = BENEFITS.map(function (b) {
    return '<div class="benefit-card">' + icon(b.icon, 'icon') + '<h3>' + esc(T(b.title, b.zhTitle)) + '</h3><p>' + esc(T(b.desc, b.zhDesc)) + '</p></div>';
  }).join('');

  var swatches = PRODUCTS.map(function (p) {
    return '<a class="swatch-card" href="#/product/' + p.id + '">' +
      '<div class="swatch-media"><span class="swatch-no">' + p.no + '</span><img src="' + p.cover + '" alt="' + esc(T(p.name, p.zhName)) + '" loading="lazy"></div>' +
      '<div class="swatch-body"><h3>' + esc(T(p.name, p.zhName)) + '</h3><p>' + esc(T(p.tagline, p.zhTagline)) + '</p>' +
      '<div class="swatch-tags">' + p.applications.slice(0, 3).map(function (a, i) { return '<span>' + esc(LANG === 'zh' ? (p.zhApplications || [])[i] || a : a) + '</span>'; }).join('') + '</div>' +
      '<span class="swatch-more">' + T('View details', '\u67e5\u770b\u8be6\u60c5') + ' ' + ICONS.arrow + '</span></div></a>';
  }).join('');

  var media = FACTORY_IMAGES.map(function (src) {
    return '<figure data-lightbox="' + src + '"><img src="' + src + '" alt="Cooperative factory and quality certificate" loading="lazy"></figure>';
  }).join('');

  var trust = TRUST.map(function (t) {
    return '<div class="trust-card">' + icon(t.icon, 'icon') + '<h3>' + esc(T(t.title, t.zhTitle)) + '</h3><p>' + esc(T(t.desc, t.zhDesc)) + '</p></div>';
  }).join('');

  var partners = PARTNERS.map(function (p) { return '<div class="logo-cell">' + esc(p) + '</div>'; }).join('');

  var scopeCards =
    '<div class="scope-card">' + icon('box', 'icon') + '<h3>Shoe Material Specialist</h3><p>We focus on leather for footwear \u2014 uppers, linings and more. Every series below is built for shoe production.</p></div>' +
    '<div class="scope-card">' + icon('handshake', 'icon') + '<h3>Sofa &amp; Automotive Leather</h3><p>Need upholstery-grade leather for sofas or car interiors? We source it too \u2014 just mention your application in advance.</p></div>' +
    '<div class="scope-card">' + icon('pin', 'icon') + '<h3>Visit Our Showroom</h3><p>Buyers and partners are welcome to visit our showroom &amp; office in Huidong, Guangdong. Book a visit on WhatsApp.</p></div>' +
    '<div class="scope-card scope-card-amazon">' + icon('globe', 'icon') + '<span class="amz-badge">On Amazon</span><h3>Retail on Amazon</h3><p>Need a small quantity fast? Our Amazon store sells hydrolysis-resistant PU leather for retail buyers.</p><a class="btn btn-primary btn-sm" href="https://www.amazon.com/dp/B0G6V586N1" target="_blank" rel="noopener">Shop on Amazon \u2192</a></div>';

  return '' +
    '<section class="hero">' + heroSlides +
      '<div class="container hero-inner">' +
        '<div class="hero-kicker">Premium Leather Materials</div>' +
        '<h1>Your Trusted Leather Sourcing Partner in China</h1>' +
        '<p class="lead">20 years of one-stop leather supply \u2014 genuine, PU, PVC, microfiber, bio-based and recycled eco materials. Low MOQ, verified quality and on-time delivery for global buyers.</p>' +
        '<div class="hero-cta">' +
          '<a class="btn btn-primary" href="#/sample">Request a Sample<small class="btn-note">Fee policy on inquiry</small></a>' +
          '<a class="btn btn-outline" href="' + waLink('Hi, I want to consult about leather products quotation.') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Chat on WhatsApp<small class="btn-note">Instant Reply</small></a>' +
        '</div>' +
        '<p class="hero-note">Samples available \u2014 genuine leather &amp; microfiber samples are charged, others advised on inquiry. Contact us first and we\u2019ll arrange the right sample.</p>' +
        '<div class="hero-contacts">' +
          '<span class="hc-item"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M9.5 4C5.36 4 2 6.9 2 10.47c0 1.93 1 3.64 2.56 4.77l-.65 2.4 2.45-1.23c.97.32 2 .5 3.1.5h.24c-.1-.38-.16-.78-.16-1.2 0-3.17 3.08-5.74 6.88-5.74h.24C15.45 6.21 12.83 4 9.5 4z"/></svg>WeChat <b class="copy-inline" data-copy="+8619037390132">+86 190 3739 0132</b> (tap to copy)</span>' +
          '<span class="hc-sep">\u00b7</span>' +
          '<span class="hc-item"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>Email <a class="hc-link" href="mailto:sales@pengye-leather.com">sales@pengye-leather.com</a></span>' +
          '<span class="hc-sep">\u00b7</span>' +
          '<span class="hc-item"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>Tel <a class="hc-link" href="tel:+8618948088736">+86 189 4808 8736</a></span>' +
        '</div>' +
        '<div class="hero-stats">' +
          '<div class="hero-stat"><div class="num"><em>20</em>+</div><div class="lbl">Years Experience</div></div>' +
          '<div class="hero-stat"><div class="num"><em>24</em>h</div><div class="lbl">Real-Time Quote</div></div>' +
          '<div class="hero-stat"><div class="num"><em>9</em></div><div class="lbl">Product Lines</div></div>' +
          '<div class="hero-stat"><div class="num"><em>100</em>%</div><div class="lbl">Pre-Shipment Inspection</div></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="scope-strip">' +
      '<div class="container scope-grid">' + scopeCards + '</div>' +
    '</section>' +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="value-prop">' +
          '<div class="lead">We solve all your leather sourcing headaches: no high MOQ, no limited styles, no quality issues, no delayed delivery.</div>' +
          '<div class="sub">One supplier, every leather you need \u2014 matched to your specification, budget and timeline.</div>' +
        '</div>' +
        '<div class="check-list">' +
          '<div class="item">' + ICONS.check + '<div><span>20 Years Proven Experience</span><small>Specialized leather sourcing since 2006.</small></div></div>' +
          '<div class="item">' + ICONS.check + '<div><span>Flexible MOQ \u2014 Real-Time</span><small>MOQ and pricing confirmed live with our sales team.</small></div></div>' +
          '<div class="item">' + ICONS.check + '<div><span>One-Stop Full Range Supply</span><small>All leather categories from a single partner.</small></div></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Why Pengye</span>' +
          '<h2>Why Choose Pengye Over Direct Factories?</h2>' +
          '<p>We sit between global buyers and China\u2019s best leather factories \u2014 so you get factory-direct prices with none of the sourcing headaches.</p>' +
        '</div>' +
        '<div class="benefit-grid">' + benefits + '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Our Range</span>' +
          '<h2>Full Leather Series</h2>' +
          '<p>Nine product lines, hundreds of textures and colors. The displayed styles are only a small part of our inventory.</p>' +
        '</div>' +
        '<div class="swatch-grid">' + swatches + '</div>' +
        '<div style="text-align:center;margin-top:44px;">' +
          '<a class="btn btn-outline-dark" href="#/products">Browse All Products</a>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Factory &amp; Quality</span>' +
          '<h2>Leather Factory Production Process</h2>' +
          '<p>From raw material to finished leather, strict quality control at every step.</p>' +
        '</div>' +
        '<div class="video-wrap">' +
          '<div class="video-cover" id="videoCover" role="button" tabindex="0" aria-label="Play leather factory production video">' +
            '<img src="images/main-banner3.jpg" alt="Pengye Leather factory production video" loading="lazy">' +
            '<span class="video-play-btn"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></span>' +
            '<span class="video-tag">Factory Tour Video</span>' +
          '</div>' +
        '</div>' +
        '<div style="margin-top:52px;">' +
          '<div style="text-align:center;margin-bottom:26px;"><h3 style="font-family:var(--font-display);font-size:22px;">Cooperative Factories &amp; Quality Certificates</h3></div>' +
          '<div class="media-grid">' + media + '</div>' +
          '<p style="text-align:center;margin-top:22px;color:var(--stone);font-size:14px;">Long-term stable cooperative leather factories, complete international test certificates to guarantee product quality.</p>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section-dark">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Track Record</span>' +
          '<h2>Proven Trust in Global Leather Sourcing</h2>' +
          '<p>Integrity, transparency and reliability \u2014 the way we have done business since 2006.</p>' +
        '</div>' +
        '<div class="trust-grid">' + trust + '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Who We Supply</span>' +
          '<h2>Trusted by Global Brands &amp; Platforms</h2>' +
          '<p>Our materials reach end products sold through leading global retail and e-commerce channels.</p>' +
        '</div>' +
        '<div class="logo-wall">' + partners + '</div>' +
      '</div>' +
    '</section>' +

    '<section class="amazon-band">' +
      '<div class="container amazon-band-inner">' +
        '<div class="amazon-band-badge">On Amazon</div>' +
        '<h2>Need a Small Quantity Fast? We\u2019re on Amazon.</h2>' +
        '<p>Our hydrolysis-resistant PU leather is available on Amazon for retail and small-quantity buyers. Wholesale buyers: same material, better price \u2014 request a real-time quote on WhatsApp.</p>' +
        '<div class="amazon-band-cta">' +
          '<a class="btn btn-primary" href="https://www.amazon.com/dp/B0G6V586N1" target="_blank" rel="noopener">Shop on Amazon \u2192</a>' +
          '<a class="btn btn-outline" href="' + waLink('Hi, I saw your Amazon listing. Please quote me the wholesale price for hydrolysis-resistant PU leather.') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Wholesale Quote on WhatsApp</a>' +
        '</div>' +
        '<p class="amazon-band-note">Only the hydrolysis-resistant PU leather is sold on Amazon (retail, small quantity). All other series on this website \u2014 genuine leather, PU, PVC, microfiber, bio-based, recycled \u2014 are wholesale only: order or request a quote here.</p>' +
      '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="cta-band">' +
          '<div><h2>Need a material that isn\u2019t listed?</h2><p>Tell us your specification \u2014 we\u2019ll match the right leather and send you samples (sample fee advised on inquiry).</p></div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:12px;">' +
            '<a class="btn btn-primary" href="#/sample">Request a Sample</a>' +
            '<a class="btn btn-outline" href="' + waLink('Hi, I\u2019m looking for a specific leather material. Can you help me match it?') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'WhatsApp Us</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
}

/* ---------- View: Products ---------- */

function renderProducts() {
  var swatches = PRODUCTS.map(function (p) {
    return '<a class="swatch-card" href="#/product/' + p.id + '">' +
      '<div class="swatch-media"><span class="swatch-no">' + p.no + '</span><img src="' + p.cover + '" alt="' + esc(T(p.name, p.zhName)) + '" loading="lazy"></div>' +
      '<div class="swatch-body"><h3>' + esc(T(p.name, p.zhName)) + '</h3><p>' + esc(T(p.tagline, p.zhTagline)) + '</p>' +
      '<div class="swatch-tags">' + p.applications.slice(0, 3).map(function (a, i) { return '<span>' + esc(LANG === 'zh' ? (p.zhApplications || [])[i] || a : a) + '</span>'; }).join('') + '</div>' +
      '<span class="swatch-more">' + T('View details', '\u67e5\u770b\u8be6\u60c5') + ' ' + ICONS.arrow + '</span></div></a>';
  }).join('');

  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / Products</div>' +
        '<span class="kicker">Product Range</span>' +
        '<h1>Full Leather Series</h1>' +
        '<p>Nine product lines from natural genuine leather to recycled eco materials. If none of these match your need, contact us \u2014 we customize textures, colors and formulas.</p>' +
      '</div>' +
    '</div>' +
    '<section class="section">' +
      '<div class="container">' +
        '<div class="swatch-grid">' + swatches + '</div>' +
      '</div>' +
    '</section>' +
    '<section class="section section-white section-pad-top">' +
      '<div class="container">' +
        '<div class="cta-band">' +
          '<div><h2>Looking for something specific?</h2><p>Tell us your application, texture or color requirement \u2014 we\u2019ll match the best material and send samples.</p></div>' +
          '<a class="btn btn-primary" href="#/sample">Request a Sample</a>' +
        '</div>' +
      '</div>' +
    '</section>';
}

/* ---------- View: Product detail ---------- */

var galleryState = { index: 0, images: [], type: '' };

function renderProduct(id) {
  var p = getProduct(id);
  if (!p) { location.hash = '#/products'; return ''; }

  galleryState.index = 0;
  galleryState.images = p.images;
  galleryState.type = p.id;

  var thumbs = p.images.map(function (src, i) {
    return '<img src="' + src + '" alt="' + esc(T(p.name, p.zhName)) + ' ' + (i + 1) + '" class="' + (i === 0 ? 'active' : '') + '" data-gi="' + i + '" loading="lazy">';
  }).join('');

  var feats = p.features.map(function (f, i) {
    var fz = LANG === 'zh' ? ((p.zhFeatures || [])[i] || f) : f;
    return '<li>' + ICONS.check + '<span>' + esc(fz) + '</span></li>';
  }).join('');

  var apps = p.applications.map(function (a, i) { return '<span>' + esc(LANG === 'zh' ? (p.zhApplications || [])[i] || a : a) + '</span>'; }).join('');

  var others = PRODUCTS.filter(function (x) { return x.id !== id; }).slice(0, 3);

  var unit = p.unit === 'ft' ? 'Chi' : 'Yard';
  var unitZh = p.unit === 'ft' ? '\u5c3a' : '\u7801';
  var moqNote = T(
    p.unit === 'ft'
    ? 'Genuine leather is priced per Chi. 1 hide \u2248 13\u201314 Chi. For reference: 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d). Quantity and MOQ confirmed in real time. Samples: genuine &amp; microfiber charged, others advised \u2014 contact us first.'
    : 'MOQ is flexible and confirmed in real time \u2014 samples: genuine &amp; microfiber charged, others advised. Contact us first.',
    p.unit === 'ft'
    ? '\u771f\u76ae\u6309\u5c3a\u8ba1\u4ef7\u3002\u6bcf\u5f20\u76ae\u7ea6 13\u201314 \u5c3a\u3002\u53c2\u8003\uff1a1 \u7801 = 0.9 \u7c73\u957f \u00d7 1.37 \u7c73\u5bbd\uff0854\u82f1\u5bf8\uff09\u3002\u6570\u91cf\u4e0e\u8d77\u8ba2\u91cf\u5b9e\u65f6\u786e\u8ba4\u3002\u6837\u54c1\uff1a\u771f\u76ae\u4e0e\u8d85\u7ea4\u6536\u8d39\uff0c\u5176\u4ed6\u54a8\u8be2\u786e\u8ba4 \u2014 \u8bf7\u5148\u8054\u7cfb\u6211\u4eec\u3002'
    : '\u8d77\u8ba2\u91cf\u7075\u6d3b\u4e14\u5b9e\u65f6\u786e\u8ba4 \u2014 \u6837\u54c1\uff1a\u771f\u76ae\u4e0e\u8d85\u7ea4\u6536\u8d39\uff0c\u5176\u4ed6\u54a8\u8be2\u786e\u8ba4\u3002\u8bf7\u5148\u8054\u7cfb\u6211\u4eec\u3002'
  );
  var unitNote = T(
    p.unit === 'ft'
    ? 'Unit: Chi \u2014 1 hide \u2248 13\u201314 Chi \u00b7 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d)'
    : 'Unit: Yard \u2014 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d), priced per Yard',
    p.unit === 'ft'
    ? '\u5355\u4f4d\uff1a\u5c3a \u2014 \u6bcf\u5f20\u76ae\u7ea6 13\u201314 \u5c3a \u00b7 1 \u7801 = 0.9 \u7c73\u957f \u00d7 1.37 \u7c73\u5bbd\uff0854\u82f1\u5bf8\uff09'
    : '\u5355\u4f4d\uff1a\u7801 \u2014 1 \u7801 = 0.9 \u7c73\u957f \u00d7 1.37 \u7c73\u5bbd\uff0854\u82f1\u5bf8\uff09\uff0c\u6309\u7801\u8ba1\u4ef7'
  );

  var gradeRow = '';
  if (p.subtypes && p.subtypes.length) {
    gradeRow = '<div class="spec-field full"><span class="spec-label">Leather Grade</span><input type="text" id="specGrade" placeholder="e.g. Full Grain, Split, Reconstituted" aria-label="Leather grade"></div>';
  }

  var propsField = p.unit === 'ft'
    ? ''
    : '<div class="spec-field full"><span class="spec-label">Special Properties / Other Requirements</span><input type="text" id="specProps" placeholder="e.g. High elasticity, hydrolysis resistant, scratch resistant" aria-label="Special properties"></div>';

  var specsPanel =
    '<div class="specs-panel">' +
      '<div class="specs-head">' + ICONS.check + '<div><h4>Material Specifications</h4><p>Type in what you need so we can quote accurately \u2014 fields are free text. Optional ones can be left blank.</p></div></div>' +
      '<div class="specs-grid">' +
        gradeRow +
        '<div class="spec-field"><span class="spec-label">Thickness (mm)</span><input type="text" id="specThickness" placeholder="e.g. 1.0 / 1.2 / 1.5" aria-label="Thickness in mm"></div>' +
        '<div class="spec-field"><span class="spec-label">Texture / Finish</span><input type="text" id="specTexture" placeholder="e.g. Smooth, Embossed, Grain, Nubuck" aria-label="Texture or finish"></div>' +
        '<div class="spec-field"><span class="spec-label">Eco-Friendly Requirement</span><input type="text" id="specEco" placeholder="e.g. Standard, Eco-friendly, REACH" aria-label="Eco requirement"></div>' +
        '<div class="spec-field"><span class="spec-label">Target Country</span><input type="text" id="specCountry" placeholder="e.g. USA / Germany / Brazil" aria-label="Target country"></div>' +
        '<div class="spec-field"><span class="spec-label">Backing Material</span><input type="text" id="specBacking" placeholder="e.g. Knit, Velvet, Non-woven, TC" aria-label="Backing material"></div>' +
        propsField +
        '<div class="spec-field full"><span class="spec-label">Testing Standard</span><p class="spec-note">Domestic (CN) standard by default. International tests (REACH, FDA, OEKO-TEX, EN71-3\u2026) are extra and must be requested <strong>in advance</strong> \u2014 mention your target country.</p></div>' +
      '</div>' +
    '</div>';

  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / <a href="#/products">Products</a> / ' + esc(T(p.name, p.zhName)) + '</div>' +
        '<span class="kicker">' + p.no + '</span>' +
        '<h1>' + esc(T(p.name, p.zhName)) + '</h1>' +
        '<p>' + esc(T(p.tagline, p.zhTagline)) + '</p>' +
      '</div>' +
    '</div>' +
    '<section class="section">' +
      '<div class="container">' +
        '<div class="detail-layout">' +
          '<div class="gallery">' +
            '<div class="gallery-main" id="galleryMain">' +
              '<img id="galleryImg" src="' + p.images[0] + '" alt="' + esc(T(p.name, p.zhName)) + '" data-lightbox="' + p.images[0] + '">' +
              '<button class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Previous image">' + ICONS.chevL + '</button>' +
              '<button class="gallery-arrow gallery-next" id="galleryNext" aria-label="Next image">' + ICONS.chevR + '</button>' +
            '</div>' +
            '<div class="gallery-thumbs" id="galleryThumbs">' + thumbs + '</div>' +
          '</div>' +
          '<aside class="detail-info">' +
            '<div class="no">' + p.no + '</div>' +
            '<h2>' + esc(T(p.name, p.zhName)) + '</h2>' +
            '<p class="tagline">' + esc(T(p.tagline, p.zhTagline)) + '</p>' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Real-time price.</strong> Material prices move with the market \u2014 no fixed list price. Share your spec &amp; quantity and we quote today.</span></div>' +
            '<p class="body">' + esc(LANG === 'zh' ? (p.zhDesc || p.desc) : p.desc) + '</p>' +
            '<h4>Key Features</h4>' +
            '<ul class="feat-list">' + feats + '</ul>' +
            '<h4>Typical Applications</h4>' +
            '<div class="app-list">' + apps + '</div>' +
            specsPanel +
            '<div class="order-row">' +
              '<div class="order-qty-field">' +
                '<label>' + T('Quantity (' + unit + ')', '\u6570\u91cf (' + unitZh + ')') + '</label>' +
                '<p class="unit-note">' + unitNote + '</p>' +
                '<div class="cart-qty">' +
                  '<button type="button" class="oq-dec" aria-label="Decrease quantity">\u2212</button>' +
                  '<input type="text" inputmode="numeric" class="oq-input" value="" placeholder="e.g. 300" aria-label="Quantity in ' + unit + '">' +
                  '<button type="button" class="oq-inc" aria-label="Increase quantity">+</button>' +
                  '<span class="unit">' + (LANG === 'zh' ? unitZh : unit) + '</span>' +
                '</div>' +
              '</div>' +
              '<a class="btn btn-primary" id="addToOrderBtn">' + ICONS.box + T('Add to Order', '\u52a0\u5165\u8ba2\u5355') + '</a>' +
            '</div>' +
            '<p class="form-hint">' + moqNote + '</p>' +
            '<div class="detail-cta">' +
              '<a class="btn btn-outline-dark" href="#/sample">' + T('Request a Sample', '\u7533\u8bf7\u6837\u54c1') + '</a>' +
              '<a class="btn btn-outline-dark" href="' + waLink('Hi, I\u2019m interested in ' + p.name + ' (' + p.no + '). Could you send details and a quotation?') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + T('Ask on WhatsApp', 'WhatsApp \u54a8\u8be2') + '</a>' +
            '</div>' +
          '</aside>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<section class="section section-white section-pad-top">' +
      '<div class="container">' +
        '<div class="section-head left">' +
          '<span class="kicker">Keep Exploring</span>' +
          '<h2>Other Leather Series</h2>' +
        '</div>' +
        '<div class="swatch-grid">' + others.map(function (o) {
          return '<a class="swatch-card" href="#/product/' + o.id + '">' +
            '<div class="swatch-media"><span class="swatch-no">' + o.no + '</span><img src="' + o.cover + '" alt="' + esc(T(o.name, o.zhName)) + '" loading="lazy"></div>' +
            '<div class="swatch-body"><h3>' + esc(T(o.name, o.zhName)) + '</h3><p>' + esc(T(o.tagline, o.zhTagline)) + '</p><span class="swatch-more">' + T('View details', '\u67e5\u770b\u8be6\u60c5') + ' ' + ICONS.arrow + '</span></div></a>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';
}

function setGalleryImage(i) {
  var imgs = galleryState.images;
  if (!imgs.length) return;
  if (i < 0) i = imgs.length - 1;
  if (i > imgs.length - 1) i = 0;
  galleryState.index = i;
  var main = document.getElementById('galleryImg');
  if (main) {
    main.src = imgs[i];
    main.setAttribute('data-lightbox', imgs[i]);
  }
  var thumbs = document.querySelectorAll('#galleryThumbs img');
  for (var t = 0; t < thumbs.length; t++) {
    thumbs[t].classList.toggle('active', t === i);
  }
  bindLightboxTargets();
}

/* ---------- View: About ---------- */

function renderAbout() {
  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / About</div>' +
        '<span class="kicker">About Us</span>' +
        '<h1>20 Years of Trusted Leather Sourcing</h1>' +
        '<p>Pengye Leather connects global buyers with China\u2019s best leather factories \u2014 with integrity, transparency and quality you can verify.</p>' +
      '</div>' +
    '</div>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="about-grid">' +
          '<div class="media"><img src="images/main-banner1.jpg" alt="Pengye Leather production" loading="lazy"></div>' +
          '<div class="about-copy">' +
            '<h2>A Sourcing Partner, Not Just Another Supplier</h2>' +
            '<p class="lead">Since 2006 we have specialized in leather sourcing \u2014 with a sharp focus on <strong>shoe materials</strong>. Uppers, linings, insoles: the material list of a modern shoe factory is our core business.</p>' +
            '<p>As a veteran-owned company, we run our business with military discipline and integrity \u2014 no hidden fees, no quality cutting, no broken promises. We are an integrated sourcing hub: instead of dealing with dozens of factories directly, you work with one partner who knows the best source for every material. Need sofa or automotive leather? We source those too \u2014 just mention your application when you inquire.</p>' +
            '<p>Our model is simple: we solve all your leather sourcing headaches \u2014 no high MOQ, no limited styles, no quality issues, no delayed delivery. We share daily production and quality-inspection videos so you can see the progress and quality clearly, anytime.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">By the Numbers</span>' +
          '<h2>Experience You Can Measure</h2>' +
        '</div>' +
        '<div class="num-row">' +
          '<div class="num-cell"><div class="num"><em>20</em>+</div><div class="lbl">Years in Leather Sourcing</div></div>' +
          '<div class="num-cell"><div class="num"><em>24</em>h</div><div class="lbl">Real-Time Quote</div></div>' +
          '<div class="num-cell"><div class="num"><em>17</em></div><div class="lbl">Utility Patents</div></div>' +
          '<div class="num-cell"><div class="num"><em>23</em></div><div class="lbl">Invention Patents</div></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Our Values</span>' +
          '<h2>What We Stand For</h2>' +
        '</div>' +
        '<div class="value-grid">' +
          '<div class="value-card">' + icon('shield', 'icon') + '<h3>Integrity First</h3><p>Veteran discipline in every order \u2014 honest pricing, honest materials, honest timelines.</p></div>' +
          '<div class="value-card">' + icon('video', 'icon') + '<h3>Full Transparency</h3><p>Daily production and inspection videos shared with you, so quality is always visible.</p></div>' +
          '<div class="value-card">' + icon('globe', 'icon') + '<h3>Global Reliability</h3><p>Stable stock access, competitive prices and on-time delivery for buyers worldwide.</p></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="cta-band">' +
          '<div><h2>Let\u2019s build your material plan together</h2><p>Tell us what you need \u2014 we\u2019ll match the right leather and arrange samples (fee advised on inquiry).</p></div>' +
          '<a class="btn btn-primary" href="#/contact">Contact Us</a>' +
        '</div>' +
      '</div>' +
    '</section>';
}

/* ---------- View: Certifications ---------- */

function renderCertifications() {
  var ecoRows = CERTS.eco.map(function (r) {
    return '<tr><td>' + esc(r[0]) + '</td><td class="val">' + esc(r[1]) + '</td></tr>';
  }).join('');

  var ctiRows = CERTS.cti.map(function (r) {
    return '<tr><td>' + esc(r[0]) + '</td><td class="val">' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td><td>' + esc(r[3]) + '</td></tr>';
  }).join('');

  var fdaRows = CERTS.fda.map(function (r) {
    return '<tr><td>' + esc(r[0]) + '</td><td class="val">' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>';
  }).join('');

  var partners = PARTNERS.map(function (p) { return '<div class="logo-cell">' + esc(p) + '</div>'; }).join('');

  var descEcoRows = TEST_DESC.eco.map(function (r) {
    return '<tr><td>' + esc(r[0]) + '</td><td class="rv">' + esc(r[1]) + '</td></tr>';
  }).join('');
  var descPhysRows = TEST_DESC.phys.map(function (r) {
    return '<tr><td>' + esc(r[0]) + '</td><td class="rv">' + esc(r[1]) + '</td></tr>';
  }).join('');
  var descNotesHtml = TEST_DESC.notes.map(function (n) {
    return '<li>' + esc(n) + '</li>';
  }).join('');
  var descSheet =
    '<section class="section">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Product Description Sheet</span>' +
          '<h2>Environmental &amp; Physical Test Results</h2>' +
          '<p>Our standard product description sheet \u2014 environmental and physical test values as supplied on inquiry.</p>' +
        '</div>' +
        '<div class="desc-sheet">' +
          '<div class="desc-sheet-img">' +
            '<img src="images/desc-sheet.jpg" alt="Pengye Leather product description sheet" data-lightbox="images/desc-sheet.jpg">' +
            '<p class="cert-note">Full description sheet as printed \u2014 click to enlarge.</p>' +
          '</div>' +
          '<div class="desc-sheet-info">' +
            '<div class="desc-cols">' +
              '<div class="desc-col"><h5>ECO-Friendly Standards</h5><table class="desc-table"><tbody>' + descEcoRows + '</tbody></table></div>' +
              '<div class="desc-col"><h5>Physical Property</h5><table class="desc-table"><tbody>' + descPhysRows + '</tbody></table></div>' +
            '</div>' +
            '<p class="desc-disclaimer">' + esc(TEST_DESC.disclaimer) + '</p>' +
            '<details class="warm-wrap"><summary>Warm Notice (' + TEST_DESC.notes.length + ' items)</summary><ol class="warm-list">' + descNotesHtml + '</ol></details>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / Certifications</div>' +
        '<span class="kicker">Quality &amp; Compliance</span>' +
        '<h1>Certifications &amp; Patents</h1>' +
        '<p>Independent test reports, international compliance standards and 40+ patents \u2014 proof of quality you can check before you order.</p>' +
      '</div>' +
    '</div>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Test Reports</span>' +
          '<h2>Environmental &amp; Safety Testing</h2>' +
          '<p>Materials are tested against international standards for heavy metals, formaldehyde, phthalates and more.</p>' +
        '</div>' +
        '<div class="cert-grid">' +
          '<div class="cert-card">' +
            '<h3>Eco Material Standards</h3>' +
            '<div class="cert-meta">General environmental limits for our material range</div>' +
            '<table class="cert-table"><thead><tr><th>Testing Item</th><th>Limit / Result</th></tr></thead><tbody>' + ecoRows + '</tbody></table>' +
            '<p class="cert-note">Test values are reference data from our production batches. Material standards may vary by time, process and batch \u2014 please confirm requirements in writing.</p>' +
          '</div>' +
          '<div class="cert-card">' +
            '<h3>CTI Test Report</h3>' +
            '<div class="cert-meta">China Testing &amp; Inspection \u2014 report A2240687318101001C (red artificial leather)</div>' +
            '<table class="cert-table"><thead><tr><th>Testing Item</th><th>Result</th><th>Detection Limit</th><th>Limit</th></tr></thead><tbody>' + ctiRows + '</tbody></table>' +
            '<p class="cert-note">N.D. = not detected (below detection limit). Full report available on request.</p>' +
          '</div>' +
          '<div class="cert-card">' +
            '<h3>FDA 21 CFR 177.2600</h3>' +
            '<div class="cert-meta">CTI report A2250347353101001C \u2014 rubber / silicone articles for repeated use</div>' +
            '<table class="cert-table"><thead><tr><th>Test (reflux temperature)</th><th>Reference Limit</th><th>Unit</th></tr></thead><tbody>' + fdaRows + '</tbody></table>' +
            '<p class="cert-note">Extractable matter limits for articles intended for repeated use, in compliance with US FDA requirements.</p>' +
          '</div>' +
          '<div class="cert-card">' +
            '<h3>Production &amp; Traceability</h3>' +
            '<div class="cert-meta">Full-chain quality control from raw material to finished leather</div>' +
            '<ul class="feat-list">' +
              '<li>' + ICONS.check + '<span>100% pre-shipment inspection on every order</span></li>' +
              '<li>' + ICONS.check + '<span>Daily production and QC videos shared with buyers</span></li>' +
              '<li>' + ICONS.check + '<span>Long-term cooperation with certified partner factories</span></li>' +
              '<li>' + ICONS.check + '<span>BSCI audited supply chain partners</span></li>' +
            '</ul>' +
            '<p class="cert-note">Ask us for the latest test reports for the specific material and batch you are ordering.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    descSheet +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Intellectual Property</span>' +
          '<h2>Patents &amp; Innovation</h2>' +
          '<p>40+ patents across material formulations and production processes.</p>' +
        '</div>' +
        '<div class="patent-row">' +
          '<div class="patent-card">' + icon('award', 'icon') + '<div><div class="num">17</div><div class="lbl">Utility Model Patents</div></div></div>' +
          '<div class="patent-card">' + icon('award', 'icon') + '<div><div class="num">23</div><div class="lbl">Invention Patents</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">Our Partners</span>' +
          '<h2>Global Cooperation Network</h2>' +
          '<p>Our materials reach end products sold through leading global retail and e-commerce channels.</p>' +
        '</div>' +
        '<div class="logo-wall">' + partners + '</div>' +
      '</div>' +
    '</section>';
}

/* ---------- View: Contact ---------- */

function renderContact() {
  var typeOptions = PRODUCTS.map(function (p) {
    return '<option value="' + esc(p.name) + '">' + esc(p.name) + '</option>';
  }).join('');

  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / Contact</div>' +
        '<span class="kicker">Contact Us</span>' +
        '<h1>Request a Sample or Quotation</h1>' +
        '<p>Tell us what you need and we\u2019ll reply within one business day. Samples available \u2014 genuine leather &amp; microfiber charged, other materials advised on inquiry. Contact us first.</p>' +
      '</div>' +
    '</div>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="contact-layout">' +
          '<div>' +
            '<div class="contact-card">' + icon('pin', 'icon') +
              '<div><h3>Factory, Office &amp; Showroom</h3><p>' + esc(CONTACT.address) + '</p><p class="card-note">Buyers and partners are welcome to visit \u2014 book a visit on WhatsApp and we\u2019ll be ready for you.</p></div>' +
            '</div>' +
            '<div class="contact-card">' + icon('mail', 'icon') +
              '<div><h3>Email</h3><a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a></div>' +
            '</div>' +
            '<div class="contact-card">' + icon('phone', 'icon') +
              '<div><h3>Phone / WhatsApp</h3><a href="tel:+8618948088736">' + CONTACT.phone + '</a></div>' +
            '</div>' +
            '<div class="contact-card">' + ICONS.whatsappLg +
              '<div><h3>WhatsApp</h3><a href="' + waLink('Hi, I want to consult about leather products.') + '" target="_blank" rel="noopener">Chat with us instantly</a></div>' +
            '</div>' +
            '<div class="contact-card">' + icon('globe', 'icon') +
              '<div><h3>Retail on Amazon</h3><p>Need a small quantity? Our Amazon store sells hydrolysis-resistant PU leather for retail buyers.</p><a href="https://www.amazon.com/dp/B0G6V586N1" target="_blank" rel="noopener">Shop on Amazon \u2192</a></div>' +
            '</div>' +
            '<div class="contact-card wechat-card">' + ICONS.wechatLg +
              '<div style="flex:1;"><h3>WeChat</h3>' +
              '<div class="wechat-num">+86 190 3739 0132</div>' +
              '<button type="button" class="copy-btn" id="copyWechatBtn">Copy WeChat Number</button></div>' +
            '</div>' +
          '</div>' +

          '<div class="form-card">' +
            '<h3>Send Your Inquiry</h3>' +
            '<p class="form-sub">Fields marked * are required. Your inquiry goes directly to our sales team.</p>' +
            '<form id="inquiryForm">' +
              '<div class="form-row"><label for="fName">Full Name *</label><input id="fName" name="name" type="text" required placeholder="Your full name"></div>' +
              '<div class="form-row"><label for="fCompany">Company</label><input id="fCompany" name="company" type="text" placeholder="Your company name"></div>' +
              '<div class="form-row"><label for="fEmail">Email *</label><input id="fEmail" name="email" type="email" required placeholder="Your email"></div>' +
              '<div class="form-row"><label for="fPhone">Phone / WhatsApp</label><input id="fPhone" name="phone" type="text" placeholder="Your phone number"></div>' +
              '<div class="form-row"><label for="fType">Leather Type *</label><select id="fType" name="leatherType" required><option value="">Select a leather category</option>' + typeOptions + '<option value="Custom / Other">Custom / Other</option></select></div>' +
              '<div class="form-row"><label for="fQty">Estimated Quantity</label><input id="fQty" name="quantity" type="text" placeholder="e.g. 500 Chi genuine / 300 Yard PU"></div>' +
              '<div class="form-row"><label for="fDetails">Requirements</label><textarea id="fDetails" name="details" placeholder="Color, texture, thickness, application and any special requirements"></textarea></div>' +
              '<div class="form-actions">' +
                '<button type="submit" class="btn btn-primary">Send by Email</button>' +
                '<button type="button" class="btn btn-outline-dark" id="waSubmit">' + ICONS.whatsapp + 'Send via WhatsApp</button>' +
              '</div>' +
              '<p class="form-hint" id="formHint">Prefer instant chat? The WhatsApp button opens a pre-filled message to our sales line.</p>' +
            '</form>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="section section-white">' +
      '<div class="container">' +
        '<div class="section-head">' +
          '<span class="kicker">FAQ</span>' +
          '<h2>Frequently Asked Questions</h2>' +
        '</div>' +
        '<div class="faq-list">' +
          faqItem('What is your minimum order quantity (MOQ)?', 'MOQ is flexible \u2014 confirmed in real time based on current stock and market conditions. Genuine leather is priced per Chi; synthetic leather per Yard. Samples are available \u2014 fee policy advised on inquiry.'),
          faqItem('How are materials priced and measured?', 'Genuine leather is priced per Chi; synthetic leather is priced per Yard. For reference: 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d), and an average genuine hide is about 13\u201314 Chi. Your quotation always states the unit clearly.'),
          faqItem('How is genuine leather classified?', 'Genuine leather comes in three grades: full grain, split (second layer) and reconstituted (bonded). We supply all three \u2014 tell us the grade, thickness and finish you need.'),
          faqItem('Which testing standards do you use?', 'Domestic (CN) standard by default. International tests such as REACH, FDA, OEKO-TEX and EN71-3 are available \u2014 please request them in advance and tell us your target country.'),
          faqItem('How are samples handled and priced?', 'Samples for genuine leather and microfiber are charged (material cost). For other materials we\u2019ll advise whether a sample fee applies \u2014 please contact us first so we can arrange the right sample and quote the shipping.'),
          faqItem('How is the international freight charged?', 'Freight is charged at the real-time carrier rate (DHL, FedEx, UPS, sea freight, etc.) and confirmed with you before payment \u2014 no hidden fees. If you have your own carrier or forwarder, we can prepare the goods for your nominated pickup instead.'),
          faqItem('How do I pay?', 'Send your order first \u2014 we reply with a real-time quotation within 24 hours. Once you approve the material and freight quote, we arrange the payment method for you based on order size: large orders via T/T bank transfer (corporate account, standard for international trade); small orders via Tenpay Global (Tencent\u2019s licensed cross-border payment, settles to CNY) or PayPal. Every payment is matched to your order with a proforma invoice and full documents \u2014 clean and traceable for customs and banks.'),
          faqItem('How long is the delivery time?', 'Lead time depends on stock and your specifications \u2014 we confirm the exact timing in the quotation for every order, so there are no surprises.'),
          faqItem('Can I get production videos before shipping?', 'Yes. We share daily production and quality-inspection videos so you can see the progress and quality of your order anytime.'),
          faqItem('Do you support custom colors, textures and formulas?', 'Yes. Special textures, colors, thickness, backing materials and properties (high elasticity, high scratch resistance, hydrolysis resistance\u2026) can be developed to your specification.'),
          faqItem('Do you supply sofa or automotive leather?', 'Yes \u2014 we can source upholstery-grade leather for sofas and car interiors through our factory network. Please mention your application when you inquire.'),
          faqItem('Can I buy small quantities online?', 'Yes. Our Amazon retail store sells hydrolysis-resistant PU leather for retail and small-quantity buyers \u2014 shop directly at https://www.amazon.com/dp/B0G6V586N1 (hydrolysis-resistant PU leather).'),
          faqItem('Do you provide test reports and certificates?', 'Yes. We provide environmental and safety test reports (CTI) covering heavy metals, formaldehyde, phthalates, FDA 21 CFR 177.2600 and more. See our Certifications page.'),
          faqItem('Can I contact you on WeChat?', 'Yes, our WeChat number is +86 190 3739 0132 \u2014 tap the copy button on this page to save it.'),
        '</div>' +
      '</div>' +
    '</section>';
}

function faqItem(q, a) {
  return '<div class="faq-item" data-faq>' +
    '<button type="button" class="faq-q" aria-expanded="false">' + esc(q) +
      '<span class="faq-ic"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></span>' +
    '</button>' +
    '<div class="faq-a"><div class="faq-a-inner">' + esc(a) + '</div></div>' +
  '</div>';
}

/* ---------- Sample request page ---------- */

var SAMPLE_MATS = [
  'Water-based PU', 'Eco-friendly PU', 'Standard PU', 'PVC',
  'Bio-based PU', 'Microfiber', 'Specialty / Functional', 'Recycled PET'
];

var SampleUI = {
  toggle: function (v) {
    var ft = document.getElementById('sampleFtFields');
    var yd = document.getElementById('sampleYdFields');
    if (!ft || !yd) return;
    ft.classList.toggle('hidden', v !== 'genuine');
    yd.classList.toggle('hidden', v !== 'synthetic');
  }
};

function renderSample() {
  var matOpts = SAMPLE_MATS.map(function (m) {
    return '<option value="' + esc(m) + '">' + esc(m) + '</option>';
  }).join('');
  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / Request a Sample</div>' +
        '<span class="kicker">Sample Service</span>' +
        '<h1>Request a Sample</h1>' +
        '<p>Tell us which material and what you need \u2014 we confirm the sample fee and shipping with you before sending.</p>' +
      '</div>' +
    '</div>' +
    '<section class="section">' +
      '<div class="container">' +
        '<div class="detail-layout">' +
          '<div class="form-card">' +
            '<h3>Sample Request Form</h3>' +
            '<p class="form-sub">Choose the material category first \u2014 genuine leather and other leathers are filled in differently.</p>' +
            '<form id="sampleForm">' +

              '<div class="sample-cats">' +
                '<label class="radio-card" id="catFt">' +
                  '<input type="radio" name="sampleCat" value="genuine" checked onchange="SampleUI.toggle(this.value)">' +
                  '<div><h4>Genuine Leather</h4><p>Priced per Chi. Fill in grade, thickness, texture \u2014 1 hide \u2248 13\u201314 Chi.</p></div>' +
                '</label>' +
                '<label class="radio-card" id="catYd">' +
                  '<input type="radio" name="sampleCat" value="synthetic" onchange="SampleUI.toggle(this.value)">' +
                  '<div><h4>Synthetic &amp; Other Leather</h4><p>Priced per Yard. PU, PVC, microfiber, bio-based, recycled \u2014 1 Yard = 0.9 m \u00d7 1.37 m.</p></div>' +
                '</label>' +
              '</div>' +

              '<div class="form-row"><label for="sName">Name *</label><input id="sName" type="text" required placeholder="Your name"></div>' +
              '<div class="form-row"><label for="sCompany">Company (optional)</label><input id="sCompany" type="text" placeholder="Your company"></div>' +
              '<div class="form-row"><label for="sEmail">Email *</label><input id="sEmail" type="email" required placeholder="you@company.com"></div>' +
              '<div class="form-row"><label for="sPhone">Phone / WhatsApp</label><input id="sPhone" type="text" placeholder="With country code"></div>' +
              '<div class="form-row"><label for="sCountry">Your Country</label><input id="sCountry" type="text" placeholder="Destination country"></div>' +

              '<div class="specs-panel" id="sampleFtFields">' +
                '<div class="specs-head">' + ICONS.check + '<div><h4>Genuine Leather Specs</h4><p>Free text \u2014 type what you need. No fixed choices.</p></div></div>' +
                '<div class="specs-grid">' +
                  '<div class="spec-field"><span class="spec-label">Leather Grade</span><input type="text" id="sGrade" placeholder="e.g. Full Grain, Split, Reconstituted"></div>' +
                  '<div class="spec-field"><span class="spec-label">Thickness (mm)</span><input type="text" id="sThickness" placeholder="e.g. 1.2 / 1.5 / 2.0"></div>' +
                  '<div class="spec-field"><span class="spec-label">Texture / Finish</span><input type="text" id="sTexture" placeholder="e.g. Smooth, Embossed, Nubuck"></div>' +
                  '<div class="spec-field"><span class="spec-label">Color / Article No.</span><input type="text" id="sColor" placeholder="Color name or article number"></div>' +
                  '<div class="spec-field"><span class="spec-label">Quantity (Chi)</span><input type="text" id="sQty" placeholder="e.g. 50 Chi \u2014 flexible, confirm with us"></div>' +
                  '<div class="spec-field"><span class="spec-label">Eco-Friendly Requirement</span><input type="text" id="sEco" placeholder="e.g. Standard, Eco, REACH"></div>' +
                  '<div class="spec-field"><span class="spec-label">Backing Material</span><input type="text" id="sBacking" placeholder="e.g. Knit, Velvet, Non-woven"></div>' +
                '</div>' +
              '</div>' +

              '<div class="specs-panel hidden" id="sampleYdFields">' +
                '<div class="specs-head">' + ICONS.check + '<div><h4>Synthetic Leather Specs</h4><p>Free text \u2014 type what you need. No fixed choices.</p></div></div>' +
                '<div class="specs-grid">' +
                  '<div class="spec-field full"><span class="spec-label">Material Type</span><select id="sMat"><option value="">Select material</option>' + matOpts + '</select></div>' +
                  '<div class="spec-field"><span class="spec-label">Thickness (mm)</span><input type="text" id="sThickness2" placeholder="e.g. 0.8 / 1.0 / 1.2"></div>' +
                  '<div class="spec-field"><span class="spec-label">Texture / Finish</span><input type="text" id="sTexture2" placeholder="e.g. Smooth, Embossed, Nappa"></div>' +
                  '<div class="spec-field"><span class="spec-label">Color / Article No.</span><input type="text" id="sColor2" placeholder="Color name or article number"></div>' +
                  '<div class="spec-field"><span class="spec-label">Quantity (Yard)</span><input type="text" id="sQty2" placeholder="e.g. 50 Yard \u2014 flexible, confirm with us"></div>' +
                  '<div class="spec-field full"><span class="spec-label">Special Properties / Other Requirements</span><input type="text" id="sProps" placeholder="e.g. High elasticity, hydrolysis resistant, scratch resistant"></div>' +
                  '<div class="spec-field"><span class="spec-label">Eco-Friendly Requirement</span><input type="text" id="sEco2" placeholder="e.g. Standard, Eco, REACH"></div>' +
                  '<div class="spec-field"><span class="spec-label">Backing Material</span><input type="text" id="sBacking2" placeholder="e.g. Knit, Velvet, Non-woven"></div>' +
                '</div>' +
              '</div>' +

              '<div class="form-row"><label for="sNotes">Anything else (testing, target price, documents)</label><textarea id="sNotes" placeholder="Testing standard, target price, certificates you need, etc."></textarea></div>' +
              '<p class="spec-note" style="margin-top:12px;">Sample fee: genuine leather &amp; microfiber samples are charged (material cost). For other materials we\u2019ll advise on inquiry \u2014 we confirm the fee and shipping with you before sending.</p>' +

              '<div class="form-actions">' +
                '<button type="submit" class="btn btn-primary" id="sWaBtn">' + ICONS.whatsapp + 'Send via WhatsApp</button>' +
                '<button type="button" class="btn btn-outline-dark" id="sMailBtn">Send via Email</button>' +
                '<button type="button" class="btn btn-outline-dark" id="sCopyBtn">Copy Request</button>' +
              '</div>' +
              '<p class="form-hint">Email button opens <strong>your own</strong> email app with the request addressed to <strong>sales@pengye-leather.com</strong> \u2014 just press send. Or tap Copy Request and paste it into any email or chat.</p>' +
            '</form>' +
          '</div>' +

          '<aside class="detail-info">' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Sample fee policy.</strong> Genuine leather &amp; microfiber samples are charged (material cost); for other materials we advise on inquiry. Contact us first \u2014 we\u2019ll arrange the right sample and confirm shipping.</span></div>' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Real-time quote.</strong> Material prices and freight move with the market \u2014 both are confirmed with you before we send samples or take payment.</span></div>' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Testing.</strong> Domestic (CN) standard by default. International tests (REACH, FDA, OEKO-TEX, EN71-3\u2026) are extra \u2014 request in advance and tell us your target country.</span></div>' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Receive by email.</strong> Sample requests and orders land in our inbox at <a href="mailto:sales@pengye-leather.com">sales@pengye-leather.com</a> \u2014 or chat with us on WhatsApp.</span></div>' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Units.</strong> Genuine leather is priced per Chi; synthetic leather per Yard. 1 Yard = 0.9 m long \u00d7 1.37 m wide; 1 hide \u2248 13\u201314 Chi.</span></div>' +
          '</aside>' +
        '</div>' +
      '</div>' +
    '</section>';
}

function collectSample() {
  var catEl = document.querySelector('input[name="sampleCat"]:checked');
  var cat = catEl ? catEl.value : 'genuine';
  var f = function (id) { var el = document.getElementById(id); return el ? el.value : ''; };
  var g = cat === 'genuine';
  return {
    cat: cat,
    name: f('sName'), company: f('sCompany'), email: f('sEmail'), phone: f('sPhone'), country: f('sCountry'),
    grade: g ? f('sGrade') : '',
    thickness: g ? f('sThickness') : f('sThickness2'),
    texture: g ? f('sTexture') : f('sTexture2'),
    color: g ? f('sColor') : f('sColor2'),
    qty: g ? f('sQty') : f('sQty2'),
    mat: g ? '' : f('sMat'),
    props: g ? '' : f('sProps'),
    eco: g ? f('sEco') : f('sEco2'),
    backing: g ? f('sBacking') : f('sBacking2'),
    notes: f('sNotes')
  };
}

function buildSampleMessage(d) {
  var L = [];
  L.push('\u2605 SAMPLE REQUEST \u2014 PENGYE LEATHER \u2605');
  L.push('From: ' + (d.name || '-') + (d.company ? ' (' + d.company + ')' : ''));
  L.push('Email: ' + (d.email || '-') + ' | Phone/WA: ' + (d.phone || '-'));
  if (d.country) L.push('Country: ' + d.country);
  L.push('Category: ' + (d.cat === 'genuine' ? 'Genuine Leather (priced per Chi)' : 'Synthetic / Other Leather (priced per Yard)'));
  if (d.cat === 'genuine') {
    if (d.grade) L.push('Grade: ' + d.grade);
    if (d.thickness) L.push('Thickness: ' + d.thickness + ' mm');
    if (d.texture) L.push('Texture / Finish: ' + d.texture);
    if (d.color) L.push('Color / Article: ' + d.color);
    if (d.qty) L.push('Quantity: ' + d.qty + ' Chi');
    if (d.eco) L.push('Eco: ' + d.eco);
    if (d.backing) L.push('Backing: ' + d.backing);
  } else {
    if (d.mat) L.push('Material: ' + d.mat);
    if (d.thickness) L.push('Thickness: ' + d.thickness + ' mm');
    if (d.texture) L.push('Texture / Finish: ' + d.texture);
    if (d.color) L.push('Color / Article: ' + d.color);
    if (d.qty) L.push('Quantity: ' + d.qty + ' Yard');
    if (d.props) L.push('Properties: ' + d.props);
    if (d.eco) L.push('Eco: ' + d.eco);
    if (d.backing) L.push('Backing: ' + d.backing);
  }
  if (d.notes) L.push('Notes: ' + d.notes);
  L.push('Sample fee & shipping to be confirmed by Pengye before sending.');
  return L.join('\n');
}

function bindSampleForm() {
  var form = document.getElementById('sampleForm');
  var wa = document.getElementById('sWaBtn');
  var mail = document.getElementById('sMailBtn');
  if (!form) return;
  form.onsubmit = function (e) {
    e.preventDefault();
    var d = collectSample();
    if (!d.name || !d.email) { showToast('Please fill in your name and email.'); return; }
    var msg = buildSampleMessage(d);
    var subject = 'Sample Request \u2014 ' + (d.name || '') + (d.cat === 'genuine' ? ' (Genuine Leather)' : ' (Synthetic Leather)');
    window.open('https://wa.me/8618948088736?text=' + encodeURIComponent(msg), '_blank');
    showToast('Sample request opened in WhatsApp.');
  };
  if (mail) mail.onclick = function () {
    var d = collectSample();
    if (!d.name || !d.email) { showToast('Please fill in your name and email.'); return; }
    var msg = buildSampleMessage(d);
    var subject = 'Sample Request \u2014 ' + (d.name || '') + (d.cat === 'genuine' ? ' (Genuine Leather)' : ' (Synthetic Leather)');
    window.location.href = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(msg);
    showToast('Sample request prepared in your email app.');
  };
  var copy = document.getElementById('sCopyBtn');
  if (copy) copy.onclick = function () {
    var d = collectSample();
    if (!d.name || !d.email) { showToast('Please fill in your name and email.'); return; }
    copyText(buildSampleMessage(d));
    showToast('Sample request copied \u2014 paste it into any email or chat app.');
  };
}

/* ---------- Router ---------- */

function renderTrack() {
  var carriers = [
    { n: 'Auto Detect (recommended)', c: '' },
    { n: 'DHL', c: 'dhl' },
    { n: 'FedEx', c: 'fedex' },
    { n: 'UPS', c: 'ups' },
    { n: 'TNT', c: 'tnt' },
    { n: 'EMS', c: 'ems' },
    { n: 'China Post', c: 'chinapost' },
    { n: 'ePacket', c: 'epacket' },
    { n: 'SF Express', c: 'sf-express' },
    { n: 'USPS', c: 'usps' },
    { n: 'Other / not sure', c: '' }
  ].map(function (x) {
    return '<option value="' + x.c + '">' + x.n + '</option>';
  }).join('');

  return '' +
    '<div class="page-head">' +
      '<div class="container">' +
        '<div class="crumb"><a href="#/home">Home</a> / Track Order</div>' +
        '<span class="kicker">Order Tracking</span>' +
        '<h1>Track Your Shipment in Real Time</h1>' +
        '<p>Once your order ships, we send your tracking number and carrier by WhatsApp and email. Enter it below to follow your shipment live \u2014 status updates come straight from the carrier in real time.</p>' +
      '</div>' +
    '</div>' +

    '<section class="section">' +
      '<div class="container">' +
        '<div class="track-box">' +
          '<form class="track-form" id="trackForm" onsubmit="return trackShip();">' +
            '<div class="track-field">' +
              '<label class="spec-label" for="trackNo">Tracking Number *</label>' +
              '<input type="text" id="trackNo" name="trackNo" placeholder="e.g. JD0146000030699 / 1Z999AA10123456784" required>' +
            '</div>' +
            '<div class="track-field">' +
              '<label class="spec-label" for="trackCarrier">Carrier</label>' +
              '<select id="trackCarrier" name="trackCarrier">' + carriers + '</select>' +
            '</div>' +
            '<button type="submit" class="btn btn-primary btn-lg">Track Now \u2192</button>' +
          '</form>' +
          '<p class="track-hint">Covers 1,200+ carriers (DHL, FedEx, UPS, TNT, EMS, China Post, SF Express, USPS, air &amp; ocean freight). Not sure which carrier? Leave Auto Detect selected \u2014 the tracking number identifies it automatically. Sea freight (FCL/LCL) is tracked via the shipping line\u2019s bill of lading \u2014 we send you the vessel tracking link with your booking. If a number shows no result or stops updating, message us on WhatsApp and we\u2019ll check it with the carrier for you.</p>' +
          '<div class="track-links">' +
            '<span>Prefer the carrier\u2019s own site?</span>' +
            '<a href="https://www.dhl.com/cn-en/home/tracking.html" target="_blank" rel="noopener">DHL</a>' +
            '<a href="https://www.fedex.com/fedextrack/" target="_blank" rel="noopener">FedEx</a>' +
            '<a href="https://www.ups.com/track" target="_blank" rel="noopener">UPS</a>' +
            '<a href="https://global.ems.com.cn/" target="_blank" rel="noopener">EMS</a>' +
          '</div>' +
        '</div>' +

        '<div class="track-help">' +
          '<div class="contact-card">' + ICONS.whatsappLg +
            '<div><h3>Number not working or lost?</h3><p>Message us on WhatsApp with your order number \u2014 we\u2019ll confirm your tracking number, carrier and live shipment status within minutes.</p><a class="btn btn-outline" href="' + waLink('Hi, my tracking number is not showing updates (or I lost it). Please check the current shipment status for me.') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Ask on WhatsApp</a></div>' +
          '</div>' +
          '<div class="contact-card">' + icon('mail', 'icon') +
            '<div><h3>Questions about delivery?</h3><p>Email our logistics team: <a href="mailto:' + CONTACT.email + '">' + CONTACT.email + '</a> \u2014 we confirm real-time freight rates before payment and support customer-nominated carriers.</p></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
}

function trackShip() {
  var no = document.getElementById('trackNo').value.trim();
  if (!no) return false;
  var fc = document.getElementById('trackCarrier').value;
  var url = 'https://www.17track.net/en/track?nums=' + encodeURIComponent(no);
  if (fc) url += '&fc=' + encodeURIComponent(fc);
  window.open(url, '_blank', 'noopener');
  return false;
}

var VIEWS = {
  home: renderHome,
  products: renderProducts,
  about: renderAbout,
  certifications: renderCertifications,
  contact: renderContact,
  sample: renderSample,
  checkout: renderCheckout,
  track: renderTrack
};

var PAGE_META = {
  home: {
    title: 'Pengye Leather | Shoe Material & Leather Supplier from China — Low MOQ, Factory Direct',
    desc: 'Shoe material specialist since 2006: genuine leather (priced per Chi), water-based PU, eco PU, PVC, microfiber, bio-based and recycled leather from China. Low MOQ, online ordering, instant WhatsApp support.'
  },
  products: {
    title: 'Leather for Shoes & Products | Genuine, PU, PVC, Microfiber, Recycled — Pengye Leather',
    desc: 'Browse 9 leather product lines for footwear and more from China: genuine leather (full grain, split, reconstituted), water-based PU, eco-friendly PU, standard PU, PVC, bio-based, microfiber, specialty and recycled PET leather.'
  },
  about: {
    title: 'About Pengye Leather | Shoe Material Specialist Since 2006',
    desc: 'Shoe material specialist and leather sourcing partner since 2006. One-stop supply, transparent quality control, 40+ patents, trusted by global brands. Sofa and automotive leather also available.'
  },
  certifications: {
    title: 'Certifications & Patents | Pengye Leather Quality & Compliance',
    desc: 'CTI test reports, FDA 21 CFR 177.2600, EN71-3, REACH-compliant materials. 17 utility patents and 23 invention patents.'
  },
  contact: {
    title: 'Contact Pengye Leather | WhatsApp, Email, WeChat, Showroom, Amazon',
    desc: 'Contact Pengye Leather shoe material specialist: WhatsApp +86 189 4808 8736, email sales@pengye-leather.com, WeChat +86 190 3739 0132. Showroom visits welcome, retail on Amazon, sample service, real-time freight quotes.'
  },
  checkout: {
    title: 'Checkout & Shipping | Pengye Leather Online Order',
    desc: 'Submit your leather material order. Genuine leather priced per Chi, synthetics per Yard. Freight charged at real-time carrier rates, confirmed before payment. Customer-nominated carriers supported.'
  },
  sample: {
    title: 'Request a Sample | Pengye Leather Sample Service',
    desc: 'Request leather samples online \u2014 genuine leather (per Chi) and synthetic leather (per Yard) have separate forms. Sample fees advised on inquiry; contact us first for the right sample and shipping quote.'
  },
  track: {
    title: 'Track Your Order | Pengye Leather Real-Time Shipment Tracking',
    desc: 'Track your Pengye Leather shipment in real time. Enter your tracking number to see live carrier updates for DHL, FedEx, UPS, EMS, China Post, SF Express and 1,200+ carriers. Lost your number? Ask on WhatsApp.'
  }
};

function currentRoute() {
  var h = location.hash.replace(/^#\/?/, '');
  var parts = h.split('/');
  return { view: parts[0] || 'home', param: parts[1] || '' };
}

function setPageMeta(route, p) {
  var m = PAGE_META[route.view];
  if (route.view === 'product' && p) {
    document.title = p.name + ' (' + p.no + ') | Pengye Leather China Supplier';
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', (p.tagline + ' ' + p.desc).slice(0, 200) + ' Flexible MOQ, sample service, online ordering, WhatsApp support.');
  } else if (m) {
    document.title = m.title;
    var md2 = document.querySelector('meta[name="description"]');
    if (md2) md2.setAttribute('content', m.desc);
  } else {
    document.title = 'Pengye Leather | Premium Leather Materials Supplier from China';
  }
}

function router() {
  var route = currentRoute();
  var app = document.getElementById('app');
  var html = '';
  var product = null;

  if (route.view === 'product' && getProduct(route.param)) {
    product = getProduct(route.param);
    html = renderProduct(route.param);
  } else if (VIEWS[route.view]) {
    html = VIEWS[route.view]();
  } else {
    html = renderHome();
  }

  app.innerHTML = html;
  setPageMeta(route, product);
  window.scrollTo(0, 0);

  // active nav
  var navKey = route.view === 'product' ? 'products' : route.view;
  var links = document.querySelectorAll('#siteNav .nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle('active', links[i].getAttribute('data-nav') === navKey);
  }

  // close mobile nav & cart drawer
  var nav = document.getElementById('siteNav');
  var toggle = document.getElementById('navToggle');
  nav.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  closeCart();

  applyLang();
  updateNavLang();
  bindViewEvents();
}

/* ---------- View events ---------- */

function bindViewEvents() {
  bindGalleryEvents();
  bindLightboxTargets();
  bindForm();
  bindOrderRow();
  bindCheckoutEvents();
  bindSampleForm();
  bindVideoPlay();
  bindWechatCopy();
  bindFaq();
}

function bindVideoPlay() {
  var cover = document.getElementById('videoCover');
  if (!cover) return;
  function play() {
    if (cover.getAttribute('data-loaded')) return;
    var wrap = cover.parentNode;
    wrap.innerHTML = '';
    var video = document.createElement('video');
    video.src = 'images/factory-tour.mp4';
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'none';
    video.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;background:#000;';
    video.addEventListener('error', function () {
      wrap.innerHTML = '' +
        '<div class="video-fallback">' +
          '<span class="video-fallback-ic">' + ICONS.video + '</span>' +
          '<h3>Factory Tour Video</h3>' +
          '<p>The video file is being prepared. Get it instantly on WhatsApp \u2014 we send daily production &amp; QC videos to every buyer.</p>' +
          '<a class="btn btn-primary" href="' + waLink('Hi, please send me the factory tour video.') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Get the Video on WhatsApp</a>' +
        '</div>';
    });
    wrap.appendChild(video);
    cover.setAttribute('data-loaded', '1');
  }
  cover.addEventListener('click', play);
  cover.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); play(); } });
}

function bindGalleryEvents() {
  var prev = document.getElementById('galleryPrev');
  var next = document.getElementById('galleryNext');
  var thumbs = document.querySelectorAll('#galleryThumbs img');
  var main = document.getElementById('galleryImg');

  if (prev) prev.onclick = function () { setGalleryImage(galleryState.index - 1); };
  if (next) next.onclick = function () { setGalleryImage(galleryState.index + 1); };

  for (var i = 0; i < thumbs.length; i++) {
    (function (idx) {
      thumbs[idx].onclick = function () { setGalleryImage(idx); };
    })(i);
  }
  if (main) main.onclick = function () { openLightbox(galleryState.index); };
}

/* ---------- Lightbox ---------- */

function ensureLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) return lb;
  lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.id = 'lightbox';
  lb.innerHTML =
    '<button class="lb-close" id="lbClose" aria-label="Close">' + ICONS.close + '</button>' +
    '<button class="lb-arrow lb-prev" id="lbPrev" aria-label="Previous">' + ICONS.chevL + '</button>' +
    '<div class="lb-stage" id="lbStage"><img id="lbImg" src="" alt="Preview"></div>' +
    '<button class="lb-arrow lb-next" id="lbNext" aria-label="Next">' + ICONS.chevR + '</button>' +
    '<div class="lb-zoom-ctl">' +
      '<button type="button" id="lbZoomIn" aria-label="Zoom in">+</button>' +
      '<button type="button" id="lbZoomOut" aria-label="Zoom out">\u2212</button>' +
      '<button type="button" id="lbReset" aria-label="Reset zoom">1:1</button>' +
    '</div>' +
    '<div class="lb-count" id="lbCount"></div>' +
    '<div class="lb-hint">Click image to zoom \u00b7 drag to move \u00b7 scroll to zoom \u00b7 Esc to close</div>';
  document.body.appendChild(lb);
  return lb;
}

var lightboxMode = { type: 'gallery', images: [], index: 0 };
var lightboxZoom = { s: 1, x: 0, y: 0 };

function openLightbox(index) {
  var lb = ensureLightbox();
  if (galleryState.images.length) {
    lightboxMode.type = 'gallery';
    lightboxMode.images = galleryState.images;
    lightboxMode.index = index == null ? galleryState.index : index;
  }
  updateLightbox();
  lb.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function openLightboxStatic(src) {
  var lb = ensureLightbox();
  lightboxMode.type = 'static';
  lightboxMode.images = [src];
  lightboxMode.index = 0;
  updateLightbox();
  lb.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  var img = document.getElementById('lbImg');
  var count = document.getElementById('lbCount');
  var prev = document.getElementById('lbPrev');
  var next = document.getElementById('lbNext');
  var list = lightboxMode.images;
  img.src = list[lightboxMode.index];
  applyLightboxZoom(1, 0, 0);
  if (list.length > 1) {
    count.textContent = (lightboxMode.index + 1) + ' / ' + list.length;
    count.style.display = '';
    prev.style.display = '';
    next.style.display = '';
  } else {
    count.style.display = 'none';
    prev.style.display = 'none';
    next.style.display = 'none';
  }
}

function applyLightboxZoom(s, x, y) {
  var img = document.getElementById('lbImg');
  if (!img) return;
  lightboxZoom.s = Math.min(6, Math.max(1, s));
  lightboxZoom.x = x;
  lightboxZoom.y = y;
  img.style.transform = 'translate(' + x + 'px, ' + y + 'px) scale(' + lightboxZoom.s + ')';
}

function resetLightboxZoom() {
  applyLightboxZoom(1, 0, 0);
}

function closeLightbox() {
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('show');
  document.body.style.overflow = '';
  resetLightboxZoom();
}

function bindLightboxTargets() {
  var targets = document.querySelectorAll('[data-lightbox]');
  for (var i = 0; i < targets.length; i++) {
    (function (el) {
      var src = el.getAttribute('data-lightbox');
      var images = galleryState.images || [];
      var idx = images.indexOf(src);
      if (idx >= 0) {
        el.onclick = function () { openLightbox(idx); };
      } else {
        el.onclick = function () { openLightboxStatic(src); };
      }
    })(targets[i]);
  }
}

/* ---------- Inquiry form ---------- */

function bindForm() {
  var form = document.getElementById('inquiryForm');
  var waBtn = document.getElementById('waSubmit');
  if (!form) return;

  function collect() {
    return {
      name: document.getElementById('fName').value,
      company: document.getElementById('fCompany').value,
      email: document.getElementById('fEmail').value,
      phone: document.getElementById('fPhone').value,
      leatherType: document.getElementById('fType').value,
      quantity: document.getElementById('fQty').value,
      details: document.getElementById('fDetails').value
    };
  }

  form.onsubmit = function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }
    window.location.href = mailtoInquiry(collect());
  };

  if (waBtn) {
    waBtn.onclick = function () {
      var d = collect();
      var msg = 'Hi, I would like to inquire about leather products.\n\n' +
        'Name: ' + (d.name || '-') + '\n' +
        'Company: ' + (d.company || '-') + '\n' +
        'Email: ' + (d.email || '-') + '\n' +
        'Phone: ' + (d.phone || '-') + '\n' +
        'Leather Type: ' + (d.leatherType || '-') + '\n' +
        'Quantity: ' + (d.quantity || '-') + '\n' +
        'Details: ' + (d.details || '-');
      window.open(waLink(msg), '_blank');
    };
  }
}

/* ---------- Product add-to-order row ---------- */

function bindOrderRow() {
  var addBtn = document.getElementById('addToOrderBtn');
  if (!addBtn) return;
  var p = getProduct(currentRoute().param);
  var input = document.querySelector('.oq-input');
  var dec = document.querySelector('.oq-dec');
  var inc = document.querySelector('.oq-inc');

  function val() { return parseInt(input.value, 10) || 1; }
  function clamp(v) { return Math.max(1, Math.min(99999, v)); }

  function collectSpecs() {
    if (!p) return {};
    var s = {};
    var g = document.getElementById('specGrade');
    if (g && g.value.trim()) s.grade = g.value.trim();
    var th = document.getElementById('specThickness');
    if (th && th.value.trim()) s.thickness = th.value.trim();
    var tx = document.getElementById('specTexture');
    if (tx && tx.value) s.texture = tx.value;
    var ec = document.getElementById('specEco');
    if (ec && ec.value && ec.value !== 'Standard') s.eco = ec.value;
    var ct = document.getElementById('specCountry');
    if (ct && ct.value.trim()) s.country = ct.value.trim();
    var bk = document.getElementById('specBacking');
    if (bk && bk.value) s.backing = bk.value;
    var pp = document.getElementById('specProps');
    if (pp && pp.value.trim()) {
      s.props = pp.value.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    }
    return s;
  }

  // (all spec fields are free-text inputs \u2014 no chip binding needed)


  if (dec) dec.onclick = function () { input.value = clamp(val() - 10); };
  if (inc) inc.onclick = function () { input.value = clamp(val() + 10); };
  if (input) input.onchange = function () { input.value = clamp(parseInt(input.value, 10)); };
  if (addBtn) addBtn.onclick = function () { if (p) addToCart(p.id, val(), '', collectSpecs()); };
}

/* ---------- Checkout events ---------- */

function bindCheckoutEvents() {
  var form = document.getElementById('checkoutForm');
  if (!form) return;

  var pengyeCard = document.getElementById('shipPengyeCard');
  var ownCard = document.getElementById('shipOwnCard');
  var fields = document.getElementById('ownShipFields');
  var radios = document.querySelectorAll('input[name="shipMethod"]');

  function syncShip() {
    var v = document.querySelector('input[name="shipMethod"]:checked');
    var isOwn = v && v.value === 'own';
    if (fields) fields.classList.toggle('hidden', !isOwn);
    if (pengyeCard) pengyeCard.classList.toggle('selected', !isOwn);
    if (ownCard) ownCard.classList.toggle('selected', isOwn);
  }
  for (var i = 0; i < radios.length; i++) radios[i].addEventListener('change', syncShip);
  syncShip();

  form.onsubmit = function (e) { e.preventDefault(); submitCheckout(false); };
  var mailBtn = document.getElementById('coMailBtn');
  if (mailBtn) mailBtn.onclick = function () { submitCheckout(true); };
  var copyBtn = document.getElementById('coCopyBtn');
  if (copyBtn) copyBtn.onclick = function () {
    var d = collectCheckout();
    var msg = buildOrderMessage(d);
    copyText(msg);
    showToast('Order message copied \u2014 paste it into any email or chat app.');
  };
}

/* ---------- WeChat copy ---------- */

function bindWechatCopy() {
  var btn = document.getElementById('copyWechatBtn');
  if (btn) btn.onclick = function () { copyText('+8619037390132', btn); };
}

/* ---------- FAQ accordion ---------- */

function bindFaq() {
  var items = document.querySelectorAll('.faq-item');
  for (var i = 0; i < items.length; i++) {
    (function (it) {
      var q = it.querySelector('.faq-q');
      if (q) q.onclick = function () {
        var open = it.classList.toggle('open');
        q.setAttribute('aria-expanded', open ? 'true' : 'false');
      };
    })(items[i]);
  }
}

/* ---------- Global cart init ---------- */

function initCart() {
  var btn = document.getElementById('cartBtn');
  var close = document.getElementById('cartClose');
  var overlay = document.getElementById('cartOverlay');
  if (btn) btn.onclick = openCart;
  if (close) close.onclick = closeCart;
  if (overlay) overlay.onclick = closeCart;
  updateCartBadge();

  document.addEventListener('click', function (e) {
    var dec = e.target.closest && e.target.closest('[data-cart-dec]');
    var inc = e.target.closest && e.target.closest('[data-cart-inc]');
    var del = e.target.closest && e.target.closest('[data-cart-del]');
    var copy = e.target.closest && e.target.closest('[data-copy]');
    if (dec) {
      var cart = getCart();
      var idx = +dec.getAttribute('data-cart-dec');
      if (cart[idx]) setCartQty(idx, cart[idx].qty - 1);
    } else if (inc) {
      var cart2 = getCart();
      var idx2 = +inc.getAttribute('data-cart-inc');
      if (cart2[idx2]) setCartQty(idx2, cart2[idx2].qty + 1);
    } else if (del) {
      removeCartItem(+del.getAttribute('data-cart-del'));
    } else if (copy) {
      copyText(copy.getAttribute('data-copy'));
    }
  });

  document.addEventListener('change', function (e) {
    if (e.target.matches && e.target.matches('[data-cart-qty]')) {
      setCartQty(+e.target.getAttribute('data-cart-qty'), e.target.value);
    } else if (e.target.matches && e.target.matches('[data-cart-price]')) {
      setCartPrice(+e.target.getAttribute('data-cart-price'), e.target.value);
    }
  });
}

/* ---------- Floating contact panel (WhatsApp / WeChat / Email / Phone) ---------- */

function initContactFab() {
  var fab = document.getElementById('contactFab');
  var toggle = document.getElementById('fabToggle');
  if (!fab || !toggle) return;
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    fab.classList.toggle('open');
  });
  document.addEventListener('click', function (e) {
    if (fab.classList.contains('open') && !fab.contains(e.target)) {
      fab.classList.remove('open');
    }
  });
}

/* ---------- Hash nav fix: clicking a link to the page you are already on must still re-render ---------- */

function initHashNav() {
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="#/"]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (location.hash === href) {
      e.preventDefault();
      router();
      window.scrollTo(0, 0);
    }
  });
}

/* ---------- Global init ---------- */

function initHeroSlider() {
  var slides = document.querySelectorAll('.hero-bg');
  if (!slides.length) return;
  var current = 0;
  setInterval(function () {
    slides[current].style.display = 'none';
    current = (current + 1) % slides.length;
    slides[current].style.display = '';
  }, 5000);
}

function initNav() {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  toggle.onclick = function () {
    var open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  // close on outside click
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function initLightboxControls() {
  document.addEventListener('click', function (e) {
    var lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('show')) return;
    if (e.target === lb) { closeLightbox(); return; }
    if (e.target.closest && e.target.closest('#lbClose')) { closeLightbox(); return; }
    if (e.target.closest && e.target.closest('#lbPrev')) {
      lightboxMode.index = (lightboxMode.index - 1 + lightboxMode.images.length) % lightboxMode.images.length;
      updateLightbox();
      return;
    }
    if (e.target.closest && e.target.closest('#lbNext')) {
      lightboxMode.index = (lightboxMode.index + 1) % lightboxMode.images.length;
      updateLightbox();
      return;
    }
    if (e.target.closest && e.target.closest('#lbZoomIn')) {
      applyLightboxZoom(lightboxZoom.s * 1.5, lightboxZoom.x, lightboxZoom.y);
      return;
    }
    if (e.target.closest && e.target.closest('#lbZoomOut')) {
      applyLightboxZoom(lightboxZoom.s / 1.5, lightboxZoom.x, lightboxZoom.y);
      return;
    }
    if (e.target.closest && e.target.closest('#lbReset')) {
      resetLightboxZoom();
      return;
    }
    // click the image itself: cycle 1x -> 2x -> 4x -> 1x
    if (e.target.id === 'lbImg') {
      var next = lightboxZoom.s >= 4 ? 1 : (lightboxZoom.s >= 2 ? 4 : 2);
      applyLightboxZoom(next, 0, 0);
    }
  });

  // drag to pan (when zoomed in)
  var drag = { on: false, x0: 0, y0: 0, tx0: 0, ty0: 0 };
  document.addEventListener('mousedown', function (e) {
    if (e.target.id !== 'lbImg') return;
    drag.on = true;
    drag.x0 = e.clientX; drag.y0 = e.clientY;
    drag.tx0 = lightboxZoom.x; drag.ty0 = lightboxZoom.y;
    e.preventDefault();
  });
  document.addEventListener('mousemove', function (e) {
    if (!drag.on) return;
    var img = document.getElementById('lbImg');
    if (!img) return;
    var nx = drag.tx0 + (e.clientX - drag.x0);
    var ny = drag.ty0 + (e.clientY - drag.y0);
    applyLightboxZoom(lightboxZoom.s, nx, ny);
  });
  document.addEventListener('mouseup', function () { drag.on = false; });

  // wheel zoom
  document.addEventListener('wheel', function (e) {
    var lb = document.getElementById('lightbox');
    if (!lb || !lb.classList.contains('show')) return;
    if (e.target.id !== 'lbImg') return;
    e.preventDefault();
    var factor = e.deltaY < 0 ? 1.2 : 1 / 1.2;
    applyLightboxZoom(lightboxZoom.s * factor, lightboxZoom.x, lightboxZoom.y);
  }, { passive: false });
}

document.addEventListener('keydown', function (e) {
  var lb = document.getElementById('lightbox');
  if (!lb || !lb.classList.contains('show')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lightboxMode.index = (lightboxMode.index - 1 + lightboxMode.images.length) % lightboxMode.images.length; updateLightbox(); }
  if (e.key === 'ArrowRight') { lightboxMode.index = (lightboxMode.index + 1) % lightboxMode.images.length; updateLightbox(); }
});

window.addEventListener('hashchange', router);

function boot() {
  initNav();
  initLightboxControls();
  initCart();
  initContactFab();
  initHashNav();
  router();
  initHeroSlider();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
