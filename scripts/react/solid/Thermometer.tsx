import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgThermometer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.591 3.039c-.455.083-.91.285-1.291.574-.37.28-6.792 6.736-6.912 6.947-.161.286-.224.53-.345 1.354-.17 1.153-.148 1.117-1.478 2.457l-1.063 1.071L7.53 16.47l1.028 1.028 1.071-1.063c1.34-1.33 1.304-1.308 2.457-1.478.824-.121 1.068-.184 1.354-.345.198-.112 6.647-6.518 6.938-6.892.214-.276.387-.616.508-1.001.135-.429.135-1.168 0-1.599-.307-.984-1.056-1.731-2.006-2-.335-.095-.988-.136-1.289-.081M4.331 17.61c-1.28 1.284-1.311 1.329-1.311 1.931 0 .326.012.386.13.625.154.313.405.559.723.708.193.09.281.106.588.106.6 0 .672-.05 1.959-1.338l1.079-1.082-1.019-1.02a35.956 35.956 0 0 0-1.041-1.02c-.011 0-.51.491-1.108 1.09'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgThermometer);
export default ForwardRef;
