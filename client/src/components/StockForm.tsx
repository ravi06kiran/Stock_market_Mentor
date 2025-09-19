import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface StockEntry {
  symbol: string;
  quantity: number;
}

interface StockFormProps {
  onSubmit?: (stocks: StockEntry[]) => void;
  isLoading?: boolean;
}

export function StockForm({ onSubmit, isLoading = false }: StockFormProps) {
  const [stocks, setStocks] = useState<StockEntry[]>([{ symbol: "", quantity: 0 }]);

  const addStock = () => {
    setStocks([...stocks, { symbol: "", quantity: 0 }]);
  };

  const removeStock = (index: number) => {
    if (stocks.length > 1) {
      setStocks(stocks.filter((_, i) => i !== index));
    }
  };

  const updateStock = (index: number, field: keyof StockEntry, value: string | number) => {
    const updated = stocks.map((stock, i) => 
      i === index ? { ...stock, [field]: value } : stock
    );
    setStocks(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validStocks = stocks.filter(stock => stock.symbol.trim() && stock.quantity > 0);
    onSubmit?.(validStocks);
  };

  // Sample stocks for demo //todo: remove mock functionality
  const sampleStocks = ["TCS", "RELIANCE", "HDFC", "INFOSYS", "WIPRO", "ADANI"];

  const fillSample = (index: number, symbol: string) => {
    updateStock(index, "symbol", symbol);
    updateStock(index, "quantity", Math.floor(Math.random() * 20) + 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5 text-primary" />
          <span>Build Your Portfolio</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {stocks.map((stock, index) => (
            <div key={index} className="flex gap-3 items-end">
              <div className="flex-1">
                <Label htmlFor={`symbol-${index}`}>Stock Symbol</Label>
                <Input
                  id={`symbol-${index}`}
                  placeholder="e.g., TCS, RELIANCE"
                  value={stock.symbol}
                  onChange={(e) => updateStock(index, "symbol", e.target.value.toUpperCase())}
                  data-testid={`input-symbol-${index}`}
                />
                {/* Sample suggestions for demo */}
                <div className="flex flex-wrap gap-1 mt-1">
                  {sampleStocks.map(sample => (
                    <Badge 
                      key={sample}
                      variant="outline" 
                      className="cursor-pointer text-xs hover-elevate"
                      onClick={() => fillSample(index, sample)}
                      data-testid={`badge-sample-${sample}`}
                    >
                      {sample}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="w-24">
                <Label htmlFor={`quantity-${index}`}>Qty</Label>
                <Input
                  id={`quantity-${index}`}
                  type="number"
                  min="1"
                  placeholder="0"
                  value={stock.quantity || ""}
                  onChange={(e) => updateStock(index, "quantity", parseInt(e.target.value) || 0)}
                  data-testid={`input-quantity-${index}`}
                />
              </div>
              
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeStock(index)}
                disabled={stocks.length === 1}
                data-testid={`button-remove-${index}`}
                className="hover-elevate"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={addStock}
              data-testid="button-add-stock"
              className="hover-elevate"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Stock
            </Button>
            
            <Button
              type="submit"
              disabled={isLoading || !stocks.some(s => s.symbol.trim() && s.quantity > 0)}
              data-testid="button-analyze"
              className="hover-elevate active-elevate-2"
            >
              {isLoading ? "Analyzing..." : "Analyze Portfolio"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}