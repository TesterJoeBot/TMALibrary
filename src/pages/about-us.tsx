import SmallNav from "../components/SmallNav";
import Button from "../components/HeroButton";
import CustomHead from "@/components/CustomHead";
import SmallNavButton from "@/components/SmallNavButton";

export default function AboutUs() {
  return (
    <>
      <CustomHead />
      <SmallNav />
      <br></br>
      <SmallNavButton href="/homepage">Back </SmallNavButton>
    </>
  );
}
