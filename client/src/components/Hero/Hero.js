import { Link } from 'react-router-dom'
import { Container, Button } from '../../styles/Reusable.elements'

import {
    InfoSection,
    InfoRow,
    InfoCol,
    TextWrapper,
    TopHeading,
    Heading,
    SubHeading,
    HeroImgWrapper,
    Img,
} from './Hero.elements'

export default function Hero({
    primary,
    bgLight,
    imgStart,
    lightHeading,
    topLine,
    lightTxt,
    headline,
    lightTxtDesc,
    description,
    buttonTxt,
    start,
    img,
    alt,
}) {
    return (
        <>
            <InfoSection bgLight={bgLight}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoCol>
                            <TextWrapper>
                                <TopHeading lightHeading={lightHeading}>
                                    {topLine}
                                </TopHeading>
                                <Heading lightTxt={lightTxt}>
                                    {headline}
                                </Heading>
                                <SubHeading lightTxtDesc={lightTxtDesc}>
                                    {description}
                                </SubHeading>
                                <Link to='/login'>
                                    {buttonTxt ? (
                                        <Button big fontBig primary={primary}>
                                            {buttonTxt}
                                        </Button>
                                    ) : null}
                                </Link>
                            </TextWrapper>
                        </InfoCol>
                        <InfoCol>
                            <HeroImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </HeroImgWrapper>
                        </InfoCol>
                    </InfoRow>
                </Container>
            </InfoSection>
        </>
    )
}
