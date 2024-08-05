/** @jsx jsx */
import * as React from 'react'
import { jsx, Link as TLink, useColorMode } from 'theme-ui'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
// Import the logo images
import xLogoBlack from '../../../../static/x-logo-black.png'
import xLogoWhite from '../../../../static/x-logo-white.png'
// Import the email icon from react-icons
import { MdEmail } from 'react-icons/md'

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()
  const [colorMode] = useColorMode()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          '@media (first-of-type)': { ml: 3 }, 
          fontSize: [1, '18px'] 
        }}>
          {externalLinks.map((link) => (
            <div key={link.url} sx={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 1,
              width: '2rem',
              height: '2rem'
            }}>
              <TLink href={link.url} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {link.name === "X" ? (
                  <img
                    src={colorMode === "dark" ? xLogoWhite : xLogoBlack}
                    alt="X Logo"
                    sx={{ width: "0.9rem", height: "0.9rem" }}
                  />
                ) : link.name === "Email" ? (
                  <MdEmail
                    color={colorMode === "dark" ? "#fff" : "#5e5e5e"}
                    size="1.2rem"
                  />
                ) : (
                  link.name
                )}
              </TLink>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks