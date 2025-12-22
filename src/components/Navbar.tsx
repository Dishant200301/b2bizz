import React, { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/* ================= LOGO ================= */
const Logo = () => (
    <div className="flex items-center gap-3 bg-transparent">
        <div className="ml-2 w-[28px] h-[28px] lg:w-[38px] lg:h-[28px] bg-transparent">
            <svg width="31" height="27" viewBox="0 0 31 27" fill="none">
                <path d="M6.65796 11.6732H10.0339C10.0339 14.5689 12.4007 17.1121 15.0977 17.1121C17.7947 17.1121 20.1616 14.5689 20.1616 11.6732H23.5375C23.5375 16.4519 19.6739 20.4881 15.0977 20.4881C10.5215 20.4881 6.65796 16.4519 6.65796 11.6732Z" fill="#F3FFC9" />
                <path d="M0 11.7181H3.37591C3.37591 18.1811 8.63483 23.44 15.0978 23.44C21.5608 23.44 26.8197 18.1811 26.8197 11.7181H30.1956C30.1956 20.0416 23.4213 26.8159 15.0978 26.8159C6.77433 26.8159 0 20.0453 0 11.7181Z" fill="#F3FFC9" />
                <path d="M15.0982 0C21.5611 0 26.8201 5.25892 26.8201 11.7219H23.4441C23.4441 7.11942 19.7006 3.37591 15.0982 3.37591C10.4957 3.37591 6.75213 7.11942 6.75213 11.7219H3.37622C3.37622 5.25516 8.63514 0 15.0982 0Z" fill="#F3FFC9" />
                <path d="M15.0973 6.57925C17.9406 6.57925 20.2549 8.89362 20.2549 11.7369H16.8791C16.8791 10.7541 16.0801 9.95516 15.0973 9.95516C14.1145 9.95516 13.3156 10.7541 13.3156 11.7369H9.9397C9.9397 8.88987 12.2541 6.57925 15.0973 6.57925Z" fill="#F3FFC9" />
            </svg>
        </div>
        <span className="text-[30px] md:text-[22px] lg:text-[28px] font-normal text-[#F3FFC9]">
            B2bizz
        </span>
    </div>
);

/* ================= CENTER DECOR ================= */
// Home page: navbar-left.png | Other pages: navbar-left-black.png
const NavDecorLeft = ({ isHomePage }: { isHomePage: boolean }) => (
    <img
        src={isHomePage ? "/image/navbar-left.png" : "/image/navbar-left-black.png"}
        alt=""
        className="absolute -left-[44px] bottom-0 w-[46.56px] h-[51px] pointer-events-none"
    />
);

// Home page: navbar-right.png | Other pages: navbar-right-black.png
const NavDecorRight = ({ isHomePage }: { isHomePage: boolean }) => (
    <img
        src={isHomePage ? "/image/navbar-right.png" : "/image/navbar-right-black.png"}
        alt=""
        className="absolute -right-[44px] bottom-0 w-[46.56px] h-[51px] pointer-events-none "
    />
);

/* ================= NAVBAR ================= */
export const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Check if current page is home
    const isHomePage = location.pathname === '/';

    // Conditional background: #161A18 for home, #000000 for all other pages
    const navBg = isHomePage ? 'bg-[#161A18]' : 'bg-black';

    // Close menu on scroll
    React.useEffect(() => {
        const handleScroll = () => {
            if (open) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [open]);

    // Close menu on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const menuElement = document.getElementById('mobile-menu');
            const hamburgerButton = document.getElementById('hamburger-button');

            if (open && menuElement && !menuElement.contains(target) && !hamburgerButton?.contains(target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (
        <>
            {/* ================= DESKTOP/LAPTOP (1024px+) ================= */}
            <nav className="hidden lg:flex absolute top-0 left-0 right-0 z-50 w-full h-[57px] bg-transparent">
                <div className="max-w-[1500px] mx-auto w-full px-6 md:px-8 flex items-center justify-between">
                    {/* LOGO — TRANSPARENT (VIDEO VISIBLE) */}
                    <Link to="/" className="w-[132px] h-[38px] bg-transparent mt-6">
                        <Logo />
                    </Link>

                    {/* CENTER NAVIGATION — CONDITIONAL BG */}
                    <div className="relative h-[58.8px] xl:ml-12 flex items-center ">
                        <div className={`relative ${navBg} h-full px-12 flex items-center `}>
                            <NavDecorLeft isHomePage={isHomePage} />
                            <NavDecorRight isHomePage={isHomePage} />

                            <div className="flex items-center gap-[32px]">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `h-[27.2px] px-3 flex items-center rounded-[30px] text-[15.3px]
                  ${isActive ? "bg-[#2F3126] text-[#F3FFC9]" : "text-[#F3FFC9]"}`
                                    }
                                >
                                    Home
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `h-[27.2px] px-3 flex items-center rounded-[30px] text-[14.8px]
                  ${isActive ? "bg-[#2F3126] text-[#F3FFC9]" : "text-[#F3FFC9]"}`
                                    }
                                >
                                    About
                                </NavLink>

                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `h-[27.2px] px-3 flex items-center rounded-[30px] text-[15.1px]
                  ${isActive ? "bg-[#2F3126] text-[#F3FFC9]" : "text-[#F3FFC9]"}`
                                    }
                                >
                                    Services
                                </NavLink>

                                <NavLink
                                    to="/blog"
                                    className={({ isActive }) =>
                                        `h-[27.2px] px-3 flex items-center rounded-[30px] text-[15.1px]
                  ${isActive ? "bg-[#2F3126] text-[#F3FFC9]" : "text-[#F3FFC9]"}`
                                    }
                                >
                                    Blog
                                </NavLink>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT — TRANSPARENT (VIDEO VISIBLE) */}
                    <NavLink
                        to="/contact"
                        className="
            w-[225.13px] h-[41.41px]
            flex items-center justify-center
            border border-[#F3FFC9]
            rounded-[30px]
            mt-5 md:mt-10
            bg-transparent
            text-[#F3FFC9]
            text-[16.7px] font-medium
            hover:text-black hover:bg-[#F3FFC9] duration-300
          "
                    >
                        Contact Us
                    </NavLink>
                </div>
            </nav>

            {/* ================= TABLET (768px - 1023px) ================= */}
            <nav className="hidden md:flex lg:hidden absolute top-0 left-0 z-50 w-full h-[57px] px-8 items-center justify-between bg-transparent">
                {/* LOGO */}
                <Link to="/" className="bg-transparent mt-4">
                    <Logo />
                </Link>

                {/* RIGHT SIDE: Contact Us + Hamburger */}
                <div className="flex items-center gap-4 mt-4">
                    {/* CONTACT BUTTON */}
                    <NavLink
                        to="/contact"
                        className="
                            h-[41.41px] px-6
                            flex items-center justify-center
                            border border-[#F3FFC9]
                            rounded-[30px]
                            bg-transparent
                            text-[#F3FFC9]
                            text-[15px] font-medium
                            hover:text-black hover:bg-[#F3FFC9] duration-300 
                        "
                    >
                        Contact Us
                    </NavLink>

                    {/* HAMBURGER BUTTON */}
                    <button
                        id="hamburger-button"
                        onClick={() => setOpen(!open)}
                        className="w-[40px] h-[40px] rounded-full bg-[#4A4D3F] flex items-center justify-center text-white"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* ================= MOBILE (< 768px) ================= */}
            <nav className="md:hidden flex absolute top-4 left-4 right-4 z-50">
                <div className="w-full flex items-center justify-between">
                    {/* LOGO */}
                    <Link to="/" className="bg-transparent">
                        <Logo />
                    </Link>

                    {/* HAMBURGER BUTTON */}
                    <button
                        id="hamburger-button"
                        onClick={() => setOpen(!open)}
                        className="w-[30px] h-[30px] mr-2 rounded-full bg-[#4A4D3F] flex items-center justify-center text-white"
                    >
                        {open ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* ================= MOBILE/TABLET MENU ================= */}
            {open && (
                <div id="mobile-menu" className="lg:hidden fixed top-[65px] left-4 right-4 z-40">
                    <div className={`${navBg} rounded-[20px] p-6`}>
                        <div className="flex flex-col gap-6 text-[#F3FFC9] text-[18px]">
                            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
                            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
                            <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
                            <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
                            <NavLink
                                to="/contact"
                                onClick={() => setOpen(false)}
                                className="border border-[#F3FFC9] rounded-[30px] h-[50px] flex items-center justify-center md:hidden"
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
