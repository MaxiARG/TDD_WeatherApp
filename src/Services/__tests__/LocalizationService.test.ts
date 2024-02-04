//Este archivo testea un modulo externo, con codigo nativo. Para ello mockea la dependencia, pues no se puede testear sino.
//La dependencia mockeada esta en __Mocks__
import LocationService from "../LocationService";

import {it} from '@jest/globals';
describe('Test LocalizationService', () => {

  it('Debe devolver lat y long de la posicion actual', async () => {
    const position = await LocationService.getCurrentPosition();
    expect(position).toEqual({
        latitude: 0,
        longitude: 0,
    })
  });

});