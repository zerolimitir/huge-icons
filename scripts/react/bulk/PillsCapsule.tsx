import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPillsCapsule = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M6.58 2.047C5.707 2.214 5 3.087 5 4c0 .92.69 1.768 1.592 1.956.298.062 10.518.062 10.816 0C18.31 5.768 19 4.92 19 4c0-.932-.71-1.791-1.617-1.957-.306-.055-10.509-.052-10.803.004m4.891 8.992c-1.1.201-2.02 1.028-2.358 2.121-.134.434-.134 1.246 0 1.68a3.093 3.093 0 0 0 2.047 2.047c.434.134 1.246.134 1.68 0a3.093 3.093 0 0 0 2.047-2.047c.133-.43.132-1.244-.002-1.68a3.082 3.082 0 0 0-2.025-2.04c-.314-.097-1.065-.141-1.389-.081'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPillsCapsule);
export default ForwardRef;
