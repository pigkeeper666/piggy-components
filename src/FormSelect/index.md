
```tsx
import React from 'react'
import { FormSelect } from 'piggy-components';

const dt = [
  {
    title: '选项一',
    key: 'first'
  },
    {
    title: '选项二',
    key: 'second'
  }
]

export default (() => (
  <>
    <FormSelect isRequired nameAndField={dt} multipleMode="multiple"/>
  </>
))

```
