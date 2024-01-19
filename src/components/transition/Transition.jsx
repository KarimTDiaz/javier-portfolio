import { TransitionSlideIn, TransitionSlideOut } from './styles';

const Transition = OgComponent => {
	return () => (
		<>
			<OgComponent />
			<TransitionSlideIn
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
			<TransitionSlideOut
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
			/>
		</>
	);
};

export default Transition;
