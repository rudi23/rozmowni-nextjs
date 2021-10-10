import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import useClickTracking from '../hooks/useClickTracking';
import { events } from '../services/tracking';
import { routeMap, routeNames } from '../routes';
import lifelongLearningImage from '../../public/images/lifelong-learning.jpg';
import Section from './Section';
import SectionHeading from './SectionHeading';

export default function Idea() {
    const trackClick = useClickTracking();

    return (
        <Section>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="img-block">
                        <Image
                            src={lifelongLearningImage}
                            alt="Małgorzata Rudowska przy biurku"
                            placeholder="blur"
                            layout="responsive"
                            sizes="(min-width: 1200px) 540px, (min-width: 992px) 450px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw-30px)"
                            quality="75"
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <SectionHeading heading="Idea lifelong learning" subheading="Co nami kieruje?" />

                    <p>
                        W szkole językowej rozmowni.pl wierzymy w uczenie się przez całe życie (tzw. lifelong learning).
                        Edukacja i ciągły rozwój są nam potrzebne, aby w szybko zmieniającym się świecie, czuć się jak
                        ryba w wodzie. Pozwalają nam budować kompetencje przyszłości.
                    </p>

                    <p>
                        Staramy się rozmawiać na istotne tematy, które dotyczą nas wszystkich. Chcemy, aby nasi
                        uczniowie umieli dobrze poradzić sobie w różnych sytuacjach życiowych oraz prowadzili
                        wzbogacające dyskusje, poznawali odmienne punkty widzenia i wyrażali swoją opinię na różne
                        tematy.
                    </p>

                    <p>
                        Uważamy, że rozmowa może być niczym fascynująca podróż w nieznane, która poszerza horyzonty,
                        pozwala nam lepiej poznać siebie i otaczający nas świat.
                    </p>

                    <p className="mb-0">W naszej szkole językowej:</p>
                    <ul>
                        <li>chcemy Was poznać</li>
                        <li>chcemy Was uczyć i uczyć się od Was</li>
                        <li>chcemy być rozmowni</li>
                    </ul>

                    <Link href={routeMap[routeNames.CONTACT]}>
                        <a className="btn btn-main mt-4" onClick={() => trackClick(events.HOME_IDEA_CLICK_CONTACT)}>
                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                            Dołącz do nas
                        </a>
                    </Link>
                </div>
            </div>
        </Section>
    );
}
