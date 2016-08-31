// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
	Code,
  CodePane,
  Deck,
	Fit,
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
	generatePackage: require("../assets/generate-package.png")
};

preloader(images);

class Presentation extends React.Component {
	render() { return (
	<Spectacle theme={theme}>
		<Deck transition={["zoom", "slide"]} transitionDuration={300}>
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
				<Heading caps fit>Generate a Package</Heading>
				<Layout>
					<Fill>
						<Image src={images.generatePackage}
							style={{ borderRadius: 4, border: `2px solid ${theme.screen.colors.secondary}`, width: "100%", height: "100%" }}/>
					</Fill>
				</Layout>
			</Slide>
			<Slide>
				<Heading caps fit>Publishing</Heading>
				<List>
					<ListItem textSize={28}>
						Update <Code textColor="quartenary">repository</Code> in <Code textColor="quartenary">package.json</Code>
					</ListItem>
					<ListItem textSize={28}>
						(Just Once) <Code textColor="quartenary">apm login</Code>
					</ListItem>
					<ListItem textSize={28}>
						<Code textColor="quartenary">apm publish</Code>
					</ListItem>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
	); }
}

export default Presentation;
