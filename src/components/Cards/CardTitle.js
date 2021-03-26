import { BsArrowRight } from 'react-icons/bs'
import { Title } from '../../styles/SharedStyles'

const CardTitle = ({ title, marginBottom, color }) => {
    return (
        <Title marginBottom={marginBottom} color={color}>
            <p>{title}</p>
            <BsArrowRight />
        </Title>
    )
}

export default CardTitle
