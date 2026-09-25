export const CATEGORIES = [
  "Robotics & Automation",
  "Material Handling",
  "Health Care & Mobility",
  "Utility Vehicles",
  "Office & Backup Power",
  "Transportation & Leisure",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Battery = {
  part: string;
  volts: 2 | 6 | 12;
  /** inches */
  l: number;
  w: number;
  h: number;
  /** lbs */
  weight: number;
  /** Ah @ 20-hr rate */
  cap20: number;
  /** minutes @ 25 amps */
  cap100: number;
  categories: Category[];
  inStock: boolean;
  certified: boolean;
  recommended?: boolean;
  /** suitable for wheelchair / mobility chairs */
  chairs?: boolean;
};

const mk = (
  part: string,
  volts: 2 | 6 | 12,
  l: number,
  w: number,
  h: number,
  weight: number,
  cap20: number,
  cap100: number,
  categories: Category[],
  opts: Partial<Battery> = {},
): Battery => ({
  part,
  volts,
  l,
  w,
  h,
  weight,
  cap20,
  cap100,
  categories,
  inStock: true,
  certified: true,
  ...opts,
});

export const BATTERIES: Battery[] = [
  mk("AGM-1234T", 12, 7.71, 5.18, 6.89, 24, 33, 50, [
    "Health Care & Mobility",
    "Office & Backup Power",
  ], { chairs: true }),
  mk("AGM-1240T", 12, 7.71, 5.18, 8.05, 29, 40, 61, [
    "Health Care & Mobility",
    "Robotics & Automation",
  ]),
  mk("AGM-1248T", 12, 8.99, 5.45, 8.82, 35, 48, 84, [
    "Health Care & Mobility",
    "Robotics & Automation",
  ], { chairs: true, recommended: true }),
  mk("AGM-1255T", 12, 8.99, 5.45, 8.82, 39, 55, 96, [
    "Robotics & Automation",
    "Office & Backup Power",
  ]),
  mk("AGM-1265T", 12, 10.22, 6.6, 8.93, 50, 65, 121, [
    "Health Care & Mobility",
    "Robotics & Automation",
  ], { chairs: true, recommended: true }),
  mk("AGM-1280T", 12, 10.22, 6.6, 8.93, 56, 80, 149, [
    "Health Care & Mobility",
    "Utility Vehicles",
  ]),
  mk("AGM-1285T", 12, 12.9, 6.75, 8.96, 62, 85, 158, [
    "Material Handling",
    "Transportation & Leisure",
  ]),
  mk("AGM-12100T", 12, 12.01, 6.6, 8.93, 62, 100, 186, [
    "Health Care & Mobility",
    "Material Handling",
  ], { chairs: true }),
  mk("AGM-12105T", 12, 12.86, 6.58, 8.16, 64, 105, 195, [
    "Robotics & Automation",
    "Material Handling",
  ]),
  mk("AGM-12105TG", 12, 12.86, 6.58, 8.16, 64, 105, 195, ["Robotics & Automation"]),
  mk("AGM-12148T", 12, 13.46, 6.77, 11.95, 90, 150, 315, [
    "Material Handling",
    "Utility Vehicles",
  ]),
  mk("AGM-12210L", 12, 20.76, 8.7, 9.77, 124, 210, 390, [
    "Office & Backup Power",
    "Transportation & Leisure",
  ]),
  mk("AGM-12255L", 12, 20.76, 10.89, 9.77, 156, 255, 550, [
    "Transportation & Leisure",
    "Utility Vehicles",
  ]),

  mk("AGM-6100T", 6, 10.21, 6.6, 8.92, 42, 100, 193, [
    "Utility Vehicles",
    "Robotics & Automation",
  ]),
  mk("AGM-6220T", 6, 10.28, 7.06, 9.92, 66, 220, 492, [
    "Utility Vehicles",
    "Material Handling",
  ], { recommended: true }),
  mk("AGM-6300T", 6, 10.28, 7.06, 12.94, 90, 300, 692, [
    "Material Handling",
    "Utility Vehicles",
  ]),
  mk("AGM-6400HT", 6, 11.64, 6.95, 15.73, 119, 400, 950, [
    "Material Handling",
    "Office & Backup Power",
  ]),

  mk("AGM-2660T", 2, 10.28, 7.06, 9.92, 69, 660, 1476, ["Office & Backup Power"]),
  mk("AGM-2900T", 2, 10.28, 7.06, 12.94, 93, 900, 2076, [
    "Office & Backup Power",
    "Robotics & Automation",
  ]),
  mk("AGM-21200HT", 2, 11.64, 6.95, 15.73, 123, 1200, 2850, ["Office & Backup Power"], {
    recommended: true,
  }),
];

export const RANGES = {
  weight: [24, 156] as [number, number],
  capacity: [33, 1200] as [number, number],
  length: [7, 21] as [number, number],
  width: [5, 11] as [number, number],
  height: [6, 16] as [number, number],
};

export type CrossRefEntry = {
  manufacturer: string;
  models: { model: string; qty: number; part: string }[];
};

export const CROSS_REFERENCE: CrossRefEntry[] = [
  {
    manufacturer: "AM Scooters",
    models: [
      { model: "Companion 3-Wheel", qty: 2, part: "AGM-1234T" },
      { model: "Companion 4-Wheel", qty: 2, part: "AGM-1248T" },
      { model: "Traveler HD", qty: 2, part: "AGM-1265T or AGM-1280T" },
    ],
  },
  {
    manufacturer: "Amigo Mobility",
    models: [
      { model: "Amigo Front Drive FD", qty: 2, part: "AGM-1234T" },
      { model: "Amigo RD Shopping Cart", qty: 2, part: "AGM-1240T" },
      { model: "Amigo TravelMate", qty: 2, part: "AGM-1248T" },
    ],
  },
  {
    manufacturer: "Crown Equipment",
    models: [
      { model: "WAV 50 Work Assist", qty: 4, part: "AGM-6220T" },
      { model: "PE 4500 Pallet Truck", qty: 6, part: "AGM-6300T" },
      { model: "SC 6000 Counterbalance", qty: 8, part: "AGM-6400HT" },
    ],
  },
  {
    manufacturer: "Fetch Robotics",
    models: [
      { model: "Freight 100 AMR", qty: 2, part: "AGM-1255T" },
      { model: "Freight 500 AMR", qty: 4, part: "AGM-1285T" },
    ],
  },
  {
    manufacturer: "Invacare",
    models: [
      { model: "Pronto M51", qty: 2, part: "AGM-1248T" },
      { model: "TDX SP2", qty: 2, part: "AGM-1265T" },
      { model: "Storm Series TDX", qty: 2, part: "AGM-1280T" },
    ],
  },
  {
    manufacturer: "Club Car",
    models: [
      { model: "Carryall 300", qty: 6, part: "AGM-6220T" },
      { model: "Carryall 500", qty: 6, part: "AGM-6300T" },
      { model: "Onward 4-Passenger", qty: 8, part: "AGM-6100T" },
    ],
  },
  {
    manufacturer: "Tennant",
    models: [
      { model: "T300 Walk-Behind Scrubber", qty: 2, part: "AGM-12148T" },
      { model: "T500 Rider Scrubber", qty: 4, part: "AGM-6300T" },
      { model: "S680 Sweeper", qty: 6, part: "AGM-6400HT" },
    ],
  },
  {
    manufacturer: "Eaton",
    models: [
      { model: "9PX 6kVA UPS", qty: 16, part: "AGM-12100T" },
      { model: "93PM Modular UPS", qty: 40, part: "AGM-21200HT" },
    ],
  },
];

