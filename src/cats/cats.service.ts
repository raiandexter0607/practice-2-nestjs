import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entity/cats.entity';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,
  ) {}
  private cats: Cat[] = [];
  private idCounter: number = 1;

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  findOne(id: number): Promise<Cat | null> {
    return this.catRepository.findOneBy({ id });
  }

  create(dto: CreateCatDto): Promise<Cat> {
    const cat = this.catRepository.create(dto);
    return this.catRepository.save(cat);
  }
}
