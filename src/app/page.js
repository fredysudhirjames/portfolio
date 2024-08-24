"use client"
import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'experience',
		title: 'Experience'
	},
	{
		id: 'projects',
		title: 'Projects'
	}
];

export default function Home() {
	const activeSection = useActiveSection(navLinks.map(item => item.id));

	const handleNavClick = (id) => {
		const section = document.getElementById( id );
		if ( section ) {
			section.scrollIntoView( { behavior: 'smooth' } );
		}
	}

	return (
		<div className="min-h-screen max-w-screen-xl mx-auto px-6 md:px-12">
			<div className='lg:grid lg:grid-cols-2 lg:gap-x-5 lg:items-start'>
				<header className='pt-14 lg:py-24 lg:min-h-dvh lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:gap-y-10'>
					<div>
						<h1 className='text-slate-200 text-5xl font-semibold'>
							<Link href='/'>Fredy Sudhir James</Link>
						</h1>
						<h2 className='mt-3 text-2xl font-medium text-slate-200/90'>Senior Frontend Developer</h2>
						<nav className='page-section-links hidden lg:flex lg:flex-col lg:gap-y-3 lg:items-start lg:mt-14 lg:text-xs lg:uppercase' aria-label='Page section links'>
							{
								navLinks.map(navItem => (
									<Link href={`#${navItem.id}`} key={navItem.id} className={navItem.id === activeSection ? 'active' : null} onClick={(e) => {
										e.preventDefault();
										handleNavClick(navItem.id);
									}}>{navItem.title}</Link>
								))
							}
						</nav>
					</div>
					<nav className='flex gap-x-5 text-2xl mt-12' aria-label='Social media links'>
						<Link href="https://www.linkedin.com/in/fredy-sudhir/" target='_blank' className='hover:text-slate-100 hover:scale-110 transition-transform duration-300 motion-reduce:transition-none'><FaLinkedin /></Link>
						<Link href="https://github.com/fredy-sudhir-james" target='_blank' className='hover:text-slate-100 hover:scale-110 transition-transform duration-300 motion-reduce:transition-none'><FaGithub /></Link>
					</nav>
				</header>
				<main className='space-y-14 py-14 lg:space-y-20 lg:py-24'>
					<About />
					<Experience />
					<Projects />
				</main>
			</div>
		</div>
	);
}
