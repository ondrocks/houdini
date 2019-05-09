// License: LGPL-3.0-or-later
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import AriaModal = require('react-aria-modal');
import _ = require('lodash');
import { action, computed } from 'mobx';
import { ModalManagerInterface } from './modal_manager';
import { TransitionStatus } from 'react-transition-group/Transition';

export interface ModalPrimitiveProps extends AriaModal.ModalProps
{
}

@observer
class ModalPrimitive extends React.Component<ModalPrimitiveProps, {}> {

  static defaultProps = {
    underlayProps: {},
    underlayClickExits: true,
    escapeExits: true,
    underlayColor: 'rgba(0,0,0,0.5)',
    includeDefaultStyles: true,
    focusTrapPaused: false,
    scrollDisabled: true
  };


  render() {

    return <AriaModal {...this.props} />;
  }
}

export default ModalPrimitive


