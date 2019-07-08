import { css } from "styled-components";

const sizes = {
    desktop: 1280,
    tablet: 1024,
    phone: 320,
};
  
// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc;
}, {});

export default media;