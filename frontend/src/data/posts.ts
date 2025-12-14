import type { BlogPost } from '../types/blog';

export const POSTS: BlogPost[] = [
    {
        id: 1,
        title: "The Future of React Server Components",
        excerpt: "Exploring how RSCs are changing the landscape of web development and what it means for the future of full-stack React applications.",
        category: "Development",
        date: "Oct 24, 2023",
        readTime: "5 min read",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Mastering Tailwind CSS Grid",
        excerpt: "A comprehensive guide to building complex, responsive layouts using Tailwind's grid system without writing a single line of custom CSS.",
        category: "Design",
        date: "Nov 12, 2023",
        readTime: "8 min read",
        imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Building Scalable Systems",
        excerpt: "Lessons learned from scaling a microservices architecture from zero to a million daily active users.",
        category: "Architecture",
        date: "Dec 05, 2023",
        readTime: "12 min read",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "The Art of Minimalist UI",
        excerpt: "Why less is often more when it comes to user interface design, and how to achieve balance in your layouts.",
        category: "Design",
        date: "Jan 15, 2024",
        readTime: "6 min read",
        imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop"
    }
];
