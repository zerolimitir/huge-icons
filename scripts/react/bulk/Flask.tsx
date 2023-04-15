import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlask = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.807 1.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.287.061 6.037.061 6.324 0 .758-.163.758-1.269 0-1.432-.263-.056-6.101-.054-6.355.003M5.227 13.23a6.821 6.821 0 0 0-.215 1.495c-.14 3.277 2.081 6.259 5.248 7.048.695.173.968.206 1.74.206s1.045-.033 1.74-.206c2.445-.609 4.424-2.588 5.033-5.033.177-.712.207-.966.205-1.76-.001-.77-.05-1.185-.205-1.742L18.707 13H5.291l-.064.23'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlask);
export default ForwardRef;
