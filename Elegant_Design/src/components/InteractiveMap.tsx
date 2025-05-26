
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [4.8803, 52.3676], // Amsterdam coordinates
      zoom: 15,
    });

    // Add marker for NMS PRODUCTIONS EUROPE B.V.
    new mapboxgl.Marker({ color: '#dc3545' })
      .setLngLat([4.8803, 52.3676])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div style="font-family: system-ui, -apple-system, sans-serif;">
              <strong>NMS PRODUCTIONS EUROPE B.V.</strong><br>
              Herengracht 257<br>
              1016 BJ, Amsterdam<br>
              The Netherlands
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setShowTokenInput(false);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="d-flex align-items-center justify-content-center bg-light rounded-4" style={{ height: '400px' }}>
        <div className="text-center p-4">
          <h5 className="mb-3">Enter Mapbox Token</h5>
          <p className="text-muted mb-3">
            Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer">mapbox.com</a>
          </p>
          <form onSubmit={handleTokenSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Load Map
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="position-relative">
      <div ref={mapContainer} className="rounded-4 shadow" style={{ height: '400px', width: '100%' }} />
    </div>
  );
};

export default InteractiveMap;
