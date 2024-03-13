import SectionListItem from '../section-list-item/SectionListItem';
import { StyledSectionList } from './styles';

const SectionList = ({ items }) => {
	return (
		<StyledSectionList>
			{items.map((item, index) => (
				<SectionListItem key={item.id} item={item} delay={index} />
			))}
		</StyledSectionList>
	);
};

export default SectionList;
