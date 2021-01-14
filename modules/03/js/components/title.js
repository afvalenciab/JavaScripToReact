import { component as Component } from '../react/index.js';
import styled from '../styled-components/index.js';

export const AnchorStyles = styled.button`
        color: green;
        font-size: 80px;
        border: 1px solid red;
        cursor: pointer;
      `;

const props = {
  message: 'No te rindas',
  name: 'Andres',
};

const Title = Component`<marquee> ${'message'} </marquee>`(props);

export default AnchorStyles(Title);