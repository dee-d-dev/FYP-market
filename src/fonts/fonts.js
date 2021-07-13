import {createGlobalStyle} from 'styled-components';

import PoppinsWoff from './Poppins.woff';
import PoppinsWoff2 from './Poppins.woff2';

export default createGlobalStyle `
    @font-face {
        font-family: 'poppins';
        src: local('poppins'), local('poppins'),
        url(${PoppinsWoff2}) format('woff2'),
        url(${PoppinsWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;