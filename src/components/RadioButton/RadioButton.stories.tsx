/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from 'react';
import { text } from '@storybook/addon-knobs';

import { RadioButton, RadioButtonProps } from './RadioButton';
import docs from './RadioButton.docs.mdx';

export default {
  title: 'Forms/RadioButton',
  component: RadioButton,
  parameters: {
    docs: { page: docs },
  },
};

const RadioButtonWithState = ({
  checked: initial,
  children,
  ...props
}: RadioButtonProps) => {
  const [checked, setChecked] = useState(initial);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <RadioButton
      {...props}
      checked={checked}
      onChange={handleChange}
      tracking={{ label: text('Tracking Label', 'trackingId') }}
    >
      {children || (checked ? 'Checked' : 'Unchecked')}
    </RadioButton>
  );
};

export const base = () => <RadioButtonWithState value="radio" name="radio" />;

export const invalid = () => (
  <RadioButtonWithState value="invalid" name="invalid" invalid>
    Error
  </RadioButtonWithState>
);

export const disabled = () => (
  <RadioButtonWithState value="disabled" name="disabled" disabled>
    Disabled
  </RadioButtonWithState>
);