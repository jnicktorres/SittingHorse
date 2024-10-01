import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

function AbilityScore() {
  const [array, setArray] = useState([]);
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/ability-scores");
    setArray(response.data.abilityScores);
    console.log(response.data.abilityScores);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {array.map((score) => (
        <Card
          align="center"
          key={[
            "Strength",
            "Dexterity",
            "Constitution",
            "Intelligence",
            "Wisdom",
            "Charisma",
          ]}
          score={array}
        >
          <CardHeader>
            <Heading size="md"> </Heading>
          </CardHeader>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export default AbilityScore;
