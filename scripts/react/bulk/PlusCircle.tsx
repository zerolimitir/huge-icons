import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgPlusCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.316a.734.734 0 0 0-.398.413c-.053.126-.062.403-.062 1.83v1.681l-1.69.001c-1.557.001-1.703.007-1.85.075a.745.745 0 0 0 .029 1.382c.126.053.403.062 1.83.062h1.681l.001 1.69c.001 1.557.007 1.703.075 1.85a.743.743 0 0 0 1.368 0c.068-.147.074-.293.075-1.85l.001-1.69 1.69-.001c1.557-.001 1.703-.007 1.85-.075a.745.745 0 0 0-.029-1.382c-.126-.053-.403-.062-1.83-.062H12.76l-.001-1.69c-.001-1.557-.007-1.703-.075-1.85-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPlusCircle);
export default ForwardRef;
