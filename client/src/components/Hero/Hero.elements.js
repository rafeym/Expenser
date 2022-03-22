import styled from 'styled-components'

export const InfoSection = styled.div`
    color: #fff;
    padding: 160px 0;
    background: ${({ bgLight }) => (bgLight ? '#fff' : '#101522')};

    @media screen and (min-width: 800px) {
        height: calc(100vh - 80px);
    }
`

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

    @media screen and (min-width: 800px) {
        margin-top: 40px;
    }
`

export const InfoCol = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }
`

export const TopHeading = styled.div`
    color: ${({ lightHeading }) => (lightHeading ? '#a9b3c1' : '#4b59f7')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({ lightTxt }) => (lightTxt ? '#f7f8fa' : '#1c2237')};
`

export const SubHeading = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTxtDesc }) => (lightTxtDesc ? '#a9b3c1' : '#1c2237')};
`

export const HeroImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`
