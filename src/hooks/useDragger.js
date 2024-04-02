import React, { useEffect, useRef } from "react";

function useDragger(id, setMaximise) {
  const isClicked = useRef(false);

  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;
    if (!container) throw new Error("target element must have a parent");

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;

      const boxes = [
        document.getElementById("about"),
        document.getElementById("projects"),
        document.getElementById("contact"),
      ];
      boxes.forEach((box) => {
        box.style.zIndex = 1; // Reset z-index for all boxes
      });
      target.style.zIndex = 10;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = target.offsetLeft;
      coords.current.lastY = target.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current) return;

      setMaximise(false);

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    };

    target.addEventListener("mousedown", onMouseDown);
    target.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);
    document.body.addEventListener("mouseup", onMouseUp);

    const cleanup = () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
      document.body.removeEventListener("mouseup", onMouseUp);
    };

    return cleanup;
  }, [id]);
}

export default useDragger;
