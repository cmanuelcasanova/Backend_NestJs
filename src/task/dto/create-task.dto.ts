import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateTaskDto {
      
      @IsString()
      @IsNotEmpty()
      @MinLength(3)
      title: string;
    
      @IsBoolean()
      @IsNotEmpty()
      done: boolean;
    
}
