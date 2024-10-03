import React from 'react'
import DataComponent from './DataComponent';

const SpellList = ({props}) => {
    // const {spells} = this.props;
  return (
    <div>{props.map((item, index) => (
        <p key={index}><DataComponent spellName={item}/></p>
    ))}</div>
  );
}

export default SpellList