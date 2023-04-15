import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTornado = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.807 7.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.291.062 14.033.062 14.324 0 .758-.163.758-1.269 0-1.432-.268-.057-14.097-.054-14.355.003m0 8a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.287.061 6.037.061 6.324 0 .758-.163.758-1.269 0-1.432-.263-.056-6.101-.054-6.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTornado);
export default ForwardRef;
