import { FaGlasses } from 'react-icons/fa';
import { IconShared } from '../../styles/SharedStyles'
import styled from 'styled-components';

const GlassesIcon = () => {
    return (
        <GlassesIconContainer />
    )
}

export default GlassesIcon

const GlassesIconContainer = styled(FaGlasses)`
    ${IconShared}
`
