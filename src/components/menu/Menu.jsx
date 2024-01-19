import { useLocation } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants/menu';
import { MenuLink, MenuList, MenuListItem, RollText } from './styles';

const Menu = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	return (
		<>
			<nav>
				<MenuList path={currentPath}>
					{MENU_ITEMS.map(item => (
						<MenuListItem key={item.id}>
							<MenuLink to={item.route}>
								<RollText>{item.name}</RollText>
								<RollText>{item.name}</RollText>
							</MenuLink>
						</MenuListItem>
					))}
				</MenuList>
			</nav>
		</>
	);
};

export default Menu;
