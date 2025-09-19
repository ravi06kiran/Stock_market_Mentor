import { Header } from '../Header';

export default function HeaderExample() {
  return (
    <Header 
      isAuthenticated={false}
      onSignIn={() => console.log('Sign in clicked')}
      onSignUp={() => console.log('Sign up clicked')}
      onSignOut={() => console.log('Sign out clicked')}
    />
  );
}