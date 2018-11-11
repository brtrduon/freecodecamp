// note: this is only the solution for JS. I omitted the HTML and CSS portions of the project. these can be viewed on my codePen

const quotes = [
    {
      author: 'Zidane Tribal',
      quote: "You don't need a reason to help someone."
    },
    {
      author: 'Maynard James Keenan',
      quote: "A circle is the reflection of eternity. It has no beginning and it has no end - and if you put several circles over each other, then you get a spiral."
    },
    {
      author: 'Paul the Apostle',
      quote: "Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity."
    },
    {
      author: 'Anna Propas',
      quote: "Take care of yourself. You're awesome."
    },
    {
      author: 'King David',
      quote: "In the morning, You hear my voice; in the morning I lay my requests before You and wait expectantly."
    },
    {
      author: 'John F Kennedy',
      quote: "Ask not what your country can do for you — ask what you can do for your country."
    },
    {
      author: 'Confucius',
      quote: "The past cannot be changed. The future is yet in your power."
    },
    {
      author: 'J.R.R. Tolkien',
      quote: "Not all those who wander are lost."
    },
    {
      author: 'Jamie Hirano',
      quote: "Don't give up with coding. I believe in you."
    },
    {
      author: 'Confucius',
      quote: "It does not matter how slowly you go as long as you do not stop."
    },
    {
      author: 'Steve Jobs',
      quote: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time."
    },
    {
      author: 'Aristotle',
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    },
    {
      author: 'Pablo Picasso',
      quote: "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law."
    },
    {
      author: 'Napoleon Bonaparte',
      quote: "Victory is not always winning the battle...but rising every time you fall."
    },
    {
      author: 'Plato',
      quote: "Reality is created by the mind, we can change our reality by changing our mind."
    },
    {
      author: 'Ralph Waldo Emerson',
      quote: "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."
    },
    {
      author: 'Dr. Seuss',
      quote: "Don't cry because it's over, smile because it happened."
    },
    {
      author: 'Christopher Reeve',
      quote: "Once you choose hope, anything's possible."
    },
    {
      author: 'Albert Einstein',
      quote: "Try not to become a person of success, but rather try to become a person of value."
    },
    {
      author: 'Charles Darwin',
      quote: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change."
    },
    {
      author: 'Winston Churchill',
      quote: "If you're going through hell, keep going."
    },
  ]

  // import React, { Component } from 'react';
  
  class App extends Component {
     constructor(props) {
       super(props);
       
       this.state = {
         quote: '',
         author: ''
       }

       this.newQuote = this.newQuote.bind(this);
     }
    
    componentWillMount() {
      let randomNum = Math.floor((Math.random()*quotes.length));
      
      // Object.keys(quotes).map((i) => {
      //   console.log()
      // })
      let quote = quotes[randomNum];
      // console.log(quote.author)
      
      this.setState({
        quote: quote.quote,
        author: quote.author
      })
    }
    
    newQuote = () => {
      let randomNum = Math.floor((Math.random()*quotes.length));
      
      // Object.keys(quotes).map((i) => {
      //   console.log()
      // })
      let quote = quotes[randomNum];
      // console.log(quote.author)
      
      this.setState({
        quote: quote.quote,
        author: quote.author
      })
      
      console.log(this.state)
    }
    
    
    
    render() {
      
      return (
        <div id="quote-box">
          <div id='text'>Quote: {this.state.quote}</div>
          <div id='author'>Author: {this.state.author}</div>
          <button id='new-quote' onClick={this.newQuote}>New Quote</button>
          <a id='tweet-quote' href='twitter.com/intent/tweet'></a>
        </div>
      )
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));