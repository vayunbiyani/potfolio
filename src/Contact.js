import React from 'react'

export const ContactSection = () => {

    const handleClick = (e) => { 
        e.preventDefault()
        console.log('Yoo')
        const x = document.querySelector('#name').value && document.querySelector('#email').value && document.querySelector('#message').value
        if(x){
            alert('Form Submitted!')
        }else{
            alert('Something Went Wrong')
        }
    }
  return (
    <>
      <h2 style={{textAlign: "center"}}>Contact Me</h2>
      <section id="contact">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br/>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br/>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <br/>
          <button type="submit" onClick={handleClick}>Send</button>
        </form>
      </section>
      </>
  )
}
