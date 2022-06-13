import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/PageHeader';
import useClickTracking from '../../hooks/useClickTracking';
import { events } from '../../services/tracking';
import { routeMap, routeNames } from '../../routes';
import CourseRequirements from '../../components/CourseRequirements';
import CourseDetails from '../../components/CourseDetails';
import courseIndividualImage from '../../../public/images/course-individual.jpg';
import holidayCourseImage from '../../../public/images/course-holiday.jpg';
import styles from './Course.module.scss';

export default function HolidayCourse() {
    const trackClick = useClickTracking();

    return (
        <>
            <PageHeader title="Intensywne kursy wakacyjne" />

            <section className={styles.root}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="course-single-header">
                                <div className="img-block">
                                    <Link href={routeMap[routeNames.CONTACT]}>
                                        <a onClick={() => trackClick(events.HOLIDAY_COURSE_CLICK_BANNER)}>
                                            <Image
                                                src={holidayCourseImage}
                                                alt="Kursy wakacyjne"
                                                placeholder="blur"
                                                layout="responsive"
                                                sizes="(min-width: 1200px) 760px, (min-width: 992px) 640px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw-30px)"
                                                quality="75"
                                            />
                                        </a>
                                    </Link>
                                </div>

                                <p>Wiele osób odkłada swoje plany związane z nauką języka angielskiego na później.</p>
                                <p className="mb-0">Ciągle spotykam osoby, które mówią mi, że:</p>
                                <ul className="pt-2">
                                    <li>chcą podnieść swój poziom zaawansowania językowego</li>
                                    <li>chcą wreszcie zacząć płynnie mówić po angielsku</li>
                                </ul>

                                <p>Zawsze coś jednak przeszkadza im w zrealizowaniu tego celu.</p>

                                <p>
                                    Wakacje to bardzo dobry czas, aby zająć się swoim rozwojem. Dzień jest dłuższy,
                                    projekty w pracy zwalniają tempa, a my zazwyczaj mamy więcej czasu dla siebie.
                                </p>

                                <p>
                                    Jeśli....
                                    <ul className="pt-2">
                                        <li>
                                            nudzą Cię sztampowe tematy dyskusji typu: "Czy lepiej mieszkać na wsi czy w
                                            mieście?"
                                        </li>
                                        <li>
                                            chcesz nie tylko uczyć się angielskiego, ale także rozwijać się w innych
                                            obszarach
                                        </li>
                                        <li>
                                            ważne są dla Ciebie kompetencje przyszłości takie jak negocjowanie,
                                            nastawienie na rozwój i zmianę
                                        </li>
                                    </ul>
                                    ...to znaczy, że kursy angielskiego w Rozmowni.pl są dla Ciebie!
                                </p>

                                <p>
                                    Zapraszamy na <strong>BEZPŁATNĄ KONSULTACJĘ</strong>, na której dowiesz się na jakim
                                    poziome zaawansowania językowego jesteś, poznasz kierunki rozwoju, a co
                                    najważniejsze, zaczniesz już ćwiczyć angielski z lektorem.
                                </p>

                                <p>
                                    <Link href={routeMap[routeNames.CONTACT]}>
                                        <a onClick={() => trackClick(events.HOLIDAY_COURSE_CLICK_ENROLL)}>
                                            Napisz do nas
                                        </a>
                                    </Link>{' '}
                                    i już dziś zarezerwuj dogodny termin.
                                </p>

                                <p>
                                    Kurs, który odbędzie się w lipcu, obejmuje 24 godziny lekcyjne: 3 spotkania po 2
                                    lekcje tygodniowo (łącznie 6 lekcji w tygodniu) przez 4 tygodnie lipca.
                                </p>
                                <p>Koszt kursu to 840 zł.</p>
                                <p>Ilość osób w grupie: 4-5.</p>
                                <p>Wszystkie zajęcia odbędą się on-line.</p>
                                <p>Dla osób chętnych - kontynuacja kursu w sierpniu.</p>
                            </div>

                            <div className="single-course-details ">
                                <div className="course-widget course-info">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />4 tygodnie intensywnego kursu
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />
                                            Lekcje 3 razy w tygodniu
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />
                                            Dni oraz godziny spotkań dopasowane do Twojego planu zajęć
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />
                                            Płatność za kurs z góry
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar">
                                <div className="course-single-thumb">
                                    <Image
                                        src={courseIndividualImage}
                                        alt="Nauczycielka z kawą przy stoliku"
                                        placeholder="blur"
                                        layout="responsive"
                                        sizes="(min-width: 1200px) 318px, (min-width: 992px) 258px, (min-width: 768px) 658px, (min-width: 576px) 478px, calc(100vw - 62px)"
                                        quality="75"
                                    />
                                    <div className="course-price-wrapper">
                                        <div className="course-price ml-3">
                                            <h4>
                                                Cena: <span>840 zł</span>
                                            </h4>
                                        </div>
                                        <div className="buy-btn">
                                            <Link href={routeMap[routeNames.CONTACT]}>
                                                <a
                                                    className="btn btn-main btn-block"
                                                    onClick={() => trackClick(events.INDIVIDUAL_COURSE_CLICK_ENROLL)}
                                                >
                                                    Zapisz się
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <CourseDetails
                                    items={[
                                        {
                                            title: 'Liczba lekcji:',
                                            content: '6 lekcji w tygodniu',
                                            icon: 'alarm-clock',
                                        },
                                        {
                                            title: 'Czas trwania:',
                                            content: '4 tygodnie, lipiec',
                                            icon: 'calendar',
                                        },
                                        {
                                            title: 'Liczba lekcji:',
                                            content: '24',
                                            icon: 'refresh-time',
                                        },
                                        {
                                            title: 'Koszt:',
                                            content: '840 zł',
                                            icon: 'money',
                                        },
                                        {
                                            title: 'Płatność:',
                                            content: 'za kurs z góry',
                                            icon: 'money-bag',
                                        },
                                        {
                                            title: 'Poziom:',
                                            content: 'A2, B1, B2, C1, C2',
                                            icon: 'graph-bar',
                                        },
                                        {
                                            title: 'Gdzie:',
                                            content: 'Online',
                                            icon: 'location-pointer',
                                        },
                                    ]}
                                />

                                <CourseRequirements />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
