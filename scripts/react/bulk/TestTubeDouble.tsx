import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTestTubeDouble = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M4.807 2.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.285.061 5.039.061 5.324 0 .758-.163.758-1.269 0-1.432-.262-.056-5.102-.053-5.355.003m9 0a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.285.061 5.039.061 5.324 0 .758-.163.758-1.269 0-1.432-.262-.056-5.102-.053-5.355.003M5.481 12.59c0 3.924-.004 3.85.234 4.32.735 1.452 2.835 1.452 3.57 0 .238-.47.234-.396.234-4.32L9.52 9H5.48l.001 3.59m9 0c0 3.924-.004 3.85.234 4.32.155.306.411.59.702.778a2.01 2.01 0 0 0 2.868-.778c.238-.47.234-.396.234-4.32L18.52 9h-4.04l.001 3.59'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeDouble);
export default ForwardRef;
