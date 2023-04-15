import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgLayoutTwoHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12 12v10.003l3.31-.012 3.31-.012.391-.107a4.007 4.007 0 0 0 2.907-3.102c.083-.407.083-.457.073-6.9l-.011-6.49-.106-.385c-.263-.95-.83-1.756-1.605-2.283a5.076 5.076 0 0 0-1.311-.599c-.335-.088-.37-.089-3.648-.103L12 1.997V12'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutTwoHorizontal);
export default ForwardRef;
