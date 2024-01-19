import { StyledTitle } from './styles';

const Title = ({ size, font, children }) => {
	return (
		<StyledTitle size={size} font={font}>
			{children}
		</StyledTitle>
	);
};

export default Title;
