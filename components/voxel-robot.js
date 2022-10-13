import { useState, useEffect, useCallBack, useRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../lib/model';

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelRobot = () => {
  const refContainer = useRef();

  return <Box ref={refContainer}>Robot</Box>;
};

export default VoxelRobot;
