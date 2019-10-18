import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import { ConvectorController } from '@worldsibu/convector-core';
import { Myfirstapp } from './myfirstapp.model';
export declare class MyfirstappController extends ConvectorController<ChaincodeTx> {
    create(myfirstapp: Myfirstapp): Promise<void>;
}
