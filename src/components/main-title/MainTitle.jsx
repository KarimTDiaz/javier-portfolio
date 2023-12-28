import { StyledMainLetter, StyledMainTitle } from './styles';

const MainTitle = ({ text }) => {
	const letters = Array.from(text);
	const getRandomDelay = () => Math.random() * 0.5;
	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: getRandomDelay(), delay: getRandomDelay() }
		}
	};
	const child = {
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100
			}
		},
		hidden: {
			opacity: 1,
			x: 0,
			y: '100px',
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100
			}
		}
	};
	return (
		<StyledMainTitle
			style={{ overflow: 'hidden', display: 'flex', fontSize: '2rem' }}
			variants={container}
			initial='hidden'
			animate='visible'
		>
			{letters.map((letter, index) => (
				<StyledMainLetter variants={child} key={index}>
					{letter === ' ' ? '\u00A0' : letter}
				</StyledMainLetter>
			))}
		</StyledMainTitle>
	);
};

export default MainTitle;
