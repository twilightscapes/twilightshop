import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
// import { Footer } from "./footer"
import { Seo } from "./seo"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
// import twLogo from "../icons/tw-logo-white.svg"
import { StoreContext } from "../context/store-context"
import { Toast } from "./toast"
import Bug from "../../static/icons/logo.svg"
import Logo from "../../static/icons/logo.svg"
import { ImArrowRight } from "react-icons/im"
// import { CartButton } from "./cart-button"
// import SearchIcon from "../icons/search"
// import Consent from './Consent'
// import Install from './install-discount'
// import Image from '../components/Image'
// import { BiLeftArrow } from "react-icons/bi"
import { navigate } from "gatsby";

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteTitle: title
      }
    }
  }
`


export function Layout({ children, className, props  }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

  // const { site, siteSearchIndex } = useStaticQuery(query)
  // const { siteTitle } = site.siteMetadata


  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <div style={{background:''}}> 
<>
      <Seo />
      <SkipNavLink />

      <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <>
          <div style={{position:'fixed', right:'6vw', padding:'10px', fontSize:'40px', background:'#111 !important', filter:'none', opacity:'1 !important'}}>
          <Link state={{noScroll: true }} to={closeTo}>
            <AiOutlineClose />
          </Link>
          </div>
          </>
        ) : (
<></>
        )}

      </div>
    )}
  </ModalRoutingContext.Consumer>


      {/* <Header /> */}

      
      

<header>

{/* <Link to="/"><img id="logo" className="twlogo1" src={twLogo} alt="Twilightscapes Logo" style={{margin:'16px 0 40px 4vw', minWidth:'100px', maxWidth:'100px', height:'auto', padding:'0', border:'0px solid red', position:'fixed', zIndex:'2'}} /></Link> */}







<input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
  <label id="menuicon" htmlFor="openSidebarMenu" className="sidebarIconToggle">

  {/* <div className="cornertext" style={{textShadow:'2px', color:'#fff',}}>
  <IoMdFingerPrint style={{fontSize:'50px', }}/>
 <span><br />TAP CORNER<br /> FOR MENU<br />
</span>
    </div> */}




{/* <IoMdFingerPrint style={{fontSize:'60px', margin:'0 20px 0 0' }}/> */}
<Bug className="bug" style={{fontSize:'38px', maxWidth:'', opacity:'.4', margin:'100px 0 0 0', width:'100%' }}/>
<div style={{textAlign:'center'}}>MENU</div>
    {/* <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div> */}
  </label>


  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu" style={{minWidth:'', width:''}}>
  
{/* <div className="no-app promocode">
30% OFF CODE: <span style={{color:'var(--primary-color)', fontWeight:'bold'}}>LoveTheNight</span>
</div> */}










  {/* <Install /> */}



	

    




    <ul className="sidebarMenuInner post-card" style={{maxWidth:'400px', position:'absolute', right:'0', display:'', justifyContent:''}}>

 <li className="carta" style={{border:'none', margin:'1rem 0',textAlign:'center'}}>
<Link title="Return To Home" to="https://twilightscapes.com/" aria-label="Return To Home"> 
<Logo />
{/* <span>Follow Me Into The Night</span> */}
</Link>
 </li>
 <li className="carto" style={{border:'none', margin:'1rem 0',textAlign:'center'}}>
<Link title="Return To Home" to="https://twilightscapes.com/" aria-label="Return To Home"> 
<Logo />
{/* <span>Follow Me Into The Night</span> */}
</Link>
 </li>
 
 {/* <li className="carta" style={{border:'none', marginBottom:'1rem'}}>
 <a className="" onClick={()=>navigate(-1)}><img id="logo" className="twlogo" src={twLogo} alt="Twilightscapes Logo" title="Return To Homepage" style={{minWidth:'100px', maxWidth:'',}} /></a>
 </li> */}




 {/* <li className="carto">
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Me<span>I love hearing from you!</span>
</Link>
</li> */}



<li className="carta">
 <Link className="navbar-item txtshadow" to="/contact/">
Contact Me<span>Ordering Questions?</span>
</Link>
</li>




      {/* <li className="carto">
      <Link className="navbar-item txtshadow" to="/photo-tools/">Twilight Tools<span>Lighting and Gear</span></Link>
       </li> */}


      <li className="carto">
              <Link className="navbar-item txtshadow" to="https://twilightscapes.com/about/">
                About Todd Lambert<span>As seen on reality TV</span>
              </Link>
      </li>

      {/* <li className="carto">
      <Link className="navbar-item txtshadow" to="/posts/">Posts<span>My rants &amp; raves</span></Link>
       </li> */}


      


      {/* <li className="carto">
              <Link className="navbar-item txtshadow" to="/vault/favorites/">
              The Vault <span>Full Photo archives</span>
              </Link>
      </li> */}


<li className="carto">
              <Link className="navbar-item txtshadow" to="https://vault.twilightscapes.com">
      
              View Photos <span>Browse Photo Galleries</span>
              </Link>
      </li> 

      <li className="carto">
              <Link className="navbar-item txtshadow" to="https://twilightscapes.com/nft/">
                NFT Collectibles <span>Limited Editions</span>
              </Link>
      </li>

      
{/* <li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/experiences/">
              <span style={{color:'var(--primary-color)',}}>(All New)</span>3D Experiences
                 Multimedia 3D Blog
              </Link>
      </li> */}



      
    
      <li className="carta">
      <div style={{display:'flex', justifyContent:'center'}}>
<button className="back" onClick={()=>navigate(-1)} style={{padding:'4px 8px', borderRadius:'12px'}}>
        {/* <span className="icon -left" style={{paddingRight:'1rem'}}>
                <BiLeftArrow />
        </span>  */}
        {" "} Continue Choosing 
</button>
</div>
      </li>

      

      <li className="carto crypto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center', padding:'0 0',  }}>
  

   {/* <Link className="sherlock" to="/search/" style={{marginRight:'0', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link> */}
   
  


        </li>

    

    </ul>






  </div>










      <Toast show={loading || didJustAddToCart} >
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Added to cart{" "}
            <div style={{fontSize:'30px', marginLeft:'10px'}}><ImArrowRight /></div>
          </>
        )}
      </Toast>
 



      {/* <Link to="/search" style={{display:'flex', verticalAlign:'center', marginTop:'12px', marginRight:'20px'}}>
    <span><SearchIcon /></span>
   </Link>

  <div style={{marginTop:'5px'}}><CartButton quantity={quantity} /></div> */}
     


     

</header>



{/* <div className="toppad" style={{display:'block', height:'20px', border:'0px solid yellow'}}></div> */}



      <SkipNavContent className="intro">{children}</SkipNavContent>
      
      <br /><br />
      {/* <Consent /> */}
     {/* <Install /> */}
      {/* <Footer /> */}
      
      </>
    </div>
    
  )
}
