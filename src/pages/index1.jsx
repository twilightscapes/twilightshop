
import * as React from "react"
import { Footer } from "../components/footer"
import { Seo } from "../components/seo"
import { Layout } from "../components/layout"
import 'fontsource-hammersmith-one'
import { Link } from 'gatsby-plugin-modal-routing-3'
// import Consent from '../components/Consent'

import Image from '../components/Image'
// import Menu from '../components/Menu'

import Newsignup from "../components/newssign"

import { RiArrowDownLine, RiArrowRightSLine, RiStarLine, RiSendPlane2Line } from "react-icons/ri"
import { Helmet } from "react-helmet"
import ScrollAnimation from 'react-animate-on-scroll'
import styled from "styled-components"
const CustomBox = styled.div`

@media (min-width: 58em) {

}


`




export default function IndexPage() {
  return (
<> 
<Helmet>
  
    <body className="homepage" />


</Helmet>


{/* <Seo /> */}

    <CustomBox>
    <Layout>
    <Seo
          title={`Todd Lambert - Twilightscapes night photography`}
          description={`Twilightscapes night photography`}
          image={'https://twilightscapes.com/default-og-image-blank.jpg'}
        />
{/* <Menu /> */}


   

    {/* <TouchUp /> */}
    <div className="home-banner flexbutt intro" style={{position:'relative', height:'auto', overflow:'hidden'}}>




<div className="flexcheek" style={{padding:'1vh 3% 0 3%',}}>

  <h1 className="title1">Night Photography</h1>

  <p className="tagline1">
   Unique Night Photography by Todd Lambert
  </p>


      <p>Finding obscure locations and unusual subject matter, Todd has excelled at capturing long exposure photos of rarely seen moments of time.</p>
      <p>As a location scout and avid urban explorer, Todd learned to photograph what he sees and to bring the unique subject matter he finds to light.</p>

<div className="" style={{display:'flex'}}>

      <blockquote className="frontquote" style={{width:'60%'}}>
<p>Finding yourself at 3am in a graveyard filming flowers; some may see that as weird, but for me, it's pure tranquility. </p>
<div style={{textAlign:'right', marginRight:'20%', marginTop:'10px'}}> – Todd Lambert
</div></blockquote>

<div style={{width:'40%',  padding:'3vw'}}><Image alt="Todd Lambert hanging with friends" filename="todd-profile.jpg" className="" /></div>

</div>

<p>Let Todd's night photography and digital storytelling, prove to you that the night is indeed beautiful.</p>
<br/>

<Link
              className="actionJackson txtshadow"
              style={{
                cursor:'pointer',
                width:'70%',
                margin:'0 auto'
  
              }}
              to="/galleries/"
            >
              View The Photos {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link>

{/* <Social /> */}
  <br /> <br />

  


</div>













<div className="flexcheek" style={{position:'relative', overflow:'hidden'}}>

<div className="kenburns-right"  style={{zIndex:'-1', width:'', height:''}}><Image alt="Todd Lambert hanging with friends" filename="night316.jpg" className="featured-image kenburns-right" /></div>


<div className="abcontent" style={{position:'absolute', height:'', width:'100%', top:'50px', right:'0',}}>

<ScrollAnimation animateIn="bounceInDown" delay={1350} offset={0}  initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'0px', paddingRight:'10%', border:'0px solid yellow'}}>
<h2
  className="letter normal txtshadow-header hit-the-floor"
  style={{
    color: '#fff',
    fontSize: '60px',
   position: 'relative',
//            top: '100px',
//            right: '1%',
//            backgroundColor: '#ff0000',
    textAlign: 'right', 
    float: 'none',
    margin:'0',
    padding:'0',
  }}
>
  Follow me
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInRight" delay={1400} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid red'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'40px',
   color: 'white',
   position: 'relative',
    textAlign: 'right', 
    margin:'0',
    padding:'0',
  }}
>
  into the
</h2>
</ScrollAnimation>


<ScrollAnimation animateIn="bounceInUp" delay={1450} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', top:'', paddingRight:'10%', border:'0px solid blue'}}>
<h2
  className="letter narrow txtshadow mobile-txt"
  style={{
   fontSize:'80px',
   color: 'white',
   position: 'relative',
//            top: '230px',
    textAlign: 'right',
    textTransform: 'uppercase', 
    margin:'0',
    padding:'0',
  }}
>
  Night
</h2>
</ScrollAnimation>



<ScrollAnimation animateIn="bounceInUp" delay={1750} initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'relative', bottom:'0',
right:'', border:'0px solid yellow', justifyContent:'center', width:'', textAlign:'center'}}>


  <Newsignup />
</ScrollAnimation>


</div>

</div>

</div>



{/* <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

<p style={{textAlign:'center', margin:'2rem 0 0 0'}}>GET ALL YOUR FAVORITES NOW</p>

<div style={{display:'flex', border:'1px solid #666', padding:'1rem', margin:'0 3% 0 3%', borderRadius:'12px', height:'', textAlign:'center', justifyContent:'space-around', alignContent:'center', alignItems:'center', maxWidth:'800px', gap:'20px', background:''}}>

  <span style={{fontSize:'70px', color:'white', transform:'rotate()', lineHeight:'80%'}}>PICK ANY <br /><span style={{letterSpacing:''}}>THREE</span></span>

  <span style={{fontSize:'40px', color:'#FA02B7', lineHeight:'90%'}}>
  ONLY PAY<br /> FOR TWO
  </span>
</div>
</div>




<br /><br />
<h2 style={{display:'flex', fontSize:'30px', margin:'0 3% 2rem 3%'}}>
      Latest Twilightscapes<span className=""> <span className="icon -right" style={{padding:'10px 0 0 1rem'}}><RiArrowDownLine /></span>
      </span>
    </h2>
    <a id="photos" />
    <div className="frontprod">
      <ProductListing products={data.shopifyCollection.products} className="frontprod" />
</div>
      <Link
              className="moreButton"
              sx={{
                cursor:'pointer',
                width:'',
                backgroundColor:'#000 !important'
              }}
              to="/vault/favorites/"
            >
              View More {" "}
              <span className="icon -right" style={{paddingLeft:'1rem'}}>
                <RiSendPlane2Line />
              </span>
            </Link> */}


{/* <Consent /> */}

      {/* <Footer /> */}

      </Layout>
</CustomBox>
    </>
  )
}