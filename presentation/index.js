import React from "react";
import {
	Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Slide,
  Spectacle
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import { theme } from "spectacle-theme-solarized-dark";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
	generatePackage: require("../assets/generate-package.png").replace("/", ""),
	dirLayout: require("../assets/dir-layout.png").replace("/", ""),
	magic: require("../assets/magic.gif").replace("/", ""),
	thanks: require("../assets/thanks.gif").replace("/", "")
};

preloader(images);

class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["zoom", "slide"]} transitionDuration={300}>
					<Slide transition={["zoom"]}>
						<Heading size={1} fit textColor="secondary">
							Building an Atom Package
						</Heading>
					</Slide>
					<Slide>
						<Heading caps>Demo</Heading>
						<video src={require("file!../assets/atom-extract-component-demo.mp4").replace("/", "")}
							style={{ width: "80%" }}
							controls/>
					</Slide>
					<Slide>
						<Heading caps fit>Generate a Package</Heading>
						<Layout>
							<Fill>
								<Image src={images.generatePackage}
									style={{ borderRadius: 4, border: `2px solid ${theme.screen.colors.secondary}`, width: "100%", height: "100%" }}
								/>
							</Fill>
						</Layout>
					</Slide>
					<Slide>
						<Heading fit caps>Module Structure</Heading>
						<Image src={images.dirLayout} style={{ height: "100%" }}/>
					</Slide>
					<CodeSlide
						transition={[]}
						showLineNumbers={true}
						lang="js"
						code={require("raw!../assets/menus.example")}
						ranges={[{
							loc: [0, 0], title: "config menus"
						}, {
							locs: [[1, 2], [6, 7]], title: "contextual"
						}, {
							loc: [3, 5], title: "contextual"
						}, {
							locs: [[7, 8], [13, 14]], title: "toolbar"
						}, {
							loc: [8, 9], title: "Packages menu"
						}, {
							loc: [9, 13], title: "add item"
						}]}/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../assets/component.example")}
						ranges={[{
							loc: [0, 0], title: "lib/component.js"
						}, {
							loc: [0, 1], title: "es2015!"
						}, {
							loc: [1, 2], title: "a view class"
						}, {
							loc: [12, 13], title: "activate(state)"
						}, {
							loc: [13, 14], title: "create a view"
						}, {
							loc: [14, 17], title: "attach it"
						}, {
							loc: [19, 21], title: "subscribe to atom events"
						}, {
							loc: [22, 26], title: "subscribe to atom events"
						}, {
							loc: [24, 25], title: "hook up ur codez"
						}, {
							locs: [[28, 29], [32, 33]], title: "clean up"
						}, {
							locs: [[34, 35], [38, 39]], title: "remember things"
						}, {
							loc: [40, 43], title: "magic goes here"
						}]}/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../assets/toggle.example")}
						ranges={[{
							loc: [0, 1], title: "toggle()"
						}, {
							loc: [1, 3], title: "hide if visible"
						}, {
							locs: [[3, 4], [8, 9]], title: "otherwise"
						}, {
							loc: [4, 6], title: "clear input"
						}, {
							loc: [6, 7], title: "show modal"
						}, {
							loc: [7, 8], title: "focus input"
						}]}/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../assets/keyup.example")}
						ranges={[{
							loc: [0, 0], title: "listen for keyup",
						}, {
							loc: [0, 1], title: "in activate()"
						}, {
							loc: [2, 7], title: "add listener"
						}, {
							loc: [10, 11], title: "in keyup"
						}, {
							loc: [11, 12], title: "wait for return"
						}, {
							loc: [12, 13], title: "hide modal"
						}, {
							loc: [13, 15], title: "get input text"
						}, {
							loc: [15, 16], title: "engage magics"
						}]}
					/>
					<Slide bgImage={images.magic}/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../assets/extract-component.example")}
						ranges={[{
							loc: [0, 0], title: "extractComponent()"
						}, {
							loc: [0, 1], title: "new component name"
						}, {
							loc: [1, 3], title: "get active tab"
						}, {
							loc: [3, 5], title: "get active TextEditor"
						}, {
							loc: [5, 9], title: "copy activeEditor"
						}, {
							loc: [9, 10], title: "get JSX snippet"
						}, {
							loc: [20, 25], title: "👋"
						}, {
							loc: [25, 26], title: "insert into new editor"
						}, {
							loc: [26, 27], title: "open tab for new editor"
						}, {
							loc: [27, 28], title: "save new editor"
						}, {
							loc: [28, 29], title: "replace selection"
						}, {
							loc: [32, 33], title: "add new import"
						}]}
					/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../assets/get-imports.example")}
						ranges={[{
							loc: [63, 70], title: "atom.notifications"
						}]}
					/>
					<Slide>
						<Heading caps fit>Publishing</Heading>
						<List>
							<ListItem textSize={28}>
								Update <Code>repository</Code> in <Code>package.json</Code>
							</ListItem>
							<ListItem textSize={28}>
								(Just Once) <Code>apm login</Code>
							</ListItem>
							<ListItem textSize={28}>
								<Code>apm publish</Code>
							</ListItem>
						</List>
					</Slide>
					<Slide bgImage={images.magic}/>
					<Slide bgImage={images.thanks}/>
				</Deck>
			</Spectacle>
		);
	}
}

export default Presentation;
