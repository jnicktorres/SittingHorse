import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AbilityScore.css";

function BonusCalculator(score) {
  const bonus = Math.floor((score - 10) / 2);
  if (bonus >= 0) {
    return "+" + bonus;
  } else {
    return bonus;
  }
}

function AbilityScore() {
  const [array, setArray] = useState([]);
  const swag = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/ability-scores");
    setArray(response.data.abilityScores);
    console.log(response.data.abilityScores);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
      <Grid gap={1} templateColumns="repeat(auto-fill, minmax(130px, 1fr))">
        {array.map((score, index) => (
          <Card px="3" py="2" align="center" key={index} score={array}>
            <CardHeader padding={1}>
              <Heading size="md"> {swag[index]} </Heading>
            </CardHeader>
            <CardBody padding={1}>
              <Text>{score}</Text>
            </CardBody>
            <CardFooter padding={1}>{BonusCalculator(score)}</CardFooter>
          </Card>
        ))}
      </Grid>
  );
}

export default AbilityScore;
