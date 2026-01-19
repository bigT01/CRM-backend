export class AddLineItemDto {
  description: string;
  type: 'base' | 'usage' | 'discount' | 'tax';
  amount: number;
}
