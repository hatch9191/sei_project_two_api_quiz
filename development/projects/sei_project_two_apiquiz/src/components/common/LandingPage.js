import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="landing-page-text">
            <p className="box title">Welcome to the Hardest Pub Quiz Movie Round You&apos;ve Ever Played...</p>
            <Link to="/game" className="button is-link is-light is-medium">Start Game</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage

{/* <p className="subtitle box">Start Game</p> */}