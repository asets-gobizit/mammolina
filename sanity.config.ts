import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'replace-with-sanity-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'mammolina',
  title: 'Mammolina Montessori',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
});
