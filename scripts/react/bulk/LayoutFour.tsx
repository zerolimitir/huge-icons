import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutFour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 7v5H1.997l.013 3.33.013 3.33.11.378c.438 1.505 1.584 2.572 3.093 2.879.391.08.529.083 3.59.083H12V12h10V8.909c0-1.902-.016-3.219-.042-3.423-.221-1.764-1.64-3.196-3.413-3.443-.201-.028-1.41-.043-3.428-.043H12v5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutFour);
export default ForwardRef;
