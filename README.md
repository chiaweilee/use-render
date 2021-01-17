# use-render
🔒 Mount and render React component as Modal

```jsx
const unmount = useRender(<div>Hello world</div>);
unmount();
```

### Automatic unmount with hooks

```jsx
useEffect(() => useRender(<div>Hello world</div>), []);
```
