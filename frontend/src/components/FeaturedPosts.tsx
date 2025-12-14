import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { POSTS } from '../data/posts';

const FeaturedPosts = () => {
    return (
        <section id="articles" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-12"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Writings</h2>
                        <p className="text-slate-600">Thoughts on development, design, and everything in between.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-medium">
                        View all posts <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POSTS.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-bold text-slate-900 rounded-full shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                                    <span className="flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" /> {post.date}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <a href="#" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-cyan-600 transition-colors">
                                    Read Article <ChevronRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <a href="#" className="inline-flex items-center px-6 py-3 border border-slate-200 rounded-full text-slate-700 hover:bg-slate-50 transition-colors">
                        View all posts <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
