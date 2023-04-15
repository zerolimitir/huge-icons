import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPaperPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.371 3.061c-.888.192-1.532 1.016-1.531 1.957.001.526.157.903.578 1.398.297.349.435.596.522.932.087.333.087 2.971 0 3.304-.087.336-.225.583-.522.932-.421.495-.577.872-.578 1.398-.001.951.644 1.767 1.549 1.959.403.086 8.819.086 9.222 0 .905-.192 1.55-1.008 1.549-1.959-.001-.526-.157-.903-.578-1.398-.297-.349-.435-.596-.522-.932-.087-.333-.087-2.971 0-3.304.087-.336.225-.583.522-.932.421-.495.577-.872.578-1.398.001-.951-.644-1.767-1.549-1.959-.389-.083-8.86-.081-9.24.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPaperPin);
export default ForwardRef;
