interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Vehicle Owner'],
  tenantName: 'Organization',
  applicationName: 'ANIHU',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
