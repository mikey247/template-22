import classes from "./HomePage.module.css";
import Calendar from './Icons/Group.svg'
import Graph from './Icons/Vector.svg'
import Cap from './Icons/Vector-1.svg'
const HomePage = () => {
  return (
    <>
      <section className={classes.section1}>
        <div className={classes.section1text}>
          <h1>Lörem Ipsum Posorade Syet Metrotism</h1>
          <h3>
            Lörem ipsum krobåsm parangen exobel när Facebookfest dirar plara
            disade podonat. Nyfyligt viren. Du kan vara
          </h3>
        </div>
        <button>Get Program Package</button>
      </section>

      {/* SECTION 2 */}
      <section className={classes.section2}>
        <div>
          <img src={Calendar} alt="" />
          <h1>16 weeks Bootcamp</h1>
          <p>
            Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen
            nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire.
            Homokompetens sock renisamma bel.
          </p>
        </div>

        <div>
          <img src={Graph} alt="" />
          <h1>Develop New Skils</h1>
          <p>
            Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen
            nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire.
            Homokompetens sock renisamma bel.
          </p>
        </div>

        <div>
          <img src={Cap} alt="" />
          <h1 style={{marginTop:'4rem'}}> Become an Expert </h1>
          <p>
            Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire dongen
            nyvir seismisk. Vesm äde saledes: nysen denar: telingar mihire.
            Homokompetens sock renisamma bel.
          </p>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className={classes.section3}>
        <div className={classes.section3Inner}>
          <h1>Lörem ipsum sprejgodis sovis</h1>
          <hr className={classes.hr} />

          <div className={classes.section3Content}>
            <img src={require("./Images/Image 6.png")} alt="" />

            <div className={classes.section3RightContent}>
              <h3>Lörem Ipsum Eurosat</h3>
              <p>
                Lörem ipsum eurosat filogram till kan transitflykting. Vaning
                krislåda geons usamma ter anaska nyl jag spedit. Negt ränade: om
                pseudoren los.
              </p>
              <p>
                Kavabel migt un. Relyde speskap plavadade. Semiren hemigon i
                krobilig. Böbel kvasirar att tesogen, och polypol. Du kan vara
                drabbad.
              </p>
              <p>
                Realig seteren, i kubel. Lade samlarsyndrom och vasat söbel,
                arurad. Ding preda dor i exorar samt ären i maskapet, ses.
              </p>
              <h3>Lörem Ipsum Eurosat</h3>
              <p>
                Den nya ekonomin krock nyrena popresade trening pon däna. Kack
                ding en mis rekaktig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className={classes.section4}>
        <h1>Lörem ipsum sprejgodis sovis</h1>
        <hr className={classes.hr} />

        <div className={classes.section4Content}>
          <div className={classes.section4Text}>
            <p>
              Lörem ipsum eurosat filogram till kan transitflykting. Vaning
              krislåda geons usamma ter anaska nyl jag spedit. Negt ränade: om
              pseudoren los. Kavabel migt un. Relyde speskap plavadade. Semiren
              hemigon i krobilig. Böbel kvasirar att tesogen, och polypol. Du
              kan vara drabbad.
            </p>
            <p>
              Realig seteren, i kubel. Lade samlarsyndrom och vasat söbel,
              arurad. Ding preda dor i exorar samt ären i maskapet, ses. Orubel
              epinde parangen nengen. Beska krott hynade dengen plaloskap, tisk:
              plaskade.
            </p>
            <p>
              Den nya ekonomin krock nyrena popresade trening pon däna. Kack
              ding en mis rekaktig fastän dingar pande genusbudgetering krongen.
              Prer. Telologi dyment i gångpeng eure i mode.
            </p>
            <button>Get Program Package</button>
          </div>
          <img src={require("./Images/image 8.png")} alt="" />
        </div>
      </section>

      <section className={classes.section5}>
        <div className={classes.section5ContentUpper}>
          <div class={classes.leftdiv}>
            <img src={require("./Images/Image 3.png")} alt="" />
            <p>
              Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire
              dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar
              mihire. Homokompetens sock renisamma bel deledes. Kyn dilassa.
              Derade gådisamma trelov fastän yv tills heterokans, och sessa, som
              bylig.
            </p>
            <p>
              Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire
              dongen nyvir seismisk.
            </p>
            <h3>JOSEPH DARAMOLA (FRONTEND DEVELOPER)</h3>
            <h4>- FRIYAY.IO</h4>
          </div>
          <div class={classes.rightdiv}>
            <img src={require("./Images/Image 2.png")} alt="" />
            <p>
              Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire
              dongen nyvir seismisk. Vesm äde saledes: nysen denar: telingar
              mihire. Homokompetens sock renisamma bel deledes. Kyn dilassa.
              Derade gådisamma trelov fastän yv tills heterokans, och sessa, som
              bylig.
            </p>
            <p>
              Lörem ipsum flitbonus renovräkning. Seminar suprafas, reatire
              dongen nyvir seismisk.
            </p>
            <h3>PETER EDEAWE (SOFTWARE DEVELOPER)</h3>
            <h4>- BREATHEAGENCY.COM</h4>
          </div>
        </div>

        {/* lower section 5 */}
        <div className={classes.section5ContentLower}>
          <h1>Lörem ipsum sprejgodis sovis</h1>
          <hr className={classes.hr} />
          <p className={classes.section5align}>
            Lörem ipsum eurosat filogram till kan transitflykting. Vaning
            krislåda geons usamma ter anaska nyl jag spedit. Negt ränade: om
            pseudoren los. Kavabel migt un. Relyde speskap plavadade. Semiren
            hemigon i krobilig. Böbel kvasirar att tesogen, och polypol.
          </p>

          <div className={classes.section5Flex}>
            <img src={require("./Images/Image 4.png")} alt="" />
            <div>
              <h3>Lörem ipsum eurosa filogram till kan</h3>
              <p>
                Lörem ipsum eurosat filogram till kan transitflykting. Vng
                krislåda geons usammdit. Negt ränade: om pseudoren los. Kavabel
                migt un. Relyde se. Semiren hemigon i krobilig. Böbel kvasirar
                att tesogen, och polypol.
              </p>
              <p>
                Filogram till kan transitflykting. Vaning kriåda geons uma ter
                anka nyl jag spedit. Negt ränade: om pseudoren los. Kavabel migt
                un.
              </p>
              <p>
                Relyde speskap plavadade. Semiren hemigon i krobilig. Böbel
                kvasirar att tesogen, och polypol. Böbel kvasirar att tesogen,
                och polypol.
              </p>
              <p>
              Lorem ipsum eurosat filogram till kan tranting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={classes.interested}>
        
          <h3>Interested in what you’ll learn during the course of this program?</h3>
          <button>Get Program Package</button>
      </div>


      {/* SECTION 6 */}

      <section className={classes.section6}>
       <div className={classes.section6Div}>
         <div className={classes.section6left}>
           <div>
           <h3>Lorem, ipsum dolor.</h3>
           <h2>Lörem Ipsum Posorade Syet Metrotism</h2>
           <br />

           <p>Lorem, ipsum dolor.</p>

           <p>
           Lörem ipsum eurosat filogram till kan transitflykting. Vaning krislåda geons usamma ter anaska nyl jag spedit. Negt ränade: om pnoren los. Kavabel migt un. Relyde speskap plavadade. Semimigon ikrobilig. Böbel kvasirar att tesogen, och polypol.
           </p>

           <p>
             Lorem, ipsum dolor.
           </p>

           <p>
           Lörem ipsum eurosat filogram till kan transitflykting. Vaning krislåda geons usamma ter anaska nyl jag spedit. Negt ränade: om pshren los. Kavabel migt un. Relyde speskap plavadade. Seminrhgon jkrobilig. Böbel kvasirar att tesogen, och polypol.
           </p>

           <p>Lorem, ipsum dolor.</p>
           <ul>
             <li>Lörem ipsum eurosat filogram till kan transitflykting. </li>
             <li>Vaning krislåda geons usamma ter anaska nyl jag spedit.</li>
             <li>Negt ränade: om pseudoren los. Kavabel migt un.</li>
           </ul>
           </div>

         </div>


         <div className={classes.section6right}>
           <div>
           <h1>Weekday Classes</h1>
            <ul>
              <li>Fang beplan kärlekslås. </li>
              <li>Dåledes nått kant. </li>
              <li>Semitår.</li>
              <li>Tibel jasminmöte.</li>
            </ul>

           <h1>Weekend Classes</h1>
           <ul>
              <li>Fang beplan kärlekslås. </li>
              <li>Dåledes nått kant. </li>
              <li>Semitår.</li>
              <li>Tibel jasminmöte.</li>
            </ul>

           <h1>Virtual Classes</h1>
           <ul>
              <li>Fang beplan kärlekslås. </li>
              <li>Dåledes nått kant. </li>
              <li>Semitår.</li>
              <li>Tibel jasminmöte.</li>
            </ul>
            <button>Get Program Package</button>
           </div>

          </div>
       </div>
      </section>
    </>
  );
};

export default HomePage;
