import Banner from '../components/Banner';
import Features from '../components/Features';
import Idea from '../components/Idea';
import Conversations from '../components/Conversations';
import WhyUs from '../components/WhyUs';

export default function Home() {
    return (
        <>
            <Banner />
            <Features />
            <WhyUs />
            <Conversations />
            <Idea />
        </>
    );
}
