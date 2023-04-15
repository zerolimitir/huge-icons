import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSongRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 7.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.29.062 11.034.062 11.324 0 .758-.163.758-1.269 0-1.432-.267-.057-11.098-.054-11.355.003m11.136 4.754c-1.76.278-3.106 1.601-3.384 3.328-.069.429-.031 1.24.077 1.651a4.073 4.073 0 0 0 1.002 1.753c.504.529 1.14.9 1.882 1.098.326.087.465.101.98.101.515 0 .654-.014.98-.101a3.975 3.975 0 0 0 1.882-1.098c.349-.366.54-.644.759-1.101.253-.529.326-.872.347-1.612.016-.59.01-.671-.085-1.039a3.99 3.99 0 0 0-3.743-3.001 4.885 4.885 0 0 0-.697.021'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSongRight);
export default ForwardRef;
