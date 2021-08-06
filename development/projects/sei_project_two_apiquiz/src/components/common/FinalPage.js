import { Link } from 'react-router-dom'
import score from '../game/QuestionCard'

function FinalPage() {  
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="landing-page-text">
              <div className="box">
                <p className="title">You have reached the end of the quiz!</p>
                <p className="subtitle">Your final score is { score } points.</p>
              </div>
              <Link to="/" className="button is-link is-light is-medium">Return to home</Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default FinalPage