import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Project from '../pages/project/Project';
import Works from '../pages/works/Works';

const Router = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/works' element={<Works />} />
					<Route path='/works/:projectId' element={<Project />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default Router;
