import React from 'react'
import styled from 'styled-components'

import KikiBodyImage from '../KikiBody/KikiBody'

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
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
    margin: 1rem 0 0 0;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
    @media (min-width: 1280px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1920px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: 0.75rem;
    margin: 0.5rem 0 1rem 0;
    @media (min-width: 768px) {
      font-size: 1rem;
      width: 70%;
      margin-top: 1.5rem;
    }
    @media (min-width: 1280px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1920px) {
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
      width: 50%;
      border: 4px solid #384f47;
      padding: 3rem 3rem 0 3rem;
      margin: 0 0 5rem 0;
    }
    @media (min-width: 1920px) {
      padding: 4rem 4rem 0 4rem;
    }
    label {
      display: flex;
      flex-direction: column;
      font-weight: 700;
      padding: 0.5rem 0;
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
        font-size: 1.25rem;
      }
      @media (min-width: 1280px) {
        width: 100%;
        font-size: 1.5rem;
      }
      input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #384f47;
        font-family: 'Montserrat';
        color: inherit;
        line-height: 1.5;
        padding-top: 0.5rem;
        &::placeholder {
          color: #909d98;
          font-family: 'Montserrat';
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
      &::placeholder {
        color: #909d98;
        font-family: 'Montserrat';
      }
    }
    button {
      background-color: #384f47;
      color: white;
      border: none;
      margin: 1rem auto;
      padding: 0.25rem 4rem;
      font-size: 1.5rem;
      font-family: ff-market-web;
      @media (min-width: 768px) {
        transform: translateX(-75%);
        margin-bottom: 1.5rem;
      }
      @media (min-width: 1280px) {
        transform: translateX(0);
        transform: translateY(50%);
        margin: 0;
        font-size: 2rem;
        padding: 0.5rem 5rem;
        background-color: white;
        color: inherit;
        border: 4px solid #384f47;
        &:hover {
          color: white;
          background-color: #384f47;
        }
      }
      @media (min-width: 1920px) {
      }
    }
  }
`

const BodyImageWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block !important;
    width: 65%;
    position: absolute;
    bottom: 48px;
    right: -10%;
    opacity: 0.8;
  }

  @media (min-width: 1280px) {
    width: 47%;
    right: 0;
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
      <FormWrapper>
        <h1>Contact</h1>
        <p>
          If You wanna contact me feel free to use contact form below or write
          directly on my email:
          <br></br>
          <br></br>
          <span>contact@noworytaphotography.com</span>{' '}
        </p>
        <form onSubmit={this.submitForm} action={email} method="POST">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" placeholder="Put your name here" />
          </label>

          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="_replyto"
              placeholder="Put your email here"
            />
          </label>

          <label htmlFor="message">
            Message:
            <textarea
              rows="10"
              name="message"
              placeholder="Write your message here"
            ></textarea>
          </label>

          <input type="text" name="_gotcha" style={{ display: 'none' }} />
          {status === 'SUCCESS' ? (
            <p>Thanks! I will reply in 24hrs!</p>
          ) : (
            <button>Contact Me</button>
          )}
          {status === 'ERROR' && (
            <p>
              Ooops! There was an error. Please make sure that You've writed
              correct values on Name, Email end Message fields. Thank You!
            </p>
          )}
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
