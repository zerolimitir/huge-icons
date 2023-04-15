import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMoneyArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.58 7.095A.976.976 0 0 0 5.002 8c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m5.858 2.98a1.984 1.984 0 0 0-.872.542c-.78.813-.759 2.04.05 2.816.814.781 2.04.76 2.817-.049A1.91 1.91 0 0 0 14 12c0-.895-.597-1.678-1.477-1.936a2.275 2.275 0 0 0-1.085.011m8.074 3.242a2.54 2.54 0 0 0-.42.185c-.214.125-1.611 1.482-1.739 1.69-.393.636.233 1.39.918 1.106.083-.034.33-.241.559-.469l.41-.408v2.268c0 1.505.015 2.336.044 2.473.163.758 1.269.758 1.432 0 .029-.137.044-.968.044-2.472v-2.265l.43.422c.295.29.478.438.584.472.297.096.683-.04.864-.304.125-.183.156-.511.066-.699-.09-.189-1.52-1.643-1.764-1.795-.435-.27-.979-.347-1.428-.204'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyArrowUp);
export default ForwardRef;
