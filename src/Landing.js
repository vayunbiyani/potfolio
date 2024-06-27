import React from 'react'
import memoji from './media/memoji.png'

export const LandingSection = () => {
  return (
    <section id="landing">
        <div>
          <img src ={ memoji} alt="Avatar" />
          <h2>Vayun Biyani</h2>
          <p>Frontend Developer</p>
        </div>
      </section>
  )
}