
import React from 'react';
import { observer } from 'mobx-react-lite';
import { SectionTab } from 'polotno/side-panel';
import { getImageSize } from 'polotno/utils/image';
import FaShapes from '@meronex/icons/fa/FaShapes';

const shapes = [
  {
    type: 'svg',
    name: 'Rectangle',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPg==',
  },
  {
    type: 'svg',
    name: 'Circle',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPg==',
  },
  {
    type: 'svg',
    name: 'Triangle',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwb2x5Z29uIHBvaW50cz0iNTAsMTAgOTAsOTAgMTAsOTAiIGZpbGw9IiMwMDAiLz4KPC9zdmc+',
  },
];

export const ShapesSection = {
  name: 'shapes',
  Tab: (props) => (
    <SectionTab name="Shapes" {...props}>
      <FaShapes />
    </SectionTab>
  ),
  Panel: observer(({ store }) => {
    return (
      <div style={{ padding: '10px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
          }}
        >
          {shapes.map((shape, index) => (
            <div
              key={index}
              style={{
                width: '100px',
                height: '100px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f9f9f9',
              }}
              onClick={async () => {
                const { width, height } = await getImageSize(shape.src);
                store.activePage.addElement({
                  type: shape.type,
                  src: shape.src,
                  width: width || 100,
                  height: height || 100,
                  x: store.width / 2 - (width || 100) / 2,
                  y: store.height / 2 - (height || 100) / 2,
                });
              }}
            >
              <img
                src={shape.src}
                alt={shape.name}
                style={{ maxWidth: '80px', maxHeight: '80px' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }),
};
