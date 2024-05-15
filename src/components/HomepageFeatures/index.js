import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const FeatureList = [
  {
    title: "Frontend",
    image: require("@site/static/img/frontend.jpg").default,
    description: (
      <>
        El frontend o «desarrollo del lado del cliente» se refiere a la práctica
        de producir HTML, CSS y JavaScript. Estos tres elementos se encargan de
        dar forma a la parte frontal de un sitio web o aplicación. Esto incluye
        los fondos, colores, texto, animaciones o efectos.
      </>
    ),
    link: "/proyectos/docs/frontend",
  },
  {
    title: "Backend",
    image: require("@site/static/img/backend.jpg").default,
    description: (
      <>
        El backend es el encargado de procesar toda la información que utiliza
        un frontend. Se compone de frameworks, bases de datos o códigos. Para
        que un sitio web o aplicación opere efectivamente, se requiere mucha
        información y datos que se almacenan en «la parte trasera» de un sistema
        informático. En oposición al frontend, el usuario no puede ver o acceder
        a esta información.
      </>
    ),
    link: "/proyectos/docs/backend",
  },
];

function Feature({ image, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
