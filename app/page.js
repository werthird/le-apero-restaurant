import About from "./containers/About";
import Contact from "./containers/Contact";
import Landing from "./containers/Landing";
import ProductBanner from "./containers/ProductBanner";
import Questions from "./containers/Questions";
import Review from "./containers/Review";



export default function Main() {
  return (
    <main className=''>
      <span id='home'></span>
      <Landing />
      <span id='about'></span>
      <About />
      <ProductBanner />
      <span id='review'></span>
      <Review />
      <span id='question'></span>
      <Questions />
      <span id='contact'></span>
      <Contact />
    </main>
  )
};
