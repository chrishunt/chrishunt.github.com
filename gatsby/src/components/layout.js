import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return (
    <div className="p-4 max-w-3xl mx-auto text-xl leading-relaxed" data-is-root-path={isRootPath}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
