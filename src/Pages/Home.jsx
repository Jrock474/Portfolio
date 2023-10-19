import About from "../Conponents/About";

const Home = () => {

  return (
    <>
    <video autoPlay muted loop className="home-page-animation">
        <source src="Videos\Timeline_1.mp4" type="video/mp4" />
        Sorry, your browser doesn't support videos.
    </video>
    <About />
    </>
  );
};

export default Home;
