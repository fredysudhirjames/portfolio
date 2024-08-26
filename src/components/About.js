const skillsList = [
	'HTML',
	'CSS',
	'JavaScript',
	'PHP',
	'React',
	'SCSS',
	'WordPress',
	'WooCommerce',
	'GIT',
	'Tailwind CSS',
	'Bootstrap'
]

export default function About() {
	return(
		<section id="about" className='space-y-5'>
			<h2 className='text-lg font-semibold text-slate-200 sticky top-0 px-6 py-3 -mx-6 bg-slate-800/60 drop-shadow-lg backdrop-blur-sm z-10 md:px-12 md:-mx-12 lg:hidden'>About</h2>
			<p>A skilled <b className='text-slate-200'>Frontend Developer</b>, experienced in crafting high-performance, responsive, and accessible digital experiences. My passion lies in transforming complex designs into seamless, user-friendly websites that not only look great but also deliver results.</p>

			<p>With a deep expertise in <b className='text-slate-200'>modern web technologies</b>, I’ve led numerous projects to success by focusing on both the technical and creative aspects of <b className='text-slate-200'>web development</b>. I’m driven by a commitment to continuous learning and a desire to push the boundaries of what’s possible in the digital space.</p>

			<p>Whether it’s developing custom themes, optimizing website performance, or mentoring teams, I bring a strategic approach to every project, always aiming to <b className='text-slate-200'>exceed client expectations</b> and deliver exceptional user experiences.</p>
			<p className='text-slate-200 font-semibold text-lg !mt-12'>My Skills</p>
			<ul className='flex flex-wrap gap-3 text-xs'>
				{
					skillsList.map((item, index) => (
						<li key={index}><span className='bg-indigo-500/40 py-1.5 px-3 rounded-full inline-block text-slate-100'>{ item }</span></li>
					))
				}
			</ul>
		</section>
	)
}
