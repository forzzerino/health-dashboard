import { InfiniteSlider } from "./Infinite-slider";
import { ProgressiveBlur } from "./Progressive-blur";
import kafkaLogo from "../assets/logocloud/kafka.svg";
import voltdb from "../assets/logocloud/voltdb.svg";
import oracle from "../assets/logocloud/oracle.svg";
import hazelcast from "../assets/logocloud/hazelcast-logo.svg";
import java from "../assets/logocloud/java.svg";
import jira from "../assets/logocloud/jira.svg";
import github from "../assets/logocloud/github-icon.svg";
import selenium from "../assets/logocloud/selenium.svg";
import postman from "../assets/logocloud/postman.svg";
import react from "../assets/logocloud/react.svg";
import swift from "../assets/logocloud/swift.svg";
const logos = [
  {
    id: "logo-kafka",
    description: "Apache Kafka",
    image: kafkaLogo,
    className: "h-8 w-auto dark:invert",
  },
  {
    id: "logo-voltdb",
    description: "VoltDB",
    image: voltdb,
    className: "h-12",
  },
  {
    id: "logo-oracle",
    description: "Oracle",
    image: oracle,
    className: "h-12",
  },
  {
    id: "logo-hazelcast",
    description: "Hazelcast",
    image: hazelcast,
    className: "h-12",
  },
  {
    id: "logo-java",
    description: "Java",
    image: java,
    className: "h-12",
  },
  {
    id: "logo-jira",
    description: "Jira",
    image: jira,
    className: "h-12",
  },
  {
    id: "logo-github",
    description: "GitHub",
    image: github,
    className: "h-12 dark:invert",
  },
  {
    id: "logo-selenium",
    description: "Selenium",
    image: selenium,
    className: "h-12",
  },
  {
    id: "logo-postman",
    description: "Postman",
    image: postman,
    className: "h-12",
  },
  {
    id: "logo-react",
    description: "React",
    image: react,
    className: "h-12",
  },
  {
    id: "logo-swift",
    description: "Swift",
    image: swift,
    className: "h-12",
  },
];

export function LogosSlider() {
  return (
    <div className="mt-20 flex flex-col md:flex-row">
      <div className="relative h-[100px]  w-full overflow-hidden ">
        <InfiniteSlider
          className="flex h-full w-full items-center"
          duration={30}
          gap={36}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex w-32 items-center justify-center flex-col"
            >
              <img
                src={logo.image}
                alt={logo.description}
                className={logo.className}
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[200px]"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[200px]"
          direction="right"
          blurIntensity={1}
        />
      </div>{" "}
    </div>
  );
}
