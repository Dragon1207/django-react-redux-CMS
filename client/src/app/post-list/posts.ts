export interface Post {
    id: number;
    title: string;
    slug: string;
    description: string;
    body: string;
    published: boolean;
    created: DateTimeFormat | null;
    category: string;
}

export interface Category {
    id: number;
    title: string;
    slug: string;
}