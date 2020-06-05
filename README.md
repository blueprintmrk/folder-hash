# Folder Hash Action

The action can help you get folder hash, you can use it to generate cache key, etc...

## Feture

- support multiple folder

## Inputs

### `path`

**Required**  A list of files, directories, and wildcard patterns to cache and restore. See [`@actions/glob`](https://github.com/actions/toolkit/tree/master/packages/glob) for supported patterns. 

## Outputs

### `hash`

The hash calculated by folder

## Example usage

```yaml
uses: theowenyoung/folder-hash@v2.0.1
with:
  path: |
    .cache
    public
```
