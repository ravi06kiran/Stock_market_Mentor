import { Hero } from '../Hero';

export default function HeroExample() {
  return (
    <Hero 
      onGetStarted={() => console.log('Get started clicked')}
      onTryDemo={() => console.log('Try demo clicked')}
    />
  );
}