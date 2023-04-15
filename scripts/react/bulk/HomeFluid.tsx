import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeFluid = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.183 9.77c-1.355 1.358-2.133 2.468-2.499 3.57-.317.955-.245 1.92.214 2.84C9.459 17.306 10.642 18 12 18c1.857 0 3.241-1.225 3.481-3.08.165-1.283-.426-2.651-1.872-4.325C13.217 10.141 12.062 9 11.994 9c-.023 0-.388.347-.811.77'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeFluid);
export default ForwardRef;
