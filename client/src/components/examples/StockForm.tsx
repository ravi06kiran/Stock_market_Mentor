import { StockForm } from '../StockForm';

export default function StockFormExample() {
  return (
    <StockForm 
      onSubmit={(stocks) => console.log('Submitted stocks:', stocks)}
      isLoading={false}
    />
  );
}