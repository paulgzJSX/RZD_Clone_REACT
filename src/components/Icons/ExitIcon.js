import { BiExit } from 'react-icons/bi'
import { IconShared } from '../../styles/SharedStyles'
import styled from 'styled-components'

const ExitIcon = () => {
    return (
        <ExitIconContainer />
    )
}

export default ExitIcon

const ExitIconContainer = styled(BiExit)`
    ${IconShared}
`