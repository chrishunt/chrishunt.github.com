import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (!isRootPath) {
    header = (
      <p>
        ← <Link className="underline" to="/">index</Link>
      </p>
    )
  }

  return (
    <div className="p-4 max-w-3xl mx-auto" data-is-root-path={isRootPath}>
      <header className="">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
