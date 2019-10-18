// tslint:disable:no-unused-expression
import { join } from 'path';
import { expect } from 'chai';
import * as uuid from 'uuid/v4';
import { MockControllerAdapter } from '@worldsibu/convector-adapter-mock'; // controller is going to test the exsting blockchain running lcally instead of intracting with the original.
import { ClientFactory, ConvectorControllerClient } from '@worldsibu/convector-core';
import 'mocha';

import { Myfirstapp, MyfirstappController } from '../src';

describe('Myfirstapp', () => {
  let adapter: MockControllerAdapter;
  let myfirstappCtrl: ConvectorControllerClient<MyfirstappController>;
  
  before(async () => {
    // Mocks the blockchain execution environment
    adapter = new MockControllerAdapter();
    myfirstappCtrl = ClientFactory(MyfirstappController, adapter);

    await adapter.init([
      {
        version: '*',
        controller: 'MyfirstappController',
        name: join(__dirname, '..')
      }
    ]);

    adapter.addUser('Test');
    adapter.addUser('Maruti'); //new added
    adapter.addUser('Hundai') //add new car name
  });
  
  it('should create a default model', async () => {
    const modelSample = new Myfirstapp({
      id: uuid(),
      name: 'Test',
      created: Date.now(),
      modified: Date.now()
    });

    await myfirstappCtrl.$withUser('Test').create(modelSample);
    const justSavedModel = await adapter.getById<Myfirstapp>(modelSample.id);
    expect(justSavedModel.id).to.exist;
  });

  it('should create a second model', async () => {
    const modelSample = new Myfirstapp({
      id: uuid(),
      name: 'Maruti',
      created: Date.now(),
      modified: Date.now()
    });

    await myfirstappCtrl.$withUser('Maruti').create(modelSample);
    const justSavedModel = await adapter.getById<Myfirstapp>(modelSample.id);
    expect(justSavedModel.id).to.exist;
  });

    it('should create a third model', async () => {
      const modelSample = new Myfirstapp({
        id: uuid(),
        name: 'Hundai',
        created: Date.now(),
        modified: Date.now()
      });
      await myfirstappCtrl.$withUser('Hundai').create(modelSample);
      const justSavedModel = await adapter.getById<Myfirstapp>(modelSample.id);
      expect(justSavedModel.id).to.exist;
    });
});