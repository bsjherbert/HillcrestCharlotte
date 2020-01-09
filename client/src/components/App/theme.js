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
      "light":"rgba(115, 103, 87, 1)",
      "main":"rgba(71, 61, 46, 1)",
      "dark":"rgba(32, 23, 4, 1)"
    },
    "primary":{
      "light":"rgba(255, 254, 200, 1)",
      "main":"rgba(223, 202, 151, 1)",
      "dark":"rgba(172, 154, 105, 1)",
      "contrastText":"rgba(71, 61, 46, 1)"
    },
    "secondary":{
      "light":"rgba(68, 94, 155, 1)",
      "main":"rgba(8, 53, 108, 1)",
      "dark":"rgba(0, 15, 64, 1)",
      "contrastText":"rgb(249, 247, 241)"
    },
    "error":{
      "light":"rgba(255, 123, 83, 1)",
      "main":"rgba(205, 74, 40, 1)",
      "dark":"rgba(149, 20, 0, 1)",
    },
    "success": {
      "light":"rgba(86, 210, 66, 1)",
      "main":"rgba(0, 160, 0, 1)",
      "dark":"rgba(0, 112, 0, 1)"
    },
    "text":{
      "primary":"rgb(128,128,128)",
      "secondary":"rgba(8, 53, 108, 1)",
      "disabled":"rgba(155, 155, 155, 1)",
      "hint":"rgba(194, 194, 194, 1)"
    },
    "action":{
      "active":"rgba(223, 202, 151, 1)",
      "hover":"rgba(119, 136, 153, 1)",
      "selected":"rgba(115, 103, 87, 1)"
    }
  }
});

export default HillcrestTheme;