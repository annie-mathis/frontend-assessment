import styled from 'styled-components';
import constants from '../../../constants';
const {white, lightBlue} = constants.styles.colors;

const SortingWrapper = styled.div`
    width: 100%;
    height: 45px;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(${lightBlue}, ${white});
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export default SortingWrapper;