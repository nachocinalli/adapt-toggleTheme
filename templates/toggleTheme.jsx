/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react';
import { classes, compile } from 'core/js/reactHelpers';

export default function ToggleTheme(props) {
  const { text, _iconClasses, _isDark } = props;
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(_isDark);
  }, [_isDark]);
  return (
    <>
      <span className={classes(['icon', _iconClasses])} aria-hidden='true'>
        {isDark ? (
          <svg width={15} height={15} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M2.9.5a.4.4 0 00-.8 0v.6h-.6a.4.4 0 100 .8h.6v.6a.4.4 0 10.8 0v-.6h.6a.4.4 0 000-.8h-.6V.5zm3 3a.4.4 0 10-.8 0v.6h-.6a.4.4 0 100 .8h.6v.6a.4.4 0 10.8 0v-.6h.6a.4.4 0 000-.8h-.6v-.6zm-4 3a.4.4 0 10-.8 0v.6H.5a.4.4 0 100 .8h.6v.6a.4.4 0 00.8 0v-.6h.6a.4.4 0 000-.8h-.6v-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 019.203 5.1a6.602 6.602 0 01-6.243 6.59c-.214.012-.333.264-.183.417.069.07.138.139.21.206l.072.066.26.226.188.148.121.09.187.131.176.115c.12.076.244.149.37.217l.264.135.26.12.303.122.244.086a6.568 6.568 0 001.103.26l.317.04.267.02a6.6 6.6 0 006.943-7.328l-.037-.277a6.557 6.557 0 00-.384-1.415l-.113-.268-.077-.166-.074-.148a6.602 6.602 0 00-.546-.883l-.153-.2-.199-.24-.163-.18-.12-.124-.16-.158-.223-.2-.32-.26-.245-.177-.292-.19-.321-.186-.328-.165-.113-.052-.24-.101-.276-.104-.252-.082-.325-.09-.265-.06-.292-.053zm1.86 4.318a7.578 7.578 0 00-.572-2.894 5.601 5.601 0 11-4.748 10.146 7.61 7.61 0 003.66-2.51.749.749 0 001.355-.442.75.75 0 00-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1010.35 6.2c.034-.295.052-.595.052-.9z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            />
          </svg>
        ) : (
          <svg width={15} height={15} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M7.5 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM2.197 2.197a.5.5 0 01.707 0L4.318 3.61a.5.5 0 01-.707.707L2.197 2.904a.5.5 0 010-.707zM.5 7a.5.5 0 000 1h2a.5.5 0 000-1h-2zm1.697 5.803a.5.5 0 010-.707l1.414-1.414a.5.5 0 11.707.707l-1.414 1.414a.5.5 0 01-.707 0zM12.5 7a.5.5 0 000 1h2a.5.5 0 000-1h-2zm-1.818-2.682a.5.5 0 010-.707l1.414-1.414a.5.5 0 11.707.707L11.39 4.318a.5.5 0 01-.707 0zM8 12.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm2.682-1.818a.5.5 0 01.707 0l1.414 1.414a.5.5 0 11-.707.707l-1.414-1.414a.5.5 0 010-.707zM5.5 7.5a2 2 0 114 0 2 2 0 01-4 0zm2-3a3 3 0 100 6 3 3 0 000-6z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            />
          </svg>
        )}
      </span>
      <span className='nav__btn-label' aria-hidden='true' dangerouslySetInnerHTML={{ __html: compile(text, props) }} />
    </>
  );
}
