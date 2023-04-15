import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMaximizeRectangleDoted = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316a.745.745 0 0 0 .029 1.382c.126.053.4.062 1.8.062h1.651l-2.461 2.461-2.461 2.461-.319-.182a4.208 4.208 0 0 0-1.362-.46c-.219-.032-.78-.041-1.76-.03-1.639.02-1.799.044-2.48.366-1.134.538-1.871 1.41-2.208 2.613l-.109.391v3.24l.111.397c.421 1.509 1.576 2.591 3.095 2.9.364.074.549.083 1.774.083 1.521 0 1.863-.039 2.48-.285a4.062 4.062 0 0 0 2.39-2.703c.104-.384.106-.423.121-1.832.01-.961-.001-1.546-.032-1.76a4.19 4.19 0 0 0-.459-1.359l-.182-.319 2.461-2.461L16.24 8.82l.001 1.66c.001 1.528.007 1.673.075 1.82a.745.745 0 0 0 1.382-.029c.054-.129.062-.494.062-2.771s-.008-2.642-.062-2.771a.734.734 0 0 0-.398-.413c-.15-.07-.318-.074-2.8-.074-2.482 0-2.65.004-2.8.074'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMaximizeRectangleDoted);
export default ForwardRef;
