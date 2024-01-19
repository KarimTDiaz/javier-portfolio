import { FONT_SIZE } from '../../constants/variables';
import Title from '../title/Title';
import { StyledMarquee, StyledTrack } from './styles';

const Marquee = () => {
	const marqueeVariants = {
		animate: {
			x: [0, -1036],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: 'loop',
					duration: 20,
					ease: 'linear'
				}
			}
		}
	};
	return (
		<>
			<div>
				<StyledMarquee>
					<StyledTrack variants={marqueeVariants} animate='animate'>
						<Title size={[FONT_SIZE.xxxxl]}>
							SEE MY WORK! SEE MY WORK! SEE MY WORK!SEE MY WORK!SEE MY WORK!SEE
							MY WORK!SEE MY WORK! SEE MY WORK! SEE MY WORK! SEE MY WORK! SEE MY
							WORK! SEE MY WORK! SEE MY WORK!
						</Title>
					</StyledTrack>
				</StyledMarquee>
			</div>
		</>
	);
};

export default Marquee;
