

# Fix Sanity CMS Connection & GoogleMap TypeScript Errors

## Current Issues

1. **GoogleMap TypeScript errors**: `window.google` is not typed, causing 6 build errors.
2. **Sanity CMS**: Project ID `cfnd6oxb` is configured but no Sanity MCP connector is linked, so we cannot verify the project, add CORS origins, or check content programmatically.

## Plan

### Step 1: Fix GoogleMap TypeScript errors (immediate)
Add a `google` property declaration to the `Window` interface at the top of `GoogleMap.tsx`:
```ts
declare global {
  interface Window {
    google: any;
  }
}
```

### Step 2: Connect Sanity MCP connector
Use the Sanity MCP connector to link your Sanity project. This will let us:
- Verify the project ID and dataset
- Add CORS origins automatically (your preview URL `https://*.lovable.app`)
- Inspect the schema and check if content exists

**Action needed from you**: I'll prompt the Sanity connector connection. You'll need to authorize it with your Sanity account.

### Step 3: After Sanity is connected
- Verify project ID matches `cfnd6oxb`
- Add CORS origins for your Lovable preview URL
- Query the dataset to check if content documents exist
- If empty, provide guidance on populating content via Sanity Studio

## Summary
- 1 code fix (GoogleMap types) — immediate
- 1 user action (connect Sanity MCP) — required to proceed with CMS fixes

