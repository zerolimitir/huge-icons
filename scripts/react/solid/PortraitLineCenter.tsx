import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPortraitLineCenter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.503 3.041c-1.02.176-1.947.935-2.301 1.884-.197.527-.201.594-.201 3.543L7 11.237l-2.113.011-2.113.012-.169.112c-.294.194-.413.501-.324.832.059.218.288.453.5.511.106.03.831.045 2.189.045H7v2.762c0 2.33.01 2.808.062 3.059a2.993 2.993 0 0 0 2.357 2.357c.44.091 4.722.091 5.162 0a3.003 3.003 0 0 0 2.357-2.357c.052-.251.062-.729.062-3.059V12.76h2.03c1.358 0 2.083-.015 2.189-.045.212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.113-.012L17 11.237v-2.76c0-3.012-.003-3.062-.234-3.628a2.99 2.99 0 0 0-1.47-1.537c-.622-.299-.483-.286-3.176-.296-1.331-.005-2.509.007-2.617.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPortraitLineCenter);
export default ForwardRef;
