import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import useClickTracking from '../hooks/useClickTracking';
import { events } from '../services/tracking';
import { routeNames, routeMap } from '../routes';
import mainImage from '../../public/images/main.jpg';
import styles from './Banner.module.scss';

export default function Banner() {
    const trackClick = useClickTracking();

    return (
        <section className={styles.bannerSection}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-xl-8 order-lg-2">
                        <div className="img-block">
                            <Image
                                src={mainImage}
                                alt="Małgorzata Rudowska przy biurku"
                                placeholder="blur"
                                layout="responsive"
                                sizes="(min-width: 1200px) 730px, (min-width: 992px) 610px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw-30px)"
                                quality="75"
                            />
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-4 col-xl-4 order-md-1">
                        <div className={styles.bannerContent}>
                            <h1>Mów swobodnie po angielsku!</h1>
                            <h2>Indywidualne oraz grupowe kursy online</h2>
                            <Link href={routeMap[routeNames.CONTACT]}>
                                <a
                                    className="btn btn-main mt-4"
                                    onClick={() => trackClick(events.HOME_BANNER_CLICK_CONTACT)}
                                >
                                    Ucz się razem z nami <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
