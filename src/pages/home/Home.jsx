import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { v4 } from 'uuid';
import Text from '../../components/text/Text';
import Transition from '../../components/transition/Transition';
import { handleMainTitleAnimate, letters } from '../../constants/animations';
import { ICONS } from '../../constants/icons';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import { HOME_VIDEOS } from '../../constants/videos';
import {
	BottomLeftVideo,
	BottomLeftVideoContainer,
	BottomRightVideo,
	BottomRightVideoContainer,
	HiddenTitle,
	HomeContainer,
	IconArchive,
	NameText,
	RolText,
	TitleContainer,
	TitleLetter,
	TopVideo,
	TopVideoContainer
} from './styles';
const Home = () => {
	const [scope, animate] = useAnimate();

	useEffect(() => {
		setTimeout(() => {
			handleMainTitleAnimate(animate);
		}, 1500);
	}, []);

	return (
		<>
			<HomeContainer ref={scope}>
				<TitleContainer>
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
						initial={{ display: 'block' }}
						animate={{ display: 'none', height: 0 }}
						transition={{ delay: 1.5 }}
					></HiddenTitle>
				</TitleContainer>
				<NameText
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 3 }}
				>
					<Text
						size={[FONT_SIZE.xxs, FONT_SIZE.s, FONT_SIZE.l, FONT_SIZE.xl]}
						font={FONT_FAMILY.secondary}
					>
						JAVIER TILOUNI
					</Text>
				</NameText>
				<RolText
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 3 }}
				>
					<Text
						size={[FONT_SIZE.xxs, FONT_SIZE.s, FONT_SIZE.l, FONT_SIZE.xl]}
						font={FONT_FAMILY.secondary}
					>
						AUDIOVISUAL ARTIST
					</Text>
				</RolText>
				<TopVideoContainer id='top-vid' />
				<TopVideo {...HOME_VIDEOS.topVideo} />
				<BottomLeftVideoContainer id='bottom-left-vid' />
				<BottomLeftVideo {...HOME_VIDEOS.bottomLeftVideo} />
				<BottomRightVideoContainer id='bottom-right-vid' />
				<BottomRightVideo {...HOME_VIDEOS.bottomRightVideo} />
				<IconArchive
					{...ICONS.archive}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 3 }}
				/>
			</HomeContainer>
		</>
	);
};

/* const animation = animate => {
	setTimeout(() => {
		handleMainTitleAnimate(animate);
	}, 1500);
}; */

export default Transition(Home);
