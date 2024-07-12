import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MouseImageTracker } from '../../components/mouse-tracker/MouseTracker';
import Text from '../../components/text/Text';
import Title from '../../components/title/Title';
import { IMAGES } from '../../constants/images';
import { FONT_FAMILY, FONT_SIZE } from '../../constants/variables';
import { AboutContainer, TextContainer } from './styles';

const About = () => {
	const firstTextRef = useRef(null);
	const secondTextRef = useRef(null);
	const firstImageRef = useRef(null);
	const firstTextisInView = useInView(
		firstTextRef,
		{ once: true },
		{
			margin: '0px 100px -50px 0px'
		}
	);
	const secondTextisInView = useInView(
		secondTextRef,
		{ once: true },
		{
			margin: '0px 100px -100px 0px'
		}
	);
	const firstImageisInView = useInView(
		firstImageRef,
		{ once: true },
		{
			margin: '0px 100px -100px 0px'
		}
	);

	return (
		<>
			<AboutContainer>
				<Title
					font={FONT_FAMILY.primary}
					size={[FONT_SIZE.xxl, FONT_SIZE.xxxxl]}
				>
					HEY, IT'S ME . . .
				</Title>
				<MouseImageTracker src={IMAGES.aboutTop} />
			</AboutContainer>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
				<TextContainer>
					<div
						ref={firstTextRef}
						style={{
							transform: firstTextisInView ? 'none' : 'translatex(-200px)',
							opacity: firstTextisInView ? 1 : 0,
							transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
						}}
					>
						<Text
							font={FONT_FAMILY.primary}
							size={[FONT_SIZE.xs, FONT_SIZE.xxl]}
						>
							¡Hola! Soy Javier Tilouni, un apasionado del mundo audiovisual
							nacido y criado en las vibrantes Islas Canarias. Mi historia está
							impregnada de diversidad y exploración, gracias a mis raíces y a
							la pasión por viajar que mis padres me inculcaron desde temprana
							edad. Este bagaje cultural ha moldeado mi visión artística y mi
							enfoque en la cinematografía y la dirección de fotografía.
						</Text>
					</div>
				</TextContainer>
				<img
					ref={firstImageRef}
					style={{
						transform: firstImageisInView ? 'none' : 'translatex(200px)',
						opacity: firstImageisInView ? 1 : 0,
						transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
					}}
					src='/assets/images/about_2.jpg'
					alt=''
				/>
				<TextContainer>
					<div
						ref={secondTextRef}
						style={{
							transform: secondTextisInView ? 'none' : 'translatex(-200px)',
							opacity: secondTextisInView ? 1 : 0,
							transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
						}}
					>
						<Text
							font={FONT_FAMILY.primary}
							size={[FONT_SIZE.xs, FONT_SIZE.xxl]}
						>
							Mi viaje profesional comenzó tras completar un ciclo superior que,
							si bien no me ofreció todas las respuestas, me brindó el impulso
							necesario para lanzarme como freelance en el fascinante mundo del
							audiovisual. Desde entonces, he tenido el privilegio de colaborar
							con talentosos amigos en la creación de videoclips musicales y
							fashion films, explorando las infinitas posibilidades de la
							narrativa visual.
						</Text>
					</div>
				</TextContainer>
				<img src='/assets/images/about_3.jpg' alt='' />
			</div>
		</>
	);
};

export default About;
