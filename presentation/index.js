// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import { theme } from "spectacle-theme-solarized-dark";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
};

preloader(images);

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={["zoom", "slide"]} transitionDuration={500}>
			<Slide transition={["zoom"]}>
				<Heading size={1} fit caps>
					Refactor React
				</Heading>
				<Heading size={1} fit textColor="secondary">
					Building an Atom Package
				</Heading>
			</Slide>
			<Slide>
				<Heading caps>Demo</Heading>
				<video
					style={{ width: "100%", height: "100%" }}
					src={require("file!../assets/atom-extract-component-demo.mov")} controls/>
			</Slide>
			<Slide>
				<Heading>Generate a Package</Heading>

			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
