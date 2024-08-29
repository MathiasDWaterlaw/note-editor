import "./AboutPage.css";

function AboutPage() {
  return (
    <div className='AboutPage'>
      <h1 style={{ textAlign: "center" }}>Notes</h1>
      <p>
        It's a minimalist, client-side, note editor that looks like an old book.
        It takes inspiration from{" "}
        <a href='https://scrivi.la/' target='blank' className='nav-item'>
          Scrivi.la
        </a>{" "}
        by Riccardo Palombo. <br />
        {/* qui poi metterò i link alla pagina di riccardo e al mio futuro port-folio */}
        <br />
        It was developed by Mathias Dell'Osa using React.js and also uses the
        react-router-dom library, to handle internal navigation, and the dexie
        library to handle the browser's indexed-db functionalities.
        <br />
        <br />
      </p>
    </div>
  );
}

export default AboutPage;
