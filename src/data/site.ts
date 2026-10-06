import type { ImageMetadata } from 'astro';
import van from '../assets/photos/van.jpg';
import salonNiches from '../assets/photos/salon-niches.jpg';
import salonSetout from '../assets/photos/salon-setout.jpg';
import mediaFrame from '../assets/photos/media-frame.jpg';
import mediaWall from '../assets/photos/media-wall.jpg';
import pergola from '../assets/photos/pergola.jpg';
import sign from '../assets/photos/sign.jpg';
import cctv from '../assets/photos/cctv.jpg';
import conservatory from '../assets/photos/conservatory.jpg';
import porchLight from '../assets/photos/porch-light.jpg';
import giovannis from '../assets/photos/giovannis.jpg';
import wallLight from '../assets/photos/wall-light.jpg';

export const business = {
  name: 'AYBL Electrical',
  legalName: 'IN2 Electrical Ltd',
  companyNumber: '10161275',
  alternateName: 'IN2 Electrical',
  director: 'Antoni Harris',
  directorSince: '2013',
  incorporated: '4 May 2016',
  tagline: 'Trusted electrician services at your doorstep',
  phoneDisplay: '01234 862212',
  phoneTel: '+441234862212',
  email: 'antoni@ayblelectrical.co.uk',
  accountsEmail: 'accounts@ayblelectrical.co.uk',
  infoEmail: 'info@in2electrical.co.uk',
  street: "27 St Cuthbert's Street",
  locality: 'Bedford',
  region: 'Bedfordshire',
  postcode: 'MK40 3JG',
  country: 'United Kingdom',
  countryCode: 'GB',
  lat: 52.1386194,
  lng: -0.4629254,
  plusCode: '4GQP+CR',
  mapsUrl: 'https://maps.app.goo.gl/2cmJwT21dz1Bax417',
  reviewsUrl:
    'https://www.google.com/maps/place/AYBL+Electrical/@52.1386194,-0.4629254,17z/data=!4m8!3m7!1s0x4877b186bcd96415:0x1c00944d0c204730!8m2!3d52.1386194!4d-0.4629254!9m1!1b1',
  instagram: 'https://www.instagram.com/in2electrical/',
  rating: 4.6,
  reviewCount: 18,
  hours: [
    { days: 'Monday to Friday', opens: '09:00', closes: '17:00', label: '9am to 5pm' },
    { days: 'Saturday', opens: '09:00', closes: '13:00', label: '9am to 1pm' },
    { days: 'Sunday', opens: '', closes: '', label: 'Closed' },
  ],
  hourRows: [
    { day: 'Monday', time: '9am – 5pm' },
    { day: 'Tuesday', time: '9am – 5pm' },
    { day: 'Wednesday', time: '9am – 5pm' },
    { day: 'Thursday', time: '9am – 5pm' },
    { day: 'Friday', time: '9am – 5pm' },
    { day: 'Saturday', time: '9am – 1pm' },
    { day: 'Sunday', time: 'Closed' },
  ],
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact Us' },
] as const;

export type Service = {
  slug: string;
  title: string;
  nav: string;
  summary: string;
  meta: string;
  intro: string;
  paragraphs: string[];
  jobs: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'rewiring',
    title: 'House rewiring',
    nav: 'Rewiring',
    summary: 'New cables, sockets and lights when the old wiring is tired or in the way of a refit.',
    meta: 'House rewires in Bedford and Milton Keynes. New sockets, lights and garage wiring, planned around how you live.',
    intro:
      'A rewire is a big job. It is the right job when cables are old, a buyer’s report has failed, or you are opening up a kitchen or garage.',
    paragraphs: [
      'Customers have asked AYBL to rewire sockets through a whole house. Others have asked for a garage rewire, or new points while a kitchen was fitted. The work is planned room by room. You are told which parts of the home will be off, and for how long.',
      'Old rubber or fabric cables are a common reason to rewire. So is a fuse box with no modern breakers, or a socket that runs warm. A loft or extension added with spare cable is another.',
      'You get a written quote before anyone starts. Ask what will be cut into the walls. Ask what can stay in trunking. Ask how each room will be left at the end of the day.',
    ],
    jobs: [
      'Full and part rewires',
      'New sockets and switches',
      'Garage and outbuilding wiring',
      'Kitchen and utility wiring',
      'Making good the plan with your builder',
    ],
    related: ['consumer-units', 'lighting', 'repairs'],
  },
  {
    slug: 'consumer-units',
    title: 'Fuse boards',
    nav: 'Fuse boards',
    summary: 'A new consumer unit, sometimes still called a fuse board or fuse box, with the circuits labelled.',
    meta: 'Fuse board and consumer unit replacement in Bedford, Milton Keynes and nearby towns. Circuits labelled and explained.',
    intro:
      'The board on the wall feeds every circuit. A new one splits those circuits and makes a fault easier to find.',
    paragraphs: [
      'Google reviews mention a new fuse board in the house, and a second board in a garage. That work was often done on the same visit as a car charger or an outside socket. On Bark, the firm says consumer unit, fuse board and fuse box are three names for one job.',
      'A straight swap is not always straight. The circuits on the new board have to be tested. If a circuit is faulty, it should be repaired or left off. It should not be hidden behind a new door.',
      'Before you book, ask when the power will be off. Ask if a new earth is needed. Ask what paperwork you will get when the tests are written up.',
    ],
    jobs: [
      'Consumer unit replacement',
      'Garage and outbuilding boards',
      'Labelling every circuit',
      'RCD and surge protection where it is needed',
      'Test results explained in plain words',
    ],
    related: ['rewiring', 'testing', 'ev-chargers'],
  },
  {
    slug: 'ev-chargers',
    title: 'EV chargers',
    nav: 'EV chargers',
    summary: 'Home and workplace charge points, from a 7kW driveway unit up to 22kW where the power allows it.',
    meta: 'EV charger fitting for homes and businesses around Bedford and Milton Keynes. 7kW to 22kW, sited to suit the drive.',
    intro:
      'A charger is only as good as the cable run and the spare power in the board. The useful part of the visit is where the car actually parks.',
    paragraphs: [
      'AYBL’s Bark profile says the firm fits chargers from 7kW to 22kW. That covers homes and business sites. A 2022 review says Antoni talked through the choices and the place on the drive. He also helped with a home-charge grant that was open then.',
      'That home grant has since closed for most households. Do not budget for it unless a current scheme says you qualify. The wiring question stays the same. Can the supply take the charger? Does the board need an upgrade first?',
      'A tidy fit keeps the cable off the patio. It uses a route you have agreed. The unit is left at a height you can reach in the rain.',
    ],
    jobs: [
      'Home wall chargers',
      'Workplace and commercial chargers',
      'Board upgrades that the charger needs',
      'Outside sockets fitted on the same visit',
      'A clear note of what the supply can take',
    ],
    related: ['consumer-units', 'commercial', 'repairs'],
  },
  {
    slug: 'lighting',
    title: 'Lighting',
    nav: 'Lighting',
    summary: 'Spotlights, garden lights, feature walls, porch lights and shop signs, wired so the result looks finished.',
    meta: 'Lighting installation in Bedford and nearby towns. Kitchens, gardens, media walls, porch lights and shop signs.',
    intro:
      'Most lighting calls are simple. A kitchen is gloomy. A drive is dark. Or a wall should hold a fire and a television.',
    paragraphs: [
      'Reviews mention kitchen spotlights, garden lights, driveway lights and outside lights. They also mention a media wall wired and tiled with Sam. The firm’s own photos show porch lights, festoon lights on a pergola, lit niches in a salon, and a shop sign.',
      'Good lighting is not a pile of fittings. It is the right number of points. The switch sits where your hand already goes. The cables do not show once the plaster and the tiles are on.',
      'If a joiner or tiler is on the job, book the first fix before the boards go on. Moving a cable after the wall is finished costs more. It also marks the work.',
    ],
    jobs: [
      'Kitchen and bathroom downlights',
      'Media walls and feature fires',
      'Garden, pergola and driveway lights',
      'Porch lights with sensors',
      'Shop and unit sign lighting',
    ],
    related: ['rewiring', 'commercial', 'security'],
  },
  {
    slug: 'testing',
    title: 'Testing and inspections',
    nav: 'Testing',
    summary: 'Electrical inspection and testing for homes and commercial buildings, with the results written in a report.',
    meta: 'Electrical inspection and testing for homes, rentals and shops around Bedford. Faults explained before any repair quote.',
    intro:
      'A test tells you what is safe to keep and what should be changed. It is the report landlords, buyers and insurers ask for, and it is how a fault gets a name.',
    paragraphs: [
      'IN2 Electrical listed inspection and testing as a core service, for homes and for commercial premises. An inspection is a look, a set of meter tests, and a report. It is not the same thing as a repair, though the two often follow each other.',
      'You should be able to read the summary without a textbook. Ask which items are dangerous now, which can wait, and which are only notes. Then decide what to book.',
      'If the property is rented, sold, or used by the public, say so when you call. The paperwork and the depth of the test are not the same for every building.',
    ],
    jobs: [
      'Home condition reports',
      'Reports for landlords and sales',
      'Commercial inspections',
      'Fault finding after a breaker trips',
      'A written list of what to fix first',
    ],
    related: ['repairs', 'consumer-units', 'commercial'],
  },
  {
    slug: 'security',
    title: 'CCTV, alarms and door entry',
    nav: 'CCTV and alarms',
    summary: 'Cameras, intruder alarms and door entry, fitted so the pictures and the locks work on a normal day.',
    meta: 'CCTV, intruder alarms and door entry around Bedford and Flitwick. Domestic systems and larger sites.',
    intro:
      'A camera that points at the sky is not a security system. Neither is a door lock that fails on a Monday morning. The fit has to suit the building and the people who use it.',
    paragraphs: [
      'The firm’s own list includes CCTV, intruder alarms and door entry. That includes doors in busy buildings that cannot be out of action. In November 2024, Flitwick Town Council’s purchase list shows a payment to AYBL Electrical. It was for a CCTV system at the Rufus Centre.',
      'At home, people usually want a small dome camera, an alarm they will set, or a doorbell that does not rely on a battery. One review describes two Ring doorbells wired in so the batteries were no longer the weak point.',
      'Say what you want to see. Say who needs to open the door. Say if the recording has to stay on site. That decides the cable routes before any holes are drilled.',
    ],
    jobs: [
      'Domestic CCTV',
      'Commercial camera systems',
      'Intruder alarms',
      'Door entry and access',
      'Wired video doorbells',
    ],
    related: ['lighting', 'commercial', 'repairs'],
  },
  {
    slug: 'repairs',
    title: 'Repairs and small jobs',
    nav: 'Repairs',
    summary: 'The socket, light, fan or trip that needs a competent person, including call-outs when something has failed.',
    meta: 'Electrical repairs in Bedford and nearby towns. Sockets, lights, fans, tripping circuits and small jobs done tidy.',
    intro:
      'Not every visit is a rewire. A lot of the work is one room, one fault, or a job other people looked at and left.',
    paragraphs: [
      'Reviews describe a moved switch, an extractor fan, spotlights, a small hallway job, new kitchen lights, and an emergency call-out. One customer wrote that other electricians had called the work too awkward, and that Antoni came, explained a way to do it, and carried it out.',
      'If a breaker will not stay on, switch off the circuit and do not keep resetting it. Water, a burning smell, or a warm socket is a reason to stop using that part of the system and call.',
      'The published hours are Monday to Friday, 9am to 5pm, and Saturday 9am to 1pm. Sunday is closed. Call during those hours. Do not treat the firm as a 24-hour call centre. That is not what the listing or the old site promised.',
    ],
    jobs: [
      'Tripping circuits and dead sockets',
      'Light and fan repairs',
      'Like-for-like fitting changes',
      'Small additions, planned properly',
      'Making a room safe after a fault',
    ],
    related: ['testing', 'rewiring', 'lighting'],
  },
  {
    slug: 'commercial',
    title: 'Commercial and new builds',
    nav: 'Commercial',
    summary: 'Shops, kiosks, council sites and new houses. Maintenance, fit-outs and first-fix wiring.',
    meta: 'Commercial electrician for shops, fit-outs and new homes around Bedford, Milton Keynes and Flitwick.',
    intro:
      'The same people who wire houses also wire shops, kiosks and public buildings. The standard does not drop because the client is a business.',
    paragraphs: [
      'In Milton Keynes, Filippo Gristina wrote about the Giovanni’s Gelato kiosk. Anthony fitted a new fuse board, new sockets and a rewire. The firm’s photos show that kiosk at night. They also show a salon fit-out and lights on a shop sign.',
      'Flitwick Town Council’s 2024 purchase lists name AYBL Electrical. The jobs were a faulty street light, lighting at Lockyer, and CCTV at the Rufus Centre. New-build wiring was on the old IN2 service list. The van has been photographed outside new houses.',
      'Shop work needs a date the doors can open. Staff need a board they can reset. You need a name to call for the snag list. Say if the site is live, empty, or still a shell.',
    ],
    jobs: [
      'Shop and kiosk fit-outs',
      'New-build electrical install',
      'Maintenance and small works',
      'External and street lighting',
      'CCTV for commercial sites',
    ],
    related: ['lighting', 'security', 'ev-chargers'],
  },
];

export type Area = {
  slug: string;
  name: string;
  county: string;
  summary: string;
  meta: string;
  paragraphs: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: 'bedford',
    name: 'Bedford',
    county: 'Bedfordshire',
    summary: 'The base is on St Cuthbert’s Street, in the town centre.',
    meta: 'Electrician in Bedford for fuse boards, rewires, EV chargers and repairs. AYBL Electrical, 27 St Cuthbert’s Street. Call 01234 862212.',
    paragraphs: [
      'AYBL Electrical is based at 27 St Cuthbert’s Street, Bedford, MK40 3JG. The street sits in the town centre, near the High Street and a short walk from the Great Ouse. Google lists the firm here, and it is the registered office of IN2 Electrical Ltd.',
      'Bedford houses vary a lot in a few streets. Centre terraces are often Victorian or Edwardian. Further out you meet 1930s semis and newer estates towards Kempston, Wootton and Great Denham. Older homes are the ones that usually need a new fuse board or a rewire. Newer ones more often need extra sockets, garden lights or a charger on the drive.',
      'Reviews from Bedford customers mention fuse boards, EV chargers, outside lights, a full house of new sockets, and a media wall. If the job is in the town, say the area when you call so the visit can be booked in a sensible run.',
    ],
    nearby: ['flitwick', 'milton-keynes', 'leighton-buzzard'],
  },
  {
    slug: 'milton-keynes',
    name: 'Milton Keynes',
    county: 'Buckinghamshire',
    summary: 'New houses, grid-square estates, and work inside centre:mk.',
    meta: 'Electrician in Milton Keynes for new builds, shop fit-outs, fuse boards and EV chargers. AYBL Electrical, based in Bedford.',
    paragraphs: [
      'Milton Keynes is the other town the firm has always named. The old IN2 site listed it beside Bedford. Antoni Harris’s public profile also places his work there. The Bark page said the team served Milton Keynes and the towns around it.',
      'A lot of MK housing is newer than Bedford’s. Estates from the 1970s onward, and brand new sites, need a different visit. People add circuits. They add car chargers the first board was not sized for. They also want cables in while the plaster is still open.',
      'One clear commercial job is in the shopping centre. Filippo Gristina wrote in June 2022 that the kiosk for Giovanni’s Gelato was rewired, with a new fuse board and new sockets. The night photo of that kiosk is in the project gallery.',
    ],
    nearby: ['woburn-sands', 'olney', 'leighton-buzzard'],
  },
  {
    slug: 'luton',
    name: 'Luton',
    county: 'Bedfordshire',
    summary: 'Listed on the Bark profile as a town the firm serves.',
    meta: 'Electrician serving Luton from Bedford. Fuse boards, lighting, testing and repairs for homes and small commercial units.',
    paragraphs: [
      'AYBL’s Bark profile says the firm serves Luton, Milton Keynes and the surrounding area. Luton is about 20 miles south of the Bedford base, so it sits inside a normal working day rather than a special trip.',
      'The town has tight terraces, post-war houses, newer estates, and a lot of small commercial units. Terraces often need a fuse board change and a proper look at the earthing. Shops and workshops more often need lighting, a small power supply, or a test before a lease.',
      'Say whether the property is a house, a flat, or a unit on an estate. Access, parking and the supply head are different in each, and they change the time on site.',
    ],
    nearby: ['harpenden', 'hitchin', 'flitwick'],
  },
  {
    slug: 'flitwick',
    name: 'Flitwick',
    county: 'Bedfordshire',
    summary: 'Public council records show lighting and CCTV work here in 2024.',
    meta: 'Electrician in Flitwick. AYBL Electrical has carried out street lighting, CCTV and lighting work recorded by the town council.',
    paragraphs: [
      'Flitwick is on the rail line south of Bedford, with a high street, older houses near the centre, and estates spread out towards the countryside. It is a short run from St Cuthbert’s Street.',
      'This is not a guess at a service area. Flitwick Town Council’s published lists of purchases over £500 name AYBL Electrical in 2024. The descriptions are a faulty street light in October, a CCTV system for the Rufus Centre in November, and a first instalment for lighting at Lockyer in December.',
      'Homeowners in the town book the same kinds of jobs as the rest of the patch: fuse boards, extra sockets, garden lights, chargers and repairs. If the building is a hall, a shop or a council site, say so. The access and the paperwork are different.',
    ],
    nearby: ['bedford', 'luton', 'harpenden'],
  },
  {
    slug: 'harpenden',
    name: 'Harpenden',
    county: 'Hertfordshire',
    summary: 'One of the Hertfordshire towns on the firm’s own area list.',
    meta: 'Electrician for Harpenden homes. AYBL Electrical, listed by the firm among its Beds, Herts and Bucks towns.',
    paragraphs: [
      'Harpenden was on the IN2 Electrical area list. The line on that site was “electricians covering Beds, Herts and Bucks”. It is a town between Luton and St Albans, with a long high street and many older family houses.',
      'Those houses often still have boards and wiring from years of small additions. A typical visit is a fuse board, a kitchen lighting plan, or a test before an extension starts.',
      'The drive from Bedford is longer than Flitwick or Kempston. Book ahead rather than expecting a same-morning slot, and send a photo of the board if you want a useful first conversation.',
    ],
    nearby: ['hitchin', 'luton', 'flitwick'],
  },
  {
    slug: 'hitchin',
    name: 'Hitchin',
    county: 'Hertfordshire',
    summary: 'A market town on the same published area list.',
    meta: 'Electrician serving Hitchin in north Hertfordshire. Rewires, fuse boards, lighting and repairs from AYBL Electrical.',
    paragraphs: [
      'Hitchin was named on the firm’s area pages next to Harpenden, Bedford and Milton Keynes. It is a market town in north Hertfordshire. The centre has older brick houses and shops. The edges have later estates.',
      'Period houses need care with cable routes. Chasing every wall is not always the right answer, and a listed or old shop front needs a plan before the first hole. Newer estates are more often a case of extra points, outside lights and chargers.',
      'If you are comparing quotes, ask each electrician who will actually come, and whether the price includes the test at the end. A low figure that leaves the board untested is not a saving.',
    ],
    nearby: ['harpenden', 'luton', 'leighton-buzzard'],
  },
  {
    slug: 'leighton-buzzard',
    name: 'Leighton Buzzard',
    county: 'Bedfordshire',
    summary: 'On the firm’s area list, between Bedford and Milton Keynes.',
    meta: 'Electrician in Leighton Buzzard for home rewires, new builds, fuse boards and EV chargers. AYBL Electrical.',
    paragraphs: [
      'Leighton Buzzard was a published area on the IN2 site, which fits the map. The town sits between the Bedford base and Milton Keynes, with a market-town centre and a lot of new housing on the outskirts.',
      'New estates here raise the same questions as MK. The supply is modern, but the board fills up quickly once you add a charger, a hot tub, or a garden room. Older streets nearer the centre are more likely to need a rewire or a new board.',
      'The firm’s photos include conservatory power, garden lighting and new-house visits. Those are the jobs that come up on this side of the county.',
    ],
    nearby: ['milton-keynes', 'woburn-sands', 'bedford'],
  },
  {
    slug: 'olney',
    name: 'Olney',
    county: 'Buckinghamshire',
    summary: 'A small market town north of Milton Keynes, on the old area list.',
    meta: 'Electrician serving Olney. AYBL Electrical covers this north Buckinghamshire market town from Bedford.',
    paragraphs: [
      'Olney was listed on the firm’s area pages. It is a small market town on the Great Ouse, north of Milton Keynes, with a high street of independent shops and stone and brick houses.',
      'High-street shops need work done around opening hours. Houses in the town often have thick walls and boards tucked into cupboards. Both are reasons to look at the job before naming a price.',
      'Garden lighting and outside sockets are common asks in a town where people use the space behind the house. Send a photo of where you want the light, and of the fuse board, when you enquire.',
    ],
    nearby: ['milton-keynes', 'woburn-sands', 'bedford'],
  },
  {
    slug: 'woburn-sands',
    name: 'Woburn Sands',
    county: 'Buckinghamshire',
    summary: 'A high-street village on the edge of Milton Keynes, on the old area list.',
    meta: 'Electrician for Woburn Sands and the edge of Milton Keynes. AYBL Electrical, based in Bedford.',
    paragraphs: [
      'Woburn Sands was on the published area list. It sits on the south-eastern edge of Milton Keynes, with a short high street, older houses, and newer homes nearby.',
      'Because it is on the MK edge, jobs mix the two patterns. A cottage or older semi may need a board change. A newer house may need a charger, extra outside lights, or a circuit for a garden room.',
      'Parking on the high street is tight. If the job is a shop, say where a van can stop. If it is a house, a driveway or a side gate is enough.',
    ],
    nearby: ['milton-keynes', 'leighton-buzzard', 'olney'],
  },
];

export type Project = {
  title: string;
  place: string;
  year: string;
  image: ImageMetadata;
  alt: string;
  text: string;
  service: string;
};

export const projects: Project[] = [
  {
    title: 'Giovanni’s Gelato kiosk',
    place: 'centre:mk, Milton Keynes',
    year: '2022',
    image: giovannis,
    alt: 'Giovanni’s Gelato kiosk at night, with blue LED lighting under the counter in a shopping centre.',
    text: 'Filippo Gristina wrote that Anthony fitted a new fuse board, new sockets, and a rewire at this kiosk in the Milton Keynes shopping centre. The photo is from the firm’s own gallery.',
    service: 'commercial',
  },
  {
    title: 'Media wall',
    place: 'Customer’s home',
    year: '2022',
    image: mediaWall,
    alt: 'White media wall with a wall-mounted television, a soundbar niche, and a blue electric fire.',
    text: 'James Harding wrote that Antoni and Sam installed a media wall, and that the wiring and the tiling were the focal point of the house. This is the finished wall. The frame photo shows the cables and back boxes before it was closed up.',
    service: 'lighting',
  },
  {
    title: 'Media wall, first fix',
    place: 'Customer’s home',
    year: '2022',
    image: mediaFrame,
    alt: 'Timber frame for a media wall, with cables, back boxes and an electric fire being set out.',
    text: 'The same kind of wall, still open. Sockets and cables are set in the studwork before the boards and tiles hide them.',
    service: 'lighting',
  },
  {
    title: 'Salon lighting',
    place: 'Commercial fit-out',
    year: '2021',
    image: salonNiches,
    alt: 'Three warm recessed light niches above salon wash chairs and a green tiled wall.',
    text: 'A salon wash area with three lit niches over the chairs. A second gallery photo shows the levels being set out before the fittings went in.',
    service: 'lighting',
  },
  {
    title: 'Setting out salon lights',
    place: 'Commercial fit-out',
    year: '2021',
    image: salonSetout,
    alt: 'Green laser lines used to set out lights in a salon with wash chairs.',
    text: 'Laser lines on the floor and wall while the light positions were marked. This is the unglamorous part that makes the finished niches line up.',
    service: 'lighting',
  },
  {
    title: 'Garden pergola lights',
    place: 'Garden',
    year: '2021',
    image: pergola,
    alt: 'Timber garden pergola with a short run of warm festoon lights over a deck.',
    text: 'A short run of warm lamps under a new pergola, with low garden lights at the deck edge. Reviews also mention garden and driveway lighting on a full house job.',
    service: 'lighting',
  },
  {
    title: 'Porch light',
    place: 'Front door',
    year: '2021',
    image: porchLight,
    alt: 'Stainless steel outdoor wall light switched on beside a house number and a white porch.',
    text: 'An outside light by a front door. Reviews mention outside lights fitted on the same day as a fuse board and a charger.',
    service: 'lighting',
  },
  {
    title: 'Sensor wall light',
    place: 'Outside wall',
    year: '2021',
    image: wallLight,
    alt: 'Close view of a grey outdoor wall light with a movement sensor, lit against brick.',
    text: 'A sensor light on an outside wall. The head aims down the path, and the sensor sits on the same plate.',
    service: 'lighting',
  },
  {
    title: 'Shop sign lighting',
    place: 'J. Smith Flooring',
    year: '2021',
    image: sign,
    alt: 'A ladder against a brick commercial unit while lights are fitted above a J. Smith Flooring sign.',
    text: 'Lights being fitted along the sign on a commercial unit. The photo is from the firm’s gallery. It shows the ladder work, not a claim about any other trade on that site.',
    service: 'commercial',
  },
  {
    title: 'Room camera',
    place: 'Finished room',
    year: '2021',
    image: cctv,
    alt: 'A small white dome camera mounted where the wall meets the ceiling in a finished room.',
    text: 'A small dome camera in a finished room, kept off the middle of the ceiling. CCTV is one of the services the firm has advertised, and the 2024 Rufus Centre system in Flitwick is a larger example.',
    service: 'security',
  },
  {
    title: 'Conservatory power',
    place: 'Home extension',
    year: '2021',
    image: conservatory,
    alt: 'A double socket on a brick dwarf wall inside a conservatory that is still being fitted out.',
    text: 'A socket on the dwarf wall of a conservatory, pictured while the floor was still bare. Power in a garden room has to be planned before the finishes go down.',
    service: 'rewiring',
  },
  {
    title: 'New-build visit',
    place: 'New houses',
    year: '2021',
    image: van,
    alt: 'Black IN2 Electrical van parked outside a row of new houses with red tiled roofs.',
    text: 'The IN2 Electrical van outside new houses. New-build electrics were on the firm’s service list. The van livery is the older trading name. Google lists the same business as AYBL Electrical.',
    service: 'commercial',
  },
];

export type Review = {
  name: string;
  date: string;
  rating: number;
  source: 'Google' | 'Bark';
  text: string;
};

export const reviews: Review[] = [
  {
    name: 'Google reviewer',
    date: '31 July 2022',
    rating: 5,
    source: 'Google',
    text: 'Tom carried out the electrical work when I was fitting my new kitchen. He was punctual, provided great quality work and explained everything clearly. It was a great experience dealing with him and I am thankful for his willingness and patience to go the extra mile to make sure everything was done in a way that satisfied the client.',
  },
  {
    name: 'C Gristina',
    date: '26 July 2022',
    rating: 5,
    source: 'Google',
    text: 'What can I say… Antoni is a delight to work with. He provides a great service, very professional and the most neatest and cleanest electrcian I have ever come across. He takes pride in his work and the end result is faultless. He has carried out multiple jobs for me, from EV charge installs to new electrical radiators and upgrading fuse boards. I would highly recommend In2Electrical, you wont find any better! Keep up the great work guys.',
  },
  {
    name: 'Shernaz Patell',
    date: '18 July 2022',
    rating: 5,
    source: 'Google',
    text: 'I would happily recommend Antoni, communication was quick and responsive from the beginning. We only had a small job and he was on time, very tidy and respectful of our home and I think he left our hallway cleaner than it was before he arrived. Would definitely use them again and recommend to friends. Thank you.',
  },
  {
    name: 'Rosiepops Piv',
    date: '7 April 2022',
    rating: 5,
    source: 'Google',
    text: 'Antoni installed an electric car charger for us in March. From the beginning he was very friendly, professional and helpful. Talked us through all the different choices and where to locate the charger for our uses and also helped us claim the government subsidy. While he was here we asked him to fit a new fuse box, outside light and socket. All of which were done well. Antoni works very tidily and cleaned up well before he left. For the work he did I feel we got very good value and I would definitely recommend IN2 Electrical.',
  },
  {
    name: 'James Harding',
    date: '10 February 2022',
    rating: 5,
    source: 'Google',
    text: 'We had Antoni and Sam install our Media Wall recently. In all honesty, the workmanship and attention to detail is really high end. The intricate work with the wiring, and tiling was superb and we love it. It is without doubt the focal point of the house. We would recommend Ant and the team to anybody looking for an electrical firm.',
  },
  {
    name: 'Google reviewer',
    date: '9 January 2022',
    rating: 5,
    source: 'Google',
    text: 'We needed a switch moving, an extractor fan installed and spotlights putting in. Many other people came and either said it was too complicated, stood around scratching their heads, and on one occasion agreed to do the work then when hit with a problem, ran away. I called Antoni who listened to me and said he could do the work one way or another and came to look and quote. When doing so he had many ideas as to how he could do the job and explained it very clearly.',
  },
  {
    name: 'Google reviewer',
    date: '22 December 2021',
    rating: 5,
    source: 'Google',
    text: 'We would definitely recommend this company. Phoned several electricians and to no avail, found in2 Electrical number on Bedford home page. Contacted the number and spoke to Antoni to which we received a very prompt service. He was amazingly professional and very well informed, extremely helpful and extremely tidy, with excellent rates. Would not hesitate to recommend him for all your electrical needs. Would like to say thank you Antoni for such a great service.',
  },
  {
    name: 'K G',
    date: '6 December 2021',
    rating: 5,
    source: 'Google',
    text: 'If we could give 10 stars we would! Antoni has done an absolutely amazing job throughout our house. He completed our work to a high standard, which included: rewired and refitted every socket in our property; installed a brand new switch board in the main house and a separate one in our garage; wired in a new boiler; installed all new electrical appliances in our kitchen; installed spotlights in our kitchen; rewired our garage; installed and wired in 2 ring doorbells so they never run out of battery; installed garden and driveway lighting.',
  },
  {
    name: 'Taiwo Fakoya',
    date: '24 August 2022',
    rating: 5,
    source: 'Bark',
    text: 'Very professional and quick. Response is reasonably priced.',
  },
  {
    name: 'Filippo Gristina',
    date: '11 June 2022',
    rating: 5,
    source: 'Bark',
    text: 'Anthony installed a new fuse board and new multiple gang sockets and also required the whole unit to be re-wired at the award winning kiosk in Milton Keynes shopping centre. The service and expertise was second to none. Would recommend in2 for all your electrical needs.',
  },
  {
    name: 'Robin Goodwin',
    date: '10 January 2022',
    rating: 5,
    source: 'Bark',
    text: 'We were very pleased with Antoni for the work done replacing our kitchen lights. I would have no hesitation using his company again.',
  },
  {
    name: 'Abi Fowkes',
    date: '4 August 2021',
    rating: 5,
    source: 'Bark',
    text: 'Excellent service with very knowledgable and friendly staff. Would highly recommend for emergency call out.',
  },
];

export const faqs = [
  {
    q: 'Where are you based, and where do you work?',
    a: 'The Google listing and the registered office are 27 St Cuthbert’s Street, Bedford, MK40 3JG. The towns named by the firm are Bedford, Milton Keynes, Luton, Harpenden, Hitchin, Leighton Buzzard, Olney and Woburn Sands. Flitwick is included because council records show work there in 2024. If you are in another Beds, Herts or Bucks town, call and ask.',
  },
  {
    q: 'What should I call the company?',
    a: 'Google lists the business as AYBL Electrical. The limited company is IN2 Electrical Ltd, company number 10161275. The van and many reviews say IN2 Electrical. It is the same firm. Antoni Harris is the director.',
  },
  {
    q: 'What are the opening hours?',
    a: 'The hours published on the firm’s own site were Monday to Friday, 9am to 5pm, and Saturday 9am to 1pm. Sunday is closed. Google’s listing shows Tuesday as 9am to 5pm, which matches. Call during those hours.',
  },
  {
    q: 'Do you give a fixed quote?',
    a: 'The old site said work was quoted at a fixed price, and that the quote was the price. Reviews talk about fair rates and good value. Ask for the figure in writing before the job starts, including what happens if a hidden fault turns up.',
  },
  {
    q: 'Will the job be signed off?',
    a: 'For a new circuit, a board change, or a report, ask how the test will be recorded and who notifies Building Control if the work needs it. Get that answer before you accept the quote. This site does not show a scheme logo, because a current registration number was not on the public listing.',
  },
  {
    q: 'Can you come out in an emergency?',
    a: 'A Bark review recommends the firm for an emergency call-out, so people have used them that way. The published hours are not 24 hours. If there is burning, water on electrics, or a shock risk, leave the circuit off and call for help. Do not keep resetting a breaker.',
  },
];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function areaBySlug(slug: string) {
  return areas.find((area) => area.slug === slug);
}
