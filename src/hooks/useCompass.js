import { useState, useEffect, useCallback, useRef } from "react";

export function useCompass() {
  const [heading, setHeading] = useState(null);
  const [permissionNeeded, setPermissionNeeded] = useState(false);
  const [error, setError] = useState(null);
  const [compassAvailable, setCompassAvailable] = useState(null);
  const absoluteConfirmedRef = useRef(false);
  const fallbackTimerRef = useRef(null);

  const handleOrientation = useCallback((event) => {
    if (event.webkitCompassHeading != null) {
      // iOS — absolute compass heading, 0 = north, clockwise
      absoluteConfirmedRef.current = true;
      setCompassAvailable(true);
      setHeading(event.webkitCompassHeading);
    } else if (event.alpha != null && event.absolute === true) {
      // Android absolute heading — alpha increases counter-clockwise
      absoluteConfirmedRef.current = true;
      setCompassAvailable(true);
      setHeading((360 - event.alpha) % 360);
    } else if (event.alpha != null && event.absolute == null) {
      // Some Android Chrome versions omit the absolute flag despite providing sensor data.
      absoluteConfirmedRef.current = true;
      setCompassAvailable(true);
      setHeading((360 - event.alpha) % 360);
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      try {
        const result = await DeviceOrientationEvent.requestPermission();
        if (result === "granted") {
          window.addEventListener("deviceorientation", handleOrientation, true);
          setPermissionNeeded(false);
          fallbackTimerRef.current = setTimeout(() => {
            if (!absoluteConfirmedRef.current) setCompassAvailable(false);
          }, 3000);
        } else {
          setError("Kompas-toegang geweigerd.");
          setCompassAvailable(false);
        }
      } catch {
        setError("Kon kompas niet activeren.");
        setCompassAvailable(false);
      }
    }
  }, [handleOrientation]);

  useEffect(() => {
    if (typeof DeviceOrientationEvent?.requestPermission === "function") {
      // iOS 13+ — needs explicit permission first
      setPermissionNeeded(true);
      return;
    }

    // Listen to both event names because Android browsers differ in support and flags.
    const eventNames = ["deviceorientationabsolute", "deviceorientation"];
    eventNames.forEach((eventName) => {
      window.addEventListener(eventName, handleOrientation, true);
    });

    // After 3s without absolute data: mark compass as unavailable
    fallbackTimerRef.current = setTimeout(() => {
      if (!absoluteConfirmedRef.current) {
        setCompassAvailable(false);
      }
    }, 3000);

    return () => {
      eventNames.forEach((eventName) => {
        window.removeEventListener(eventName, handleOrientation, true);
      });
      clearTimeout(fallbackTimerRef.current);
    };
  }, [handleOrientation]);

  return { heading, permissionNeeded, requestPermission, error, compassAvailable };
}
