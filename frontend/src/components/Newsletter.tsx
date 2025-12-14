import { motion } from 'framer-motion';

const Newsletter = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-sm"
                >
                    {/* Decorative gradients */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50" />

                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay in the loop</h2>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        Get the latest articles, tutorials, and resources delivered straight to your inbox. No spam, ever.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-5 py-3 bg-white border border-slate-300 rounded-full text-slate-900 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-400"
                        />
                        <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                            Subscribe
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
