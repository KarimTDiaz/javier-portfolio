import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/variables';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family:'telegraf-slanted' ;
	src: url('/assets/fonts/PPTelegraf-RegularSlanted.otf') ;
	 
}
@font-face {
	font-family:'telegraf-regular' ;
	src: url('/assets/fonts/PPTelegraf-Regular.otf');
	
}
@font-face {
	font-family:'telegraf-light' ;
	src: url('/assets/fonts/PPTelegraf-Ultralight.otf') ;
	
}
@font-face {
	font-family:'telegraf-light-slanted' ;
	src: url('/assets/fonts/PPTelegraf-UltralightSlanted.otf') ;
	
}

*,*::after,*::before{
    box-sizing: border-box;
}
html{
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
body {
	margin: 0;
    max-width: 100vw;
    margin-left: auto;
    margin-right: auto;
	 font-family: 'Inter', sans-serif;
	 background-color:${COLORS.primary};
	 color: ${COLORS.secondary};
}
`;

export { GlobalStyle };
