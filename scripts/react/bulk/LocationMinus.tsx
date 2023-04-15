import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLocationMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.14 6.063c-1.123.198-2.115.762-2.913 1.657-1.638 1.834-1.638 4.726 0 6.56C9.237 15.413 10.526 16 12 16c1.355 0 2.555-.498 3.527-1.464A4.883 4.883 0 0 0 17 11a4.873 4.873 0 0 0-1.468-3.529c-.622-.616-1.174-.962-1.952-1.222-.725-.242-1.698-.316-2.44-.186m3.233 4.292c.241.15.36.364.36.645a.715.715 0 0 1-.36.645l-.153.095H9.78l-.153-.095c-.462-.287-.493-.942-.06-1.25a.876.876 0 0 1 .248-.118c.069-.017 1.088-.027 2.265-.024l2.14.007.153.095'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationMinus);
export default ForwardRef;
