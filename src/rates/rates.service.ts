import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class RatesService {

  async getCoin(currency) {
    try {
      const result = await axios.get(`https://api.coincap.io/v2/assets/${currency}`)
      return result.data.data.priceUsd
    } catch (error) {
      console.error(error)
    }
  }

}
