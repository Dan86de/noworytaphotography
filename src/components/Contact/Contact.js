import React from 'react'
import styled from 'styled-components'

import KikiBodyImage from '../KikiBody/KikiBody'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  position: relative;
  @media (min-width: 321px) {
    padding: 0 1rem;
  }
  @media (min-width: 768px) {
    padding: 0 2.75rem;
  }
  @media (min-width: 1280px) {
    padding: 0 7rem;
  }
  @media (min-width: 1920px) {
    padding: 0 12rem;
  }
  h1 {
    font-family: ff-market-web;
    margin: 0;
    @media (min-width: 321px) {
      margin: 1rem 0 0 0;
    }
    @media (min-width: 768px) {
      margin: 0;
      font-size: 3rem;
    }
    @media (min-width: 1280px) {
      font-size: 3rem;
    }
    @media (min-width: 1920px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 0.7rem;
    margin: 0;
    @media (min-width: 321px) {
      margin: 0.5rem 0 1rem 0;
      font-size: 0.75rem;
    }
    @media (min-width: 768px) {
      font-size: 1rem;
      width: 80%;
      margin-top: 1.5rem;
    }
    @media (min-width: 1280px) {
      width: 70%;
      font-size: 1.25rem;
      margin: 0.5rem 0 0 0;
    }
    @media (min-width: 1920px) {
      width: 65%;
      font-size: 1.5rem;
    }
    span {
      font-weight: 700;
    }
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    @media (min-width: 1280px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 50%;
      border: 3px solid #384f47;
      padding: 2rem 3rem 0 3rem;
      margin: 2rem 0 4rem 0;
    }
    @media (min-width: 1920px) {
      margin: 4rem 0 6rem 0;
    }
    label {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      padding: 0.25rem 0;
      width: 100%;
      @media (min-width: 321px) {
        padding: 0.5rem 0;
      }
      @media (min-width: 768px) {
        width: 45%;
        font-size: 1rem;
      }
      @media (min-width: 1280px) {
        &:nth-child(1),
        &:nth-child(2) {
          width: 45%;
        }
        width: 100%;
        font-size: 1.25rem;
      }
      input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #384f47;
        font-family: 'Montserrat';
        color: inherit;
        transition: all ease-out 0.3s;
        margin-top: 0.5rem;
        &::placeholder {
          color: #909d98;
          font-family: 'Montserrat';
        }
        &:focus {
          outline: none;
          background-color: #e8ebea;
        }
      }
    }
    textarea {
      resize: none;
      background-color: transparent;
      border: none;
      border-bottom: 2px solid #384f47;
      font-family: 'Montserrat';
      color: inherit;
      padding: 0.5rem 0 1rem 0;
      transition: all ease-out 0.3s;
      &::placeholder {
        color: #909d98;
        font-family: 'Montserrat';
      }
      &:focus {
        outline: none;
        background-color: #e8ebea;
      }
    }
  }
`

const BodyImageWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block !important;
    width: 60%;
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: 0.8;
  }
  @media (min-width: 1280px) {
    width: 40%;
    right: 5%;
  }
  @media (min-width: 1920px) {
    right: 3%;
  }
`

const EmailAlert = styled.div`
  display: flex;
  font-weight: 700;
  margin: 1rem auto;
  /* border: 1px solid black; */
  p {
    font-size: 0.8rem;
    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }
    @media (min-width: 1280px) {
      margin: 0 auto;
      background-color: white;
      display: block;
      width: 100%;
      text-align: center;
      border: 3px solid #384f47;
      padding: 0.5rem 5rem;
      font-size: 1rem;
    }
    @media (min-width: 1920px) {
      font-size: 1.75rem;
      padding: 1rem 5rem;
    }
  }
  @media (min-width: 768px) {
    margin: 0;
    justify-content: flex-start;
    padding-left: 2.5rem;
  }
  @media (min-width: 1280px) {
    width: 100%;
    justify-content: center;
    margin: 0;
    padding: 0;
    transform: translateY(50%);
  }
  @media (min-width: 1920px) {
  }
  button {
    background-color: #384f47;
    color: white;
    border: none;
    padding: 0.25rem 4rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: ff-market-web;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    @media (min-width: 768px) {
      margin: 1rem 0 1.5rem 0;
    }
    @media (min-width: 1280px) {
      font-size: 1.5rem;
      padding: 0.5rem 5rem;
      background-color: white;
      color: inherit;
      border: 3px solid #384f47;
      font-weight: 700;
      letter-spacing: 0.1rem;
      margin: 0;
      &:hover {
        color: white;
        background-color: #384f47;
      }
    }
    @media (min-width: 1920px) {
      font-size: 1.75rem;
      padding: 0.5rem 6rem;
    }
  }
`

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    const email = 'https://formspree.io/xeqllqgr'

    return (
      <FormWrapper id="contact">
        <h1>Contact</h1>
        <p>
          If you wanna contact me feel free to use contact form below or write
          directly on my email:
          <br></br>
          <br></br>
          <span>contact@noworytaphotography.com</span>{' '}
        </p>
        <form onSubmit={this.submitForm} action={email} method="POST">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Put your name here"
              required
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="_replyto"
              placeholder="Put your email here"
              required
            />
          </label>

          <label htmlFor="message">
            Message:
            <textarea
              rows="10"
              name="message"
              placeholder="Write your message here"
              required
            ></textarea>
          </label>

          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          <EmailAlert style={{ display: 'flex' }}>
            {status === 'SUCCESS' ? (
              <p>Thank You! I will reply in 24hrs!</p>
            ) : (
              <button>Contact Me</button>
            )}
            {status === 'ERROR' && (
              <p>
                Ooops! There was an error. Please make sure that You've writed
                correct values on Name, Email end Message fields. Thank You!
              </p>
            )}
          </EmailAlert>
          <BodyImageWrapper>
            <KikiBodyImage />
          </BodyImageWrapper>
        </form>
      </FormWrapper>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
