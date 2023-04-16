import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPackagingMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M7.353 2.042a4.255 4.255 0 0 0-2.13 1.003c-.165.146-2.206 2.651-2.497 3.065l-.091.13h18.729l-.119-.17a80.828 80.828 0 0 0-1.212-1.53c-.91-1.131-1.15-1.405-1.433-1.633a4.855 4.855 0 0 0-1.56-.793l-.34-.092-4.56-.007c-2.508-.004-4.662.009-4.787.027M2.021 8.01c-.014.138-.02 2.59-.012 5.45l.013 5.2.11.378c.441 1.507 1.585 2.572 3.094 2.879.401.082.494.083 6.774.083s6.373-.001 6.774-.083c1.517-.309 2.683-1.403 3.098-2.905l.108-.392.012-5.18c.007-2.849.001-5.292-.013-5.43l-.025-.25H2.046l-.025.25m13.367 5.357a.7.7 0 0 1 .345.64c0 .196-.019.264-.117.402-.064.092-.18.204-.257.249-.137.081-.186.082-3.359.082s-3.222-.001-3.359-.082a1.003 1.003 0 0 1-.257-.249c-.286-.406-.054-1.014.431-1.131.069-.017 1.539-.028 3.268-.024l3.143.006.162.107'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingMinus);
export default ForwardRef;