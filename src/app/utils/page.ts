export interface PageDTO<DTO> {
  content: {DTO: any};
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  number: number;
  totalPages: number;
}
