import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Coffee } from "../graphql";
import { ParseIntPipe } from "@nestjs/common";
import { CreateCoffeeInput } from "./dto/create-coffee.input";

@Resolver()
export class CoffeesResolver {
  @Query('coffees')
  async findAll(): Promise<Coffee[]> {
    return []
  }

  @Query('coffee')
  async findOne(@Args('id', ParseIntPipe) id: number): Promise<Coffee> {
    return null
  }

  @Mutation(() => Coffee, { name: 'createCoffee' })
  async create(@Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput) {
    return null;
  }
}
