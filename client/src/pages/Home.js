import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'

import { homePageObjOne } from './Data'

export default function Home() {
    return (
        <>
            <Header />
            <Hero {...homePageObjOne} />
        </>
    )
}
