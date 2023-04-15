import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicQuaverThin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.86 12.043a5.016 5.016 0 0 0-3.669 2.444 5.255 5.255 0 0 0-.543 1.31c-.095.354-.103.446-.103 1.203 0 .757.008.849.103 1.203.49 1.809 1.804 3.145 3.559 3.618a4.998 4.998 0 0 0 5.724-2.528c.387-.75.553-1.453.554-2.353a4.213 4.213 0 0 0-.247-1.549c-.402-1.21-1.339-2.276-2.526-2.875A5.891 5.891 0 0 0 9.46 12.1c-.389-.08-1.218-.109-1.6-.057'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaverThin);
export default ForwardRef;
