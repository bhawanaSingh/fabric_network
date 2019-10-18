import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Myfirstapp } from './myfirstapp.model';

@Controller('myfirstapp')
export class MyfirstappController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Myfirstapp)
    myfirstapp: Myfirstapp
  ) {
    await myfirstapp.save();
  }
}