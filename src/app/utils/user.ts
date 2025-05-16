export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;

  userTypeId: number;
  createdAt: Date;
  utilityMetersIds: number[] | null;
}

/**
 * authorization clearance of user (example: admin)
 */
export interface UserType {
  id: number;
  typeName: string;
}
