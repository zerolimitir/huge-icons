import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSongLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.943 12.041c-1.76.278-3.106 1.601-3.384 3.328-.069.429-.031 1.24.077 1.651a4.073 4.073 0 0 0 1.002 1.753c.504.529 1.14.9 1.882 1.098.326.087.465.101.98.101.515 0 .654-.014.98-.101a3.975 3.975 0 0 0 1.882-1.098 3.913 3.913 0 0 0 1.113-2.449c.211-2.261-1.538-4.224-3.835-4.304a4.885 4.885 0 0 0-.697.021m7.777 2.764a.923.923 0 0 0-.389.374c-.081.154-.08.489.001.646.09.174.323.367.477.395.072.013 2.006.018 4.297.012l4.167-.012.153-.124c.219-.177.305-.344.305-.59a.75.75 0 0 0-.464-.703c-.15-.057-8.404-.055-8.547.002'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongLeft);
export default ForwardRef;
