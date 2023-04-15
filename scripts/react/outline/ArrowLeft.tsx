import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M9.9 7.259a1.795 1.795 0 0 1-.16.04c-.089.02-.656.561-2.212 2.114-1.151 1.148-2.13 2.148-2.177 2.223-.06.096-.084.2-.084.364 0 .164.024.268.084.364.047.075 1.026 1.075 2.177 2.222 2.007 2.001 2.1 2.087 2.282 2.125.58.12 1.021-.321.901-.901-.038-.18-.112-.262-1.464-1.62l-1.424-1.43h5.066c3.549 0 5.129-.013 5.273-.044.742-.159.762-1.245.027-1.43-.135-.034-1.549-.046-5.275-.046H7.823l1.424-1.43c1.356-1.361 1.426-1.439 1.464-1.621.071-.342-.053-.659-.322-.822-.124-.075-.406-.138-.489-.108'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
export default ForwardRef;
