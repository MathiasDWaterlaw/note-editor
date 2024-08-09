import "./AboutPage.css";

function AboutPage() {
  return (
    <div className='AboutPage'>
      <h1>Notes</h1>
      <p>
        It's a project that take inspiration from{" "}
        <a href='https://scrivi.la/' target='blank' className='nav-item'>
          Scrivi.la
        </a>{" "}
        by Riccardo Palombo. <br />
        Was developed by Mathias Dell'Osa using React.js
      </p>
    </div>
  );
}

export default AboutPage;
