import { JSONTree } from 'react-json-tree';

// Inside a React component:
const json = {
  array: [1, 2, 3],
  bool: true,
  object: {
    foo: 'bar',
  }
};

const Snapshot = () => {
    return <JSONTree data={json} />;
}
export default Snapshot;
