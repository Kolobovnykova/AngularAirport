import { ControllersModuleModule } from './controllers-module.module';

describe('ControllersModuleModule', () => {
  let controllersModuleModule: ControllersModuleModule;

  beforeEach(() => {
    controllersModuleModule = new ControllersModuleModule();
  });

  it('should create an instance', () => {
    expect(controllersModuleModule).toBeTruthy();
  });
});
