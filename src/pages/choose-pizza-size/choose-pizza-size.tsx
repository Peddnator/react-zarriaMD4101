import {
  Card,
  CardActionArea as MaterialCardActionArea,
  Grid,
  Typography,
  Divider as MaterialDivider,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//fake-data
import pizzaSizes from 'fake-data/pizzas-sizes'

//Type
interface pizzaSize {
  id: number,
  name: string,
  size: number,
  slices: number
  flavours: number
}

const ChoosePizzaSize: React.FC = () => {

  const pizzas: pizzaSize = {
    id: 123,
    name: "sasd",
    size: 123,
    slices: 2,
    flavours: 3
  }

  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Title variant="h3">
          What`s up ??
      </Title>
        <Title variant="h4">
          Choose your pizza size:
      </Title>
        <PizzasGrid>
          {pizzaSizes.map((pizza: pizzaSize) => (
            < Grid item key={pizza.id} xs >
              {console.log(pizza)}
              <Card>
                <Link component={CardActionArea} to={{
                  pathname: "/pizza-flavours",
                  state: { pizza: pizza }

                }}>
                  <Pizza>
                    <PizzaText>
                      {pizza.size}cm
                    </PizzaText>
                  </Pizza>
                  <Divider />
                  <Typography variant="h5">{pizza.name}</Typography>
                  <Typography>
                    {pizza.slices} slices, {' '}
                    {pizza.flavours} {' '}
                    {singularOrPlural(pizza.flavours)}
                  </Typography>
                </Link>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Grid>
    </>

  )
}

const Title = styled(Typography).attrs({
  align: "center"
})``
const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
      padding: 20px
    `
const Pizza = styled.main`
      background: #fff;
      border: 3px solid #ccc;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 200px;
      z-index: 1;

      &::before,
  &::after {
          background: #ccc;
      content: '';
      position: absolute;
      transform: rotate(45deg);
    }

  &::before {
          height: 1px;
      width: 160px;
    }

  &::after {
          height: 160px;
      width: 1px;
    }

  `;

function singularOrPlural(flavours: number) {
  return flavours === 1 ? "flavour" : "flavours";
}

const PizzaText = styled(Typography).attrs({ variant: "h5" })`
                  background: #fff;
                  height: 80px;
                  width: 80px;
                  border-radius: 50%;
                  display: flex;
                  position: relative;
                  z-index: 1;
                  justify-content: center;
                  align-items: center;
                `;

const Divider = styled(MaterialDivider)`
                  margin: 20px 0px;
                  width: 100%;
                `;

const CardActionArea = styled(MaterialCardActionArea)`
                  min-width: 250px;
                  padding: 20px 0;
                  align-items: center;
                  display: flex;
                  flex-direction: column;
                `

export default ChoosePizzaSize;
