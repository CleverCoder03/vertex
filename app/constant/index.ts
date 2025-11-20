export interface ImageItem {
  id: number;
  src: string;
}

export interface Platform {
  id: number;
  title: string;
  desc: string;
  images: ImageItem[];
}

export interface Team {
  id: number;
  image: string;
  name: string;
  position: string;
  email: string;
  phone: string;
}

export const hero: ImageItem[] = [
  {
    id: 1,
    src: "/hero-1.avif"
  },
  {
    id: 2,
    src: "/hero-2.avif"
  },
  {
    id: 3,
    src: "/hero-3.avif"
  },
]

export const approach: ImageItem[] = [
  {
    id: 1,
    src: "/approach-1.avif"
  },
  {
    id: 2,
    src: "/approach-2.avif"
  },
  {
    id: 3,
    src: "/approach-3.avif"
  },
  {
    id: 4,
    src: "/approach-4.avif"
  },
]

export const platforms: Platform[] = [
  {
    id: 1,
    title: "Comporter",
    desc: "A high-impact, sustainable portfolio of self-storage buildings built for businesses of tomorrow.",
    images: [
      {
        id: 1,
        src: "/compoter-1.avif",
      },
      {
        id: 2,
        src: "/compoter-2.avif",
      },
      {
        id: 3,
        src: "/compoter-3.avif",
      },
      {
        id: 4,
        src: "/compoter-4.avif",
      },
      {
        id: 5,
        src: "/compoter-5.avif",
      },
    ],
  },
  {
    id: 2,
    title: "General People",
    desc: "An award-winning, 500,000 sq. ft. serviced office platform that prioritises social impact.",
    images: [
      {
        id: 1,
        src: "/general-1.avif",
      },
      {
        id: 2,
        src: "/general-2.avif",
      },
      {
        id: 3,
        src: "/general-3.avif",
      },
      {
        id: 4,
        src: "/general-4.avif",
      },
      {
        id: 5,
        src: "/general-5.avif",
      },
    ],
  },
];

export const teamMembers: Team[] = [
  {
    id: 1,
    image: "/jacob.avif",
    name: "jacob silver",
    position: "Founding Principal",
    email: "jacob@compound-re.com",
    phone: "+44 7825 909151",
  },
  {
    id: 2,
    image: "/jacob.avif",
    name: "jacob silver",
    position: "Founding Principal",
    email: "jacob@compound-re.com",
    phone: "+44 7825 909151",
  },
  {
    id: 3,
    image: "/jacob.avif",
    name: "jacob silver",
    position: "Founding Principal",
    email: "jacob@compound-re.com",
    phone: "+44 7825 909151",
  },
  {
    id: 4,
    image: "/jacob.avif",
    name: "jacob silver",
    position: "Founding Principal",
    email: "jacob@compound-re.com",
    phone: "+44 7825 909151",
  },
];
