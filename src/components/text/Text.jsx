import { StyledText } from './styles';

const Text = ({ size, font, children }) => {
	return (
		<StyledText size={size} font={font}>
			{children}
		</StyledText>
	);
};

export default Text;
