import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {respond: '', isClick: false}

  onClickResponse = () => {
    // console.log(s)
    this.setState({isClick: true})
  }

  render() {
    const {respond, isClick} = this.state
    const {resources} = this.props
    const lovelyImage = resources.loveEmojiUrl
    console.log(lovelyImage)
    const newList = resources
    return (
      <>
        <div className="container1">
          {isClick ? (
            <div>
              <div className="con12">
                <img src={lovelyImage} alt="love emoji" />
                <h1>Thank you!</h1>
                <p>
                  we will use this feedback to improve our customer services{' '}
                </p>
              </div>
            </div>
          ) : (
            <div className="con123">
              <h1 className="heading1">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="listContainer">
                {resources.emojis.map(eachEmoji => (
                  <li className="con-li" key={eachEmoji.id}>
                    <div className="cont">
                      <button
                        type="button"
                        onClick={this.onClickResponse}
                        className="button12"
                      >
                        <img
                          src={eachEmoji.imageUrl}
                          alt={eachEmoji.name}
                          className="img1"
                        />
                        <p> {eachEmoji.name}</p>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default Feedback
