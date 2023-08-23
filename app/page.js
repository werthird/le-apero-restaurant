import About from "./containers/About";
import Contact from "./containers/Contact";
import Landing from "./containers/Landing";
import ProductBanner from "./containers/ProductBanner";
import Questions from "./containers/Questions";
import Review from "./containers/Review";



export default function Main() {
  return (
    <main className=''>
      <Landing />
      <About />
      <ProductBanner />
      <Review />
      <Questions />
      <Contact />
    </main>
  )
};
