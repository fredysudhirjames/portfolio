"use client"

import { useState, useEffect } from 'react'

export const useActiveSection = (sectionIds) => {
	const [ activeSection, setActiveSection ] = useState( sectionIds[0] );

	useEffect(() => {
		const sections = sectionIds.map(id => document.getElementById(id));
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach( entry => {
					if ( entry.isIntersecting ) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.5 }
		);

		sections.forEach( section => {
			observer.observe( section );
		});

		return () => {
			observer.disconnect();
		}
	}, [ sectionIds ]);

	return activeSection;
}
