import React from 'react';

const BlankLogo = () => {

  return (
    <img src={require ("./NamelessLogo_transparent.png")} alt="Hillcrest Wordless Logo" 
    style={{height: "100%", width: "100%", display: "table-cell", verticalAlign: "middle"}}/>
  )
}

export default BlankLogo;