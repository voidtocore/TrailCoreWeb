// Trail Core Destinations Database
export const destinations = [
  {
    id: "spiti-valley",
    slug: "spiti-valley",
    name: "Spiti Valley",
    nav_label: "Spiti",
    type: "VALLEY",
    parent_id: null,
    district: "LAHAUL_SPITI",
    altitude_m: 3800,
    altitude_text: "3,800m",
    coordinates: { lat: 32.2461, lng: 78.0349 },
    road_access: "SEASONAL_PASS_DEPENDENT",
    connectivity: { mobile: "2G", broadband: false, wifi: true },
    is_offgrid: true,
    best_seasons: [
      { season: "SUMMER", months: [6, 7, 8, 9], tag: "Wildflowers & Clear Roads" },
      { season: "WINTER", months: [12, 1, 2, 3], tag: "Frozen Stillness" }
    ],
    img: "/images/spiti-valley.png",
    desc: "The cold desert — ancient mud monasteries, fossil-rich moonscapes, and high-altitude silence.",
    highlights: ["Key Monastery", "Chandratal Lake", "Pin Valley National Park", "Kibber Wildlife Sanctuary"],
    why_visit: [
      "Witness 1000-year-old mud monasteries like Key and Tabo.",
      "Walk among the highest inhabited villages in Asia, including Kibber and Langza.",
      "Experience night skies completely free from light pollution."
    ],
    how_to_reach: [
      { mode: "ROAD", instructions: "Drive from Shimla via Kinnaur for gradual acclimatization, or Manali via Rohtang and Kunzum Pass.", distance_km: 420 }
    ]
  },
  {
    id: "kalpa",
    slug: "kalpa",
    name: "Kalpa",
    nav_label: "Kalpa",
    type: "VILLAGE",
    parent_id: "kinnaur-valley",
    district: "KINNAUR",
    altitude_m: 2960,
    altitude_text: "2,960m",
    coordinates: { lat: 31.5387, lng: 78.2562 },
    road_access: "YEAR_ROUND",
    connectivity: { mobile: "4G", broadband: true, wifi: true },
    is_offgrid: false,
    best_seasons: [
      { season: "AUTUMN", months: [9, 10, 11], tag: "Apple Harvesting Season" },
      { season: "SPRING", months: [4, 5], tag: "Apricot Blossoms" }
    ],
    img: "/images/kalpa.png",
    desc: "Kinnaur's crown — apple orchards with the Kinner Kailash range as a backdrop. A place where time slows to the rhythm of mountain winds.",
    highlights: ["Kinner Kailash Views", "Apple Orchards", "Reckong Peo Hub", "Ancient Wooden Temples"],
    why_visit: [
      "Watch the sun rise over the Kinner Kailash peak from your balcony.",
      "Walk through traditional wooden village houses and ancient architecture.",
      "Explore surrounding pine forests and apple plantations."
    ],
    how_to_reach: [
      { mode: "ROAD", instructions: "Drive from Shimla via the Hindustan-Tibet Highway (NH5).", distance_km: 220 }
    ]
  },
  {
    id: "kaza",
    slug: "kaza",
    name: "Kaza",
    nav_label: "Kaza",
    type: "VILLAGE",
    parent_id: "spiti-valley",
    district: "LAHAUL_SPITI",
    altitude_m: 3650,
    altitude_text: "3,650m",
    coordinates: { lat: 32.2276, lng: 78.0776 },
    road_access: "SEASONAL_PASS_DEPENDENT",
    connectivity: { mobile: "4G", broadband: false, wifi: true },
    is_offgrid: true,
    best_seasons: [
      { season: "SUMMER", months: [6, 7, 8, 9], tag: "Mild Sunshine" }
    ],
    img: "/images/kaza.png",
    desc: "Heart of Spiti Valley — the highest market town and base for exploring the region's ancient Buddhist heritage and moonscape terrain.",
    highlights: ["Key Gompa", "Hikkim Post Office", "Komic Village", "Langza Buddha Statue"],
    why_visit: [
      "Mail a postcard from the highest post office in the world at Hikkim.",
      "Visit Komic, one of the highest villages accessible by a motorable road.",
      "See the marine fossils preserved in the high rocks of Langza."
    ],
    how_to_reach: [
      { mode: "ROAD", instructions: "Drive via NH5 through Kinnaur or via Rohtang-Kunzum routes from Manali.", distance_km: 200 }
    ]
  },
  {
    id: "manali",
    slug: "manali",
    name: "Manali",
    nav_label: "Manali",
    type: "FOREST_HUB",
    parent_id: null,
    district: "KULLU",
    altitude_m: 2050,
    altitude_text: "2,050m",
    coordinates: { lat: 32.2396, lng: 77.1887 },
    road_access: "YEAR_ROUND",
    connectivity: { mobile: "4G", broadband: true, wifi: true },
    is_offgrid: false,
    best_seasons: [
      { season: "SPRING", months: [3, 4, 5], tag: "Blooming Valley" },
      { season: "WINTER", months: [12, 1, 2], tag: "Snow & Skiing" }
    ],
    img: "/images/manali.png",
    desc: "Gateway to the high passes — river valleys, ancient temples, and the starting point for some of the Himalaya's greatest road journeys.",
    highlights: ["Old Manali Cafés", "Solang Valley Trails", "Rohtang Pass", "Hadimba Temple Forest"],
    why_visit: [
      "Stroll through the giant cedar forests of Hadimba Temple.",
      "Explore old wooden village homestays and café cultures of Old Manali.",
      "Acclimatize before taking the high road to Lahaul, Ladakh, or Spiti."
    ],
    how_to_reach: [
      { mode: "ROAD", instructions: "Drive from Chandigarh/Delhi via the Mandi highway, or fly into Bhuntar Airport.", distance_km: 310 }
    ]
  },
  {
    id: "shimla",
    slug: "shimla",
    name: "Shimla",
    nav_label: "Shimla",
    type: "FOREST_HUB",
    parent_id: null,
    district: "SHIMLA",
    altitude_m: 2276,
    altitude_text: "2,276m",
    coordinates: { lat: 31.1048, lng: 77.1734 },
    road_access: "YEAR_ROUND",
    connectivity: { mobile: "4G", broadband: true, wifi: true },
    is_offgrid: false,
    best_seasons: [
      { season: "SUMMER", months: [4, 5, 6], tag: "Cool Escapes" },
      { season: "WINTER", months: [12, 1], tag: "Colonial Snow Walk" }
    ],
    img: "/images/shimla.png",
    desc: "Colonial architecture meets mountain serenity — pine-clad slopes, heritage railways, and panoramic views that set the tone for every Himalayan journey.",
    highlights: ["Heritage Mall Road Walk", "Viceregal Lodge", "Kufri Pine Trails", "Kalka-Shimla Toy Train"],
    why_visit: [
      "Ride the UNESCO World Heritage toy train through mountain tunnels.",
      "Observe colonial history and architecture at the Viceregal Lodge.",
      "Walk along pine forests of Summer Hill and Jakhoo."
    ],
    how_to_reach: [
      { mode: "ROAD", instructions: "Drive from Chandigarh via the Himalayan Expressway.", distance_km: 110 }
    ]
  },
  {
    id: "narkanda",
    slug: "narkanda",
    name: "Narkanda",
    nav_label: "Narkanda",
    type: "FOREST_HUB",
    parent_id: null,
    district: "SHIMLA",
    altitude_m: 2708,
    altitude_text: "2,708m",
    coordinates: { lat: 31.2581, lng: 77.4589 },
    road_access: "YEAR_ROUND",
    connectivity: { mobile: "4G", broadband: true, wifi: true },
    is_offgrid: false,
    best_seasons: [
      { season: "SPRING", months: [4, 5], tag: "Cherry & Apple Blossom" },
      { season: "WINTER", months: [12, 1, 2], tag: "Skiing Slopes" }
    ],
    img: "/images/road-trip.png",
    desc: "A hidden gem on the Hindustan-Tibet Highway — skiing slopes in winter, apple blossoms in spring, and Hatu Peak year-round.",
    highlights: ["Hatu Peak Lookout", "Apple Orchard Walks", "Tannu Jubbar Lake", "Ski Slopes"],
    why_visit: [
      "Summit Hatu Peak for a 360-degree view of the snowbound Himalayan range.",
      "Walk through quiet coniferous forests and peaceful apple orchards.",
      "Acclimatize in a quiet, non-commercial forest hub close to Shimla."
    ],
    how_to_reach: [
      { mode: "ROAD", instructions: "Drive from Shimla via the NH5 highway.", distance_km: 65 }
    ]
  }
];
