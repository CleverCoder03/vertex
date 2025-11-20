export interface ImageItem {
  id: number;
  src: string;
}

export interface Platform {
  id: number;
  title: string;
  desc: string;
  type: string;
  year: number;
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
    src: "/hero-1.avif",
  },
  {
    id: 2,
    src: "/hero-2.avif",
  },
  {
    id: 3,
    src: "/hero-3.avif",
  },
];

export const approach: ImageItem[] = [
  {
    id: 1,
    src: "/approach-1.avif",
  },
  {
    id: 2,
    src: "/approach-2.avif",
  },
  {
    id: 3,
    src: "/approach-3.avif",
  },
  {
    id: 4,
    src: "/approach-4.avif",
  },
];

export const platforms: Platform[] = [
  {
    id: 1,
    title: "Comporter",
    desc: "A high-impact, sustainable portfolio of self-storage buildings built for businesses of tomorrow.",
    type: "self-storage",
    year: 2024,
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
    type: "workspace",
    year: 2022,
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
    image: "/team-member-1.png",
    name: "Sarah Chen",
    position: "Principal - Urban Planning",
    email: "sarah@vertex.com",
    phone: "+44 7912 345678",
  },
  {
    id: 2,
    image: "/team-member-2.png",
    name: "David Miller",
    position: "Lead Architect",
    email: "david@vertex.com",
    phone: "+44 7923 456789",
  },
  {
    id: 3,
    image: "/team-member-3.png",
    name: "Emily Carter",
    position: "Project Manager",
    email: "emily@vertex.com",
    phone: "+44 7923 456780",
  },
  {
    id: 4,
    image: "/team-member-4.png",
    name: "Liam Jones",
    position: "Architectural Designer",
    email: "liam@vertex.com",
    phone: "+44 7945 566 780",
  },
];
