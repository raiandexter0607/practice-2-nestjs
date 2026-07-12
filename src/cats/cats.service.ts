import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

export interface Cat {
  id: number;
  name: string;
  age: number;
}

@Injectable()
export class CatsService {
  private cats: Cat[] = [];
  private idCounter: number = 1;

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat | undefined {
    return this.cats.find((cat) => cat.id === id);
  }

  create(dto: CreateCatDto): Cat {
    const newCat: Cat = { id: this.idCounter++, ...dto };
    this.cats.push(newCat);
    return newCat;
  }
}
