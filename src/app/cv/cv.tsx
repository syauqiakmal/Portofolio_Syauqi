      import styles from "./cv.module.css";

const CV = () => {
    return (
      <div className={styles.pdfViewerBox}>
        <h2 className={styles.pdfTitle}>My CV</h2>
        <iframe
          src="/Resume-syauqi.pdf"
          className={styles.pdfFrame}
          title="CV Preview"
        ></iframe>


        <div className={styles.pdfActions}>
          <a href="/Resume-syauqi.pdf" download className={styles.pdfButton}>
            Download CV
          </a>
          {/* <a href="/portfolio.pdf" download className={styles.pdfButton}>
            Download Portfolio
          </a> */}
        </div>
      </div>
    );
}

export default CV;