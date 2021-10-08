import styles from './Section.module.scss';

export default function Section({ children, background }) {
    const backgroundColor = background === 'gray' ? '#F5F7FA' : undefined;

    return (
        <section className={styles.section} style={{ background: backgroundColor }}>
            <div className="container">{children}</div>
        </section>
    );
}
