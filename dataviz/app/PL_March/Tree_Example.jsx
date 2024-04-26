import Fixed_Card from '@/components/Fixed_Card';
import Treemap from '@/components/Plots/Treemap';

const MyPage = () => {
  const data = {"name": "flare", "children": [{"name": "S", "children": [{"name": "Moments", "value": 6}, {"name": "Colors-8", "value": 8}, {"name": "Breeze-4", "value": 6}, {"name": "Rozana", "value": 8}, {"name": "Colors-7", "value": 7}, {"name": "Mix", "value": 132}, {"name": "Surmaya", "value": 32}, {"name": "Four Gems 2", "value": 4}]}, {"name": "M", "children": [{"name": "Moments", "value": 6}, {"name": "Colors-8", "value": 8}, {"name": "Breeze-4", "value": 6}, {"name": "Rozana", "value": 8}, {"name": "Colors-7", "value": 7}, {"name": "Mix", "value": 134}, {"name": "Surmaya", "value": 32}, {"name": "Four Gems 2", "value": 4}]}, {"name": "L", "children": [{"name": "Moments", "value": 6}, {"name": "Colors-8", "value": 8}, {"name": "Breeze-4", "value": 6}, {"name": "Rozana", "value": 8}, {"name": "Colors-7", "value": 7}, {"name": "Mix", "value": 135}, {"name": "Surmaya", "value": 32}, {"name": "Four Gems 2", "value": 4}]}, {"name": "XL", "children": [{"name": "Moments", "value": 6}, {"name": "Colors-8", "value": 8}, {"name": "Breeze-4", "value": 6}, {"name": "Rozana", "value": 8}, {"name": "Colors-7", "value": 7}, {"name": "Mix", "value": 133}, {"name": "Surmaya", "value": 32}, {"name": "Four Gems 2", "value": 4}]}, {"name": "2XL", "children": [{"name": "Moments", "value": 6}, {"name": "Colors-8", "value": 8}, {"name": "Breeze-4", "value": 6}, {"name": "Rozana", "value": 8}, {"name": "Colors-7", "value": 7}, {"name": "Mix", "value": 124}, {"name": "Surmaya", "value": 32}, {"name": "Four Gems 2", "value": 4}]}, {"name": "3XL", "children": [{"name": "Moments", "value": 6}, {"name": "Colors-8", "value": 8}, {"name": "Breeze-4", "value": 6}, {"name": "Rozana", "value": 8}, {"name": "Colors-7", "value": 7}, {"name": "Mix", "value": 120}, {"name": "Surmaya", "value": 32}, {"name": "Four Gems 2", "value": 4}]}, {"name": "XS", "children": [{"name": "Moments", "value": 0}, {"name": "Colors-8", "value": 0}, {"name": "Breeze-4", "value": 0}, {"name": "Rozana", "value": 0}, {"name": "Colors-7", "value": 1}, {"name": "Mix", "value": 14}, {"name": "Surmaya", "value": 0}, {"name": "Four Gems 2", "value": 0}]}, {"name": "2XLL", "children": [{"name": "Moments", "value": 0}, {"name": "Colors-8", "value": 0}, {"name": "Breeze-4", "value": 0}, {"name": "Rozana", "value": 0}, {"name": "Colors-7", "value": 0}, {"name": "Mix", "value": 1}, {"name": "Surmaya", "value": 0}, {"name": "Four Gems 2", "value": 0}]}, {"name": "MM", "children": [{"name": "Moments", "value": 0}, {"name": "Colors-8", "value": 0}, {"name": "Breeze-4", "value": 0}, {"name": "Rozana", "value": 0}, {"name": "Colors-7", "value": 0}, {"name": "Mix", "value": 1}, {"name": "Surmaya", "value": 0}, {"name": "Four Gems 2", "value": 0}]}]}

  return (
    <Fixed_Card>
      <h1>My Page</h1>
      <Treemap data={data} />
    </Fixed_Card>
  );
};

export default MyPage;
