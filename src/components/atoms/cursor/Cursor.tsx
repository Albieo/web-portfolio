import React, { useState, useEffect, useRef, useCallback } from 'react';
import './cursor.scss';

interface CursorProps {
  hoverScale?: number;
  clickScale?: number;
  borderColor?: string;
  borderSize?: number;
  dotColor?: string;
  dotSize?: number;
  borderColorHover?: string;
  dotColorHover?: string;
  borderColorClick?: string;
}

const Cursor: React.FC<CursorProps> = ({
  hoverScale = 1.5,
  clickScale = 0.5,
  borderColor = '#fff',
  borderSize = 30,
  dotColor = '#fff',
  dotSize = 6,
  borderColorHover = '#00ff00',
  dotColorHover = '#0000ff',
  borderColorClick = '#ff0000',
}) => {
  const [deviceType, setDeviceType] = useState<'mouse' | 'touch'>('mouse');
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  // Check device type
  const isTouchDevice = useCallback(() => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }, []);

  // Smooth cursor movement using requestAnimationFrame
  const move = useCallback((e: MouseEvent) => {
    if (deviceType === 'touch') return;

    // Update position state
    setPosition({ x: e.clientX, y: e.clientY });

    // Use RAF for smooth animation
    requestAnimationFrame(() => {
      if (cursorBorderRef.current) {
        cursorBorderRef.current.style.left = `${e.clientX}px`;
        cursorBorderRef.current.style.top = `${e.clientY}px`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX}px`;
        cursorDotRef.current.style.top = `${e.clientY}px`;
      }
    });
  }, [deviceType]);

  // Set up event listeners
  useEffect(() => {
    const checkDeviceType = () => {
      setDeviceType(isTouchDevice() ? 'touch' : 'mouse');
    };

    checkDeviceType();

    if (deviceType === 'mouse') {
      // Hide default cursor
      document.body.style.cursor = 'none';

      // Set initial position to center
      setPosition({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });

      document.addEventListener('mousemove', move);
      document.addEventListener('mousedown', () => setIsClicking(true));
      document.addEventListener('mouseup', () => setIsClicking(false));

      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], [data-cursor-hover]'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });

      return () => {
        // Restore default cursor
        document.body.style.cursor = '';

        document.removeEventListener('mousemove', move);
        document.removeEventListener('mousedown', () => setIsClicking(true));
        document.removeEventListener('mouseup', () => setIsClicking(false));

        interactiveElements.forEach((el) => {
          el.removeEventListener('mouseenter', () => setIsHovering(true));
          el.removeEventListener('mouseleave', () => setIsHovering(false));
        });
      };
    }
  }, [move, deviceType, isTouchDevice]);

  if (deviceType === 'touch') return null;

  return (
    <>
      <div
        ref={cursorBorderRef}
        className={`cursor-border ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          '--hover-scale': hoverScale,
          '--click-scale': clickScale,
          '--border-size': `${borderSize}px`,
          '--border-color': borderColor,
          '--border-color-hover': borderColorHover,
          '--border-color-click': borderColorClick,
          left: `${position.x}px`,
          top: `${position.y}px`,
        } as React.CSSProperties}
      />
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${isClicking ? 'clicking' : ''} ${isHovering ? 'hovering' : ''}`}
        style={{
          '--hover-scale': hoverScale,
          '--click-scale': clickScale,
          '--dot-size': `${dotSize}px`,
          '--dot-color': dotColor,
          '--dot-color-hover': dotColorHover,
          left: `${position.x}px`,
          top: `${position.y}px`,
        } as React.CSSProperties}
      />
    </>
  );
};

export default Cursor;
