import { ServicesModuleModule } from './services-module.module';

describe('ServicesModuleModule', () => {
  let servicesModuleModule: ServicesModuleModule;

  beforeEach(() => {
    servicesModuleModule = new ServicesModuleModule();
  });

  it('should create an instance', () => {
    expect(servicesModuleModule).toBeTruthy();
  });
});
