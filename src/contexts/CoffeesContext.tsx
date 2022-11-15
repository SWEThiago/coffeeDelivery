import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeesMenu } from '../types'

interface CoffeesContextType {
  coffeesList: CoffeesMenu[]
  totalPrices: CoffeesMenu[]
  sumCoffees: number
  sumCoffeesPrices: number
  handleCoffeeDecrement: (coffeeId: number) => void
  handleCoffeeIncrement: (coffeeId: number) => void
  hendleRemoveCoffee: (coffeeId: number) => void
  handleCoffeeComplete: (coffee: CoffeesMenu[]) => void
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesList, setCoffeesList] = useState<CoffeesMenu[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/coffes')
      .then((response) => response.json())
      .then((data) => setCoffeesList(data))
  }, [])

  const sumCoffees = coffeesList.reduce(function (sumCoffees, coffee) {
    return sumCoffees + coffee.amount
  }, 0)

  useEffect(() => {
    const storagedCoffee = localStorage.getItem(
      'ThiagoGonçalves: CoffeeDelivery-state-1.0.0',
    )
    if (storagedCoffee) {
      setCoffeesList(JSON.parse(storagedCoffee))
    }
  }, [sumCoffees])

  const totalPrices = coffeesList.filter((coffee) => coffee.amount > 0)

  const sumCoffeesPrices = totalPrices.reduce(function (
    sumCoffeesPrices,
    coffee,
  ) {
    return sumCoffeesPrices + coffee.price * coffee.amount
  },
  0)

  function handleCoffeeIncrement(coffeeId: number) {
    const updateCoffe = [...coffeesList]
    const coffeeExists = updateCoffe.find((coffee) => coffee.id === coffeeId)
    const currenteAmount = coffeeExists ? coffeeExists.amount : 0
    const amount = currenteAmount + 1

    if (amount > 9) return

    if (coffeeExists) coffeeExists.amount = amount

    setCoffeesList(updateCoffe)
    localStorage.setItem(
      'ThiagoGonçalves: CoffeeDelivery-state-1.0.0',
      JSON.stringify(coffeesList),
    )
  }

  function handleCoffeeDecrement(coffeeId: number) {
    const updateCoffe = [...coffeesList]
    const coffeeExists = updateCoffe.find((coffee) => coffee.id === coffeeId)
    const currenteAmount = coffeeExists ? coffeeExists.amount : 0
    const amount = currenteAmount - 1

    if (amount <= 0) return

    if (coffeeExists) coffeeExists.amount = amount

    setCoffeesList(updateCoffe)
    localStorage.setItem(
      'ThiagoGonçalves: CoffeeDelivery-state-1.0.0',
      JSON.stringify(coffeesList),
    )
  }

  function hendleRemoveCoffee(coffeeId: number) {
    const updateCoffe = [...coffeesList]
    const coffeeIndex = updateCoffe.findIndex(
      (coffee) => coffee.id === coffeeId,
    )

    if (coffeeIndex >= 0) {
      updateCoffe.splice(coffeeIndex, 1)
      setCoffeesList(updateCoffe)
      localStorage.removeItem('ThiagoGonçalves: CoffeeDelivery-state-1.0.0')
    }
  }

  function handleCoffeeComplete(coffee: CoffeesMenu[]) {
    const updateCoffe = [...coffeesList]
    const coffeeIndex = updateCoffe.findIndex((coffee) => coffee.amount > 0)

    if (coffeeIndex >= 0) {
      updateCoffe.splice(coffeeIndex)
      setCoffeesList(updateCoffe)
      localStorage.removeItem('ThiagoGonçalves: CoffeeDelivery-state-1.0.0')
    }
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesList,
        handleCoffeeDecrement,
        handleCoffeeIncrement,
        hendleRemoveCoffee,
        sumCoffees,
        sumCoffeesPrices,
        totalPrices,
        handleCoffeeComplete,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
