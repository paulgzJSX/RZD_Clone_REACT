import { TrainCard, BigIcon } from '../../styles/SharedStyles'
import NoTextCardImage from '../../images/care.png'

const NoTextCard = () => {
    return (
        <TrainCard image={NoTextCardImage}>
            <div></div>
            <BigIcon />
        </TrainCard>
    )
}

export default NoTextCard
