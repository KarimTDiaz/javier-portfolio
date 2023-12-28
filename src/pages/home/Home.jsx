import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { v4 } from 'uuid';
import {
	HiddenTitle,
	HomeContainer,
	TitleContainer,
	TitleLetter
} from './styles';
const Home = () => {
	const [scope, animate] = useAnimate();

	const letters = [
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

	useEffect(() => {
		setTimeout(() => {
			handleAnimate(animate);
		}, 1500);
	}, []);

	return (
		<>
			<HomeContainer>
				<TitleContainer ref={scope}>
					{letters.map(letter => (
						<TitleLetter
							key={v4()}
							id={letter.id}
							initial={letter.initial}
							animate={letter.animate}
							transition={letter.transition}
						>
							{letter.text}
						</TitleLetter>
					))}

					<HiddenTitle
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{ delay: 0.8 }}
					></HiddenTitle>
				</TitleContainer>
			</HomeContainer>
		</>
	);
};

const handleAnimate = async animate => {
	animate(
		'#j',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#t',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#il',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#o',
		{ top: '-30vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#u',
		{ top: '25vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	animate(
		'#n',
		{ top: '25vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
	);
	await animate(
		'#i',
		{ top: '25vh' },
		{ type: 'spring', damping: 12, stiffness: 100 }
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
};

export default Home;
