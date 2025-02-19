import Image from "next/image";
import Navbar from "./component/navbar/Navbar";
import { Hero } from "./component/molecules/Hero";
import { ArtisianCollection } from "./component/molecules/ArtisianCollection";
import { PastEx } from "./component/molecules/PastEx";
import { UpcomingEvent } from "./component/molecules/UpcomingEvent";
import { FeaturedA } from "./component/molecules/FeaturedA";
import { Footer } from "./component/footer/Footer";

export default function Home() {
return(
  <>
  <Navbar />
  <Hero />
  <ArtisianCollection />
  <PastEx />
  <UpcomingEvent />
  <FeaturedA />
  <Footer />
  </>
)
}
