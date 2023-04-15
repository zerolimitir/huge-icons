import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHorizontalEqualizer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M1.807 6.287a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.288.062 7.036.062 7.324 0 .758-.163.758-1.269 0-1.432-.264-.057-7.1-.054-7.355.003m17.171.004c-.011.029-.015.366-.009.75l.011.699 1.48.011c.966.007 1.554-.005 1.694-.034.765-.158.772-1.269.008-1.433-.313-.067-3.158-.06-3.184.007M1.807 18.287c-.532.12-.722.838-.326 1.234.228.228.352.242 2.059.23l1.48-.011v-1.48l-1.52-.006c-.863-.003-1.595.011-1.693.033m13 0a.735.735 0 0 0-.518.529c-.092.43.142.813.549.9.288.062 7.036.062 7.324 0 .758-.163.758-1.269 0-1.432-.264-.057-7.1-.054-7.355.003'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHorizontalEqualizer);
export default ForwardRef;
