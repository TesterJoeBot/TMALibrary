import HeroBanner from "../components/HeroBanner";
import HeroButton from "../components/HeroButton";
import CustomHead from "@/components/CustomHead";

export default function Home() {
  return (
    <>
      <CustomHead />
      <HeroBanner />
      <br></br>
      <div className="btn-group m2">
        <HeroButton href="/homepage">Enter</HeroButton>
      </div>
    </>
  );
}
