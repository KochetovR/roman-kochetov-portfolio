import { HomeMain } from "./components/home-main";
import { createHomeMetadata } from "./lib/seo";

export const metadata = createHomeMetadata("en");

export default function Home() {
  return <HomeMain locale="en" />;
}
