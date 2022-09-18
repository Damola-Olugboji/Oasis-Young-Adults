import React from 'react';
import { Input, Box, Label, Textarea, Image } from 'theme-ui';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './FindUs.css';

const styles = {
  textArea: {
    color: 'white',
  },
  inputStyle: {
    borderRadius: '2',
    color: 'white',
  },
  labelStyle: {
    color: 'white',

  },
  collageImg: {
    size: '50vh',
    marginTop: '6rem',
  },
};

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '2rem' }}>Get in touch</h1>
      <div className="app__wrapper-content">
        <Box>
          <Box className="formCol">
            <Box className="formComponent" mr={5}>
              <Label className="findus_text" sx={styles.labelStyle} htmlFor="name">
                Name
              </Label>
              <Input sx={styles.inputStyle} name="name" id="name" mb={4} />
            </Box>
            <Box className="formComponent">
              <Label className="findus_text" sx={styles.labelStyle} htmlFor="age">
                Age
              </Label>
              <Input sx={styles.inputStyle} name="age" id="age" mb={4} />
            </Box>
          </Box>
          <Label className="findus_text" sx={styles.labelStyle} htmlFor="email">
            Email
          </Label>
          <Input sx={styles.inputStyle} name="email" id="email" mb={4} />
          <Label className="findus_text" sx={styles.labelStyle} htmlFor="number">
            Phone Number
          </Label>
          <Input sx={styles.inputStyle} name="number" id="number" mb={4} />

          <Label className="findus_text" sx={styles.labelStyle} htmlFor="message">
            Message (Optional)
          </Label>
          <Textarea sx={styles.textArea} name="message" id="message" rows={4} mb={4} />

        </Box>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem', width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Send</button>
    </div>

    <div className="app__wrapper_img collageImage">
      <Image sx={styles.collageImg} src={images.oasisCollage} alt="findus_img" />
    </div>
  </div>
);

export default FindUs;

