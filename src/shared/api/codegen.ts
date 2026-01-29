import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "./msw/schema.graphql",
  documents: ["src/**/*.{vue,ts}"],
  generates: {
    "./src/shared/api/generated/": {
      preset: "client",
      config: {
        useTypeImports: true,
        nonOptionalTypename: true
      }
    }
  }
}
export default config
