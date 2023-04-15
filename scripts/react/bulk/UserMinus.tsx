import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.42 3.044c-.802.115-1.652.544-2.242 1.134a3.996 3.996 0 0 0 0 5.644 3.997 3.997 0 0 0 5.644 0 3.997 3.997 0 0 0 0-5.644A4.036 4.036 0 0 0 9.42 3.044m7.391 7.234a.763.763 0 0 0-.551.607c-.063.335.19.739.521.83.22.062 4.218.062 4.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-2.143-.007c-1.179-.003-2.201.008-2.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserMinus);
export default ForwardRef;
