/*
Creating a Pollution-Free World

Our belief is that biotechnology holds the key to many environmental challenges, and that nature has great self-healing abilities.

We are a synthetic biotechnology company incorporated in 2020 focussed on using biosynthesis and computer science to develop new technologies against environmental pollution.

Cutting-edge synthetic materials coupled with innovative bioengineering can provide a revolutionary solution to environmental challenges.

Our Mission
Protecting Environmental and Human Health

Soil Treatment
Engineer soil microorganisms to build a integrated system for pollution detection, treatment and facility maintenance

Wastewater Filtration
Redefine wastewater treatment with low-cost industrial microorganisms

Technology

Synthetic Biology
Reengineer microbes to endow them with greater functions.
Combine computer technology and life science for faster development of innovative industrialized microorganisms.

Directed Revolution
Simulate the process of natural selection to screen the optimal functional proteins.


What is the current status of the company?
With technical support from Bluepha Co., Ltd. and Peking University School of Life Science, SHUI has developed an MVP that effectively tackles heavy metal processing in industrial wastewater filtration. SHUI received an offer from BEWG: Beijing Enterprises Water Group Limited (HKSE: 00371) to test our product in industrial settings and establish corporate partnerships with its subsidiary factories. SHUI raised $15,000 from TechX Academy, $5000 from Cornell Innovation Fund, and $1000 from Penn Weiss Tech Fund and is currently negotiating dilutive funding of $300,000 with MiraclePlus (former YC China). SHUI is currently applying for a patent for its core technology, and the expected first revenue stream will come in mid-May 2021.


Do SHUI's products embrace biosafety and environmental safety?
Absolutely YES, and this part is one of our top strengths. SHUI designed a bio-switch to ensure that functional bacteria will only activate their functionality under prespecified industrial conditions, which ensures biosafety and prevents information leakage. Moreover, SHUI's bio-films are highly biodegradable. At the end of the lifecycle, they will undergo a high temperature and ultraviolet process to make sure the end remnants will possess no negative impact on the environment.


What market and customer segments does SHUI mainly target?
SHUI targets the industrial wastewater treatment market in China, which sizes up to 14.4 billion USD and takes up 26.2% of the global market share. 25.2 billion tons of wastewater is processed in 2019 by 72592 units of treatment facilities. SHUI will mainly serve two types of clients: industrial parks and independent factories. For industrial parks, SHUI replaces multi-step filtration systems with an integrated multi-layer bio-film as one compatible step. For independent factories, SHUI manufactures highly customized biofilms to filter targeted heavy metal pollutants.


What is the next step of SHUI?
SHUI plans to launch a series of promotional campaigns and product demo projects on professional wastewater solution websites, including China’s Water Website and Northern Star Water Treatment Website. SHUI also plans to establish business cooperations with market leaders in industrial wastewater treatment, including Beijing Originwater Technology, Co., Ltd. (SZSE: 300070) and Beijing Enterprises Water Group Limited (HKSE: 00371) with direct corporate outreach. In the larger picture, SHUI plans to build product credibility and elevate brand reputation through successful industrial trials with the aforementioned leading wastewater treatment companies.

*/

import React from "react";
import ReactDOM from "react-dom";

import "/public/stylesheets/index.css";
import { Layout, Row, Col, Collapse } from 'antd';
import SHUIMenu from "./menu.en.jsx";
import SHUICarousel from "./carousel.jsx";
import SHUIWhiteFrame from "./whiteFrame.jsx";
import SHUICard from "./card.jsx";
import SHUIContact from "./contact.en.jsx";

const { Header, Content, Footer } = Layout;

const { Panel } = Collapse;

ReactDOM.render(<Layout className="layout">

  <Header>
    {/* <div className="logo" /> */}
    <SHUIMenu />
  </Header>

  <Content>
    <SHUICarousel />
    <SHUIWhiteFrame>
      <p className="white-frame1-text-en">Creating  a  Pollution-Free  World</p>
    </SHUIWhiteFrame>
    <Row gutter={[0, 0]}>
      <Col className="gutter-row" span={8}>
        <SHUICard image="/card1.png">
          <div id="card1" letter-spacin='0'  >
            <p>Our belief is that<span id="em1"> biotechnology </span>holds</p>
            <p>the key to many environmental challenges</p>
            <p>and that nature has great self-healing abilities</p>
          </div>
        </SHUICard>
      </Col>
      <Col className="gutter-row" span={8}>
        <SHUICard image="/card2.png">
          <div id="card2" letter-spacin='0' >
            <p>We are a <span id="em2">synthetic biotechnology company</span> incorporated in 2020</p>
            <p>using biosynthesis and computer science</p>
            <p>to develop new technologies against environmental pollution</p>
          </div>
        </SHUICard>
      </Col>
      <Col className="gutter-row" span={8}>
        <SHUICard image="/card3.png">
          <div id="card3" letter-spacin='0' >
            <p>Cutting-edge synthetic materials</p>
            <p>coupled with innovative bioengineering</p>
            <p>can provide a revolutionary solution</p>
            <p>to environmental challenges</p>
          </div>
        </SHUICard>
      </Col>
    </Row>
    <SHUIWhiteFrame>
      <p className="white-frame2-text1-en">Our  Mission</p>
      <hr className="white-frame2-hr" />
      <p className="white-frame2-text2-en">Protecting  Environmental  and  Human  Health</p>
    </SHUIWhiteFrame>
    <Row gutter={[0, 0]}>
      <Col className="gutter-row" span={12}>
        <SHUICard image="/card4.png">
          <div id="card4" letter-spacin='0' >
            <p className="big-text-en">Wastewater Filtration</p>
            <hr className="short-hr" />
            <p className="small-text-en">Redefine wastewater treatment</p>
            <p className="small-text-en">with low-cost industrial microorganisms</p>
            <a href="/water.en"> <img src="/learn-more-en.png" alt="learn more" id="water-learnmore" /> </a>
          </div>
        </SHUICard>
      </Col>
      <Col className="gutter-row" span={12}>
        <SHUICard image="/card5.png">
          <div id="card5" letter-spacin='0' >
            <p className="big-text-en">Soil Treatment</p>
            <hr className="short-hr" />
            <p className="small-text-en">Engineer soil microorganisms to build a integrated system</p>
            <p className="small-text-en">for pollution detection, treatment and facility maintenance</p>
            <a href="/earth.en"> <img src="/learn-more-en.png" alt="learn more" id="earth-learnmore" /> </a>
          </div>
        </SHUICard>
      </Col>
    </Row>
    <SHUICard image="/card6.png">
      <div id="card6" letter-spacin='0' >
        <p className="big-text-en">Technology</p> <br /> <br />
        <p className="medium-text-en">Synthetic Biology</p>
        <p className="small-text-en">Reengineer microbes to endow them with greater functions.</p>
        <p className="small-text-en">Combine computer technology and life science for faster development of innovative industrialized microorganisms.</p> <br /> <br />
        <p className="medium-text-en">Directed Revolution</p>
        <p className="small-text-en">Simulate the process of natural selection</p>
        <p className="small-text-en">to screen the optimal functional proteins.
        </p>
      </div>
    </SHUICard>
    <SHUICard image="/card7.png">
      <div id="card7" letter-spacin='0' >
        <p className="big-text-en">FAQ</p> <br />
        <Collapse defaultActiveKey={['1']} ghost accordion="true">
          <Panel header="The company's history and status quo?" key="1">
            <p className="small-text-en">The company was incorporated in March 2020 by three,
              and has since grew into to a team of thirteen. The company's core team has won the 2019
              and 2020 International Genetic Engineering Competition (iGEM) global gold awards,
              and participated in the official technology innovation incubator as the only team
              from mainland China in 2020. The company is based in Zhongguancun Life Science Park,
              Beijing and Mennen Hall, Cornell University. The company developed a set of industrial
              wastewater filtration system at the MVP stage and completed the laboratory stage verification.
              It was invited by the accused water group (HKSE code: 00371) to conduct industrialization
              verification in its background industrial wastewater treatment plant. And it has in-depth
              cooperation with the domestic synthetic biology leading start-up company Kyanite Microorganisms,
              a member of the Ouyang Qi Laboratory of the Peking University Foreword Interdisciplinary Research
              Institute, the largest domestic science and technology youth community X Academy,
              and the laboratory of Professor Ilana lauren brito at Cornell University. In the fall of 2021,
              the core of our company currently lies in the further optimization of water treatment products
              and the verification of small-scale fermentation, as well as the MVP stage research and development
              of soil remediation products. Currently applying for Chinese and international core patents of the
              technology.</p>

          </Panel>
          <Panel header="The company's cash flow, profitability, and financing?" key="2">
            <p className="small-text-en">The company participated in the X Fusor incubation project
              of the original TechX Academy, and received financial support from the early stage of the
              incubator for experiments, company operations, and commercial development. In addition,
              the founding members of the company have applied for thousands of dollars in student project
              support funds from Cornell University Entrepreneur Association and Innovation Fund,
              University of Pennsylvania Weiss Tech House, Wharton School of Business, etc.</p>
          </Panel>
          <Panel header="What market and customer segments does SHUI mainly target?" key="3">
            <p className="small-text-en">SHUI targets the industrial wastewater treatment market in China, which sizes up to 14.4 billion USD and takes up 26.2% of the global market share. 25.2 billion tons of wastewater is processed in 2019 by 72592 units of treatment facilities. SHUI will mainly serve two types of clients: industrial parks and independent factories. For industrial parks, SHUI replaces multi-step filtration systems with an integrated multi-layer bio-film as one compatible step. For independent factories, SHUI manufactures highly customized biofilms to filter targeted heavy metal pollutants.</p>
          </Panel>
          <Panel header="What is the next step of SHUI?" key="4">
            <p className="small-text-en">SHUI plans to launch a series of promotional campaigns and product demo projects on professional wastewater solution websites, including China’s Water Website and Northern Star Water Treatment Website. SHUI also plans to establish business cooperations with market leaders in industrial wastewater treatment, including Beijing Originwater Technology, Co., Ltd. (SZSE: 300070) and Beijing Enterprises Water Group Limited (HKSE: 00371) with direct corporate outreach. In the larger picture, SHUI plans to build product credibility and elevate brand reputation through successful industrial trials with the aforementioned leading wastewater treatment companies.</p>
          </Panel>
        </Collapse>
      </div>
    </SHUICard>
    <SHUIContact id="contact" />
  </Content>

</Layout>, document.getElementById("root"));
