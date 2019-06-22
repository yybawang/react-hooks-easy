import React from 'react'
import ReactDom from 'react-dom'

require('../src/utils/logger');

import Dom from './Dom'
ReactDom.render(<Dom />, document.getElementById('app'));
