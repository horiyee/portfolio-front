import React, { useCallback, useEffect, useRef, useState } from 'react';
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
  width: 32px;
  height: 32px;
  background: ${props => props.color};
  border-radius: 50%;
  margin-right: 4px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  border: 2px solid
    ${props => (props.chosen ? colors.lightBlue : colors.borderGray)};
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
  const [chosenColor, setChosenColor] = useState<Color>(colors.black);

  const onClickColorPalette = useCallback((color: Color) => {
    setChosenColor(color);
  }, []);

  // const onClickUndo = useCallback(() => {
  //   const canvasDataToRollback = canvasHistories.current.
  // }, [canvasHistories.current]);

  // const onClickRedo = useCallback(() => {}, [canvasHistories.current]);

  const getCurrentCanvasData = useCallback((): string | null => {
    const currentCanvasRef = canvasRef.current;

    if (currentCanvasRef) {
      const currentCanvasData = currentCanvasRef.toDataURL('image/png');
      return currentCanvasData;
    }
    return null;
  }, [canvasRef.current]);

  const drawLine = useCallback(
    (e: MouseEvent) => {
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
            canvasContext.strokeStyle = chosenColor;
            canvasContext.beginPath();
            canvasContext.moveTo(
              eventOffsets.current.x,
              eventOffsets.current.y,
            );
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
        }
      }

      eventOffsets.current = currentEventOffsets;
    },
    [chosenColor],
  );

  useEffect(() => {
    const currentCanvasRef = canvasRef.current;

    if (currentCanvasRef) {
      currentCanvasRef.addEventListener('mousedown', drawLine);
      currentCanvasRef.addEventListener('mousemove', drawLine);
      currentCanvasRef.addEventListener('mouseup', drawLine);
      currentCanvasRef.addEventListener('mouseout', drawLine);
    }

    return () => {
      if (currentCanvasRef) {
        currentCanvasRef.removeEventListener('mousedown', drawLine);
        currentCanvasRef.removeEventListener('mousemove', drawLine);
        currentCanvasRef.removeEventListener('mouseup', drawLine);
        currentCanvasRef.removeEventListener('mouseout', drawLine);
      }
    };
  }, [chosenColor]);

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
