export const letters = [
	{
		id: 'j',
		text: 'J',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.8, ease: 'backOut', delay: 0.5 }
	},
	{
		id: 't',
		text: 'T',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.5, ease: 'backOut', delay: 0.5 }
	},
	{
		id: 'il',
		text: 'IL',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.9, ease: 'backOut', delay: 0.5 }
	},
	{
		id: 'o',
		text: 'O',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.5, ease: 'backOut', delay: 0.5 }
	},
	{
		id: 'u',
		text: 'U',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.5, ease: 'backOut', delay: 0.5 }
	},
	{
		id: 'n',
		text: 'N',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.5, ease: 'backOut', delay: 0.5 }
	},
	{
		id: 'i',
		text: 'I',
		initial: { y: '100%' },
		animate: { y: 0 },
		transition: { duration: 0.5, ease: 'backOut', delay: 0.5 }
	}
];

export const handleMainTitleAnimate = async animate => {
	animate(
		'#j',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#t',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100, delay: 0.1 }
	);
	animate(
		'#il',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100, delay: 0.2 }
	);
	animate(
		'#o',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }
	);
	animate(
		'#u',
		{ top: '25vh' },
		{ type: 'spring', damping: 12, stiffness: 100, delay: 0.1 }
	);
	animate(
		'#n',
		{ top: '25vh' },
		{ type: 'spring', damping: 12, stiffness: 100, delay: 0.2 }
	);
	await animate(
		'#i',
		{ top: '25vh' },
		{ type: 'spring', damping: 12, stiffness: 100, delay: 0.3 }
	);
	animate(
		'#j',
		{ left: '-4vw' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#t',
		{ left: '-4vw' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);

	animate(
		'#il',
		{ right: '-40vw' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate('#o', { right: '-40vw' });
	animate(
		'#u',
		{ left: '-40vw' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#n',
		{ left: '-40vw' },
		{ type: 'spring', damping: 12, stiffness: 60 }
	);
	animate('#i', { right: 0 }, { type: 'spring', damping: 12, stiffness: 100 });
	animate('#top-vid', { width: 0 });
	animate('#bottom-left-vid', { width: 0 });
	animate('#bottom-right-vid', { width: 0 });
};
