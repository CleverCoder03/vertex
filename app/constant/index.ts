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

export const platforms: Platform[] = [
    {
        id: 1,
        title: "Comporter",
        desc: "A high-impact, sustainable portfolio of self-storage buildings built for businesses of tomorrow.",
        images: [
            {
                id: "1",
                src: ""
            },
            {
                id: "2",
                src: ""
            },
            {
                id: "3",
                src: ""
            },
            {
                id: "4",
                src: ""
            },
            {
                id: "5",
                src: ""
            },
        ]
    },
    {
        id: 2,
        title: "General People",
        desc: "An award-winning, 500,000 sq. ft. serviced office platform that prioritises social impact.",
        images: [
            {
                id: "1",
                src: ""
            },
            {
                id: "2",
                src: ""
            },
            {
                id: "3",
                src: ""
            },
            {
                id: "4",
                src: ""
            },
            {
                id: "5",
                src: ""
            },
        ]
    },
]