import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold text-slate-900 mb-4 block">DevLog.</span>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-6">
                            A personal digital garden sharing thoughts on software engineering, design patterns, and the future of the web.
                        </p>
                        <div className="flex space-x-4">
                            {[Github, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">Projects</a></li>
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-cyan-600 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} DevLog. All rights reserved.</p>
                    <div className="flex items-center mt-4 md:mt-0 space-x-2">
                        <span>Built with React & Tailwind</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
