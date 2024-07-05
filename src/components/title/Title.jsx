import { StyledTitle } from './styles';

const Title = ({ size, font, children, blend }) => {
	return (
		<StyledTitle size={size} font={font} blend={blend}>
			{children}
		</StyledTitle>
	);
};

export default Title;
