import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SmallNav from "../components/SmallNav";
import Button from "../components/HeroButton";
import CustomHead from "@/components/CustomHead";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <CustomHead />
      <SmallNav />
      <Button>Main Button</Button>
    </>
  );
}
