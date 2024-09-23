import HomepageBanner from "../components/HomepageBanner";
import HeroButton from "../components/HeroButton";
import CustomHead from "@/components/CustomHead";

export default function Home() {
  return (
    <>
      <CustomHead />
      <HomepageBanner />
      <br></br>
      <div className="btn-group m2">
        <HeroButton href="/books">Books</HeroButton>
        <HeroButton href="/member-centre">Member Centre</HeroButton>
        <HeroButton href="/about-us">About T.M.A.L</HeroButton>
      </div>
    </>
  );
}
