import type { Route } from "./+types/home";
import Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MusicPlay" },
    { name: "description", content: "Welcome to MusicPlay app which makes your time joyious!!!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
