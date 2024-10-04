import React from 'react'
import DataComponent from './DataComponent';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import './SpellList.css';

const SpellList = ({props}) => {
    // const {spells} = this.props;
  return (
    // <div className = "test-element">{props.map((item, index) => (
    //     <p className = "test-element" key={index}><DataComponent spellName={item}/></p>
    // ))}</div>
    <Card bg='gray' display="grid">
        <CardBody>
            <div className = 'test-element'>
                {props.map((item, index) =>(
                    <span key={index}><DataComponent spellName={item}/></span>
                ))}
            </div>
        </CardBody>
    </Card>
  );
}

export default SpellList