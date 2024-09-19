"use client"
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import AuthButton from '../auth/AuthButton'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="bg-yellow-400 border-b-4 sm:border-b-6 md:border-b-8 border-black">
            <div className="container mx-auto px-2 sm:px-4">
                <div className="flex h-16 sm:h-20 md:h-24 items-center justify-between">
                    <Link href="/" className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] lg:tracking-[0.2em] transform -skew-x-12">
                        <h3 className="bg-red-600 px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-3 inline-block shadow-[2px_2px_0_0_rgba(0,0,0,1)] sm:shadow-[3px_3px_0_0_rgba(0,0,0,1)] md:shadow-[4px_4px_0_0_rgba(0,0,0,1)]">MaFood</h3>
                    </Link>

                    <nav className="hidden lg:flex gap-2 xl:gap-4">
                        <NavLink href="/recipes">Recettes</NavLink>
                        <NavLink href="/tracker">Tracker</NavLink>
                        <NavLink href="/favorites">Favoris</NavLink>
                        <NavLink href="/planning">Planification</NavLink>
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <AuthButton />
                        <button
                            className="lg:hidden bg-black text-yellow-400 p-1 sm:p-2 border-2 border-black hover:bg-yellow-400 hover:text-black transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                        >
                            <Menu size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
                        </button>
                    </div>
                </div>
            </div>

            <nav 
                className={`lg:hidden bg-yellow-400 overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? 'max-h-[400px]' : 'max-h-0'
                }`}
            >
                <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4 flex flex-col gap-2 sm:gap-4">
                    <NavLink href="/recipes">Recettes</NavLink>
                    <NavLink href="/tracker">Tracker</NavLink>
                    <NavLink href="/favorites">Favoris</NavLink>
                    <NavLink href="/planning">Planification</NavLink>
                </div>
            </nav>
        </header>
    )
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="font-bold text-black text-base sm:text-lg md:text-xl lg:text-2xl hover:bg-black hover:text-yellow-400 px-2 sm:px-3 md:px-4 py-1 sm:py-2 transition-colors transform -skew-x-12 border-2 border-black hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
        >
            {children}
        </Link>
    )
}