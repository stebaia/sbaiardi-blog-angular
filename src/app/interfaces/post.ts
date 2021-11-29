import { Category } from "./category";

export interface Post {
    id?: number
    title: string,
    subtitle: string,
    snippet: string,
    content: string,
    author_id: number,
    created_at: string,
    published_at?: string,
    is_published: boolean,
    last_modified?: string,
    url_youtube?: string,
    categories: Category[]
}