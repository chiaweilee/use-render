import * as ReactDOM from 'react-dom';

export default function useRender(children: any, el = document.body as any) {
  if (!children && !el) {
    return () => {};
  }

  const div: any = document.createElement('div');
  el.appendChild(div);

  ReactDOM.render(children, div);

  return function unmount() {
    ReactDOM.unmountComponentAtNode(div);
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
}
