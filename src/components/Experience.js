import Link from 'next/link';
import { FiExternalLink } from "react-icons/fi";
import { experiences } from '../assets/data';

const Item = ({experience}) => {
	return(
		<div className='group/item p-5 -mx-5 rounded-lg transition-colors duration-300 hover:bg-slate-800/40 hover:shadow-inner hover:drop-shadow-lg group-hover/list:blur-[1px] hover:!blur-none motion-reduce:transition-none relative'>
			<Link href={experience.website} target="_blank" className='absolute inset-0' />
			<div className='flex items-center gap-x-4'>
				<h3 className='text-slate-200 font-bold group-hover/item:text-indigo-500 transition-colors duration-300  motion-reduce:transition-none'>{experience.title} - {experience.company}</h3>
				<FiExternalLink className='text-slate-200 group-hover/item:text-indigo-500 transition-colors duration-300  motion-reduce:transition-none' />
			</div>
			{
				experience.subTitle &&
				<p className='text-slate-400 text-sm'>{ experience.subTitle }</p>
			}
			<span className='text-sm text-slate-500'>{ experience.timeline }</span>
			<p className='mt-3'>{ experience.description }</p>
		</div>
	)
}

export default function Experience() {
	return(
		<section id='experience'>
			<h2 className='text-lg font-semibold text-slate-200 sticky top-0 px-6 py-3 -mx-6 bg-slate-800/60 drop-shadow-lg backdrop-blur-sm z-10 md:px-12 md:-mx-12 lg:hidden'>Experience</h2>
			<div className='group/list space-y-6'>
				{
					experiences.map(exp => <Item experience={exp} key={exp.id}/>)
				}
			</div>
		</section>
	)
}
