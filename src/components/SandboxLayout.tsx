import { FC } from "react";
import style from './SandboxLayout.scss'

const SandboxLayout: FC = ({ children }) => {
  return (
    <>
      <style jsx>{style}</style>
      {children}
    </>
  )
}

export default SandboxLayout
