import React from "react";

import {
  Deck,
  Heading,
  Image,
  List,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";

import { RatingItem } from "./components/rating-item";
import { AppearItem } from "./components/appear-item";
import { HighCard } from "./components/high-card";
import { Item as ListItem } from "./components/list-item";
import { AboutMe } from "./components/slide-about-me";
import { ImageSlide } from "./components/image-slide";

import "prismjs/components/prism-typescript";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import angularLogo from "../assets/img/angular-logo.svg";
import graphqlLogo from "../assets/img/graphql-logo.svg";
import beemanJpg from "../assets/img/beeman.jpg";
import cyfcoGroupCampaign from "../assets/img/cyfco-group-campaign.jpg";
import javaPoly from "../assets/img/java-polymorphism.png";
import loopbackExplorer from "../assets/img/loopback-explorer.png";
import loopbackSDK from "../assets/img/loopback-sdk.svg";
import loopbackSDK2 from "../assets/img/loopback-sdk2.svg";
import oracleTerminal from "../assets/img/oracle-terminal.png";
import safeStack1 from "../assets/img/safestack1.svg";
import safeStack2 from "../assets/img/safestack2.svg";
import safeStack3 from "../assets/img/safestack3.svg";
import safeStack4 from "../assets/img/safestack4.svg";
import oracle1 from "../assets/img/oracle1.jpg";
import oracle2 from "../assets/img/oracle2.jpg";
import oracle3 from "../assets/img/oracle3.jpg";
import oracle4 from "../assets/img/oracle4.jpg";
import oracle5 from "../assets/img/oracle5.jpg";
import oracle6 from "../assets/img/oracle6.jpg";
import javaDogExtends from "../assets/img/javaDogExtends.jpg";
import javaConnectDb from "../assets/img/javaConnectDb.png";
import cyfGraduation from "../assets/img/cyfGraduation.jpg";
import cyfLogo from "../assets/img/cyfLogo.png";

preloader({
  angularLogo,
  graphqlLogo,
  beemanJpg,
  cyfcoGroupCampaign,
  javaPoly,
  loopbackExplorer,
  loopbackSDK,
  oracleTerminal,
  safeStack1,
  safeStack2,
  safeStack3,
  safeStack4,
  oracle1,
  oracle2,
  oracle3,
  oracle4,
  oracle5,
  oracle6,
  javaDogExtends,
  javaConnectDb,
  cyfGraduation,
  cyfLogo,
});


// Require CSS
require("normalize.css");
require("../assets/css/code-style.css");

const theme = createTheme(
  {
    primary: "#2E3440",
    secondary: "#88C0D0",
    pink: "#E535AB",
    light: "#FEFEFE",
    dark: "#595959"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Text size={1} fit caps lineHeight={1} textColor="pink">
            <b>Type Safety</b>
          </Text>
          <Text size={4} fit lineHeight={2} textColor="secondary">
            from <b>back</b> to <b>front</b> with
          </Text>
          <Text size={1} fit caps lineHeight={1} textColor="pink">
            <b>GraphQL</b> and <b>Angular</b>!
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Text size={4} fit caps lineHeight={2} textColor="secondary">
            The search for...
          </Text>
          <Text size={1} fit caps lineHeight={1} textColor="pink">
            <b>Developer</b>
          </Text>
          <Text size={1} fit caps lineHeight={1} textColor="pink">
            <b>Happiness</b>
          </Text>
        </Slide>

        <AboutMe />

        <Slide transition={["fade"]} bgColor="primary" textColor="pink">
          <Image
            src={cyfLogo}
            style={{ height: "200", marginBottom: "0px", marginTop: "20px" }}
          />
        </Slide>

        <ImageSlide title='Code Your Future Colombia' src={cyfGraduation} />

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={6} textColor="secondary" caps fit>
            We Need
          </Heading>
          <List>
            <ListItem>
              💰 Sponsors
            </ListItem>
            <ListItem>
              💸 Donations
            </ListItem>
            <ListItem>
              👩‍💻 Volunteers
            </ListItem>
            <ListItem>
              📣 Publicity
            </ListItem>
          </List>
          <Heading size={6} textColor="pink" fit>
            codeyourfuture.io/colombia
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Agenda
          </Heading>
          <List>
            <AppearItem>Developer Happiness.</AppearItem>
            <ListItem>&nbsp;</ListItem>
            <AppearItem>About GraphQL.</AppearItem>
            <ListItem>&nbsp;</ListItem>
            <AppearItem>The Safe Stack.</AppearItem>
          </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Developer Happiness?
          </Heading>
          <RatingItem>Declarative</RatingItem>
          <RatingItem>Type Safety</RatingItem>
          <RatingItem>Community</RatingItem>
          <RatingItem>Tools</RatingItem>
          <RatingItem value="5"><b>Total Happiness</b></RatingItem>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Oracle/Java
          </Heading>
          <ListItem>&nbsp;</ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem>&nbsp;</ListItem>
          <ListItem>&nbsp;</ListItem>
        </Slide>

        <ImageSlide title="Oracle/Java" src={oracle1} />
        <ImageSlide title="Oracle/Java" src={oracle3} />
        <ImageSlide title="Oracle/Java" src={oracle4} />
        <ImageSlide title="Oracle/Java" src={oracle5} />
        <ImageSlide title="Oracle/Java" src={oracle6} />
        <ImageSlide title="Oracle/Java" src={javaConnectDb} />
        <ImageSlide title="Oracle/Java" src={javaDogExtends} />

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Oracle/Java
          </Heading>
          <RatingItem value="1">Declarative</RatingItem>
          <RatingItem value="2">Type Safety</RatingItem>
          <RatingItem value="1">Community</RatingItem>
          <RatingItem value="1">Tools</RatingItem>
          <RatingItem value="1"><b>Total Happiness</b></RatingItem>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            CakePHP
          </Heading>
          <List>
            <AppearItem>MVC framework inspired by Rails.</AppearItem>
            <AppearItem>CLI to define data structure.</AppearItem>
            <AppearItem>CLI to generate model/view/controllers.</AppearItem>
            <AppearItem>Abstraction over DB.</AppearItem>
            <AppearItem>Convention over Configuration.</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            CakePHP
          </Heading>
          <RatingItem value="2">Declarative</RatingItem>
          <RatingItem value="2">Type Safety</RatingItem>
          <RatingItem value="3">Community</RatingItem>
          <RatingItem value="2">Tools</RatingItem>
          <RatingItem value="2"><b>Total Happiness</b></RatingItem>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            LoopBack
          </Heading>
          <List>
            <AppearItem>Declarative data structure:</AppearItem>
            <AppearItem>- properties, validation, relations.</AppearItem>
            <AppearItem>Rest API</AppearItem>
            <AppearItem>Abstraction over DB.</AppearItem>
            <ListItem>&nbsp;</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Image
            src={loopbackExplorer}
            style={{ height: "80vh", marginTop: 0 }}
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            LoopBack SDK for Angular.js
          </Heading>
          <HighCard>
            <Image src={loopbackSDK} style={{ width: "80vw", marginTop: 40 }} />
            <AppearItem><br />Generate SDK based on API definition.</AppearItem>
            <AppearItem>Officially supported.</AppearItem>
            <AppearItem>Only for Angular.js ( {'<'} 2 )</AppearItem>
            <ListItem>&nbsp;</ListItem>
          </HighCard>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            LoopBack SDK for Angular >= 2
          </Heading>
          <HighCard>
            <Image src={loopbackSDK2} style={{ width: "80vw", marginTop: 40 }} />
            <AppearItem><br />Community supported.</AppearItem>
            <AppearItem>SDK project got discontinued. ☹️</AppearItem>
            <AppearItem>Time to find a new love. 💔</AppearItem>
          </HighCard>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            LoopBack/Angular
          </Heading>
          <RatingItem value="4">Declarative</RatingItem>
          <RatingItem value="3">Type Safety</RatingItem>
          <RatingItem value="3">Community</RatingItem>
          <RatingItem value="3">Tools</RatingItem>
          <RatingItem value="3"><b>Total Happiness</b></RatingItem>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="pink">
          <Heading size={1} fit textColor="secondary">GraphQL</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            What is GraphQL?
          </Heading>
          <List>
            <AppearItem>Specification</AppearItem>
            <AppearItem>Developed at Facebook in 2012</AppearItem>
            <AppearItem>Open Sourced in 2015</AppearItem>
            <AppearItem>Query language for API's</AppearItem>
            <AppearItem>Used by GitHub, Twitter, Shopify...</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            What is GraphQL?
          </Heading>
          <List>
            <AppearItem>Strongly typed.</AppearItem>
            <AppearItem>Hierarchical.</AppearItem>
            <AppearItem>Introspective.</AppearItem>
            <AppearItem>Transport agnostic.</AppearItem>
            <AppearItem>Works as a client/server contract.</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            GraphQL Server
          </Heading>
          <List>
            <AppearItem>Defines Schema using SDL</AppearItem>
            <AppearItem>(Schema Definition Language)</AppearItem>
            <AppearItem>&nbsp;</AppearItem>
            <AppearItem>Implements resolvers to handle</AppearItem>
            <AppearItem>sending and receiving the data</AppearItem>
          </List>
        </Slide>

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="graphql"
          code={require("raw-loader!../assets/code/sdl-types.graphql")}
          ranges={[
            { loc: [0, 0], title: "Schema Definition" },
            { loc: [0, 8], note: "Definition of the User type" },
            { loc: [1, 2], note: "Type Integer, required" },
            { loc: [2, 5], note: "Type String, required" },
            { loc: [5, 7], note: "Optional fields" },
            { loc: [17, 29], note: "Define relations between types" },
            { loc: [17, 23], note: "Define relations between types" },
            { loc: [23, 29], note: "Define relations between types" },
            { loc: [21, 22], note: "Define relations between types" },
            { loc: [27, 28], note: "Define relations between types" },
            { loc: [37, 43], note: "Define the schema's Queries" },
            { loc: [38, 39], note: "Query that returns a string" },
            { loc: [39, 40], note: "Query that returns an int" },
            { loc: [40, 41], note: "Query that returns an array of users" },
            { loc: [41, 42], note: "Query that returns an individual user" },
            { loc: [49, 59], note: "Mutations to trigger changes" },
            { loc: [50, 54], note: "Login to the API" },
            { loc: [54, 58], note: "Create a new post" },
            { loc: [69, 75], note: "Subscribe to data changes" },
            { loc: [70, 71], note: "Listen for new posts" },
            { loc: [71, 74], note: "Listen for comments on a post" }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="typescript"
          code={require("raw-loader!../assets/code/grapql-server-simple.ts")}
          ranges={[
            { loc: [0, 0], title: "Resolvers" },
            { loc: [0, 5], note: "GraphQL schema with 1 query" },
            { loc: [5, 10], note: "Implementing the resolvers" },
            { loc: [6, 7], note: "Root type Query" },
            { loc: [7, 8], note: "Method to resolve the query" },
            { loc: [11, 13], note: "Import the GraphQLServer" },
            { loc: [14, 18], note: "Create new Server instance" },
            { loc: [18, 19], note: "Start the server" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            GraphQL Client
          </Heading>
          <List>
            <AppearItem>Connects to GraphQL endpoint</AppearItem>
            <AppearItem>Executes queries</AppearItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>&nbsp;</ListItem>
          </List>
        </Slide>

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="graphql"
          code={require("raw-loader!../assets/code/query-type-query.graphql")}
          ranges={[
            { loc: [0, 0], title: "Query" },
            { loc: [0, 3], note: "Query that returns string" },
            { loc: [3, 8], note: "Query that returns string" },
            { loc: [14, 17], note: "Query with parameters" },
            { loc: [17, 22], note: "Query with parameters" },
            { loc: [28, 34], note: "Query that returns fields" },
            { loc: [34, 43], note: "Query that returns fields" },
            { loc: [46, 51], note: "Named query with variables" },
            { loc: [51, 53], note: "Named query with variables" },
            { loc: [53, 61], note: "Named query with variables" },
            { loc: [72, 83], note: "Query related data" },
            { loc: [83, 94], note: "Query related data (result)" },
            { loc: [97, 98] },
            { loc: [98, 101] },
            { loc: [101, 105] },
            { loc: [105, 108] },
            { loc: [108, 112] },
            { loc: [116, 130] }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="graphql"
          code={require("raw-loader!../assets/code/query-type-mutation.graphql")}
          ranges={[
            { loc: [0, 0], title: "Mutation" },
            { loc: [0, 8], note: "Create new content in the backend" },
            { loc: [14, 23], note: "Handle auth logic like login/register" }
          ]}
        />

        <CodeSlide
          bgColor="primary"
          textColor="secondary"
          transition={["fade"]}
          lang="graphql"
          code={require("raw-loader!../assets/code/query-type-subscription.graphql")}
          ranges={[
            { loc: [0, 0], title: "Subscription" },
            { loc: [0, 8], note: "Query that returns string" }
          ]}
        />

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            GraphQL is a spec
          </Heading>
          <List>
            <AppearItem>GraphQL is a specification.</AppearItem>
            <AppearItem>You need an implementation:</AppearItem>
            <AppearItem>- Database access.</AppearItem>
            <AppearItem>- Authentication.</AppearItem>
            <AppearItem>- Business logic, etc.</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            The Safe Stack
          </Heading>
          <List>
            <AppearItem>Prisma (ORM)</AppearItem>
            <AppearItem>Nest.js (API)</AppearItem>
            <AppearItem>GraphQL Codegen (SDK)</AppearItem>
            <AppearItem>Angular (Frontend)</AppearItem>
            <ListItem>&nbsp;</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Prisma (ORM)
          </Heading>
          <List>
            <AppearItem>Define data structure using SDL.</AppearItem>
            <AppearItem>Handles all database actions.</AppearItem>
            <AppearItem>Generates client libraries (sdk).</AppearItem>
            <AppearItem>Process that runs on a server.</AppearItem>
            <AppearItem>New version 2 in beta!.</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Prisma (ORM)
          </Heading>
          <List>
            <ListItem>Define data structure using SDL.</ListItem>
            <ListItem>Handles all database actions.</ListItem>
            <ListItem>Generates client libraries (sdk).</ListItem>
            <ListItem>
              <div style={{ color: "#595959" }}>
                <s>Process that runs on a server.</s>
              </div>
            </ListItem>
            <ListItem>New <b>version 2</b> in beta!.</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Prisma (ORM)
          </Heading>
          <HighCard>
            <Image src={safeStack1} style={{ width: "80vw", marginTop: 40 }} />
          </HighCard>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Nest.js (API)
          </Heading>
          <List>
            <AppearItem>
              Define the client-facing API.
            </AppearItem>
            <AppearItem>
              Use <code>prisma-client</code> as ORM.
            </AppearItem>
            <AppearItem>
              Use TS to define GraphQL:
            </AppearItem>
            <AppearItem>
              - See: <a style={{ color: "#E535AB" }}>typegraphql.ml</a>.
            </AppearItem>
            <AppearItem>
              Auth, validation, business logic.
            </AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            Nest.js (API)
          </Heading>
          <HighCard><Image src={safeStack2} style={{ width: "80vw", marginTop: 40 }} /></HighCard>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">
            GraphQL Codegen
          </Heading>
          <List>
            <AppearItem>Define queries for Frontend.</AppearItem>
            <AppearItem>Read schema from Nest.js API.</AppearItem>
            <AppearItem>Generate SDK for Frontend.</AppearItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>&nbsp;</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">GraphQL Codegen</Heading>
          <HighCard>
            <Image src={safeStack3} style={{ width: "80vw", marginTop: 40 }} />
          </HighCard>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">Angular (Frontend)</Heading>
          <List>
            <AppearItem>Install Apollo GraphQL client</AppearItem>
            <AppearItem><span style={{ fontFamily: "monospace" }}>{" "}$ ng add apollo-graphql</span></AppearItem>
            <AppearItem>Use classes and types from SDK.</AppearItem>
            <AppearItem>Custom wrapper around SDK.</AppearItem>
            <AppearItem>Use SDK in Ionic, NativeScript.</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">Angular (Frontend)</Heading>
          <HighCard>
            <Image src={safeStack4} style={{ width: "80vw", marginTop: 40 }} />
          </HighCard>
        </Slide>


        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">The Safe Stack</Heading>
          <List>
            <ListItem>&nbsp;</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>
              <div style={{ textAlign: "center", color: "#E535AB" }}>
                <b>
                  <a href="https://localhost:3000/graphql" target="_blank">
                    DEMO!
                  </a>
                </b>
              </div>
            </ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>&nbsp;</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="pink">
          <Heading size={5} textColor="secondary">The Safe Stack</Heading>
          <List>
            <AppearItem>GraphQL works like a contract.</AppearItem>
            <AppearItem>It's Developer Communication.</AppearItem>
            <AppearItem>Generated boilerplate code.</AppearItem>
            <AppearItem>Type safety from back to front.</AppearItem>
            <AppearItem>Maximum developer happiness!</AppearItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={5} textColor="secondary">The Safe Stack</Heading>
          <RatingItem value="4">Declarative</RatingItem>
          <RatingItem value="5">Type Safety</RatingItem>
          <RatingItem value="5">Community</RatingItem>
          <RatingItem value="4">Tools</RatingItem>
          <RatingItem value="4"><b>Total Happiness</b></RatingItem>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="light">
          <Heading size={1} fit textColor="secondary">graphqlwithangular.com</Heading>
          <List style={{ textAlign: "center" }}>
            <ListItem>Complete course in January!</ListItem>
            <ListItem>Free e-book in December!</ListItem>
            <ListItem>Sign up now!</ListItem>
            <ListItem>
              <br />
              <a
                href="https://graphqlwithangular.com"
                target="_blank"
                style={{ color: "#E535AB", textDecoration: "none", letterSpacing: "5px" }}
              >
                graphqlwithangular.com
              </a>
            </ListItem>
            <ListItem>Promo code: <span style={{ color: "#E535AB" }}>GDGMDE</span></ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary">THANK YOU!</Heading>
          <Text size={4} textColor="pink">
            <br /><br />
            <i className="fa fa-fw fa-twitter" /> beeman_nl &nbsp;
            <i className="fa fa-fw fa-github" /> beeman
            <br />
          </Text>
          <ListItem style={{ listStyle: "none", textAlign: "center" }} padding={15}>
            &nbsp;
          </ListItem>
          <ListItem
            style={{ listStyle: "none", textAlign: "center" }}
            padding={15}
          >
            <a
              href="https://graphqlwithangular.com"
              target="_blank"
              style={{ color: "#E535AB", textDecoration: "none", letterSpacing: "5px" }}
            >
              graphqlwithangular.com
            </a>
          </ListItem>
          <ListItem
            style={{ listStyle: "none", textAlign: "center" }}
            padding={15}
          >
            Promo code: <span style={{ color: "#E535AB" }}>GDGMDE</span>
          </ListItem>
        </Slide>
      </Deck>
    );
  }
}

/**


 <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
 <BlockQuote>
 <Quote>Some interesting thoughts or quote</Quote>
 <Cite textColor="primary">who?</Cite>
 </BlockQuote>
 </Slide>

 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Image src={babyTiredGif} style={{ width: "100%" }}/>
 </Slide>


 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Image src={boyDancingGif} style={{ height: "100%" }}/>
 </Slide>


 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Image src={jscamp} style={{ width: "100%" }}/>
 </Slide>

 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Image src={juriQuote} style={{ width: "100%" }}/>
 </Slide>


 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Heading size={1} caps fit textColor="secondary">
 why ngx-formly?
 </Heading>
 <List>
 <Appear>
 <ListItem padding={15}>
 Opinionated, declaritive, composable.
 </ListItem>
 </Appear>
 <Appear>
 <ListItem padding={15}>
 Highly extensible.
 </ListItem>
 </Appear>
 <Appear>
 <ListItem padding={15}>
 Low barrier to entry.
 </ListItem>
 </Appear>
 <Appear>
 <ListItem padding={15}>
 Built on top of Reactive Forms.
 </ListItem>
 </Appear>
 </List>
 </Slide>

 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Heading size={1} caps fit textColor="secondary">
 <i className="fa fa-fw fa-github"/>
 formly-js/ngx-formly
 </Heading>

 <Layout style={{ background: 'white', padding: 40, marginTop: 40 }} >
 <Fill>
 <Image src={ghProject} style={{ marginRight: 40 }} />
 </Fill>
 <Fill>
 <Image src={abdellatif} style={{ marginLeft: 40 }} />
 </Fill>
 </Layout>
 </Slide>

 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Heading size={1} caps fit textColor="secondary">
 Getting started
 </Heading>
 <Text size={4} fit lineHeight={2} textColor="pink">
 $ ng add @ngx-formly/schematics
 </Text>
 </Slide>


 <Layout style={{ marginTop: 40 }}>
 <Fit style={{ flex: 15 }}>
 <Image src={graphqlLogo} style={{ width: 100 }}/>
 </Fit>
 <Fit style={{ flex: 15 }}>
 <Image src={angularLogo} style={{ width: 100 }}/>
 </Fit>
 </Layout>

 const blitzParams = "&hideExplorer=1&hideNavigation=1&view=preview";
 const blitzStyles = { width: "100%", height: 600, border: 0 };
 const blitz = {
  simple: `https://stackblitz.com/edit/tyrfooyt-simple?embed=1&file=src/app/app.component.ts${blitzParams}`
};
 <Slide>
 <iframe src={blitz.simple} style={blitzStyles}></iframe>
 </Slide>

 <Slide transition={["fade"]} bgColor="pink">
 <Heading size={6} textColor="secondary" caps>Typography</Heading>
 <Heading size={1} textColor="secondary">Heading 1</Heading>
 <Heading size={2} textColor="secondary">Heading 2</Heading>
 <Heading size={3} textColor="secondary">Heading 3</Heading>
 <Heading size={5} textColor="secondary">Heading 4</Heading>
 <Heading size={5} textColor="secondary">Heading 5</Heading>
 <Text size={6} textColor="secondary">Standard text</Text>
 </Slide>

 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Heading size={6} textColor="secondary" caps>Standard List</Heading>
 <List>
 <ListItem>Item 1</ListItem>
 <ListItem>Item 2</ListItem>
 <ListItem>Item 3</ListItem>
 <ListItem>Item 4</ListItem>
 </List>
 </Slide>

 <Slide transition={["fade"]} bgColor="primary" textColor="pink">
 <Heading size={6} textColor="secondary" caps>Standard List</Heading>
 <List>
 <Appear>
 <ListItem>Item 1</ListItem>
 </Appear>
 <Appear>
 <ListItem>Item 2</ListItem>
 </Appear>
 <Appear>
 <ListItem>Item 3</ListItem>
 </Appear>
 <Appear>
 <ListItem>Item 4</ListItem>
 </Appear>
 </List>
 </Slide>


 */
