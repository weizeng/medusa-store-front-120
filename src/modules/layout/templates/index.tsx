import React from "react"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import Script from "next/script"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
      <Script id="rocket-chat" strategy="afterInteractive">
          {`
              // paste the javascript code here
              // the immediately invoked function is just an example
              (function(w, d, s, u) {
                w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
                var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
                j.async = true; j.src = 'https://rocketchat.dfdf.in/livechat/rocketchat-livechat.min.js?_=201903270000';
                h.parentNode.insertBefore(j, h);
              })(window, document, 'script', 'https://rocketchat.dfdf.in/livechat');
          `}
      </Script>
    </div>
  )
}

export default Layout
