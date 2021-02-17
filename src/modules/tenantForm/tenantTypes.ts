export type TenantPersonalInfo = {
  fullName: string;
  email: string;
  phoneNumber: string;
};

export type TenantFinancialInfo = {
  salary: string;
};

export interface ITenant {
  personalInfo?: TenantPersonalInfo;
  financialsInfo?: TenantFinancialInfo;
}

export enum ETenantAction {
  UPDATE_PERSONAL_INFO = 'update_personal_info',
  UPDATE_SALARY_INFO = 'update_salary_info',
}

export type TenantActions =
  | { type: ETenantAction.UPDATE_PERSONAL_INFO; payload: TenantPersonalInfo }
  | { type: ETenantAction.UPDATE_SALARY_INFO; payload: TenantFinancialInfo };
