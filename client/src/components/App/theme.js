import { createMuiTheme } from '@material-ui/core/styles';

const HillcrestTheme = createMuiTheme({
  "palette":{
    "common":{
      "black":"#000",
      "white":"#fff"
    },
    "background":{
      "paper":"rgba(255, 255, 255, 1)",
      "default":"rgba(249, 247, 241, 1)"
    },
    "default": {
      "light": "#736757",
      "main": "#473d2e",
      "dark": "#201704"
    },
    "primary":{
      "light":"rgba(255, 254, 200, 1)",
      "main":"rgba(223, 202, 151, 1)",
      "dark":"rgba(172, 154, 105, 1)",
      "contrastText":"#fff"
    },
    "secondary":{
      "light":"rgba(68, 94, 155, 1)",
      "main":"rgba(8, 53, 108, 1)",
      "dark":"rgba(0, 15, 64, 1)",
      "contrastText":"#fff"
    },
    "error":{
      "light":"rgba(255, 123, 83, 1)",
      "main":"rgba(205, 74, 40, 1)",
      "dark":"rgba(149, 20, 0, 1)",
      "contrastText":"#fff"
    },
    "text":{
      "primary":"rgba(255, 255, 255, 1)",
      "secondary":"rgba(8, 53, 108, 1)",
      "disabled":"rgba(155, 155, 155, 1)",
      "hint":"rgba(194, 194, 194, 1)"
    }
  }
});

export default HillcrestTheme;