import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCloudRainMid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.208 16.297c-.547.576-.94 1.166-1.097 1.647-.124.381-.12.899.009 1.234.121.314.387.58.702.703.343.135 1.013.135 1.356 0 .819-.32 1.061-1.421.522-2.384a6.819 6.819 0 0 0-.913-1.204l-.289-.301-.29.305m7 0a6.83 6.83 0 0 0-.908 1.2c-.539.963-.297 2.064.522 2.384.343.135 1.013.135 1.356 0 .819-.32 1.061-1.421.522-2.384a6.819 6.819 0 0 0-.913-1.204l-.289-.301-.29.305'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudRainMid);
export default ForwardRef;
