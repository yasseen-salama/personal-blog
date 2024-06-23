/** @jsx jsx */
import * as React from "react"
import { jsx, Link as TLink, useColorMode } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

// Import the logo image
import xLogoBlack from "../../../../static/x-logo-black.png"
import xLogoWhite from "../../../../static/x-logo-white.png"


const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()
  const [colorMode] = useColorMode()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <TLink key={link.url} href={link.url}>
              {link.name === "X" ? (
                <img
                  src={colorMode === "dark" ? xLogoWhite : xLogoBlack}
                  alt="X Logo"
                  sx={{ width: "0.9rem", height: "0.9rem" }}
                />
              ) : (
                link.name
              )}
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks