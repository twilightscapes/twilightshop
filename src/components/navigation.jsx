import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")} style={{marginLeft:'', display:'flex', justifyContent:'center'}}>
      <Link
        key="All"
        className=""
        to="/products/"
        activeClassName={activeLink}
        style={{
          background:'#111',
          color:'#fff',
          padding:'8px 15px',
          borderRadius:'7px'
        }}
      >
        View All Available Art
      </Link>
      {/* <Link
        key="All"
        className={navLink}
        to="/nft/"
        activeClassName={activeLink}
      >
        Exclusive NFT Kits (new!)
      </Link> */}
      {productTypes.map((name) => (
        <Link
          key={name}
          className={navLink}
          to={`/products/${slugify(name)}`}
          activeClassName={activeLink}
        >
          {name}
        </Link>
      ))}
    </nav>
  )
}
