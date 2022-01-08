import {Blog,Features,Footer,Header,Possibility,WhatsBrain} from './Containers'
import {Cta,Navbar,Brand} from './Components'

function App() {
  return (
        <div className='bg-bg'>
          <div className='bg-gradient-to-r from-[#002853] to-[#040C18]-500'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatsBrain />
          <Features />
          <Possibility />
          <Cta />
          <Blog />
          <Footer />
        </div>
  );
}

export default App;
