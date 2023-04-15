import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPress = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.407 1.285c-1.152.095-2.35.537-3.327 1.227-.485.342-1.222 1.079-1.57 1.568-.321.452-.741 1.277-.909 1.786-.248.751-.404 1.891-.315 2.304.119.555.828.756 1.234.35.17-.17.24-.402.24-.797 0-.678.308-1.713.709-2.381C8.445 3.717 10.124 2.76 12 2.76s3.555.957 4.531 2.582c.401.668.709 1.703.709 2.381 0 .128.02.326.044.439.121.563.827.767 1.236.358.21-.21.248-.41.197-1.044A6.616 6.616 0 0 0 16.76 3.24c-1.166-1.166-2.599-1.825-4.256-1.959a9.887 9.887 0 0 0-.6-.035c-.046.003-.27.02-.497.039'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPress);
export default ForwardRef;
