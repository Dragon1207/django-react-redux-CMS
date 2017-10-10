export interface Post {
    id: number;
    title: string;
    slug: string;
    description: string;
    blog: string;
    published: boolean;
    created: DateTimeFormat;
    category: string;
}

export interface Category {
    id: number;
    title: string;
    slug: string;
}