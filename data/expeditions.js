// Trail Core Expeditions Database
export const expeditions = [
  {
    title: "Chanshal Pass & Pabbar Valley Road Trip",
    slug: "chanshal-pass",
    duration: "4 Days / 3 Nights",
    price: "From ₹18,999",
    priceNote: "per person",
    img: "/images/road-trip.png",
    badge: "Offbeat",
    route: "Shimla → Rohru → Chanshal → Narkanda → Shimla",
    season: "Apr — Jun, Sep — Nov",
    difficulty: "Moderate",
    groupSize: "4–6",
    includes: ["Transport", "Riverside Stay", "Meals", "Chanshal Excursion"],
    alignOffset: "",
    destination_ids: ["shimla", "narkanda"],
    pricingOptions: {
      4: { price: "22,999", perPerson: "person", label: "4 Guests" },
      5: { price: "20,999", perPerson: "person", label: "5 Guests" },
      6: { price: "18,999", perPerson: "person", label: "6 Guests", bestValue: true },
    },
    highlights: [
      { title: "Shimla Local Sightseeing", desc: "Heritage walks across Mall Road, The Ridge, and Christ Church." },
      { title: "Riverside Stay in Rohru", desc: "Premium cabins situated directly on the banks of the Pabbar River." },
      { title: "Chanshal Pass Excursion", desc: "High-altitude drive to the untouched 3,750m Himalayan pass." },
      { title: "Bonfire Evening", desc: "A cozy riverside bonfire gathering under starry mountain skies." },
      { title: "Apple Valley Drives", desc: "Scenic routes tracing through the famous Kotkhai apple orchards." },
      { title: "Narkanda & Hatu Peak", desc: "Panoramic view of Himalayan peaks from a forest-surrounded summit." }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Shimla Arrival & Local Sightseeing",
        shortDesc: "Colonial walks, heritage architecture, and old mountain charm.",
        details: [
          "Arrive in Shimla, the heritage summer capital of British India.",
          "Check into your premium heritage-inspired hotel and freshen up.",
          "In the afternoon, proceed for a guided walking tour of the historical Mall Road, The Ridge, and the neo-gothic Christ Church.",
          "Explore Lakkar Bazaar, famous for wooden crafts, and enjoy leisure evening café hops."
        ],
        stay_id: "stay-shimla-cedar",
        stay_name: "Shimla Cedar Guesthouse",
        meals: "Dinner Included",
        transit: "Arrival & walking tour"
      },
      {
        day: 2,
        title: "Shimla → Kufri → Kotkhai → Hatkoti → Rohru",
        shortDesc: "Drives through apple orchards, pine forests, and riverside tracks.",
        details: [
          "Depart Shimla early, driving past scenic Kufri viewpoints and dense pine reserves.",
          "Traverse through Theog and Kotkhai, the heart of India's richest apple belts.",
          "Stop at the ancient Hatkoti Temple complex on the banks of the Pabbar River.",
          "Arrive at the riverside retreat in Rohru. Conclude the day with a cozy bonfire by the Pabbar River."
        ],
        stay_name: "Pabbar Valley Riverside Camp",
        meals: "Breakfast & Dinner Included",
        transit: "135 km / 5.5 hours driving"
      },
      {
        day: 3,
        title: "Chanshal Pass Excursion",
        shortDesc: "Summit drive up to 3,750m with panoramic snow peaks.",
        details: [
          "Embark on the highlight drive towards the mighty Chanshal Pass (3,750m).",
          "Drive through offbeat settlements like Chirgaon and the beautiful high wood village of Larot.",
          "Climb up the winding mountain roads to reach the Chanshal summit. Witness breathtaking 360-degree snow-capped Himalayan ranges.",
          "Enjoy packed alpine refreshments on the grasslands of the pass before descending back to Rohru."
        ],
        stay_name: "Pabbar Valley Riverside Camp",
        meals: "Breakfast, Packed Lunch & Dinner Included",
        transit: "80 km / 4 hours roundtrip"
      },
      {
        day: 4,
        title: "Rohru → Narkanda → Hatu Peak → Shimla",
        shortDesc: "Panoramic views from Hatu temple and dense spruce woods.",
        details: [
          "Check out from your riverside camp and head towards the alpine town of Narkanda.",
          "Take a scenic high-altitude spur road to Hatu Peak (3,400m) and visit the ancient Hatu Mata Temple.",
          "Marvel at the panoramic vistas of the snow-clad peaks and dense spruce forests.",
          "Drive back down to Shimla for your onward journey, carrying memories of offbeat Pabbar Valley."
        ],
        stay_id: "stay-narkanda-hill",
        stay_name: "Narkanda Hill Guesthouse",
        meals: "Breakfast Included",
        transit: "125 km / 5 hours driving"
      }
    ],
    galleryImages: [
      { src: "/images/road-trip.png", title: "Pabbar River Crossing" },
      { src: "/images/shimla.png", title: "Pine Valleys of Kotkhai" },
      { src: "/images/manali.png", title: "Larot Forest Trail" },
      { src: "/images/hero-mountains.png", title: "Chanshal Meadows" }
    ]
  },
  {
    title: "Shimla Nature & Heritage Escape",
    slug: "shimla-nature-heritage",
    duration: "3 Days / 2 Nights",
    price: "From ₹9,999",
    priceNote: "per person",
    img: "/images/shimla.png",
    badge: "Escapes",
    route: "Shimla → Kufri → Naldehra → Tara Devi → Shimla",
    season: "Year-round",
    difficulty: "Easy",
    groupSize: "2–6",
    includes: ["Transport", "Cedar Heights Stay", "Meals", "Heritage Walk"],
    alignOffset: "",
    destination_ids: ["shimla"],
    pricingOptions: {
      2: { price: "14,999", perPerson: "person", label: "2 Guests" },
      4: { price: "11,999", perPerson: "person", label: "4 Guests" },
      6: { price: "9,999", perPerson: "person", label: "6 Guests", bestValue: true },
    },
    highlights: [
      { title: "Heritage Walks", desc: "Walk past Christ Church, neo-gothic ridges, and scandal corners." },
      { title: "Pine Forest Drives", desc: "Breathe the alpine mountain air along winding deodar-sheltered tracks." },
      { title: "Mountain Viewpoints", desc: "Witness panoramic snow-capped Himalayan ridges under clear skies." },
      { title: "Waterfall Experience", desc: "Hike to the roaring waters of Chadwick Falls, cradled by deep woods." },
      { title: "Temple Visits", desc: "Explore hilltop sanctuaries at Jakhoo Hill and serene Tara Devi peaks." }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Shimla Arrival & Heritage Walk",
        shortDesc: "Walk past the summer capital's neo-gothic landmarks and colonial ridges.",
        details: [
          "Arrive in Shimla and check into the heritage lodge.",
          "Unwind, then begin a guided heritage walk along the historic Ridge and Christ Church.",
          "Stroll through the Mall Road and Scandal Point, learning about Shimla's rich colonial histories.",
          "Conclude the evening hopping across local heritage cafés or enjoying a peaceful sunset from the ridge."
        ],
        stay_id: "stay-shimla-cedar",
        stay_name: "Shimla Cedar Guesthouse",
        meals: "Dinner Included",
        transit: "Arrival & Heritage walk"
      },
      {
        day: 2,
        title: "Nature & Forest Circuit",
        shortDesc: "Drives through deep deodar reserves, waterfalls, and alpine meadows.",
        details: [
          "Drive early through the scenic pine valleys towards Kufri and Naldehra.",
          "Explore the lush deodar canopies of the Shimla Water Catchment Wildlife Sanctuary.",
          "Hike down the forest tracks to Chadwick Falls, hidden inside dense woods.",
          "Return to the stay through a scenic pine forest drive, stopping at a spectacular sunset viewpoint."
        ],
        stay_id: "stay-shimla-cedar",
        stay_name: "Shimla Cedar Guesthouse",
        meals: "Breakfast & Dinner Included",
        transit: "60 km forest loop"
      },
      {
        day: 3,
        title: "Spiritual & Mountain Experience",
        shortDesc: "High temple viewpoints, panoramic forest walks, and departures.",
        details: [
          "Climb up the ridge to visit the Jakhoo Hill Temple, the highest point in Shimla.",
          "Drive to the serene hilltop Tara Devi Temple, offering views of the entire Shivalik hills.",
          "Gaze at the distant Shali Tibba snow peak from selected vantage stops.",
          "Enjoy local handicraft shopping and departure in the afternoon with rich mountain memories."
        ],
        stay_name: "None (Departure)",
        meals: "Breakfast Included",
        transit: "Departure transfer"
      }
    ],
    galleryImages: [
      { src: "/images/shimla.png", title: "The Ridge at Sunset" },
      { src: "/images/manali.png", title: "Pine Forests of Kufri" },
      { src: "/images/river.png", title: "Chadwick Falls Stream" }
    ]
  },
  {
    title: "Spiti Circuit Expedition",
    slug: "spiti-circuit",
    duration: "10 Days / 9 Nights",
    price: "From ₹18,999",
    priceNote: "per person",
    img: "/images/spiti-valley.png",
    badge: "Signature",
    route: "Shimla → Narkanda → Sarahan → Kalpa → Nako → Kaza → Manali",
    season: "Jun — Oct",
    difficulty: "Moderate",
    groupSize: "8–12",
    includes: ["Transport", "Stays", "Meals", "Local Guide"],
    alignOffset: "md:mt-20",
    destination_ids: ["shimla", "narkanda", "kalpa", "kaza", "manali", "spiti-valley"],
    pricingOptions: {
      6: { price: "24,999", perPerson: "person", label: "6 Guests" },
      8: { price: "21,999", perPerson: "person", label: "8 Guests" },
      10: { price: "18,999", perPerson: "person", label: "10 Guests", bestValue: true }
    },
    highlights: [
      { title: "Key Gompa Exploration", desc: "Tour the famous 1000-year-old cliffside Buddhist monastery." },
      { title: "Highest Post Office", desc: "Mail a postcard to your loved ones from Hikkim at 4,440m." },
      { title: "Langza Buddha View", desc: "Gaze at the giant Buddha statue watching over high barley fields." },
      { title: "Baralacha & Kunzum Passes", desc: "Cross the high mountain passes connecting Lahaul and Spiti." }
    ],
    itineraryDays: [
      {
        day: 1,
        title: "Shimla to Narkanda",
        shortDesc: "Acclimatize in the apple belt and walk to Hatu Peak.",
        details: [
          "Depart Shimla and head up the winding Hindustan-Tibet Highway.",
          "Check into the Narkanda lodge and enjoy local organic apple juice.",
          "Walk through thick spruce groves to Hatu Peak for panoramic sunset views."
        ],
        stay_id: "stay-narkanda-hill",
        stay_name: "Narkanda Hill Guesthouse",
        meals: "Dinner Included",
        transit: "65 km / 2.5 hours driving"
      },
      {
        day: 2,
        title: "Narkanda to Kalpa",
        shortDesc: "Witness the dramatic transition to the dry Kinnaur mountains.",
        details: [
          "Drive along the carved cliffs of the Sutlej River highway.",
          "Ascend to the beautiful village of Kalpa, famous for pine forests and apple orchards.",
          "Gaze at the shifting colors of Kinner Kailash peak at sunset."
        ],
        stay_id: "stay-kalpa-orchard",
        stay_name: "Kalpa Apple Orchard Cabin",
        meals: "Breakfast & Dinner Included",
        transit: "160 km / 5.5 hours driving"
      },
      {
        day: 3,
        title: "Kalpa to Kaza (The Desert Entrance)",
        shortDesc: "Cross Khab bridge and ascend into the cold mountain desert.",
        details: [
          "Enter the barren rocks of Spiti district, stopping at Khab to see the Sutlej-Spiti river confluence.",
          "Drive past the clay village of Nako and its sacred mountain lake.",
          "Arrive in Kaza, the central marketplace town of Spiti Valley."
        ],
        stay_id: "stay-kaza-nomad",
        stay_name: "Kaza Nomad Homestay",
        meals: "Breakfast & Dinner Included",
        transit: "200 km / 7 hours driving"
      },
      {
        day: 4,
        title: "Spiti High Villages Circuit",
        shortDesc: "Visit Hikkim, Komic, and Langza high settlements.",
        details: [
          "Drive to Hikkim and mail cards from the world's highest post office.",
          "Visit the ancient Komic monastery, one of the highest inhabited settlements on earth.",
          "See Langza's famous Buddha statue and hunt for marine fossils in the rocks."
        ],
        stay_id: "stay-kaza-nomad",
        stay_name: "Kaza Nomad Homestay",
        meals: "Breakfast & Dinner Included",
        transit: "60 km loop driving"
      },
      {
        day: 5,
        title: "Kaza to Kibber Sanctuary",
        shortDesc: "Explore Key Monastery and settle in the high wildlife reserve.",
        details: [
          "Tour the Key Monastery, exploring its ancient prayer halls and mud rooms.",
          "Walk up the high suspension bridge at Chicham.",
          "Settle in Kibber village for a night of absolute high-altitude silence."
        ],
        stay_id: "stay-kibber-sanctuary",
        stay_name: "Kibber Sanctuary Homestay",
        meals: "Breakfast & Dinner Included",
        transit: "30 km driving"
      }
    ],
    galleryImages: [
      { src: "/images/spiti-valley.png", title: "Kaza High Desert" },
      { src: "/images/kaza.png", title: "Key Monastery View" },
      { src: "/images/kalpa.png", title: "Kinner Kailash Sunrise" }
    ]
  }
];
