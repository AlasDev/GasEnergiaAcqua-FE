export interface UtilityMeter {
  id: string;
  userId: string;
  addressId: string;
  resourceTypeId: number;
  utilityMeterTypeId: number;
  servicePointIdentifier: string;
  serialNumber: string;
  meterName: string;
  isActive: boolean;
  installationDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UtilityMeterSummary {
  id: string;
  resourceTypeId: number;
  serialNumber: string;
  meterName: string;
  isActive: boolean;
  updatedAt: Date;
}

/**
 * type of resource the meter is tracking (example: water)
 */
export interface ResourceType {
  id: number;
  typeName: string;
}

/**
 * type of reading retrieval the utility meter uses (example: automatic)
 */
export interface UtilityMeterType {
  id: number;
  methodName: string;
}

export interface UtilityMeterFilter {
  userId?: string;
  addressId?: string;

  resourceTypeId?: number;
  utilityMeterTypeId?: number;

  servicePointIdentifier?: string;
  serialNumber?: string;
  meterName?: string;
  isActive?: boolean;

  fromInstallationDateAt?: Date;
  toInstallationDateAt?: Date;
  fromCreatedAt?: Date;
  toCreatedAt?: Date;
  fromUpdatedAt?: Date;
  toUpdatedAt?: Date;
}

export interface UtilityMeterFilterReduced {
  servicePointIdentifier?: string;
  serialNumber?: string;
  meterName?: string;

  fromInstallationDateAt?: Date;
  toInstallationDateAt?: Date;
}
