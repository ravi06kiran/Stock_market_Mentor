import { LearningModule } from '../LearningModule';

export default function LearningModuleExample() {
  return (
    <LearningModule 
      onStartModule={(moduleId) => console.log('Starting module:', moduleId)}
    />
  );
}