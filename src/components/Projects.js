import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi";
import { projects } from '../assets/data'
import Link from 'next/link';
import { prefix } from '../config/prefix';

const ProjectDisplay = ({details}) => {
	return(
		<div className='relative group/item lg:hover:scale-105 lg:hover:drop-shadow-lg lg:transition-transform lg:duration-300 lg:group-hover/list:opacity-40 lg:hover:!opacity-100'>
			<figure className='aspect-[320/152] relative'>
				<Image src={ prefix + details.image } fill={ true } alt={ details.name } sizes="320px" />
			</figure>
			<div className='relative lg:absolute lg:inset-0 lg:bg-white/40 lg:opacity-0 lg:transition-opacity lg:duration-300 lg:group-hover/item:opacity-100'>
				<Link href={details.website} target='_blank' className='absolute inset-0 z-[2]'/>
				<div className='flex gap-x-2.5 text-teal-400  mt-3 font-bold lg:items-center lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:bg-indigo-700/90 lg:z-[1] lg:px-3 lg:py-2 lg:opacity-0 lg:group-hover/item:opacity-100 lg:transition-opacity lg:duration-500 lg:text-sm lg:text-slate-100'>{ details.name } <FiExternalLink className='mt-0.5 flex-shrink-0'/></div>
			</div>
		</div>
	)
}

export default function Projects() {
	return(
		<section id="projects">
			<h2 className='text-lg font-semibold text-slate-200 sticky top-0 px-6 py-3 -mx-6 bg-slate-800/60 drop-shadow-lg backdrop-blur-sm mb-5 z-10 md:px-12 md:-mx-12 lg:hidden'>Projects</h2>
			<p>Few projects I have worked on.</p>
			<div className='grid group/list gap-y-10 min-[480px]:grid-cols-2 min-[480px]:gap-x-5 min-[480px]:gap-y-8 sm:gap-x-8 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-2 mt-6'>
				{
					projects.map(item => <ProjectDisplay details={item} key={item.id} /> )
				}
			</div>
		</section>
	)
}
