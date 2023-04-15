import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatNotification = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.42 2.044a4.614 4.614 0 0 0-1.199.386 4.08 4.08 0 0 0-2.11 2.59c-.114.415-.141 1.268-.053 1.702.175.862.553 1.567 1.153 2.145.5.483 1.023.784 1.729.999.334.102.411.11 1.06.11s.726-.008 1.06-.11c1.151-.35 1.986-1.044 2.51-2.086a3.997 3.997 0 0 0-.748-4.602 4.036 4.036 0 0 0-3.402-1.134'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatNotification);
export default ForwardRef;
