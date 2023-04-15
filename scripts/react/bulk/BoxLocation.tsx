import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBoxLocation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8 5.912v3.912l.104.208c.233.468.735.671 1.239.502.17-.058.331-.198 1.177-1.033C11.567 8.47 11.608 8.44 12 8.44c.392 0 .433.03 1.48 1.061.846.835 1.007.975 1.177 1.033.504.169 1.006-.034 1.239-.502L16 9.824V2H8v3.912m10.11 8.167c-1.016.215-1.71.862-1.997 1.863-.078.272-.091.41-.091.958.001.585.01.671.112 1 .293.951 1.148 2.3 2.092 3.3.299.318.413.39.664.425.317.043.498-.039.832-.378.648-.657 1.441-1.767 1.819-2.547.318-.654.426-1.054.448-1.66.058-1.593-.713-2.673-2.118-2.962a5.105 5.105 0 0 0-1.761.001m1.326 2.039a.988.988 0 0 1 .259 1.577.988.988 0 0 1-1.39 0 .987.987 0 0 1 0-1.389.986.986 0 0 1 1.131-.188'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBoxLocation);
export default ForwardRef;
