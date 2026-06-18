import { ViteVisualEditor } from '@adminide-stack/vite-visualeditor';
import { useKeycloak } from '@adminide-stack/vite-visualeditor';
import { LoadingSpinner } from '@adminide-stack/vite-visualeditor';
import { LoginPage } from '@adminide-stack/vite-visualeditor';

// Sample App Component (this would be the user's existing app)
const SampleApp = () => {
    return <></>;
};

function App() {
    const { authenticated, initialized } = useKeycloak();

    if (!initialized) {
        return <LoadingSpinner />;
    }

    return (
        <ViteVisualEditor
            defaultEnabled={false}
            onSave={(changes) => {
                console.log('Changes to save:', changes);
                // Here you would typically send changes to your backend
            }}
        >
            {authenticated ? <SampleApp /> : <LoginPage />}
        </ViteVisualEditor>
    );
}

// function App() {
//     return (
//         <ViteVisualEditor
//             defaultEnabled={false}
//             onSave={(changes) => {
//                 console.log('Changes to save:', changes);
//                 // Here you would typically send changes to your backend
//             }}
//         >
//             <SampleApp />
//         </ViteVisualEditor>
//     );
// }

export default App;
