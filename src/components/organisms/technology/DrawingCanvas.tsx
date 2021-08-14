import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/variables';
import { Matrix } from '../../../types';
import Section from '../../molecules/Section';

const ToolBox = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 24px;
`;

type ColorSelectorProps = {
  color: string;
  chosen: boolean;
};
const ColorSelector = styled.button<ColorSelectorProps>`
  width: 28px;
  height: 28px;
  background: ${props => props.color};
  border-radius: 50%;
  margin-right: 4px;
  /* box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25); */
  border: 2px solid
    ${props => (props.chosen ? colors.defaultBlue : colors.white)};
`;

const Canvas = styled.canvas`
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  cursor: crosshair;
`;

const TechnologyDrawingCanvas: React.VFC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const CANVAS_SIZE = {
    width: 636,
    height: 477,
  } as const;

  const isDrawn = useRef(false);
  const eventOffsets = useRef<Matrix>({ x: 0, y: 0 });

  const canvasHistories = useRef<string[]>([]);

  const colors = {
    black: '#000000',
    red: `#dc4848`,
    blue: `#274da0`,
  } as const;
  type Color = typeof colors[keyof typeof colors];
  const chosenColor = useRef<Color>(colors.black);

  const onClickColorPalette = (color: Color) => {
    chosenColor.current = color;
  };

  const getCurrentCanvasData = (): string | null => {
    const currentCanvasRef = canvasRef.current;

    if (currentCanvasRef) {
      const currentCanvasData = currentCanvasRef.toDataURL('image/png');
      return currentCanvasData;
    }
    return null;
  };

  const drawLine = (e: MouseEvent) => {
    const currentEventType = e.type;
    const currentEventOffsets: Matrix = { x: e.offsetX, y: e.offsetY };

    const startDrawing = currentEventType === 'mousedown';
    const drawing = currentEventType === 'mousemove' && isDrawn.current;
    const stopDrawing =
      currentEventType === 'mouseup' || currentEventType === 'mouseout';

    if (startDrawing) {
      isDrawn.current = true;
    }

    if (startDrawing || drawing) {
      const currentCanvasRef = canvasRef.current;
      if (currentCanvasRef) {
        const canvasContext = currentCanvasRef.getContext('2d');

        if (canvasContext) {
          canvasContext.lineCap = 'round';
          canvasContext.lineWidth = 7;
          canvasContext.strokeStyle = chosenColor.current;
          canvasContext.beginPath();
          canvasContext.moveTo(eventOffsets.current.x, eventOffsets.current.y);
          canvasContext.lineTo(currentEventOffsets.x, currentEventOffsets.y);
          canvasContext.stroke();
        }
      }
    }

    if (stopDrawing) {
      isDrawn.current = false;

      const currentCanvasData = getCurrentCanvasData();
      if (currentCanvasData) {
        canvasHistories.current.push(currentCanvasData);
        console.log(canvasHistories.current);
      }
    }

    eventOffsets.current = currentEventOffsets;
  };

  useEffect(() => {
    const currentCanvasRef = canvasRef.current;

    if (currentCanvasRef) {
      currentCanvasRef.addEventListener('mousedown', drawLine);
      currentCanvasRef.addEventListener('mousemove', drawLine);
      currentCanvasRef.addEventListener('mouseup', drawLine);
      currentCanvasRef.addEventListener('mouseout', drawLine);
    }
  }, [canvasRef.current]);

  return (
    <Section enHeading="Drawing Canvas" jpHeading="描画キャンバス" id="canvas">
      <ToolBox>
        {Object.keys(colors).map((colorName, index) => {
          const colorCode = colors[colorName];
          return (
            <ColorSelector
              color={colorCode}
              chosen={chosenColor === colorCode}
              onClick={() => onClickColorPalette(colorCode)}
              key={index}
            />
          );
        })}
      </ToolBox>
      <Canvas
        ref={canvasRef}
        width={CANVAS_SIZE.width}
        height={CANVAS_SIZE.height}
      />
    </Section>
  );
};

export default TechnologyDrawingCanvas;
