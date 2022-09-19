import { Controller, Get, HttpException, HttpStatus, Query } from "@nestjs/common";
import { RatesService } from './rates.service';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Get()
  async getCoin(@Query() query ): Promise<{ usd: string }> {

    let result = {"usd": await this.ratesService.getCoin(query.currency)};
    if (!result.usd){
      throw new HttpException("There is no such currency.", HttpStatus.NOT_FOUND)
    }
    return result;
  }
}
