
```tsx
import React from 'react'
import { Timeline } from 'piggy-components';

const data = [
  {
    color: 'green',
    content: 'Solve initial network problems',
  },
  {
    color: 'gray',
    content: 'Solve initial network problems',
  }
]

export default (() => (
  <>
    <Timeline 
    targetApi="http://127.0.0.1:3006/mockTimeline"
    />
  </>
))

```
