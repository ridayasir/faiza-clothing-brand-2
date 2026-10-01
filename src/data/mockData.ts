import { Product, CraftStory, AtelierLocation, OrderTrack } from '../types/index.ts';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida/AEtjO1U20Z4bE9ob9v4nlEx87LhqImvGAiB10KfKn0dCwH3MiYe7xY27De1vuANUfr9zKs3WrlahUeFVdTUEN64RjI0w-sI61zcs40jUZgBEPKHii3vm5iuij0aCvR6YVxjLa_NRfImEelbXW5ze--WZLMDU4sRCW9iZJZiDjQ5HA_pyXb7J6tmOnuVoReKIDp1XTzLa60XfBZ29OuQP_PXa2JiHCkL8F9FQwNfCTIsiLRRjjZlN-JRWN5RQVGdj';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida/AEtjO1UE3iqycXSlP4mgll7WqFq4fk5k1jdHzgeP__Ouij9Ig2bJxIpPkF-WfvrSfkI_wb9i0rIgmOsNUKrGRMNYjETMo33Gzl_pJYt0M33uq-fzPj6M9Cs0GeVohVh96Dgi1l7t-uNcwhRw6gA8OQsUzoqmCXp1RPxt-57Dlb_vzVm6K7VsN8bQW67VQjHmSg4vP_iS6_9C4mSSD25n0tIruNdDq0axrtLQTFYMPT26wAYxAQtJsMClLr4KuXYy';

export const PRODUCTS: Product[] = [
  {
    id: 'fz-01',
    name: 'Shehnai-e-Feroza',
    category: 'Bridal Couture',
    bazaarOrigin: 'Anarkali Bazaar',
    fabric: 'Pure Raw Silk 80g • French Tissue Organza',
    craft: 'Zardozi & Dabka',
    pricePKR: 685000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDWwyeX5OljPMyFdwyNkh9ZGAwlD38yk_cIlz9fiBqUnIoRdZQwRqfjiyg7QUJkZ1skEV-PaaG4xVX4Azs51MozyDozQ1bWhRBpgVxyGjJUkN0Fpb-h_V1mN6SkWaLrnJ5pTnotBZu9XjSpfqsiL2Km-g4YmFYzcjyuJD1FDsZvsKpsNaq0VAdJ_-nfsyEKAWJfpj_EydeiZTS8a9G_9_1Xo3TBJC4ouBrrkTCxoPvAer1jGeLq_ILxw',
    alt: 'Haute Couture Pakistani bridal lehenga in turquoise feroza raw silk adorned with handcrafted dabka, zari, and pearl work',
    badge: 'Bridal',
    badgeColor: 'bg-primary-container text-white',
    description: 'A monument to Mughal craftsmanship. The Shehnai-e-Feroza lehenga choli is hand-stitched over 220 atelier hours featuring 24-karat gold-washed bullion wire, dabka rosettes, Kasab tilla cords, and natural Basra pearl fringe.',
    details: [
      'Pure 80-gram Rano raw silk choli with plunging sweetheart neckline',
      '16-kali sweeping flared lehenga with architectural Mughal arch borders',
      'Pure tissue organza dupatta with 4-sided zardozi cutwork scallop borders',
      'Accompanied by silk pouch (batwa) and signed certificate of royal provenance'
    ],
    karigariHours: 220,
    karigarsCount: 6,
    colors: ['#0d382b', '#ffdea5'],
    sizes: ['XS', 'S', 'M', 'L', 'Custom Measurement']
  },
  {
    id: 'fz-02',
    name: 'Mehrunissa Kurta',
    category: 'Luxury Prêt',
    bazaarOrigin: 'Liberty & Gulberg',
    fabric: 'Pure Chanderi Silk • Handloom Tissue',
    craft: 'Gota Patti Work',
    pricePKR: 48500,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7W-ki3PA60_p1UFYHLzXVXCeBL90iRtnbiGAkGbG8BPTkYmLs2cvli9xEsLYn-744qy2_EG_rq7zGbD98KzfJ7RIZMwNEhunp7ABJvmAwJi0o7WwTGfbxtM-devNJfhqEL4T4a-6Z7mkyS4pdQCpk5mV-FqXh_kCy5itYjfJpeC5nXD6dnXEKCKZR979RnMXwOfzoZ9cJJ7dgRMuPjRzRW2pVgFuIt_s0Y01g5VtoW0tejGF47-lfXQ',
    alt: 'Modern luxury Pakistani ivory pure chanderi silk kurta with opulent gota patti embroidery',
    badge: 'Ready-to-Wear',
    badgeColor: 'bg-secondary text-white',
    description: 'Effortless imperial charm. Pure ivory chanderi tailored into a regal calf-length silhouette, overlaid with beaten silver-gold gota ribbons hand-shaped by artisans in the walled city of Lahore.',
    details: [
      'Ivory pure chanderi silk base with breathable handloom cotton lining',
      'Artisanal hand-pleated gota round neckline and cuff embellishments',
      'Paired with straight-cut ivory raw silk trousers',
      'Featherweight tissue dupatta with delicate kiran lace finish'
    ],
    karigariHours: 42,
    karigarsCount: 2,
    colors: ['#f0edea', '#9c4048'],
    sizes: ['XS', 'S', 'M', 'L', 'Custom Measurement']
  },
  {
    id: 'fz-03',
    name: 'Gul-e-Kashmir Lawn',
    category: 'Festive Lawn',
    bazaarOrigin: 'Liberty & Gulberg',
    fabric: 'Luxury Cotton Lawn • Pure Crinkle Chiffon',
    craft: 'Pure Silk Lawn',
    pricePKR: 18900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9mVK4RuFb1audxLZjND-hzdITKTfrp8Ah8M7BPdQ2CBFJ8o_ibRrcBKnsROq-zGw4XD6_hTxRJHmoK9sP_g2O7GKdhrVqRM9zCW1vCgXj2GZtCaS5Wiij2tSuUj3UYhb63R5V3J2XXJ9jdX4xfOO9zPTINyv2Y44wOUCI03LWrkeHDuA7BdIzyV1sAOMTfxwJfjIRYDdyonlVPuiXwhXEZwVCQe-j7baqAr3eWUTrtXxZpNgY_nDBuw',
    alt: '3-piece luxury embroidered lawn suit with pure silk chiffon dupatta in sage green and blush tones',
    badge: 'Festive Lawn',
    badgeColor: 'bg-tertiary-container text-tertiary-fixed',
    description: 'Bespoke spring-summer poetry. Featherlight 100s combed lawn in sage and tea-pink hues, embroidered with Kashmiri resham floss threadwork and paired with a cascading pure crinkle chiffon dupatta.',
    details: [
      'Embroidered lawn front, sleeves, and back panel with organza cutwork inserts',
      'Pure silk digital and foil-detailed chiffon dupatta (2.75 meters)',
      'Cambric dyed trousers with scalloped embroidered trouser hem patch',
      'Pre-shrunk certified Egyptian long-staple cotton fibers'
    ],
    karigariHours: 24,
    karigarsCount: 2,
    colors: ['#a5d0bd', '#f0edea'],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'fz-04',
    name: 'Lal-Qila Kalidaar',
    category: 'Winter Formal',
    bazaarOrigin: 'M.M. Alam Suite',
    fabric: 'Royal Micro-Velvet 9000 • Pure Jamawar',
    craft: 'Tilla Weaving',
    pricePKR: 145000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLjx8Rf3RE5GLKiUB9TuC-G1BdxaMcAnrBOCQZVKT_6ff3PKiieyrW70mktE2-Uv2j2LVa4Yp5zfPqLPQmvIq4E8ybVxwdZRCY0QD2slSYFUPKc6umAtqdTUeKNedEV4l3oQBeFI2WL8O1Q4XuOgVwyEEYB3ZofQLM7IbJ7moEdFcOI66vLJb01Gwnzj9GiGN2rftDQgQBnF8zqenuJIJsX3_9NUPZVQMwiI82Dy4VuAUkqvgwJTQ2zw',
    alt: 'Deep royal crimson velvet kalidaar long frock heavily embroidered with antique gold tilla thread',
    badge: 'Winter Formal',
    badgeColor: 'bg-secondary-container text-secondary',
    description: 'An architectural heirloom designed for royal winter soirees. Cut from sumptuous midnight crimson micro-velvet, featuring 20 voluminous kalis richly framed with Kasab tilla wire and ruby beadwork.',
    details: [
      'Imported Korean 9000 plush micro-velvet bodice with antique brass zardozi',
      'Flared 20-kali kalidaar silhouette with antique copper tilla borders',
      'Pure Banarasi antique gold woven jamawar churidar',
      'Heavy velvet border dupatta with scalloped marori wire pallus'
    ],
    karigariHours: 110,
    karigarsCount: 4,
    colors: ['#9c4048', '#0d382b'],
    sizes: ['XS', 'S', 'M', 'L', 'Custom Measurement']
  },
  {
    id: 'fz-05',
    name: 'Noor-e-Jahan Peshwas',
    category: 'Bridal Couture',
    bazaarOrigin: 'Anarkali Bazaar',
    fabric: 'Antique Gold Raw Silk • Pure Organza Tissue',
    craft: 'Zardozi & Dabka',
    pricePKR: 520000,
    image: '/src/assets/images/bridal_peshwas_gold_1790853091518.jpg',
    alt: 'Royal Pakistani bridal antique gold raw silk peshwas gown with heavy zardozi and kasab tilla',
    badge: 'Haute Bespoke',
    badgeColor: 'bg-primary-container text-white',
    description: 'Inspired by Empress Noor Jahan’s imperial courts. A floor-sweeping antique gold peshwas illuminated with heavy karchob needlework, semi-precious emerald drops, and dabka motifs.',
    details: [
      'Hand-woven antique gold tissue raw silk with intricate Mughal paisley motifs',
      'Full-flare 28-kali kalidaar peshwas with hand-sewn bullion borders',
      'Choli with antique hand-beaten gold tilla and seed pearl embroidery',
      'Double dupatta styling: 1 sheer tissue headveil + 1 velvet shawl'
    ],
    karigariHours: 195,
    karigarsCount: 5,
    colors: ['#ffdea5', '#9c4048'],
    sizes: ['XS', 'S', 'M', 'L', 'Custom Measurement']
  },
  {
    id: 'fz-06',
    name: 'Bahaar-e-Gulberg Sharara',
    category: 'Festive Formals',
    bazaarOrigin: 'Liberty & Gulberg',
    fabric: 'Dusty Rose Tissue Silk • French Net',
    craft: 'Gota Patti Work',
    pricePKR: 195000,
    image: '/src/assets/images/festive_sharara_blush_1790853105420.jpg',
    alt: 'Pakistani bridal dusty rose blush tissue silk sharara with intricate silver gota patti and antique dabka embroidery',
    badge: 'Festive Formal',
    badgeColor: 'bg-tertiary-container text-tertiary-fixed',
    description: 'Sublime pastels crafted for grand Barat and Nikkah celebrations. Features hand-cut silver gota flowers, micro-pearl spray, and delicate sequins across a dual-layered flared sharara.',
    details: [
      'Heavy silver gota patti kurti with scallop hem and pearl drops',
      'Flared double-layer sharara with 8 meters of hand-pleated tissue silk',
      'Handloom french net dupatta with hand-finished silver kiran lace',
      'Custom dye matching available upon request for bridal party'
    ],
    karigariHours: 85,
    karigarsCount: 3,
    colors: ['#ffdada', '#e9c176'],
    sizes: ['XS', 'S', 'M', 'L', 'Custom Measurement']
  }
];

export const CRAFT_STORIES: CraftStory[] = [
  {
    id: 'craft-1',
    number: '01',
    title: 'Zardozi & Dabka',
    icon: 'handyman',
    shortDesc: 'Micro metallic coils hand-stitched onto pure raw silk & velvet.',
    fullDesc: 'Zardozi—meaning "embroidery in gold" in Persian—was brought to peak grandeur in the royal Mughal courts of Lahore. Our artisans use ultra-fine hollow spring coils (dabka) and twisted bullion wires hand-pierced with wooden needlework to create 3D embossed botanical crests.',
    materials: '24K gold-plated copper wire, Kasab thread, genuine Basra seed pearls.',
    history: 'Safeguarded for over 4 centuries within the narrow labyrinthine alleys of Moti Bazaar and Anarkali.',
    originArea: 'Old Lahore Anarkali Atelier'
  },
  {
    id: 'craft-2',
    number: '02',
    title: 'Gota Patti Work',
    icon: 'arrow_back_ios_new',
    shortDesc: 'Delicate ribbon petals of pure beaten gold applied on tissue organza.',
    fullDesc: 'Gota ribbons are folded, snipped into delicate leaves and petals (patti), and hemmed by hand onto gossamer organza or raw silk. This traditional craft catches warm candlelight and chandelier luminance with breathtaking shimmer.',
    materials: 'Hand-beaten gold and silver ribbon foil, fine silk thread.',
    history: 'Celebrated in Punjabi wedding folklore and worn by princesses during traditional mehndi and shehnai gatherings.',
    originArea: 'Liberty Artisans Guild'
  },
  {
    id: 'craft-3',
    number: '03',
    title: 'Tilla Weaving',
    icon: 'texture',
    shortDesc: 'Century-old Kasab silver and antique zari thread embroidery.',
    fullDesc: 'Tilla embroidery uses continuous loops of metallic metallic cord laid onto plush velvet or brocade and anchored with invisible couching stitches. The result is an heirloom textile that endures through generations without tarnishing.',
    materials: 'Antique silver Kasab cord, gold zari spool, German metallic fiber.',
    history: 'Patronized by Lahore court nobility for winter shawls, kalidaars, and ceremonial achkans.',
    originArea: 'Shah Alami & M.M. Alam Suite'
  },
  {
    id: 'craft-4',
    number: '04',
    title: 'Pure Silk Lawn',
    icon: 'dry_cleaning',
    shortDesc: 'Featherlight handloom weaves paired with pure chiffon dupattas.',
    fullDesc: 'Using the finest extra-long-staple cotton spun to 100s yarn count, our lawn represents the pinnacle of breathable South Asian warm-weather luxury, detailed with delicate resham thread embroidery and pure crinkle chiffon.',
    materials: 'Long-staple combed cotton, Chinese mulberry silk, pure crinkle chiffon.',
    history: 'The quintessential fabric of Lahore spring and monsoon festivals, immortalized in Urdu poetry.',
    originArea: 'Gulberg Textile Studio'
  }
];

export const ATELIERS: AtelierLocation[] = [
  {
    id: 'anarkali',
    name: 'Anarkali Bazaar Atelier',
    city: 'Old Lahore',
    tagline: 'Heirloom Origin • Since 1986',
    address: 'Haveli Barood Khana lane, Moti Bazaar, Anarkali, Lahore',
    hours: '11:00 AM – 8:00 PM (Mon – Sat)',
    phone: '+92 42 3765 8900',
    type: 'Heritage Karigari & Adda Workshop'
  },
  {
    id: 'gulberg',
    name: 'Gulberg Flagship Salon',
    city: 'Gulberg III, Lahore',
    tagline: 'Luxury Prêt & Haute Couture',
    address: 'Plot 14-C, Main Boulevard, Gulberg III, Lahore',
    hours: '12:00 PM – 10:00 PM (Daily)',
    phone: '+92 42 3571 4455',
    type: 'Bridal Trial Suites & Ready-to-Wear'
  },
  {
    id: 'mmalam',
    name: 'M.M. Alam Private Suite',
    city: 'Lahore',
    tagline: 'Exclusive VIP Appointments',
    address: 'Floor 3, Noor Jahan Arcade, M.M. Alam Road, Gulberg, Lahore',
    hours: 'By Private Appointment Only',
    phone: '+92 300 844 7799',
    type: 'Bespoke Royal Trousseau Salon'
  },
  {
    id: 'london',
    name: 'Kensington Private Salon',
    city: 'London, UK',
    tagline: 'Global Brides Worldwide',
    address: 'High Street Kensington, London W8 5SA, United Kingdom',
    hours: '10:00 AM – 6:00 PM (Tue – Sat, By Appointment)',
    phone: '+44 20 7946 0912',
    type: 'European Trousseau Fitting Suite'
  }
];

export const CURRENCY_RATES = {
  PKR: 1,
  GBP: 0.0028,
  USD: 0.0036,
  AED: 0.0132
};

export const CURRENCY_SYMBOLS: Record<string, string> = {
  PKR: 'PKR ',
  GBP: '£',
  USD: '$',
  AED: 'AED '
};

export const INITIAL_ORDER_TRACK: OrderTrack = {
  orderId: 'FZ-99214',
  productName: 'Shehnai-e-Feroza Lehenga',
  productImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDWwyeX5OljPMyFdwyNkh9ZGAwlD38yk_cIlz9fiBqUnIoRdZQwRqfjiyg7QUJkZ1skEV-PaaG4xVX4Azs51MozyDozQ1bWhRBpgVxyGjJUkN0Fpb-h_V1mN6SkWaLrnJ5pTnotBZu9XjSpfqsiL2Km-g4YmFYzcjyuJD1FDsZvsKpsNaq0VAdJ_-nfsyEKAWJfpj_EydeiZTS8a9G_9_1Xo3TBJC4ouBrrkTCxoPvAer1jGeLq_ILxw',
  orderDate: 'September 24, 2026',
  deliveryEstimate: 'October 18, 2026',
  karigarName: 'Master Ustaad Tariq & 6 Karigars',
  status: 'Hand Embroidery',
  currentHours: 154,
  totalHours: 220,
  destination: 'Kensington, London (DHL Express Global)'
};
