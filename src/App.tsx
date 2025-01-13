import "./App.css";
import { useState, useEffect } from "react";
import World from "./components/World";
let audio = new Audio("realityinthedark.mp3");
import worlds from "./data/worlds.json";
import characters from "./data/characters.json";

import sources from "./data/sources.json";
import WorldType from "./interfaces/World";
import Character from "./components/Character";
import CharacterType from "./interfaces/Character";
import Source from "./components/Source";
import Particles from "./components/Particles";
import Card from "./components/Card";
import Fullscreen from "./components/Fullscreen";
import { AnimatePresence, motion } from "motion/react";

function App() {
  const mobile = 1050;
  const [showNav, setShowNav] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < mobile);
  const [currentScreenshot, setCurrentScreenshot] = useState(-1);

  function setScreenshot(i: number) {
    setCurrentScreenshot(i);
    document.body.style.overflow = i === -1 ? "" : "hidden";
  }

  const screenshots = [
    "screenshots/KH4_01.jpg",
    "screenshots/KH4_02.jpg",
    "screenshots/KH4_03.jpg",
    "screenshots/KH4_04.jpg",
    "screenshots/KH4_05.jpg",
    "screenshots/KH4_06.jpg",
  ];

  function play() {
    audio.paused ? audio.play() : audio.pause();
    setIsPlaying(!isPlaying);
  }

  function iterate(i: number) {
    const newValue =
      (currentScreenshot + i + screenshots.length) % screenshots.length;
    setScreenshot(newValue);
  }

  function handleIsMobile() {
    setIsMobile(window.innerWidth < mobile);
  }

  useEffect(() => {
    window.addEventListener("resize", handleIsMobile);
    return () => {
      window.removeEventListener("resize", handleIsMobile);
    };
  }, []);

  function useScrollValue() {
    const [scrollValue, setScrollValue] = useState(600);

    useEffect(() => {
      const handleScroll = () => {
        const value = window.scrollY > 100 ? 200 : 600;
        const show = window.scrollY > 100;
        setScrollValue(value);
        setShowNav(show);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return { scrollValue, showNav };
  }

  const scrollValue = useScrollValue().scrollValue;

  return (
    <>
      <div id="header" className="root">
        <AnimatePresence>
          {currentScreenshot != -1 && (
            <motion.div
              initial={{
                opacity: 0,
                position: "relative",
                zIndex: 100,
                width: "100%",
                height: "100%",
              }}
              viewport={{ once: true }}
              animate={{
                opacity: 1,
                zIndex: 100,
                transition: { duration: 0.5 },
              }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            >
              <Fullscreen
                currentScreenshot={screenshots[currentScreenshot]}
                setCurrentScreenshot={setScreenshot}
                iterate={iterate}
              ></Fullscreen>
            </motion.div>
          )}
        </AnimatePresence>
        <Particles></Particles>
        <header
          style={
            showNav
              ? {}
              : {
                  background: "transparent",
                  backdropFilter: "blur(0)",
                  border: "1px solid transparent",
                }
          }
        >
          <a href="#header">
            <img
              className="kh-logo"
              style={{
                width: isMobile ? "200px" : scrollValue,
                right: showNav ? (isMobile ? "0" : "unset") : "0",
              }}
              src="KINGDOM_HEARTS_IV_logo_EN_rgb_bk.png"
            ></img>
          </a>
          <nav
            style={{
              opacity: showNav ? "1" : "0",
              visibility: showNav ? "unset" : "hidden",
              display: isMobile ? "none" : "flex",
            }}
          >
            <ul>
              <li>
                <a href="#media">Media</a>
              </li>
              <li>
                <a href="#characters">Characters</a>
              </li>
              <li>
                <a href="#worlds">Worlds</a>
              </li>
              <li>
                <a href="#socialnews">Social & News</a>
              </li>
              <li className="bgm">
                <button onClick={() => play()}>
                  BGM {audio.paused ? "🔇" : "🔉"}
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <motion.div
          initial={{ opacity: 0, transform: "scale(0.8)" }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transform: "scale(1)",
            transition: { duration: 1, delay: 0 },
          }}
        >
          <div className="hero-image">
            <div className="quote">
              <p>The heart resides within the soul,</p>
              <p>which in turn is guided by fate to its rightful place.</p>
              <p>The choice is yours once more.</p>
            </div>
          </div>
        </motion.div>

        <section>
          <span className="intro-decoration">※ ※ ※ ※ ※</span>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(50px)" }}
            viewport={{ once: true }}
            whileInView={{
              opacity: 1,
              transform: "scale(1)",
              transition: { duration: 1, delay: 0.2 },
            }}
          >
            <p className="intro">
              Sora makes a triumphant return with an updated look at the
              beginning of an epic new storyline titled the “Lost Master Arc”.
              Beginning with Sora facing off in a boss battle against a giant
              enemy, players are introduced to the Quadratum, a large, expansive
              city set in a gorgeous, realistic world unlike anything ever seen
              before in the KINGDOM HEARTS series. Fans will be excited to see
              the return of Sora’s well-known companions Donald and Goofy, in
              addition to the first appearance of Strelitzia, a mysterious new
              character who appears before Sora in this strange new setting.
            </p>
          </motion.div>
          <span className="intro-decoration">※ ※ ※ ※ ※</span>
        </section>
        <section>
          <div className="summary">
            <motion.div
              initial={{ opacity: 0, transform: "translateY(50px) scale(0.8)" }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                transform: "scale(1)",
                transition: { duration: 1, delay: 0.2 },
              }}
            >
              <div className="summary-data">
                <img
                  className="cover"
                  src="kingdom_hearts_iv_by_holleysart_de9evxt-414w-2x.jpg"
                ></img>
                <div className="specs">
                  <div className="spec">
                    <h2>Kingdom Hearts IV</h2>
                  </div>
                  <div className="spec">
                    <b>Platforms</b>
                    <div className="chips">
                      <span className="chip">PC</span>
                      <span className="chip">PlayStation 5</span>
                      <span className="chip">Xbox Series</span>
                      <span className="chip">Switch 2</span>
                    </div>
                  </div>
                  <div className="spec">
                    <b>Release Date</b>
                    <div>TBA</div>
                  </div>
                  <div className="spec">
                    <b>Developer</b>
                    <div>Square Enix</div>
                  </div>
                  <div className="spec">
                    <b>Director</b>
                    <div>Tetsuya Nomura, Tai Yasue</div>
                  </div>
                  <div className="spec">
                    <b>Next news</b>
                    <div>
                      Honestly, no idea. Hopefully, at the Switch 2 presentation
                      event
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="latest-cards">
              <motion.div
                initial={{ opacity: 0, transform: "scale(0.8)" }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transform: "scale(1)",
                  transition: { duration: 1, delay: 0.2 },
                }}
              >
                <Card title="Latest trailer">
                  <iframe
                    style={{ border: 0 }}
                    width={isMobile ? 280 : 560}
                    height={isMobile ? 158 : 315}
                    src="https://www.youtube.com/embed/j2DSEkYFRh8?si=TRjDe34TKttrOdE8&amp;start=245"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "scale(0.8)" }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transform: "scale(1)",
                  transition: { duration: 1, delay: 0.2 },
                }}
              >
                <Card title="Latest news">
                  <h3>
                    Kingdom Hearts: Birth by Sleep 15th anniversary message
                    leaves a clue related to Kingdom Hearts IV
                  </h3>
                  <span>January 9th, 2025</span>
                  <div className="news-body">
                    <p>
                      Not much has been revealed since the announcement of
                      Kingdom Hearts IV back in April 2022 almost 3 years ago.
                      Even though, from time to time Tetsuya Nomura, series
                      director shares some little cues about KH4 and Missing
                      Link. Today, given it's Birth by Sleep 15h anniversary,
                      Nomura has been asked to give a detail not revealed until
                      now. In several games, we can see different characters
                      waiting for someone at a crossroads. That is inspired by
                      an american folklore myth where a young man makes a deal
                      with the devil at a crossroads, trading his soul for the
                      ability to play the guitar. In Chain of Memories Sora
                      loses his memories to gain others, in Birth by Sleep the
                      three protagonists halted Xehanort's plans but they end up
                      paying the price. In the secret ending of Kingdom Hearts
                      III we see Sora at a crossroads. That's also the case for
                      the Foretellers and Luxu. What could that mean?
                    </p>
                    <img
                      className="news-screenshot"
                      src="crossroads.jpeg"
                    ></img>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="media">
          <div className="media-bg">
            <img src="bg/quadratum-night.jpeg"></img>
          </div>
          <section id="media">
            <h1>Media</h1>
            <div className="media-cards">
              <motion.div
                initial={{ opacity: 0, transform: "scale(0.8)" }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transform: "scale(1)",
                  transition: { duration: 1, delay: 0.2 },
                }}
              >
                <Card title="Screenshots">
                  <div className="screenshots">
                    {screenshots.map((screenshot, i) => (
                      <img
                        key={i}
                        onClick={() => setScreenshot(i)}
                        className="screenshot"
                        src={screenshot}
                      ></img>
                    ))}
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, transform: "scale(0.8)" }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  transform: "scale(1)",
                  transition: { duration: 1, delay: 0.2 },
                }}
              >
                <Card title="Videos">
                  <h3>Reveal Trailer | April 2022</h3>
                  <iframe
                    style={{ border: 0 }}
                    width={isMobile ? 280 : 560}
                    height={isMobile ? 158 : 315}
                    src="https://www.youtube.com/embed/j2DSEkYFRh8?si=TRjDe34TKttrOdE8&amp;start=245"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </Card>
              </motion.div>
            </div>
          </section>
        </div>

        <div id="characters" className="characters-section">
          <section>
            <h1>Characters</h1>
            <div className="characters">
              {characters.map((character: CharacterType, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    transform: "scale(0.8) translateY(50px)",
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    transform: "scale(1)",
                    transition: { duration: 1, delay: 0.2 },
                  }}
                >
                  <Character data={character}></Character>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
        <div className="worlds-section">
          <div className="worlds-bg"></div>
          <section id="worlds">
            <h1>Worlds</h1>
            <div className="worlds">
              {worlds.map((world: WorldType, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    transform: "translateY(50px)",
                  }}
                  viewport={{ once: true }}
                  whileInView={{
                    opacity: 1,
                    transform: "scale(1)",
                    transition: { duration: 1, delay: 0.2 },
                  }}
                >
                  <World data={world} />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
        <section id="socialnews">
          <h1>Social & News</h1>
          <h2>Official sources</h2>
          <div className="sources">
            {sources.map((source, i) => (
              <Source key={i} data={source}></Source>
            ))}
          </div>
          <h2>Social Media profiles and news sites</h2>
          Want to be featured here? Contact me. links at the bottom of the page!
        </section>
      </div>
      <div className="footer">
        <span>© Disney. Developed by SQUARE ENIX</span>
        <span>
          Disclaimer: This is a fanmade website and is not affiliated with
          Square. At this moment, some of the information is made up. As soon as
          we get more news, I'll update the website.
        </span>
        <span>
          Kingdom Hearts IV cover art by{" "}
          <a href="https://x.com/hollypolllyy">@hollypolllyy</a>
        </span>
        <span>
          Special thanks to <a href="mailto:televo.kh@gmail.com">Televo</a> and
          their asset collection,{" "}
          <a href="https://github.com/Televo/kingdom-hearts-recollection">
            Kingdom Hearts Re:Collection
          </a>
        </span>
        <div className="links">
          <a
            className="link"
            href="https://github.com/Roselcost/kingdomheartsiv"
            target="_blank"
          >
            <img
              className="icon"
              style={{ filter: "invert(1)" }}
              src="icons/GitHub.svg"
            ></img>
          </a>
          <a className="link" href="https://x.com/roselcost" target="_blank">
            <img
              style={{ filter: "invert(1)" }}
              className="icon"
              src="icons/X.svg"
            ></img>
          </a>
          <a
            className="link"
            href="https://bsky.app/profile/roselcost.bsky.social"
            target="_blank"
          >
            <img className="icon" src="icons/Bluesky.svg"></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
