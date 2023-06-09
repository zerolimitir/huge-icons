import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlag = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M3.46 2.076c-.203.094-.371.272-.421.447-.055.191-.053 18.765.002 18.962.061.219.343.462.579.497a.745.745 0 0 0 .856-.582c.03-.139.044-1.346.044-3.802V14h11.437l.23-.086a1.33 1.33 0 0 0 .727-.727c.086-.23.086-.231.086-4.307 0-2.821-.014-4.141-.044-4.288-.159-.762-.818-1.411-1.573-1.549C15.22 3.014 13.478 3 9.842 3H4.538l-.044-.28c-.053-.334-.185-.533-.429-.643a.681.681 0 0 0-.605-.001m15.011 8.094-.011 3.17-.107.293c-.159.436-.336.709-.693 1.068-.252.254-.392.358-.66.489-.663.326-.299.305-5.43.32L7 15.523v.336c0 .186.02.432.044.549.157.75.798 1.391 1.548 1.548.298.062 10.518.062 10.816 0a2.062 2.062 0 0 0 1.548-1.548c.03-.146.044-1.364.044-3.908 0-2.544-.014-3.762-.044-3.908-.159-.762-.818-1.411-1.573-1.549A4.041 4.041 0 0 0 18.814 7h-.332l-.011 3.17'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlag);
export default ForwardRef;
