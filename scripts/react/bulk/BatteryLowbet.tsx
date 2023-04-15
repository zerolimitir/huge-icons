import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBatteryLowbet = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.807 1.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.283.06 4.041.06 4.324 0 .758-.163.758-1.269 0-1.432-.259-.055-4.104-.053-4.355.003m-7 1.001c-.375.083-.605.482-.518.902.038.182.119.27 1.875 2.031L6 7.062v6.567c0 4.64.013 6.629.044 6.779.157.75.798 1.391 1.548 1.548.297.062 8.519.062 8.816 0a2.062 2.062 0 0 0 1.548-1.548c.024-.117.044-.467.044-.779v-.567l1.31 1.304c1.407 1.402 1.436 1.424 1.795 1.383a.738.738 0 0 0 .578-1.049c-.052-.112-2.824-2.907-9.189-9.266C4.672 3.618 3.36 2.324 3.24 2.301l-.2-.039a.841.841 0 0 0-.233.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryLowbet);
export default ForwardRef;
