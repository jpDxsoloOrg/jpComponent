import { Button } from '@dxsolo/ui';
 
function App() {
  return (
    <div style={{ padding: '40px' }}>
      <Button intent="primary">Get Started</Button>
      <Button intent="secondary" style={{ marginLeft: '12px' }}>
        Cancel
      </Button>
      <Button intent="destructive" style={{ marginLeft: '12px' }}>
        Delete
      </Button>
    </div>
  );
}
 
export default App;