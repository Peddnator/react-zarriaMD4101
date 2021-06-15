import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

type pizzaSize = {
  id: number,
  name: string,
  size: number,
  slices: number
  flavours: number
}

const ChoosePizzaFlavours = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.state)
  })

  return (
    <>
      < h1 > Choose Pizza Flavour</h1 >
    </>
  )
}

export default ChoosePizzaFlavours;
