import React, { useEffect, useState } from 'react'
import createStore from '../utils/createStore'

const [useDesign, load] = createStore()

load('design', {
    layout: undefined,
    scrollSegment: undefined,
    orientation: 'landscape'
})

export default useDesign