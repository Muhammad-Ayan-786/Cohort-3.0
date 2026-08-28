import SingleImageForm from './components/SingleImageForm';
import MultipleImageForm from './components/MultipleImageForm';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-10 p-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Form Data Integration</h1>
      <SingleImageForm />
      <MultipleImageForm />
    </div>
  );
};

export default App;