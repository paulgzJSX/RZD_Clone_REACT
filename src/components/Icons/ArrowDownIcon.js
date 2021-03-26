import { MdArrowDropDown } from 'react-icons/md'
import { IconShared } from '../../styles/SharedStyles'
import styled from 'styled-components'

const ArrowDownIcon = () => {
    return (
        <ArrowDownIconContainer />
    )
}

export default ArrowDownIcon

const ArrowDownIconContainer = styled(MdArrowDropDown)`
    ${IconShared}
`