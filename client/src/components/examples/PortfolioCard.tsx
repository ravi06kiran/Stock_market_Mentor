import { PortfolioCard } from '../PortfolioCard';

export default function PortfolioCardExample() {
  const mockStocks = [
    {
      symbol: "TCS",
      name: "Tata Consultancy Services",
      quantity: 10,
      price: 3750,
      riskLevel: "low" as const,
      sector: "IT",
      change: 2.5
    },
    {
      symbol: "RELIANCE",
      name: "Reliance Industries",
      quantity: 5,
      price: 2430,
      riskLevel: "medium" as const,
      sector: "Energy",
      change: -1.2
    },
    {
      symbol: "HDFC",
      name: "HDFC Bank",
      quantity: 8,
      price: 1600,
      riskLevel: "high" as const,
      sector: "Finance",
      change: 0.8
    }
  ];

  const totalValue = mockStocks.reduce((sum, stock) => sum + (stock.quantity * stock.price), 0);
  const healthScore = 25; // 10 + 5 + (-10) for the risk calculation
  const badge = "Diversification Master 🏆";

  return (
    <PortfolioCard 
      stocks={mockStocks}
      healthScore={healthScore}
      badge={badge}
      totalValue={totalValue}
    />
  );
}