
```tsx
import React from 'react'
import { Form, Button} from 'piggy-components';

export default (() => (
  <>
    <Button value="按钮" eventType="modal" formName="basic"/>
    <Form targetApi="/abc"  name="basic" displayType="modal"/>
  </>
))

```
