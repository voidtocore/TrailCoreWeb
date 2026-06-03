// Trail Core Stays Database
export const stays = [
  {
    id: "stay-kibber-sanctuary",
    slug: "kibber-sanctuary-homestay",
    name: "Kibber Sanctuary Homestay",
    type: "HOMESTAY",
    destination_id: "spiti-valley",
    district: "LAHAUL_SPITI",
    coordinates: { lat: 32.3015, lng: 78.0125 },
    base_price_per_night: 1800,
    price_bracket: "BUDGET",
    guest_capacity: 4,
    room_count: 2,
    summary: "An ancient mud-and-timber home in Asia's highest village, hosted by a family of snow leopard trackers.",
    description: `Kibber Sanctuary Homestay is a doorway to Spiti’s high-altitude quiet. Handbuilt using traditional sun-baked mud bricks and thick cedar beams, this home is naturally insulated against the freezing Himalayan winds. 

Guests stay in cozy rooms lined with colorful wool rugs woven by Dolma, the family matriarch. The family gathers around the tandoor (traditional Bukheri stove) in the kitchen every evening, serving hot bowls of Thukpa and butter tea. Tenzin, the host, has worked with conservation groups for two decades and guides guests on respectful hikes into the Kibber Wildlife Sanctuary.`,
    heating_type: "BUKHERI",
    is_winter_ready: true,
    connectivity: { mobile: "2G", broadband: false, wifi: false, speed_mbps: 0 },
    img: "/images/kaza.png", // Reusing image path for demo purposes
    gallery: [
      { url: "/images/kaza.png", alt: "Kibber traditional facade", credit: "Trail Core Field Photo" }
    ],
    host: {
      id: "host-tenzin",
      name: "Tenzin & Dolma",
      story_summary: "Leopard trackers and traditional wool weavers who have called Kibber home for generations.",
      is_verified_host: true
    },
    traditional_meals: {
      offered: true,
      pricing: "INCLUDED_IN_STAY",
      cuisine_description: "Purely vegetarian local Spitian cuisine, featuring organic barley bread, wild pea soup, and home-churned cheese."
    },
    vibe_tags: ["high-altitude-offgrid", "village-immersion", "stillness-retreat"]
  },
  {
    id: "stay-kaza-nomad",
    slug: "kaza-nomad-homestay",
    name: "Kaza Nomad Homestay",
    type: "HOMESTAY",
    destination_id: "kaza",
    district: "LAHAUL_SPITI",
    coordinates: { lat: 32.2280, lng: 78.0780 },
    base_price_per_night: 2200,
    price_bracket: "BUDGET",
    guest_capacity: 6,
    room_count: 3,
    summary: "A warm, family-hosted home in the heart of Kaza, perfect for exploring Spiti's high monasteries.",
    description: `Located in the older, quieter quarter of Kaza town, this homestay balances rustic warmth with reliable comfort. Run by Chhering, a local school teacher, and his family, the homestay offers wood-paneled rooms with views of the Spiti River. 

The highlight of the stay is the communal dining room, where guests from all over the world share stories over local dishes. Chhering is an expert on Spiti’s cultural heritage and can help plan day trips to Key Monastery and the high post office at Hikkim.`,
    heating_type: "BUKHERI",
    is_winter_ready: true,
    connectivity: { mobile: "4G", broadband: false, wifi: true, speed_mbps: 5 },
    img: "/images/spiti-valley.png",
    gallery: [
      { url: "/images/spiti-valley.png", alt: "Cozy wood-paneled room", credit: "Trail Core Field Photo" }
    ],
    host: {
      id: "host-chhering",
      name: "Chhering & Family",
      story_summary: "Local high school teacher and passionate preserver of Spitian oral history.",
      is_verified_host: true
    },
    traditional_meals: {
      offered: true,
      pricing: "PAID_ON_SITE",
      cuisine_description: "Traditional buckwheat rotis, potato curries, and hand-rolled skyu pasta."
    },
    vibe_tags: ["high-altitude-offgrid", "village-immersion"]
  },
  {
    id: "stay-kalpa-orchard",
    slug: "kalpa-apple-orchard-cabin",
    name: "Kalpa Apple Orchard Cabin",
    type: "CABIN",
    destination_id: "kalpa",
    district: "KINNAUR",
    coordinates: { lat: 31.5395, lng: 78.2570 },
    base_price_per_night: 6500,
    price_bracket: "PREMIUM_COZY",
    guest_capacity: 2,
    room_count: 1,
    summary: "A modern glass-and-stone cabin tucked deep within a multi-generational apple orchard facing Kinner Kailash.",
    description: `Suspended over a ridge in Kalpa, the Apple Orchard Cabin was designed for creative retreats and quiet reflection. The entire east-facing wall is made of glass, framing unobstructed, cinematic views of the Kinner Kailash peak. 

The interior is minimalist and contemporary, featuring local slate stone floors, warm pine wood panels, and a high-efficiency electric heater. Outside, a private deck hangs above rows of apricot and apple trees. While completely private, a local caretaker is available to assist with luggage and fresh forest tea.`,
    heating_type: "ELECTRIC_HEATER",
    is_winter_ready: true,
    connectivity: { mobile: "4G", broadband: true, wifi: true, speed_mbps: 30 },
    img: "/images/kalpa.png",
    gallery: [
      { url: "/images/kalpa.png", alt: "Glass cabin facing snow peaks", credit: "Trail Core Field Photo" }
    ],
    host: {
      id: "host-ramesh",
      name: "Ramesh (Caretaker)",
      story_summary: "Head orchardist who maintains the estate and brews fresh herbal teas.",
      is_verified_host: true
    },
    traditional_meals: {
      offered: true,
      pricing: "PAID_ON_SITE",
      cuisine_description: "Kinnauri village breakfast of red rice pancakes and wild apricot preserves."
    },
    vibe_tags: ["forest-escape", "stillness-retreat"]
  },
  {
    id: "stay-old-manali-wood",
    slug: "old-manali-river-cabin",
    name: "Old Manali River Cabin",
    type: "CABIN",
    destination_id: "manali",
    district: "KULLU",
    coordinates: { lat: 32.2450, lng: 77.1850 },
    base_price_per_night: 8000,
    price_bracket: "PREMIUM_COZY",
    guest_capacity: 4,
    room_count: 2,
    summary: "A premium A-frame cabin located in a hidden pine glade, beside a rushing glacier stream.",
    description: `Tucked away from the commercial noise of Manali, this A-frame cabin is a modern sanctuary in the wild. Built with recycled cedar timber and black iron frames, it features underfloor heating and a private wood-burning stove for winter comfort. 

A suspension bridge connects the property to Old Manali’s forest paths, providing immediate access to trails. Fall asleep to the sound of the Manalsu river rushing over white river rocks outside your window.`,
    heating_type: "UNDERFLOOR",
    is_winter_ready: true,
    connectivity: { mobile: "4G", broadband: true, wifi: true, speed_mbps: 50 },
    img: "/images/manali.png",
    gallery: [
      { url: "/images/manali.png", alt: "A-frame cabin exterior", credit: "Trail Core Field Photo" }
    ],
    host: {
      id: "host-vikram",
      name: "Vikram & Maya",
      story_summary: "Architect couple who designed this cabin using local, sustainable materials.",
      is_verified_host: true
    },
    traditional_meals: {
      offered: false,
      pricing: "NO_MEALS",
      cuisine_description: "Equipped with a fully functional kitchenette. Local cafes in Old Manali deliver directly."
    },
    vibe_tags: ["forest-escape", "riverside-meadow"]
  },
  {
    id: "stay-shimla-cedar",
    slug: "shimla-cedar-guesthouse",
    name: "Shimla Cedar Guesthouse",
    type: "GUESTHOUSE",
    destination_id: "shimla",
    district: "SHIMLA",
    coordinates: { lat: 31.1090, lng: 77.1710 },
    base_price_per_night: 3500,
    price_bracket: "MID_RANGE",
    guest_capacity: 10,
    room_count: 5,
    summary: "A quiet, heritage-style stone lodge on the edge of Shimla's protected cedar catchment area.",
    description: `A departure from the crowded hotels of the Ridge, the Cedar Guesthouse sits in the peaceful suburb of Summer Hill. Built during the late British era, the lodge retains its high wooden ceilings, fireplaces, and brass fittings. 

Each room opens to a shared colonial-style veranda overlooking the pine forest canopy. The property is managed by a local family who guides visitors along Shimla’s forgotten walking trails and colonial pathways.`,
    heating_type: "ELECTRIC_HEATER",
    is_winter_ready: true,
    connectivity: { mobile: "4G", broadband: true, wifi: true, speed_mbps: 45 },
    img: "/images/shimla.png",
    gallery: [
      { url: "/images/shimla.png", alt: "Heritage veranda view", credit: "Trail Core Field Photo" }
    ],
    host: {
      id: "host-sharma",
      name: "Mr. Sharma & Family",
      story_summary: "Retired botanist and forest officer with extensive knowledge of Shimla’s native flora.",
      is_verified_host: true
    },
    traditional_meals: {
      offered: true,
      pricing: "PAID_ON_SITE",
      cuisine_description: "Classic Himachali split-pea curries, sepul badi, and slow-cooked local greens."
    },
    vibe_tags: ["forest-escape"]
  },
  {
    id: "stay-narkanda-hill",
    slug: "narkanda-hill-guesthouse",
    name: "Narkanda Hill Guesthouse",
    type: "GUESTHOUSE",
    destination_id: "narkanda",
    district: "SHIMLA",
    coordinates: { lat: 31.2590, lng: 77.4595 },
    base_price_per_night: 4200,
    price_bracket: "MID_RANGE",
    guest_capacity: 8,
    room_count: 4,
    summary: "A stone-and-pine lodge offering panoramic views of the high snowy range and access to Hatu Peak trails.",
    description: `Perched on a quiet hill in Narkanda, this lodge is built around an open firepit courtyard. In spring, the surrounding apple trees blossom in pink and white; in winter, snow blankets the pine forest. 

Rooms feature natural pinewood flooring and comfortable bedding. It serves as an ideal base for skiers heading to Narkanda’s winter slopes or travelers looking to hike up to the high Hatu Peak lookout.`,
    heating_type: "ELECTRIC_HEATER",
    is_winter_ready: true,
    connectivity: { mobile: "4G", broadband: true, wifi: true, speed_mbps: 20 },
    img: "/images/road-trip.png",
    gallery: [
      { url: "/images/road-trip.png", alt: "Snow covered courtyard view", credit: "Trail Core Field Photo" }
    ],
    host: {
      id: "host-singh",
      name: "Sohan Singh",
      story_summary: "Former mountaineering instructor and expert skier who leads backcountry tours.",
      is_verified_host: true
    },
    traditional_meals: {
      offered: true,
      pricing: "PAID_ON_SITE",
      cuisine_description: "Hearty stews, local trout fish (seasonal), and wood-fire roasted flatbreads."
    },
    vibe_tags: ["stillness-retreat", "forest-escape"]
  }
];
