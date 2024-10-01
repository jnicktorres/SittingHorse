import React from "react";
import axios from "axios";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button
} from '@chakra-ui/react'

class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
      };
    }
  
    componentDidMount() {
      axios.get('http://localhost:8080/api/data')
        .then(response => {
            console.log('Data received from backend:', response.data);
          this.setState({ data: response.data });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    render() {
      const { data } = this.state;
      console.log('Current state data:', data);
    
      if (!data || Object.keys(data).length === 0) {
        return <div>No data available</div>;
      }
    
      return (
        <div>
          {/* <h1>Data from API</h1>
            <ul>
              <li><strong>Name:</strong> {data.name}</li>
              <li><strong>Index:</strong> {data.index}</li>
              <li><strong>Range:</strong> {data.range}</li>
              <li><strong>Level:</strong> {data.level}</li>
              <li><strong>Duration:</strong> {data.duration}</li>
              <li><strong>Components:</strong> {data.components.join(', ')}</li>
              <li><strong>Description:</strong> {data.desc.join(' ')}</li>
              {/* Add more properties as needed */}
              <Popover>
                <PopoverTrigger>
                  <Button>{data.name}</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader><li><strong>Name:</strong> {data.name}</li></PopoverHeader>
                  <PopoverBody>
                    <li><strong>Index:</strong> {data.index}</li>
                    <li><strong>Range:</strong> {data.range}</li>
                    <li><strong>Level:</strong> {data.level}</li>
                    <li><strong>Duration:</strong> {data.duration}</li>
                    <li><strong>Components:</strong> {data.components.join(', ')}</li>
                    <li><strong>Description:</strong> {data.desc.join(' ')}</li>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
        </div>
      );
    }
  }

  export default DataComponent;
  