import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar logo='Logo PROPS' />
      <Hero title='This hero title' subtitle='susbtitle prop content' />
      <HomeCards />
      <JobListing />
    </>
  );
};

export default App;
