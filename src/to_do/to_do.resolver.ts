import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { To_doEntity, To_doInput } from './to_do.entity';
import { To_doService } from './to_do.service';

@Resolver(() => To_doEntity)
export class To_doResolver {
  constructor(private readonly to_doService: To_doService) {}

  @Query(() => [To_doEntity], { name: 'ToDos', nullable: false })
  async getToDos() {
    return await this.to_doService.getAll();
  }

  @Mutation(() => String, { name: 'createToDo' })
  async createToDo(@Args('data') input: To_doInput): Promise<string> {
    console.log(input);
    return this.to_doService.insert(input);
  }
}
