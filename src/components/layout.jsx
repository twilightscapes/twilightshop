import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
// import { Header } from "./header"
import { Footer } from "./footer"
import { Seo } from "./seo"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby-plugin-modal-routing-3'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'
import { AiOutlineClose } from "react-icons/ai"
import twLogo from "../icons/tw-logo-white.svg"
import { StoreContext } from "../context/store-context"
import { Toast } from "./toast"
import { ImArrowRight } from "react-icons/im"
import { CartButton } from "./cart-button"
import SearchIcon from "../icons/search"
import Consent from './Consent'
import Install from './install-discount'
import Image from '../components/Image'

export function Layout({ children }) {
  const { checkout, loading, didJustAddToCart } = React.useContext(StoreContext)

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
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
  <span className="txtshadow" style={{textShadow:'2px', color:'#fff',}}>MENU</span>
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>


  <label htmlFor="openSidebarMenu" className="backdrop1" ></label>


   <div id="sidebarMenu">
  
    <div className="has-app promocode">
30% OFF CODE: <span style={{color:'#FA02B7', fontWeight:'bold'}}>LoveTheNight</span>
</div>

    <ul className="sidebarMenuInner">

 <li>
 <div className="" style={{textAlign:'center', padding:'20px 25px', }}>
<Link className="navbar-item txtshadow" to="/">
<Image alt="Return To Homepage" title="Return To Homepage" filename="tw-logo-white.png" className="" />
</Link>
</div>
 </li>

 <li className="carto" style={{textAlign:'center'}}>
              <Link className="navbar-item txtshadow" to="/art">
      
              View Photos <span style={{color:'#FA02B7',}}>start here</span>
              </Link>
      </li> 


         <li className="carto">
              <Link className="navbar-item txtshadow" to="/vault/favorites/">
              The Vault <span>Full Photo archives</span>
              </Link>
      </li>


      <li className="carto">
              <Link className="navbar-item txtshadow" to="/nft/">
                NFT Collectibles <span>Limited Editions</span>
              </Link>
      </li>


      <li className="carto">
              <Link className="navbar-item txtshadow" to="/about/">
                About Me <span>Learn All About Me</span>
              </Link>
      </li>

      <li className="carto">
      <Link className="navbar-item txtshadow" to="/gear/">Gear Talk<span>What tools I use</span></Link>
       </li>

       

      <li>
              <Link className="navbar-item txtshadow" to="/contact/">
                Contact Me<span>Ask me anything!</span>
              </Link>
      </li>
    
      

      <li className="carto" style={{border:'none', display:'flex', justifyContent:'space-around', verticalAlign:'center' }}>
  
   <Link to="/search" style={{marginRight:'20px', marginTop:'5px'}}>
    <span className="carto"><SearchIcon /></span>
   </Link>
  <div><CartButton quantity={quantity} /></div>


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
      <Consent />
     <Install />
      <Footer />
      
      </>
    </div>
    
  )
}
