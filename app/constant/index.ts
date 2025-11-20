export interface ImageItem {
  id: string;
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

export const platforms: Platform[] = [
  {
    id: 1,
    title: "Comporter",
    desc: "A high-impact, sustainable portfolio of self-storage buildings built for businesses of tomorrow.",
    images: [
      {
        id: "1",
        src: "",
      },
      {
        id: "2",
        src: "",
      },
      {
        id: "3",
        src: "",
      },
      {
        id: "4",
        src: "",
      },
      {
        id: "5",
        src: "",
      },
    ],
  },
  {
    id: 2,
    title: "General People",
    desc: "An award-winning, 500,000 sq. ft. serviced office platform that prioritises social impact.",
    images: [
      {
        id: "1",
        src: "",
      },
      {
        id: "2",
        src: "",
      },
      {
        id: "3",
        src: "",
      },
      {
        id: "4",
        src: "",
      },
      {
        id: "5",
        src: "",
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
