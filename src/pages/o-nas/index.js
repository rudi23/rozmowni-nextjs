import Image from 'next/image';
import Section from '../../components/Section';
import PageHeader from '../../components/PageHeader';
import aboutUsImage from '../../../public/images/about-us.jpg';

export default function AboutUs() {
    return (
        <>
            <PageHeader title="O nas" />
            <Section>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="img-block">
                            <Image
                                src={aboutUsImage}
                                alt="Małe dziecko przeglądające stos książek"
                                placeholder="blur"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-md-1">
                        <p>Nazywam się Małgorzata Rudowska i jestem założycielką szkoły językowej rozmowni.pl</p>
                        <p>
                            Od dziecka uczyłam się angielskiego, ale mimo tego, jako młoda osoba bardzo wstydziłam się
                            mówić w tym języku. Pewnego dnia na swojej drodze spotkałam nauczyciela, który na zawsze
                            zmienił mój sposób patrzenia na komunikowanie się w języku obcym. Nasze lekcje nie wyglądały
                            jak typowe zajęcia w szkolnej ławce. Zamiast rozwiązywania niezliczonych testów i
                            przepisywania zdań z tablicy mój nauczyciel przede wszystkim zachęcał mnie do rozmowy.
                            Czytaliśmy ciekawe, różnorodne artykuły, które były później bazą do dyskusji. Wkrótce
                            przełamałam barierę językową i zaczęłam płynnie mówić po angielsku.
                        </p>
                        <p>
                            Postanowiłam, że tylko w ten sposób chcę się uczyć języka... a kilka lat później, że tak
                            chcę uczyć innych.
                        </p>
                        <p>
                            W szkole rozmowni.pl chcemy dać Ci narzędzia, stworzyć środowisko i atmosferę , gdzie
                            będziesz mógł się rozwijać. Nauczysz się, nie tylko płynnie mówić się po angielsku, ale
                            otworzysz się, będziesz wyrażać swoją opinię i prowadził ciekawe dyskusje. Będziemy przede
                            wszystkim ćwiczyć konwersacje, ale nie zaniedbamy również innych umiejętności językowych,
                            które są potrzebne aby Twój poziom systematycznie się podnosił. Z nauczycielem ustalisz
                            swoje cele i dążenia, które w połączeniu z Twoją motywacją i pracą zaprowadzą Cię do
                            upragnionej płynności w rozmowie po angielsku.
                        </p>
                        <p>Do zobaczenia na lekcji!</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
