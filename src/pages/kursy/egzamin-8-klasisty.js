import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/PageHeader';
import useClickTracking from '../../hooks/useClickTracking';
import { events } from '../../services/tracking';
import { routeMap, routeNames } from '../../routes';
import CourseRequirements from '../../components/CourseRequirements';
import CourseDetails from '../../components/CourseDetails';
import styles from './Course.module.scss';

export default function Courses8Exam() {
    const trackClick = useClickTracking();

    return (
        <>
            <PageHeader title="Egzamin ósmoklasisty" />

            <section className={styles.root}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="course-single-header">
                                <h2 className="single-course-title">Zajęcia grupowe z języka angielskiego</h2>
                                <p>Rezultatem kursu jest przygotowanie do egzaminu ósmoklasisty</p>
                            </div>

                            <div className="single-course-details ">
                                <div className="course-widget course-info">
                                    <ul>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />
                                            Lekcje raz w tygodniu
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} />
                                            Zajęcia trwają 90 min (2 lekcje)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar">
                                <div className="course-single-thumb">
                                    <img src="/images/course-group.jpg" alt="" className="img-fluid w-100" />
                                    <div className="course-price-wrapper">
                                        <div className="course-price ml-3">
                                            <h4>
                                                Cena: <span>810 zł</span>
                                            </h4>
                                        </div>
                                        <div className="buy-btn">
                                            <Link href={routeMap[routeNames.CONTACT]}>
                                                <a
                                                    className="btn btn-main btn-block"
                                                    onClick={() => trackClick(events.EXAM_8_COURSE_CLICK_ENROLL)}
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
                                            title: 'Czas:',
                                            content: '2 lekcje tygodniowo (90 min.)',
                                            icon: 'alarm-clock',
                                        },
                                        {
                                            title: 'Liczba lekcji:',
                                            content: '54 w ciągu roku',
                                            icon: 'refresh-time',
                                        },
                                        {
                                            title: 'Płatność:',
                                            content: 'za semestr z góry',
                                            icon: 'money-bag',
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
