import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "../components/images/image-slideshow";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all around the world</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join our community</Link>
            <Link href={"/meals"}>Explore Meals</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>This is how it works</p>
          <p>This is how it works</p>
        </section>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>This is how it works</p>
          <p>This is how it works</p>
        </section>
      </main>
    </>
  );
}
