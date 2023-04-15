import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M2 9v2h20V7H2v2m16.438 5.075a1.984 1.984 0 0 0-.872.542A1.91 1.91 0 0 0 17 16c0 .535.184.986.566 1.383.254.265.523.431.87.539.236.073.237.072-.153.16-.837.19-1.636.808-2.156 1.669-.148.245-.158.396-.044.649.11.242.257.391.497.505l.2.094 2.163.001c2.475 0 2.448.003 2.754-.303.17-.17.303-.458.303-.655 0-.036-.109-.232-.242-.438-.416-.644-1.011-1.15-1.638-1.394-.2-.078-.284-.102-.66-.19-.116-.027-.113-.03.102-.097.35-.109.618-.275.872-.54A1.91 1.91 0 0 0 21 16c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011M5.58 16.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardUser);
export default ForwardRef;
