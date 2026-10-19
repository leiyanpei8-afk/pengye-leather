/* ============================================================
   Pengye Leather — Independent Site App
   SPA with hash routing, data-driven views
   ============================================================ */

'use strict';

/* ---------- Data ---------- */

var CONTACT = {
  address: 'Aoding Plot (\u5774\u9876\u5730\u6bb5), Shaliyuan Industrial Zone, Daling Town, Huidong County, Huizhou City, Guangdong Province, China 516321',
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
    desc: 'Genuine leather is natural leather made from processed animal hides, distinct from man-made synthetic materials. Per light industry standards, only leather with 90%+ top-grain leather in the surface layer may be labeled \u201cgenuine leather\u201d. Raw materials mainly come from cowhide, sheepskin and pigskin. It can be identified by observing natural pore patterns, touching for softness and elasticity, and smelling for the characteristic animal hide scent. Daily care requires avoiding high temperatures and harsh chemicals, and keeping it ventilated and moisture-proof.',
    features: ['Natural grain and texture', 'Breathable and durable', 'Premium hand-feel', 'Timeless, high-end look'],
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
    desc: 'Water-based PU leather is an eco-friendly polyurethane synthetic leather using water as the medium with no added solvents, different from traditional solvent-based PU. Its production process features low VOC emissions and no toxic solvent residues, making it safe for humans and the environment. Made from water-based polyurethane resin via wet film-forming technology, it offers good scratch resistance and breathability. It can be identified by its lack of irritating odors, no pungent black smoke when burned, and a smooth, non-sticky feel. Daily care allows direct wiping with a damp cloth; avoid prolonged soaking and direct sunlight.',
    features: ['No added solvents, low VOC', 'Safe for people and environment', 'Good scratch resistance', 'Breathable and smooth feel'],
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
    desc: 'Eco-friendly PU leather is a low-carbon compliant synthetic PU leather, produced with eco-friendly resins and additives, resulting in a significantly lower carbon footprint than standard PU. Its manufacturing strictly controls harmful substance emissions, meeting international environmental regulations like EU REACH, making it suitable for footwear and furniture with high environmental requirements. Made from modified polyurethane resin with eco-friendly additives, it offers stable physical properties and weather resistance. It can be verified via environmental test reports, lack of irritating odors when burned, and no harmful coating leaching.',
    features: ['Lower carbon footprint', 'REACH & EU compliant', 'Stable physical properties', 'Verified via test reports'],
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
    desc: 'Standard PU leather is a synthetic leather based on conventional polyurethane resin, one of the most widely used artificial leather types. Composed of polyurethane resin, base fabric and additives, made via dry or wet processes, it offers stable wear resistance, flex resistance and easy processability. With moderate cost and balanced performance, it is widely used in footwear, bags, furniture and more. It can be identified by a slight plastic odor when burned, a uniform surface without natural pores, and a relatively firm feel. Daily care can use neutral cleaners; keep away from sharp objects to prevent scratches.',
    features: ['Stable wear and flex resistance', 'Easy to process', 'Moderate cost, balanced performance', 'Wide color and grain range'],
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
    desc: 'PVC leather is a cost-effective synthetic leather mainly made of polyvinyl chloride resin, featuring excellent water resistance and easy maintenance. Composed of PVC resin, plasticizers, stabilizers and base fabric, made via calendering or coating processes, it is low-cost and highly cost-effective. With a smooth, dense surface and excellent water and moisture resistance, it is often used in outdoor products, furniture and budget-friendly footwear. It can be identified by the pungent hydrogen chloride odor when burned, self-extinguishing when removed from flame, and a relatively hard, plastic-like feel. Daily care allows direct washing; avoid high temperatures to prevent softening and deformation.',
    features: ['Excellent waterproofing', 'Easy to clean and maintain', 'Low cost, high value', 'Dense, smooth surface'],
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
    desc: 'Bio-based leather is a sustainable eco-leather based on plant-derived raw materials, different from traditional petroleum-based synthetic leather. Raw materials mainly come from plant fibers, starch-based or bio-based polyurethane resins, reducing reliance on fossil resources and carbon emissions during production. Combining eco-friendliness with leather-like texture, it is biodegradable or recyclable, making it a future-oriented sustainable material. It can be verified via bio-based content test reports, slight plant fiber odor when burned, and a feel close to natural leather. Daily care requires avoiding prolonged moisture and keeping it ventilated and dry.',
    features: ['Plant-derived raw materials', 'Lower carbon footprint', 'Biodegradable or recyclable', 'Leather-like texture'],
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
    desc: 'Microfiber leather is a synthetic leather made from high-performance microfiber base fabric composite with polyurethane resin, with performance close to or even better than natural genuine leather. Composed of island-in-sea microfiber base fabric and high-performance PU resin, made via impregnation, coagulation and buffing processes, it offers excellent wear resistance, tear strength and aging resistance. The surface texture can highly simulate natural leather, with a soft, delicate feel, making it a premium alternative to high-end genuine leather. It can be identified by its uniform, fine microfiber texture, soft elasticity close to genuine leather when touched, and no obvious wear after abrasion tests.',
    features: ['Wear, tear and aging resistant', 'Highly simulates natural leather', 'Soft, delicate hand-feel', 'Premium genuine-leather alternative'],
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
    desc: 'Specialty leather is functional or decorative leather processed with custom patterns and special crafts, enabling personalized appearance and performance per customer requirements. Based on various substrates like genuine leather, PU or microfiber, it is treated with special processes such as embossing, hot stamping, lamination and flocking to create unique textures, lusters and feels \u2014 e.g., crocodile pattern, snake pattern, metallic finish and matte effect. Suitable for high-end fashion, luxury goods, custom furniture and other special applications. Identification requires combining process features with customer requirements, checking pattern consistency, craft details and special performance test reports.',
    features: ['Custom patterns and textures', 'Hot stamping, embossing, flocking', 'Unique luster and hand-feel', 'Made to your specification'],
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
    desc: 'Recycled PET bottle leather is a sustainable eco-friendly material produced from recycled waste plastic bottles. Through crushing, granulation, fiber spinning and lamination processes, waste plastic resources are reused effectively, reducing plastic pollution and reliance on petroleum raw materials. This material features high toughness, strong tensile strength, excellent wear resistance and stable color fastness. With reliable performance similar to microfiber leather, it is highly recognized in the global market and widely used in bags, footwear, furniture and outdoor products.',
    features: ['Made from recycled bottles', 'High toughness and tensile strength', 'Stable color fastness', 'Globally recognized eco material'],
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
    desc: 'MOQ confirmed in real time with our sales team \u2014 genuine leather priced per Chi, synthetics per Yard. No forced stockpiling \u2014 perfect for sampling and small batches.'
  },
  {
    icon: 'layers',
    title: 'One-Stop Full Range Supply',
    desc: 'Access to a broad network of quality factories \u2014 one stop for all your leather materials.'
  },
  {
    icon: 'shield',
    title: '100% Pre-Shipment Inspection',
    desc: 'Full quality control before shipping, so you don\u2019t need to fly to China to check every order.'
  },
  {
    icon: 'truck',
    title: 'Real-Time Quote',
    desc: 'Prices and freight are quoted in real time based on current market rates \u2014 send your spec &amp; quantity and we confirm today.'
  },
  {
    icon: 'tag',
    title: 'Competitive Factory-Direct Prices',
    desc: '20+ years of deep partnerships secure better pricing than sourcing from factories directly.'
  },
  {
    icon: 'file',
    title: 'Custom Development Support',
    desc: 'Special textures, colors and formulas developed to your exact specification, with samples first.'
  }
];

var TRUST = [
  {
    icon: 'shield',
    title: 'Veteran-Owned & Operated',
    desc: 'We run our business with military discipline and integrity. No hidden fees, no quality cutting, no broken promises.'
  },
  {
    icon: 'video',
    title: 'Transparent Production & QC',
    desc: 'We share daily production and quality-inspection videos with you. See the quality and progress clearly, anytime.'
  },
  {
    icon: 'clock',
    title: '20 Years Industry Experience',
    desc: 'Since 2006 we have specialized in leather sourcing. We know every factory, every material and every trick of the trade.'
  },
  {
    icon: 'handshake',
    title: 'Long-Term Factory Partnerships',
    desc: 'Long-term partnerships with top Chinese leather factories ensure stable stock access and competitive prices.'
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
                '<div class="pay-method"><h5>Small orders \u2014 Tenpay Global (\u667a\u6c47\u9e45)</h5><p>Tencent\u2019s licensed cross-border payment \u2014 simple and low-fee for small amounts, settles to CNY.</p></div>' +
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
  lines.push('PAYMENT: Arranged by Pengye based on order size \u2014 T/T (corporate) for large orders; Tenpay Global (\u667a\u6c47\u9e45) or PayPal for small orders. Confirmed on the quotation.');
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
    return '<div class="benefit-card">' + icon(b.icon, 'icon') + '<h3>' + esc(b.title) + '</h3><p>' + esc(b.desc) + '</p></div>';
  }).join('');

  var swatches = PRODUCTS.map(function (p) {
    return '<a class="swatch-card" href="#/product/' + p.id + '">' +
      '<div class="swatch-media"><span class="swatch-no">' + p.no + '</span><img src="' + p.cover + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
      '<div class="swatch-body"><h3>' + esc(p.name) + '</h3><p>' + esc(p.tagline) + '</p>' +
      '<div class="swatch-tags">' + p.applications.slice(0, 3).map(function (a) { return '<span>' + esc(a) + '</span>'; }).join('') + '</div>' +
      '<span class="swatch-more">View details ' + ICONS.arrow + '</span></div></a>';
  }).join('');

  var media = FACTORY_IMAGES.map(function (src) {
    return '<figure data-lightbox="' + src + '"><img src="' + src + '" alt="Cooperative factory and quality certificate" loading="lazy"></figure>';
  }).join('');

  var trust = TRUST.map(function (t) {
    return '<div class="trust-card">' + icon(t.icon, 'icon') + '<h3>' + esc(t.title) + '</h3><p>' + esc(t.desc) + '</p></div>';
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
      '<div class="swatch-media"><span class="swatch-no">' + p.no + '</span><img src="' + p.cover + '" alt="' + esc(p.name) + '" loading="lazy"></div>' +
      '<div class="swatch-body"><h3>' + esc(p.name) + '</h3><p>' + esc(p.tagline) + '</p>' +
      '<div class="swatch-tags">' + p.applications.slice(0, 3).map(function (a) { return '<span>' + esc(a) + '</span>'; }).join('') + '</div>' +
      '<span class="swatch-more">View details ' + ICONS.arrow + '</span></div></a>';
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
    return '<img src="' + src + '" alt="' + esc(p.name) + ' ' + (i + 1) + '" class="' + (i === 0 ? 'active' : '') + '" data-gi="' + i + '" loading="lazy">';
  }).join('');

  var feats = p.features.map(function (f) {
    return '<li>' + ICONS.check + '<span>' + esc(f) + '</span></li>';
  }).join('');

  var apps = p.applications.map(function (a) { return '<span>' + esc(a) + '</span>'; }).join('');

  var others = PRODUCTS.filter(function (x) { return x.id !== id; }).slice(0, 3);

  var unit = p.unit === 'ft' ? 'Chi' : 'Yard';
  var moqNote = p.unit === 'ft'
    ? 'Genuine leather is priced per Chi. 1 hide \u2248 13\u201314 Chi. For reference: 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d). Quantity and MOQ confirmed in real time. Samples: genuine &amp; microfiber charged, others advised \u2014 contact us first.'
    : 'MOQ is flexible and confirmed in real time \u2014 samples: genuine &amp; microfiber charged, others advised. Contact us first.';
  var unitNote = p.unit === 'ft'
    ? 'Unit: Chi \u2014 1 hide \u2248 13\u201314 Chi \u00b7 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d)'
    : 'Unit: Yard \u2014 1 Yard = 0.9 m long \u00d7 1.37 m wide (54\u201d), priced per Yard';

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
        '<div class="crumb"><a href="#/home">Home</a> / <a href="#/products">Products</a> / ' + esc(p.name) + '</div>' +
        '<span class="kicker">' + p.no + '</span>' +
        '<h1>' + esc(p.name) + '</h1>' +
        '<p>' + esc(p.tagline) + '</p>' +
      '</div>' +
    '</div>' +
    '<section class="section">' +
      '<div class="container">' +
        '<div class="detail-layout">' +
          '<div class="gallery">' +
            '<div class="gallery-main" id="galleryMain">' +
              '<img id="galleryImg" src="' + p.images[0] + '" alt="' + esc(p.name) + '" data-lightbox="' + p.images[0] + '">' +
              '<button class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Previous image">' + ICONS.chevL + '</button>' +
              '<button class="gallery-arrow gallery-next" id="galleryNext" aria-label="Next image">' + ICONS.chevR + '</button>' +
            '</div>' +
            '<div class="gallery-thumbs" id="galleryThumbs">' + thumbs + '</div>' +
          '</div>' +
          '<aside class="detail-info">' +
            '<div class="no">' + p.no + '</div>' +
            '<h2>' + esc(p.name) + '</h2>' +
            '<p class="tagline">' + esc(p.tagline) + '</p>' +
            '<div class="quote-note">' + ICONS.check + '<span><strong>Real-time price.</strong> Material prices move with the market \u2014 no fixed list price. Share your spec &amp; quantity and we quote today.</span></div>' +
            '<p class="body">' + esc(p.desc) + '</p>' +
            '<h4>Key Features</h4>' +
            '<ul class="feat-list">' + feats + '</ul>' +
            '<h4>Typical Applications</h4>' +
            '<div class="app-list">' + apps + '</div>' +
            specsPanel +
            '<div class="order-row">' +
              '<div class="order-qty-field">' +
                '<label>Quantity (' + unit + ')</label>' +
                '<p class="unit-note">' + unitNote + '</p>' +
                '<div class="cart-qty">' +
                  '<button type="button" class="oq-dec" aria-label="Decrease quantity">\u2212</button>' +
                  '<input type="text" inputmode="numeric" class="oq-input" value="" placeholder="e.g. 300" aria-label="Quantity in ' + unit + '">' +
                  '<button type="button" class="oq-inc" aria-label="Increase quantity">+</button>' +
                  '<span class="unit">' + unit + '</span>' +
                '</div>' +
              '</div>' +
              '<a class="btn btn-primary" id="addToOrderBtn">' + ICONS.box + 'Add to Order</a>' +
            '</div>' +
            '<p class="form-hint">' + moqNote + '</p>' +
            '<div class="detail-cta">' +
              '<a class="btn btn-outline-dark" href="#/sample">Request a Sample</a>' +
              '<a class="btn btn-outline-dark" href="' + waLink('Hi, I\u2019m interested in ' + p.name + ' (' + p.no + '). Could you send details and a quotation?') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Ask on WhatsApp</a>' +
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
            '<div class="swatch-media"><span class="swatch-no">' + o.no + '</span><img src="' + o.cover + '" alt="' + esc(o.name) + '" loading="lazy"></div>' +
            '<div class="swatch-body"><h3>' + esc(o.name) + '</h3><p>' + esc(o.tagline) + '</p><span class="swatch-more">View details ' + ICONS.arrow + '</span></div></a>';
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
          '<p class="track-hint">Covers 1,200+ carriers (DHL, FedEx, UPS, TNT, EMS, China Post, SF Express, USPS, air &amp; ocean freight). Not sure which carrier? Leave Auto Detect selected \u2014 the tracking number identifies it automatically.</p>' +
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
            '<div><h3>Lost your tracking number?</h3><p>Message us on WhatsApp \u2014 we reply with your tracking number and current shipment status within minutes.</p><a class="btn btn-outline" href="' + waLink('Hi, please send me my tracking number and current shipment status.') + '" target="_blank" rel="noopener">' + ICONS.whatsapp + 'Ask on WhatsApp</a></div>' +
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
