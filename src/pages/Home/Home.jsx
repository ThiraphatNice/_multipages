import "./Home.css";
import thiraphatsangsorn from "./thiraphatsangsorn.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="title1">
         <img src={thiraphatsangsorn} alt="My Image" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
      <div className="tit1-1">
        <h3>
          <span className="highlight">Name :</span> Thiraphat Sangsorn <br />
          <span className="highlight">Nickname :</span> Nice <br />
          <span className="highlight">Birthday :</span> 2 November 2004 <br />
          <span className="highlight">Age :</span> 19 <br /><br />
          <span className="highlight">Student ID :</span> 66024222 <br />
          <span className="highlight">University :</span> Sripathum University (SPU) <br />
          <span className="highlight">Faculty :</span> Information Technology (IT) <br />
          <span className="highlight">Branch :</span> Computer Science and Software Development Innovation (CSI)
        </h3>
      </div>
      {/* <div className="tit2-2">
        <h3>
        Hello this is the website for sent to Mr.Pin , I hope you like it. Actually I don't good at coding
        so I sometimes using ChatGPT for help me coding. This code is the help of ChatGPT too. I hope you'll ok about it, Thank you.
        </h3>
      </div> */}
    </div>
  );
}

export default Home;
