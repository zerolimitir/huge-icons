import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSyrup = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M8.15 2.043a1.555 1.555 0 0 0-1.006.837c-.11.231-.124.3-.124.62 0 .311.015.394.113.604.143.309.452.617.767.764l.24.112h7.72l.24-.112c.315-.147.624-.455.767-.764.098-.21.113-.293.113-.604s-.015-.394-.113-.604a1.698 1.698 0 0 0-.767-.764l-.24-.112-3.78-.006c-2.119-.004-3.846.009-3.93.029m3.321 9.996c-1.1.201-2.02 1.028-2.358 2.121-.134.434-.134 1.246 0 1.68a3.093 3.093 0 0 0 2.047 2.047c.434.134 1.246.134 1.68 0a3.093 3.093 0 0 0 2.047-2.047c.133-.43.132-1.244-.002-1.68a3.082 3.082 0 0 0-2.025-2.04c-.314-.097-1.065-.141-1.389-.081'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSyrup);
export default ForwardRef;
