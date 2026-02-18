import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-6">
            <div className="center-content flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3 font-bold text-2xl">
                    <img src="../logo.svg" alt="SurePao" className="w-8 h-8" />
                    <span className="tracking-tight">SurePao</span>
                </div>

                <p className="text-slate-400 font-medium text-sm">
                    © 2026 SurePao. Ingredient data from open sources.
                </p>

                <div className="flex gap-4">
                    <a href="https://github.com/" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
