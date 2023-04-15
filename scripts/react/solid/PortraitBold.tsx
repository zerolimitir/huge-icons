import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortraitBold = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.033 3.04c-1.378.241-2.353 1.278-2.512 2.67-.055.475-.055 12.105 0 12.58.144 1.26.936 2.212 2.16 2.596.297.093.311.094 2.319.094s2.022-.001 2.319-.094c1.224-.384 2.016-1.336 2.16-2.596.055-.475.055-12.105 0-12.58-.144-1.261-.951-2.229-2.165-2.597-.284-.086-.359-.089-2.194-.097-1.045-.005-1.984.006-2.087.024M4.58 7.047c-.721.138-1.381.801-1.536 1.545-.061.295-.061 6.521 0 6.816.157.75.798 1.391 1.548 1.548.117.024.481.044.81.044H6V7l-.61.004c-.336.003-.7.022-.81.043M18 12v5h.598c.329 0 .693-.02.81-.044a2.062 2.062 0 0 0 1.548-1.548c.03-.144.044-1.229.044-3.408s-.014-3.264-.044-3.408c-.159-.762-.818-1.411-1.573-1.549a6.518 6.518 0 0 0-.81-.043H18v5'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitBold);
export default ForwardRef;
