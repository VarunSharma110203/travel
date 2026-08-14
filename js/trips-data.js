// Shared comprehensive database of travel packages for Trustpack

const TRIPS = [
  {
    id: 'goa',
    name: 'Goa Hidden North — Beach + Café Weekender',
    place: 'Assagao & Morjim, North Goa',
    country: 'India',
    region: 'india',
    days: '3 days · 2 nights',
    price: 22800,
    perPersonPrice: 11400,
    match: '96%',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
    tags: ['slow pace', 'beach', 'foodie'],
    copy: 'Three quiet days with boutique villa stay, café crawling and vinyl sunset beach sessions.',
    fit: 'A calm beach package with short, low-friction local transfers.',
    season: 'Great weather in winter/spring; pleasant sea breeze.',
    operator: 'Coco Local Trips (Verified partner since 2020)',
    rating: 4.8,
    reviewsCount: 342,
    stay: {
      name: 'Casa Assagao Boutique Villa',
      location: '10 min ride to Morjim beach',
      rating: 4.7,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85',
      amenities: ['Private Pool', 'Free Wi-Fi', 'Artisan Breakfast', 'Bicycles Included']
    },
    transport: {
      airline: 'Vistara / IndiGo',
      route: 'Direct economy flights with 15kg baggage included',
      duration: '1h 15m non-stop',
      notes: 'Airport pick-up and drop included via private AC sedan.'
    },
    priceBreakdown: [
      { item: 'Return flights (Economy)', cost: 8600, note: 'Cabin + checked bag included' },
      { item: '2N Boutique Villa stay', cost: 10200, note: 'Pool villa with daily breakfast' },
      { item: 'Airport transfers & local cab', cost: 2400, note: 'Dedicated driver for 3 days' },
      { item: 'Concierge & taxes', cost: 1600, note: 'Includes GST & 24/7 travel support' }
    ],
    inclusions: [
      'Return economy flights from origin airport',
      '2 nights stay at Casa Assagao with daily breakfast',
      'Private airport pickup and drop-off',
      'Curated local café and beach map',
      'Free cancellation up to 7 days before departure'
    ],
    exclusions: ['Meals outside breakfast', 'Personal upgrades or shopping'],
    itinerary: [
      {
        day: 1,
        title: 'Arrive & Morjim Sundowner',
        morning: 'Morning flight arrival, villa check-in & welcome drink',
        afternoon: 'Pool time + Assagao boutique café crawl',
        evening: 'Vinyl sundowner at Morjim beach shack'
      },
      {
        day: 2,
        title: 'Slow Beach Day & Local Markets',
        morning: 'Artisan breakfast, bicycle ride to quiet beaches',
        afternoon: 'Fresh seafood lunch & Panjim heritage stroll',
        evening: 'Candlelight dinner at Assagao garden bistro'
      },
      {
        day: 3,
        title: 'Leisurely Breakfast & Departure',
        morning: 'Slow breakfast, final beach walk & souvenir pick-up',
        afternoon: 'Private sedan transfer to airport for evening flight'
      }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala Backwaters — Slow Houseboat Escape',
    place: 'Alleppey & Marari Beach, Kerala',
    country: 'India',
    region: 'india',
    days: '4 days · 3 nights',
    price: 34500,
    perPersonPrice: 17250,
    match: '94%',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
    tags: ['slow pace', 'nature', 'quiet'],
    copy: 'Private luxury houseboat, coconut groves, and a rain-ready itinerary built around serenity.',
    fit: 'A nature-led package with stay, serene boat transfers and fresh regional meals.',
    season: 'Lush monsoon & cool post-monsoon greens.',
    operator: 'Backwater Heritage Journeys (Verified)',
    rating: 4.9,
    reviewsCount: 418,
    stay: {
      name: 'Spice Coast Heritage Villa & Houseboat',
      location: 'Vembanad Lakefront, Alleppey',
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85',
      amenities: ['Private Houseboat Cruise', 'Lake View', 'Kalaripayattu Demo', 'All Meals Included']
    },
    transport: {
      airline: 'Air India / IndiGo',
      route: 'Direct flights to Kochi (COK) + 1.5h scenic road transfer',
      duration: '1h 45m flight',
      notes: 'Private AC cab from Kochi Airport to Alleppey.'
    },
    priceBreakdown: [
      { item: 'Return flights to Kochi', cost: 12400, note: 'Direct roundtrip seats' },
      { item: '1N Luxury Houseboat + 2N Villa', cost: 15600, note: 'Full board on houseboat' },
      { item: 'AC Chauffeur transfer', cost: 4200, note: 'Kochi-Alleppey-Marari' },
      { item: 'Taxes & local permits', cost: 2300, note: 'All-inclusive price' }
    ],
    inclusions: [
      'Return flights to Kochi',
      '1 night overnight luxury houseboat cruise (all meals)',
      '2 nights Marari beach resort stay with breakfast',
      'Private Kochi airport transfers',
      'Canoe village tour and toddy shop tasting'
    ],
    exclusions: ['Personal alcoholic beverages', 'Spa treatments'],
    itinerary: [
      {
        day: 1,
        title: 'Kochi Arrival & Houseboat Check-in',
        morning: 'Fly into Kochi, meet private driver for Alleppey drive',
        afternoon: 'Board traditional luxury houseboat, traditional lunch on water',
        evening: 'Sunset lake cruise, fresh fish dinner on board'
      },
      {
        day: 2,
        title: 'Canoe Village Stroll to Marari Beach',
        morning: 'Sunrise tea on deck, breakfast, narrow canal canoeing',
        afternoon: 'Disembark & transfer to Marari quiet beach resort',
        evening: 'Beach hammock relaxation & fresh coconut water'
      },
      {
        day: 3,
        title: 'Ayurvedic Wellness & Sunset stroll',
        morning: 'Morning beach yoga and traditional breakfast',
        afternoon: 'Ayurvedic massage & local fisherman village tour',
        evening: 'Seafood dinner under palm trees'
      },
      {
        day: 4,
        title: 'Fort Kochi Stroll & Return',
        morning: 'Breakfast, drive to historic Fort Kochi for Chinese nets stroll',
        afternoon: 'Souvenir shopping & evening return flight'
      }
    ]
  },
  {
    id: 'pondy',
    name: 'Pondicherry Pause — Heritage & Café Break',
    place: 'French Quarter, Pondicherry',
    country: 'India',
    region: 'india',
    days: '3 days · 2 nights',
    price: 18900,
    perPersonPrice: 9450,
    match: '89%',
    img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
    tags: ['walkable', 'foodie', 'culture'],
    copy: 'Yellow mustard villas, French pastries, bicycle boulevards and quiet beach promenades.',
    fit: 'An easy, low-logistics escape with maximum food and culture value.',
    season: 'Pleasant autumn & winter coastal breeze.',
    operator: 'Coromandel Coastal Escapes (Verified)',
    rating: 4.7,
    reviewsCount: 229,
    stay: {
      name: 'Maison Perumal Heritage Hotel',
      location: 'White Town / French Quarter',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85',
      amenities: ['Heritage Courtyard', 'French Bakery Breakfast', 'Bicycle Rentals', 'Auroville Pass']
    },
    transport: {
      airline: 'Scenic Coastal Road Drive',
      route: 'Private AC Sedan from Chennai (MAA) or direct Bangalore car',
      duration: '3h scenic drive on ECR',
      notes: 'Pickup from home/airport with driver at disposal.'
    },
    priceBreakdown: [
      { item: 'Private AC Highway Transfer', cost: 5800, note: 'Roundtrip ECR highway drive' },
      { item: '2N Maison Heritage Stay', cost: 9500, note: 'French Quarter suite + breakfast' },
      { item: 'Auroville & Heritage Passes', cost: 1800, note: 'Guided cycling tour included' },
      { item: 'Taxes & Driver allowance', cost: 1800, note: 'Tolls and driver stay included' }
    ],
    inclusions: [
      'Private AC sedan transport from door/airport',
      '2 nights stay in White Town French Mansion',
      'Daily French breakfast & bakery voucher',
      'Guided walking & cycling heritage tour',
      'Matrimandir Auroville visitor booking'
    ],
    exclusions: ['Dinner & lunches outside hotel'],
    itinerary: [
      {
        day: 1,
        title: 'ECR Scenic Drive & White Town Stroll',
        morning: 'Morning departure, drive along East Coast Road',
        afternoon: 'Check-in to Maison Perumal, lunch at Café des Arts',
        evening: 'Promenade beach stroll & rock beach breeze'
      },
      {
        day: 2,
        title: 'Auroville & French Pastry Trail',
        morning: 'French croissants, visit Auroville quiet green dome',
        afternoon: 'Handmade paper factory & clay pottery workshop',
        evening: 'Candlelight Franco-Tamil dining'
      },
      {
        day: 3,
        title: 'Sunrise Beach & Serenity Beach',
        morning: 'Sunrise at Rock Beach, filter coffee & breakfast',
        afternoon: 'Serenity beach surfing watch & afternoon scenic drive back'
      }
    ]
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan Royal Trail — Jaipur & Udaipur',
    place: 'Jaipur & Udaipur, Rajasthan',
    country: 'India',
    region: 'india',
    days: '5 days · 4 nights',
    price: 46000,
    perPersonPrice: 23000,
    match: '91%',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    tags: ['culture', 'heritage', 'palaces'],
    copy: 'Golden fort sunsets, Lake Pichola boat rides, royal heritage stays, and vibrant bazaars.',
    fit: 'Rich cultural trail with smooth inter-city transport and majestic palatial stays.',
    season: 'Best during October through March.',
    operator: 'Rajputana Heritage Trails (Verified)',
    rating: 4.9,
    reviewsCount: 512,
    stay: {
      name: 'Shahpura Haveli & Lake Palace Resort',
      location: 'Jaipur Old City & Udaipur Lakefront',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85',
      amenities: ['Heritage Courtyard', 'Royal Thali Dinner', 'Lake Boat Ride', 'Palace Pass']
    },
    transport: {
      airline: 'IndiGo / SpiceJet',
      route: 'Flight to Jaipur (JAI), Return from Udaipur (UDR)',
      duration: '1h 50m flight',
      notes: 'Intercity private cab with English-speaking driver guide.'
    },
    priceBreakdown: [
      { item: 'Multi-city flights', cost: 16800, note: 'Open-jaw flights included' },
      { item: '4N Haveli & Palace Stay', cost: 19500, note: 'Breakfast & 1 Royal Thali' },
      { item: 'Intercity transfers & local touring', cost: 6700, note: 'Private Innova for 5 days' },
      { item: 'Monuments, boat ride & taxes', cost: 3000, note: 'Fort entry tickets included' }
    ],
    inclusions: [
      'Multi-city flights (Origin -> Jaipur, Udaipur -> Origin)',
      '2 nights in Jaipur Haveli + 2 nights in Udaipur Lakeview Hotel',
      'Private AC vehicle for all transfers and fort excursions',
      'Lake Pichola sunset boat ride tickets',
      'Amber Fort elephant/jeep transfer & monument fees'
    ],
    exclusions: ['Personal shopping & tips'],
    itinerary: [
      {
        day: 1,
        title: 'Jaipur Pink City & City Palace',
        morning: 'Arrival in Jaipur, check-in to heritage Haveli',
        afternoon: 'Guided walk through Hawa Mahal & City Palace',
        evening: 'Rooftop dinner with view of lit-up Nahargarh Fort'
      },
      {
        day: 2,
        title: 'Amber Fort & Jal Mahal',
        morning: 'Morning Jeep ride up Amber Fort, Sheesh Mahal exploration',
        afternoon: 'Jal Mahal photography & Johari Bazaar textile tour',
        evening: 'Folk dance performance & Marwari feast'
      },
      {
        day: 3,
        title: 'Scenic Drive to Udaipur (City of Lakes)',
        morning: 'Breakfast, highway drive via Ranakpur Jain Temple',
        afternoon: 'Arrival in Udaipur, hotel check-in overlooking lake',
        evening: 'Sunset boat cruise on Lake Pichola past Jag Mandir'
      },
      {
        day: 4,
        title: 'Udaipur City Palace & Saheliyon ki Bari',
        morning: 'Detailed tour of Udaipur City Palace museum',
        afternoon: 'Saheliyon Ki Bari royal gardens & Bagore Ki Haveli',
        evening: 'Cultural show at Dharohar'
      },
      {
        day: 5,
        title: 'Monsoon Palace & Departure',
        morning: 'Morning visit to Sajjangarh Monsoon Palace for panoramic view',
        afternoon: 'Transfer to Udaipur airport for return flight'
      }
    ]
  },
  {
    id: 'himachal',
    name: 'Himachal Haven — Manali & Solang Valley',
    place: 'Manali & Naggar, Himachal Pradesh',
    country: 'India',
    region: 'india',
    days: '5 days · 4 nights',
    price: 38500,
    perPersonPrice: 19250,
    match: '93%',
    img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
    tags: ['mountains', 'adventure', 'scenic'],
    copy: 'Crisp pine forest air, snow peak views, cosy wooden chalets, and Solang valley adventures.',
    fit: 'Mountain retreat with scenic valley drives and cosy fireside stays.',
    season: 'Snow in winter; pleasant cool green valleys in spring/summer.',
    operator: 'Himalayan High Trails (Verified)',
    rating: 4.8,
    reviewsCount: 388,
    stay: {
      name: 'Apple Country Pines Resort',
      location: 'Old Manali Apple Orchards',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=85',
      amenities: ['Mountain View Balcony', 'Fireplace Lounge', 'Breakfast & Dinner', 'Atal Tunnel Tour']
    },
    transport: {
      airline: 'Flight to Chandigarh / Kullu + Private Cab',
      route: 'Flight to IXC/KUU + AC SUV drive through Himalayan expressway',
      duration: 'Flight + scenic valley drive',
      notes: 'All hill state permits and parking included.'
    },
    priceBreakdown: [
      { item: 'Return flights', cost: 14200, note: 'Direct roundtrip flights' },
      { item: '4N Pine Resort (Half Board)', cost: 16500, note: 'Breakfast + 4 dinners included' },
      { item: 'Private SUV for 5 Days', cost: 5800, note: 'Covers Solang, Atal Tunnel & Naggar' },
      { item: 'Permits, green tax & support', cost: 2000, note: 'Rohtang/Solang permits' }
    ],
    inclusions: [
      'Return flights to nearest airport',
      '4 nights in mountain view chalet with breakfast & dinner',
      'Private SUV for full duration',
      'Excursion to Solang Valley & Atal Tunnel (Sissu, Lahaul)',
      'Visit to Naggar Castle & Old Manali cafés'
    ],
    exclusions: ['Paragliding or zip-line fees'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Old Manali Stroll',
        morning: 'Airport pick-up and scenic drive along Beas River',
        afternoon: 'Check-in to resort, hot apple cider welcome',
        evening: 'Walk through Old Manali wooden lanes & Hadimba Temple'
      },
      {
        day: 2,
        title: 'Solang Valley & Atal Tunnel Excursion',
        morning: 'Drive through 9km Atal Tunnel to Sissu, Lahaul Valley',
        afternoon: 'Waterfall views in Lahaul & Solang Valley snow sports',
        evening: 'Return to resort for bonfire and buffet dinner'
      },
      {
        day: 3,
        title: 'Naggar Castle & Art Gallery Trail',
        morning: 'Breakfast, scenic drive to Naggar Heritage Castle',
        afternoon: 'Nicholas Roerich art estate & riverside café lunch',
        evening: 'Leisurely trout dinner in Old Manali'
      },
      {
        day: 4,
        title: 'Vashisht Hot Springs & Mall Road',
        morning: 'Natural sulfur hot bath at Vashisht village',
        afternoon: 'Shopping for wooden craft & Himachali shawls at Mall Road',
        evening: 'Fireside acoustic music night at resort'
      },
      {
        day: 5,
        title: 'Valley Drive & Return Flight',
        morning: 'Morning pine forest walk, breakfast',
        afternoon: 'Scenic drive to airport for return flight home'
      }
    ]
  },
  {
    id: 'bali',
    name: 'Bali First-Timer — Ubud Rice Fields to Uluwatu Reef',
    place: 'Ubud, Seminyak & Uluwatu, Bali',
    country: 'Indonesia',
    region: 'global',
    days: '7 days · 6 nights',
    price: 88000,
    perPersonPrice: 44000,
    match: '95%',
    img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
    tags: ['international', 'beach', 'culture'],
    copy: 'Private pool villa in Ubud, jungle swings, cliffside Uluwatu temple, and sunset beach clubs.',
    fit: 'Smooth international package with visa assistance, stays and private transfers.',
    season: 'Warm tropical sun year-round with clear ocean waters.',
    operator: 'Nusa Archipelago Travels (Verified International)',
    rating: 4.9,
    reviewsCount: 624,
    stay: {
      name: 'Kayon Jungle Sanctuary & Potato Head Villa',
      location: 'Ubud Jungle & Seminyak Coast',
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85',
      amenities: ['Private Pool Villa', 'Floating Breakfast', 'Kecak Dance Tickets', 'Visa on Arrival Assistance']
    },
    transport: {
      airline: 'Malaysia Airlines / VietJet / Singapore Air',
      route: 'Return flights to Denpasar Bali (DPS) with baggage',
      duration: '5h 30m total',
      notes: 'Private Balinese driver guide with dedicated vehicle.'
    },
    priceBreakdown: [
      { item: 'Return International Flights', cost: 42000, note: 'Roundtrip direct/1-stop with 20kg bag' },
      { item: '3N Ubud Pool Villa + 3N Beach Villa', cost: 31000, note: 'Includes daily floating breakfast' },
      { item: 'Private island driver & fuel (7 days)', cost: 9500, note: 'Dedicated English driver' },
      { item: 'Tegallalang, Temple entries & tax', cost: 5500, note: 'All admissions included' }
    ],
    inclusions: [
      'Return flights to Bali (DPS)',
      '3 nights Private Pool Villa in Ubud + 3 nights Beach Resort in Seminyak',
      'Daily breakfast including 1 signature floating breakfast',
      'Private car and driver for all 7 days',
      'Ubud Monkey Forest, Tegallalang Rice Terrace & Uluwatu Temple passes',
      'Visa-on-arrival guidance & SIM card upon arrival'
    ],
    exclusions: ['Visa fee (~$35 USD paid at airport)', 'Lunch/dinners outside plan'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paradise & Ubud Check-in',
        morning: 'Flight arrival at Denpasar Airport, flower garland welcome',
        afternoon: 'Transfer to Ubud private pool villa, check-in & rest',
        evening: 'Candlelight Balinese dinner overlooking jungle canopy'
      },
      {
        day: 2,
        title: 'Ubud Rice Terraces & Jungle Swing',
        morning: 'Signature floating breakfast in your private pool',
        afternoon: 'Tegallalang rice terraced walk, jungle swing & coffee plantation',
        evening: 'Ubud Royal Palace traditional dance show'
      },
      {
        day: 3,
        title: 'Waterfalls & Sacred Monkey Forest',
        morning: 'Visit Tegenungan Waterfall and take dip',
        afternoon: 'Sacred Monkey Forest sanctuary tour & Ubud market shopping',
        evening: 'Organic farm-to-table dinner in Ubud'
      },
      {
        day: 4,
        title: 'Transfer to Seminyak & Sunset Beach Club',
        morning: 'Breakfast, check-out and drive south towards Seminyak',
        afternoon: 'Check-in to oceanfront resort, poolside relaxation',
        evening: 'Sunset daybed reservation at Potato Head Beach Club'
      },
      {
        day: 5,
        title: 'Nusa Penida Island Day Tour',
        morning: 'Early morning speed boat to Nusa Penida island',
        afternoon: 'Visit Kelingking T-Rex Beach, Broken Beach & Angel Billabong',
        evening: 'Return speedboat to Bali mainland'
      },
      {
        day: 6,
        title: 'Uluwatu Cliff Temple & Kecak Fire Dance',
        morning: 'Leisurely beach morning & watersports at Tanjung Benoa',
        afternoon: 'Clifftop Uluwatu Temple visit',
        evening: 'Sunset Kecak Fire Dance performance + Jimbaran seafood barbecue'
      },
      {
        day: 7,
        title: 'Souvenir Shopping & Return Flight',
        morning: 'Breakfast, Krisna Balinese handicraft shopping',
        afternoon: 'Private transfer to Denpasar airport for flight back home'
      }
    ]
  },
  {
    id: 'vietnam',
    name: 'Vietnam, At Your Pace — Da Nang & Hoi An Lantern Trail',
    place: 'Da Nang & Hoi An, Central Vietnam',
    country: 'Vietnam',
    region: 'global',
    days: '6 days · 5 nights',
    price: 76000,
    perPersonPrice: 38000,
    match: '92%',
    img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    tags: ['international', 'foodie', 'culture'],
    copy: 'Lantern-lit ancient streets, Pho cooking classes, Golden Hands bridge, and soft sandy beaches.',
    fit: 'First-time international favorite with effortless logistics and incredible cuisine.',
    season: 'Warm sunny weather with low rainfall.',
    operator: 'Indochina Lantern Journeys (Verified)',
    rating: 4.8,
    reviewsCount: 489,
    stay: {
      name: 'Anantara Hoi An Resort & Monarque Da Nang',
      location: 'Hoi An Riverside & Da Nang My Khe Beach',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=85',
      amenities: ['Riverside Hotel', 'Bà Nà Hills Cable Car', 'Lantern Workshop', 'E-Visa Approval Included']
    },
    transport: {
      airline: 'VietJet Air / Vietnam Airlines',
      route: 'Direct or 1-stop flights to Da Nang (DAD)',
      duration: '4h 30m total',
      notes: 'Private AC transfer with dedicated English-speaking local guide.'
    },
    priceBreakdown: [
      { item: 'Return International Flights', cost: 36000, note: 'Baggage & meals included' },
      { item: '5N Luxury Boutique Hotels', cost: 26000, note: 'Daily gourmet breakfast buffet' },
      { item: 'Private transfers & Excursions', cost: 9000, note: 'Bà Nà Hills ticket + Cable car' },
      { item: 'Vietnam E-Visa & Taxes', cost: 5000, note: 'Pre-approved e-visa fee included' }
    ],
    inclusions: [
      'Return flights to Da Nang (DAD)',
      'Vietnam pre-approved E-visa fee and processing',
      '3 nights Hoi An Riverside Hotel + 2 nights Da Nang Beachfront Resort',
      'Daily breakfast buffet',
      'Bà Nà Hills & Golden Bridge roundtrip cable car passes',
      'Hoi An lantern making class & street food tasting tour'
    ],
    exclusions: ['Personal drinks & tips'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Da Nang & Transfer to Hoi An',
        morning: 'Arrival at Da Nang International Airport, driver greeting',
        afternoon: '30-minute drive to ancient Hoi An town hotel check-in',
        evening: 'Night market stroll under thousands of silk lanterns'
      },
      {
        day: 2,
        title: 'Ancient Town & Lantern Workshop',
        morning: 'Guided walking tour of Japanese Covered Bridge & ancient merchant houses',
        afternoon: 'Handmade silk lantern crafting workshop',
        evening: 'Sunset boat ride on Hoai River releasing flower lanterns'
      },
      {
        day: 3,
        title: 'Cooking Class & Coconut Basket Boat',
        morning: 'Basket boat ride through Cam Thanh water coconut forest',
        afternoon: 'Hands-on Vietnamese cooking class (Spring rolls & Bánh Xèo)',
        evening: 'Tailor shop visit for custom suit/dress fitting'
      },
      {
        day: 4,
        title: 'Bà Nà Hills & Golden Bridge',
        morning: 'Drive to Bà Nà Hills, take world longest single-cable car ride',
        afternoon: 'Walk across famous giant Golden Hands Bridge & French Village',
        evening: 'Transfer to Da Nang My Khe beachfront resort'
      },
      {
        day: 5,
        title: 'Da Nang Marble Mountains & Dragon Bridge',
        morning: 'Explore Marble Mountains & Linh Ung Pagoda giant Buddha',
        afternoon: 'Relax on My Khe beach sand',
        evening: 'Dragon Bridge fire & water show at weekend night'
      },
      {
        day: 6,
        title: 'Coffee Tasting & Return Flight',
        morning: 'Vietnamese egg coffee tasting & Han Market shopping',
        afternoon: 'Airport transfer for return flight home'
      }
    ]
  },
  {
    id: 'andaman',
    name: 'Andaman Coral & Crystal Waters — Havelock Island Escape',
    place: 'Port Blair & Havelock Island (Swaraj Dweep)',
    country: 'India',
    region: 'india',
    days: '5 days · 4 nights',
    price: 49500,
    perPersonPrice: 24750,
    match: '94%',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    tags: ['island', 'beach', 'snorkelling'],
    copy: 'Turquoise lagoons, Radhanagar white sand, coral reef snorkelling, and cruise rides across the Bay of Bengal.',
    fit: 'Exotic island destination inside India with smooth ferry bookings and beachside resorts.',
    season: 'Clear tropical waters perfect for underwater visibility.',
    operator: 'Island Coral Expeditions (Verified)',
    rating: 4.9,
    reviewsCount: 310,
    stay: {
      name: 'Barefoot at Havelock & Symphony Palms',
      location: 'Radhanagar Beach & Port Blair',
      rating: 4.9,
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85',
      amenities: ['Private Beach Access', 'Snorkelling Equipment', 'Makruzz Cruise Ferry', 'Breakfast & Dinners']
    },
    transport: {
      airline: 'IndiGo / SpiceJet',
      route: 'Direct flights to Port Blair (IXZ) + AC Catamaran Ferry to Havelock',
      duration: '2h 15m flight + 1.5h cruise ferry',
      notes: 'Makruzz premium catamaran ferry seats pre-booked.'
    },
    priceBreakdown: [
      { item: 'Return flights to Port Blair', cost: 18500, note: 'Direct roundtrip flights' },
      { item: '4N Beachfront Resort stay', cost: 21000, note: 'Radhanagar beach cottages' },
      { item: 'Makruzz Catamaran Ferry tickets', cost: 5200, note: 'Port Blair <-> Havelock return' },
      { item: 'Snorkelling, transfers & taxes', cost: 4800, note: 'Guide & equipment included' }
    ],
    inclusions: [
      'Return flights to Port Blair (IXZ)',
      'Roundtrip Makruzz AC catamaran ferry tickets to Havelock Island',
      '3 nights at Havelock Beach Resort + 1 night Port Blair hotel',
      'Daily breakfast & dinner',
      'Guided snorkelling session at Elephant Beach with underwater photo',
      'Visit to world-famous Radhanagar Beach (Asia’s top beach)'
    ],
    exclusions: ['Scuba diving upgrades (~₹3,500)'],
    itinerary: [
      {
        day: 1,
        title: 'Port Blair Arrival & Cellular Jail',
        morning: 'Fly into Port Blair, resort check-in & welcome coconut',
        afternoon: 'Historical tour of Cellular Jail',
        evening: 'Light & Sound show depicting Indian freedom struggle'
      },
      {
        day: 2,
        title: 'Catamaran Cruise to Havelock Island',
        morning: 'Board Makruzz luxury catamaran cruise across Bay of Bengal',
        afternoon: 'Arrive at Havelock Island, check-in to beachside resort',
        evening: 'Sunset at Radhanagar Beach (Beach No. 7)'
      },
      {
        day: 3,
        title: 'Elephant Beach Coral Snorkelling',
        morning: 'Speedboat ride to Elephant Beach',
        afternoon: 'Guided snorkelling over live coral reefs with colourful fish',
        evening: 'Beach bonfire & grilled seafood feast'
      },
      {
        day: 4,
        title: 'Kalapathar Beach & Return Ferry',
        morning: 'Sunrise photoshoot at turquoise Kalapathar Beach',
        afternoon: 'Afternoon ferry back to Port Blair main island',
        evening: 'Local handicraft market shopping at Aberdeen Bazaar'
      },
      {
        day: 5,
        title: 'Chidiya Tapu & Return Flight',
        morning: 'Breakfast, morning bird watching stroll',
        afternoon: 'Transfer to Port Blair airport for return flight'
      }
    ]
  },
  {
    id: 'varkala',
    name: 'Varkala Cliff & Red Sands — Kerala Coastal Escape',
    place: 'Varkala Cliff Beach, Kerala',
    country: 'India',
    region: 'india',
    days: '4 days · 3 nights',
    price: 25600,
    perPersonPrice: 12800,
    match: '97%',
    img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85',
    tags: ['beach', 'varkala', 'cliff', 'sunset', 'cafes', 'yoga'],
    copy: 'Red laterite cliffs overlooking Arabian sea waters, cliffside sunset cafés, quiet beaches & surfing.',
    fit: 'A tranquil cliffside beach escape for friends or couples looking for a relaxed vibe.',
    season: 'Best during Oct – March with clear skies and calm ocean.',
    operator: 'Kerala Coastal Trails (Verified partner)',
    rating: 4.9,
    reviewsCount: 289,
    stay: {
      name: 'Clafouti Beach Resort & Spa',
      location: 'On the North Cliff over looking Varkala Beach',
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85',
      amenities: ['Cliff View Balcony', 'Ayurvedic Spa', 'Cliffside Café', 'Free Wi-Fi']
    },
    transport: {
      airline: 'IndiGo / Air India (Trivandrum Airport)',
      route: 'Direct flight to Trivandrum (TRV) + 50 min coastal cab drive',
      duration: '1h 30m flight + 50m cab',
      notes: 'Private AC sedan transfer from TRV airport to Varkala Cliff included.'
    },
    priceBreakdown: [
      { item: 'Return flights to Trivandrum', cost: 10400, note: 'Direct flight with 15kg baggage' },
      { item: '3N Cliffside Beach Resort stay', cost: 11200, note: 'Sea-view room with daily breakfast' },
      { item: 'TRV Airport transfers', cost: 2600, note: 'Private AC driver for arrival & drop' },
      { item: 'Taxes & concierge', cost: 1400, note: 'Includes GST & local concierge support' }
    ],
    inclusions: [
      'Return flights to Trivandrum Airport',
      '3 nights cliff-view stay with daily breakfast',
      'Private airport pickup and drop-off',
      'Sunset yoga session on the cliff',
      'Free cancellation up to 7 days before departure'
    ],
    exclusions: ['Meals outside breakfast', 'Water sports equipment rental'],
    itinerary: [
      {
        day: 1,
        title: 'Arrive in Trivandrum & Varkala Cliff Check-in',
        morning: 'Flight to Trivandrum, scenic 50m coastal drive to Varkala',
        afternoon: 'Resort check-in, fresh tender coconut welcome',
        evening: 'First sunset from the famous North Cliff cafés'
      },
      {
        day: 2,
        title: 'Black Sand Beach & Surfing',
        morning: 'Morning cliff yoga, walk down to Black Sand Beach',
        afternoon: 'Beginner surfing lesson or sea swimming',
        evening: 'Fresh seafood dinner at Abhiba Cliff Café'
      },
      {
        day: 3,
        title: 'Kapil Lake & Backwater Boat Stroll',
        morning: 'Short drive to Kapil Lake estuary where lake meets ocean',
        afternoon: 'Kayaking or pedal boating in Kapil backwaters',
        evening: 'Janardhana Swamy 2000-year-old temple visit'
      },
      {
        day: 4,
        title: 'Morning Dip & Departure',
        morning: 'Final morning swim, cliffside souvenir shopping',
        afternoon: 'Transfer to Trivandrum airport for return flight'
      }
    ]
  }
];

// Export or make globally available in browser environment
if (typeof window !== 'undefined') {
  window.TRIPS = TRIPS;
}
