import React from 'react';
import Fade from 'react-reveal/Fade';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord, FaInstagram } from 'react-icons/fa';
import { Row } from 'react-bootstrap';

const Social = () => (
    <Fade duration={1000} delay={200} distance="10px" id="social">
      <Row>
        <a href="https://www.linkedin.com/in/jovani-de-souza-94ba9b67/">
          <FaLinkedin className="social_icons" />
        </a>
        <a href="https://github.com/jovanidesouza">
          <FaGithub className="social_icons" />
        </a>
        <a href="mailto:jovanidesouza@hotmail.com">
          <FaEnvelope className="social_icons" />
        </a>
        <a href="mailto:jovanidesouza@hotmail.com">
          <FaInstagram className="social_icons" />
        </a>
        <a href="https://discord.io/user/Dijos#5994">
          <FaDiscord className="social_icons" />
        </a>
      </Row>
    </Fade>
);

export default Social;
