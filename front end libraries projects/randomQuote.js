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
  ]
  
  class App extends React.Component {
     constructor(props) {
       super(props);
       
       this.state = {
         quote: '',
         author: ''
       }
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