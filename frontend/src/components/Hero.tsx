import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 z-0" />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-50 text-cyan-600 text-xs font-bold mb-6"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></span>
                            Available for hire
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                Hayden Huan Kee Jiun
                            </span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Software engineer exploring the digital frontier. I write about code, design, and building products. Join me on my journey through the ever-evolving landscape of technology.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors flex items-center group shadow-lg shadow-slate-900/10">
                                Read Articles
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm">
                                View Portfolio
                            </button>
                        </div>
                    </motion.div>

                    {/* Abstract Visual */}
                    <motion.div style={{ y: y2 }} className="hidden lg:block relative">
                        <div className="relative w-full aspect-square max-w-lg mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200 to-blue-300 rounded-3xl rotate-6 opacity-30 blur-2xl"></div>
                            <div className="absolute inset-0 bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col">
                                {/* Mock Code Editor Header */}
                                <div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                {/* Mock Code Content */}
                                <div className="p-6 font-mono text-sm space-y-3">
                                    <div className="text-purple-600">const <span className="text-blue-600">createFuture</span> = <span className="text-amber-600">async</span> () ={'>'} {'{'}</div>
                                    <div className="pl-4 text-slate-600">const <span className="text-cyan-600">ideas</span> = <span className="text-blue-600">await</span> brainstorm();</div>
                                    <div className="pl-4 text-slate-600">const <span className="text-cyan-600">prototype</span> = <span className="text-blue-600">new</span> Solution(ideas);</div>
                                    <div className="pl-4 text-slate-600"><span className="text-purple-600">while</span> (prototype.needsWork()) {'{'}</div>
                                    <div className="pl-8 text-green-600">// Iterate until perfection</div>
                                    <div className="pl-8 text-slate-600">prototype.refine();</div>
                                    <div className="pl-4 text-slate-600">{'}'}</div>
                                    <div className="pl-4 text-purple-600">return <span className="text-cyan-600">prototype</span>.ship();</div>
                                    <div className="text-purple-600">{'}'}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
