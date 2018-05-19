import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {

  return (
    <section id="RandomQuote" style= {{
      backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .1) 0, #000 100%), url("https://images.unsplash.com/photo-1470549813517-2fa741d25c92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d1aec0b445e44cfbca1e0741f008709&w=1000&q=80")'

    }}>
      <div class="container">
        <h1>"{state.randomQuoteData[0].quote}" </h1>
        <span class="author">- {state.randomQuoteData[0].author} -</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
