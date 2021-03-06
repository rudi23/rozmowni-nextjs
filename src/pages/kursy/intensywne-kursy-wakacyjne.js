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

                                <p>Wiele os??b odk??ada swoje plany zwi??zane z nauk?? j??zyka angielskiego na p????niej.</p>
                                <p className="mb-0">Ci??gle spotykam osoby, kt??re m??wi?? mi, ??e:</p>
                                <ul className="pt-2">
                                    <li>chc?? podnie???? sw??j poziom zaawansowania j??zykowego</li>
                                    <li>chc?? wreszcie zacz???? p??ynnie m??wi?? po angielsku</li>
                                </ul>

                                <p>Zawsze co?? jednak przeszkadza im w zrealizowaniu tego celu.</p>

                                <p>
                                    Wakacje to bardzo dobry czas, aby zaj???? si?? swoim rozwojem. Dzie?? jest d??u??szy,
                                    projekty w pracy zwalniaj?? tempa, a my zazwyczaj mamy wi??cej czasu dla siebie.
                                </p>

                                <p>
                                    Je??li....
                                    <ul className="pt-2">
                                        <li>
                                            nudz?? Ci?? sztampowe tematy dyskusji typu: "Czy lepiej mieszka?? na wsi czy w
                                            mie??cie?"
                                        </li>
                                        <li>
                                            chcesz nie tylko uczy?? si?? angielskiego, ale tak??e rozwija?? si?? w innych
                                            obszarach
                                        </li>
                                        <li>
                                            wa??ne s?? dla Ciebie kompetencje przysz??o??ci takie jak negocjowanie,
                                            nastawienie na rozw??j i zmian??
                                        </li>
                                    </ul>
                                    ...to znaczy, ??e kursy angielskiego w Rozmowni.pl s?? dla Ciebie!
                                </p>

                                <p>
                                    Zapraszamy na <strong>BEZP??ATN?? KONSULTACJ??</strong>, na kt??rej dowiesz si?? na jakim
                                    poziome zaawansowania j??zykowego jeste??, poznasz kierunki rozwoju, a co
                                    najwa??niejsze, zaczniesz ju?? ??wiczy?? angielski z lektorem.
                                </p>

                                <p>
                                    <Link href={routeMap[routeNames.CONTACT]}>
                                        <a onClick={() => trackClick(events.HOLIDAY_COURSE_CLICK_ENROLL)}>
                                            Napisz do nas
                                        </a>
                                    </Link>{' '}
                                    i ju?? dzi?? zarezerwuj dogodny termin.
                                </p>

                                <p>
                                    Kurs, kt??ry odb??dzie si?? w lipcu, obejmuje 24 godziny lekcyjne: 3 spotkania po 2
                                    lekcje tygodniowo (????cznie 6 lekcji w tygodniu) przez 4 tygodnie lipca.
                                </p>
                                <p>Koszt kursu to 840 z??.</p>
                                <p>Ilo???? os??b w grupie: 4-5.</p>
                                <p>Wszystkie zaj??cia odb??d?? si?? on-line.</p>
                                <p>Dla os??b ch??tnych - kontynuacja kursu w sierpniu.</p>
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
                                            Dni oraz godziny spotka?? dopasowane do Twojego planu zaj????
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />
                                            P??atno???? za kurs z g??ry
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
                                        alt="Nauczycielka z kaw?? przy stoliku"
                                        placeholder="blur"
                                        layout="responsive"
                                        sizes="(min-width: 1200px) 318px, (min-width: 992px) 258px, (min-width: 768px) 658px, (min-width: 576px) 478px, calc(100vw - 62px)"
                                        quality="75"
                                    />
                                    <div className="course-price-wrapper">
                                        <div className="course-price ml-3">
                                            <h4>
                                                Cena: <span>840 z??</span>
                                            </h4>
                                        </div>
                                        <div className="buy-btn">
                                            <Link href={routeMap[routeNames.CONTACT]}>
                                                <a
                                                    className="btn btn-main btn-block"
                                                    onClick={() => trackClick(events.INDIVIDUAL_COURSE_CLICK_ENROLL)}
                                                >
                                                    Zapisz si??
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
                                            content: '840 z??',
                                            icon: 'money',
                                        },
                                        {
                                            title: 'P??atno????:',
                                            content: 'za kurs z g??ry',
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
