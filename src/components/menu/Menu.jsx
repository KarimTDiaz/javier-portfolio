import { motion } from 'framer-motion';
import { MenuLink, MenuList, MenuListItem } from './styles';
const Menu = () => {
	return (
		<>
			<nav>
				<MenuList>
					<MenuListItem>
						<MenuLink>HOME</MenuLink>
					</MenuListItem>
					<MenuListItem>
						<MenuLink>WORKS</MenuLink>
					</MenuListItem>
					<MenuListItem>
						<MenuLink>ABOUT</MenuLink>
					</MenuListItem>
					{
						<MenuListItem>
							<motion.a
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 1.2 }}
								style={{ position: 'fixed', right: '46vw', top: '50vh' }}
							>
								JAVIER TILOUNI
							</motion.a>
						</MenuListItem>
					}
					{
						<MenuListItem>
							<a
								style={{
									position: 'fixed',
									bottom: 0,
									width: '100vw',
									display: 'flex',
									justifyContent: 'center'
								}}
							>
								About
							</a>
						</MenuListItem>
					}
				</MenuList>
			</nav>
		</>
	);
};

export default Menu;
