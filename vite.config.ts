import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [
                    function () {
                        return {
                            visitor: {
                                JSXOpeningElement(path) {
                                    const hasAttributes = path.node.attributes && path.node.attributes.length > 0;
                                    if (!hasAttributes) {
                                        path.node.attributes = [];
                                    }

                                    // Generate unique element ID
                                    const elementId = Math.random().toString(36).substr(2, 9);

                                    path.node.attributes.push({
                                        type: 'JSXAttribute',
                                        name: {
                                            type: 'JSXIdentifier',
                                            name: 'data-vite-editor-id',
                                        },
                                        value: {
                                            type: 'StringLiteral',
                                            value: elementId,
                                        },
                                    });

                                    // Add data-loc with component path and line:column
                                    const loc = path.node.loc;
                                    if (loc) {
                                        const filename = this.file?.opts?.filename || 'unknown';

                                        // Convert absolute path to relative component path
                                        let componentPath = filename;
                                        if (filename.includes('/src/')) {
                                            componentPath = '@/' + filename.split('/src/')[1];
                                        } else if (filename.includes('src/')) {
                                            componentPath = '@/' + filename.split('src/')[1];
                                        }

                                        path.node.attributes.push({
                                            type: 'JSXAttribute',
                                            name: {
                                                type: 'JSXIdentifier',
                                                name: 'data-loc',
                                            },
                                            value: {
                                                type: 'StringLiteral',
                                                value: `${componentPath}:${loc.start.line}:${loc.start.column}`,
                                            },
                                        });
                                    }
                                },
                            },
                        };
                    },
                ],
            },
        }),
    ],
    define: {
        process: {
            env: {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            },
        },
        global: 'window',
    },
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
    server: {
        port: 3000,
        middlewareMode: false,
        host: '0.0.0.0',
        // Allow any host so E2B sandbox URLs (e.g. 3000-<sandboxId>.yarntra.ai) work without config changes
        allowedHosts: true,
        cors: {
            origin: true,
            credentials: true,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
        },
    },
});
