import React, { useEffect, useRef } from "react";

function useDragger(id, setMaximise, dragHandle) {
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });

  const isDragging = useRef(false);

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;
    if (!container) throw new Error("target element must have a parent");

    const handle = dragHandle.current;

    const startDrag = (e) => {
      if (e.target !== handle) return;

      isDragging.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
      coords.current.initialX = target.offsetLeft;
      coords.current.initialY = target.offsetTop;

      // Disable text selection during dragging
      document.body.style.userSelect = "none";

      // Prevent default behavior to avoid text selection
      e.preventDefault();
    };

    const endDrag = () => {
      isDragging.current = false;

      // Re-enable text selection after dragging
      document.body.style.userSelect = "auto";
    };

    const handleDrag = (e) => {
      if (!isDragging.current) return;

      setMaximise(false);

      const offsetX = e.clientX - coords.current.startX;
      const offsetY = e.clientY - coords.current.startY;

      const nextX = coords.current.initialX + offsetX;
      const nextY = coords.current.initialY + offsetY;

      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;

      // Prevent default behavior to avoid text selection
      e.preventDefault();
    };

    const handleDoubleClick = () => {
      // Toggle maximise state
      setMaximise((prevMaximise) => !prevMaximise);
    };

    handle.addEventListener("mousedown", startDrag);
    document.addEventListener("mouseup", endDrag);
    container.addEventListener("mousemove", handleDrag);
    handle.addEventListener("dblclick", handleDoubleClick);

    // Event listener for target to handle z-index manipulation
    const handleTargetClick = () => {
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

    target.addEventListener("mousedown", handleTargetClick);

    const cleanup = () => {
      handle.removeEventListener("mousedown", startDrag);
      document.removeEventListener("mouseup", endDrag);
      container.removeEventListener("mousemove", handleDrag);
      handle.removeEventListener("dblclick", handleDoubleClick);

      // Cleanup target event listener
      target.removeEventListener("mousedown", handleTargetClick);

      // Ensure text selection is re-enabled after cleanup
      document.body.style.userSelect = "auto";
    };

    return cleanup;
  }, [id]);
}

export default useDragger;
