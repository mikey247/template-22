import { Link } from 'react-router-dom';
import classes from './Footer.module.css'
import facebook from './Icons/Facebook.svg'
import twitter from './Icons/Twitter.svg'
import instagram from './Icons/Instagram.svg'
const Footer = () => {
    return ( 
        <footer>
         <div class={classes.footerLeft}>
        <div className={classes.logo}>
          <img src={require("./Images/logo black.png")} alt="" />
          <h4>TechStudio Academy</h4>
        </div>
        <div class={classes.address}>
          <p>3, Ogunlesi Street, Off Awoyokun,</p>
          <p>Onipanu, Palmgroove,</p>
          <p>Lagos</p>
        </div>
      </div>

      <div class={classes.newsletter}>
        <h3>SIGN UP FOR NEWSLETTER</h3>
        <input type="email" placeholder="Enter your email address" /> <br />
        <br />
        <button>submit</button>
      </div>
      <div class={classes.social}>
        <h3>Social Media</h3>
        <Link to={"/"}><img src={instagram} alt='instagram icon' /></Link>
        <Link to={"/"}><img src={facebook} alt='facebook icon'/></Link>
        <Link to={"/movieSearch"}><img src={twitter} alt='twittter icon'/></Link>
      </div>
        </footer>
     );
}
 
export default Footer;