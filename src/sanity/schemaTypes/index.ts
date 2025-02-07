import { type SchemaTypeDefinition } from 'sanity'
import { chef } from './chefs'
import { food } from './food'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef, food],
}
