import { useState } from "react";
import ayoub from "./assets/25.jpg";
import family from "./assets/ayoubfamily.gif";
import pepite from "./assets/ayoubdore.png";

import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible ? (
        <div className="maria">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aAkMkVFwAoo?si=nkIYoT9XWH0zIdy4&amp;start=4&autoplay=1&playinline=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
            Toto
          </iframe>
        </div>
      ) : null}

      <div className="snowflakes" aria-hidden="true">
        <div className={isVisible ? "App" : "NoApp"}>
          <h1>Landing Page for NoYeL</h1>
          {isVisible ? null : (
            <button type="button" onClick={() => setIsVisible(true)}>
              FEU
            </button>
          )}
          {isVisible ? (
            <>
              <div className="toto">
                <img className="titi" src={family} alt="ayoubfamily" />
                <img className="tata" src={ayoub} alt="ayoub" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❄</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">
                <img className="dore" src={pepite} alt="dore" />
              </div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❄</div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
