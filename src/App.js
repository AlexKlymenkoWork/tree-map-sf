import React, { lazy, Suspense } from "react"
import { PropagateLoader } from "react-spinners"
import "./App.css"

const Dmap = lazy(() => import("./components/dmap"))

const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
`

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <PropagateLoader
            css={override}
            sizeUnit={"px"}
            size={15}
            color={"#54ff00"}
            loading={true}
          />
        }
      >
        <Dmap />
      </Suspense>
    </div>
  )
}

export default App
